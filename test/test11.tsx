import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test ARIA
 */
export const test = () => {
	equals(Component(), `<span role="checkbox" aria-checked aria-labelledby="option_1" tabindex="0"></span>`);
};

const Component = () => (
	<span role="checkbox" aria-checked={true} aria-labelledby="option_1" tabIndex={0}></span>
);
