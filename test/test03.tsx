import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test nested stray text
 */
export const test = () => {
	equals(Component(), `<p><strong>Very</strong>important text.</p>`);
};

const Component = () => (
	<p>
		<strong>Very</strong>
		important text.
	</p>
);
