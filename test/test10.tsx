import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test style tag
 */
export const test = () => {
	equals(Component(), `<style>* {display: none;}</style>`);
};

const Component = () => (
	<style>
		{`* {display: none;}`}
	</style>
);
