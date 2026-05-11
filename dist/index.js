"use strict";
"use client";
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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AspectRatio: () => AspectRatio,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Breadcrumbs: () => Breadcrumbs,
  Button: () => Button,
  CTA: () => CTA,
  ChatPage: () => ChatPage,
  ChatProvider: () => ChatProvider,
  Checkbox: () => Checkbox,
  Cluster: () => Cluster,
  Code: () => Code,
  Container: () => Container,
  CursorGlow: () => CursorGlow,
  Dialog: () => Dialog,
  Divider: () => Divider,
  EmbersBGE: () => EmbersBGE,
  EmptyState: () => EmptyState,
  ErrorText: () => ErrorText,
  FeatureGrid: () => FeatureGrid,
  Flex: () => Flex,
  Footer: () => Footer,
  Form: () => Form,
  FormField: () => FormField,
  Grid: () => Grid,
  GridItem: () => GridItem,
  Heading: () => Heading,
  HelperText: () => HelperText,
  Hero: () => Hero,
  IconButton: () => IconButton,
  ImBgAurora: () => ImBgAurora,
  Input: () => Input,
  Kbd: () => Kbd,
  Label: () => Label,
  LightTheme: () => LightTheme,
  Link: () => Link,
  LogoCloud: () => LogoCloud,
  MobileMenu: () => MobileMenu,
  MobileMenuContent: () => MobileMenuContent,
  NavLink: () => NavLink,
  Navbar: () => Navbar,
  NetBGE: () => NetBGE,
  Pagination: () => Pagination,
  Popover: () => Popover,
  PricingCard: () => PricingCard,
  Providers: () => Providers,
  RadioGroup: () => RadioGroup,
  Section: () => Section,
  Select: () => Select,
  Skeleton: () => Skeleton,
  Spacer: () => Spacer,
  Stack: () => Stack,
  StatCard: () => StatCard,
  Surface: () => Surface,
  SwarmsBGE: () => SwarmsBGE,
  Switch: () => Switch,
  Table: () => Table,
  Tabs: () => Tabs,
  Testimonial: () => Testimonial,
  Text: () => Text,
  Textarea: () => Textarea,
  ThemeImage: () => ThemeImage,
  ToastProvider: () => ToastProvider,
  Tooltip: () => Tooltip,
  WaveformBackground: () => WaveformBackground,
  cn: () => cn,
  useChatContext: () => useChatContext,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/lib/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/Providers.tsx
var import_next_themes = require("next-themes");
function Providers({ children }) {
  return /* @__PURE__ */ React.createElement(import_next_themes.ThemeProvider, { attribute: "data-theme", defaultTheme: "dark", enableSystem: true }, children);
}

// src/components/ui/forms/Button.tsx
var import_react = __toESM(require("react"));

// src/components/ui/forms/Button.module.css
var Button_default = {};

// src/components/ui/forms/Button.tsx
var Button = import_react.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      rounded = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      children,
      as: Component = "button"
    } = _b, props = __objRest(_b, [
      "variant",
      "size",
      "loading",
      "fullWidth",
      "rounded",
      "leftIcon",
      "rightIcon",
      "className",
      "disabled",
      "children",
      "as"
    ]);
    return /* @__PURE__ */ import_react.default.createElement(
      Component,
      __spreadValues({
        ref,
        className: cn(
          Button_default.button,
          Button_default[`variant-${variant}`],
          Button_default[`size-${size}`],
          loading && Button_default.loading,
          fullWidth && Button_default.fullWidth,
          rounded && Button_default.rounded,
          className
        ),
        type: Component === "button" ? props.type || "button" : void 0,
        disabled: disabled || loading
      }, props),
      loading && /* @__PURE__ */ import_react.default.createElement("span", { className: Button_default.spinner }),
      !loading && leftIcon && /* @__PURE__ */ import_react.default.createElement("span", { className: Button_default.leftIcon }, leftIcon),
      /* @__PURE__ */ import_react.default.createElement("span", { className: Button_default.content }, children),
      !loading && rightIcon && /* @__PURE__ */ import_react.default.createElement("span", { className: Button_default.rightIcon }, rightIcon)
    );
  }
);
Button.displayName = "Button";

// src/components/ui/forms/Checkbox.tsx
var import_react2 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));

// src/components/ui/forms/Checkbox.module.css
var Checkbox_default = {};

// src/components/ui/forms/Checkbox.tsx
function Checkbox({
  id,
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  className,
  disabled
}) {
  return /* @__PURE__ */ import_react2.default.createElement("div", { className: cn(Checkbox_default.wrapper, disabled && Checkbox_default.disabled, className) }, /* @__PURE__ */ import_react2.default.createElement(
    CheckboxPrimitive.Root,
    {
      id,
      className: Checkbox_default.checkbox,
      checked,
      defaultChecked,
      onCheckedChange,
      disabled
    },
    /* @__PURE__ */ import_react2.default.createElement(CheckboxPrimitive.Indicator, { className: Checkbox_default.indicator }, /* @__PURE__ */ import_react2.default.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: Checkbox_default.icon
      },
      /* @__PURE__ */ import_react2.default.createElement("polyline", { points: "20 6 9 17 4 12" })
    ))
  ), label && /* @__PURE__ */ import_react2.default.createElement("label", { htmlFor: id, className: Checkbox_default.label }, label));
}

// src/components/ui/forms/ErrorText.tsx
var import_react3 = __toESM(require("react"));

// src/components/ui/forms/ErrorText.module.css
var ErrorText_default = {};

// src/components/ui/forms/ErrorText.tsx
function ErrorText({ className, style, children }) {
  return /* @__PURE__ */ import_react3.default.createElement("p", { className: cn(ErrorText_default.errorText, className), style, role: "alert" }, children);
}

// src/components/ui/forms/Form.tsx
var import_react8 = __toESM(require("react"));

// src/components/ui/forms/Form.module.css
var Form_default = {};

// src/components/ui/forms/Input.tsx
var import_react4 = __toESM(require("react"));

// src/components/ui/forms/Input.module.css
var Input_default = {};

// src/components/ui/forms/Input.tsx
var Input = import_react4.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      inputSize = "md",
      invalid = false,
      startAdornment,
      endAdornment,
      className,
      disabled
    } = _b, props = __objRest(_b, [
      "inputSize",
      "invalid",
      "startAdornment",
      "endAdornment",
      "className",
      "disabled"
    ]);
    if (startAdornment || endAdornment) {
      return /* @__PURE__ */ import_react4.default.createElement(
        "div",
        {
          className: cn(
            Input_default.wrapper,
            Input_default[`size-${inputSize}`],
            invalid && Input_default.invalid,
            disabled && Input_default.disabled
          )
        },
        startAdornment && /* @__PURE__ */ import_react4.default.createElement("span", { className: Input_default.startAdornment }, startAdornment),
        /* @__PURE__ */ import_react4.default.createElement(
          "input",
          __spreadValues({
            ref,
            className: cn(Input_default.input, className),
            disabled
          }, props)
        ),
        endAdornment && /* @__PURE__ */ import_react4.default.createElement("span", { className: Input_default.endAdornment }, endAdornment)
      );
    }
    return /* @__PURE__ */ import_react4.default.createElement(
      "input",
      __spreadValues({
        ref,
        className: cn(
          Input_default.inputStandalone,
          Input_default[`size-${inputSize}`],
          invalid && Input_default.invalid,
          disabled && Input_default.disabled,
          className
        ),
        disabled
      }, props)
    );
  }
);
Input.displayName = "Input";

// src/components/ui/forms/Textarea.tsx
var import_react5 = __toESM(require("react"));

// src/components/ui/forms/Textarea.module.css
var Textarea_default = {};

// src/components/ui/forms/Textarea.tsx
var Textarea = import_react5.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      textareaSize = "md",
      invalid = false,
      resize = "vertical",
      className,
      disabled
    } = _b, props = __objRest(_b, [
      "textareaSize",
      "invalid",
      "resize",
      "className",
      "disabled"
    ]);
    return /* @__PURE__ */ import_react5.default.createElement(
      "textarea",
      __spreadValues({
        ref,
        className: cn(
          Textarea_default.textarea,
          Textarea_default[`size-${textareaSize}`],
          Textarea_default[`resize-${resize}`],
          invalid && Textarea_default.invalid,
          disabled && Textarea_default.disabled,
          className
        ),
        disabled
      }, props)
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/ui/layout/Stack.tsx
var import_react6 = __toESM(require("react"));

// src/components/ui/layout/Stack.module.css
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
  return /* @__PURE__ */ import_react6.default.createElement(
    Component,
    {
      className: cn(Stack_default.stack, Stack_default[`gap-${gap}`], Stack_default[`align-${align}`], className),
      style
    },
    children
  );
}

// src/components/ui/layout/Grid.tsx
var import_react7 = __toESM(require("react"));

