// Label Normalizer
// A reusable utility that normalizes any label into a consistent, URL-safe slug
// prefixed with "js-basic-".

const normalizeLabel = (label) => {
    const slug = label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");
    return `js-basic-${slug}`;
};

console.log(normalizeLabel("  Hello   World  "));
console.log(normalizeLabel("Login Test Case"));
console.log(normalizeLabel("API--Response!!Check"));
console.log(normalizeLabel("   Multiple   Spaces & Symbols @#$   "));
console.log(normalizeLabel("already-normalized"));
