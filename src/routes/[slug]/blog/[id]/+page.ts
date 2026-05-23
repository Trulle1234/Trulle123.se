import { error } from "@sveltejs/kit";
import { parseMarkleft } from "$lib/markleft-parser";

type BlogMetadata = {
	title?: string;
	date?: string;
	desc?: string;
	img?: string;
};

type ParsedPost = {
	metadata: BlogMetadata;
	html: string;
};

const validSlugs = ["en", "sv"];

const files = import.meta.glob("$lib/blog-posts/*.markl", {
	query: "?raw",
	import: "default",
	eager: true
}) as Record<string, string>;

function getPostId(path: string) {
	const filename = path.split("/").pop() ?? "";
	return filename.replace(".markl", "");
}

export const prerender = true;

export function entries() {
	return Object.keys(files).flatMap((path) => {
		const id = getPostId(path);

		return validSlugs.map((slug) => ({
			slug,
			id
		}));
	});
}

export async function load({ params }) {
	if (!validSlugs.includes(params.slug)) {
		throw error(404, "Not found");
	}

	const match = Object.entries(files).find(([path]) => {
		return getPostId(path) === params.id;
	});

	if (!match) {
		throw error(404, "Post not found");
	}

	const [, raw] = match;
	const post = parseMarkleft(raw) as ParsedPost;

	return {
		post: {
			title: post.metadata.title ?? params.id,
			date: post.metadata.date ?? "",
			desc: post.metadata.desc ?? "",
			img: post.metadata.img ?? "",
			html: post.html
		}
	};
}