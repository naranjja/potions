"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./utils/theme.js

const theme = (0,styles_namespaceObject.createTheme)({
    palette: {
        primary: {
            main: "#14A284"
        }
    },
    components: {
        MuiAppBar: {
            variants: [
                {
                    props: {
                        variant: "app-bar"
                    },
                    style: {
                        backgroundColor: "#14A284",
                        boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
                    }
                },
                {
                    props: {
                        variant: "footer"
                    },
                    style: {
                        backgroundColor: "#2F2F2F"
                    }
                }
            ]
        },
        MuiButton: {
            variants: [
                {
                    props: {
                        color: "primary"
                    },
                    style: {
                        backgroundColor: "rgba(0, 0, 0, 0.08)",
                        color: "black",
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                }
            ]
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "app-title"
                    },
                    style: {
                        fontSize: 30,
                        fontWeight: 400
                    }
                },
                {
                    props: {
                        variant: "footer"
                    },
                    style: {
                        fontSize: 20,
                        fontWeight: 300
                    }
                },
                {
                    props: {
                        variant: "page-title"
                    },
                    style: {
                        fontSize: 20,
                        fontWeight: 300
                    }
                },
                {
                    props: {
                        variant: "recipe-title"
                    },
                    style: {
                        fontSize: 30,
                        fontWeight: 400,
                        textAlign: "center"
                    }
                },
                {
                    props: {
                        variant: "recipe-card-title"
                    },
                    style: {
                        fontSize: 22,
                        fontWeight: 400
                    }
                },
                {
                    props: {
                        variant: "headline"
                    },
                    style: {
                        fontWeight: 400
                    }
                },
                {
                    props: {
                        variant: "title"
                    },
                    style: {
                        fontWeight: 400
                    }
                },
                {
                    props: {
                        variant: "comment"
                    },
                    style: {
                        fontWeight: 300,
                        fontSize: 14
                    }
                },
                {
                    props: {
                        variant: "ingredient"
                    },
                    style: {
                        fontWeight: 300,
                        fontSize: 16
                    }
                },
                {
                    props: {
                        variant: "vessel"
                    },
                    style: {
                        fontWeight: 300,
                        fontSize: 16
                    }
                }
            ]
        }
    }
});

// EXTERNAL MODULE: ./utils/createEmotionCache.js + 1 modules
var createEmotionCache = __webpack_require__(8238);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./pages/_app.js






const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp({ Component , emotionCache =clientSideEmotionCache , pageProps ,  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
            theme: theme,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./utils/createEmotionCache.js

function createEmotionCache() {
    return cache_default()({
        key: "css",
        prepend: true
    });
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1892));
module.exports = __webpack_exports__;

})();