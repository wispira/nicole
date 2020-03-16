import { HtmlElements } from "./elements";
declare global {
    namespace JSX {
        interface IntrinsicElements extends HtmlElements {
        }
        type Element = string;
        type ElementClass = React.Component;
    }
}
export declare namespace React {
    export interface FunctionComponent<P extends Props = Props> {
        (props: Readonly<P>): JSX.Element;
    }
    export type FC<P extends Props = Props> = FunctionComponent<P>;
    export abstract class Component<P extends Props = Props> {
        protected props: Readonly<P>;
        constructor(props: Readonly<P>);
        abstract render(): JSX.Element;
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
    export const createElement: (type: CEType, ceprops?: CEProps | undefined, ...children: Children) => string;
    export {};
}
