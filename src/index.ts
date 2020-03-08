import { HtmlElements, HtmlAttributes, CSSProperties } from "./elements";

declare global {
	namespace JSX {
		type IntrinsicElements = HtmlElements;
	}
}

const voidElements = new Set<keyof HtmlElements>([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr",
]);

const styleNonPixelAttribute = new Set<keyof CSSProperties>([
	"borderImageOutset",
	"borderImageSlice",
	"borderImageWidth",
	"boxFlex",
	"boxFlexGroup",
	"boxOrdinalGroup",
	"columnCount",
	"columns",
	"flex",
	"flexGrow",
	"flexShrink",
	"gridArea",
	"gridRow",
	"gridRowEnd",
	"gridRowStart",
	"gridColumn",
	"gridColumnEnd",
	"gridColumnStart",
	"fontWeight",
	"lineClamp",
	"lineHeight",
	"opacity",
	"order",
	"orphans",
	"tabSize",
	"widows",
	"zIndex",
	"zoom",
]);

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
			}
			name = name.toLowerCase();
			if(typeof value === "boolean") {
				return name;
			} else {
				if(name === "style") {
					value = joinHtmlStyles(value);
				}
				return `${name}="${value}"`;
			}
		}).join(" ");
	}

	const joinHtmlStyles = (styles: CSSProperties): string => {
		return Object.keys(styles).map((name) => {
			// @ts-ignore
			let value = styles[name];
			if(typeof value === "number") {
				// @ts-ignore
				if(!styleNonPixelAttribute.has(name)) {
					value = value + "px";
				}
			}
			name = camelToKebab(name);
			return `${name}: ${value}`;
		}).join("; ");
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