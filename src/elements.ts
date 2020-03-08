import * as CSS from "csstype";

type Booleanish = boolean | "true" | "false";

export type HtmlAttributes = HtmlElements[keyof HtmlElements];

export interface HtmlElements {
	a: HtmlAnchorElement;
	abbr: HtmlElement;
	address: HtmlElement;
	area: HtmlAreaElement;
	article: HtmlElement;
	aside: HtmlElement;
	audio: HtmlAudioElement;
	b: HtmlElement;
	base: HtmlBaseElement;
	bdi: HtmlElement;
	bdo: HtmlElement;
	big: HtmlElement;
	blockquote: HtmlBlockquoteElement;
	body: HtmlElement;
	br: HtmlElement;
	button: HtmlButtonElement;
	canvas: HtmlCanvasElement;
	caption: HtmlElement;
	cite: HtmlElement;
	code: HtmlElement;
	col: HtmlColElement;
	colgroup: HtmlColgroupElement;
	data: HtmlDataElement;
	datalist: HtmlElement;
	dd: HtmlElement;
	del: HtmlDelElement;
	details: HtmlDetailsElement;
	dfn: HtmlElement;
	dialog: HtmlDialogElement;
	div: HtmlElement;
	dl: HtmlElement;
	dt: HtmlElement;
	em: HtmlElement;
	embed: HtmlEmbedElement;
	fieldset: HtmlFieldsetElement;
	figcaption: HtmlElement;
	figure: HtmlElement;
	footer: HtmlElement;
	form: HtmlFormElement;
	h1: HtmlElement;
	h2: HtmlElement;
	h3: HtmlElement;
	h4: HtmlElement;
	h5: HtmlElement;
	h6: HtmlElement;
	head: HtmlElement;
	header: HtmlElement;
	hgroup: HtmlElement;
	hr: HtmlElement;
	html: HtmlHtmlElement;
	i: HtmlElement;
	iframe: HtmlIframeElement;
	img: HtmlImgElement;
	input: HtmlInputElement;
	ins: HtmlInsElement;
	kbd: HtmlElement;
	keygen: HtmlKeygenElement;
	label: HtmlLabelElement;
	legend: HtmlElement;
	li: HtmlLiElement;
	link: HtmlLinkElement;
	main: HtmlElement;
	map: HtmlMapElement;
	mark: HtmlElement;
	menu: HtmlMenuElement;
	menuitem: HtmlElement;
	meta: HtmlMetaElement;
	meter: HtmlMeterElement;
	nav: HtmlElement;
	noscript: HtmlElement;
	object: HtmlObjectElement;
	ol: HtmlOlElement;
	optgroup: HtmlOptgroupElement;
	option: HtmlOptionElement;
	output: HtmlOutputElement;
	p: HtmlElement;
	param: HtmlParamElement;
	picture: HtmlElement;
	pre: HtmlElement;
	progress: HtmlProgressElement;
	q: HtmlQuoteElement;
	rp: HtmlElement;
	rt: HtmlElement;
	ruby: HtmlElement;
	s: HtmlElement;
	samp: HtmlElement;
	script: HtmlScriptElement;
	section: HtmlElement;
	select: HtmlSelectElement;
	small: HtmlElement;
	source: HtmlSourceElement;
	span: HtmlElement;
	strong: HtmlElement;
	style: HtmlStyleElement;
	sub: HtmlElement;
	summary: HtmlElement;
	sup: HtmlElement;
	table: HtmlTableElement;
	template: HtmlElement;
	tbody: HtmlElement;
	td: HtmlTdElement;
	textarea: HtmlTextareaElement;
	tfoot: HtmlElement;
	th: HtmlThElement;
	thead: HtmlElement;
	time: HtmlTimeElement;
	title: HtmlElement;
	tr: HtmlElement;
	track: HtmlTrackElement;
	u: HtmlElement;
	ul: HtmlElement;
	"var": HtmlElement;
	video: HtmlVideoElement;
	wbr: HtmlElement;
	webview: HtmlWebViewElement;
}

