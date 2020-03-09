import { CssProperties } from "./elements";

export const nonPixelStyleProperties = new Set<keyof CssProperties>([
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
