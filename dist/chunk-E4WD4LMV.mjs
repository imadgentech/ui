var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/lib/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/layout/Stack.tsx
import React2 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Stack.module.css
var Stack_default = {};

// src/components/ui/layout/Stack.tsx
function Stack({
  gap = "16",
  align = "stretch",
  as: Component = "div",
  className,
  style,
  children
}) {
  return /* @__PURE__ */ React2.createElement(
    Component,
    {
      className: cn(Stack_default.stack, Stack_default[`gap-${gap}`], Stack_default[`align-${align}`], className),
      style
    },
    children
  );
}

// src/components/ui/layout/Grid.tsx
import React3 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Grid.module.css
var Grid_default = {};

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
  return /* @__PURE__ */ React3.createElement(
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

// src/components/ui/layout/AspectRatio.tsx
import React4 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\AspectRatio.module.css
var AspectRatio_default = {};

// src/components/ui/layout/AspectRatio.tsx
function AspectRatio({
  ratio = "1/1",
  className,
  children
}) {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: cn(AspectRatio_default.aspectRatio, className),
      style: { aspectRatio: ratio }
    },
    children
  );
}

// src/components/ui/layout/Cluster.tsx
import React5 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Cluster.module.css
var Cluster_default = {};

// src/components/ui/layout/Cluster.tsx
function Cluster({
  gap = "8",
  justify = "start",
  align = "center",
  as: Component = "div",
  className,
  children
}) {
  return /* @__PURE__ */ React5.createElement(
    Component,
    {
      className: cn(
        Cluster_default.cluster,
        Cluster_default[`gap-${gap}`],
        Cluster_default[`justify-${justify}`],
        Cluster_default[`align-${align}`],
        className
      )
    },
    children
  );
}

// src/components/ui/layout/Container.tsx
import React6 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Container.module.css
var Container_default = {};

// src/components/ui/layout/Container.tsx
function Container({
  maxWidth = "layout",
  className,
  children
}) {
  return /* @__PURE__ */ React6.createElement("div", { className: cn(Container_default.container, Container_default[`max-${maxWidth}`], className) }, children);
}

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Divider.module.css
var Divider_default = {};

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
import React7 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Flex.module.css
var Flex_default = {};

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
  return /* @__PURE__ */ React7.createElement(
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

// src/components/ui/layout/GridItem.tsx
import React8 from "react";
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
  children
}) {
  return /* @__PURE__ */ React8.createElement(
    "div",
    {
      className: cn(
        getResponsiveClasses2(span, "span"),
        getResponsiveClasses2(start, "start"),
        className
      )
    },
    children
  );
}

// src/components/ui/layout/Section.tsx
import React9 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Section.module.css
var Section_default = {};

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
  return /* @__PURE__ */ React9.createElement(
    Component,
    __spreadProps(__spreadValues({}, props), {
      className: cn(Section_default.section, Section_default[`size-${size}`], className)
    }),
    children
  );
}

// src/components/ui/layout/Spacer.tsx
import React10 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Spacer.module.css
var Spacer_default = {};

// src/components/ui/layout/Spacer.tsx
function Spacer({
  axis = "vertical",
  size = "16",
  className
}) {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: cn(
        Spacer_default.spacer,
        Spacer_default[`axis-${axis}`],
        Spacer_default[`size-${size}`],
        className
      ),
      "aria-hidden": "true"
    }
  );
}

// src/components/ui/layout/Surface.tsx
import React11 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\layout\Surface.module.css
var Surface_default = {};

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
  return /* @__PURE__ */ React11.createElement(
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

// src/components/ui/data/Avatar.tsx
import React12 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\Avatar.module.css
var Avatar_default = {};

// src/components/ui/data/Avatar.tsx
function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  shape = "circle",
  className
}) {
  const [error, setError] = React12.useState(false);
  return /* @__PURE__ */ React12.createElement(
    "div",
    {
      className: cn(
        Avatar_default.avatar,
        Avatar_default[`size-${size}`],
        Avatar_default[`shape-${shape}`],
        className
      )
    },
    src && !error ? /* @__PURE__ */ React12.createElement(
      "img",
      {
        src,
        alt,
        className: Avatar_default.image,
        onError: () => setError(true)
      }
    ) : /* @__PURE__ */ React12.createElement("span", { className: Avatar_default.fallback }, fallback)
  );
}

