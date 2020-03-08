import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test event attributes
 */
export const test = () => {
	equals(Component1(), `<button onclick="console.log"></button>`);
	equals(Component2(), `<input oninput="console.log" />`);
};

const Component1 = () => (
	<button onClick="console.log"></button>
);

const Component2 = () => (
	<input onInput="console.log" />
);
