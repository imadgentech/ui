"use client";
import {
  AspectRatio,
  Avatar,
  Badge,
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
  __objRest,
  __spreadValues,
  cn
} from "./chunk-WHEOF3YO.mjs";

// src/components/ui/Providers.tsx
import React2 from "react";
import { ThemeProvider } from "next-themes";
function Providers({ children }) {
  return /* @__PURE__ */ React2.createElement(ThemeProvider, { attribute: "data-theme", defaultTheme: "dark", enableSystem: true }, children);
}

// src/components/ui/forms/Button.tsx
import React3 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\Button.module-css
var Button_default = { "button": "imui_Button_button___-kjOB", "loading": "imui_Button_loading__7xz92R", "fullWidth": "imui_Button_fullWidth__jjd5Tm", "rounded": "imui_Button_rounded__uqWKgL", "size-sm": "imui_Button_size-sm__Lw6G7_", "size-md": "imui_Button_size-md__DaN-nk", "size-lg": "imui_Button_size-lg__1hQsJp", "variant-primary": "imui_Button_variant-primary__13Wa33", "variant-secondary": "imui_Button_variant-secondary__LS1rBb", "variant-ghost": "imui_Button_variant-ghost__2uIfBu", "variant-danger": "imui_Button_variant-danger__kjtZ8I", "variant-brand": "imui_Button_variant-brand__4_6wiK", "variant-subtle": "imui_Button_variant-subtle__2UCKNK", "content": "imui_Button_content__lLqfXZ", "spinner": "imui_Button_spinner__f97alF" };

// src/components/ui/forms/Button.tsx
var Button = React3.forwardRef(
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
    return /* @__PURE__ */ React3.createElement(
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
      loading && /* @__PURE__ */ React3.createElement("span", { className: Button_default.spinner }),
      !loading && leftIcon && /* @__PURE__ */ React3.createElement("span", { className: Button_default.leftIcon }, leftIcon),
      /* @__PURE__ */ React3.createElement("span", { className: Button_default.content }, children),
      !loading && rightIcon && /* @__PURE__ */ React3.createElement("span", { className: Button_default.rightIcon }, rightIcon)
    );
  }
);
Button.displayName = "Button";

// src/components/ui/forms/Checkbox.tsx
import React4 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\Checkbox.module-css
var Checkbox_default = { "wrapper": "imui_Checkbox_wrapper__v8ntw7", "disabled": "imui_Checkbox_disabled__QMCvV8", "checkbox": "imui_Checkbox_checkbox__YeeA69", "indicator": "imui_Checkbox_indicator__dWgSVu", "icon": "imui_Checkbox_icon__OhWjoR", "label": "imui_Checkbox_label__KuG5Au" };

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
  return /* @__PURE__ */ React4.createElement("div", { className: cn(Checkbox_default.wrapper, disabled && Checkbox_default.disabled, className) }, /* @__PURE__ */ React4.createElement(
    CheckboxPrimitive.Root,
    {
      id,
      className: Checkbox_default.checkbox,
      checked,
      defaultChecked,
      onCheckedChange,
      disabled
    },
    /* @__PURE__ */ React4.createElement(CheckboxPrimitive.Indicator, { className: Checkbox_default.indicator }, /* @__PURE__ */ React4.createElement(
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
      /* @__PURE__ */ React4.createElement("polyline", { points: "20 6 9 17 4 12" })
    ))
  ), label && /* @__PURE__ */ React4.createElement("label", { htmlFor: id, className: Checkbox_default.label }, label));
}

// src/components/ui/forms/ErrorText.tsx
import React5 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\ErrorText.module-css
var ErrorText_default = { "errorText": "imui_ErrorText_errorText__oYYcEO" };

// src/components/ui/forms/ErrorText.tsx
function ErrorText({ className, style, children }) {
  return /* @__PURE__ */ React5.createElement("p", { className: cn(ErrorText_default.errorText, className), style, role: "alert" }, children);
}

// src/components/ui/forms/Form.tsx
import React8 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\Form.module-css
var Form_default = { "form": "imui_Form_form__mJrUiF", "actions": "imui_Form_actions__O4M2sf" };

// src/components/ui/forms/Input.tsx
import React6 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\Input.module-css
var Input_default = { "inputStandalone": "imui_Input_inputStandalone__QRi6ho", "input": "imui_Input_input__dOga5-", "wrapper": "imui_Input_wrapper__Fyilr3", "disabled": "imui_Input_disabled__hL03GG", "invalid": "imui_Input_invalid__fK4sZu", "size-sm": "imui_Input_size-sm__-Tyy7w", "size-md": "imui_Input_size-md__x1y0jz", "size-lg": "imui_Input_size-lg__iGDqM3", "startAdornment": "imui_Input_startAdornment__9aH_vx", "endAdornment": "imui_Input_endAdornment__JULmLU" };