// src/components/ui/layout/Grid.module.css
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
  return /* @__PURE__ */ import_react7.default.createElement(
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

// src/components/ui/forms/Form.tsx
var Form = import_react8.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      fields,
      onSubmit,
      submitLabel = "Submit",
      submitVariant = "primary",
      showSubmit = true,
      className,
      children
    } = _b, props = __objRest(_b, [
      "fields",
      "onSubmit",
      "submitLabel",
      "submitVariant",
      "showSubmit",
      "className",
      "children"
    ]);
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      onSubmit(e, data);
    };
    const textareaFields = fields.filter((f) => f.type === "textarea");
    const inputFields = fields.filter((f) => f.type !== "textarea");
    return /* @__PURE__ */ import_react8.default.createElement(
      "form",
      __spreadValues({
        ref,
        className: cn(Form_default.form, className),
        onSubmit: handleSubmit
      }, props),
      /* @__PURE__ */ import_react8.default.createElement(Stack, { gap: "24" }, textareaFields.map((field) => /* @__PURE__ */ import_react8.default.createElement(
        Textarea,
        {
          key: field.name,
          name: field.name,
          placeholder: field.placeholder,
          required: field.required,
          rows: field.rows || 4
        }
      )), inputFields.length > 0 && /* @__PURE__ */ import_react8.default.createElement(Grid, { columns: { base: 1, md: inputFields.length }, gap: "16" }, inputFields.map((field) => /* @__PURE__ */ import_react8.default.createElement(
        Input,
        {
          key: field.name,
          type: field.type,
          name: field.name,
          placeholder: field.placeholder,
          required: field.required
        }
      ))), children, showSubmit && /* @__PURE__ */ import_react8.default.createElement("div", { className: Form_default.actions }, /* @__PURE__ */ import_react8.default.createElement(Button, { variant: submitVariant, type: "submit" }, submitLabel)))
    );
  }
);
Form.displayName = "Form";

// src/components/ui/forms/FormField.tsx
var import_react11 = __toESM(require("react"));

// src/components/ui/forms/Label.tsx
var import_react9 = __toESM(require("react"));

// src/components/ui/forms/Label.module.css
var Label_default = {};

// src/components/ui/forms/Label.tsx
function Label(_a) {
  var _b = _a, { required, className, children } = _b, props = __objRest(_b, ["required", "className", "children"]);
  return /* @__PURE__ */ import_react9.default.createElement("label", __spreadValues({ className: cn(Label_default.label, className) }, props), children, required && /* @__PURE__ */ import_react9.default.createElement("span", { className: Label_default.required, title: "Required" }, "*"));
}

// src/components/ui/forms/HelperText.tsx
var import_react10 = __toESM(require("react"));

// src/components/ui/forms/HelperText.module.css
var HelperText_default = {};

// src/components/ui/forms/HelperText.tsx
function HelperText({ className, children }) {
  return /* @__PURE__ */ import_react10.default.createElement("p", { className: cn(HelperText_default.helperText, className) }, children);
}

// src/components/ui/forms/FormField.module.css
var FormField_default = {};

// src/components/ui/forms/FormField.tsx
function FormField({
  id,
  label,
  hint,
  error,
  required,
  className,
  children
}) {
  return /* @__PURE__ */ import_react11.default.createElement("div", { className: cn(FormField_default.formField, className) }, label && /* @__PURE__ */ import_react11.default.createElement(Label, { htmlFor: id, required }, label), children, error ? /* @__PURE__ */ import_react11.default.createElement(ErrorText, null, error) : hint ? /* @__PURE__ */ import_react11.default.createElement(HelperText, null, hint) : null);
}

// src/components/ui/forms/IconButton.tsx
var import_react12 = __toESM(require("react"));

// src/components/ui/forms/IconButton.module.css
var IconButton_default = {};

// src/components/ui/forms/IconButton.tsx
var IconButton = import_react12.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      variant = "primary",
      size = "md",
      shape = "square",
      loading = false,
      "aria-label": ariaLabel,
      className,
      disabled,
      children
    } = _b, props = __objRest(_b, [
      "variant",
      "size",
      "shape",
      "loading",
      "aria-label",
      "className",
      "disabled",
      "children"
    ]);
    return /* @__PURE__ */ import_react12.default.createElement(
      "button",
      __spreadValues({
        ref,
        className: cn(
          IconButton_default.iconButton,
          IconButton_default[`variant-${variant}`],
          IconButton_default[`size-${size}`],
          IconButton_default[`shape-${shape}`],
          loading && IconButton_default.loading,
          className
        ),
        type: props.type || "button",
        "aria-label": ariaLabel,
        disabled: disabled || loading
      }, props),
      loading ? /* @__PURE__ */ import_react12.default.createElement("span", { className: IconButton_default.spinner }) : children
    );
  }
);
IconButton.displayName = "IconButton";

// src/components/ui/forms/RadioGroup.tsx
var import_react13 = __toESM(require("react"));
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));

// src/components/ui/forms/RadioGroup.module.css
var RadioGroup_default = {};

// src/components/ui/forms/RadioGroup.tsx
function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  items,
  orientation = "vertical",
  className
}) {
  return /* @__PURE__ */ import_react13.default.createElement(
    RadioGroupPrimitive.Root,
    {
      className: cn(RadioGroup_default.root, RadioGroup_default[orientation], className),
      value,
      defaultValue,
      onValueChange
    },
    items.map((item) => /* @__PURE__ */ import_react13.default.createElement("div", { key: item.value, className: RadioGroup_default.itemWrapper }, /* @__PURE__ */ import_react13.default.createElement(
      RadioGroupPrimitive.Item,
      {
        id: item.id,
        value: item.value,
        disabled: item.disabled,
        className: RadioGroup_default.item
      },
      /* @__PURE__ */ import_react13.default.createElement(RadioGroupPrimitive.Indicator, { className: RadioGroup_default.indicator })
    ), /* @__PURE__ */ import_react13.default.createElement(
      "label",
      {
        htmlFor: item.id,
        className: cn(RadioGroup_default.label, item.disabled && RadioGroup_default.disabledLabel)
      },
      item.label
    )))
  );
}

// src/components/ui/forms/Select.tsx
var import_react14 = __toESM(require("react"));

// src/components/ui/forms/Select.module.css
var Select_default = {};

// src/components/ui/forms/Select.tsx
var Select = import_react14.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      selectSize = "md",
      invalid = false,
      options,
      className,
      disabled,
      children
    } = _b, props = __objRest(_b, [
      "selectSize",
      "invalid",
      "options",
      "className",
      "disabled",
      "children"
    ]);
    return /* @__PURE__ */ import_react14.default.createElement("div", { className: cn(Select_default.wrapper, Select_default[`size-${selectSize}`]) }, /* @__PURE__ */ import_react14.default.createElement(
      "select",
      __spreadValues({
        ref,
        className: cn(
          Select_default.select,
          invalid && Select_default.invalid,
          disabled && Select_default.disabled,
          className
        ),
        disabled
      }, props),
      options ? options.map((opt) => /* @__PURE__ */ import_react14.default.createElement("option", { key: opt.value, value: opt.value }, opt.label)) : children
    ), /* @__PURE__ */ import_react14.default.createElement("span", { className: Select_default.icon, "aria-hidden": "true" }, "\xE2\u2013\xBC"));
  }
);
Select.displayName = "Select";

// src/components/ui/forms/Switch.tsx
var import_react15 = __toESM(require("react"));
var SwitchPrimitive = __toESM(require("@radix-ui/react-switch"));

// src/components/ui/forms/Switch.module.css
var Switch_default = {};

// src/components/ui/forms/Switch.tsx
function Switch({
  id,
  "aria-label": ariaLabel,
  checked,
  defaultChecked,
  onCheckedChange,
  className,
  disabled
}) {
  return /* @__PURE__ */ import_react15.default.createElement(
    SwitchPrimitive.Root,
    {
      id,
      className: cn(Switch_default.switch, className),
      checked,
      defaultChecked,
      onCheckedChange,
      disabled,
      "aria-label": ariaLabel
    },
    /* @__PURE__ */ import_react15.default.createElement(SwitchPrimitive.Thumb, { className: Switch_default.thumb })
  );
}

// src/components/ui/layout/AspectRatio.tsx
var import_react16 = __toESM(require("react"));

// src/components/ui/layout/AspectRatio.module.css
var AspectRatio_default = {};

// src/components/ui/layout/AspectRatio.tsx
function AspectRatio({
  ratio = "1/1",
  className,
  children
}) {
  return /* @__PURE__ */ import_react16.default.createElement(
    "div",
    {
      className: cn(AspectRatio_default.aspectRatio, className),
      style: { aspectRatio: ratio }
    },
    children
  );
}

// src/components/ui/layout/Cluster.tsx
var import_react17 = __toESM(require("react"));

