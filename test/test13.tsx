import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test class component
 */
export const test = () => {
    equals(<Component text="Test" />, `<h1>Test</h1>`);
};

interface Props extends React.Props {
    text: string;
}

class Component extends React.Component<Props> {

    public render() {
        const { text } = this.props;
        return (
            <h1>{text}</h1>
        );
    }

}