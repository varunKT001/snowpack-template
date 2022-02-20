import React from '../../../_snowpack/pkg/react.js';
import Counter from '../Counter/index.js';
import logo from '../../assets/logo.png.proxy.js';
import styles from './styles.module.css.proxy.js';

var Starter = function Starter() {
  return /*#__PURE__*/React.createElement("section", {
    className: styles['section-center']
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("article", {
    className: styles['header']
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "logo"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Snowpack + React"), /*#__PURE__*/React.createElement("p", null, "This is a react template configured with snowpack and babel"))), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("h3", null, "What is snowpack?"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Snowpack is a lightning-fast frontend build tool, designed for the modern web."), /*#__PURE__*/React.createElement("li", null, "It is an alternative to heavier, more complex bundlers like webpack or Parcel in your development workflow."))), /*#__PURE__*/React.createElement("article", {
    className: styles['info']
  }, /*#__PURE__*/React.createElement("h3", null, "Plugins and Presets used"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, "snowpack plugins"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "plugin-babel"), /*#__PURE__*/React.createElement("li", null, "plugin-react-refresh")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, "babel presets"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "preset-react"), /*#__PURE__*/React.createElement("li", null, "preset-env"))))), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("h3", null, "HMR + Fast Refresh Demo"), /*#__PURE__*/React.createElement("p", null, "Counter state will persist even after new changes are pushed to the browser:"), /*#__PURE__*/React.createElement("p", null, "Counter: ", /*#__PURE__*/React.createElement(Counter, null))), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("h3", null, "More info."), /*#__PURE__*/React.createElement("a", {
    href: "https://www.snowpack.dev/"
  }, "snowpack.dev"), /*#__PURE__*/React.createElement("a", {
    href: "https://babeljs.io/"
  }, "babeljs.io"))));
};

export default Starter;