
export let code = "* {\r\n  box-sizing: border-box;\r\n  font-family: Helvetica;\r\n}\r\n\r\narticle {\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\np {\r\n  margin: 0.25rem 0;\r\n}\r\n\r\nul,\r\nol {\r\n  padding-inline-start: 20px;\r\n}\r\n\r\na {\r\n  margin: 0.25rem 0;\r\n  display: block;\r\n}\r\n\r\n._section-center_2oo15_47 {\r\n  margin-top: 5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n._header_2oo15_63 {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n._header_2oo15_63 img {\r\n  height: 50px;\r\n}\r\n\r\n._header_2oo15_63 div p:nth-child(1) {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-weight: 600;\r\n  font-style: italic;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n._header_2oo15_63 div p:nth-child(2) {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n._header_2oo15_63 * {\r\n  margin-right: 1rem;\r\n}\r\n\r\n._info_2oo15_117 div {\r\n  padding-inline-start: 5px;\r\n}\r\n";
let json = {"section-center":"_section-center_2oo15_47","header":"_header_2oo15_63","info":"_info_2oo15_117"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}