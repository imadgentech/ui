"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server.ts
var server_exports = {};
__export(server_exports, {
  AspectRatio: () => AspectRatio,
  CTA: () => CTA,
  Cluster: () => Cluster,
  Code: () => Code,
  Container: () => Container,
  Divider: () => Divider,
  FeatureGrid: () => FeatureGrid,
  Flex: () => Flex,
  Footer: () => Footer,
  Grid: () => Grid,
  GridItem: () => GridItem,
  Heading: () => Heading,
  Hero: () => Hero,
  Kbd: () => Kbd,
  Link: () => Link,
  LogoCloud: () => LogoCloud,
  PricingCard: () => PricingCard,
  Section: () => Section,
  Spacer: () => Spacer,
  Stack: () => Stack,
  Surface: () => Surface,
  Testimonial: () => Testimonial,
  Text: () => Text,
  ThemeImage: () => ThemeImage,
  cn: () => cn
});
module.exports = __toCommonJS(server_exports);

// src/lib/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/layout/AspectRatio.tsx
var import_react = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\AspectRatio.module-css
var AspectRatio_default = { "aspectRatio": "imui_AspectRatio_aspectRatio__LRcnbj" };

// src/components/ui/layout/AspectRatio.tsx
function AspectRatio({
  ratio = "1/1",
  className,
  style,
  children
}) {
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: cn(AspectRatio_default.aspectRatio, className),
      style: __spreadValues({ aspectRatio: ratio }, style)
    },
    children
  );
}

// src/components/ui/layout/Cluster.tsx
var import_react2 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Cluster.module-css
var Cluster_default = { "cluster": "imui_Cluster_cluster__D4nnmv", "gap-2": "imui_Cluster_gap-2__X1E-oo", "gap-4": "imui_Cluster_gap-4__4DEMoE", "gap-8": "imui_Cluster_gap-8__DesJ0e", "gap-12": "imui_Cluster_gap-12__GnrBMz", "gap-16": "imui_Cluster_gap-16__SEglL1", "gap-24": "imui_Cluster_gap-24__rvTeUu", "justify-start": "imui_Cluster_justify-start__ciKufn", "justify-center": "imui_Cluster_justify-center__Q4bQJb", "justify-end": "imui_Cluster_justify-end__NV2VNQ", "justify-between": "imui_Cluster_justify-between__mi5_9L", "align-start": "imui_Cluster_align-start__1KAW0j", "align-center": "imui_Cluster_align-center__uiyZ4N", "align-end": "imui_Cluster_align-end__HmRLw-" };

// src/components/ui/layout/Cluster.tsx
function Cluster({
  gap = "8",
  justify = "start",
  align = "center",
  as: Component = "div",
  className,
  style,
  children
}) {
  return /* @__PURE__ */ import_react2.default.createElement(
    Component,
    {
      className: cn(
        Cluster_default.cluster,
        Cluster_default[`gap-${gap}`],
        Cluster_default[`justify-${justify}`],
        Cluster_default[`align-${align}`],
        className
      ),
      style
    },
    children
  );
}

// src/components/ui/layout/Container.tsx
var import_react3 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Container.module-css
var Container_default = { "container": "imui_Container_container__wrRVLX", "max-sm": "imui_Container_max-sm__j0BTml", "max-md": "imui_Container_max-md__ye3yWv", "max-lg": "imui_Container_max-lg___oYXjt", "max-xl": "imui_Container_max-xl__aH3yrD", "max-layout": "imui_Container_max-layout__DzYvyo", "max-full": "imui_Container_max-full__zA-2t8" };

// src/components/ui/layout/Container.tsx
function Container({
  maxWidth = "layout",
  className,
  style,
  children
}) {
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: cn(Container_default.container, Container_default[`max-${maxWidth}`], className), style }, children);
}

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Divider.module-css
var Divider_default = { "divider": "imui_Divider_divider__QkLooP", "horizontal": "imui_Divider_horizontal__AiA4IO", "vertical": "imui_Divider_vertical__dEEyeg" };

// src/components/ui/layout/Divider.tsx
var Divider = ({
  orientation = "horizontal",
  scale = 1,
  className = "",
  style = {},
  opacity = 0.2,
  color = "currentColor",
  length = "100%"
}) => {
  const isHorizontal = orientation === "horizontal";
  const dividerStyle = __spreadProps(__spreadValues({}, style), {
    color,
    opacity,
    [isHorizontal ? "width" : "height"]: length,
    "--divider-scale": `${scale}`
  });
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `${Divider_default.divider} ${Divider_default[orientation]} ${className}`,
      style: dividerStyle,
      role: "separator",
      "aria-orientation": orientation
    }
  );
};

