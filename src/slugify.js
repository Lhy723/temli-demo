export function slugify(input) {
	const normalized = String(input ?? "")
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "");
	return normalized
		.toLowerCase()
		.replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 64)
		.replace(/-+$/g, "");
}
