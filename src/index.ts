import * as classNames from "classnames";
import { HtmlElements, HtmlAttributes, CssProperties } from "./elements";
import { voidElements } from "./void-elements";
import { nonPixelStyleProperties } from "./non-pixel-style-properties";

declare global {
	namespace JSX {
		interface IntrinsicElements extends HtmlElements {
		}
		type Element = string;
		type ElementClass = React.Component;
	}
}

export namespace React {

	export interface FunctionComponent<P extends Props = Props> {
		(props: Readonly<P>): JSX.Element;
	}

	export type FC<P extends Props = Props> = FunctionComponent<P>;

	export abstract class Component<P extends Props = Props> {
		
		public constructor(
			protected props: Readonly<P>,
		) {
		}
		
		public abstract render(): JSX.Element;
	}

	export interface Props {
		children?: Children;
	}

	type Child = JSX.Element | Children;

	type Children = Child[];

	type CEType = string | FunctionComponent | typeof Component | undefined;

	type CEProps = {
		[key: string]: any;
	};

	export const createElement = (type: CEType, ceprops?: CEProps, ...children: Children) => {
		// console.log(type, ceprops, children);
		let result = "";
		if(type === undefined) {
			result = renderFragment(children);
		}
		if(typeof type === "string") {
			result = renderHtmlElement(
				type,
				ceprops,
				children,
			);
		}
		if(typeof type === "function") {
			if(type.prototype) {
				result = renderClassComponent(
					// @ts-ignore
					type,
					ceprops,
					children,
				);
			} else {
				result = renderFunctionComponent(
					// @ts-ignore
					type,
					ceprops,
					children,
				);
			}
		}
		// console.log(result);
		return result;
	}

	const renderFragment = (children: Children) => {
		let result = "";
		if(children) {
			result = joinChildren(children);
		}
		return result;
	}

	const renderClassComponent = (
		componentClass: typeof Component,
		ceprops: CEProps | undefined,
		children: Children,
	) => {
		const props: Props = {
			...ceprops,
			children,
		};
		// @ts-ignore
		const component = new componentClass(props) as Component;
		const result = component.render();
		return result;
	}

	const renderFunctionComponent = (
		component: FunctionComponent,
		ceprops: CEProps | undefined,
		children: Children,
	) => {
		const props: Props = {
			...ceprops,
			children,
		};
		const result = component(props);
		return result;
	}

	const renderHtmlElement = (
		tagName: string,
		attributes: HtmlAttributes | undefined,
		children: Children,
	) => {
		let result = "<" + tagName;
		if(attributes) {
			result += " " + joinHtmlAttributes(attributes);
		}
		// @ts-ignore
		if(voidElements.has(tagName)) {
			if(children.length) {
				throw new Error("Void elements can't have children");
			}
			result += " />";
		} else {
			result += ">";
			result += joinChildren(children);
			result += "</" + tagName + ">";
		}
		return result;
	}

	const joinHtmlAttributes = (attributes: HtmlAttributes): string => {
		return Object.keys(attributes).map((name) => {
			// @ts-ignore
			let value = attributes[name];
			if(name === "className") {
				name = "class";
				value = classNames(value);
			}
			if(name === "style") {
				value = joinHtmlStyles(value);
			}
			name = name.toLowerCase();
			if(typeof value === "boolean") {
				return name;
			} else {
				return `${name}="${value}"`;
			}
		}).join(" ");
	}

	const joinHtmlStyles = (styles: CssProperties): string => {
		return Object.keys(styles).map((name) => {
			// @ts-ignore
			let value = styles[name];
			if(typeof value === "number") {
				// @ts-ignore
				if(!nonPixelStyleProperties.has(name)) {
					value = value + "px";
				}
			}
			name = camelToKebab(name);
			return `${name}: ${value};`;
		}).join(" ");
	}

	const joinChildren = (children: Children): string => {
		return children.map((child) => {
			if(child instanceof Array) {
				child = joinChildren(child);
			}
			return child;
		}).join("");
	}

	const camelToKebab = (value: string) => {
		return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
	}

}