interface HtmlElement extends AriaAttributes, DomAttributes {
	defaultChecked?: boolean;
	defaultValue?: string | number | string[];
	suppressContentEditableWarning?: boolean;
	suppressHydrationWarning?: boolean;
	accessKey?: string;
	className?: string;
	contentEditable?: Booleanish | "inherit";
	contextMenu?: string;
	dir?: string;
	draggable?: Booleanish;
	hidden?: boolean;
	id?: string;
	lang?: string;
	placeholder?: string;
	slot?: string;
	spellCheck?: Booleanish;
	style?: CSSProperties;
	tabIndex?: number;
	title?: string;
	translate?: "yes" | "no";
	radioGroup?: string; 
	role?: string;
	about?: string;
	datatype?: string;
	inlist?: any;
	prefix?: string;
	property?: string;
	resource?: string;
	typeof?: string;
	vocab?: string;
	autoCapitalize?: string;
	autoCorrect?: string;
	autoSave?: string;
	color?: string;
	itemProp?: string;
	itemScope?: boolean;
	itemType?: string;
	itemID?: string;
	itemRef?: string;
	results?: number;
	security?: string;
	unselectable?: "on" | "off";
	inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
	is?: string;
}

interface DomAttributes {
	onCopy?: string;
	onCopyCapture?: string;
	onCut?: string;
	onCutCapture?: string;
	onPaste?: string;
	onPasteCapture?: string;
	onCompositionEnd?: string;
	onCompositionEndCapture?: string;
	onCompositionStart?: string;
	onCompositionStartCapture?: string;
	onCompositionUpdate?: string;
	onCompositionUpdateCapture?: string;
	onFocus?: string;
	onFocusCapture?: string;
	onBlur?: string;
	onBlurCapture?: string;
	onChange?: string;
	onChangeCapture?: string;
	onBeforeInput?: string;
	onBeforeInputCapture?: string;
	onInput?: string;
	onInputCapture?: string;
	onReset?: string;
	onResetCapture?: string;
	onSubmit?: string;
	onSubmitCapture?: string;
	onInvalid?: string;
	onInvalidCapture?: string;
	onLoad?: string;
	onLoadCapture?: string;
	onError?: string; 
	onErrorCapture?: string; 
	onKeyDown?: string;
	onKeyDownCapture?: string;
	onKeyPress?: string;
	onKeyPressCapture?: string;
	onKeyUp?: string;
	onKeyUpCapture?: string;
	onAbort?: string;
	onAbortCapture?: string;
	onCanPlay?: string;
	onCanPlayCapture?: string;
	onCanPlayThrough?: string;
	onCanPlayThroughCapture?: string;
	onDurationChange?: string;
	onDurationChangeCapture?: string;
	onEmptied?: string;
	onEmptiedCapture?: string;
	onEncrypted?: string;
	onEncryptedCapture?: string;
	onEnded?: string;
	onEndedCapture?: string;
	onLoadedData?: string;
	onLoadedDataCapture?: string;
	onLoadedMetadata?: string;
	onLoadedMetadataCapture?: string;
	onLoadStart?: string;
	onLoadStartCapture?: string;
	onPause?: string;
	onPauseCapture?: string;
	onPlay?: string;
	onPlayCapture?: string;
	onPlaying?: string;
	onPlayingCapture?: string;
	onProgress?: string;
	onProgressCapture?: string;
	onRateChange?: string;
	onRateChangeCapture?: string;
	onSeeked?: string;
	onSeekedCapture?: string;
	onSeeking?: string;
	onSeekingCapture?: string;
	onStalled?: string;
	onStalledCapture?: string;
	onSuspend?: string;
	onSuspendCapture?: string;
	onTimeUpdate?: string;
	onTimeUpdateCapture?: string;
	onVolumeChange?: string;
	onVolumeChangeCapture?: string;
	onWaiting?: string;
	onWaitingCapture?: string;
	onAuxClick?: string;
	onAuxClickCapture?: string;
	onClick?: string;
	onClickCapture?: string;
	onContextMenu?: string;
	onContextMenuCapture?: string;
	onDoubleClick?: string;
	onDoubleClickCapture?: string;
	onDrag?: string;
	onDragCapture?: string;
	onDragEnd?: string;
	onDragEndCapture?: string;
	onDragEnter?: string;
	onDragEnterCapture?: string;
	onDragExit?: string;
	onDragExitCapture?: string;
	onDragLeave?: string;
	onDragLeaveCapture?: string;
	onDragOver?: string;
	onDragOverCapture?: string;
	onDragStart?: string;
	onDragStartCapture?: string;
	onDrop?: string;
	onDropCapture?: string;
	onMouseDown?: string;
	onMouseDownCapture?: string;
	onMouseEnter?: string;
	onMouseLeave?: string;
	onMouseMove?: string;
	onMouseMoveCapture?: string;
	onMouseOut?: string;
	onMouseOutCapture?: string;
	onMouseOver?: string;
	onMouseOverCapture?: string;
	onMouseUp?: string;
	onMouseUpCapture?: string;
	onSelect?: string;
	onSelectCapture?: string;
	onTouchCancel?: string;
	onTouchCancelCapture?: string;
	onTouchEnd?: string;
	onTouchEndCapture?: string;
	onTouchMove?: string;
	onTouchMoveCapture?: string;
	onTouchStart?: string;
	onTouchStartCapture?: string;
	onPointerDown?: string;
	onPointerDownCapture?: string;
	onPointerMove?: string;
	onPointerMoveCapture?: string;
	onPointerUp?: string;
	onPointerUpCapture?: string;
	onPointerCancel?: string;
	onPointerCancelCapture?: string;
	onPointerEnter?: string;
	onPointerEnterCapture?: string;
	onPointerLeave?: string;
	onPointerLeaveCapture?: string;
	onPointerOver?: string;
	onPointerOverCapture?: string;
	onPointerOut?: string;
	onPointerOutCapture?: string;
	onGotPointerCapture?: string;
	onGotPointerCaptureCapture?: string;
	onLostPointerCapture?: string;
	onLostPointerCaptureCapture?: string;
	onScroll?: string;
	onScrollCapture?: string;
	onWheel?: string;
	onWheelCapture?: string;
	onAnimationStart?: string;
	onAnimationStartCapture?: string;
	onAnimationEnd?: string;
	onAnimationEndCapture?: string;
	onAnimationIteration?: string;
	onAnimationIterationCapture?: string;
	onTransitionEnd?: string;
	onTransitionEndCapture?: string;
}

