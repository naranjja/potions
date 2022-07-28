(() => {
var exports = {};
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 7454:
/***/ ((module) => {

// Exports
module.exports = {
	"banner_img": "recipe__id__banner_img__pjltY"
};


/***/ }),

/***/ 8534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_recipe_id_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7454);
/* harmony import */ var _styles_recipe_id_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_recipe_id_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4903);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3193);







const updateLabels = (recipe, servings, measurementUnit)=>{
    recipe.volume = 0;
    recipe.ingredients.map((ing)=>{
        let quantity;
        if (ing.quantifiable === true) {
            switch(measurementUnit){
                case "oz":
                    ing.serving_quantity = ing.quantityOZ;
                    break;
                case "ml":
                    ing.serving_quantity = ing.quantityML;
                    break;
                default:
                    break;
            }
            quantity = ing.serving_quantity * servings;
            ing.label = `${ing.serving_quantity}${measurementUnit} ${ing.name}`;
            if (servings > 1) ing.label += ` (${quantity}${measurementUnit} total)`;
            ing.quantity = quantity;
            recipe.volume += quantity;
        } else {
            ing.serving_quantity = ing.quantity;
            quantity = ing.serving_quantity * servings;
            ing.label = `${ing.serving_quantity} ${ing.unit}`;
            if (servings > 1) ing.label += ` (${quantity} total)`;
        }
        return ing;
    });
    return recipe;
};
const Recipe = ({ recipe , graphs  })=>{
    const { 0: servings , 1: setServings  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { 0: measurementUnit , 1: setMeasurementUnit  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("oz");
    // update labels on render
    recipe = updateLabels(recipe, servings, measurementUnit);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // everytime state changes, update labels
        recipe = updateLabels(recipe, servings, measurementUnit);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AppBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                style: {
                    marginBottom: 100
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_recipe_id_module_css__WEBPACK_IMPORTED_MODULE_6___default().banner_img),
                        src: recipe.banner_img
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        padding: 3,
                        style: {
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "recipe-title",
                            children: recipe.name
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        padding: 2,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    value: servings,
                                    onChange: (e)=>setServings(e.target.value),
                                    label: "Servings",
                                    type: "number",
                                    style: {
                                        width: "100%"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ToggleButtonGroup, {
                                    value: measurementUnit,
                                    exclusive: true,
                                    onChange: (_, val)=>{
                                        if (val !== null) {
                                            setMeasurementUnit(val);
                                        }
                                    },
                                    style: {
                                        marginLeft: 15
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ToggleButton, {
                                            style: {
                                                padding: 15
                                            },
                                            value: "oz",
                                            children: "OZ"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ToggleButton, {
                                            style: {
                                                padding: 15
                                            },
                                            value: "ml",
                                            children: "ML"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        padding: 2,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    xs: 8,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "headline",
                                                children: "Vessel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "vessel",
                                                children: recipe.vessel
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "headline",
                                                children: "Ingredients"
                                            }),
                                            recipe.ingredients.map((ing, i)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    variant: "ingredient",
                                                    children: ing.label ? ing.label : ""
                                                }, i);
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    xs: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        direction: "column",
                                        spacing: 1,
                                        style: {
                                            height: "100%",
                                            paddingLeft: 15
                                        },
                                        children: recipe.ingredients.map((ing, i)=>{
                                            if (ing.quantifiable) {
                                                const height = ing.quantity / recipe.volume * 100;
                                                let color = "gray";
                                                let m = graphs.filter((x)=>x.name === ing.name);
                                                if (m.length > 0) {
                                                    color = m[0].color;
                                                }
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
                                                    elevation: 2,
                                                    style: {
                                                        textAlign: "center",
                                                        height: `${height}%`,
                                                        backgroundColor: color,
                                                        borderRadius: 8,
                                                        padding: 5
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            fontSize: 14,
                                                            marginTop: 5,
                                                            color: "white",
                                                            wordBreak: "break-all"
                                                        },
                                                        children: height < 15 ? "" : ing.name
                                                    })
                                                }, i);
                                            }
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                        style: {
                            marginTop: 30
                        },
                        children: "RECIPE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        padding: 2,
                        children: recipe.steps.map((step, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        component: "p",
                                        variant: "title",
                                        children: [
                                            i + 1,
                                            ". ",
                                            step.title
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        component: "p",
                                        variant: "comment",
                                        children: step.comment
                                    }),
                                    step.ingredients?.map((ing, j)=>{
                                        let m = recipe.ingredients.filter((_ing)=>ing === _ing.name);
                                        if (m.length > 0 && m[0].label) {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                component: "p",
                                                variant: "ingredient",
                                                children: m[0].label
                                            }, j);
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
async function getStaticPaths() {
    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
    const db = await client.db("recepi");
    const recipes = await db.collection("recipes").find({}, {
        _id: 1
    }).toArray();
    const paths = recipes.map((recipe)=>({
            params: {
                _id: recipe._id.toString()
            }
        }));
    return {
        paths,
        fallback: false
    } // { fallback: false } means other routes should 404.
    ;
}
async function getStaticProps({ params  }) {
    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
    const db = await client.db("recepi");
    const recipeMatches = await db.collection("recipes").find({
        _id: params._id
    }).toArray();
    const recipe = recipeMatches.length > 0 ? recipeMatches[0] : null;
    const graphs = await db.collection("graphs").find({}).toArray();
    return {
        props: {
            recipe,
            graphs
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipe);


/***/ }),

/***/ 1593:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ReceiptLong");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,335], () => (__webpack_exec__(8534)));
module.exports = __webpack_exports__;

})();