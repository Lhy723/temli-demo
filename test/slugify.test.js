import assert from "node:assert/strict";
import test from "node:test";
import { slugify } from "../src/slugify.js";

test("lowercases and joins words with dashes", () => {
	assert.equal(slugify("Hello, World!"), "hello-world");
});

test("strips diacritics", () => {
	assert.equal(slugify("  Café au lait  "), "cafe-au-lait");
});

test("keeps CJK characters", () => {
	assert.equal(slugify("你好，世界"), "你好-世界");
});

test("collapses punctuation runs and trims edges", () => {
	assert.equal(slugify("---a  b__c---"), "a-b-c");
});

test("returns empty string for empty input", () => {
	assert.equal(slugify(""), "");
	assert.equal(slugify(null), "");
	assert.equal(slugify(undefined), "");
});

test("truncates to 64 characters without trailing dash", () => {
	const out = slugify(`${"a".repeat(63)} b`);
	assert.equal(out.length, 63);
	assert.equal(out, "a".repeat(63));
});