export interface CSSProperties extends CSS.Properties<string | number> {
}

interface AriaAttributes {
	"aria-activedescendant"?: string;
	"aria-atomic"?: boolean | "false" | "true";
	"aria-autocomplete"?: "none" | "inline" | "list" | "both";
	"aria-busy"?: boolean | "false" | "true";
	"aria-checked"?: boolean | "false" | "mixed" | "true";
	"aria-colcount"?: number;
	"aria-colindex"?: number;
	"aria-colspan"?: number;
	"aria-controls"?: string;
	"aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time";
	"aria-describedby"?: string;
	"aria-details"?: string;
	"aria-disabled"?: boolean | "false" | "true";
	"aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
	"aria-errormessage"?: string;
	"aria-expanded"?: boolean | "false" | "true";
	"aria-flowto"?: string;
	"aria-grabbed"?: boolean | "false" | "true";
	"aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
	"aria-hidden"?: boolean | "false" | "true";
	"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
	"aria-keyshortcuts"?: string;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-level"?: number;
	"aria-live"?: "off" | "assertive" | "polite";
	"aria-modal"?: boolean | "false" | "true";
	"aria-multiline"?: boolean | "false" | "true";
	"aria-multiselectable"?: boolean | "false" | "true";
	"aria-orientation"?: "horizontal" | "vertical";
	"aria-owns"?: string;
	"aria-placeholder"?: string;
	"aria-posinset"?: number;
	"aria-pressed"?: boolean | "false" | "mixed" | "true";
	"aria-readonly"?: boolean | "false" | "true";
	"aria-relevant"?: "additions" | "additions text" | "all" | "removals" | "text";
	"aria-required"?: boolean | "false" | "true";
	"aria-roledescription"?: string;
	"aria-rowcount"?: number;
	"aria-rowindex"?: number;
	"aria-rowspan"?: number;
	"aria-selected"?: boolean | "false" | "true";
	"aria-setsize"?: number;
	"aria-sort"?: "none" | "ascending" | "descending" | "other";
	"aria-valuemax"?: number;
	"aria-valuemin"?: number;
	"aria-valuenow"?: number;
	"aria-valuetext"?: string;
}


interface HtmlAnchorElement extends HtmlElement {
	download?: any;
	href?: string;
	hrefLang?: string;
	media?: string;
	ping?: string;
	rel?: string;
	target?: string;
	type?: string;
	referrerPolicy?: string;
}

interface HtmlAudioElement extends HtmlMediaElement {}

interface HtmlAreaElement extends HtmlElement {
	alt?: string;
	coords?: string;
	download?: any;
	href?: string;
	hrefLang?: string;
	media?: string;
	rel?: string;
	shape?: string;
	target?: string;
}

