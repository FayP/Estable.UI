require('source-map-support').install();
module.exports =
/** ****/ (function (modules) { // webpackBootstrap
/** ****/ 	// The module cache
  /** ****/ 	const installedModules = {};

/** ****/ 	// The require function
  /** ****/ 	function __webpack_require__(moduleId) {
/** ****/ 		// Check if module is in cache
    /** ****/ 		if (installedModules[moduleId])
  /** ****/ 			{ return installedModules[moduleId].exports; }

/** ****/ 		// Create a new module (and put it into the cache)
    /** ****/ 		const module = installedModules[moduleId] = {
    /** ****/ 			i: moduleId,
    /** ****/ 			l: false,
    /** ****/ 			exports: {},
  /** ****/ 		};

/** ****/ 		// Execute the module function
    /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/** ****/ 		// Flag the module as loaded
    /** ****/ 		module.l = true;

/** ****/ 		// Return the exports of the module
    /** ****/ 		return module.exports;
  /** ****/ 	}


/** ****/ 	// expose the modules object (__webpack_modules__)
  /** ****/ 	__webpack_require__.m = modules;

/** ****/ 	// expose the module cache
  /** ****/ 	__webpack_require__.c = installedModules;

/** ****/ 	// identity function for calling harmony imports with the correct context
  /** ****/ 	__webpack_require__.i = function (value) { return value; };

/** ****/ 	// define getter function for harmony exports
  /** ****/ 	__webpack_require__.d = function (exports, name, getter) {
    /** ****/ 		if (!__webpack_require__.o(exports, name)) {
    /** ****/ 			Object.defineProperty(exports, name, {
    /** ****/ 				configurable: false,
    /** ****/ 				enumerable: true,
    /** ****/ 				get: getter,
  /** ****/ 			});
  /** ****/ 		}
  /** ****/ 	};

/** ****/ 	// getDefaultExport function for compatibility with non-harmony modules
  /** ****/ 	__webpack_require__.n = function (module) {
    /** ****/ 		const getter = module && module.__esModule ?
/** ****/ 			function getDefault() { return module.default; } :
/** ****/ 			function getModuleExports() { return module; };
    /** ****/ 		__webpack_require__.d(getter, 'a', getter);
    /** ****/ 		return getter;
  /** ****/ 	};

/** ****/ 	// Object.prototype.hasOwnProperty.call
  /** ****/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/** ****/ 	// __webpack_public_path__
  /** ****/ 	__webpack_require__.p = '/assets/';

/** ****/ 	// Load entry module and return exports
  /** ****/ 	return __webpack_require__(__webpack_require__.s = 114);
/** ****/ }([
/* 0 */
/** */ (function (module, exports) {

  module.exports = require('react');

/** *
/ }),
/* 1 */
/** */ (function (module, exports) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
  module.exports = function () {
	let list = [];

	// return the list of modules as css string
  list.toString = function toString() {
		let result = [];
  for (let i = 0; i < this.length; i++) {
			let item = this[i];
  if (item[2]) {
  result.push('@media ' + item[2] + '{' + item[1] + '}');
} else {
  result.push(item[1]);
}
}
  return result.join('');
};

	// import a list of modules into the list
  list.i = function (modules, mediaQuery) {
  if (typeof modules === 'string')
  modules = [[null, modules, '']];
		let alreadyImportedModules = {};
  for (var i = 0; i < this.length; i++) {
			let id = this[i][0];
  if (typeof id === 'number')
				{alreadyImportedModules[id] = true;}
}
  for (i = 0; i < modules.length; i++) {
			let item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
  if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
  if (mediaQuery && !item[2]) {
  item[2] = mediaQuery;
} else if (mediaQuery) {
  item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
}
  list.push(item);
}
}
};
  return list;
};


/** *
/ }),
/* 2 */
/** */ (function (module, exports, __webpack_require__) {




let _stringify = __webpack_require__(87);

let _stringify2 = _interopRequireDefault(_stringify);

let _slicedToArray2 = __webpack_require__(88);

let _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

let _getIterator2 = __webpack_require__(86);

let _getIterator3 = _interopRequireDefault(_getIterator2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

let prefix = 's';
let inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
    return String.fromCharCode(`0x${  p1}`);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
  function removeCss(ids) {
  let _iteratorNormalCompletion = true;
  let _didIteratorError = false;
  let _iteratorError;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      let id = _step.value;

      if (--inserted[id] <= 0) {
        let elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
  function insertCss(styles) {
  let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$replace = _ref.replace,
    replace = _ref$replace === undefined ? false : _ref$replace,
    _ref$prepend = _ref.prepend,
    prepend = _ref$prepend === undefined ? false : _ref$prepend;

  let ids = [];
  for (let i = 0; i < styles.length; i++) {
    let _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
      moduleId = _styles$i[0],
      css = _styles$i[1],
      media = _styles$i[2],
      sourceMap = _styles$i[3];

    let id = `${moduleId  }-${  i}`;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    let elem = document.getElementById(prefix + id);
    let create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    let cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += `\n/*# sourceMappingURL=data:application/json;base64,${  b64EncodeUnicode((0, _stringify2.default)(sourceMap))  }*/`;
      cssText += `\n/*# sourceURL=${  sourceMap.file  }?${  id  }*/`;
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

  module.exports = insertCss;

/** *
/ }),
/* 3 */
/** */ (function (module, exports) {

  module.exports = require('isomorphic-style-loader/lib/withStyles');

/** *
/ }),
/* 4 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Layout_css__ = __webpack_require__(74);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layout_css__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(21);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__(20);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_5_grommet_components_App__ = __webpack_require__(96);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_5_grommet_components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_App__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/components/Layout/Layout.js';


  class Layout extends __WEBPACK_IMPORTED_MODULE_0_react__.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_grommet_components_App___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
        },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
        },
        __self: this,
      }),
      this.props.children,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Footer__["a"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
        },
        __self: this,
      }),
    );
  }
}

  Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.node.isRequired,
};
  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Layout_css___default.a)(Layout);

/** *
/ }),
/* 5 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

  const port = process.env.PORT || 3000;
  /* harmony export (immutable) */ __webpack_exports__.b = port;

  const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
  /* harmony export (immutable) */ __webpack_exports__.e = host;


  const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  /* harmony export (immutable) */ __webpack_exports__.c = databaseUrl;


  const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID },

};
  /* harmony export (immutable) */ __webpack_exports__.d = analytics;


  const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc',
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
  },

};
  /* harmony export (immutable) */ __webpack_exports__.a = auth;


/** *
/ }),
/* 6 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(7);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(5);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config__["c"], {
  define: {
    freezeTableName: true,
  },
});

  /* harmony default export */ __webpack_exports__.a = sequelize;

/** *
/ }),
/* 7 */
/** */ (function (module, exports) {

  module.exports = require('sequelize');

/** *
/ }),
/* 8 */
/** */ (function (module, exports) {

  module.exports = require('graphql');

/** *
/ }),
/* 9 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(25);
let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/components/Link/Link.js';

  function _objectWithoutProperties(obj, keys) { let target = {}; for (let i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  function isLeftClickEvent(event) {
  return event.button === 0;
}

  function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

  class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    let _temp;

    return _temp = super(...args), this.handleClick = (event) => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a"].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
      { to, children } = _props,
      props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick,
__source: {
        fileName: _jsxFileName,
        lineNumber: 51,
      },
        __self: this,
      }),
      children,
    );
  }
}

  Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.func,
};
  Link.defaultProps = {
  onClick: null,
};
  /* harmony default export */ __webpack_exports__.a = Link;

/** *
/ }),
/* 10 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(89);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(104);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(5);
/* unused harmony reexport Request */
/* unused harmony reexport Headers */
/* unused harmony reexport Response */
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', () => { return localFetch; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  __WEBPACK_IMPORTED_MODULE_1_node_fetch___default.a.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;
  __WEBPACK_IMPORTED_MODULE_1_node_fetch__.Response.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;

  function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${__WEBPACK_IMPORTED_MODULE_2__config__["e"]}${url}`;
}

  function localFetch(url, options) {
  return __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(localUrl(url), options);
}


/** *
/ }),
/* 11 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Page_css__ = __webpack_require__(76);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Page_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Page_css__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/components/Page/Page.js';


  class Page extends __WEBPACK_IMPORTED_MODULE_0_react__.Component {

  render() {
    const { title, html } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Page_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 16,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Page_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 17,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18,
            },
            __self: this,
          },
          title,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: html },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
          },
          __self: this,
        }),
      ),
    );
  }
}

  Page.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
  html: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
};
  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Page_css___default.a)(Page);

/** *
/ }),
/* 12 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

/* eslint-disable import/prefer-default-export */

  const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
  /* harmony export (immutable) */ __webpack_exports__.a = SET_RUNTIME_VARIABLE;


/** *
/ }),
/* 13 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(6);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(27);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(29);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(28);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(30);
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, 'c', () => { return __WEBPACK_IMPORTED_MODULE_1__User__.a; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, 'b', () => { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__.a; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, 'd', () => { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__.a; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, 'e', () => { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__.a; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  __WEBPACK_IMPORTED_MODULE_1__User__["a"].hasMany(__WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"], {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

  __WEBPACK_IMPORTED_MODULE_1__User__["a"].hasMany(__WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"], {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

  __WEBPACK_IMPORTED_MODULE_1__User__["a"].hasOne(__WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"], {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

  function sync(...args) {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a"].sync(...args);
}

  /* harmony default export */ __webpack_exports__.a = { sync };


/** *
/ }),
/* 14 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(65);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 15 */
/** */ (function (module, exports) {

  module.exports = require('redux');

/** *
/ }),
/* 16 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(107);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(93);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(92);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(90);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4_express_jwt__ = __webpack_require__(95);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_jwt__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_5_express_graphql__ = __webpack_require__(94);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_5_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_graphql__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(103);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_8_react_dom_server__ = __webpack_require__(109);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_9_universal_router__ = __webpack_require__(112);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_9_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_universal_router__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_10_pretty_error__ = __webpack_require__(108);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_10_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_pretty_error__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_11__components_App__ = __webpack_require__(19);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_12__components_Html__ = __webpack_require__(22);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__ = __webpack_require__(43);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__ = __webpack_require__(14);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_15__core_passport__ = __webpack_require__(26);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_16__data_models__ = __webpack_require__(13);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_17__data_schema__ = __webpack_require__(33);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_18__routes__ = __webpack_require__(47);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_19__assets_json__ = __webpack_require__(85);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_19__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__assets_json__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_20__store_configureStore__ = __webpack_require__(55);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_21__actions_runtime__ = __webpack_require__(18);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_22__config__ = __webpack_require__(5);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/server.js',
  _this = this;

let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _asyncToGenerator(fn) { return function () { let gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


 // eslint-disable-line import/no-unresolved


  const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
  app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
  app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
  app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
  app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

//
// Authentication
// -----------------------------------------------------------------------------
  app.use(__WEBPACK_IMPORTED_MODULE_4_express_jwt___default()({
  secret: __WEBPACK_IMPORTED_MODULE_22__config__["a"].jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token,
}));
  app.use(__WEBPACK_IMPORTED_MODULE_15__core_passport__["a"].initialize());

  if (true) {
  app.enable('trust proxy');
}
  app.get('/login/facebook', __WEBPACK_IMPORTED_MODULE_15__core_passport__["a"].authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
  app.get('/login/facebook/return', __WEBPACK_IMPORTED_MODULE_15__core_passport__["a"].authenticate('facebook', { failureRedirect: '/login', session: false }), (req, res) => {
  const expiresIn = 60 * 60 * 24 * 180; // 180 days
  const token = __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default.a.sign(req.user, __WEBPACK_IMPORTED_MODULE_22__config__["a"].jwt.secret, { expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/');
});

//
// Register API middleware
// -----------------------------------------------------------------------------
  app.use('/graphql', __WEBPACK_IMPORTED_MODULE_5_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_17__data_schema__["a"],
  graphiql: true,
  rootValue: { request: req },
  pretty: true,
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
  app.get('*', (() => {
  let _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__store_configureStore__["a"])({
        user: req.user || null,
      }, {
        cookie: req.headers.cookie,
      });

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__actions_runtime__["a"])({
        name: 'initialNow',
        value: Date.now(),
      }));

      const css = new Set();

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach((style) => {
            return css.add(style._getCss());
          });
        },
        // Initialize a new Redux store
        // http://redux.js.org/docs/basics/UsageWithReact.html
        store,
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_9_universal_router___default.a.resolve(__WEBPACK_IMPORTED_MODULE_18__routes__["a"], _extends({}, context, {
        path: req.path,
        query: req.query,
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);
      data.children = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11__components_App__["a"],
        { context,
__source: {
          fileName: _jsxFileName,
          lineNumber: 131,
        },
          __self: _this,
        },
        route.component,
      ));
      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_19__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_19__assets_json___default.a.client.js];
      data.state = context.store.getState();
      if (__WEBPACK_IMPORTED_MODULE_19__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_19__assets_json___default.a[route.chunk].js);
      }

      const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Html__["a"], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
        },
        __self: _this,
      })));
      res.status(route.status || 200);
      res.send(`<!doctype html>${html}`);
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
  const pe = new __WEBPACK_IMPORTED_MODULE_10_pretty_error___default.a();
  pe.skipNodeFiles();
  pe.skipPackage('express');

  app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_12__components_Html__["a"],
    {
      title: 'Internal Server Error',
      description: err.message,
      styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default.a._getCss() }], // eslint-disable-line no-underscore-dangle
       __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
      },
      __self: _this,
    },
    __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__["a"], { error: err,
__source: {
      fileName: _jsxFileName,
      lineNumber: 167,
    },
      __self: _this,
    })),
  ));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
  __WEBPACK_IMPORTED_MODULE_16__data_models__["a"].sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(__WEBPACK_IMPORTED_MODULE_22__config__["b"], () => {
    console.log(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_22__config__["b"]}/`);
  });
});
/* eslint-enable no-console */

/** *
/ }),
/* 17 */
/** */ (function (module, exports) {

  module.exports = require('babel-polyfill');

/** *
/ }),
/* 18 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(12);
  /* harmony export (immutable) */ __webpack_exports__.a = setRuntimeVariable;
/* eslint-disable import/prefer-default-export */


  function setRuntimeVariable({ name, value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a"],
    payload: {
      name,
      value,
    },
  };
}

/** *
/ }),
/* 19 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


  const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.func.isRequired,
  }).isRequired,
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
  class App extends __WEBPACK_IMPORTED_MODULE_0_react__.PureComponent {

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react__.Children.only(this.props.children);
  }

}

  App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.element.isRequired,
};
  App.childContextTypes = ContextType;
  /* harmony default export */ __webpack_exports__.a = App;

/** *
/ }),
/* 20 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_grommet_components_Footer__ = __webpack_require__(97);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_grommet_components_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Footer__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__Footer_css__ = __webpack_require__(72);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Footer_css__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(9);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/components/Footer/Footer.js';


  class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_grommet_components_Footer___default.a,
      { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 10,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 11,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.text,
__source: {
            fileName: _jsxFileName,
            lineNumber: 12,
          },
            __self: this,
          },
          '\xA9 Your Company',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.spacer,
__source: {
            fileName: _jsxFileName,
            lineNumber: 13,
          },
            __self: this,
          },
          '\xB7',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a"],
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.link,
to: '/',
__source: {
            fileName: _jsxFileName,
            lineNumber: 14,
          },
            __self: this,
          },
          'Home',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.spacer,
__source: {
            fileName: _jsxFileName,
            lineNumber: 15,
          },
            __self: this,
          },
          '\xB7',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a"],
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.link,
to: '/admin',
__source: {
            fileName: _jsxFileName,
            lineNumber: 16,
          },
            __self: this,
          },
          'Admin',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.spacer,
__source: {
            fileName: _jsxFileName,
            lineNumber: 17,
          },
            __self: this,
          },
          '\xB7',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a"],
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.link,
to: '/privacy',
__source: {
            fileName: _jsxFileName,
            lineNumber: 18,
          },
            __self: this,
          },
          'Privacy',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.spacer,
__source: {
            fileName: _jsxFileName,
            lineNumber: 19,
          },
            __self: this,
          },
          '\xB7',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a"],
          { className: __WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a.link,
to: '/not-found',
__source: {
            fileName: _jsxFileName,
            lineNumber: 20,
          },
            __self: this,
          },
          'Not Found',
        ),
      ),
    );
  }
}

  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Footer_css___default.a)(Footer);

/** *
/ }),
/* 21 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_grommet_components_Header__ = __webpack_require__(98);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Header__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3_grommet_components_Title__ = __webpack_require__(101);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3_grommet_components_Title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Title__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4__Header_css__ = __webpack_require__(73);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_css__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(9);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_6__Navigation__ = __webpack_require__(23);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_7__logo_small_png__ = __webpack_require__(70);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_7__logo_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__logo_small_png__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_8__logo_small_2x_png__ = __webpack_require__(71);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_8__logo_small_2x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__logo_small_2x_png__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/components/Header/Header.js';


  class Header extends __WEBPACK_IMPORTED_MODULE_0_react__.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_grommet_components_Header___default.a,
      { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 14,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 15,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Navigation__["a"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
          },
          __self: this,
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__Link__["a"],
          { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.brand,
to: '/',
__source: {
            fileName: _jsxFileName,
            lineNumber: 17,
          },
            __self: this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_7__logo_small_png___default.a,
srcSet: `${__WEBPACK_IMPORTED_MODULE_8__logo_small_2x_png___default.a} 2x`,
width: '250',
height: '250',
alt: 'Estable',
__source: {
            fileName: _jsxFileName,
            lineNumber: 18,
          },
            __self: this,
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.brandTxt,
__source: {
              fileName: _jsxFileName,
              lineNumber: 19,
            },
              __self: this,
            },
            'fay@gmail.com',
          ),
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_grommet_components_Title___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21,
            },
            __self: this,
          },
          'Estable',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.bannerDesc,
__source: {
              fileName: _jsxFileName,
              lineNumber: 22,
            },
              __self: this,
            },
            'Something good here',
          ),
        ),
      ),
    );
  }
}

  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Header_css___default.a)(Header);

/** *
/ }),
/* 22 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(111);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(5);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/components/Html.js';


  class Html extends __WEBPACK_IMPORTED_MODULE_0_react__.Component {

  render() {
    const { title, description, styles, scripts, state, children } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js',
lang: 'en',
__source: {
        fileName: _jsxFileName,
        lineNumber: 28,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
          },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8',
__source: {
          fileName: _jsxFileName,
          lineNumber: 30,
        },
          __self: this,
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible',
content: 'ie=edge',
__source: {
          fileName: _jsxFileName,
          lineNumber: 31,
        },
          __self: this,
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
            },
            __self: this,
          },
          title,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description',
content: description,
__source: {
          fileName: _jsxFileName,
          lineNumber: 33,
        },
          __self: this,
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport',
content: 'width=device-width, initial-scale=1',
__source: {
          fileName: _jsxFileName,
          lineNumber: 34,
        },
          __self: this,
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon',
href: 'apple-touch-icon.png',
__source: {
          fileName: _jsxFileName,
          lineNumber: 35,
        },
          __self: this,
        }),
        styles.map(style => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', {
          key: style.id,
          id: style.id,
          // eslint-disable-next-line react/no-danger
           dangerouslySetInnerHTML: { __html: style.cssText },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
          },
          __self: this,
        })),
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
          },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app',
          // eslint-disable-next-line react/no-danger
           dangerouslySetInnerHTML: { __html: children },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
          },
          __self: this,
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
          },
          __self: this,
        }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script,
src: script,
__source: {
          fileName: _jsxFileName,
          lineNumber: 58,
        },
          __self: this,
        })),
        __WEBPACK_IMPORTED_MODULE_2__config__["d"].google.trackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${__WEBPACK_IMPORTED_MODULE_2__config__["d"].google.trackingId}','auto');ga('send','pageview')` },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
          },
          __self: this,
        }),
        __WEBPACK_IMPORTED_MODULE_2__config__["d"].google.trackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://www.google-analytics.com/analytics.js',
async: true,
defer: true,
__source: {
          fileName: _jsxFileName,
          lineNumber: 68,
        },
          __self: this,
        }),
      ),
    );
  }
}

  Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.object,
  children: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
};
  Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null,
};
  /* harmony default export */ __webpack_exports__.a = Html;

/** *
/ }),
/* 23 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(91);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__(75);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(9);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/components/Navigation/Navigation.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  class Navigation extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.root,
role: 'navigation',
__source: {
        fileName: _jsxFileName,
        lineNumber: 19,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a"],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
to: '/help',
__source: {
          fileName: _jsxFileName,
          lineNumber: 20,
        },
          __self: this,
        },
        'Help',
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a"],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
to: '/contact',
__source: {
          fileName: _jsxFileName,
          lineNumber: 21,
        },
          __self: this,
        },
        'Contact',
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer,
__source: {
          fileName: _jsxFileName,
          lineNumber: 22,
        },
          __self: this,
        },
        ' | ',
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a"],
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
to: '/login',
__source: {
          fileName: _jsxFileName,
          lineNumber: 23,
        },
          __self: this,
        },
        'Log in',
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer,
__source: {
          fileName: _jsxFileName,
          lineNumber: 24,
        },
          __self: this,
        },
        'or',
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Link__["a"],
        { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.highlight),
to: '/register',
__source: {
          fileName: _jsxFileName,
          lineNumber: 25,
        },
          __self: this,
        },
        'Sign up',
      ),
    );
  }
}

  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a)(Navigation);

/** *
/ }),
/* 24 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_grommet_components_Tabs__ = __webpack_require__(100);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_grommet_components_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Tabs__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab__ = __webpack_require__(99);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/components/Steps/Steps.js';


  const NOOP = () => {};

  class Steps extends __WEBPACK_IMPORTED_MODULE_0_react__.Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 1,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(activeIndex) {
    this.setState({
      activeIndex,
    });
  }

  render() {
    const { activeIndex } = this.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_grommet_components_Tabs___default.a,
      { onActive: this.onClick, activeIndex,
__source: {
        fileName: _jsxFileName,
        lineNumber: 28,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab___default.a,
        { title: 'Stable',
__source: {
          fileName: _jsxFileName,
          lineNumber: 29,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
            },
            __self: this,
          },
          'Stable',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          type: 'text',
          value: '',
          onChange: NOOP,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
          },
          __self: this,
        }),
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab___default.a,
        { title: 'Financial',
__source: {
          fileName: _jsxFileName,
          lineNumber: 37,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38,
            },
            __self: this,
          },
          'Financial',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          type: 'text',
          value: '',
          onChange: NOOP,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
          },
          __self: this,
        }),
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab___default.a,
        { title: 'Charge Types',
__source: {
          fileName: _jsxFileName,
          lineNumber: 45,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46,
            },
            __self: this,
          },
          'Financial',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          type: 'text',
          value: '',
          onChange: NOOP,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
          },
          __self: this,
        }),
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab___default.a,
        { title: 'Horses',
__source: {
          fileName: _jsxFileName,
          lineNumber: 53,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54,
            },
            __self: this,
          },
          'Financial',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          type: 'text',
          value: '',
          onChange: NOOP,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
          },
          __self: this,
        }),
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab___default.a,
        { title: 'Financials',
__source: {
          fileName: _jsxFileName,
          lineNumber: 61,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          type: 'text',
          value: '',
          onChange: NOOP,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
          },
          __self: this,
        }),
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_grommet_components_Tab___default.a,
        { title: 'Summary',
__source: {
          fileName: _jsxFileName,
          lineNumber: 68,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          type: 'text',
          value: '',
          onChange: NOOP,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
          },
          __self: this,
        }),
      ),
    );
  }
}

  /* harmony default export */ __webpack_exports__.a = Steps;

/** *
/ }),
/* 25 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(102);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
  /* harmony default export */ __webpack_exports__.a = false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()();

/** *
/ }),
/* 26 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(105);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(106);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(13);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(5);
  function _asyncToGenerator(fn) { return function () { let gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */


/**
 * Sign in with Facebook.
 */
  __WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_facebook__.Strategy({
  clientID: __WEBPACK_IMPORTED_MODULE_3__config__["a"].facebook.id,
  clientSecret: __WEBPACK_IMPORTED_MODULE_3__config__["a"].facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {
  /* eslint-disable no-underscore-dangle */
  const loginName = 'facebook';
  const claimType = 'urn:facebook:access_token';
  const fooBar = (() => {
    let _ref = _asyncToGenerator(function* () {
      if (req.user) {
        const userLogin = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["b"].findOne({
          attributes: ['name', 'key'],
          where: { name: loginName, key: profile.id },
        });
        if (userLogin) {
          // There is already a Facebook account that belongs to you.
          // Sign in with that account or delete it, then link it with your current account.
          done();
        } else {
          const user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c"].create({
            id: req.user.id,
            email: profile._json.email,
            logins: [{ name: loginName, key: profile.id }],
            claims: [{ type: claimType, value: profile.id }],
            profile: {
              displayName: profile.displayName,
              gender: profile._json.gender,
              picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
            },
          }, {
            include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b"], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d"], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e"], as: 'profile' }],
          });
          done(null, {
            id: user.id,
            email: user.email,
          });
        }
      } else {
        const users = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c"].findAll({
          attributes: ['id', 'email'],
          where: { '$logins.name$': loginName, '$logins.key$': profile.id },
          include: [{
            attributes: ['name', 'key'],
            model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b"],
            as: 'logins',
            required: true,
          }],
        });
        if (users.length) {
          done(null, users[0]);
        } else {
          let user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c"].findOne({ where: { email: profile._json.email } });
          if (user) {
            // There is already an account using this email address. Sign in to
            // that account and link it with Facebook manually from Account Settings.
            done(null);
          } else {
            user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c"].create({
              email: profile._json.email,
              emailConfirmed: true,
              logins: [{ name: loginName, key: profile.id }],
              claims: [{ type: claimType, value: accessToken }],
              profile: {
                displayName: profile.displayName,
                gender: profile._json.gender,
                picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
              },
            }, {
              include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b"], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d"], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e"], as: 'profile' }],
            });
            done(null, {
              id: user.id,
              email: user.email,
            });
          }
        }
      }
    });

    return function fooBar() {
      return _ref.apply(this, arguments);
    };
  })();

  fooBar().catch(done);
}));

  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_passport___default.a;

/** *
/ }),
/* 27 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(7);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(6);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const User = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a"].define('User', {

  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true,
  },

  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
    validate: { isEmail: true },
  },

  emailConfirmed: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
    defaultValue: false,
  },

}, {

  indexes: [{ fields: ['email'] }],

});

  /* harmony default export */ __webpack_exports__.a = User;

/** *
/ }),
/* 28 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(7);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(6);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const UserClaim = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a"].define('UserClaim', {

  type: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
  },

  value: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
  },

});

  /* harmony default export */ __webpack_exports__.a = UserClaim;

/** *
/ }),
/* 29 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(7);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(6);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const UserLogin = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a"].define('UserLogin', {

  name: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
    primaryKey: true,
  },

  key: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
    primaryKey: true,
  },

});

  /* harmony default export */ __webpack_exports__.a = UserLogin;

/** *
/ }),
/* 30 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(7);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(6);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const UserProfile = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a"].define('UserProfile', {

  userId: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    primaryKey: true,
  },

  displayName: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
  },

  picture: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
  },

  gender: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
  },

  location: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
  },

  website: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
  },

});

  /* harmony default export */ __webpack_exports__.a = UserProfile;

/** *
/ }),
/* 31 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0__types_UserType__ = __webpack_require__(35);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const me = {
  type: __WEBPACK_IMPORTED_MODULE_0__types_UserType__["a"],
  resolve({ request }) {
    return request.user && {
      id: request.user.id,
      email: request.user.email,
    };
  },
};

  /* harmony default export */ __webpack_exports__.a = me;

/** *
/ }),
/* 32 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(8);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(10);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(34);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// React.js News Feed (RSS)
  const url = 'https://api.rss2json.com/v1/api.json' + '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

  let items = [];
  let lastFetchTask;
  let lastFetchTime = new Date(1970, 0, 1);

  const news = {
  type: new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLList(__WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__["a"]),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a"])(url).then(response => response.json()).then((data) => {
          if (data.status === 'ok') {
            items = data.items;
          }

          return items;
        }).finally(() => {
          lastFetchTask = null;
        });

      if (items.length) {
          return items;
        }

      return lastFetchTask;
    }

    return items;
  },
};

  /* harmony default export */ __webpack_exports__.a = news;

/** *
/ }),
/* 33 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(8);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__queries_me__ = __webpack_require__(31);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__queries_news__ = __webpack_require__(32);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLSchema({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLObjectType({
    name: 'Query',
    fields: {
      me: __WEBPACK_IMPORTED_MODULE_1__queries_me__["a"],
      news: __WEBPACK_IMPORTED_MODULE_2__queries_news__["a"],
    },
  }),
});

  /* harmony default export */ __webpack_exports__.a = schema;

/** *
/ }),
/* 34 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(8);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const NewsItemType = new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLObjectType({
  name: 'NewsItem',
  fields: {
    title: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLNonNull(__WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLString) },
    link: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLNonNull(__WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLString) },
    author: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLString },
    pubDate: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLNonNull(__WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLString) },
    content: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLString },
  },
});

  /* harmony default export */ __webpack_exports__.a = NewsItemType;

/** *
/ }),
/* 35 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(8);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const UserType = new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLNonNull(__WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLID) },
    email: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__.GraphQLString },
  },
});

  /* harmony default export */ __webpack_exports__.a = UserType;

/** *
/ }),
/* 36 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(38);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(37);


  /* harmony default export */ __webpack_exports__.a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__.combineReducers)({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a"],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a"],
});

/** *
/ }),
/* 37 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(12);
  /* harmony export (immutable) */ __webpack_exports__.a = runtime;
let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


  function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a"]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value,
      });
    default:
      return state;
  }
}

