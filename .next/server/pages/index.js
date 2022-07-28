(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5084:
/***/ ((module) => {

// Exports
module.exports = {
	"profile_img": "RecipeCard_profile_img__ddG_y",
	"poison_chip": "RecipeCard_poison_chip___KZv_",
	"tag_chip": "RecipeCard_tag_chip__VsbCJ"
};


/***/ }),

/***/ 3374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/RecipeCard.module.css
var RecipeCard_module = __webpack_require__(5084);
var RecipeCard_module_default = /*#__PURE__*/__webpack_require__.n(RecipeCard_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/RecipeCard.js




const RecipeCard = ({ recipe  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/recipe/${recipe._id}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                padding: 1,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: (RecipeCard_module_default()).profile_img,
                                    src: recipe.profile_img
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 8,
                            zeroMinWidth: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                padding: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                    paddingTop: 1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            variant: "recipe-card-title",
                                            children: recipe.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                            style: {
                                                marginTop: 5
                                            },
                                            container: true,
                                            spacing: 0.5,
                                            children: [
                                                recipe.poisons.map((poison, i)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                        item: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                                            label: poison,
                                                            className: (RecipeCard_module_default()).poison_chip
                                                        })
                                                    }, i)),
                                                recipe.tags.map((tag, i)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                        item: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Chip, {
                                                            label: tag,
                                                            className: (RecipeCard_module_default()).tag_chip
                                                        })
                                                    }, i))
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_RecipeCard = (RecipeCard);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
;// CONCATENATED MODULE: ./components/FilterModal.js




const Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Slide, {
        direction: "up",
        ref: ref,
        ...props
    });
});
function FullScreenDialog({ showFilters , setShowFilters , recipes , setResults , poisons , filterResultsByPoison , ingredients , filterResultsByIngredient ,  }) {
    const { 0: selectedPoisonsTemp , 1: setSelectedPoisonsTemp  } = (0,external_react_.useState)([]);
    const { 0: selectedIngredientsTemp , 1: setSelectedIngredientsTemp  } = (0,external_react_.useState)([]);
    const handleClose = ()=>{
        setShowFilters(false);
    };
    const clearFilters = ()=>{
        setResults(filterResultsByPoison(recipes, []));
        setResults(filterResultsByIngredient(recipes, []));
        setSelectedPoisonsTemp([]);
        setSelectedIngredientsTemp([]);
        handleClose();
    };
    const applyFilterByPoison = ()=>{
        setResults(filterResultsByPoison(recipes, selectedPoisonsTemp));
        handleClose();
    };
    const applyFilterByIngredient = ()=>{
        setResults(filterResultsByIngredient(recipes, selectedIngredientsTemp));
        handleClose();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
            fullScreen: true,
            open: showFilters,
            onClose: handleClose,
            TransitionComponent: Transition,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
                    variant: "app-bar",
                    sx: {
                        position: "relative"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                edge: "start",
                                color: "inherit",
                                onClick: handleClose,
                                "aria-label": "close",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                sx: {
                                    ml: 2,
                                    flex: 1
                                },
                                variant: "page-title",
                                component: "div",
                                children: "Filter recipes"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                variant: "contained",
                                autoFocus: true,
                                color: "error",
                                onClick: clearFilters,
                                children: "Clear"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    padding: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            applyFilterByPoison();
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    variant: "headline",
                                    children: 'Which recipes contain all of these "poisons"?'
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Autocomplete, {
                                    style: {
                                        width: "100%"
                                    },
                                    multiple: true,
                                    options: poisons,
                                    getOptionLabel: (option)=>option,
                                    defaultValue: [],
                                    value: selectedPoisonsTemp,
                                    onChange: (_, val)=>{
                                        setSelectedPoisonsTemp(val);
                                    },
                                    filterSelectedOptions: true,
                                    renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                            ...params
                                        })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    disableElevation: true,
                                    style: {
                                        padding: 15
                                    },
                                    type: "submit",
                                    variant: "contained",
                                    children: "Apply"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    padding: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            applyFilterByIngredient();
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    variant: "headline",
                                    children: "What can I make with these ingredients?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Autocomplete, {
                                    multiple: true,
                                    options: ingredients,
                                    getOptionLabel: (option)=>option,
                                    defaultValue: [],
                                    value: selectedIngredientsTemp,
                                    onChange: (_, val)=>{
                                        setSelectedIngredientsTemp(val);
                                    },
                                    filterSelectedOptions: true,
                                    renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                            ...params
                                        })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    disableElevation: true,
                                    style: {
                                        padding: 15
                                    },
                                    type: "submit",
                                    variant: "contained",
                                    children: "Apply"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/AppBar.js
