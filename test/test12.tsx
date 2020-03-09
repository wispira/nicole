import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test className
 */
export const test = () => {
	equals(Component1(), `<div class="test"></div>`);
	equals(Component2(), `<div class="foo baz qux"></div>`);
	equals(Component3(), `<div class="foo bar"></div>`);
};

const Component1 = () => (
	<div className="test"></div>
);

const Component2 = () => (
	<div className={[
		"foo",
		false && "bar",
		"baz",
		"qux",
	]}></div>
);

const Component3 = () => (
	<div className={{
		foo: true,
		bar: 1,
		baz: false,
		qux: null,
	}}></div>
);