/** *
/ }),
/* 38 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony export (immutable) */ __webpack_exports__.a = user;
  function user(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/** *
/ }),
/* 39 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Admin_css__ = __webpack_require__(77);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Admin_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Admin_css__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/admin/Admin.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  class Admin extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Admin_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 21,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Admin_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 22,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
            },
            __self: this,
          },
          this.props.title,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: this,
          },
          '...',
        ),
      ),
    );
  }
}

  Admin.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
};
  /* harmony default export */ __webpack_exports__.default = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Admin_css___default.a)(Admin);

/** *
/ }),
/* 40 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(4);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/admin/index.js';

  function _asyncToGenerator(fn) { return function () { let gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const title = 'Admin Page';
  const isAdmin = false;

  /* harmony default export */ __webpack_exports__.default = {

  path: '/admin',

  action() {
    let _this = this;

    return _asyncToGenerator(function* () {
      if (!isAdmin) {
        return { redirect: '/login' };
      }

      const Admin = yield Promise.resolve().then(((require) => {
        return __webpack_require__(39).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

      return {
        title,
        chunk: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
            },
            __self: _this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Admin, { title,
__source: {
            fileName: _jsxFileName,
            lineNumber: 30,
          },
            __self: _this,
          }),
        ),
      };
    })();
  },

};