var AppBar = __webpack_require__(4903);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(3193);
;// CONCATENATED MODULE: ./components/Layout.js




const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AppBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                style: {
                    marginTop: "3rem"
                },
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(110);
;// CONCATENATED MODULE: ./pages/index.js







const filterResultsByName = (recipes, searching)=>{
    return recipes.filter((x)=>x.name.toLowerCase().includes(searching.toLowerCase()));
};
const filterResultsByPoison = (recipes, selectedPoisons)=>{
    if (selectedPoisons.length > 0) {
        return recipes.filter((recipe)=>selectedPoisons.every((poison)=>recipe.poisons.includes(poison)));
    }
    return recipes;
};
const filterResultsByIngredient = (recipes, selectedIngredients)=>{
    if (selectedIngredients.length > 0) {
        return recipes.filter((recipe)=>{
            return recipe.ingredients.every((x)=>{
                const ingredientMatch = selectedIngredients.includes(x.name);
                const alternativeMatch = x.alternatives ? x.alternatives.some((alt)=>selectedIngredients.includes(alt)) : false;
                return ingredientMatch || alternativeMatch;
            });
        });
    }
    return recipes;
};
function Home({ isConnected , recipes , poisons , ingredients  }) {
    const { 0: searching , 1: setSearching  } = (0,external_react_.useState)("");
    const { 0: showFilters , 1: setShowFilters  } = (0,external_react_.useState)(false);
    const { 0: results , 1: setResults  } = (0,external_react_.useState)(recipes);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Layout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                        value: searching,
                        onChange: (e)=>{
                            setSearching(e.target.value);
                            setResults(filterResultsByName(recipes, e.target.value));
                        },
                        label: "Search recipes",
                        type: "search",
                        style: {
                            width: "100%"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        onClick: (e)=>{
                            e.currentTarget.blur();
                            setShowFilters(true);
                        },
                        variant: "contained",
                        disableElevation: true,
                        style: {
                            marginLeft: 15,
                            paddingLeft: 25,
                            paddingRight: 25
                        },
                        children: "Filter"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FullScreenDialog, {
                showFilters: showFilters,
                setShowFilters: setShowFilters,
                recipes: recipes,
                setResults: setResults,
                poisons: poisons,
                filterResultsByPoison: filterResultsByPoison,
                ingredients: ingredients,
                filterResultsByIngredient: filterResultsByIngredient
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Divider, {
                style: {
                    marginTop: 30,
                    marginBottom: 10
                },
                children: [
                    results.length,
                    " RECIPE",
                    results.length !== 1 ? "S" : ""
                ]
            }),
            isConnected && /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                spacing: 2,
                children: results.map((recipe, i)=>/*#__PURE__*/ jsx_runtime_.jsx(components_RecipeCard, {
                        recipe: recipe
                    }, i))
            })
        ]
    });
};
async function getServerSideProps() {
    try {
        const client = await mongodb/* default */.Z;
        const db = await client.db("recepi");
        const recipes = await db.collection("recipes").find({}).toArray();
        let poisons = recipes.map((x)=>x.poisons);
        poisons = [
            ...new Set(poisons.flat())
        ];
        let ingredients = recipes.map((rec)=>{
            return rec.ingredients.map((ing)=>{
                if (ing.alternatives?.length > 0) {
                    return [
                        ing.name,
                        ...ing.alternatives
                    ];
                }
                return ing.name;
            });
        }).flat();
        ingredients = [
            ...new Set(ingredients.flat())
        ];
        return {
            props: {
                isConnected: true,
                recipes,
                poisons,
                ingredients
            }
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                isConnected: false,
                recipes: [],
                poisons: [],
                ingredients: []
            }
        };
    }
}


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,335], () => (__webpack_exec__(3374)));
module.exports = __webpack_exports__;

})();