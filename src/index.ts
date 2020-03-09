import * as classNames from "classnames";
import { HtmlElements, HtmlAttributes, CssProperties } from "./elements";
import { voidElements } from "./void-elements";
import { nonPixelStyleProperties } from "./non-pixel-style-properties";

declare global {
	namespace JSX {
		type IntrinsicElements = HtmlElements;
	}
}

export namespace React {

	export interface Component<P extends Props = Props> {
		(props: Readonly<P>): any;
	}

	export interface Props {
		children?: Children;
	}

	type Child = string | Children;

	type Children = Child[];

	type CEType = string | Component | undefined;

	type CEProps = {
		[key: string]: any;
	};

	export const createElement = (type: CEType, props?: CEProps, ...children: Children) => {
		// console.log(type, props, children);
		let result = "";
		if(!type) {
			if(children) {
				result = joinChildren(children);
			}
		}
		if(typeof type === "string") {
			result = createHtmlElement(type, props, children);
		}
		if(typeof type === "function") {
			const component = type;
			result = component({
				...props,
				children,
			});
		}
		// console.log(result);
		return result;
	}

	const createHtmlElement = (tagName: string, props: HtmlAttributes | undefined, children: Children) => {
		let result = "";
		result += "<" + tagName;
		if(props) {
			result += " " + joinHtmlAttributes(props);
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