/** *
/ }),
/* 41 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Contact_css__ = __webpack_require__(78);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Contact_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Contact_css__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/contact/Contact.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Contact_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 21,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Contact_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 22,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
            },
            __self: this,
          },
          this.props.title,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: this,
          },
          '...',
        ),
      ),
    );
  }
}

  Contact.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
};
  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Contact_css___default.a)(Contact);

/** *
/ }),
/* 42 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(4);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Contact__ = __webpack_require__(41);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/contact/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const title = 'Contact Us';

  /* harmony default export */ __webpack_exports__.default = {

  path: '/contact',

  action() {
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
          },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Contact__["a"], { title,
__source: {
          fileName: _jsxFileName,
          lineNumber: 23,
        },
          __self: this,
        }),
      ),
    };
  },

};

/** *
/ }),
/* 43 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__ = __webpack_require__(14);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', () => { return ErrorPage; });
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/error/ErrorPage.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  class ErrorPage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    if (true) {
      const { error } = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
          },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
            },
            __self: this,
          },
          error.name,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
            },
            __self: this,
          },
          error.message,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'pre',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
            },
            __self: this,
          },
          error.stack,
        ),
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
        },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
          },
          __self: this,
        },
        'Error',
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
          },
          __self: this,
        },
        'Sorry, a critical error occurred on this page.',
      ),
    );
  }
}

  ErrorPage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.shape({
    name: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
    message: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
    stack: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
  }).isRequired,
};

  /* unused harmony default export */ let _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default.a)(ErrorPage);

