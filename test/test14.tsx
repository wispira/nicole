import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test custom element
 * Custom void elements not supported yet
 */
export const test = () => {
	equals(Component(), `<foo test1="42"><bar test3></bar></foo>`);
};

declare global {
	namespace JSX {
		interface IntrinsicElements {
            foo: {
				test1: number;
				test2?: string;
			};
        	bar: {
				test3: boolean;
			};
        }
	}
}

const Component = () => (
	<foo test1={42}>
		<bar test3 />
	</foo>
);