// src/components/ui/layout/Cluster.module.css
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
  return /* @__PURE__ */ import_react17.default.createElement(
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
var import_react18 = __toESM(require("react"));

// src/components/ui/layout/Container.module.css
var Container_default = {};

// src/components/ui/layout/Container.tsx
function Container({
  maxWidth = "layout",
  className,
  children
}) {
  return /* @__PURE__ */ import_react18.default.createElement("div", { className: cn(Container_default.container, Container_default[`max-${maxWidth}`], className) }, children);
}

// src/components/ui/layout/Divider.module.css
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
var import_react19 = __toESM(require("react"));

// src/components/ui/layout/Flex.module.css
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
  return /* @__PURE__ */ import_react19.default.createElement(
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
var import_react20 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react20.default.createElement(
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
var import_react21 = __toESM(require("react"));

// src/components/ui/layout/Section.module.css
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
  return /* @__PURE__ */ import_react21.default.createElement(
    Component,
    __spreadProps(__spreadValues({}, props), {
      className: cn(Section_default.section, Section_default[`size-${size}`], className)
    }),
    children
  );
}

// src/components/ui/layout/Spacer.tsx
var import_react22 = __toESM(require("react"));

// src/components/ui/layout/Spacer.module.css
var Spacer_default = {};

// src/components/ui/layout/Spacer.tsx
function Spacer({
  axis = "vertical",
  size = "16",
  className
}) {
  return /* @__PURE__ */ import_react22.default.createElement(
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
var import_react23 = __toESM(require("react"));

// src/components/ui/layout/Surface.module.css
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
  return /* @__PURE__ */ import_react23.default.createElement(
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

// src/components/ui/navigation/Breadcrumbs.tsx
var import_react24 = __toESM(require("react"));
var import_link = __toESM(require("next/link"));

// src/components/ui/navigation/Breadcrumbs.module.css
var Breadcrumbs_default = {};

// src/components/ui/navigation/Breadcrumbs.tsx
function Breadcrumbs({
  items,
  className,
  separator = "/"
}) {
  return /* @__PURE__ */ import_react24.default.createElement("nav", { className: cn(Breadcrumbs_default.breadcrumbs, className), "aria-label": "Breadcrumb" }, /* @__PURE__ */ import_react24.default.createElement("ol", { className: Breadcrumbs_default.list }, items.map((item, index) => {
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ import_react24.default.createElement("li", { key: item.label, className: Breadcrumbs_default.item }, !isLast && item.href ? /* @__PURE__ */ import_react24.default.createElement(import_link.default, { href: item.href, className: Breadcrumbs_default.link }, item.label) : /* @__PURE__ */ import_react24.default.createElement("span", { className: Breadcrumbs_default.current, "aria-current": "page" }, item.label), !isLast && /* @__PURE__ */ import_react24.default.createElement("span", { className: Breadcrumbs_default.separator, "aria-hidden": "true" }, separator));
  })));
}

// src/components/ui/navigation/MobileMenu.tsx
var import_react25 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));

// src/components/ui/navigation/MobileMenu.module.css
var MobileMenu_default = {};

// src/components/ui/navigation/MobileMenu.tsx
function MobileMenu({
  trigger,
  children,
  title = ""
}) {
  return /* @__PURE__ */ import_react25.default.createElement(DialogPrimitive.Root, null, /* @__PURE__ */ import_react25.default.createElement(DialogPrimitive.Trigger, { asChild: true }, trigger), /* @__PURE__ */ import_react25.default.createElement(DialogPrimitive.Portal, null, /* @__PURE__ */ import_react25.default.createElement(DialogPrimitive.Overlay, { className: MobileMenu_default.overlay }), /* @__PURE__ */ import_react25.default.createElement(DialogPrimitive.Content, { className: MobileMenu_default.content }, /* @__PURE__ */ import_react25.default.createElement(DialogPrimitive.Title, { className: MobileMenu_default.srOnly }, title || "Navigation Menu"), /* @__PURE__ */ import_react25.default.createElement(DialogPrimitive.Description, { className: MobileMenu_default.srOnly }, "Mobile navigation menu"), /* @__PURE__ */ import_react25.default.createElement("div", { className: MobileMenu_default.header }, /* @__PURE__ */ import_react25.default.createElement(DialogPrimitive.Close, { className: MobileMenu_default.close, "aria-label": "Close" }, /* @__PURE__ */ import_react25.default.createElement(
    "svg",
    {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react25.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ import_react25.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ))), /* @__PURE__ */ import_react25.default.createElement("div", { className: MobileMenu_default.body }, children))));
}

// src/components/ui/navigation/MobileMenuContent.tsx
var import_react27 = __toESM(require("react"));
var DialogPrimitive2 = __toESM(require("@radix-ui/react-dialog"));

// src/components/ui/navigation/NavLink.tsx
var import_react26 = __toESM(require("react"));
var import_link2 = __toESM(require("next/link"));
var import_navigation = require("next/navigation");

// src/components/ui/navigation/NavLink.module.css
var NavLink_default = {};

// src/components/ui/navigation/NavLink.tsx
function NavLink(_a) {
  var _b = _a, {
    href,
    children,
    className,
    isActive: isActiveProp
  } = _b, props = __objRest(_b, [
    "href",
    "children",
    "className",
    "isActive"
  ]);
  const pathname = (0, import_navigation.usePathname)();
  const isActive = isActiveProp !== void 0 ? isActiveProp : pathname === href || typeof href === "string" && href !== "/" && (pathname == null ? void 0 : pathname.startsWith(href));
  return /* @__PURE__ */ import_react26.default.createElement(
    import_link2.default,
    __spreadValues({
      href,
      className: cn(
        NavLink_default.navLink,
        isActive && NavLink_default.active,
        className
      ),
      "aria-current": isActive ? "page" : void 0
    }, props),
    children
  );
}

// src/components/ui/navigation/MobileMenuContent.module.css
var MobileMenuContent_default = {};

// src/components/ui/navigation/MobileMenuContent.tsx
function MobileMenuContent({ links, actions }) {
  return /* @__PURE__ */ import_react27.default.createElement("div", { className: MobileMenuContent_default.content }, /* @__PURE__ */ import_react27.default.createElement("div", { className: MobileMenuContent_default.logoArea }, /* @__PURE__ */ import_react27.default.createElement("img", { className: "logo-dark", src: "/media/logo/imadgen-logo-dark.png", alt: "IMADGEN" }), /* @__PURE__ */ import_react27.default.createElement("img", { className: "logo-light", src: "/media/logo/imadgen-logo-light.png", alt: "IMADGEN" }), /* @__PURE__ */ import_react27.default.createElement("span", null, "IMADGEN")), /* @__PURE__ */ import_react27.default.createElement("nav", { className: MobileMenuContent_default.linksStack }, /* @__PURE__ */ import_react27.default.createElement(DialogPrimitive2.Close, { asChild: true }, /* @__PURE__ */ import_react27.default.createElement(
    NavLink,
    {
      href: "/",
      className: MobileMenuContent_default.navLink
    },
    "Home"
  )), links.map((link) => /* @__PURE__ */ import_react27.default.createElement(DialogPrimitive2.Close, { key: link.href, asChild: true }, /* @__PURE__ */ import_react27.default.createElement(
    NavLink,
    {
      href: link.href,
      className: MobileMenuContent_default.navLink
    },
    link.label
  )))), actions && /* @__PURE__ */ import_react27.default.createElement("div", { className: MobileMenuContent_default.actions }, actions));
}

// src/components/ui/navigation/Navbar.tsx
var import_react28 = __toESM(require("react"));

// src/components/ui/navigation/Navbar.module.css
var Navbar_default = {};

// src/components/ui/navigation/Navbar.tsx
function Navbar({
  brand,
  links,
  actions,
  className,
  sticky = true
}) {
  return /* @__PURE__ */ import_react28.default.createElement("header", { className: cn(Navbar_default.navbar, sticky && Navbar_default.sticky, className) }, /* @__PURE__ */ import_react28.default.createElement("div", { className: "wrap", style: { width: "100%", height: "100%" } }, /* @__PURE__ */ import_react28.default.createElement(Flex, { align: "center", justify: "between", className: Navbar_default.flex }, /* @__PURE__ */ import_react28.default.createElement("div", { className: Navbar_default.brand }, brand), /* @__PURE__ */ import_react28.default.createElement("nav", { className: Navbar_default.desktopNav }, /* @__PURE__ */ import_react28.default.createElement(Flex, { gap: "24", align: "center" }, links.map((link) => /* @__PURE__ */ import_react28.default.createElement(NavLink, { key: link.href, href: link.href }, link.label)))), /* @__PURE__ */ import_react28.default.createElement("div", { className: Navbar_default.rightSection }, actions && /* @__PURE__ */ import_react28.default.createElement("div", { className: Navbar_default.actions }, actions), /* @__PURE__ */ import_react28.default.createElement("div", { className: Navbar_default.mobileNav }, /* @__PURE__ */ import_react28.default.createElement(
    MobileMenu,
    {
      trigger: /* @__PURE__ */ import_react28.default.createElement(
        IconButton,
        {
          variant: "ghost",
          "aria-label": "Toggle menu",
          className: Navbar_default.burger
        },
        /* @__PURE__ */ import_react28.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react28.default.createElement("rect", { y: "4", width: "24", height: "2", rx: "1", fill: "currentColor" }), /* @__PURE__ */ import_react28.default.createElement("rect", { y: "11", width: "24", height: "2", rx: "1", fill: "currentColor" }), /* @__PURE__ */ import_react28.default.createElement("rect", { y: "18", width: "24", height: "2", rx: "1", fill: "currentColor" }))
      )
    },
    /* @__PURE__ */ import_react28.default.createElement(MobileMenuContent, { links, actions })
  ))))));
}

// src/components/ui/navigation/Pagination.tsx
var import_react29 = __toESM(require("react"));

// src/components/ui/navigation/Pagination.module.css
var Pagination_default = {};

// src/components/ui/navigation/Pagination.tsx
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className
}) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  return /* @__PURE__ */ import_react29.default.createElement(
    "nav",
    {
      className: cn(Pagination_default.pagination, className),
      "aria-label": "Pagination"
    },
    /* @__PURE__ */ import_react29.default.createElement(
      Button,
      {
        variant: "secondary",
        size: "sm",
        disabled: !canGoPrev,
        onClick: () => onPageChange(currentPage - 1),
        className: Pagination_default.prev
      },
      "Previous"
    ),
    /* @__PURE__ */ import_react29.default.createElement("div", { className: Pagination_default.info }, "Page ", /* @__PURE__ */ import_react29.default.createElement("span", { className: Pagination_default.current }, currentPage), " of ", totalPages),
    /* @__PURE__ */ import_react29.default.createElement(
      Button,
      {
        variant: "secondary",
        size: "sm",
        disabled: !canGoNext,
        onClick: () => onPageChange(currentPage + 1),
        className: Pagination_default.next
      },
      "Next"
    )
  );
}

