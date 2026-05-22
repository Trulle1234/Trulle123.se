import { error } from "@sveltejs/kit";

export function load({ params }) {
    const validSlugs = ["en", "sv"];

    if (!validSlugs.includes(params.slug)) {
        throw error(404, "Not found");
    }

    return {
        slug: params.slug
    };
}