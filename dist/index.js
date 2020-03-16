"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classNames = require("classnames");
const void_elements_1 = require("./void-elements");
const non_pixel_style_properties_1 = require("./non-pixel-style-properties");
var React;
(function (React) {
    class Component {
        constructor(props) {
            this.props = props;
        }
    }
    React.Component = Component;
    React.createElement = (type, ceprops, ...children) => {
        // console.log(type, ceprops, children);
        let result = "";
        if (type === undefined) {
            result = renderFragment(children);
        }
        if (typeof type === "string") {
            result = renderHtmlElement(type, ceprops, children);
        }
        if (typeof type === "function") {
            if (type.prototype) {
                result = renderClassComponent(
                // @ts-ignore
                type, ceprops, children);
            }
            else {
                result = renderFunctionComponent(
                // @ts-ignore
                type, ceprops, children);
            }
        }
        // console.log(result);
        return result;
    };
    const renderFragment = (children) => {
        let result = "";
        if (children) {
            result = joinChildren(children);
        }
        return result;
    };
    const renderClassComponent = (componentClass, ceprops, children) => {
        const props = Object.assign(Object.assign({}, ceprops), { children });
        // @ts-ignore
        const component = new componentClass(props);
        const result = component.render();
        return result;
    };
    const renderFunctionComponent = (component, ceprops, children) => {
        const props = Object.assign(Object.assign({}, ceprops), { children });
        const result = component(props);
        return result;
    };
    const renderHtmlElement = (tagName, attributes, children) => {
        let result = "<" + tagName;
        if (attributes) {
            result += " " + joinHtmlAttributes(attributes);
        }
        // @ts-ignore
        if (void_elements_1.voidElements.has(tagName)) {
            if (children.length) {
                throw new Error("Void elements can't have children");
            }
            result += " />";
        }
        else {
            result += ">";
            result += joinChildren(children);
            result += "</" + tagName + ">";
        }
        return result;
    };
    const joinHtmlAttributes = (attributes) => {
        return Object.keys(attributes).map((name) => {
            // @ts-ignore
            let value = attributes[name];
            if (name === "className") {
                name = "class";
                value = classNames(value);
            }
            if (name === "style") {
                value = joinHtmlStyles(value);
            }
            name = name.toLowerCase();
            if (typeof value === "boolean") {
                return name;
            }
            else {
                return `${name}="${value}"`;
            }
        }).join(" ");
    };
    const joinHtmlStyles = (styles) => {
        return Object.keys(styles).map((name) => {
            // @ts-ignore
            let value = styles[name];
            if (typeof value === "number") {
                // @ts-ignore
                if (!non_pixel_style_properties_1.nonPixelStyleProperties.has(name)) {
                    value = value + "px";
                }
            }
            name = camelToKebab(name);
            return `${name}: ${value};`;
        }).join(" ");
    };
    const joinChildren = (children) => {
        return children.map((child) => {
            if (child instanceof Array) {
                child = joinChildren(child);
            }
            return child;
        }).join("");
    };
    const camelToKebab = (value) => {
        return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    };
})(React = exports.React || (exports.React = {}));