// src/components/ui/navigation/Tabs.tsx
var import_react30 = __toESM(require("react"));
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));

// src/components/ui/navigation/Tabs.module.css
var Tabs_default = {};

// src/components/ui/navigation/Tabs.tsx
function Tabs({
  defaultValue,
  value,
  onValueChange,
  items,
  className
}) {
  return /* @__PURE__ */ import_react30.default.createElement(
    TabsPrimitive.Root,
    {
      defaultValue,
      value,
      onValueChange,
      className: cn(className)
    },
    /* @__PURE__ */ import_react30.default.createElement(TabsPrimitive.List, { className: Tabs_default.list }, items.map((item) => /* @__PURE__ */ import_react30.default.createElement(
      TabsPrimitive.Trigger,
      {
        key: item.value,
        value: item.value,
        className: Tabs_default.trigger
      },
      item.label
    ))),
    items.map((item) => item.content && /* @__PURE__ */ import_react30.default.createElement(
      TabsPrimitive.Content,
      {
        key: item.value,
        value: item.value,
        className: Tabs_default.content
      },
      item.content
    ))
  );
}

// src/components/ui/data/Accordion.tsx
var import_react31 = __toESM(require("react"));
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"));

// src/components/ui/data/Accordion.module.css
var Accordion_default = {};

// src/components/ui/data/Accordion.tsx
function Accordion({
  items,
  type = "single",
  collapsible = true,
  className
}) {
  return /* @__PURE__ */ import_react31.default.createElement(
    AccordionPrimitive.Root,
    {
      type,
      collapsible,
      className: cn(Accordion_default.root, className)
    },
    items.map((item) => /* @__PURE__ */ import_react31.default.createElement(
      AccordionPrimitive.Item,
      {
        key: item.value,
        value: item.value,
        disabled: item.disabled,
        className: Accordion_default.item
      },
      /* @__PURE__ */ import_react31.default.createElement(AccordionPrimitive.Header, { className: Accordion_default.header }, /* @__PURE__ */ import_react31.default.createElement(AccordionPrimitive.Trigger, { className: Accordion_default.trigger }, item.title, /* @__PURE__ */ import_react31.default.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: Accordion_default.chevron
        },
        /* @__PURE__ */ import_react31.default.createElement("polyline", { points: "6 9 12 15 18 9" })
      ))),
      /* @__PURE__ */ import_react31.default.createElement(AccordionPrimitive.Content, { className: Accordion_default.content }, /* @__PURE__ */ import_react31.default.createElement("div", { className: Accordion_default.contentInner }, item.content))
    ))
  );
}

// src/components/ui/data/Avatar.tsx
var import_react32 = __toESM(require("react"));

// src/components/ui/data/Avatar.module.css
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
  const [error, setError] = import_react32.default.useState(false);
  return /* @__PURE__ */ import_react32.default.createElement(
    "div",
    {
      className: cn(
        Avatar_default.avatar,
        Avatar_default[`size-${size}`],
        Avatar_default[`shape-${shape}`],
        className
      )
    },
    src && !error ? /* @__PURE__ */ import_react32.default.createElement(
      "img",
      {
        src,
        alt,
        className: Avatar_default.image,
        onError: () => setError(true)
      }
    ) : /* @__PURE__ */ import_react32.default.createElement("span", { className: Avatar_default.fallback }, fallback)
  );
}

// src/components/ui/data/Badge.tsx
var import_react33 = __toESM(require("react"));

// src/components/ui/data/Badge.module.css
var Badge_default = {};

// src/components/ui/data/Badge.tsx
function Badge({
  variant = "neutral",
  className,
  children
}) {
  return /* @__PURE__ */ import_react33.default.createElement("span", { className: cn(Badge_default.badge, Badge_default[`variant-${variant}`], className) }, children);
}

// src/components/ui/data/EmptyState.tsx
var import_react36 = __toESM(require("react"));

// src/components/ui/typography/Heading.tsx
var import_react34 = __toESM(require("react"));

// src/components/ui/typography/Heading.module.css
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
  return /* @__PURE__ */ import_react34.default.createElement(
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
var import_react35 = __toESM(require("react"));

// src/components/ui/typography/Text.module.css
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
  return /* @__PURE__ */ import_react35.default.createElement(
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

// src/components/ui/data/EmptyState.module.css
var EmptyState_default = {};

// src/components/ui/data/EmptyState.tsx
function EmptyState({
  icon,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ import_react36.default.createElement("div", { className: cn(EmptyState_default.emptyState, className) }, /* @__PURE__ */ import_react36.default.createElement(Stack, { gap: "16", align: "center" }, icon && /* @__PURE__ */ import_react36.default.createElement("div", { className: EmptyState_default.icon }, icon), /* @__PURE__ */ import_react36.default.createElement(Stack, { gap: "8", align: "center" }, /* @__PURE__ */ import_react36.default.createElement(Heading, { as: "h3", size: "lg", align: "center" }, title), description && /* @__PURE__ */ import_react36.default.createElement(Text, { tone: "muted", align: "center", className: EmptyState_default.description }, description)), action && /* @__PURE__ */ import_react36.default.createElement("div", { className: EmptyState_default.action }, action)));
}

// src/components/ui/data/Skeleton.tsx
var import_react37 = __toESM(require("react"));

// src/components/ui/data/Skeleton.module.css
var Skeleton_default = {};

// src/components/ui/data/Skeleton.tsx
function Skeleton({
  width = "100%",
  height = "1em",
  radius = "md",
  shimmer = true,
  className
}) {
  return /* @__PURE__ */ import_react37.default.createElement(
    "div",
    {
      className: cn(
        Skeleton_default.skeleton,
        Skeleton_default[`radius-${radius}`],
        shimmer && Skeleton_default.shimmer,
        className
      ),
      style: {
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height
      }
    }
  );
}

// src/components/ui/data/StatCard.tsx
var import_react38 = __toESM(require("react"));

// src/components/ui/data/StatCard.module.css
var StatCard_default = {};

// src/components/ui/data/StatCard.tsx
function StatCard({
  label,
  value,
  note,
  variant = "neutral",
  className
}) {
  return /* @__PURE__ */ import_react38.default.createElement(
    Surface,
    {
      padding: "lg",
      elevation: "sm",
      radius: "lg",
      className: cn(StatCard_default.statCard, StatCard_default[`variant-${variant}`], className)
    },
    /* @__PURE__ */ import_react38.default.createElement(Stack, { gap: "8", align: "center" }, /* @__PURE__ */ import_react38.default.createElement(Text, { size: "sm", tone: "muted", className: StatCard_default.label }, label), /* @__PURE__ */ import_react38.default.createElement(Heading, { as: "h3", size: "xl", className: StatCard_default.value }, value), note && /* @__PURE__ */ import_react38.default.createElement(Text, { size: "xs", tone: "muted", className: StatCard_default.note }, note))
  );
}

// src/components/ui/data/Table.tsx
var import_react39 = __toESM(require("react"));

// src/components/ui/data/Table.module.css
var Table_default = {};

// src/components/ui/data/Table.tsx
function Table({
  headers,
  rows,
  className,
  striped = false
}) {
  return /* @__PURE__ */ import_react39.default.createElement("div", { className: cn(Table_default.wrapper, className) }, /* @__PURE__ */ import_react39.default.createElement("table", { className: cn(Table_default.table, striped && Table_default.striped) }, /* @__PURE__ */ import_react39.default.createElement("thead", null, /* @__PURE__ */ import_react39.default.createElement("tr", null, headers.map((header) => /* @__PURE__ */ import_react39.default.createElement("th", { key: header, className: Table_default.th }, header)))), /* @__PURE__ */ import_react39.default.createElement("tbody", null, rows.map((row, rowIndex) => /* @__PURE__ */ import_react39.default.createElement("tr", { key: rowIndex, className: Table_default.tr }, row.map((cell, cellIndex) => /* @__PURE__ */ import_react39.default.createElement("td", { key: cellIndex, className: Table_default.td }, cell)))))));
}

// src/components/ui/overlays/Dialog.tsx
var import_react40 = __toESM(require("react"));
var DialogPrimitive3 = __toESM(require("@radix-ui/react-dialog"));

// src/components/ui/overlays/Dialog.module.css
var Dialog_default = {};

// src/components/ui/overlays/Dialog.tsx
function Dialog({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children
}) {
  return /* @__PURE__ */ import_react40.default.createElement(DialogPrimitive3.Root, { open, onOpenChange }, trigger && /* @__PURE__ */ import_react40.default.createElement(DialogPrimitive3.Trigger, { asChild: true }, trigger), /* @__PURE__ */ import_react40.default.createElement(DialogPrimitive3.Portal, null, /* @__PURE__ */ import_react40.default.createElement(DialogPrimitive3.Overlay, { className: Dialog_default.overlay }), /* @__PURE__ */ import_react40.default.createElement(DialogPrimitive3.Content, { className: Dialog_default.content }, /* @__PURE__ */ import_react40.default.createElement("div", { className: Dialog_default.header }, title && /* @__PURE__ */ import_react40.default.createElement(DialogPrimitive3.Title, { className: Dialog_default.title }, title), description && /* @__PURE__ */ import_react40.default.createElement(DialogPrimitive3.Description, { className: Dialog_default.description }, description), /* @__PURE__ */ import_react40.default.createElement(DialogPrimitive3.Close, { className: Dialog_default.close, "aria-label": "Close" }, "\xC3\u2014")), /* @__PURE__ */ import_react40.default.createElement("div", { className: Dialog_default.body }, children))));
}

// src/components/ui/overlays/Popover.tsx
var import_react41 = __toESM(require("react"));
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));

// src/components/ui/overlays/Popover.module.css
var Popover_default = {};

// src/components/ui/overlays/Popover.tsx
function Popover({
  trigger,
  children,
  open,
  onOpenChange,
  className
}) {
  return /* @__PURE__ */ import_react41.default.createElement(PopoverPrimitive.Root, { open, onOpenChange }, /* @__PURE__ */ import_react41.default.createElement(PopoverPrimitive.Trigger, { asChild: true }, trigger), /* @__PURE__ */ import_react41.default.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ import_react41.default.createElement(
    PopoverPrimitive.Content,
    {
      className: cn(Popover_default.content, className),
      sideOffset: 8
    },
    children,
    /* @__PURE__ */ import_react41.default.createElement(PopoverPrimitive.Arrow, { className: Popover_default.arrow })
  )));
}

