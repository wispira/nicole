import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test empty
 */
export const test = () => {
	equals(Component1(), `<div></div>`);
	equals(Component2(), `<hr />`);
};

const Component1 = () => (
	<div></div>
);

const Component2 = () => (
	<hr />
);
