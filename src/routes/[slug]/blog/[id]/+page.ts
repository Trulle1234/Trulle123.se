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

export async function load({ params }) {
    const files = import.meta.glob("$lib/blog-posts/*.markl", {
        query: "?raw",
        import: "default",
        eager: true
    }) as Record<string, string>;

    const match = Object.entries(files).find(([path]) => {
        const filename = path.split("/").pop() ?? "";
        const id = filename.replace(".markl", "");

        return id === params.id;
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