// src/components/ui/overlays/Toast.tsx
var import_react42 = __toESM(require("react"));

// src/components/ui/overlays/Toast.module.css
var Toast_default = {};

// src/components/ui/overlays/Toast.tsx
var ToastContext = (0, import_react42.createContext)(void 0);
var useToast = () => {
  const context = (0, import_react42.useContext)(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
function ToastProvider({ children }) {
  const [toasts, setToasts] = (0, import_react42.useState)([]);
  const removeToast = (0, import_react42.useCallback)((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const addToast = (0, import_react42.useCallback)((message, type = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 5e3);
  }, [removeToast]);
  return /* @__PURE__ */ import_react42.default.createElement(ToastContext.Provider, { value: { addToast, removeToast } }, children, /* @__PURE__ */ import_react42.default.createElement("div", { className: Toast_default.container }, toasts.map((toast) => /* @__PURE__ */ import_react42.default.createElement(
    "div",
    {
      key: toast.id,
      className: cn(Toast_default.toast, Toast_default[toast.type]),
      onClick: () => removeToast(toast.id)
    },
    toast.message
  ))));
}

// src/components/ui/overlays/Tooltip.tsx
var import_react43 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));

// src/components/ui/overlays/Tooltip.module.css
var Tooltip_default = {};

// src/components/ui/overlays/Tooltip.tsx
function Tooltip({
  children,
  content,
  side = "top",
  className
}) {
  return /* @__PURE__ */ import_react43.default.createElement(TooltipPrimitive.Provider, { delayDuration: 300 }, /* @__PURE__ */ import_react43.default.createElement(TooltipPrimitive.Root, null, /* @__PURE__ */ import_react43.default.createElement(TooltipPrimitive.Trigger, { asChild: true }, children), /* @__PURE__ */ import_react43.default.createElement(TooltipPrimitive.Portal, null, /* @__PURE__ */ import_react43.default.createElement(
    TooltipPrimitive.Content,
    {
      className: cn(Tooltip_default.content, className),
      side,
      sideOffset: 4
    },
    content,
    /* @__PURE__ */ import_react43.default.createElement(TooltipPrimitive.Arrow, { className: Tooltip_default.arrow })
  ))));
}

// src/components/ui/typography/Code.tsx
var import_react44 = __toESM(require("react"));

// src/components/ui/typography/Code.module.css
var Code_default = {};

// src/components/ui/typography/Code.tsx
function Code({
  variant = "inline",
  className,
  children
}) {
  if (variant === "block") {
    return /* @__PURE__ */ import_react44.default.createElement("pre", { className: cn(Code_default.block, className) }, /* @__PURE__ */ import_react44.default.createElement("code", null, children));
  }
  return /* @__PURE__ */ import_react44.default.createElement("code", { className: cn(Code_default.inline, className) }, children);
}

// src/components/ui/typography/Kbd.tsx
var import_react45 = __toESM(require("react"));

// src/components/ui/typography/Kbd.module.css
var Kbd_default = {};

// src/components/ui/typography/Kbd.tsx
function Kbd({ className, children }) {
  return /* @__PURE__ */ import_react45.default.createElement("kbd", { className: cn(Kbd_default.kbd, className) }, children);
}

// src/components/ui/typography/Link.tsx
var import_react46 = __toESM(require("react"));
var import_link3 = __toESM(require("next/link"));

// src/components/ui/typography/Link.module.css
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
    return /* @__PURE__ */ import_react46.default.createElement(
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
  return /* @__PURE__ */ import_react46.default.createElement(import_link3.default, { href, className: linkClasses }, children);
}

// src/components/ui/marketing/CTA.tsx
var import_react47 = __toESM(require("react"));

// src/components/ui/marketing/CTA.module.css
var CTA_default = {};

// src/components/ui/marketing/CTA.tsx
function CTA({
  title,
  description,
  actions,
  variant = "brand",
  className
}) {
  return /* @__PURE__ */ import_react47.default.createElement(
    Surface,
    {
      padding: "lg",
      className: cn(CTA_default.cta, CTA_default[variant], className),
      elevation: "lg",
      radius: "lg"
    },
    /* @__PURE__ */ import_react47.default.createElement(Stack, { gap: "32", align: "center" }, /* @__PURE__ */ import_react47.default.createElement(Stack, { gap: "16", align: "center" }, /* @__PURE__ */ import_react47.default.createElement(Heading, { as: "h2", size: "xl", align: "center" }, title), description && /* @__PURE__ */ import_react47.default.createElement(
      Text,
      {
        size: "lg",
        align: "center",
        className: CTA_default.description
      },
      description
    )), /* @__PURE__ */ import_react47.default.createElement("div", { className: CTA_default.actions }, actions))
  );
}

// src/components/ui/marketing/FeatureGrid.tsx
var import_react48 = __toESM(require("react"));

// src/components/ui/marketing/FeatureGrid.module.css
var FeatureGrid_default = {};

// src/components/ui/marketing/FeatureGrid.tsx
function FeatureGrid({
  features,
  columns = 3
}) {
  return /* @__PURE__ */ import_react48.default.createElement(
    Grid,
    {
      columns: { base: 1, md: 2, lg: columns },
      gap: "24"
    },
    features.map((feature, index) => /* @__PURE__ */ import_react48.default.createElement(GridItem, { key: index }, /* @__PURE__ */ import_react48.default.createElement(Surface, { padding: "lg", elevation: "sm", className: FeatureGrid_default.card }, /* @__PURE__ */ import_react48.default.createElement(Stack, { gap: "16" }, feature.icon && /* @__PURE__ */ import_react48.default.createElement("div", { className: FeatureGrid_default.icon }, feature.icon), /* @__PURE__ */ import_react48.default.createElement(Stack, { gap: "8" }, /* @__PURE__ */ import_react48.default.createElement(Heading, { as: "h3", size: "md" }, feature.title), /* @__PURE__ */ import_react48.default.createElement(Text, { tone: "muted", size: "sm" }, feature.description))))))
  );
}

// src/components/ui/marketing/Footer.tsx
var import_react49 = __toESM(require("react"));

// src/components/ui/marketing/Footer.module.css
var Footer_default = {};

// src/components/ui/marketing/Footer.tsx
function Footer({
  brand,
  brandName,
  copyright,
  message,
  socials
}) {
  return /* @__PURE__ */ import_react49.default.createElement("footer", { className: Footer_default.footer }, /* @__PURE__ */ import_react49.default.createElement("div", { className: "wrap" }, /* @__PURE__ */ import_react49.default.createElement("div", { className: Footer_default.finebar }, /* @__PURE__ */ import_react49.default.createElement("div", { className: Footer_default.fineLeft }, /* @__PURE__ */ import_react49.default.createElement("div", null, copyright), message && /* @__PURE__ */ import_react49.default.createElement("div", null, message)), /* @__PURE__ */ import_react49.default.createElement("div", { className: Footer_default.fineRight }, socials && /* @__PURE__ */ import_react49.default.createElement("div", { className: Footer_default.socials }, socials.map((social) => /* @__PURE__ */ import_react49.default.createElement(
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
  ))), /* @__PURE__ */ import_react49.default.createElement("div", { className: Footer_default.footmark }, /* @__PURE__ */ import_react49.default.createElement("div", { className: Footer_default.logo }, brand), brandName && /* @__PURE__ */ import_react49.default.createElement("span", { className: Footer_default.brandName }, brandName))))));
}

// src/components/ui/marketing/Hero.tsx
var import_react50 = __toESM(require("react"));

// src/components/ui/marketing/Hero.module.css
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
  return /* @__PURE__ */ import_react50.default.createElement(Section, { size: "sm", className: cn(Hero_default.hero, Hero_default[align], className) }, /* @__PURE__ */ import_react50.default.createElement(Container, { maxWidth: "layout" }, /* @__PURE__ */ import_react50.default.createElement("div", { className: Hero_default.layout }, /* @__PURE__ */ import_react50.default.createElement("div", { className: Hero_default.content }, /* @__PURE__ */ import_react50.default.createElement(Stack, { gap: "24", align: align === "center" ? "center" : "start" }, badge && /* @__PURE__ */ import_react50.default.createElement("div", { className: Hero_default.badge }, badge), /* @__PURE__ */ import_react50.default.createElement(Heading, { as: "h1", size: "display", align, weight: titleWeight }, title), /* @__PURE__ */ import_react50.default.createElement(
    Text,
    {
      size: "lg",
      tone: "muted",
      align,
      className: Hero_default.description
    },
    description
  ), actions && /* @__PURE__ */ import_react50.default.createElement("div", { className: Hero_default.actions }, actions))), visual && /* @__PURE__ */ import_react50.default.createElement("div", { className: Hero_default.visual }, visual))));
}

