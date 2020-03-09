import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test styles
 */
export const test = () => {
	equals(Component1(), `<button style="display: none;">Click Me!</button>`);
	equals(Component2(), `<div style="border: solid 2px black;"><h1 style="font-size: 20px;">Title</h1></div>`);
	equals(Component3(), `<body style="margin: 0px;"><header style="z-index: 100; height: 100px;"></header></body>`);
};

const Component1 = () => (
	<button style={{ display: "none" }}>
		Click Me!
	</button>
);

const Component2 = () => (
	<div style={{ border: "solid 2px black" }}>
		<h1 style={{ fontSize: 20 }}>Title</h1>
	</div>
);

const Component3 = () => (
	<body style={{ margin: 0 }}>
		<header style={{ zIndex: 100, height: 100 }}></header>
	</body>
);