/** *
/ }),
/* 44 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(4);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__(11);
let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/help/index.js';

  function _asyncToGenerator(fn) { return function () { let gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  /* harmony default export */ __webpack_exports__.default = {

  path: '/help',

  action() {
    let _this = this;

    return _asyncToGenerator(function* () {
      const data = yield Promise.resolve().then(((require) => {
        return __webpack_require__(83);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

      return {
        title: data.title,
        chunk: 'help',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: _this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a"], _extends({}, data, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: _this,
          })),
        ),
      };
    })();
  },

};

/** *
/ }),
/* 45 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Home_css__ = __webpack_require__(79);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Home_css__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__components_Steps__ = __webpack_require__(24);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/home/Home.js';


  class Home extends __WEBPACK_IMPORTED_MODULE_0_react__.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 10,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 11,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12,
            },
            __self: this,
          },
          'Estable Setup',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Steps__["a"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
          },
          __self: this,
        }),
      ),
    );
  }
}

  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Home_css___default.a)(Home);

/** *
/ }),
/* 46 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(45);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(10);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(4);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/home/index.js';

  function _asyncToGenerator(fn) { return function () { let gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  /* harmony default export */ __webpack_exports__.default = {

  path: '/',

  action() {
    let _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a"])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{news{title,link,content}}',
        }),
        credentials: 'include',
      });
      const { data } = yield resp.json();
      if (!data || !data.news) throw new Error('Failed to load the news feed.');
      return {
        title: 'React Starter Kit',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__components_Layout__["a"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
            },
            __self: _this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a"], { news: data.news,
__source: {
            fileName: _jsxFileName,
            lineNumber: 35,
          },
            __self: _this,
          }),
        ),
      };
    })();
  },

};

/** *
/ }),
/* 47 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  function _asyncToGenerator(fn) { return function () { let gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
  /* harmony default export */ __webpack_exports__.a = {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(46).default, __webpack_require__(42).default, __webpack_require__(49).default, __webpack_require__(54).default, __webpack_require__(44).default, __webpack_require__(52).default, __webpack_require__(40).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
    __webpack_require__(51).default],

  action({ next }) {
    return _asyncToGenerator(function* () {
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
      route.description = route.description || '';

      return route;
    })();
  },

};

/** *
/ }),
/* 48 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Login_css__ = __webpack_require__(80);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Login_css__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/login/Login.js';


  class Login extends __WEBPACK_IMPORTED_MODULE_0_react__.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 12,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 13,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14,
            },
            __self: this,
          },
          this.props.title,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.lead,
__source: {
            fileName: _jsxFileName,
            lineNumber: 15,
          },
            __self: this,
          },
          'Log in with your username or company email address.',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup,
__source: {
            fileName: _jsxFileName,
            lineNumber: 16,
          },
            __self: this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.facebook,
href: '/login/facebook',
__source: {
              fileName: _jsxFileName,
              lineNumber: 17,
            },
              __self: this,
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'svg',
              {
                className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.icon,
                width: '30',
                height: '30',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                },
                __self: this,
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
                d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                },
                __self: this,
              }),
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                },
                __self: this,
              },
              'Log in with Facebook',
            ),
          ),
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup,
__source: {
            fileName: _jsxFileName,
            lineNumber: 32,
          },
            __self: this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.google,
href: '/login/google',
__source: {
              fileName: _jsxFileName,
              lineNumber: 33,
            },
              __self: this,
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'svg',
              {
                className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.icon,
                width: '30',
                height: '30',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                },
                __self: this,
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
                d: 'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' + '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' + '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' + '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' + '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' + '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' + '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' + '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                },
                __self: this,
              }),
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                },
                __self: this,
              },
              'Log in with Google',
            ),
          ),
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup,
__source: {
            fileName: _jsxFileName,
            lineNumber: 55,
          },
            __self: this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.twitter,
href: '/login/twitter',
__source: {
              fileName: _jsxFileName,
              lineNumber: 56,
            },
              __self: this,
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'svg',
              {
                className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.icon,
                width: '30',
                height: '30',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                },
                __self: this,
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
                d: 'M30 6.708c-1.105.49-2.756 1.143-4 1.292 1.273-.762 2.54-2.56 ' + '3-4-.97.577-2.087 1.355-3.227 1.773L25 5c-1.12-1.197-2.23-2-4-2-3.398 0-6 ' + '2.602-6 6 0 .4.047.7.11.956L15 10C9 10 5.034 8.724 2 5c-.53.908-1 1.872-1 ' + '3 0 2.136 1.348 3.894 3 5-1.01-.033-2.17-.542-3-1 0 2.98 4.186 6.432 7 7-1 ' + '1-4.623.074-5 0 .784 2.447 3.31 3.95 6 4-2.105 1.648-4.647 2.51-7.53 2.51-.5 ' + '0-.988-.03-1.47-.084C2.723 27.17 6.523 28 10 28c11.322 0 17-8.867 17-17 ' + '0-.268.008-.736 0-1 1.2-.868 2.172-2.058 3-3.292z',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                },
                __self: this,
              }),
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                },
                __self: this,
              },
              'Log in with Twitter',
            ),
          ),
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'strong',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.lineThrough,
__source: {
            fileName: _jsxFileName,
            lineNumber: 77,
          },
            __self: this,
          },
          'OR',
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { method: 'post',
__source: {
            fileName: _jsxFileName,
            lineNumber: 78,
          },
            __self: this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup,
__source: {
              fileName: _jsxFileName,
              lineNumber: 79,
            },
              __self: this,
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.label,
htmlFor: 'usernameOrEmail',
__source: {
                fileName: _jsxFileName,
                lineNumber: 80,
              },
                __self: this,
              },
              'Username or email address:',
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.input,
              id: 'usernameOrEmail',
              type: 'text',
              name: 'usernameOrEmail',
              autoFocus: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83,
              },
              __self: this,
            }),
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup,
__source: {
              fileName: _jsxFileName,
              lineNumber: 91,
            },
              __self: this,
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.label,
htmlFor: 'password',
__source: {
                fileName: _jsxFileName,
                lineNumber: 92,
              },
                __self: this,
              },
              'Password:',
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.input,
              id: 'password',
              type: 'password',
              name: 'password',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95,
              },
              __self: this,
            }),
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup,
__source: {
              fileName: _jsxFileName,
              lineNumber: 102,
            },
              __self: this,
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.button,
type: 'submit',
__source: {
                fileName: _jsxFileName,
                lineNumber: 103,
              },
                __self: this,
              },
              'Log in',
            ),
          ),
        ),
      ),
    );
  }
}

  Login.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
};
  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Login_css___default.a)(Login);

/** *
/ }),
/* 49 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(4);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Login__ = __webpack_require__(48);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/login/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const title = 'Log In';

  /* harmony default export */ __webpack_exports__.default = {

  path: '/login',

  action() {
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
          },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Login__["a"], { title,
__source: {
          fileName: _jsxFileName,
          lineNumber: 23,
        },
          __self: this,
        }),
      ),
    };
  },

};