// src/components/ui/marketing/LogoCloud.tsx
var import_react51 = __toESM(require("react"));
var import_image = __toESM(require("next/image"));

// src/components/ui/marketing/LogoCloud.module.css
var LogoCloud_default = {};

// src/components/ui/marketing/LogoCloud.tsx
function LogoCloud({ title, logos }) {
  return /* @__PURE__ */ import_react51.default.createElement("div", { className: LogoCloud_default.logoCloud }, title && /* @__PURE__ */ import_react51.default.createElement("p", { className: LogoCloud_default.title }, title), /* @__PURE__ */ import_react51.default.createElement(Flex, { wrap: "wrap", gap: "32", justify: "center", align: "center" }, logos.map((logo, index) => /* @__PURE__ */ import_react51.default.createElement("div", { key: index, className: LogoCloud_default.logoWrapper }, /* @__PURE__ */ import_react51.default.createElement(
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
var import_react52 = __toESM(require("react"));

// src/components/ui/marketing/PricingCard.module.css
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
  return /* @__PURE__ */ import_react52.default.createElement(
    Surface,
    {
      padding: "lg",
      elevation: featured ? "lg" : "sm",
      className: cn(PricingCard_default.card, featured && PricingCard_default.featured),
      radius: "lg"
    },
    /* @__PURE__ */ import_react52.default.createElement(Stack, { gap: "32" }, /* @__PURE__ */ import_react52.default.createElement(Stack, { gap: "16" }, /* @__PURE__ */ import_react52.default.createElement("div", { className: PricingCard_default.header }, /* @__PURE__ */ import_react52.default.createElement(Heading, { as: "h3", size: "lg" }, name), featured && /* @__PURE__ */ import_react52.default.createElement(Badge, { variant: "brand" }, "Recommended")), /* @__PURE__ */ import_react52.default.createElement("div", { className: PricingCard_default.priceContainer }, /* @__PURE__ */ import_react52.default.createElement("span", { className: PricingCard_default.price }, price), /* @__PURE__ */ import_react52.default.createElement("span", { className: PricingCard_default.frequency }, frequency)), description && /* @__PURE__ */ import_react52.default.createElement(Text, { size: "sm", tone: "muted" }, description)), /* @__PURE__ */ import_react52.default.createElement(Divider, null), /* @__PURE__ */ import_react52.default.createElement(Stack, { gap: "12" }, features.map((feature, index) => /* @__PURE__ */ import_react52.default.createElement("div", { key: index, className: PricingCard_default.feature }, /* @__PURE__ */ import_react52.default.createElement(
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
      /* @__PURE__ */ import_react52.default.createElement("polyline", { points: "20 6 9 17 4 12" })
    ), /* @__PURE__ */ import_react52.default.createElement(Text, { size: "sm" }, feature)))), /* @__PURE__ */ import_react52.default.createElement("div", { className: PricingCard_default.action }, action))
  );
}

// src/components/ui/marketing/Testimonial.tsx
var import_react53 = __toESM(require("react"));

// src/components/ui/marketing/Testimonial.module.css
var Testimonial_default = {};

// src/components/ui/marketing/Testimonial.tsx
function Testimonial({
  quote,
  author,
  role,
  avatarSrc
}) {
  return /* @__PURE__ */ import_react53.default.createElement(Surface, { padding: "lg", elevation: "sm", className: Testimonial_default.card }, /* @__PURE__ */ import_react53.default.createElement(Stack, { gap: "24" }, /* @__PURE__ */ import_react53.default.createElement(Text, { size: "lg", className: Testimonial_default.quote }, "\u201C", quote, "\u201D"), /* @__PURE__ */ import_react53.default.createElement("div", { className: Testimonial_default.footer }, /* @__PURE__ */ import_react53.default.createElement(
    Avatar,
    {
      src: avatarSrc,
      fallback: author.charAt(0),
      size: "md"
    }
  ), /* @__PURE__ */ import_react53.default.createElement(Stack, { gap: "0" }, /* @__PURE__ */ import_react53.default.createElement(Text, { weight: "semibold", size: "sm" }, author), role && /* @__PURE__ */ import_react53.default.createElement(Text, { size: "xs", tone: "muted" }, role)))));
}

// src/components/ui/marketing/ThemeImage.tsx
var import_react54 = __toESM(require("react"));
var import_image2 = __toESM(require("next/image"));

// src/components/ui/marketing/ThemeImage.module.css
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
  return /* @__PURE__ */ import_react54.default.createElement(import_react54.default.Fragment, null, /* @__PURE__ */ import_react54.default.createElement(
    import_image2.default,
    __spreadProps(__spreadValues({}, props), {
      src: darkSrc,
      alt,
      className: cn(ThemeImage_default.darkOnly, className)
    })
  ), /* @__PURE__ */ import_react54.default.createElement(
    import_image2.default,
    __spreadProps(__spreadValues({}, props), {
      src: lightSrc,
      alt,
      className: cn(ThemeImage_default.lightOnly, className)
    })
  ));
}

// src/components/ui/chatbox/ChatPage.tsx
var import_react57 = __toESM(require("react"));

// src/components/ui/chatbox/ChatContext.tsx
var import_react55 = __toESM(require("react"));
var import_react56 = require("@ai-sdk/react");
var MAX_FAILURES = 3;
var ChatContext = (0, import_react55.createContext)(void 0);
function ChatProvider({ children }) {
  const [isChatActive, setIsChatActive] = (0, import_react55.useState)(false);
  const [input, setInput] = (0, import_react55.useState)("");
  const [isDisabled, setIsDisabled] = (0, import_react55.useState)(false);
  const [failureCount, setFailureCount] = (0, import_react55.useState)(0);
  const failureRef = (0, import_react55.useRef)(0);
  const reportFailure = (0, import_react55.useCallback)(() => {
    failureRef.current += 1;
    setFailureCount(failureRef.current);
    if (failureRef.current >= MAX_FAILURES) {
      setIsDisabled(true);
    }
  }, []);
  const resetChat = (0, import_react55.useCallback)(() => {
    failureRef.current = 0;
    setFailureCount(0);
    setIsDisabled(false);
  }, []);
  const {
    messages,
    sendMessage: sdkSendMessage,
    status,
    setMessages
  } = (0, import_react56.useChat)({
    onError: () => {
      reportFailure();
    }
  });
  const isLoading = status === "submitted" || status === "streaming";
  const handleInputChange = (0, import_react55.useCallback)((e) => {
    setInput(e.target.value);
  }, []);
  const handleSubmit = (0, import_react55.useCallback)(async (e) => {
    if (e) e.preventDefault();
    const messageText = input.trim();
    if (!messageText || isLoading || isDisabled) return;
    setInput("");
    try {
      await sdkSendMessage({
        text: messageText
      });
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  }, [input, isLoading, isDisabled, sdkSendMessage]);
  const append = (0, import_react55.useCallback)(async (message) => {
    await sdkSendMessage({
      text: message.content
    });
  }, [sdkSendMessage]);
  const value = (0, import_react55.useMemo)(() => ({
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    status,
    isLoading,
    setMessages,
    setInput,
    isChatActive,
    setIsChatActive,
    isDisabled,
    failureCount,
    reportFailure,
    resetChat
  }), [
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    status,
    isLoading,
    setMessages,
    setInput,
    isChatActive,
    setIsChatActive,
    isDisabled,
    failureCount,
    reportFailure,
    resetChat
  ]);
  return /* @__PURE__ */ import_react55.default.createElement(ChatContext.Provider, { value }, children);
}
function useChatContext() {
  const context = (0, import_react55.useContext)(ChatContext);
  if (context === void 0) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}

// src/components/ui/chatbox/ChatPage.module.css
var ChatPage_default = {};

// src/components/ui/chatbox/ChatPage.tsx
function ChatPage({
  initialMessages,
  className,
  onSendMessage,
  onClose,
  isFullPage,
  variant = "full",
  placeholder = "Ask anything..."
}) {
  const [sessionId] = (0, import_react57.useState)(() => crypto.randomUUID());
  const [error, setError] = (0, import_react57.useState)(null);
  const [isSaving, setIsSaving] = (0, import_react57.useState)(false);
  const scrollRef = (0, import_react57.useRef)(null);
  const hasCreatedSession = (0, import_react57.useRef)(false);
  const {
    messages,
    input,
    handleInputChange,
    append,
    handleSubmit: submitContext,
    status,
    isLoading: isChatLoading,
    setMessages,
    setIsChatActive,
    setInput,
    isDisabled,
    reportFailure,
    resetChat
  } = useChatContext();
  const isStreaming = isChatLoading || status === "submitted" || status === "streaming";
  const canSend = status === "ready" || !status;
  const getMessageContent = (msg) => {
    if (msg.parts && Array.isArray(msg.parts)) {
      return msg.parts.filter((part) => part.type === "text").map((part) => part.text).join("");
    }
    return msg.content || "";
  };
  (0, import_react57.useEffect)(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);
  (0, import_react57.useEffect)(() => {
    const createSession = async () => {
      if (hasCreatedSession.current) return;
      hasCreatedSession.current = true;
      try {
        const res = await fetch("/api/create-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: sessionId,
            metadata: { started_at: (/* @__PURE__ */ new Date()).toISOString() }
          })
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          console.error("[ChatPage] Session creation failed:", data);
          setError(`Session creation failed: ${data.message || data.error || res.statusText}`);
          reportFailure();
        }
      } catch (err) {
        console.error("[ChatPage] Session creation error:", err);
        setError(`Connection error: ${err.message || "Failed to reach server"}`);
        reportFailure();
      }
    };
    createSession();
  }, [sessionId]);
  const saveConversation = async () => {
    if (messages.length === 0) return;
    setIsSaving(true);
    setError(null);
    try {
      const conversationData = {
        session_id: sessionId,
        messages: messages.map((msg) => ({
          role: msg.role === "assistant" ? "assistant" : "user",
          content: getMessageContent(msg),
          timestamp: msg.timestamp || (/* @__PURE__ */ new Date()).toISOString()
        }))
      };
      console.log(`[ChatPage] Saving conversation to API...`, {
        sessionId,
        messageCount: messages.length
      });
      const response = await fetch("/api/save-conversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(conversationData)
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || errorData.error || `HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("[ChatPage] Save successful:", result);
    } catch (err) {
      console.error("[ChatPage] Failed to save conversation:", err);
      setError(`Failed to save: ${err.message || "Unknown error"}`);
    } finally {
      setIsSaving(false);
    }
  };
  (0, import_react57.useEffect)(() => {
    const handleBeforeUnload = () => {
      if (messages.length > 0 && typeof navigator !== "undefined" && navigator.sendBeacon) {
        const conversationData = {
          session_id: sessionId,
          messages: messages.map((msg) => ({
            role: msg.role,
            content: getMessageContent(msg),
            timestamp: msg.timestamp || (/* @__PURE__ */ new Date()).toISOString()
          }))
        };
        navigator.sendBeacon(
          "/api/save-conversation",
          JSON.stringify(conversationData)
        );
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [messages, sessionId]);
  const handleEndChat = async () => {
    await saveConversation();
    setMessages([]);
    if (onClose) {
      onClose();
    }
  };
  const handleChatSubmit = (e) => {
    if (e) e.preventDefault();
    if (input.trim() && canSend && !isDisabled) {
      if (variant === "minimal") {
        setIsChatActive(true);
      }
      const messageText = input.trim();
      submitContext();
      if (onSendMessage) {
        onSendMessage(messageText);
      }
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  };
  return /* @__PURE__ */ import_react57.default.createElement(
    Surface,
    {
      elevation: variant === "minimal" ? "none" : "md",
      radius: isFullPage ? "none" : "lg",
      className: cn(
        ChatPage_default.container,
        isFullPage && ChatPage_default.fullPage,
        variant === "compact" && ChatPage_default.compact,
        variant === "minimal" && ChatPage_default.minimal,
        className
      ),
      padding: "none"
    },
    /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.header }, /* @__PURE__ */ import_react57.default.createElement(Flex, { align: "center", justify: "between", gap: "12" }, /* @__PURE__ */ import_react57.default.createElement(Flex, { align: "center", gap: "12" }, /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.statusDot }), /* @__PURE__ */ import_react57.default.createElement(Stack, { gap: "0" }, /* @__PURE__ */ import_react57.default.createElement(Text, { weight: "semibold", size: "sm" }, "Imadgen AI"), /* @__PURE__ */ import_react57.default.createElement(Text, { size: "xs", tone: "muted" }, "Quantum-V2 Core"))), /* @__PURE__ */ import_react57.default.createElement(Flex, { align: "center", gap: "8" }, onClose && /* @__PURE__ */ import_react57.default.createElement(
      IconButton,
      {
        variant: "ghost",
        size: "sm",
        onClick: handleEndChat,
        "aria-label": "Close chat",
        className: ChatPage_default.closeButton,
        disabled: isSaving
      },
      /* @__PURE__ */ import_react57.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react57.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ import_react57.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))
    )))),
    isDisabled && /* @__PURE__ */ import_react57.default.createElement("div", { style: { padding: "12px 16px", backgroundColor: "rgba(239, 68, 68, 0.12)", borderBottom: "1px solid rgba(239, 68, 68, 0.2)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" } }, /* @__PURE__ */ import_react57.default.createElement(Text, { size: "sm", tone: "danger" }, "Chat unavailable \xE2\u20AC\u201D service failed to connect. Please try again later."), /* @__PURE__ */ import_react57.default.createElement(
      "button",
      {
        onClick: resetChat,
        style: { flexShrink: 0, fontSize: "12px", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(239, 68, 68, 0.4)", background: "transparent", color: "inherit", cursor: "pointer" }
      },
      "Retry"
    )),
    error && !isDisabled && /* @__PURE__ */ import_react57.default.createElement("div", { style: { padding: "12px 16px", backgroundColor: "rgba(239, 68, 68, 0.1)" } }, /* @__PURE__ */ import_react57.default.createElement(Text, { size: "sm", tone: "danger" }, error)),
    /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.messagesArea, ref: scrollRef }, /* @__PURE__ */ import_react57.default.createElement(Stack, { gap: "16" }, messages.map((message) => /* @__PURE__ */ import_react57.default.createElement(
      "div",
      {
        key: message.id,
        className: cn(
          ChatPage_default.messageWrapper,
          message.role === "user" ? ChatPage_default.userWrapper : ChatPage_default.assistantWrapper
        )
      },
      /* @__PURE__ */ import_react57.default.createElement("div", { className: cn(
        ChatPage_default.bubble,
        message.role === "user" ? ChatPage_default.userBubble : ChatPage_default.assistantBubble
      ) }, /* @__PURE__ */ import_react57.default.createElement(Text, { size: "sm" }, getMessageContent(message))),
      /* @__PURE__ */ import_react57.default.createElement(Text, { size: "xs", tone: "muted", className: ChatPage_default.timestamp }, message.timestamp ? new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    )), isStreaming && /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.assistantWrapper }, /* @__PURE__ */ import_react57.default.createElement("div", { className: cn(ChatPage_default.bubble, ChatPage_default.assistantBubble, ChatPage_default.typing) }, /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.dot }), /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.dot }), /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.dot }))))),
    /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.inputArea }, /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.premiumWrapper }, /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.premiumGlow }), /* @__PURE__ */ import_react57.default.createElement("div", { className: ChatPage_default.premiumContainer }, /* @__PURE__ */ import_react57.default.createElement(
      "input",
      {
        type: "text",
        className: ChatPage_default.premiumInput,
        placeholder: isDisabled ? "Chat unavailable" : placeholder,
        value: input,
        onChange: handleInputChange,
        onKeyDown: handleKeyDown,
        disabled: isDisabled || !canSend && variant !== "minimal"
      }
    ), /* @__PURE__ */ import_react57.default.createElement(
      "button",
      {
        className: ChatPage_default.premiumSendButton,
        onClick: () => handleChatSubmit(),
        disabled: isDisabled || (!input.trim() || !canSend) && variant !== "minimal",
        "aria-label": "Send message"
      },
      /* @__PURE__ */ import_react57.default.createElement(
        "svg",
        {
          className: ChatPage_default.premiumIcon,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        /* @__PURE__ */ import_react57.default.createElement("path", { d: "M22 2L11 13" }),
        /* @__PURE__ */ import_react57.default.createElement("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
      )
    ))))
  );
}

// src/components/effects/CursorGlow.tsx
var import_react58 = require("react");
function CursorGlow() {
  (0, import_react58.useEffect)(() => {
    const root = document.documentElement;
    function setMouseVars(clientX, clientY) {
      const x = Math.max(0, Math.min(1, clientX / window.innerWidth));
      const y = Math.max(0, Math.min(1, clientY / window.innerHeight));
      root.style.setProperty("--mx", (x * 100).toFixed(2) + "%");
      root.style.setProperty("--my", (y * 100).toFixed(2) + "%");
      root.style.setProperty("--mxpx", ((x - 0.5) * 40).toFixed(2) + "px");
      root.style.setProperty("--mypx", ((y - 0.5) * 40).toFixed(2) + "px");
    }
    function onMove(e) {
      setMouseVars(e.clientX, e.clientY);
    }
    function onTouch(e) {
      if (!e.touches || !e.touches[0]) return;
      setMouseVars(e.touches[0].clientX, e.touches[0].clientY);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    setMouseVars(window.innerWidth * 0.55, window.innerHeight * 0.25);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);
  return null;
}

// src/components/effects/EmbersBGE.tsx
var import_react59 = require("react");
function EmbersBGE() {
  const canvasRef = (0, import_react59.useRef)(null);
  (0, import_react59.useEffect)(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let w, h, dpr;
    const N = 90;
    const pts = [];
    const rnd = (a, b) => a + Math.random() * (b - a);
    const resize = () => {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      w = c.width = Math.floor(window.innerWidth * dpr);
      h = c.height = Math.floor(window.innerHeight * dpr);
    };
    const seed = () => {
      pts.length = 0;
      for (let i = 0; i < N; i++) {
        pts.push({
          x: rnd(0, w),
          y: rnd(0, h),
          r: rnd(0.6, 2.4) * dpr,
          vx: rnd(-0.1, 0.1) * dpr,
          vy: rnd(-0.22, -0.04) * dpr,
          a: rnd(0.06, 0.22)
        });
      }
    };
    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        g.addColorStop(0, `rgba(255,106,0,${p.a})`);
        g.addColorStop(0.45, `rgba(255,138,31,${p.a * 0.55})`);
        g.addColorStop(1, `rgba(255,138,31,0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255,255,255,${p.a * 0.55})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -20 * dpr) {
          p.y = h + 20 * dpr;
          p.x = rnd(0, w);
        }
        if (p.x < -20 * dpr) p.x = w + 20 * dpr;
        if (p.x > w + 20 * dpr) p.x = -20 * dpr;
      }
      animId = requestAnimationFrame(draw);
    };
    resize();
    seed();
    draw();
    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, style: { width: "100%", height: "100%" }, "aria-hidden": "true" }));
}