// src/components/ui/forms/Input.tsx
var Input = React6.forwardRef(
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
      return /* @__PURE__ */ React6.createElement(
        "div",
        {
          className: cn(
            Input_default.wrapper,
            Input_default[`size-${inputSize}`],
            invalid && Input_default.invalid,
            disabled && Input_default.disabled
          )
        },
        startAdornment && /* @__PURE__ */ React6.createElement("span", { className: Input_default.startAdornment }, startAdornment),
        /* @__PURE__ */ React6.createElement(
          "input",
          __spreadValues({
            ref,
            className: cn(Input_default.input, className),
            disabled
          }, props)
        ),
        endAdornment && /* @__PURE__ */ React6.createElement("span", { className: Input_default.endAdornment }, endAdornment)
      );
    }
    return /* @__PURE__ */ React6.createElement(
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
import React7 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\Textarea.module-css
var Textarea_default = { "textarea": "imui_Textarea_textarea__iMPpJB", "invalid": "imui_Textarea_invalid__vXxdVm", "resize-none": "imui_Textarea_resize-none__eAISnC", "resize-vertical": "imui_Textarea_resize-vertical__XXfDT1", "resize-both": "imui_Textarea_resize-both__8FCT0s", "size-sm": "imui_Textarea_size-sm__zld2RH", "size-md": "imui_Textarea_size-md__tymxqZ", "size-lg": "imui_Textarea_size-lg__pNzdfx" };

// src/components/ui/forms/Textarea.tsx
var Textarea = React7.forwardRef(
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
    return /* @__PURE__ */ React7.createElement(
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

// src/components/ui/forms/Form.tsx
var Form = React8.forwardRef(
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
    return /* @__PURE__ */ React8.createElement(
      "form",
      __spreadValues({
        ref,
        className: cn(Form_default.form, className),
        onSubmit: handleSubmit
      }, props),
      /* @__PURE__ */ React8.createElement(Stack, { gap: "24" }, textareaFields.map((field) => /* @__PURE__ */ React8.createElement(
        Textarea,
        {
          key: field.name,
          name: field.name,
          placeholder: field.placeholder,
          required: field.required,
          rows: field.rows || 4
        }
      )), inputFields.length > 0 && /* @__PURE__ */ React8.createElement(Grid, { columns: { base: 1, md: inputFields.length }, gap: "16" }, inputFields.map((field) => /* @__PURE__ */ React8.createElement(
        Input,
        {
          key: field.name,
          type: field.type,
          name: field.name,
          placeholder: field.placeholder,
          required: field.required
        }
      ))), children, showSubmit && /* @__PURE__ */ React8.createElement("div", { className: Form_default.actions }, /* @__PURE__ */ React8.createElement(Button, { variant: submitVariant, type: "submit" }, submitLabel)))
    );
  }
);
Form.displayName = "Form";

// src/components/ui/forms/FormField.tsx
import React11 from "react";

// src/components/ui/forms/Label.tsx
import React9 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\Label.module-css
var Label_default = { "label": "imui_Label_label__hhiW5s", "required": "imui_Label_required__tv1FBc" };

// src/components/ui/forms/Label.tsx
function Label(_a) {
  var _b = _a, { required, className, children } = _b, props = __objRest(_b, ["required", "className", "children"]);
  return /* @__PURE__ */ React9.createElement("label", __spreadValues({ className: cn(Label_default.label, className) }, props), children, required && /* @__PURE__ */ React9.createElement("span", { className: Label_default.required, title: "Required" }, "*"));
}

// src/components/ui/forms/HelperText.tsx
import React10 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\HelperText.module-css
var HelperText_default = { "helperText": "imui_HelperText_helperText__YWUutB" };

// src/components/ui/forms/HelperText.tsx
function HelperText({ className, children }) {
  return /* @__PURE__ */ React10.createElement("p", { className: cn(HelperText_default.helperText, className) }, children);
}

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\FormField.module-css
var FormField_default = { "formField": "imui_FormField_formField__392q6r" };

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
  return /* @__PURE__ */ React11.createElement("div", { className: cn(FormField_default.formField, className) }, label && /* @__PURE__ */ React11.createElement(Label, { htmlFor: id, required }, label), children, error ? /* @__PURE__ */ React11.createElement(ErrorText, null, error) : hint ? /* @__PURE__ */ React11.createElement(HelperText, null, hint) : null);
}

// src/components/ui/forms/IconButton.tsx
import React12 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\IconButton.module-css
var IconButton_default = { "iconButton": "imui_IconButton_iconButton__8UtYfC", "shape-square": "imui_IconButton_shape-square__iy2cre", "shape-circle": "imui_IconButton_shape-circle__CMR5xL", "size-sm": "imui_IconButton_size-sm__-yiU65", "size-md": "imui_IconButton_size-md__yqTP4X", "size-lg": "imui_IconButton_size-lg__TKvhsb", "variant-primary": "imui_IconButton_variant-primary__UNvwaB", "variant-secondary": "imui_IconButton_variant-secondary__2VFLfl", "variant-ghost": "imui_IconButton_variant-ghost__HjP4p7", "spinner": "imui_IconButton_spinner__zNO-rw" };

// src/components/ui/forms/IconButton.tsx
var IconButton = React12.forwardRef(
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
    return /* @__PURE__ */ React12.createElement(
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
      loading ? /* @__PURE__ */ React12.createElement("span", { className: IconButton_default.spinner }) : children
    );
  }
);
IconButton.displayName = "IconButton";

// src/components/ui/forms/RadioGroup.tsx
import React13 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\RadioGroup.module-css
var RadioGroup_default = { "root": "imui_RadioGroup_root__cHEzro", "vertical": "imui_RadioGroup_vertical__0Fhqun", "horizontal": "imui_RadioGroup_horizontal__hbgR3x", "itemWrapper": "imui_RadioGroup_itemWrapper__hiSRWK", "item": "imui_RadioGroup_item__UXxb54", "indicator": "imui_RadioGroup_indicator__SoWvz5", "label": "imui_RadioGroup_label__R76qS1", "disabledLabel": "imui_RadioGroup_disabledLabel__Caqbr5" };

