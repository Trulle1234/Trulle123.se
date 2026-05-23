import { parseMarkleft } from "$lib/markleft-parser";

export const prerender = true;

export function entries() {
	return [{ slug: "en" }, { slug: "sv" }];
}

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

export type BlogListItem = [
    link: string,
    title: string,
    date: string,
    desc: string,
    img: string,
    html: string
];

export async function load() {
    const files = import.meta.glob("$lib/blog-posts/*.markl", {
        query: "?raw",
        import: "default",
        eager: true
    }) as Record<string, string>;

    const blogList: BlogListItem[] = Object.entries(files).map(([path, raw]) => {
        const post = parseMarkleft(raw) as ParsedPost;

        const filename = path.split("/").pop() ?? "blog.markl";
        const id = filename.replace(".markl", "");

        return [
            `/blog/${id}`,
            post.metadata.title ?? id,
            post.metadata.date ?? "",
            post.metadata.desc ?? "",
            post.metadata.img ?? "",
            post.html ?? ""
        ];
    });

    return {
        blogList
    };
}