// src/components/ui/layout/Flex.tsx
var import_react4 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Flex.module-css
var Flex_default = { "flex": "imui_Flex_flex__yCkGSj", "fullWidth": "imui_Flex_fullWidth__r4MbY4", "direction-row": "imui_Flex_direction-row__IjKleP", "direction-column": "imui_Flex_direction-column__RKxQqO", "wrap-nowrap": "imui_Flex_wrap-nowrap__RWkFxc", "wrap-wrap": "imui_Flex_wrap-wrap__KA3Iyl", "align-start": "imui_Flex_align-start__XEc9Bo", "align-center": "imui_Flex_align-center__-0HBKQ", "align-end": "imui_Flex_align-end__JTge-X", "align-stretch": "imui_Flex_align-stretch__vBjGfl", "align-baseline": "imui_Flex_align-baseline__RdRZMi", "justify-start": "imui_Flex_justify-start__4Rd8mD", "justify-center": "imui_Flex_justify-center__Ua1XSt", "justify-end": "imui_Flex_justify-end__pGAF04", "justify-between": "imui_Flex_justify-between__QnSwzQ", "justify-around": "imui_Flex_justify-around__CAQqQT", "gap-0": "imui_Flex_gap-0__ofsmyZ", "gap-2": "imui_Flex_gap-2__SnLyVQ", "gap-4": "imui_Flex_gap-4__9cDk4D", "gap-8": "imui_Flex_gap-8___vydLb", "gap-12": "imui_Flex_gap-12__ELwhDT", "gap-16": "imui_Flex_gap-16__VlAG44", "gap-24": "imui_Flex_gap-24__7zNbMt", "gap-32": "imui_Flex_gap-32__PCcyOn", "gap-48": "imui_Flex_gap-48__2q5NAP", "gap-64": "imui_Flex_gap-64__JO8Jyf" };

// src/components/ui/layout/Flex.tsx
function Flex({
  direction = "row",
  wrap = "nowrap",
  align = "stretch",
  justify = "start",
  gap = "0",
  as: Component = "div",
  fullWidth = false,
  className,
  style,
  children
}) {
  return /* @__PURE__ */ import_react4.default.createElement(
    Component,
    {
      className: cn(
        Flex_default.flex,
        Flex_default[`direction-${direction}`],
        Flex_default[`wrap-${wrap}`],
        Flex_default[`align-${align}`],
        Flex_default[`justify-${justify}`],
        Flex_default[`gap-${gap}`],
        fullWidth && Flex_default.fullWidth,
        className
      ),
      style
    },
    children
  );
}

// src/components/ui/layout/Grid.tsx
var import_react5 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Grid.module-css
var Grid_default = { "grid": "imui_Grid_grid__5JWZu_", "align-start": "imui_Grid_align-start__AIkD_1", "align-center": "imui_Grid_align-center__ROtZzB", "align-end": "imui_Grid_align-end__1Uh0br", "align-stretch": "imui_Grid_align-stretch__cWbSmh", "gap-2": "imui_Grid_gap-2__c2-EvA", "gap-4": "imui_Grid_gap-4__j59rkg", "gap-8": "imui_Grid_gap-8__pZbBr-", "gap-12": "imui_Grid_gap-12__bMreo9", "gap-16": "imui_Grid_gap-16__rxhMjp", "gap-24": "imui_Grid_gap-24__gwnuRP", "gap-32": "imui_Grid_gap-32__87VdAr", "gap-48": "imui_Grid_gap-48__lplfs7", "gap-64": "imui_Grid_gap-64__9b5U5V", "cols-1": "imui_Grid_cols-1__fo8vRh", "columns-1": "imui_Grid_columns-1__M80a7j", "cols-2": "imui_Grid_cols-2__cbe2fY", "columns-2": "imui_Grid_columns-2__TnP3uh", "cols-3": "imui_Grid_cols-3__m1cQyT", "columns-3": "imui_Grid_columns-3__SrKKF1", "cols-4": "imui_Grid_cols-4__ljytrh", "columns-4": "imui_Grid_columns-4__TuNzNv", "cols-5": "imui_Grid_cols-5__uflpqr", "columns-5": "imui_Grid_columns-5__sTWTQN", "cols-6": "imui_Grid_cols-6__s1lAIo", "columns-6": "imui_Grid_columns-6__F2twai", "cols-7": "imui_Grid_cols-7__OlKpPM", "columns-7": "imui_Grid_columns-7__wx0Axg", "cols-8": "imui_Grid_cols-8__hlUYpS", "columns-8": "imui_Grid_columns-8__FFWN9U", "cols-9": "imui_Grid_cols-9__NroLUN", "columns-9": "imui_Grid_columns-9__P9KcZA", "cols-10": "imui_Grid_cols-10__PlcFjR", "columns-10": "imui_Grid_columns-10__bKKSvb", "cols-11": "imui_Grid_cols-11__km-len", "columns-11": "imui_Grid_columns-11__Hi6nSL", "cols-12": "imui_Grid_cols-12__Xy3Kd0", "columns-12": "imui_Grid_columns-12__B__gOT", "columns-sm-1": "imui_Grid_columns-sm-1__PQWVYC", "columns-sm-2": "imui_Grid_columns-sm-2__cJVP0O", "columns-sm-3": "imui_Grid_columns-sm-3__cPQdnZ", "columns-sm-4": "imui_Grid_columns-sm-4__fy375c", "columns-sm-5": "imui_Grid_columns-sm-5__vM1sVu", "columns-sm-6": "imui_Grid_columns-sm-6__IviIz-", "columns-sm-7": "imui_Grid_columns-sm-7__5qUcK_", "columns-sm-8": "imui_Grid_columns-sm-8__BdNyeF", "columns-sm-9": "imui_Grid_columns-sm-9__juvIe_", "columns-sm-10": "imui_Grid_columns-sm-10__JrxGXu", "columns-sm-11": "imui_Grid_columns-sm-11__CakGka", "columns-sm-12": "imui_Grid_columns-sm-12__n951VG", "cols-md-1": "imui_Grid_cols-md-1__g8z8jL", "columns-md-1": "imui_Grid_columns-md-1__3dio2h", "cols-md-2": "imui_Grid_cols-md-2__K-1Mju", "columns-md-2": "imui_Grid_columns-md-2__PSqC1d", "cols-md-3": "imui_Grid_cols-md-3__sgEkUc", "columns-md-3": "imui_Grid_columns-md-3__PQoiAZ", "cols-md-4": "imui_Grid_cols-md-4__Zbu4LQ", "columns-md-4": "imui_Grid_columns-md-4__s6PI-T", "cols-md-5": "imui_Grid_cols-md-5__9rxON1", "columns-md-5": "imui_Grid_columns-md-5__wqn4xA", "cols-md-6": "imui_Grid_cols-md-6__uURugv", "columns-md-6": "imui_Grid_columns-md-6__rJ7Vcr", "cols-md-7": "imui_Grid_cols-md-7__R-4VSF", "columns-md-7": "imui_Grid_columns-md-7__7v6fWj", "cols-md-8": "imui_Grid_cols-md-8__4YALZE", "columns-md-8": "imui_Grid_columns-md-8__BCvakF", "cols-md-9": "imui_Grid_cols-md-9__eHL4-P", "columns-md-9": "imui_Grid_columns-md-9__0Cf_g8", "cols-md-10": "imui_Grid_cols-md-10__g4GoZ0", "columns-md-10": "imui_Grid_columns-md-10__--THxt", "cols-md-11": "imui_Grid_cols-md-11__rNxhzc", "columns-md-11": "imui_Grid_columns-md-11__vmBcoQ", "cols-md-12": "imui_Grid_cols-md-12__rN949Z", "columns-md-12": "imui_Grid_columns-md-12__gjp_y2", "cols-lg-1": "imui_Grid_cols-lg-1__kIuyB2", "columns-lg-1": "imui_Grid_columns-lg-1__DkH2NB", "cols-lg-2": "imui_Grid_cols-lg-2__QHOxgt", "columns-lg-2": "imui_Grid_columns-lg-2__AoZRvx", "cols-lg-3": "imui_Grid_cols-lg-3__W0yyeZ", "columns-lg-3": "imui_Grid_columns-lg-3__O3mYx-", "cols-lg-4": "imui_Grid_cols-lg-4__72JnUm", "columns-lg-4": "imui_Grid_columns-lg-4__yByyMY", "cols-lg-5": "imui_Grid_cols-lg-5___ZqhKJ", "columns-lg-5": "imui_Grid_columns-lg-5__8tPf3r", "cols-lg-6": "imui_Grid_cols-lg-6___7lCtQ", "columns-lg-6": "imui_Grid_columns-lg-6__fUZ9z2", "cols-lg-7": "imui_Grid_cols-lg-7__i02BP9", "columns-lg-7": "imui_Grid_columns-lg-7__5kFOdj", "cols-lg-8": "imui_Grid_cols-lg-8__IyM2lV", "columns-lg-8": "imui_Grid_columns-lg-8__KDv34Z", "cols-lg-9": "imui_Grid_cols-lg-9__qOR6VS", "columns-lg-9": "imui_Grid_columns-lg-9__RXOQ_Q", "cols-lg-10": "imui_Grid_cols-lg-10__Nm8SMZ", "columns-lg-10": "imui_Grid_columns-lg-10__j2aFhj", "cols-lg-11": "imui_Grid_cols-lg-11__Ywt5cq", "columns-lg-11": "imui_Grid_columns-lg-11__ESmm4_", "cols-lg-12": "imui_Grid_cols-lg-12__pqA3p2", "columns-lg-12": "imui_Grid_columns-lg-12__Ynbf-7" };