/** *
/ }),
/* 50 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(81);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/notFound/NotFound.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 21,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 22,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
            },
            __self: this,
          },
          this.props.title,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: this,
          },
          'Sorry, the page you were trying to view does not exist.',
        ),
      ),
    );
  }
}

  NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
};
  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound);

/** *
/ }),
/* 51 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(4);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(50);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const title = 'Page Not Found';

  /* harmony default export */ __webpack_exports__.default = {

  path: '*',

  action() {
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
          },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a"], { title,
__source: {
          fileName: _jsxFileName,
          lineNumber: 23,
        },
          __self: this,
        }),
      ),
      status: 404,
    };
  },

};

/** *
/ }),
/* 52 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(4);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__(11);
let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/privacy/index.js';

  function _asyncToGenerator(fn) { return function () { let gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  /* harmony default export */ __webpack_exports__.default = {

  path: '/privacy',

  action() {
    let _this = this;

    return _asyncToGenerator(function* () {
      const data = yield Promise.resolve().then(((require) => {
        return __webpack_require__(84);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

      return {
        title: data.title,
        chunk: 'privacy',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: _this,
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a"], _extends({}, data, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: _this,
          })),
        ),
      };
    })();
  },

};

/** *
/ }),
/* 53 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(3);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Register_css__ = __webpack_require__(82);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Register_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Register_css__);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/register/Register.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  class Register extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.root,
__source: {
        fileName: _jsxFileName,
        lineNumber: 21,
      },
        __self: this,
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.container,
__source: {
          fileName: _jsxFileName,
          lineNumber: 22,
        },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
            },
            __self: this,
          },
          this.props.title,
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: this,
          },
          '...',
        ),
      ),
    );
  }
}

  Register.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__.PropTypes.string.isRequired,
};
  /* harmony default export */ __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Register_css___default.a)(Register);

/** *
/ }),
/* 54 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(4);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__Register__ = __webpack_require__(53);
let _jsxFileName = '/Users/fay.pickering/dev/Estable.UI/src/routes/register/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


  const title = 'New User Registration';

  /* harmony default export */ __webpack_exports__.default = {

  path: '/register',

  action() {
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
          },
          __self: this,
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Register__["a"], { title,
__source: {
          fileName: _jsxFileName,
          lineNumber: 23,
        },
          __self: this,
        }),
      ),
    };
  },

};

