// "userSymbol": "Parser",
// "libraryId": "1Mc8BthYthXx6CoIz90-JiSzSafVnT6U3t0z_W3hLTAX5ek4w0G_EIrNw",
// "version": "8"

type ParserObject = {
	from: (string, number) => ParserObject;
	to: (string, number) => ParserObject;
	offset: (number) => ParserObject;
	setDirection: (string) => ParserObject;
	setLog: () => ParserObject;
	build: () => string;
	iterate: () => string[];
};

declare namespace Parser {	
	/*
	* Extract parts from long content
	*
	* @param {String} content Text to parse
	* @return {ParserObject} the result of the exponential calculation
	*/
	function data(content: string): ParserObject;
}