// src/components/ui/layout/Grid.tsx
function getResponsiveClasses(value, prefix, styles) {
  if (!value) return "";
  if (typeof value === "object") {
    const classes = [];
    if (value.base) classes.push(styles[`${prefix}-${value.base}`]);
    if (value.sm) classes.push(styles[`${prefix}-sm-${value.sm}`]);
    if (value.md) classes.push(styles[`${prefix}-md-${value.md}`]);
    if (value.lg) classes.push(styles[`${prefix}-lg-${value.lg}`]);
    return classes.filter(Boolean).join(" ");
  }
  return styles[`${prefix}-${value}`] || "";
}
function Grid(_a) {
  var _b = _a, {
    columns = 12,
    gap = "16",
    align,
    className,
    children
  } = _b, props = __objRest(_b, [
    "columns",
    "gap",
    "align",
    "className",
    "children"
  ]);
  const columnClasses = getResponsiveClasses(columns, "columns", Grid_default);
  return /* @__PURE__ */ import_react5.default.createElement(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: cn(
        Grid_default.grid,
        columnClasses,
        Grid_default[`gap-${gap}`],
        align && Grid_default[`align-${align}`],
        className
      )
    }),
    children
  );
}

// src/components/ui/layout/GridItem.tsx
var import_react6 = __toESM(require("react"));
function getResponsiveClasses2(value, prefix) {
  if (!value) return "";
  if (typeof value === "object") {
    const classes = [];
    if (value.base) classes.push(`${prefix}-${value.base}`);
    if (value.md) classes.push(`${prefix}-md-${value.md}`);
    if (value.lg) classes.push(`${prefix}-lg-${value.lg}`);
    return classes.join(" ");
  }
  return `${prefix}-${value}`;
}
function GridItem({
  span,
  start,
  className,
  style,
  children
}) {
  return /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      className: cn(
        getResponsiveClasses2(span, "span"),
        getResponsiveClasses2(start, "start"),
        className
      ),
      style
    },
    children
  );
}