interface HtmlBaseElement extends HtmlElement {
	href?: string;
	target?: string;
}

interface HtmlBlockquoteElement extends HtmlElement {
	cite?: string;
}

interface HtmlButtonElement extends HtmlElement {
	autoFocus?: boolean;
	disabled?: boolean;
	form?: string;
	formAction?: string;
	formEncType?: string;
	formMethod?: string;
	formNoValidate?: boolean;
	formTarget?: string;
	name?: string;
	type?: "submit" | "reset" | "button";
	value?: string | string[] | number;
}

interface HtmlCanvasElement extends HtmlElement {
	height?: number | string;
	width?: number | string;
}

interface HtmlColElement extends HtmlElement {
	span?: number;
	width?: number | string;
}

interface HtmlColgroupElement extends HtmlElement {
	span?: number;
}

interface HtmlDataElement extends HtmlElement {
	value?: string | string[] | number;
}

interface HtmlDetailsElement extends HtmlElement {
	open?: boolean;
}

interface HtmlDelElement extends HtmlElement {
	cite?: string;
	dateTime?: string;
}

interface HtmlDialogElement extends HtmlElement {
	open?: boolean;
}

interface HtmlEmbedElement extends HtmlElement {
	height?: number | string;
	src?: string;
	type?: string;
	width?: number | string;
}

interface HtmlFieldsetElement extends HtmlElement {
	disabled?: boolean;
	form?: string;
	name?: string;
}

interface HtmlFormElement extends HtmlElement {
	acceptCharset?: string;
	action?: string;
	autoComplete?: string;
	encType?: string;
	method?: string;
	name?: string;
	noValidate?: boolean;
	target?: string;
}

interface HtmlHtmlElement extends HtmlElement {
	manifest?: string;
}

interface HtmlIframeElement extends HtmlElement {
	allow?: string;
	allowFullScreen?: boolean;
	allowTransparency?: boolean;
	frameBorder?: number | string;
	height?: number | string;
	marginHeight?: number;
	marginWidth?: number;
	name?: string;
	referrerPolicy?: string;
	sandbox?: string;
	scrolling?: string;
	seamless?: boolean;
	src?: string;
	srcDoc?: string;
	width?: number | string;
}

interface HtmlImgElement extends HtmlElement {
	alt?: string;
	crossOrigin?: "anonymous" | "use-credentials" | "";
	decoding?: "async" | "auto" | "sync";
	height?: number | string;
	sizes?: string;
	src?: string;
	srcSet?: string;
	useMap?: string;
	width?: number | string;
}

interface HtmlInsElement extends HtmlElement {
	cite?: string;
	dateTime?: string;
}

interface HtmlInputElement extends HtmlElement {
	accept?: string;
	alt?: string;
	autoComplete?: string;
	autoFocus?: boolean;
	capture?: boolean | string; 
	checked?: boolean;
	crossOrigin?: string;
	disabled?: boolean;
	form?: string;
	formAction?: string;
	formEncType?: string;
	formMethod?: string;
	formNoValidate?: boolean;
	formTarget?: string;
	height?: number | string;
	list?: string;
	max?: number | string;
	maxLength?: number;
	min?: number | string;
	minLength?: number;
	multiple?: boolean;
	name?: string;
	pattern?: string;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	size?: number;
	src?: string;
	step?: number | string;
	type?: string;
	value?: string | string[] | number;
	width?: number | string;
	onChange?: string;
}

interface HtmlKeygenElement extends HtmlElement {
	autoFocus?: boolean;
	challenge?: string;
	disabled?: boolean;
	form?: string;
	keyType?: string;
	keyParams?: string;
	name?: string;
}

interface HtmlLabelElement extends HtmlElement {
	form?: string;
	htmlFor?: string;
}

interface HtmlLiElement extends HtmlElement {
	value?: string | string[] | number;
}

interface HtmlLinkElement extends HtmlElement {
	as?: string;
	crossOrigin?: string;
	href?: string;
	hrefLang?: string;
	integrity?: string;
	media?: string;
	rel?: string;
	sizes?: string;
	type?: string;
}

interface HtmlMapElement extends HtmlElement {
	name?: string;
}

interface HtmlMenuElement extends HtmlElement {
	type?: string;
}