// src/components/ui/forms/RadioGroup.tsx
function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  items,
  orientation = "vertical",
  className
}) {
  return /* @__PURE__ */ React13.createElement(
    RadioGroupPrimitive.Root,
    {
      className: cn(RadioGroup_default.root, RadioGroup_default[orientation], className),
      value,
      defaultValue,
      onValueChange
    },
    items.map((item) => /* @__PURE__ */ React13.createElement("div", { key: item.value, className: RadioGroup_default.itemWrapper }, /* @__PURE__ */ React13.createElement(
      RadioGroupPrimitive.Item,
      {
        id: item.id,
        value: item.value,
        disabled: item.disabled,
        className: RadioGroup_default.item
      },
      /* @__PURE__ */ React13.createElement(RadioGroupPrimitive.Indicator, { className: RadioGroup_default.indicator })
    ), /* @__PURE__ */ React13.createElement(
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
import React14 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\Select.module-css
var Select_default = { "wrapper": "imui_Select_wrapper__0FnNw7", "select": "imui_Select_select__Ol77vz", "invalid": "imui_Select_invalid__7A3dCZ", "icon": "imui_Select_icon__vCxe39", "size-sm": "imui_Select_size-sm__x9SMpO", "size-md": "imui_Select_size-md__iOzRIk", "size-lg": "imui_Select_size-lg__bpj_mk" };

// src/components/ui/forms/Select.tsx
var Select = React14.forwardRef(
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
    return /* @__PURE__ */ React14.createElement("div", { className: cn(Select_default.wrapper, Select_default[`size-${selectSize}`]) }, /* @__PURE__ */ React14.createElement(
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
      options ? options.map((opt) => /* @__PURE__ */ React14.createElement("option", { key: opt.value, value: opt.value }, opt.label)) : children
    ), /* @__PURE__ */ React14.createElement("span", { className: Select_default.icon, "aria-hidden": "true" }, "\xE2\u2013\xBC"));
  }
);
Select.displayName = "Select";

// src/components/ui/forms/Switch.tsx
import React15 from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\forms\Switch.module-css
var Switch_default = { "switch": "imui_Switch_switch__pLm0kK", "thumb": "imui_Switch_thumb__eOQps7" };

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
  return /* @__PURE__ */ React15.createElement(
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
    /* @__PURE__ */ React15.createElement(SwitchPrimitive.Thumb, { className: Switch_default.thumb })
  );
}

// src/components/ui/navigation/Breadcrumbs.tsx
import React16 from "react";
import NextLink from "next/link";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\navigation\Breadcrumbs.module-css
var Breadcrumbs_default = { "breadcrumbs": "imui_Breadcrumbs_breadcrumbs__PI05oR", "list": "imui_Breadcrumbs_list__mv4Y-D", "item": "imui_Breadcrumbs_item__Nt2r02", "link": "imui_Breadcrumbs_link__o17aKE", "current": "imui_Breadcrumbs_current__dG1P-O", "separator": "imui_Breadcrumbs_separator__Oq_oXf" };

// src/components/ui/navigation/Breadcrumbs.tsx
function Breadcrumbs({
  items,
  className,
  separator = "/"
}) {
  return /* @__PURE__ */ React16.createElement("nav", { className: cn(Breadcrumbs_default.breadcrumbs, className), "aria-label": "Breadcrumb" }, /* @__PURE__ */ React16.createElement("ol", { className: Breadcrumbs_default.list }, items.map((item, index) => {
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ React16.createElement("li", { key: item.label, className: Breadcrumbs_default.item }, !isLast && item.href ? /* @__PURE__ */ React16.createElement(NextLink, { href: item.href, className: Breadcrumbs_default.link }, item.label) : /* @__PURE__ */ React16.createElement("span", { className: Breadcrumbs_default.current, "aria-current": "page" }, item.label), !isLast && /* @__PURE__ */ React16.createElement("span", { className: Breadcrumbs_default.separator, "aria-hidden": "true" }, separator));
  })));
}

// src/components/ui/navigation/MobileMenu.tsx
import React17 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\navigation\MobileMenu.module-css
var MobileMenu_default = { "overlay": "imui_MobileMenu_overlay__yxCReI", "content": "imui_MobileMenu_content__Vr-h8v", "header": "imui_MobileMenu_header__yIzJkH", "srOnly": "imui_MobileMenu_srOnly__KBy8iJ", "close": "imui_MobileMenu_close___-K7ba", "body": "imui_MobileMenu_body__EhfmBF" };

// src/components/ui/navigation/MobileMenu.tsx
function MobileMenu({
  trigger,
  children,
  title = ""
}) {
  return /* @__PURE__ */ React17.createElement(DialogPrimitive.Root, null, /* @__PURE__ */ React17.createElement(DialogPrimitive.Trigger, { asChild: true }, trigger), /* @__PURE__ */ React17.createElement(DialogPrimitive.Portal, null, /* @__PURE__ */ React17.createElement(DialogPrimitive.Overlay, { className: MobileMenu_default.overlay }), /* @__PURE__ */ React17.createElement(DialogPrimitive.Content, { className: MobileMenu_default.content }, /* @__PURE__ */ React17.createElement(DialogPrimitive.Title, { className: MobileMenu_default.srOnly }, title || "Navigation Menu"), /* @__PURE__ */ React17.createElement(DialogPrimitive.Description, { className: MobileMenu_default.srOnly }, "Mobile navigation menu"), /* @__PURE__ */ React17.createElement("div", { className: MobileMenu_default.header }, /* @__PURE__ */ React17.createElement(DialogPrimitive.Close, { className: MobileMenu_default.close, "aria-label": "Close" }, /* @__PURE__ */ React17.createElement(
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
    /* @__PURE__ */ React17.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ React17.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ))), /* @__PURE__ */ React17.createElement("div", { className: MobileMenu_default.body }, children))));
}

// src/components/ui/navigation/MobileMenuContent.tsx
import React19 from "react";
import * as DialogPrimitive2 from "@radix-ui/react-dialog";

// src/components/ui/navigation/NavLink.tsx
import React18 from "react";
import NextLink2 from "next/link";
import { usePathname } from "next/navigation";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\navigation\NavLink.module-css
var NavLink_default = { "navLink": "imui_NavLink_navLink__Fr2dWi", "active": "imui_NavLink_active__RaQs0L" };

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
  const pathname = usePathname();
  const isActive = isActiveProp !== void 0 ? isActiveProp : pathname === href || typeof href === "string" && href !== "/" && (pathname == null ? void 0 : pathname.startsWith(href));
  return /* @__PURE__ */ React18.createElement(
    NextLink2,
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

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\navigation\MobileMenuContent.module-css
var MobileMenuContent_default = { "content": "imui_MobileMenuContent_content__lygFFX", "logoArea": "imui_MobileMenuContent_logoArea__CdBKRB", "linksStack": "imui_MobileMenuContent_linksStack__uQolix", "navLink": "imui_MobileMenuContent_navLink__Y2lF4F", "navLink__IMUI_GLOBAL_7__": "imui_MobileMenuContent_navLink__IMUI_GLOBAL_7____sIezqc", "navLink__IMUI_GLOBAL_8__": "imui_MobileMenuContent_navLink__IMUI_GLOBAL_8____nyYVwN", "actions": "imui_MobileMenuContent_actions__AjqBzi" };

// src/components/ui/navigation/MobileMenuContent.tsx
function MobileMenuContent({ links, actions }) {
  return /* @__PURE__ */ React19.createElement("div", { className: MobileMenuContent_default.content }, /* @__PURE__ */ React19.createElement("div", { className: MobileMenuContent_default.logoArea }, /* @__PURE__ */ React19.createElement("img", { className: "logo-dark", src: "/media/logo/imadgen-logo-dark.png", alt: "IMADGEN" }), /* @__PURE__ */ React19.createElement("img", { className: "logo-light", src: "/media/logo/imadgen-logo-light.png", alt: "IMADGEN" }), /* @__PURE__ */ React19.createElement("span", null, "IMADGEN")), /* @__PURE__ */ React19.createElement("nav", { className: MobileMenuContent_default.linksStack }, /* @__PURE__ */ React19.createElement(DialogPrimitive2.Close, { asChild: true }, /* @__PURE__ */ React19.createElement(
    NavLink,
    {
      href: "/",
      className: MobileMenuContent_default.navLink
    },
    "Home"
  )), links.map((link) => /* @__PURE__ */ React19.createElement(DialogPrimitive2.Close, { key: link.href, asChild: true }, /* @__PURE__ */ React19.createElement(
    NavLink,
    {
      href: link.href,
      className: MobileMenuContent_default.navLink
    },
    link.label
  )))), actions && /* @__PURE__ */ React19.createElement("div", { className: MobileMenuContent_default.actions }, actions));
}

// src/components/ui/navigation/Navbar.tsx
import React20 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\navigation\Navbar.module-css
var Navbar_default = { "navbar": "imui_Navbar_navbar__FsFYSn", "sticky": "imui_Navbar_sticky__5eHQI5", "container": "imui_Navbar_container__Ytp59N", "flex": "imui_Navbar_flex__DoMTUn", "brand": "imui_Navbar_brand__Tlwqy8", "desktopNav": "imui_Navbar_desktopNav__U8aE24", "rightSection": "imui_Navbar_rightSection__zkgOeZ", "actions": "imui_Navbar_actions__YCakXP", "mobileNav": "imui_Navbar_mobileNav__NQywwb", "burger": "imui_Navbar_burger__7rNcW3" };

// src/components/ui/navigation/Navbar.tsx
function Navbar({
  brand,
  links,
  actions,
  className,
  sticky = true
}) {
  return /* @__PURE__ */ React20.createElement("header", { className: cn(Navbar_default.navbar, sticky && Navbar_default.sticky, className) }, /* @__PURE__ */ React20.createElement("div", { className: "wrap", style: { width: "100%", height: "100%" } }, /* @__PURE__ */ React20.createElement(Flex, { align: "center", justify: "between", className: Navbar_default.flex }, /* @__PURE__ */ React20.createElement("div", { className: Navbar_default.brand }, brand), /* @__PURE__ */ React20.createElement("nav", { className: Navbar_default.desktopNav }, /* @__PURE__ */ React20.createElement(Flex, { gap: "24", align: "center" }, links.map((link) => /* @__PURE__ */ React20.createElement(NavLink, { key: link.href, href: link.href }, link.label)))), /* @__PURE__ */ React20.createElement("div", { className: Navbar_default.rightSection }, actions && /* @__PURE__ */ React20.createElement("div", { className: Navbar_default.actions }, actions), /* @__PURE__ */ React20.createElement("div", { className: Navbar_default.mobileNav }, /* @__PURE__ */ React20.createElement(
    MobileMenu,
    {
      trigger: /* @__PURE__ */ React20.createElement(
        IconButton,
        {
          variant: "ghost",
          "aria-label": "Toggle menu",
          className: Navbar_default.burger
        },
        /* @__PURE__ */ React20.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React20.createElement("rect", { y: "4", width: "24", height: "2", rx: "1", fill: "currentColor" }), /* @__PURE__ */ React20.createElement("rect", { y: "11", width: "24", height: "2", rx: "1", fill: "currentColor" }), /* @__PURE__ */ React20.createElement("rect", { y: "18", width: "24", height: "2", rx: "1", fill: "currentColor" }))
      )
    },
    /* @__PURE__ */ React20.createElement(MobileMenuContent, { links, actions })
  ))))));
}

// src/components/ui/navigation/Pagination.tsx
import React21 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\navigation\Pagination.module-css
var Pagination_default = { "pagination": "imui_Pagination_pagination__OL9Wwh", "info": "imui_Pagination_info__PxCfDw", "current": "imui_Pagination_current__pfjClf" };

// src/components/ui/navigation/Pagination.tsx
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className
}) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  return /* @__PURE__ */ React21.createElement(
    "nav",
    {
      className: cn(Pagination_default.pagination, className),
      "aria-label": "Pagination"
    },
    /* @__PURE__ */ React21.createElement(
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
    /* @__PURE__ */ React21.createElement("div", { className: Pagination_default.info }, "Page ", /* @__PURE__ */ React21.createElement("span", { className: Pagination_default.current }, currentPage), " of ", totalPages),
    /* @__PURE__ */ React21.createElement(
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
import React22 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\navigation\Tabs.module-css
var Tabs_default = { "list": "imui_Tabs_list__Pwg23Y", "trigger": "imui_Tabs_trigger__zGXFOF", "content": "imui_Tabs_content__PACoql" };

// src/components/ui/navigation/Tabs.tsx
function Tabs({
  defaultValue,
  value,
  onValueChange,
  items,
  className
}) {
  return /* @__PURE__ */ React22.createElement(
    TabsPrimitive.Root,
    {
      defaultValue,
      value,
      onValueChange,
      className: cn(className)
    },
    /* @__PURE__ */ React22.createElement(TabsPrimitive.List, { className: Tabs_default.list }, items.map((item) => /* @__PURE__ */ React22.createElement(
      TabsPrimitive.Trigger,
      {
        key: item.value,
        value: item.value,
        className: Tabs_default.trigger
      },
      item.label
    ))),
    items.map((item) => item.content && /* @__PURE__ */ React22.createElement(
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
import React23 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\Accordion.module-css
var Accordion_default = { "root": "imui_Accordion_root__ZKpusI", "item": "imui_Accordion_item__ZMopXX", "header": "imui_Accordion_header__LwUjAO", "trigger": "imui_Accordion_trigger__lkDEdm", "chevron": "imui_Accordion_chevron__-Q2lFD", "content": "imui_Accordion_content__dLof7Y", "contentInner": "imui_Accordion_contentInner__PCuZXG" };

// src/components/ui/data/Accordion.tsx
function Accordion({
  items,
  type = "single",
  collapsible = true,
  className
}) {
  return /* @__PURE__ */ React23.createElement(
    AccordionPrimitive.Root,
    {
      type,
      collapsible,
      className: cn(Accordion_default.root, className)
    },
    items.map((item) => /* @__PURE__ */ React23.createElement(
      AccordionPrimitive.Item,
      {
        key: item.value,
        value: item.value,
        disabled: item.disabled,
        className: Accordion_default.item
      },
      /* @__PURE__ */ React23.createElement(AccordionPrimitive.Header, { className: Accordion_default.header }, /* @__PURE__ */ React23.createElement(AccordionPrimitive.Trigger, { className: Accordion_default.trigger }, item.title, /* @__PURE__ */ React23.createElement(
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
        /* @__PURE__ */ React23.createElement("polyline", { points: "6 9 12 15 18 9" })
      ))),
      /* @__PURE__ */ React23.createElement(AccordionPrimitive.Content, { className: Accordion_default.content }, /* @__PURE__ */ React23.createElement("div", { className: Accordion_default.contentInner }, item.content))
    ))
  );
}

// src/components/ui/data/EmptyState.tsx
import React24 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\EmptyState.module-css
var EmptyState_default = { "emptyState": "imui_EmptyState_emptyState__pH1V-s", "icon": "imui_EmptyState_icon__H97DWb", "description": "imui_EmptyState_description__sLLkRw", "action": "imui_EmptyState_action__eGrEBQ" };

// src/components/ui/data/EmptyState.tsx
function EmptyState({
  icon,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ React24.createElement("div", { className: cn(EmptyState_default.emptyState, className) }, /* @__PURE__ */ React24.createElement(Stack, { gap: "16", align: "center" }, icon && /* @__PURE__ */ React24.createElement("div", { className: EmptyState_default.icon }, icon), /* @__PURE__ */ React24.createElement(Stack, { gap: "8", align: "center" }, /* @__PURE__ */ React24.createElement(Heading, { as: "h3", size: "lg", align: "center" }, title), description && /* @__PURE__ */ React24.createElement(Text, { tone: "muted", align: "center", className: EmptyState_default.description }, description)), action && /* @__PURE__ */ React24.createElement("div", { className: EmptyState_default.action }, action)));
}

// src/components/ui/data/Skeleton.tsx
import React25 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\Skeleton.module-css
var Skeleton_default = { "skeleton": "imui_Skeleton_skeleton__ezvGAs", "radius-none": "imui_Skeleton_radius-none__pjztqu", "radius-sm": "imui_Skeleton_radius-sm__ZFF9Q2", "radius-md": "imui_Skeleton_radius-md__IxA6qu", "radius-lg": "imui_Skeleton_radius-lg__ZX-r3F", "radius-full": "imui_Skeleton_radius-full__Kn68rj", "shimmer": "imui_Skeleton_shimmer__kOGC6n" };

// src/components/ui/data/Skeleton.tsx
function Skeleton({
  width = "100%",
  height = "1em",
  radius = "md",
  shimmer = true,
  className
}) {
  return /* @__PURE__ */ React25.createElement(
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
import React26 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\StatCard.module-css
var StatCard_default = { "statCard": "imui_StatCard_statCard__0jf-ze", "label": "imui_StatCard_label__AlrJaZ", "value": "imui_StatCard_value__QzigP9", "note": "imui_StatCard_note__sVGzBV", "variant-success": "imui_StatCard_variant-success__4ry95g", "variant-warning": "imui_StatCard_variant-warning__LPTiJh", "variant-danger": "imui_StatCard_variant-danger__UxuIEJ", "variant-neutral": "imui_StatCard_variant-neutral__fbcU8J" };

// src/components/ui/data/StatCard.tsx
function StatCard({
  label,
  value,
  note,
  variant = "neutral",
  className
}) {
  return /* @__PURE__ */ React26.createElement(
    Surface,
    {
      padding: "lg",
      elevation: "sm",
      radius: "lg",
      className: cn(StatCard_default.statCard, StatCard_default[`variant-${variant}`], className)
    },
    /* @__PURE__ */ React26.createElement(Stack, { gap: "8", align: "center" }, /* @__PURE__ */ React26.createElement(Text, { size: "sm", tone: "muted", className: StatCard_default.label }, label), /* @__PURE__ */ React26.createElement(Heading, { as: "h3", size: "xl", className: StatCard_default.value }, value), note && /* @__PURE__ */ React26.createElement(Text, { size: "xs", tone: "muted", className: StatCard_default.note }, note))
  );
}

// src/components/ui/data/Table.tsx
import React27 from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\data\Table.module-css
var Table_default = { "wrapper": "imui_Table_wrapper__yoafOH", "table": "imui_Table_table__KkhnVp", "th": "imui_Table_th__Y_gDFh", "td": "imui_Table_td__aJ3WqB", "tr": "imui_Table_tr__HzlvpQ", "striped": "imui_Table_striped__HSwSiD" };

// src/components/ui/data/Table.tsx
function Table({
  headers,
  rows,
  className,
  striped = false
}) {
  return /* @__PURE__ */ React27.createElement("div", { className: cn(Table_default.wrapper, className) }, /* @__PURE__ */ React27.createElement("table", { className: cn(Table_default.table, striped && Table_default.striped) }, /* @__PURE__ */ React27.createElement("thead", null, /* @__PURE__ */ React27.createElement("tr", null, headers.map((header) => /* @__PURE__ */ React27.createElement("th", { key: header, className: Table_default.th }, header)))), /* @__PURE__ */ React27.createElement("tbody", null, rows.map((row, rowIndex) => /* @__PURE__ */ React27.createElement("tr", { key: rowIndex, className: Table_default.tr }, row.map((cell, cellIndex) => /* @__PURE__ */ React27.createElement("td", { key: cellIndex, className: Table_default.td }, cell)))))));
}

// src/components/ui/overlays/Dialog.tsx
import React28 from "react";
import * as DialogPrimitive3 from "@radix-ui/react-dialog";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\overlays\Dialog.module-css
var Dialog_default = { "overlay": "imui_Dialog_overlay__QIshGt", "content": "imui_Dialog_content__9ciCTy", "header": "imui_Dialog_header__NU5YXf", "title": "imui_Dialog_title__40HiBz", "description": "imui_Dialog_description__FrSdwD", "close": "imui_Dialog_close__PI4lIf", "body": "imui_Dialog_body__qg5Xdj" };

// src/components/ui/overlays/Dialog.tsx
function Dialog({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children
}) {
  return /* @__PURE__ */ React28.createElement(DialogPrimitive3.Root, { open, onOpenChange }, trigger && /* @__PURE__ */ React28.createElement(DialogPrimitive3.Trigger, { asChild: true }, trigger), /* @__PURE__ */ React28.createElement(DialogPrimitive3.Portal, null, /* @__PURE__ */ React28.createElement(DialogPrimitive3.Overlay, { className: Dialog_default.overlay }), /* @__PURE__ */ React28.createElement(DialogPrimitive3.Content, { className: Dialog_default.content }, /* @__PURE__ */ React28.createElement("div", { className: Dialog_default.header }, title && /* @__PURE__ */ React28.createElement(DialogPrimitive3.Title, { className: Dialog_default.title }, title), description && /* @__PURE__ */ React28.createElement(DialogPrimitive3.Description, { className: Dialog_default.description }, description), /* @__PURE__ */ React28.createElement(DialogPrimitive3.Close, { className: Dialog_default.close, "aria-label": "Close" }, "\xC3\u2014")), /* @__PURE__ */ React28.createElement("div", { className: Dialog_default.body }, children))));
}

// src/components/ui/overlays/Popover.tsx
import React29 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\overlays\Popover.module-css
var Popover_default = { "content": "imui_Popover_content__ReVU_F", "arrow": "imui_Popover_arrow__rzANkF" };

// src/components/ui/overlays/Popover.tsx
function Popover({
  trigger,
  children,
  open,
  onOpenChange,
  className
}) {
  return /* @__PURE__ */ React29.createElement(PopoverPrimitive.Root, { open, onOpenChange }, /* @__PURE__ */ React29.createElement(PopoverPrimitive.Trigger, { asChild: true }, trigger), /* @__PURE__ */ React29.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React29.createElement(
    PopoverPrimitive.Content,
    {
      className: cn(Popover_default.content, className),
      sideOffset: 8
    },
    children,
    /* @__PURE__ */ React29.createElement(PopoverPrimitive.Arrow, { className: Popover_default.arrow })
  )));
}

// src/components/ui/overlays/Toast.tsx
import React30, { createContext, useContext, useState, useCallback } from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\overlays\Toast.module-css
var Toast_default = { "container": "imui_Toast_container__k1fRm9", "toast": "imui_Toast_toast__0lZV_Z", "success": "imui_Toast_success__tKUAoG", "error": "imui_Toast_error__qb1-5O", "warning": "imui_Toast_warning__dJgZW8", "info": "imui_Toast_info__nKkKij" };

// src/components/ui/overlays/Toast.tsx
var ToastContext = createContext(void 0);
var useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const addToast = useCallback((message, type = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 5e3);
  }, [removeToast]);
  return /* @__PURE__ */ React30.createElement(ToastContext.Provider, { value: { addToast, removeToast } }, children, /* @__PURE__ */ React30.createElement("div", { className: Toast_default.container }, toasts.map((toast) => /* @__PURE__ */ React30.createElement(
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
import React31 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\overlays\Tooltip.module-css
var Tooltip_default = { "content": "imui_Tooltip_content__KbQaB-", "arrow": "imui_Tooltip_arrow__lHEdqb" };

// src/components/ui/overlays/Tooltip.tsx
function Tooltip({
  children,
  content,
  side = "top",
  className
}) {
  return /* @__PURE__ */ React31.createElement(TooltipPrimitive.Provider, { delayDuration: 300 }, /* @__PURE__ */ React31.createElement(TooltipPrimitive.Root, null, /* @__PURE__ */ React31.createElement(TooltipPrimitive.Trigger, { asChild: true }, children), /* @__PURE__ */ React31.createElement(TooltipPrimitive.Portal, null, /* @__PURE__ */ React31.createElement(
    TooltipPrimitive.Content,
    {
      className: cn(Tooltip_default.content, className),
      side,
      sideOffset: 4
    },
    content,
    /* @__PURE__ */ React31.createElement(TooltipPrimitive.Arrow, { className: Tooltip_default.arrow })
  ))));
}

// src/components/ui/chatbox/ChatPage.tsx
import React33, { useState as useState3, useRef as useRef2, useEffect } from "react";

// src/components/ui/chatbox/ChatContext.tsx
import React32, { createContext as createContext2, useContext as useContext2, useState as useState2, useRef, useCallback as useCallback2, useMemo } from "react";
import { useChat } from "@ai-sdk/react";
var MAX_FAILURES = 3;
var ChatContext = createContext2(void 0);
function ChatProvider({ children }) {
  const [isChatActive, setIsChatActive] = useState2(false);
  const [input, setInput] = useState2("");
  const [isDisabled, setIsDisabled] = useState2(false);
  const [failureCount, setFailureCount] = useState2(0);
  const failureRef = useRef(0);
  const reportFailure = useCallback2(() => {
    failureRef.current += 1;
    setFailureCount(failureRef.current);
    if (failureRef.current >= MAX_FAILURES) {
      setIsDisabled(true);
    }
  }, []);
  const resetChat = useCallback2(() => {
    failureRef.current = 0;
    setFailureCount(0);
    setIsDisabled(false);
  }, []);
  const {
    messages,
    sendMessage: sdkSendMessage,
    status,
    setMessages
  } = useChat({
    onError: () => {
      reportFailure();
    }
  });
  const isLoading = status === "submitted" || status === "streaming";
  const handleInputChange = useCallback2((e) => {
    setInput(e.target.value);
  }, []);
  const handleSubmit = useCallback2(async (e) => {
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
  const append = useCallback2(async (message) => {
    await sdkSendMessage({
      text: message.content
    });
  }, [sdkSendMessage]);
  const value = useMemo(() => ({
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
  return /* @__PURE__ */ React32.createElement(ChatContext.Provider, { value }, children);
}
function useChatContext() {
  const context = useContext2(ChatContext);
  if (context === void 0) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\ui\chatbox\ChatPage.module-css
var ChatPage_default = { "container": "imui_ChatPage_container__f-OEzM", "compact": "imui_ChatPage_compact__0KStXp", "minimal": "imui_ChatPage_minimal__9eY1AP", "header": "imui_ChatPage_header__SOMH7M", "messagesArea": "imui_ChatPage_messagesArea__sV5s5h", "inputArea": "imui_ChatPage_inputArea__qm83xL", "fullPage": "imui_ChatPage_fullPage__M6R8jD", "statusDot": "imui_ChatPage_statusDot__sqEK7x", "messageWrapper": "imui_ChatPage_messageWrapper__76myhb", "userWrapper": "imui_ChatPage_userWrapper__USa8Sa", "assistantWrapper": "imui_ChatPage_assistantWrapper__0k5G0Q", "bubble": "imui_ChatPage_bubble__DnhTHp", "userBubble": "imui_ChatPage_userBubble__9r3GP9", "assistantBubble": "imui_ChatPage_assistantBubble__DU0NcB", "timestamp": "imui_ChatPage_timestamp__euuSzn", "tsx": "imui_ChatPage_tsx__3XljiS", "premiumWrapper": "imui_ChatPage_premiumWrapper__Y8BgzN", "premiumContainer": "imui_ChatPage_premiumContainer__blQVYb", "premiumInput": "imui_ChatPage_premiumInput__030Iaz", "premiumSendButton": "imui_ChatPage_premiumSendButton__pciu1c", "premiumIcon": "imui_ChatPage_premiumIcon__y81srG", "premiumGlow": "imui_ChatPage_premiumGlow__vwFeZT", "typing": "imui_ChatPage_typing__ZzKxZp", "dot": "imui_ChatPage_dot__oTqVwu", "closeButton": "imui_ChatPage_closeButton__lC1okr" };

// src/components/ui/chatbox/ChatPage.tsx
function ChatPage({
  initialMessages,
  className,
  onSendMessage,
  onClose,
  isFullPage,
  variant = "full",
  placeholder = "Ask anything...",
  onSessionCreate,
  onSaveConversation
}) {
  const [sessionId] = useState3(() => crypto.randomUUID());
  const [error, setError] = useState3(null);
  const [isSaving, setIsSaving] = useState3(false);
  const scrollRef = useRef2(null);
  const hasCreatedSession = useRef2(false);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: submitContext,
    status,
    isLoading: isChatLoading,
    setMessages,
    setIsChatActive,
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
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);
  useEffect(() => {
    if (!onSessionCreate || hasCreatedSession.current) return;
    hasCreatedSession.current = true;
    onSessionCreate(sessionId, { started_at: (/* @__PURE__ */ new Date()).toISOString() }).catch((err) => {
      console.error("[ChatPage] Session creation error:", err);
      setError(`Session creation failed: ${err.message || "Unknown error"}`);
      reportFailure();
    });
  }, [sessionId, onSessionCreate]);
  const buildConversationPayload = () => ({
    session_id: sessionId,
    messages: messages.map((msg) => ({
      role: msg.role === "assistant" ? "assistant" : "user",
      content: getMessageContent(msg),
      timestamp: msg.timestamp || (/* @__PURE__ */ new Date()).toISOString()
    }))
  });
  const saveConversation = async () => {
    if (messages.length === 0 || !onSaveConversation) return;
    setIsSaving(true);
    setError(null);
    try {
      await onSaveConversation(buildConversationPayload());
    } catch (err) {
      console.error("[ChatPage] Failed to save conversation:", err);
      setError(`Failed to save: ${err.message || "Unknown error"}`);
    } finally {
      setIsSaving(false);
    }
  };
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
  return /* @__PURE__ */ React33.createElement(
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
    /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.header }, /* @__PURE__ */ React33.createElement(Flex, { align: "center", justify: "between", gap: "12" }, /* @__PURE__ */ React33.createElement(Flex, { align: "center", gap: "12" }, /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.statusDot }), /* @__PURE__ */ React33.createElement(Stack, { gap: "0" }, /* @__PURE__ */ React33.createElement(Text, { weight: "semibold", size: "sm" }, "Imadgen AI"), /* @__PURE__ */ React33.createElement(Text, { size: "xs", tone: "muted" }, "Quantum-V2 Core"))), /* @__PURE__ */ React33.createElement(Flex, { align: "center", gap: "8" }, onClose && /* @__PURE__ */ React33.createElement(
      IconButton,
      {
        variant: "ghost",
        size: "sm",
        onClick: handleEndChat,
        "aria-label": "Close chat",
        className: ChatPage_default.closeButton,
        disabled: isSaving
      },
      /* @__PURE__ */ React33.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React33.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ React33.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))
    )))),
    isDisabled && /* @__PURE__ */ React33.createElement("div", { style: { padding: "12px 16px", backgroundColor: "rgba(239, 68, 68, 0.12)", borderBottom: "1px solid rgba(239, 68, 68, 0.2)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" } }, /* @__PURE__ */ React33.createElement(Text, { size: "sm", tone: "danger" }, "Chat unavailable - service failed to connect. Please try again later."), /* @__PURE__ */ React33.createElement(
      "button",
      {
        onClick: resetChat,
        style: { flexShrink: 0, fontSize: "12px", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(239, 68, 68, 0.4)", background: "transparent", color: "inherit", cursor: "pointer" }
      },
      "Retry"
    )),
    error && !isDisabled && /* @__PURE__ */ React33.createElement("div", { style: { padding: "12px 16px", backgroundColor: "rgba(239, 68, 68, 0.1)" } }, /* @__PURE__ */ React33.createElement(Text, { size: "sm", tone: "danger" }, error)),
    /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.messagesArea, ref: scrollRef }, /* @__PURE__ */ React33.createElement(Stack, { gap: "16" }, messages.map((message) => /* @__PURE__ */ React33.createElement(
      "div",
      {
        key: message.id,
        className: cn(
          ChatPage_default.messageWrapper,
          message.role === "user" ? ChatPage_default.userWrapper : ChatPage_default.assistantWrapper
        )
      },
      /* @__PURE__ */ React33.createElement("div", { className: cn(
        ChatPage_default.bubble,
        message.role === "user" ? ChatPage_default.userBubble : ChatPage_default.assistantBubble
      ) }, /* @__PURE__ */ React33.createElement(Text, { size: "sm" }, getMessageContent(message))),
      /* @__PURE__ */ React33.createElement(Text, { size: "xs", tone: "muted", className: ChatPage_default.timestamp }, message.timestamp ? new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    )), isStreaming && /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.assistantWrapper }, /* @__PURE__ */ React33.createElement("div", { className: cn(ChatPage_default.bubble, ChatPage_default.assistantBubble, ChatPage_default.typing) }, /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.dot }), /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.dot }), /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.dot }))))),
    /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.inputArea }, /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.premiumWrapper }, /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.premiumGlow }), /* @__PURE__ */ React33.createElement("div", { className: ChatPage_default.premiumContainer }, /* @__PURE__ */ React33.createElement(
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
    ), /* @__PURE__ */ React33.createElement(
      "button",
      {
        className: ChatPage_default.premiumSendButton,
        onClick: () => handleChatSubmit(),
        disabled: isDisabled || (!input.trim() || !canSend) && variant !== "minimal",
        "aria-label": "Send message"
      },
      /* @__PURE__ */ React33.createElement(
        "svg",
        {
          className: ChatPage_default.premiumIcon,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        /* @__PURE__ */ React33.createElement("path", { d: "M22 2L11 13" }),
        /* @__PURE__ */ React33.createElement("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
      )
    ))))
  );
}