// src/components/ui/layout/Section.tsx
var import_react7 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Section.module-css
var Section_default = { "section": "imui_Section_section__Uwg13n", "size-sm": "imui_Section_size-sm__eLW-0C", "size-md": "imui_Section_size-md__Jf1UiQ", "size-lg": "imui_Section_size-lg__97aGJJ" };

// src/components/ui/layout/Section.tsx
function Section(_a) {
  var _b = _a, {
    size = "md",
    as: Component = "section",
    className,
    children
  } = _b, props = __objRest(_b, [
    "size",
    "as",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ import_react7.default.createElement(
    Component,
    __spreadProps(__spreadValues({}, props), {
      className: cn(Section_default.section, Section_default[`size-${size}`], className)
    }),
    children
  );
}

// src/components/ui/layout/Spacer.tsx
var import_react8 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Spacer.module-css
var Spacer_default = { "spacer": "imui_Spacer_spacer__uab1d1", "axis-vertical": "imui_Spacer_axis-vertical__K4a72f", "axis-horizontal": "imui_Spacer_axis-horizontal__hmBGgj", "size-2": "imui_Spacer_size-2__x9IK1U", "size-4": "imui_Spacer_size-4__MTC5r-", "size-8": "imui_Spacer_size-8__HaUGUQ", "size-12": "imui_Spacer_size-12__qHKxUJ", "size-16": "imui_Spacer_size-16__djbohs", "size-24": "imui_Spacer_size-24__EPHZAL", "size-32": "imui_Spacer_size-32__di-CMo", "size-48": "imui_Spacer_size-48__DsFCBk", "size-64": "imui_Spacer_size-64__4V7L7U" };

// src/components/ui/layout/Spacer.tsx
function Spacer({
  axis = "vertical",
  size = "16",
  className,
  style
}) {
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      className: cn(
        Spacer_default.spacer,
        Spacer_default[`axis-${axis}`],
        Spacer_default[`size-${size}`],
        className
      ),
      style,
      "aria-hidden": "true"
    }
  );
}

// src/components/ui/layout/Stack.tsx
var import_react9 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Stack.module-css
var Stack_default = { "stack": "imui_Stack_stack__IwDfn2", "gap-0": "imui_Stack_gap-0__GLmxeC", "gap-2": "imui_Stack_gap-2__gFXGTv", "gap-4": "imui_Stack_gap-4___iB_nY", "gap-8": "imui_Stack_gap-8__i5p7a5", "gap-12": "imui_Stack_gap-12__20Pxcz", "gap-16": "imui_Stack_gap-16__GwH0GN", "gap-24": "imui_Stack_gap-24__AZPPdv", "gap-32": "imui_Stack_gap-32__5-n84A", "gap-48": "imui_Stack_gap-48__CV-xJA", "gap-64": "imui_Stack_gap-64__4akbqN", "align-start": "imui_Stack_align-start__ynM4TW", "align-center": "imui_Stack_align-center__YBbo4z", "align-end": "imui_Stack_align-end__1LZox5", "align-stretch": "imui_Stack_align-stretch__FehqSU" };

// src/components/ui/layout/Stack.tsx
function Stack({
  gap = "16",
  align = "stretch",
  as: Component = "div",
  className,
  style,
  children
}) {
  return /* @__PURE__ */ import_react9.default.createElement(
    Component,
    {
      className: cn(Stack_default.stack, Stack_default[`gap-${gap}`], Stack_default[`align-${align}`], className),
      style
    },
    children
  );
}

// src/components/ui/layout/Surface.tsx
var import_react10 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Surface.module-css
var Surface_default = { "surface": "imui_Surface_surface__X7Lz-m", "padding-none": "imui_Surface_padding-none__X88Hu7", "padding-sm": "imui_Surface_padding-sm__j0WADS", "padding-md": "imui_Surface_padding-md__6LWwUc", "padding-lg": "imui_Surface_padding-lg__tLwB98", "padding-xl": "imui_Surface_padding-xl__Xtql6h", "elevation-none": "imui_Surface_elevation-none__KUS-Vi", "elevation-sm": "imui_Surface_elevation-sm__8z8U1p", "elevation-md": "imui_Surface_elevation-md__jv0ZGq", "elevation-lg": "imui_Surface_elevation-lg__kEeuKz", "radius-none": "imui_Surface_radius-none__GKBchZ", "radius-sm": "imui_Surface_radius-sm__pMP8HT", "radius-md": "imui_Surface_radius-md__HU2vA-", "radius-lg": "imui_Surface_radius-lg__GZ_UbM", "radius-xl": "imui_Surface_radius-xl__pRl4bB" };