interface HtmlMediaElement extends HtmlElement {
	autoPlay?: boolean;
	controls?: boolean;
	controlsList?: string;
	crossOrigin?: string;
	loop?: boolean;
	mediaGroup?: string;
	muted?: boolean;
	playsinline?: boolean;
	preload?: string;
	src?: string;
}

interface HtmlMetaElement extends HtmlElement {
	charSet?: string;
	content?: string;
	httpEquiv?: string;
	name?: string;
}

interface HtmlMeterElement extends HtmlElement {
	form?: string;
	high?: number;
	low?: number;
	max?: number | string;
	min?: number | string;
	optimum?: number;
	value?: string | string[] | number;
}

interface HtmlQuoteElement extends HtmlElement {
	cite?: string;
}

interface HtmlObjectElement extends HtmlElement {
	classID?: string;
	data?: string;
	form?: string;
	height?: number | string;
	name?: string;
	type?: string;
	useMap?: string;
	width?: number | string;
	wmode?: string;
}

interface HtmlOlElement extends HtmlElement {
	reversed?: boolean;
	start?: number;
	type?: "1" | "a" | "A" | "i" | "I";
}

interface HtmlOptgroupElement extends HtmlElement {
	disabled?: boolean;
	label?: string;
}

interface HtmlOptionElement extends HtmlElement {
	disabled?: boolean;
	label?: string;
	selected?: boolean;
	value?: string | string[] | number;
}

interface HtmlOutputElement extends HtmlElement {
	form?: string;
	htmlFor?: string;
	name?: string;
}

interface HtmlParamElement extends HtmlElement {
	name?: string;
	value?: string | string[] | number;
}

interface HtmlProgressElement extends HtmlElement {
	max?: number | string;
	value?: string | string[] | number;
}

interface HtmlScriptElement extends HtmlElement {
	async?: boolean;
	charSet?: string;
	crossOrigin?: string;
	defer?: boolean;
	integrity?: string;
	noModule?: boolean;
	nonce?: string;
	src?: string;
	type?: string;
}

interface HtmlSelectElement extends HtmlElement {
	autoComplete?: string;
	autoFocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;
	value?: string | string[] | number;
	onChange?: string;
}

interface HtmlSourceElement extends HtmlElement {
	media?: string;
	sizes?: string;
	src?: string;
	srcSet?: string;
	type?: string;
}

interface HtmlStyleElement extends HtmlElement {
	media?: string;
	nonce?: string;
	scoped?: boolean;
	type?: string;
}

interface HtmlTableElement extends HtmlElement {
	cellPadding?: number | string;
	cellSpacing?: number | string;
	summary?: string;
}

interface HtmlTextareaElement extends HtmlElement {
	autoComplete?: string;
	autoFocus?: boolean;
	cols?: number;
	dirName?: string;
	disabled?: boolean;
	form?: string;
	maxLength?: number;
	minLength?: number;
	name?: string;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	rows?: number;
	value?: string | string[] | number;
	wrap?: string;

	onChange?: string;
}

interface HtmlTdElement extends HtmlElement {
	align?: "left" | "center" | "right" | "justify" | "char";
	colSpan?: number;
	headers?: string;
	rowSpan?: number;
	scope?: string;
	abbr?: string;
	valign?: "top" | "middle" | "bottom" | "baseline";
}

interface HtmlThElement extends HtmlElement {
	align?: "left" | "center" | "right" | "justify" | "char";
	colSpan?: number;
	headers?: string;
	rowSpan?: number;
	scope?: string;
	abbr?: string;
}

interface HtmlTimeElement extends HtmlElement {
	dateTime?: string;
}

interface HtmlTrackElement extends HtmlElement {
	default?: boolean;
	kind?: string;
	label?: string;
	src?: string;
	srcLang?: string;
}

interface HtmlVideoElement extends HtmlMediaElement {
	height?: number | string;
	playsInline?: boolean;
	poster?: string;
	width?: number | string;
	disablePictureInPicture?: boolean;
}

interface HtmlWebViewElement extends HtmlElement {
	allowFullScreen?: boolean;
	allowpopups?: boolean;
	autoFocus?: boolean;
	autosize?: boolean;
	blinkfeatures?: string;
	disableblinkfeatures?: string;
	disableguestresize?: boolean;
	disablewebsecurity?: boolean;
	guestinstance?: string;
	httpreferrer?: string;
	nodeintegration?: boolean;
	partition?: string;
	plugins?: boolean;
	preload?: string;
	src?: string;
	useragent?: string;
	webpreferences?: string;
}
