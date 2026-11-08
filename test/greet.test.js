import assert from "node:assert/strict";
import test from "node:test";
import { greet } from "../src/greet.js";

test("greets a name", () => {
	assert.equal(greet("World"), "Hello, World!");
});

test("greets empty string", () => {
	assert.equal(greet(""), "Hello, !");
});