// src/components/ui/layout/Surface.tsx
function Surface(_a) {
  var _b = _a, {
    padding = "md",
    elevation = "sm",
    radius = "md",
    as: Component = "div",
    className,
    children
  } = _b, props = __objRest(_b, [
    "padding",
    "elevation",
    "radius",
    "as",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ import_react10.default.createElement(
    Component,
    __spreadProps(__spreadValues({}, props), {
      className: cn(
        Surface_default.surface,
        Surface_default[`padding-${padding}`],
        Surface_default[`elevation-${elevation}`],
        Surface_default[`radius-${radius}`],
        className
      )
    }),
    children
  );
}

// src/components/ui/typography/Code.tsx
var import_react11 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Code.module-css
var Code_default = { "inline": "imui_Code_inline__tEbdEd", "block": "imui_Code_block__mAmhiD" };

// src/components/ui/typography/Code.tsx
function Code({
  variant = "inline",
  className,
  style,
  children
}) {
  if (variant === "block") {
    return /* @__PURE__ */ import_react11.default.createElement("pre", { className: cn(Code_default.block, className), style }, /* @__PURE__ */ import_react11.default.createElement("code", null, children));
  }
  return /* @__PURE__ */ import_react11.default.createElement("code", { className: cn(Code_default.inline, className), style }, children);
}

// src/components/ui/typography/Heading.tsx
var import_react12 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Heading.module-css
var Heading_default = { "heading": "imui_Heading_heading__xzupoL", "size-sm": "imui_Heading_size-sm__3cEISW", "size-md": "imui_Heading_size-md__b9WKMV", "size-lg": "imui_Heading_size-lg__Ez9qeP", "size-xl": "imui_Heading_size-xl__d4WZN5", "size-xxl": "imui_Heading_size-xxl__UM0fD6", "size-display": "imui_Heading_size-display__M-GtIP", "align-left": "imui_Heading_align-left__RUWoWl", "align-center": "imui_Heading_align-center__HG90Ui", "align-right": "imui_Heading_align-right__ordfvH", "weight-light": "imui_Heading_weight-light__BRuJKC", "weight-medium": "imui_Heading_weight-medium__4GkdJc", "weight-semibold": "imui_Heading_weight-semibold__0hun4-", "weight-bold": "imui_Heading_weight-bold__NFzuYY" };

// src/components/ui/typography/Heading.tsx
function Heading({
  as: Component = "h2",
  size,
  weight,
  align = "left",
  className,
  style,
  children
}) {
  const defaultSizes = {
    h1: "xxl",
    h2: "xl",
    h3: "lg",
    h4: "md",
    h5: "sm",
    h6: "sm"
  };
  const appliedSize = size || defaultSizes[Component];
  return /* @__PURE__ */ import_react12.default.createElement(
    Component,
    {
      className: cn(
        Heading_default.heading,
        Heading_default[`size-${appliedSize}`],
        Heading_default[`align-${align}`],
        weight && Heading_default[`weight-${weight}`],
        className
      ),
      style
    },
    children
  );
}

// src/components/ui/typography/Kbd.tsx
var import_react13 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Kbd.module-css
var Kbd_default = { "kbd": "imui_Kbd_kbd__jdsxBy" };

// src/components/ui/typography/Kbd.tsx
function Kbd({ className, style, children }) {
  return /* @__PURE__ */ import_react13.default.createElement("kbd", { className: cn(Kbd_default.kbd, className), style }, children);
}

// src/components/ui/typography/Link.tsx
var import_react14 = __toESM(require("react"));
var import_link = __toESM(require("next/link"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Link.module-css
var Link_default = { "link": "imui_Link_link___6YnYd", "tone-default": "imui_Link_tone-default__TwUvOh", "tone-brand": "imui_Link_tone-brand__s6iP9r", "tone-muted": "imui_Link_tone-muted__M2tqfP", "underline-always": "imui_Link_underline-always__053OoW", "underline-hover": "imui_Link_underline-hover__JrC0nj", "underline-never": "imui_Link_underline-never__eck1Mj" };

// src/components/ui/typography/Link.tsx
function Link({
  href,
  underline = "hover",
  tone = "default",
  external: externalProp,
  className,
  style,
  children
}) {
  const isExternal = externalProp != null ? externalProp : href.startsWith("http://") || href.startsWith("https://");
  const linkClasses = cn(
    Link_default.link,
    Link_default[`underline-${underline}`],
    Link_default[`tone-${tone}`],
    className
  );
  if (isExternal) {
    return /* @__PURE__ */ import_react14.default.createElement(
      "a",
      {
        href,
        className: linkClasses,
        style,
        target: "_blank",
        rel: "noopener noreferrer"
      },
      children
    );
  }
  return /* @__PURE__ */ import_react14.default.createElement(import_link.default, { href, className: linkClasses, style }, children);
}

// src/components/ui/typography/Text.tsx
var import_react15 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Text.module-css
var Text_default = { "text": "imui_Text_text__Mec2QD", "size-xs": "imui_Text_size-xs__pmenm-", "size-sm": "imui_Text_size-sm__LEhcKK", "size-md": "imui_Text_size-md__JP5CrK", "size-lg": "imui_Text_size-lg__2yvwby", "tone-default": "imui_Text_tone-default__pSnSpg", "tone-muted": "imui_Text_tone-muted__N3SMzQ", "tone-brand": "imui_Text_tone-brand__8p8rRQ", "tone-danger": "imui_Text_tone-danger__nVPQVo", "weight-normal": "imui_Text_weight-normal__ds4xsL", "weight-medium": "imui_Text_weight-medium__ES_9Ks", "weight-semibold": "imui_Text_weight-semibold__Ddk798", "align-left": "imui_Text_align-left__m1caz4", "align-center": "imui_Text_align-center__9yzF5B", "align-right": "imui_Text_align-right__BWFEZg" };

// src/components/ui/typography/Text.tsx
function Text({
  as: Component = "p",
  size = "md",
  tone = "default",
  weight = "normal",
  align,
  className,
  style,
  children
}) {
  return /* @__PURE__ */ import_react15.default.createElement(
    Component,
    {
      className: cn(
        Text_default.text,
        Text_default[`size-${size}`],
        Text_default[`tone-${tone}`],
        Text_default[`weight-${weight}`],
        align && Text_default[`align-${align}`],
        className
      ),
      style
    },
    children
  );
}

// src/components/ui/marketing/CTA.tsx
var import_react16 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\CTA.module-css
var CTA_default = { "cta": "imui_CTA_cta__2yRyKL", "brand": "imui_CTA_brand___9xWi3", "w3": "imui_CTA_w3__8AfOk7", "org": "imui_CTA_org__5SPdtl", "description": "imui_CTA_description__uF3nVf", "actions": "imui_CTA_actions__MlMmOX" };

// src/components/ui/marketing/CTA.tsx
function CTA({
  title,
  description,
  actions,
  variant = "brand",
  className,
  style
}) {
  return /* @__PURE__ */ import_react16.default.createElement(
    Surface,
    {
      padding: "lg",
      className: cn(CTA_default.cta, CTA_default[variant], className),
      style,
      elevation: "lg",
      radius: "lg"
    },
    /* @__PURE__ */ import_react16.default.createElement(Stack, { gap: "32", align: "center" }, /* @__PURE__ */ import_react16.default.createElement(Stack, { gap: "16", align: "center" }, /* @__PURE__ */ import_react16.default.createElement(Heading, { as: "h2", size: "xl", align: "center" }, title), description && /* @__PURE__ */ import_react16.default.createElement(
      Text,
      {
        size: "lg",
        align: "center",
        className: CTA_default.description
      },
      description
    )), /* @__PURE__ */ import_react16.default.createElement("div", { className: CTA_default.actions }, actions))
  );
}

// src/components/ui/marketing/FeatureGrid.tsx
var import_react17 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\FeatureGrid.module-css
var FeatureGrid_default = { "card": "imui_FeatureGrid_card__Bi1Gww", "icon": "imui_FeatureGrid_icon__MbWrP9" };

// src/components/ui/marketing/FeatureGrid.tsx
function FeatureGrid({
  features,
  columns = 3
}) {
  return /* @__PURE__ */ import_react17.default.createElement(
    Grid,
    {
      columns: { base: 1, md: 2, lg: columns },
      gap: "24"
    },
    features.map((feature, index) => /* @__PURE__ */ import_react17.default.createElement(GridItem, { key: index }, /* @__PURE__ */ import_react17.default.createElement(Surface, { padding: "lg", elevation: "sm", className: FeatureGrid_default.card }, /* @__PURE__ */ import_react17.default.createElement(Stack, { gap: "16" }, feature.icon && /* @__PURE__ */ import_react17.default.createElement("div", { className: FeatureGrid_default.icon }, feature.icon), /* @__PURE__ */ import_react17.default.createElement(Stack, { gap: "8" }, /* @__PURE__ */ import_react17.default.createElement(Heading, { as: "h3", size: "md" }, feature.title), /* @__PURE__ */ import_react17.default.createElement(Text, { tone: "muted", size: "sm" }, feature.description))))))
  );
}

// src/components/ui/marketing/Footer.tsx
var import_react18 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\Footer.module-css
var Footer_default = { "footer": "imui_Footer_footer__ZLfTUC", "finebar": "imui_Footer_finebar__IPKkgi", "fineLeft": "imui_Footer_fineLeft__CKTvvT", "fineRight": "imui_Footer_fineRight__Lxvzuz", "socials": "imui_Footer_socials__yiGvl2", "iconBtn": "imui_Footer_iconBtn__OV8F7M", "footmark": "imui_Footer_footmark__KE71uh", "logo": "imui_Footer_logo__qaBxdC", "brandName": "imui_Footer_brandName__grh2v6" };

// src/components/ui/marketing/Footer.tsx
function Footer({
  brand,
  brandName,
  copyright,
  message,
  socials
}) {
  return /* @__PURE__ */ import_react18.default.createElement("footer", { className: Footer_default.footer }, /* @__PURE__ */ import_react18.default.createElement("div", { className: "wrap" }, /* @__PURE__ */ import_react18.default.createElement("div", { className: Footer_default.finebar }, /* @__PURE__ */ import_react18.default.createElement("div", { className: Footer_default.fineLeft }, /* @__PURE__ */ import_react18.default.createElement("div", null, copyright), message && /* @__PURE__ */ import_react18.default.createElement("div", null, message)), /* @__PURE__ */ import_react18.default.createElement("div", { className: Footer_default.fineRight }, socials && /* @__PURE__ */ import_react18.default.createElement("div", { className: Footer_default.socials }, socials.map((social) => /* @__PURE__ */ import_react18.default.createElement(
    "a",
    {
      key: social.label,
      href: social.href,
      className: Footer_default.iconBtn,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": social.label
    },
    social.icon
  ))), /* @__PURE__ */ import_react18.default.createElement("div", { className: Footer_default.footmark }, /* @__PURE__ */ import_react18.default.createElement("div", { className: Footer_default.logo }, brand), brandName && /* @__PURE__ */ import_react18.default.createElement("span", { className: Footer_default.brandName }, brandName))))));
}

// src/components/ui/marketing/Hero.tsx
var import_react19 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\Hero.module-css
var Hero_default = { "hero": "imui_Hero_hero__Rs38WG", "layout": "imui_Hero_layout__eegtp1", "center": "imui_Hero_center__t1gMaX", "content": "imui_Hero_content__dqHmce", "description": "imui_Hero_description__gku7AI", "visual": "imui_Hero_visual__8kTpbT", "actions": "imui_Hero_actions__gYyC4g", "left": "imui_Hero_left__ssPAsb" };

// src/components/ui/marketing/Hero.tsx
function Hero({
  badge,
  title,
  titleWeight,
  description,
  actions,
  visual,
  align = "center",
  className,
  style
}) {
  return /* @__PURE__ */ import_react19.default.createElement(Section, { size: "sm", className: cn(Hero_default.hero, Hero_default[align], className), style }, /* @__PURE__ */ import_react19.default.createElement(Container, { maxWidth: "layout" }, /* @__PURE__ */ import_react19.default.createElement("div", { className: Hero_default.layout }, /* @__PURE__ */ import_react19.default.createElement("div", { className: Hero_default.content }, /* @__PURE__ */ import_react19.default.createElement(Stack, { gap: "24", align: align === "center" ? "center" : "start" }, badge && /* @__PURE__ */ import_react19.default.createElement("div", { className: Hero_default.badge }, badge), /* @__PURE__ */ import_react19.default.createElement(Heading, { as: "h1", size: "display", align, weight: titleWeight }, title), /* @__PURE__ */ import_react19.default.createElement(
    Text,
    {
      size: "lg",
      tone: "muted",
      align,
      className: Hero_default.description
    },
    description
  ), actions && /* @__PURE__ */ import_react19.default.createElement("div", { className: Hero_default.actions }, actions))), visual && /* @__PURE__ */ import_react19.default.createElement("div", { className: Hero_default.visual }, visual))));
}

// src/components/ui/marketing/LogoCloud.tsx
var import_react20 = __toESM(require("react"));
var import_image = __toESM(require("next/image"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\LogoCloud.module-css
var LogoCloud_default = { "logoCloud": "imui_LogoCloud_logoCloud__CVVnVt", "title": "imui_LogoCloud_title__TGzkTY", "logo": "imui_LogoCloud_logo__Pov7nw" };

// src/components/ui/marketing/LogoCloud.tsx
function LogoCloud({ title, logos }) {
  return /* @__PURE__ */ import_react20.default.createElement("div", { className: LogoCloud_default.logoCloud }, title && /* @__PURE__ */ import_react20.default.createElement("p", { className: LogoCloud_default.title }, title), /* @__PURE__ */ import_react20.default.createElement(Flex, { wrap: "wrap", gap: "32", justify: "center", align: "center" }, logos.map((logo, index) => /* @__PURE__ */ import_react20.default.createElement("div", { key: index, className: LogoCloud_default.logoWrapper }, /* @__PURE__ */ import_react20.default.createElement(
    import_image.default,
    {
      src: logo.src,
      alt: logo.alt,
      width: 120,
      height: 40,
      className: LogoCloud_default.logo,
      style: { objectFit: "contain" }
    }
  )))));
}

// src/components/ui/marketing/PricingCard.tsx
var import_react22 = __toESM(require("react"));

// src/components/ui/data/Badge.tsx
var import_react21 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\Badge.module-css
var Badge_default = { "badge": "imui_Badge_badge__jFbcP3", "variant-neutral": "imui_Badge_variant-neutral__G7Rih2", "variant-brand": "imui_Badge_variant-brand__CPzs4y", "variant-success": "imui_Badge_variant-success__PEhzd_", "variant-warning": "imui_Badge_variant-warning__JeK3C0", "variant-danger": "imui_Badge_variant-danger___MICn6" };

// src/components/ui/data/Badge.tsx
function Badge({
  variant = "neutral",
  className,
  style,
  children
}) {
  return /* @__PURE__ */ import_react21.default.createElement("span", { className: cn(Badge_default.badge, Badge_default[`variant-${variant}`], className), style }, children);
}

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\PricingCard.module-css
var PricingCard_default = { "card": "imui_PricingCard_card__JhD5Uc", "featured": "imui_PricingCard_featured__vLPxQw", "header": "imui_PricingCard_header__yzpC1q", "priceContainer": "imui_PricingCard_priceContainer__l_7-Jh", "price": "imui_PricingCard_price__ZyCu0Y", "frequency": "imui_PricingCard_frequency__z04x0z", "feature": "imui_PricingCard_feature__rE2b_S", "check": "imui_PricingCard_check__q4Ux7p", "action": "imui_PricingCard_action__xVxpAX" };

// src/components/ui/marketing/PricingCard.tsx
function PricingCard({
  name,
  price,
  frequency = "/mo",
  description,
  features,
  action,
  featured = false
}) {
  return /* @__PURE__ */ import_react22.default.createElement(
    Surface,
    {
      padding: "lg",
      elevation: featured ? "lg" : "sm",
      className: cn(PricingCard_default.card, featured && PricingCard_default.featured),
      radius: "lg"
    },
    /* @__PURE__ */ import_react22.default.createElement(Stack, { gap: "32" }, /* @__PURE__ */ import_react22.default.createElement(Stack, { gap: "16" }, /* @__PURE__ */ import_react22.default.createElement("div", { className: PricingCard_default.header }, /* @__PURE__ */ import_react22.default.createElement(Heading, { as: "h3", size: "lg" }, name), featured && /* @__PURE__ */ import_react22.default.createElement(Badge, { variant: "brand" }, "Recommended")), /* @__PURE__ */ import_react22.default.createElement("div", { className: PricingCard_default.priceContainer }, /* @__PURE__ */ import_react22.default.createElement("span", { className: PricingCard_default.price }, price), /* @__PURE__ */ import_react22.default.createElement("span", { className: PricingCard_default.frequency }, frequency)), description && /* @__PURE__ */ import_react22.default.createElement(Text, { size: "sm", tone: "muted" }, description)), /* @__PURE__ */ import_react22.default.createElement(Divider, null), /* @__PURE__ */ import_react22.default.createElement(Stack, { gap: "12" }, features.map((feature, index) => /* @__PURE__ */ import_react22.default.createElement("div", { key: index, className: PricingCard_default.feature }, /* @__PURE__ */ import_react22.default.createElement(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: PricingCard_default.check
      },
      /* @__PURE__ */ import_react22.default.createElement("polyline", { points: "20 6 9 17 4 12" })
    ), /* @__PURE__ */ import_react22.default.createElement(Text, { size: "sm" }, feature)))), /* @__PURE__ */ import_react22.default.createElement("div", { className: PricingCard_default.action }, action))
  );
}

// src/components/ui/marketing/Testimonial.tsx
var import_react24 = __toESM(require("react"));

// src/components/ui/data/Avatar.tsx
var import_react23 = __toESM(require("react"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\Avatar.module-css
var Avatar_default = { "avatar": "imui_Avatar_avatar__LjmObW", "image": "imui_Avatar_image__NaxqRV", "fallback": "imui_Avatar_fallback__KI-HmM", "shape-circle": "imui_Avatar_shape-circle__Q2PSya", "shape-square": "imui_Avatar_shape-square__1C8TQG", "size-sm": "imui_Avatar_size-sm__RWAm54", "size-md": "imui_Avatar_size-md__tr_3WE", "size-lg": "imui_Avatar_size-lg__P6JeNN", "size-xl": "imui_Avatar_size-xl__SQuqJu" };

// src/components/ui/data/Avatar.tsx
function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  shape = "circle",
  className,
  style
}) {
  const [error, setError] = import_react23.default.useState(false);
  return /* @__PURE__ */ import_react23.default.createElement(
    "div",
    {
      className: cn(
        Avatar_default.avatar,
        Avatar_default[`size-${size}`],
        Avatar_default[`shape-${shape}`],
        className
      ),
      style
    },
    src && !error ? /* @__PURE__ */ import_react23.default.createElement(
      "img",
      {
        src,
        alt,
        className: Avatar_default.image,
        onError: () => setError(true)
      }
    ) : /* @__PURE__ */ import_react23.default.createElement("span", { className: Avatar_default.fallback }, fallback)
  );
}

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\Testimonial.module-css
var Testimonial_default = { "card": "imui_Testimonial_card__RBf3tG", "quote": "imui_Testimonial_quote__onst_a", "footer": "imui_Testimonial_footer__DZPGUA" };

// src/components/ui/marketing/Testimonial.tsx
function Testimonial({
  quote,
  author,
  role,
  avatarSrc
}) {
  return /* @__PURE__ */ import_react24.default.createElement(Surface, { padding: "lg", elevation: "sm", className: Testimonial_default.card }, /* @__PURE__ */ import_react24.default.createElement(Stack, { gap: "24" }, /* @__PURE__ */ import_react24.default.createElement(Text, { size: "lg", className: Testimonial_default.quote }, '"', quote, '"'), /* @__PURE__ */ import_react24.default.createElement("div", { className: Testimonial_default.footer }, /* @__PURE__ */ import_react24.default.createElement(
    Avatar,
    {
      src: avatarSrc,
      fallback: author.charAt(0),
      size: "md"
    }
  ), /* @__PURE__ */ import_react24.default.createElement(Stack, { gap: "0" }, /* @__PURE__ */ import_react24.default.createElement(Text, { weight: "semibold", size: "sm" }, author), role && /* @__PURE__ */ import_react24.default.createElement(Text, { size: "xs", tone: "muted" }, role)))));
}

// src/components/ui/marketing/ThemeImage.tsx
var import_react25 = __toESM(require("react"));
var import_image2 = __toESM(require("next/image"));

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\ThemeImage.module-css
var ThemeImage_default = { "lightOnly": "imui_ThemeImage_lightOnly__4obC0G", "darkOnly": "imui_ThemeImage_darkOnly__znk9GF" };

// src/components/ui/marketing/ThemeImage.tsx
function ThemeImage(_a) {
  var _b = _a, {
    lightSrc,
    darkSrc,
    alt,
    className
  } = _b, props = __objRest(_b, [
    "lightSrc",
    "darkSrc",
    "alt",
    "className"
  ]);
  return /* @__PURE__ */ import_react25.default.createElement(import_react25.default.Fragment, null, /* @__PURE__ */ import_react25.default.createElement(
    import_image2.default,
    __spreadProps(__spreadValues({}, props), {
      src: darkSrc,
      alt,
      className: cn(ThemeImage_default.darkOnly, className)
    })
  ), /* @__PURE__ */ import_react25.default.createElement(
    import_image2.default,
    __spreadProps(__spreadValues({}, props), {
      src: lightSrc,
      alt,
      className: cn(ThemeImage_default.lightOnly, className)
    })
  ));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AspectRatio,
  CTA,
  Cluster,
  Code,
  Container,
  Divider,
  FeatureGrid,
  Flex,
  Footer,
  Grid,
  GridItem,
  Heading,
  Hero,
  Kbd,
  Link,
  LogoCloud,
  PricingCard,
  Section,
  Spacer,
  Stack,
  Surface,
  Testimonial,
  Text,
  ThemeImage,
  cn
});
//# sourceMappingURL=server.js.map