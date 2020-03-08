import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test mapping over data
 */
export const test = () => {
	equals(Component(), `<ul><li>Doug</li><li>Justine</li><li>Pat</li></ul>`);
};

const people = [
	{
		name: "Doug",
	},
	{
		name: "Justine",
	},
	{
		name: "Pat",
	},
];

const Component = () => (
	<ul>
		{people.map((person) => (
			<li>{person.name}</li>
		))}
	</ul>
);