// src/components/effects/CursorGlow.tsx
import { useEffect as useEffect2 } from "react";
function CursorGlow() {
  useEffect2(() => {
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
import { useEffect as useEffect3, useRef as useRef3 } from "react";
function EmbersBGE() {
  const canvasRef = useRef3(null);
  useEffect3(() => {
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
import { useState as useState4, useEffect as useEffect4 } from "react";
import { useTheme } from "next-themes";
function LightTheme() {
  const [mounted, setMounted] = useState4(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect4(() => {
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
import { useEffect as useEffect5, useRef as useRef4 } from "react";
function NetBGE() {
  const canvasRef = useRef4(null);
  useEffect5(() => {
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
import { useEffect as useEffect6, useRef as useRef5 } from "react";
function SwarmsBGE() {
  const canvasRef = useRef5(null);
  useEffect6(() => {
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
import React34, { useEffect as useEffect7, useRef as useRef6 } from "react";

// css-module-local:D:\Yushrut\PROJECTS\ui\src\components\effects\WaveformBackground.module-css
var WaveformBackground_default = { "waveformCanvas": "imui_WaveformBackground_waveformCanvas__fBQL63" };

// src/components/effects/WaveformBackground.tsx
function WaveformBackground() {
  const canvasRef = useRef6(null);
  useEffect7(() => {
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
  return /* @__PURE__ */ React34.createElement("canvas", { ref: canvasRef, className: WaveformBackground_default.waveformCanvas });
}
export {
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
};
