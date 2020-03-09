import { React } from "../src/index";
import { equals } from "./utility";

/**
 * Test void elements
 */
export const test = () => {
	equals(<area />, `<area />`);
	equals(<base />, `<base />`);
	equals(<br />, `<br />`);
	equals(<col />, `<col />`);
	equals(<embed />, `<embed />`);
	equals(<hr />, `<hr />`);
	equals(<img />, `<img />`);
	equals(<input />, `<input />`);
	equals(<link />, `<link />`);
	equals(<meta />, `<meta />`);
	equals(<param />, `<param />`);
	equals(<source />, `<source />`);
	equals(<track />, `<track />`);
	equals(<wbr />, `<wbr />`);
	equals(<meta />, `<meta />`);
	equals(<meta />, `<meta />`);
};