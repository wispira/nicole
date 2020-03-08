import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test invoking createElement directly
 */
export const test = () => {
	{
		const html = React.createElement("input");
		equals(html, `<input />`);
	}
	{
		const html = React.createElement("p");
		equals(html, `<p></p>`);
	}
	{
		const html = React.createElement("span", {
			id: "abc",
		}, "Hello, World!");
		equals(html, `<span id="abc">Hello, World!</span>`);
	}
	{
		const html = React.createElement(() => (
			<strong>STAY STRONG</strong>
		));
		equals(html, `<strong>STAY STRONG</strong>`);
	}
};