// src/components/effects/ImBgAurora.tsx
function ImBgAurora() {
  return /* @__PURE__ */ React.createElement("div", { className: "im-bg", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("div", { className: "im-bghaze" }), /* @__PURE__ */ React.createElement("div", { className: "im-bgblob im-bgblob--a" }), /* @__PURE__ */ React.createElement("div", { className: "im-bgblob im-bgblob--b" }), /* @__PURE__ */ React.createElement("div", { className: "im-bgblob im-bgblob--c" }), /* @__PURE__ */ React.createElement("div", { className: "im-bggraindiv" }));
}

// src/components/effects/LightTheme.tsx
var import_react60 = require("react");
var import_next_themes2 = require("next-themes");
function LightTheme() {
  const [mounted, setMounted] = (0, import_react60.useState)(false);
  const { theme, setTheme, resolvedTheme } = (0, import_next_themes2.useTheme)();
  (0, import_react60.useEffect)(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ React.createElement("div", { className: "toggle-placeholder", style: { width: "80px", height: "32px" } });
  }
  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  const isDark = resolvedTheme === "dark";
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "toggle",
      id: "themeToggle",
      type: "button",
      "aria-label": "Toggle light/dark mode",
      onClick: toggleTheme
    },
    /* @__PURE__ */ React.createElement("span", { id: "themeIcon", "aria-hidden": "true", dangerouslySetInnerHTML: {
      __html: isDark ? `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill="currentColor" opacity=".9"/><path d="M12 2.8v2.1M12 19.1v2.1M3.2 12h2.1M18.7 12h2.1M4.8 4.8l1.5 1.5M17.7 17.7l1.5 1.5M19.2 4.8l-1.5 1.5M6.3 17.7l-1.5 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".9"/></svg>` : `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 13.2A7.7 7.7 0 1 1 10.8 3a6.9 6.9 0 0 0 10.2 10.2Z" fill="currentColor" opacity=".9"/></svg>`
    } }),
    /* @__PURE__ */ React.createElement("span", { id: "themeLabel" }, isDark ? "Light" : "Dark")
  );
}

