import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test leave empty attributes
 */
export const test = () => {
	equals(Component(), `<div class=""><img src="" style="" /></div>`);
};

const Component = () => (
	<div className="">
		<img src="" style={{}} />
	</div>
);