/** *
/ }),
/* 55 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(110);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(36);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(56);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(57);
  /* harmony export (immutable) */ __webpack_exports__.a = configureStore;


  function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a"])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a"])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (false) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__.compose)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__.applyMiddleware)(...middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__.createStore)(__WEBPACK_IMPORTED_MODULE_2__reducers__["a"], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/** *
/ }),
/* 56 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(10);
  /* harmony export (immutable) */ __webpack_exports__.a = createHelpers;
let _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i]; for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _asyncToGenerator(fn) { return function () { let gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }


  function createGraphqlRequest(fetchKnowingCookie) {
  return (() => {
    let _ref = _asyncToGenerator(function* (query, variables) {
      const fetchConfig = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
        credentials: 'include',
      };
      const resp = yield fetchKnowingCookie('/graphql', fetchConfig);
      if (resp.status !== 200) throw new Error(resp.statusText);
      return resp.json();
    });

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  })();
}

  function createFetchKnowingCookie({ cookie }) {
  if (true) {
    return (url, options = {}) => {
      const isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        const headers = _extends({}, options.headers, {
          cookie,
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a"])(url, _extends({}, options, { headers }));
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a"])(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a"];
}

  function createHelpers(config) {
  const fetchKnowingCookie = createFetchKnowingCookie(config);
  const graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest,
    history: config.history,
  };
}

/** *
/ }),
/* 57 */
/** */ (function (module, __webpack_exports__, __webpack_require__) {

'use strict';

  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(113);
  /* harmony import */ let __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
  /* harmony export (immutable) */ __webpack_exports__.a = createLogger;


// Server side redux action logger
  function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => (action) => {
    const formattedPayload = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__.inspect)(action.payload, {
      colors: true,
    });
    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/** *
/ }),
/* 58 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer-root-1UUMy {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container-3dfAC {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text-3ReUN {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-297xE {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-3ReUN,\n.Footer-link-3qHjF {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-3qHjF,\n.Footer-link-3qHjF:active,\n.Footer-link-3qHjF:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-3qHjF:hover {\n  color: rgba(255, 255, 255, 1);\n}\n', '', {version: 3,'sources': ['/./src/components/Footer/Footer.css','/./src/components/variables.css'],'names': [],'mappings':'AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B','file':'Footer.css',sourcesContent: ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],'sourceRoot': "webpack://" }]);

// exports
  exports.locals = {
	root: 'Footer-root-1UUMy',
	'container': 'Footer-container-3dfAC',
	'text': 'Footer-text-3ReUN',
	'spacer': 'Footer-spacer-297xE',
	link: "Footer-link-3qHjF",
};

/** *
/ }),
/* 59 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Header-root-O9oW9 {\n  background: #031634;\n  color: #fff;\n}\n\n.Header-container-qQ2mF {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header-brand-2oS_y {\n  color: rgb(73, 210, 218);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt-230aH {\n  margin-left: 10px;\n}\n\n.Header-nav-3pohg {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header-banner-2AXOj {\n  text-align: center;\n}\n\n.Header-bannerTitle-3dmwX {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc-I2eY9 {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n', '', {version: 3,'sources': ['/./src/components/Header/Header.css','/./src/components/variables.css'],names: [],'mappings':'AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADfD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAoC;CACrC;;AAED;EACE,yBAAiD;EACjD,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX','file':'Header.css','sourcesContent': ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n:root {\n  --brand-color: #29bdc5;\n}\n\n.root {\n  background: #031634;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: var(--max-content-width);\n}\n\n.brand {\n  color: color(var(--brand-color) lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],'sourceRoot': "webpack://" }]);

// exports
  exports.locals = {
	'root': 'Header-root-O9oW9',
	'container': 'Header-container-qQ2mF',
	'brand': 'Header-brand-2oS_y',
	brandTxt: 'Header-brandTxt-230aH',
	'nav': 'Header-nav-3pohg',
	'banner': 'Header-banner-2AXOj',
	'bannerTitle': 'Header-bannerTitle-3dmwX',
	'bannerDesc': "Header-bannerDesc-I2eY9",
};

/** *
/ }),
/* 60 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module

// exports
  exports.locals = {
	'grommet': 'Layout-grommet-2tzO8',
	'grommetux-heading': 'Layout-grommetux-heading-3aUlZ',
	'grommetux-app': 'Layout-grommetux-app-eNiLI',
	'grommetux-article--scroll-step': 'Layout-grommetux-article--scroll-step-1FwD6',
	'grommetux-box--direction-row': 'Layout-grommetux-box--direction-row-1VGGI',
	'grommetux-article__controls': 'Layout-grommetux-article__controls-iugcJ',
	'grommetux-box--responsive': 'Layout-grommetux-box--responsive-dftN3',
	'grommetux-article__control-left': 'Layout-grommetux-article__control-left-1wTbp',
	'grommetux-article__control-right': 'Layout-grommetux-article__control-right-BI7Y6',
	'grommetux-box--pad-small': 'Layout-grommetux-box--pad-small-2RPva',
	'grommetux-box--pad-medium': 'Layout-grommetux-box--pad-medium-11yrj',
	'grommetux-box--pad-large': 'Layout-grommetux-box--pad-large-w52OE',
	'grommetux-box--pad-xlarge': 'Layout-grommetux-box--pad-xlarge-RlgwH',
	'grommetux-box--pad-horizontal-small': 'Layout-grommetux-box--pad-horizontal-small-3tlBs',
	'grommetux-box--pad-horizontal-medium': 'Layout-grommetux-box--pad-horizontal-medium-1Obct',
	'grommetux-box--pad-horizontal-large': 'Layout-grommetux-box--pad-horizontal-large-PKCJP',
	'grommetux-box--pad-horizontal-xlarge': 'Layout-grommetux-box--pad-horizontal-xlarge-3EqjG',
	'grommetux-box--pad-vertical-small': 'Layout-grommetux-box--pad-vertical-small-wDCqS',
	'grommetux-box--pad-vertical-medium': 'Layout-grommetux-box--pad-vertical-medium-27zBk',
	'grommetux-box--pad-vertical-large': 'Layout-grommetux-box--pad-vertical-large-Ha_-9',
	'grommetux-box--pad-vertical-xlarge': 'Layout-grommetux-box--pad-vertical-xlarge-sALpf',
	'grommetux-box--margin-small': 'Layout-grommetux-box--margin-small-2aaQF',
	'grommetux-box--margin-medium': 'Layout-grommetux-box--margin-medium-P6tEU',
	'grommetux-box--margin-large': 'Layout-grommetux-box--margin-large-2TZtU',
	'grommetux-box--margin-horizontal-small': 'Layout-grommetux-box--margin-horizontal-small-3DBR5',
	'grommetux-box--margin-horizontal-medium': 'Layout-grommetux-box--margin-horizontal-medium-WQg5w',
	'grommetux-box--margin-horizontal-large': 'Layout-grommetux-box--margin-horizontal-large-2TzrP',
	'grommetux-box--margin-vertical-small': 'Layout-grommetux-box--margin-vertical-small-Ie63x',
	'grommetux-box--margin-vertical-medium': 'Layout-grommetux-box--margin-vertical-medium-3q_sP',
	'grommetux-box--margin-vertical-large': 'Layout-grommetux-box--margin-vertical-large-2Nw01',
	'grommetux-box--margin-left-small': 'Layout-grommetux-box--margin-left-small-31fd1',
	'grommetux-box--margin-left-medium': 'Layout-grommetux-box--margin-left-medium-2Iv5G',
	'grommetux-box--margin-left-large': 'Layout-grommetux-box--margin-left-large-29tt3',
	'grommetux-box--margin-right-small': 'Layout-grommetux-box--margin-right-small-3XjLH',
	'grommetux-box--margin-right-medium': 'Layout-grommetux-box--margin-right-medium-3jiVQ',
	'grommetux-box--margin-right-large': 'Layout-grommetux-box--margin-right-large-2z5PN',
	'grommetux-box--margin-top-small': 'Layout-grommetux-box--margin-top-small-1_FIv',
	'grommetux-box--margin-top-medium': 'Layout-grommetux-box--margin-top-medium-1U-tl',
	'grommetux-box--margin-top-large': 'Layout-grommetux-box--margin-top-large-3-mT4',
	'grommetux-box--margin-bottom-small': 'Layout-grommetux-box--margin-bottom-small-3nIIl',
	'grommetux-box--margin-bottom-medium': 'Layout-grommetux-box--margin-bottom-medium-19_-k',
	'grommetux-box--margin-bottom-large': 'Layout-grommetux-box--margin-bottom-large-2yebS',
	'grommetux-box--separator-all': 'Layout-grommetux-box--separator-all-41wfv',
	'grommetux-box--separator-left': 'Layout-grommetux-box--separator-left-2rOsu',
	'grommetux-box--separator-vertical': 'Layout-grommetux-box--separator-vertical-Au9cY',
	'grommetux-box--separator-right': 'Layout-grommetux-box--separator-right-3cRxT',
	'grommetux-app--centered': 'Layout-grommetux-app--centered-3vYEc',
	'grommetux-box__container': 'Layout-grommetux-box__container-2sW3B',
	'grommetux-box': 'Layout-grommetux-box-3MkZ4',
	'grommetux-box--basis-1-4': 'Layout-grommetux-box--basis-1-4-NptGl',
	'grommetux-box--full': 'Layout-grommetux-box--full-xt1i7',
	'grommetux-box--full-vertical': 'Layout-grommetux-box--full-vertical-pop2q',
	'grommetux-box--justify-center': 'Layout-grommetux-box--justify-center-3Xx42',
	'grommetux-box--reverse': 'Layout-grommetux-box--reverse-jB-TG',
	'grommetux-box--pad-between-small': 'Layout-grommetux-box--pad-between-small-2XlrS',
	'grommetux-box--pad-between-thirds': 'Layout-grommetux-box--pad-between-thirds-1v1Ec',
	'grommetux-box--basis-1-3': 'Layout-grommetux-box--basis-1-3-1YsY8',
	'grommetux-box--basis-1-2': 'Layout-grommetux-box--basis-1-2-3qxkx',
	'grommetux-box--basis-2-3': 'Layout-grommetux-box--basis-2-3-39ZAW',
	'grommetux-box--basis-3-4': 'Layout-grommetux-box--basis-3-4-kExEU',
	rtl: 'Layout-rtl-2UWW3',
	'grommetux-box--pad-between-medium': 'Layout-grommetux-box--pad-between-medium-1rdEq',
	'grommetux-box--pad-between-large': 'Layout-grommetux-box--pad-between-large-2xjhn',
	'grommetux-box--direction-column': 'Layout-grommetux-box--direction-column-2r8RR',
	'grommetux-button': 'Layout-grommetux-button-21fqI',
	'grommetux-card': 'Layout-grommetux-card-2YNV0',
	'grommetux-card__content--truncate': 'Layout-grommetux-card__content--truncate-1F8z_',
	'grommetux-paragraph': 'Layout-grommetux-paragraph-3IQTe',
	'grommetux-paragraph--small': 'Layout-grommetux-paragraph--small-1lnRI',
	'grommetux-paragraph--large': 'Layout-grommetux-paragraph--large-1uL5i',
	'grommetux-paragraph--xlarge': 'Layout-grommetux-paragraph--xlarge-1QDZ0',
	'grommetux-card--direction-row': 'Layout-grommetux-card--direction-row-2jWI2',
	'grommetux-card__thumbnail': 'Layout-grommetux-card__thumbnail-1Sacj',
	'grommetux-chart-base--width-large': 'Layout-grommetux-chart-base--width-large-3xL1I',
	'grommetux-chart-base--height-medium': 'Layout-grommetux-chart-base--height-medium-1tZ-v',
	'grommetux-chart-base--height-large': 'Layout-grommetux-chart-base--height-large-Kgk1t',
	'grommetux-columns': 'Layout-grommetux-columns-cO2SX',
	'grommetux-columns__column': 'Layout-grommetux-columns__column-2ocTY',
	'grommetux-columns--margin-small': 'Layout-grommetux-columns--margin-small-3dEMf',
	'grommetux-columns--margin-medium': 'Layout-grommetux-columns--margin-medium-1YMFY',
	'grommetux-columns--margin-large': 'Layout-grommetux-columns--margin-large-3bEqm',
	'grommetux-columns--responsive': 'Layout-grommetux-columns--responsive-188lb',
	'grommetux-columns--large': 'Layout-grommetux-columns--large-1CgT-',
	'grommetux-columns--medium': 'Layout-grommetux-columns--medium-APWJO',
	'grommetux-columns--small': 'Layout-grommetux-columns--small-2jFCs',
	'grommetux-form': 'Layout-grommetux-form-k71xR',
	'grommetux-form-field': 'Layout-grommetux-form-field-2MeCk',
	'grommetux-tiles__container': 'Layout-grommetux-tiles__container-3q-F1',
	'grommetux-form--pad-small': 'Layout-grommetux-form--pad-small-3Bqr1',
	'grommetux-form--pad-medium': 'Layout-grommetux-form--pad-medium-1kzdx',
	'grommetux-form--pad-large': 'Layout-grommetux-form--pad-large-1yL2G',
	'grommetux-form--pad-xlarge': 'Layout-grommetux-form--pad-xlarge-2zhoS',
	'grommetux-form--pad-horizontal-small': 'Layout-grommetux-form--pad-horizontal-small-3bCdS',
	'grommetux-form--pad-horizontal-medium': 'Layout-grommetux-form--pad-horizontal-medium-31_ry',
	'grommetux-form--pad-horizontal-large': 'Layout-grommetux-form--pad-horizontal-large-2ouWH',
	'grommetux-form--pad-horizontal-xlarge': 'Layout-grommetux-form--pad-horizontal-xlarge-28_C9',
	'grommetux-form--pad-vertical-small': 'Layout-grommetux-form--pad-vertical-small-3Swy5',
	'grommetux-form--pad-vertical-medium': 'Layout-grommetux-form--pad-vertical-medium-1Jo_X',
	'grommetux-form--pad-vertical-large': 'Layout-grommetux-form--pad-vertical-large-XoLkL',
	'grommetux-form--pad-vertical-xlarge': 'Layout-grommetux-form--pad-vertical-xlarge-3s4uX',
	'grommetux-form-field__contents': 'Layout-grommetux-form-field__contents-GSj8T',
	'grommetux-calendar': 'Layout-grommetux-calendar-2fl4V',
	'grommetux-date-time': 'Layout-grommetux-date-time-2LFTp',
	'grommetux-search-input': 'Layout-grommetux-search-input-2DHio',
	'grommetux-select': 'Layout-grommetux-select-2qYMi',
	'grommetux-text-input': 'Layout-grommetux-text-input-3C29G',
	'grommetux-background-color-index--dark': 'Layout-grommetux-background-color-index--dark-1QbIj',
	'grommetux-background-color-index--light': 'Layout-grommetux-background-color-index--light-a5CJ4',
	'grommetux-form-field--hidden': 'Layout-grommetux-form-field--hidden-yvs7H',
	'grommetux-header__container--fixed': 'Layout-grommetux-header__container--fixed-3i3Kg',
	'grommetux-header__wrapper': 'Layout-grommetux-header__wrapper-53g1N',
	'grommetux-header': 'Layout-grommetux-header-OfTcL',
	'grommetux-headline': 'Layout-grommetux-headline-2l25N',
	'grommetux-headline--large': 'Layout-grommetux-headline--large-11p0q',
	'grommetux-headline--xlarge': 'Layout-grommetux-headline--xlarge-3DuXw',
	'grommetux-hero--bg-left': 'Layout-grommetux-hero--bg-left-qDXfQ',
	'grommetux-hero__background': 'Layout-grommetux-hero__background-3itUG',
	'grommetux-hero--bg-right': 'Layout-grommetux-hero--bg-right-hMB4h',
	'grommetux-hero__overlay': 'Layout-grommetux-hero__overlay-2dNss',
	'grommetux-hero--mobile-separator': 'Layout-grommetux-hero--mobile-separator-2cARt',
	'grommetux-control-icon': 'Layout-grommetux-control-icon-nhLi8',
	'grommetux-control-icon--huge': 'Layout-grommetux-control-icon--huge-1qqdb',
	'grommetux-control-icon--responsive': 'Layout-grommetux-control-icon--responsive-1HPqK',
	'grommetux-control-icon--xlarge': 'Layout-grommetux-control-icon--xlarge-1OasW',
	'grommetux-logo-icon': 'Layout-grommetux-logo-icon-3mUt9',
	'f': 'Layout-f-2UHei',
	'grommetux-image--full': 'Layout-grommetux-image--full-30-gQ',
	'grommetux-image--align-top': 'Layout-grommetux-image--align-top-mKy_r',
	'grommetux-image--align-left': 'Layout-grommetux-image--align-left-29rPz',
	'grommetux-image--align-right': 'Layout-grommetux-image--align-right-2_cSM',
	'grommetux-image--align-bottom': 'Layout-grommetux-image--align-bottom-1AMwV',
	'grommetux-layer': 'Layout-grommetux-layer-hLOte',
	'grommetux-layer--hidden': 'Layout-grommetux-layer--hidden-3oFeE',
	'grommetux-layer__container': 'Layout-grommetux-layer__container-2W40j',
	'grommetux-sidebar': 'Layout-grommetux-sidebar-3A-ej',
	'grommetux-layer--flush': 'Layout-grommetux-layer--flush-28jNO',
	'grommetux-layer--align-center': 'Layout-grommetux-layer--align-center-kxGo3',
	'grommetux-layer--align-left': 'Layout-grommetux-layer--align-left-3t6Dy',
	h: 'Layout-h-1R_1_',
	i: 'Layout-i-14UNM',
	'grommetux-layer--align-right': 'Layout-grommetux-layer--align-right-2EveQ',
	'grommetux-layer--align-top': 'Layout-grommetux-layer--align-top-2fzwW',
	j: 'Layout-j-5lOEZ',
	'grommetux-layer--peek': 'Layout-grommetux-layer--peek-S-nDE',
	g: 'Layout-g-3EjLw',
	'grommetux-menu__control': 'Layout-grommetux-menu__control-wJ5EJ',
	'grommetux-menu--labelled': 'Layout-grommetux-menu--labelled-LIaKs',
	'grommetux-menu--inline': 'Layout-grommetux-menu--inline-1spK6',
	'grommetux---direction-row': 'Layout-grommetux---direction-row-2czMD',
	'grommetux-menu--primary': 'Layout-grommetux-menu--primary-1fu9Z',
	'grommetux-menu--down': 'Layout-grommetux-menu--down-23rKj',
	'grommetux-menu': 'Layout-grommetux-menu-23nw0',
	'grommetux-menu__drop': 'Layout-grommetux-menu__drop-2VBSi',
	'grommetux-meter--bar': 'Layout-grommetux-meter--bar-1nsWS',
	'grommetux-meter__values': 'Layout-grommetux-meter__values-1gvKd',
	'grommetux-meter__slice': 'Layout-grommetux-meter__slice-3pXqh',
	k: 'Layout-k-2t0Ny',
	'grommetux-meter--arc': 'Layout-grommetux-meter--arc-w0gEi',
	'grommetux-meter--circle': 'Layout-grommetux-meter--circle-3YcVC',
	'grommetux-meter--spiral': 'Layout-grommetux-meter--spiral-mp1RI',
	'l': 'Layout-l-1m-SV',
	'grommetux-paragraph--width-large': 'Layout-grommetux-paragraph--width-large-2PrlC',
	'grommetux-search__drop': 'Layout-grommetux-search__drop-2nPwL',
	'grommetux-search__suggestion': 'Layout-grommetux-search__suggestion-2ZXr3',
	'grommetux-search--large': 'Layout-grommetux-search--large-2WpMn',
	'grommetux-search__input': 'Layout-grommetux-search__input-258Nv',
	'grommetux-control-icon-search': 'Layout-grommetux-control-icon-search-1ryGc',
	'grommetux-search--icon-align-start': 'Layout-grommetux-search--icon-align-start-3Q5S6',
	'layer': 'Layout-layer-3yD_e',
	'grommetux-section': 'Layout-grommetux-section-KCJDL',
	'grommetux-sidebar--xsmall': 'Layout-grommetux-sidebar--xsmall-3m2qo',
	'grommetux-sidebar--small': 'Layout-grommetux-sidebar--small-2ITiN',
	'grommetux-sidebar--large': 'Layout-grommetux-sidebar--large-3nPN1',
	'grommetux-split': 'Layout-grommetux-split-3j3Al',
	'grommetux-split__column--fixed': 'Layout-grommetux-split__column--fixed-3DsKd',
	'grommetux-split__column--flex': 'Layout-grommetux-split__column--flex-3G--X',
	'grommetux-split__column--separator': 'Layout-grommetux-split__column--separator-261OI',
	'grommetux-tab': 'Layout-grommetux-tab-2rkyX',
	'grommetux-tabs--responsive': 'Layout-grommetux-tabs--responsive-cI_G4',
	'grommetux-tab__label': 'Layout-grommetux-tab__label-1gQfk',
	'grommetux-tabs--justify-center': 'Layout-grommetux-tabs--justify-center-1VdiV',
	'grommetux-tabs--justify-end': 'Layout-grommetux-tabs--justify-end-1X3J1',
	'grommetux-tabs--justify-start': 'Layout-grommetux-tabs--justify-start-1uHM_',
	'grommetux-tiles--pad-small': 'Layout-grommetux-tiles--pad-small-3CFva',
	'grommetux-tiles--pad-medium': 'Layout-grommetux-tiles--pad-medium-3bmbT',
	'grommetux-tiles--pad-large': 'Layout-grommetux-tiles--pad-large-3LfDr',
	'grommetux-tiles--pad-xlarge': 'Layout-grommetux-tiles--pad-xlarge-130Wc',
	'grommetux-tiles--pad-horizontal-small': 'Layout-grommetux-tiles--pad-horizontal-small-2UZoL',
	'grommetux-tiles--pad-horizontal-medium': 'Layout-grommetux-tiles--pad-horizontal-medium-2qA42',
	'grommetux-tiles--pad-horizontal-large': 'Layout-grommetux-tiles--pad-horizontal-large-1mG-S',
	'grommetux-tiles--pad-horizontal-xlarge': 'Layout-grommetux-tiles--pad-horizontal-xlarge-1uCNq',
	'grommetux-tiles--pad-vertical-small': 'Layout-grommetux-tiles--pad-vertical-small-1RpfE',
	'grommetux-tiles--pad-vertical-medium': 'Layout-grommetux-tiles--pad-vertical-medium-2BHmh',
	'grommetux-tiles--pad-vertical-large': 'Layout-grommetux-tiles--pad-vertical-large-2pJwq',
	'grommetux-tiles--pad-vertical-xlarge': 'Layout-grommetux-tiles--pad-vertical-xlarge-OOO82',
	'grommetux-tiles': 'Layout-grommetux-tiles-FUljP',
	'grommetux-tiles--flush': 'Layout-grommetux-tiles--flush-3M_Bj',
	'grommetux-tile': 'Layout-grommetux-tile-3ncvD',
	'grommetux-tile--hover-border-medium': 'Layout-grommetux-tile--hover-border-medium-2t1Yr',
	'grommetux-tile--hover-border-large': 'Layout-grommetux-tile--hover-border-large-1nl44',
	'grommetux-tiles--fill': 'Layout-grommetux-tiles--fill-AnDIg',
	'grommetux-tiles--small': 'Layout-grommetux-tiles--small-2og6f',
	'grommetux-box--size': 'Layout-grommetux-box--size-27EsK',
	'grommetux-tiles--large': 'Layout-grommetux-tiles--large-32pui',
	'grommetux-title': 'Layout-grommetux-title-1UrjB',
	'grommetux-title--interactive': 'Layout-grommetux-title--interactive-3bf5O',
	'grommetux-title--responsive': 'Layout-grommetux-title--responsive-Kce17',
	'grommetux-topology__contents': 'Layout-grommetux-topology__contents-1wUS-',
	'grommetux-topology__parts--direction-row': 'Layout-grommetux-topology__parts--direction-row-1K1wL',
	'grommetux-topology__part': 'Layout-grommetux-topology__part-1fas5',
	'grommetux-value--xlarge': 'Layout-grommetux-value--xlarge-2ZzRo',
	'grommetux-value__annotated': 'Layout-grommetux-value__annotated-3TFPB',
	'grommetux-value__label': 'Layout-grommetux-value__label-2l7HX',
	'grommetux-video': 'Layout-grommetux-video-3nj2k',
	'grommetux-video__timeline': 'Layout-grommetux-video__timeline-2hbs-',
	'grommetux-video--has-timeline': 'Layout-grommetux-video--has-timeline-2Tv89',
	'grommetux-video__progress': 'Layout-grommetux-video__progress-35b53',
	'grommetux-video__controls': 'Layout-grommetux-video__controls-1kQCU',
	'grommetux-video__replay': 'Layout-grommetux-video__replay-16kte',
	'grommetux-video--has-played': 'Layout-grommetux-video--has-played-3rLxz',
	'grommetux-video--small': 'Layout-grommetux-video--small-YBSpm',
	'grommetux-video--ended': 'Layout-grommetux-video--ended-NLLJE',
	'grommetux-video__play': 'Layout-grommetux-video__play-QU8HM',
	'grommetux-video--full': 'Layout-grommetux-video--full-35EBh',
	'grommetux-video--align-top': 'Layout-grommetux-video--align-top-3FTU9',
	'grommetux-video--align-left': 'Layout-grommetux-video--align-left-cVgKP',
	'grommetux-video--align-right': 'Layout-grommetux-video--align-right-2KMlq',
	'grommetux-video--align-bottom': 'Layout-grommetux-video--align-bottom-1v-yi',
	'grommetux-button--fill': 'Layout-grommetux-button--fill-1lXB9',
	'grommetux-button--disabled': 'Layout-grommetux-button--disabled-30it8',
	'grommetux-button--plain': "Layout-grommetux-button--plain-10k-J",
};

/** *
/ }),
/* 61 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-highlight-2UNlq {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation-highlight-2UNlq:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation-spacer-3vZVG {\n  color: rgba(255, 255, 255, 0.3);\n}\n', '', {'version': 3,sources: ['/./src/components/Navigation/Navigation.css'],names: [],'mappings':'AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC',file:'Navigation.css',sourcesContent: ['/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n'],sourceRoot: "webpack://" }]);

// exports
  exports.locals = {
	'root': 'Navigation-root-2gcJx',
	'link': 'Navigation-link-Ntl35',
	'highlight': 'Navigation-highlight-2UNlq',
	spacer: "Navigation-spacer-3vZVG",
};

/** *
/ }),
/* 62 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Page-root-2VuHt {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-QOUG7 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n', '', {'version': 3,'sources': ['/./src/components/Page/Page.css','/./src/components/variables.css'],names: [],mappings:'AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC','file':'Page.css',sourcesContent: ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],sourceRoot: "webpack://" }]);

// exports
  exports.locals = {
	root: 'Page-root-2VuHt',
	'container': "Page-container-QOUG7",
};

/** *
/ }),
/* 63 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Admin-root-KbbnZ {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Admin-container-YgHbk {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n', '', {'version': 3,'sources': ['/./src/routes/admin/Admin.css','/./src/components/variables.css'],names: [],mappings:'AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC','file':'Admin.css',sourcesContent: ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],'sourceRoot': "webpack://" }]);

// exports
  exports.locals = {
	root: 'Admin-root-KbbnZ',
	container: "Admin-container-YgHbk",
};

/** *
/ }),
/* 64 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Contact-root-3ydpW {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact-container-2rVw2 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n', '', {version: 3,sources: ['/./src/routes/contact/Contact.css','/./src/components/variables.css'],names: [],mappings:'AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC',file:'Contact.css',sourcesContent: ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],sourceRoot: "webpack://" }]);

// exports
  exports.locals = {
	root: 'Contact-root-3ydpW',
	'container': "Contact-container-2rVw2",
};

/** *
/ }),
/* 65 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n', '', {version: 3,'sources': ['/./src/routes/error/ErrorPage.css'],'names': [],mappings:'AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF',file:'ErrorPage.css','sourcesContent': ['/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n'],sourceRoot: "webpack://" }]);

// exports


/** *
/ }),
/* 66 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Home-root-1avl7 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home-container-3YPN- {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Home-newsItem--EKGZ {\n  margin: 0 0 32px;\n  margin: 0 0 2rem;\n}\n\n.Home-newsTitle-3GwAp {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\n\n.Home-newsDesc-107uo h1,\n  .Home-newsDesc-107uo h2,\n  .Home-newsDesc-107uo h3,\n  .Home-newsDesc-107uo h4,\n  .Home-newsDesc-107uo h5,\n  .Home-newsDesc-107uo h6 {\n  font-size: 18px;\n  font-size: 1.125rem;\n}\n\n.Home-newsDesc-107uo pre {\n  white-space: pre-wrap;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n\n.Home-newsDesc-107uo img {\n  max-width: 100%;\n}\n', '', {'version': 3,sources: ['/./src/routes/home/Home.css','/./src/components/variables.css'],names: [],'mappings':'AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE,gBAAkB;EAAlB,kBAAkB;CACnB;;AAGC;;;;;;EAME,gBAAoB;EAApB,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,gBAAoB;EAApB,oBAAoB;CACrB;;AAED;EACE,gBAAgB;CACjB',file:'Home.css','sourcesContent': ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.newsItem {\n  margin: 0 0 2rem;\n}\n\n.newsTitle {\n  font-size: 1.5rem;\n}\n\n.newsDesc {\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: 1.125rem;\n  }\n\n  pre {\n    white-space: pre-wrap;\n    font-size: 0.875rem;\n  }\n\n  img {\n    max-width: 100%;\n  }\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],sourceRoot: "webpack://" }]);

// exports
  exports.locals = {
	root: 'Home-root-1avl7',
	'container': 'Home-container-3YPN-',
	'newsItem': 'Home-newsItem--EKGZ',
	newsTitle: 'Home-newsTitle-3GwAp',
	newsDesc: "Home-newsDesc-107uo",
};

/** *
/ }),
/* 67 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n.Login-root-3Vk6J {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login-container-2IZbL {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login-lead-25ZSA {\n  font-size: 1.25em;\n}\n.Login-formGroup-uHfQ- {\n  margin-bottom: 15px;\n}\n.Login-label-Mf2-c {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Login-input-HfRjv {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.Login-input-HfRjv:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-button-2JhAE {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login-button-2JhAE:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login-button-2JhAE:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-facebook-QGMxt {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login-facebook-QGMxt:hover {\n  background: #2d4373;\n}\n.Login-google-17cIx {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login-google-17cIx:hover {\n  background: #c23321;\n}\n.Login-twitter-21gEV {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login-twitter-21gEV:hover {\n  background: #2795e9;\n}\n.Login-icon-2Dc1q {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login-lineThrough-2wlls {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login-lineThrough-2wlls::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login-lineThrough-2wlls::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", '', {'version': 3,'sources': ['/./src/routes/login/Login.css','/./src/components/variables.css'],names: [],'mappings':'AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,iFAAyE;EAAzE,yEAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb','file':'Login.css','sourcesContent': ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],sourceRoot: "webpack://" }]);

// exports
  exports.locals = {
	root: 'Login-root-3Vk6J',
	'container': 'Login-container-2IZbL',
	'lead': 'Login-lead-25ZSA',
	'formGroup': 'Login-formGroup-uHfQ-',
	label: 'Login-label-Mf2-c',
	input: 'Login-input-HfRjv',
	button: 'Login-button-2JhAE',
	'facebook': 'Login-facebook-QGMxt Login-button-2JhAE',
	'google': 'Login-google-17cIx Login-button-2JhAE',
	'twitter': 'Login-twitter-21gEV Login-button-2JhAE',
	icon: 'Login-icon-2Dc1q',
	lineThrough: "Login-lineThrough-2wlls",
};

/** *
/ }),
/* 68 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NotFound-root-3_3g8 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-3FKMx {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n', '', {'version': 3,'sources': ['/./src/routes/notFound/NotFound.css','/./src/components/variables.css'],names: [],'mappings':'AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC',file:'NotFound.css',sourcesContent: ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],sourceRoot: "webpack://" }]);

// exports
  exports.locals = {
	root: 'NotFound-root-3_3g8',
	'container': "NotFound-container-3FKMx",
};

/** *
/ }),
/* 69 */
/** */ (function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
// imports


// module
  exports.push([module.i, '/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Register-root-2_v1F {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Register-container-31Gk4 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n', '', {version: 3,'sources': ['/./src/routes/register/Register.css','/./src/components/variables.css'],names: [],mappings:'AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC',file:'Register.css','sourcesContent': ["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n", "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],'sourceRoot': "webpack://" }]);

// exports
  exports.locals = {
	root: 'Register-root-2_v1F',
	container: "Register-container-31Gk4",
};

/** *
/ }),
/* 70 */
/** */ (function (module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + 'src/components/Header/logo-small.png?b78d376a';

/** *
/ }),
/* 71 */
/** */ (function (module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + 'src/components/Header/logo-small@2x.png?f653d57b';

/** *
/ }),
/* 72 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(58);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 73 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(59);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 74 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(60);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 75 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(61);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Navigation.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Navigation.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 76 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(62);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Page.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Page.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 77 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(63);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Admin.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Admin.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 78 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(64);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Contact.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Contact.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 79 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(66);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 80 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(67);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Login.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Login.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 81 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(68);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 82 */
/** */ (function (module, exports, __webpack_require__) {
    let content = __webpack_require__(69);
    let insertCss = __webpack_require__(2);

  if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

  module.exports = content.locals || {};
  module.exports._getContent = function () { return content; };
  module.exports._getCss = function () { return content.toString(); };
  module.exports._insertCss = function (options) { return insertCss(content, options); };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
  if (false) {
      let removeCss = function () {};
      module.hot.accept('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Register.css', () => {
        content = require('!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Register.css');

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(() => { removeCss(); });
    }


/** *
/ }),
/* 83 */
/** */ (function (module, exports) {

  module.exports = {'title':'Help',component:'HelpPage','html': "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n" };

/** *
/ }),
/* 84 */
/** */ (function (module, exports) {

  module.exports = {'title':'Privacy Policy',html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n" };

/** *
/ }),
/* 85 */
/** */ (function (module, exports) {

  module.exports = require('./assets.json');

/** *
/ }),
/* 86 */
/** */ (function (module, exports) {

  module.exports = require('babel-runtime/core-js/get-iterator');

/** *
/ }),
/* 87 */
/** */ (function (module, exports) {

  module.exports = require('babel-runtime/core-js/json/stringify');

/** *
/ }),
/* 88 */
/** */ (function (module, exports) {

  module.exports = require('babel-runtime/helpers/slicedToArray');

/** *
/ }),
/* 89 */
/** */ (function (module, exports) {

  module.exports = require('bluebird');

/** *
/ }),
/* 90 */
/** */ (function (module, exports) {

  module.exports = require('body-parser');

/** *
/ }),
/* 91 */
/** */ (function (module, exports) {

  module.exports = require('classnames');

/** *
/ }),
/* 92 */
/** */ (function (module, exports) {

  module.exports = require('cookie-parser');

/** *
/ }),
/* 93 */
/** */ (function (module, exports) {

  module.exports = require('express');

/** *
/ }),
/* 94 */
/** */ (function (module, exports) {

  module.exports = require('express-graphql');

/** *
/ }),
/* 95 */
/** */ (function (module, exports) {

  module.exports = require('express-jwt');

/** *
/ }),
/* 96 */
/** */ (function (module, exports) {

  module.exports = require('grommet/components/App');

/** *
/ }),
/* 97 */
/** */ (function (module, exports) {

  module.exports = require('grommet/components/Footer');

/** *
/ }),
/* 98 */
/** */ (function (module, exports) {

  module.exports = require('grommet/components/Header');

/** *
/ }),
/* 99 */
/** */ (function (module, exports) {

  module.exports = require('grommet/components/Tab');

/** *
/ }),
/* 100 */
/** */ (function (module, exports) {

  module.exports = require('grommet/components/Tabs');

/** *
/ }),
/* 101 */
/** */ (function (module, exports) {

  module.exports = require('grommet/components/Title');

/** *
/ }),
/* 102 */
/** */ (function (module, exports) {

  module.exports = require('history/createBrowserHistory');

/** *
/ }),
/* 103 */
/** */ (function (module, exports) {

  module.exports = require('jsonwebtoken');

/** *
/ }),
/* 104 */
/** */ (function (module, exports) {

  module.exports = require('node-fetch');

/** *
/ }),
/* 105 */
/** */ (function (module, exports) {

  module.exports = require('passport');

/** *
/ }),
/* 106 */
/** */ (function (module, exports) {

  module.exports = require('passport-facebook');

/** *
/ }),
/* 107 */
/** */ (function (module, exports) {

  module.exports = require('path');

/** *
/ }),
/* 108 */
/** */ (function (module, exports) {

  module.exports = require('pretty-error');

/** *
/ }),
/* 109 */
/** */ (function (module, exports) {

  module.exports = require('react-dom/server');

/** *
/ }),
/* 110 */
/** */ (function (module, exports) {

  module.exports = require('redux-thunk');

/** *
/ }),
/* 111 */
/** */ (function (module, exports) {

  module.exports = require('serialize-javascript');

/** *
/ }),
/* 112 */
/** */ (function (module, exports) {

  module.exports = require('universal-router');

/** *
/ }),
/* 113 */
/** */ (function (module, exports) {

  module.exports = require('util');

/** *
/ }),
/* 114 */
/** */ (function (module, exports, __webpack_require__) {

  __webpack_require__(17);
  module.exports = __webpack_require__(16);


/** *
/ }),
/******/ ]));
// # sourceMappingURL=server.js.map