// src/components/ui/data/Badge.tsx
import React13 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\Badge.module.css
var Badge_default = {};

// src/components/ui/data/Badge.tsx
function Badge({
  variant = "neutral",
  className,
  children
}) {
  return /* @__PURE__ */ React13.createElement("span", { className: cn(Badge_default.badge, Badge_default[`variant-${variant}`], className) }, children);
}

// src/components/ui/typography/Heading.tsx
import React14 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Heading.module.css
var Heading_default = {};

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
  return /* @__PURE__ */ React14.createElement(
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

// src/components/ui/typography/Text.tsx
import React15 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Text.module.css
var Text_default = {};

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
  return /* @__PURE__ */ React15.createElement(
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

// src/components/ui/typography/Code.tsx
import React16 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Code.module.css
var Code_default = {};

// src/components/ui/typography/Code.tsx
function Code({
  variant = "inline",
  className,
  children
}) {
  if (variant === "block") {
    return /* @__PURE__ */ React16.createElement("pre", { className: cn(Code_default.block, className) }, /* @__PURE__ */ React16.createElement("code", null, children));
  }
  return /* @__PURE__ */ React16.createElement("code", { className: cn(Code_default.inline, className) }, children);
}

// src/components/ui/typography/Kbd.tsx
import React17 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Kbd.module.css
var Kbd_default = {};

// src/components/ui/typography/Kbd.tsx
function Kbd({ className, children }) {
  return /* @__PURE__ */ React17.createElement("kbd", { className: cn(Kbd_default.kbd, className) }, children);
}

// src/components/ui/typography/Link.tsx
import React18 from "react";
import NextLink from "next/link";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\typography\Link.module.css
var Link_default = {};

// src/components/ui/typography/Link.tsx
function Link({
  href,
  underline = "hover",
  tone = "default",
  external: externalProp,
  className,
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
    return /* @__PURE__ */ React18.createElement(
      "a",
      {
        href,
        className: linkClasses,
        target: "_blank",
        rel: "noopener noreferrer"
      },
      children
    );
  }
  return /* @__PURE__ */ React18.createElement(NextLink, { href, className: linkClasses }, children);
}

// src/components/ui/marketing/CTA.tsx
import React19 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\CTA.module.css
var CTA_default = {};

// src/components/ui/marketing/CTA.tsx
function CTA({
  title,
  description,
  actions,
  variant = "brand",
  className
}) {
  return /* @__PURE__ */ React19.createElement(
    Surface,
    {
      padding: "lg",
      className: cn(CTA_default.cta, CTA_default[variant], className),
      elevation: "lg",
      radius: "lg"
    },
    /* @__PURE__ */ React19.createElement(Stack, { gap: "32", align: "center" }, /* @__PURE__ */ React19.createElement(Stack, { gap: "16", align: "center" }, /* @__PURE__ */ React19.createElement(Heading, { as: "h2", size: "xl", align: "center" }, title), description && /* @__PURE__ */ React19.createElement(
      Text,
      {
        size: "lg",
        align: "center",
        className: CTA_default.description
      },
      description
    )), /* @__PURE__ */ React19.createElement("div", { className: CTA_default.actions }, actions))
  );
}

// src/components/ui/marketing/FeatureGrid.tsx
import React20 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\FeatureGrid.module.css
var FeatureGrid_default = {};

// src/components/ui/marketing/FeatureGrid.tsx
function FeatureGrid({
  features,
  columns = 3
}) {
  return /* @__PURE__ */ React20.createElement(
    Grid,
    {
      columns: { base: 1, md: 2, lg: columns },
      gap: "24"
    },
    features.map((feature, index) => /* @__PURE__ */ React20.createElement(GridItem, { key: index }, /* @__PURE__ */ React20.createElement(Surface, { padding: "lg", elevation: "sm", className: FeatureGrid_default.card }, /* @__PURE__ */ React20.createElement(Stack, { gap: "16" }, feature.icon && /* @__PURE__ */ React20.createElement("div", { className: FeatureGrid_default.icon }, feature.icon), /* @__PURE__ */ React20.createElement(Stack, { gap: "8" }, /* @__PURE__ */ React20.createElement(Heading, { as: "h3", size: "md" }, feature.title), /* @__PURE__ */ React20.createElement(Text, { tone: "muted", size: "sm" }, feature.description))))))
  );
}

// src/components/ui/marketing/Footer.tsx
import React21 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\Footer.module.css
var Footer_default = {};

// src/components/ui/marketing/Footer.tsx
function Footer({
  brand,
  brandName,
  copyright,
  message,
  socials
}) {
  return /* @__PURE__ */ React21.createElement("footer", { className: Footer_default.footer }, /* @__PURE__ */ React21.createElement("div", { className: "wrap" }, /* @__PURE__ */ React21.createElement("div", { className: Footer_default.finebar }, /* @__PURE__ */ React21.createElement("div", { className: Footer_default.fineLeft }, /* @__PURE__ */ React21.createElement("div", null, copyright), message && /* @__PURE__ */ React21.createElement("div", null, message)), /* @__PURE__ */ React21.createElement("div", { className: Footer_default.fineRight }, socials && /* @__PURE__ */ React21.createElement("div", { className: Footer_default.socials }, socials.map((social) => /* @__PURE__ */ React21.createElement(
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
  ))), /* @__PURE__ */ React21.createElement("div", { className: Footer_default.footmark }, /* @__PURE__ */ React21.createElement("div", { className: Footer_default.logo }, brand), brandName && /* @__PURE__ */ React21.createElement("span", { className: Footer_default.brandName }, brandName))))));
}

// src/components/ui/marketing/Hero.tsx
import React22 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\Hero.module.css
var Hero_default = {};

// src/components/ui/marketing/Hero.tsx
function Hero({
  badge,
  title,
  titleWeight,
  description,
  actions,
  visual,
  align = "center",
  className
}) {
  return /* @__PURE__ */ React22.createElement(Section, { size: "sm", className: cn(Hero_default.hero, Hero_default[align], className) }, /* @__PURE__ */ React22.createElement(Container, { maxWidth: "layout" }, /* @__PURE__ */ React22.createElement("div", { className: Hero_default.layout }, /* @__PURE__ */ React22.createElement("div", { className: Hero_default.content }, /* @__PURE__ */ React22.createElement(Stack, { gap: "24", align: align === "center" ? "center" : "start" }, badge && /* @__PURE__ */ React22.createElement("div", { className: Hero_default.badge }, badge), /* @__PURE__ */ React22.createElement(Heading, { as: "h1", size: "display", align, weight: titleWeight }, title), /* @__PURE__ */ React22.createElement(
    Text,
    {
      size: "lg",
      tone: "muted",
      align,
      className: Hero_default.description
    },
    description
  ), actions && /* @__PURE__ */ React22.createElement("div", { className: Hero_default.actions }, actions))), visual && /* @__PURE__ */ React22.createElement("div", { className: Hero_default.visual }, visual))));
}

// src/components/ui/marketing/LogoCloud.tsx
import React23 from "react";
import Image from "next/image";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\LogoCloud.module.css
var LogoCloud_default = {};

// src/components/ui/marketing/LogoCloud.tsx
function LogoCloud({ title, logos }) {
  return /* @__PURE__ */ React23.createElement("div", { className: LogoCloud_default.logoCloud }, title && /* @__PURE__ */ React23.createElement("p", { className: LogoCloud_default.title }, title), /* @__PURE__ */ React23.createElement(Flex, { wrap: "wrap", gap: "32", justify: "center", align: "center" }, logos.map((logo, index) => /* @__PURE__ */ React23.createElement("div", { key: index, className: LogoCloud_default.logoWrapper }, /* @__PURE__ */ React23.createElement(
    Image,
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
import React24 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\PricingCard.module.css
var PricingCard_default = {};

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
  return /* @__PURE__ */ React24.createElement(
    Surface,
    {
      padding: "lg",
      elevation: featured ? "lg" : "sm",
      className: cn(PricingCard_default.card, featured && PricingCard_default.featured),
      radius: "lg"
    },
    /* @__PURE__ */ React24.createElement(Stack, { gap: "32" }, /* @__PURE__ */ React24.createElement(Stack, { gap: "16" }, /* @__PURE__ */ React24.createElement("div", { className: PricingCard_default.header }, /* @__PURE__ */ React24.createElement(Heading, { as: "h3", size: "lg" }, name), featured && /* @__PURE__ */ React24.createElement(Badge, { variant: "brand" }, "Recommended")), /* @__PURE__ */ React24.createElement("div", { className: PricingCard_default.priceContainer }, /* @__PURE__ */ React24.createElement("span", { className: PricingCard_default.price }, price), /* @__PURE__ */ React24.createElement("span", { className: PricingCard_default.frequency }, frequency)), description && /* @__PURE__ */ React24.createElement(Text, { size: "sm", tone: "muted" }, description)), /* @__PURE__ */ React24.createElement(Divider, null), /* @__PURE__ */ React24.createElement(Stack, { gap: "12" }, features.map((feature, index) => /* @__PURE__ */ React24.createElement("div", { key: index, className: PricingCard_default.feature }, /* @__PURE__ */ React24.createElement(
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
      /* @__PURE__ */ React24.createElement("polyline", { points: "20 6 9 17 4 12" })
    ), /* @__PURE__ */ React24.createElement(Text, { size: "sm" }, feature)))), /* @__PURE__ */ React24.createElement("div", { className: PricingCard_default.action }, action))
  );
}

// src/components/ui/marketing/Testimonial.tsx
import React25 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\Testimonial.module.css
var Testimonial_default = {};

// src/components/ui/marketing/Testimonial.tsx
function Testimonial({
  quote,
  author,
  role,
  avatarSrc
}) {
  return /* @__PURE__ */ React25.createElement(Surface, { padding: "lg", elevation: "sm", className: Testimonial_default.card }, /* @__PURE__ */ React25.createElement(Stack, { gap: "24" }, /* @__PURE__ */ React25.createElement(Text, { size: "lg", className: Testimonial_default.quote }, '"', quote, '"'), /* @__PURE__ */ React25.createElement("div", { className: Testimonial_default.footer }, /* @__PURE__ */ React25.createElement(
    Avatar,
    {
      src: avatarSrc,
      fallback: author.charAt(0),
      size: "md"
    }
  ), /* @__PURE__ */ React25.createElement(Stack, { gap: "0" }, /* @__PURE__ */ React25.createElement(Text, { weight: "semibold", size: "sm" }, author), role && /* @__PURE__ */ React25.createElement(Text, { size: "xs", tone: "muted" }, role)))));
}

// src/components/ui/marketing/ThemeImage.tsx
import React26 from "react";
import Image2 from "next/image";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\marketing\ThemeImage.module.css
var ThemeImage_default = {};

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
  return /* @__PURE__ */ React26.createElement(React26.Fragment, null, /* @__PURE__ */ React26.createElement(
    Image2,
    __spreadProps(__spreadValues({}, props), {
      src: darkSrc,
      alt,
      className: cn(ThemeImage_default.darkOnly, className)
    })
  ), /* @__PURE__ */ React26.createElement(
    Image2,
    __spreadProps(__spreadValues({}, props), {
      src: lightSrc,
      alt,
      className: cn(ThemeImage_default.lightOnly, className)
    })
  ));
}

export {
  __spreadValues,
  __objRest,
  cn,
  Stack,
  Grid,
  AspectRatio,
  Cluster,
  Container,
  Divider,
  Flex,
  GridItem,
  Section,
  Spacer,
  Surface,
  Avatar,
  Badge,
  Heading,
  Text,
  Code,
  Kbd,
  Link,
  CTA,
  FeatureGrid,
  Footer,
  Hero,
  LogoCloud,
  PricingCard,
  Testimonial,
  ThemeImage
};