// src/components/effects/NetBGE.tsx
var import_react61 = require("react");
function NetBGE() {
  const canvasRef = (0, import_react61.useRef)(null);
  (0, import_react61.useEffect)(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d", { alpha: true });
    if (!ctx) return;
    let w = 0, h = 0, dpr = 1;
    const N = 72;
    const LINK_DIST = 170;
    const SPEED = 0.22;
    const WIRE_ALPHA = 0.22;
    const NODE_ALPHA = 0.1;
    const THICKNESS = 1;
    const nodes = [];
    const rnd = (a, b) => a + Math.random() * (b - a);
    const getPurple = () => getComputedStyle(document.documentElement).getPropertyValue("--orange").trim() || "#ff6a00";
    const getOrange2 = () => getComputedStyle(document.documentElement).getPropertyValue("--orange2").trim() || "#ff8a1f";
    const resize = () => {
      const rect = c.getBoundingClientRect();
      w = c.width = Math.floor(rect.width);
      h = c.height = Math.floor(rect.height);
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes.length = 0;
      for (let i = 0; i < N; i++) {
        nodes.push({
          x: rnd(0, w),
          y: rnd(0, h),
          vx: rnd(-1, 1) * SPEED,
          vy: rnd(-1, 1) * SPEED,
          phase: rnd(0, Math.PI * 2)
        });
      }
    };
    const wrap = (n) => {
      const pad = 24;
      if (n.x < -pad) n.x = w + pad;
      if (n.x > w + pad) n.x = -pad;
      if (n.y < -pad) n.y = h + pad;
      if (n.y > h + pad) n.y = -pad;
    };
    let animId;
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      const startColor = getPurple();
      const endColor = getOrange2();
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, startColor);
      grad.addColorStop(1, endColor);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        const wobble = 0.12;
        n.x += Math.cos(t * 35e-5 + n.phase) * wobble;
        n.y += Math.sin(t * 35e-5 + n.phase) * wobble;
        wrap(n);
      }
      ctx.strokeStyle = grad;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const d = Math.sqrt(d2);
            const strength = 1 - d / LINK_DIST;
            ctx.lineWidth = THICKNESS + strength * 0.9;
            ctx.globalAlpha = WIRE_ALPHA * strength;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = grad;
      ctx.globalAlpha = NODE_ALPHA;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    resize();
    animId = requestAnimationFrame(draw);
    const onResize = () => {
      resize();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, style: { width: "100%", height: "100%" }, "aria-hidden": "true" }));
}

// src/components/effects/SwarmsBGE.tsx
var import_react62 = require("react");
function SwarmsBGE() {
  const canvasRef = (0, import_react62.useRef)(null);
  (0, import_react62.useEffect)(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let w, h, dpr;
    const N = 80;
    const pts = [];
    const rnd = (a, b) => a + Math.random() * (b - a);
    const resize = () => {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      w = c.width = Math.floor(window.innerWidth * dpr);
      h = c.height = Math.floor(window.innerHeight * dpr);
      c.style.width = window.innerWidth + "px";
      c.style.height = window.innerHeight + "px";
    };
    const seed = () => {
      pts.length = 0;
      for (let i = 0; i < N; i++) pts.push({ x: rnd(0, w), y: rnd(0, h), vx: rnd(-0.12, 0.12) * dpr, vy: rnd(-0.12, 0.12) * dpr });
    };
    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 170 * dpr) {
            const alpha = (1 - dist / (170 * dpr)) * 0.12;
            ctx.strokeStyle = `rgba(255,106,0,${alpha})`;
            ctx.lineWidth = 1 * dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 10 * dpr);
        g.addColorStop(0, `rgba(255,106,0,.18)`);
        g.addColorStop(1, `rgba(255,106,0,0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 10 * dpr, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255,255,255,.16)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2 * dpr, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      animId = requestAnimationFrame(draw);
    };
    resize();
    seed();
    draw();
    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, style: { width: "100%", height: "100%", opacity: 0.85 } }));
}

// src/components/effects/WaveformBackground.tsx
var import_react63 = __toESM(require("react"));

// src/components/effects/WaveformBackground.module.css
var WaveformBackground_default = {};

// src/components/effects/WaveformBackground.tsx
function WaveformBackground() {
  const canvasRef = (0, import_react63.useRef)(null);
  (0, import_react63.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    let frame = 0;
    const orbs = [
      { x: 0.3, y: 0.4, radius: 150, speed: 2e-3, color: "rgba(255, 106, 0, 0.15)" },
      { x: 0.7, y: 0.6, radius: 200, speed: 15e-4, color: "rgba(255, 138, 31, 0.1)" },
      { x: 0.5, y: 0.5, radius: 180, speed: 25e-4, color: "rgba(255, 174, 0, 0.08)" }
    ];
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach((orb) => {
        const x = canvas.width * orb.x;
        const y = canvas.height * orb.y;
        const pulse = Math.sin(frame * orb.speed) * 20;
        const radius = orb.radius + pulse;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "rgba(255, 106, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ import_react63.default.createElement("canvas", { ref: canvasRef, className: WaveformBackground_default.waveformCanvas });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AspectRatio,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  CTA,
  ChatPage,
  ChatProvider,
  Checkbox,
  Cluster,
  Code,
  Container,
  CursorGlow,
  Dialog,
  Divider,
  EmbersBGE,
  EmptyState,
  ErrorText,
  FeatureGrid,
  Flex,
  Footer,
  Form,
  FormField,
  Grid,
  GridItem,
  Heading,
  HelperText,
  Hero,
  IconButton,
  ImBgAurora,
  Input,
  Kbd,
  Label,
  LightTheme,
  Link,
  LogoCloud,
  MobileMenu,
  MobileMenuContent,
  NavLink,
  Navbar,
  NetBGE,
  Pagination,
  Popover,
  PricingCard,
  Providers,
  RadioGroup,
  Section,
  Select,
  Skeleton,
  Spacer,
  Stack,
  StatCard,
  Surface,
  SwarmsBGE,
  Switch,
  Table,
  Tabs,
  Testimonial,
  Text,
  Textarea,
  ThemeImage,
  ToastProvider,
  Tooltip,
  WaveformBackground,
  cn,
  useChatContext,
  useToast
});
