import assert from "node:assert/strict";
import test from "node:test";
import { greet } from "../src/greet.js";

test("greets by name", () => {
	assert.equal(greet("Ada"), "Hello, Ada!");
});

test("handles an empty name", () => {
	assert.equal(greet(""), "Hello, !");
});
