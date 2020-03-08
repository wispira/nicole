import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test custom component
 */
export const test = () => {
	equals(Page({}), `<html><head><title>Page</title></head><body><h1>Page</h1><p>Test</p></body></html>`);
};

interface Props extends React.Props {
	title: string;
}

const Layout: React.Component<Props> = (props) => {
	return (
		<html>
			<head>
				<title>{props.title}</title>
			</head>
				<body>
					<h1>{props.title}</h1>
					{props.children}
			</body>
		</html>
	);
};

const Page: React.Component = () => (
	<Layout title="Page">
		<p>Test</p>
	</Layout>
);
