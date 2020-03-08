import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test various data types
 */
export const test = () => {
	equals(ArrayComponent(), "abc");
	equals(EmptyComponent(), "");
	equals(EmptyWithChildrenComponent(), "a");
	equals(UndefinedComponent(), "");
	equals(NullComponent(), "");
	equals(Number0Component(), "0");
	equals(Number1Component(), "1");
	equals(EmptyStringComponent(), "");
	equals(StringComponent(), "The quick brown fox jumps over the lazy dog");
	equals(TrueComponent(), "true");
	equals(FalseComponent(), "false");
};

const EmptyComponent = () => <></>;

const EmptyWithChildrenComponent = () => <>a</>;

const ArrayComponent = () => (
	<>
		{[
			"a",
			"b",
			"c",
		]}
	</>
);

const UndefinedComponent = () => (
	<>{undefined}</>
);

const NullComponent = () => (
	<>{null}</>
);

const Number0Component = () => (
	<>{0}</>
);

const Number1Component = () => (
	<>{1}</>
);

const EmptyStringComponent = () => (
	<>{""}</>
);

const StringComponent = () => (
	<>{"The quick brown fox jumps over the lazy dog"}</>
);

const TrueComponent = () => (
	<>{true}</>
);

const FalseComponent = () => (
	<>{false}</>
);
