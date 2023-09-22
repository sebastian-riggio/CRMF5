import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b
} from "./chunk-G4QG6SND.js";
import {
  $db6c3485150b8e66$export$1ab7ae714698c4b8
} from "./chunk-IP3DGJOH.js";
import {
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "./chunk-EPQIXPUN.js";
import {
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "./chunk-FAMS5IXB.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "./chunk-YANAMVMO.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05
} from "./chunk-BLL33RSN.js";
import {
  _extends
} from "./chunk-PQEZCWQY.js";
import "./chunk-MKG3NT3Y.js";
import {
  require_react
} from "./chunk-67XTWVEJ.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/@radix-ui/react-switch/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $6be4966fd9bbc698$var$SWITCH_NAME = "Switch";
var [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6be4966fd9bbc698$var$SWITCH_NAME);
var [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);
var $6be4966fd9bbc698$export$b5d5cf8927ab7262 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...switchProps } = props;
  const [button, setButton] = (0, import_react.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  return (0, import_react.createElement)($6be4966fd9bbc698$var$SwitchProvider, {
    scope: __scopeSwitch,
    checked,
    disabled
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-required": required,
    "data-state": $6be4966fd9bbc698$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, switchProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && (0, import_react.createElement)($6be4966fd9bbc698$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
Object.assign($6be4966fd9bbc698$export$b5d5cf8927ab7262, {
  displayName: $6be4966fd9bbc698$var$SWITCH_NAME
});
var $6be4966fd9bbc698$var$THUMB_NAME = "SwitchThumb";
var $6be4966fd9bbc698$export$4d07bf653ea69106 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeSwitch, ...thumbProps } = props;
  const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $6be4966fd9bbc698$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, thumbProps, {
    ref: forwardedRef
  }));
});
Object.assign($6be4966fd9bbc698$export$4d07bf653ea69106, {
  displayName: $6be4966fd9bbc698$var$THUMB_NAME
});
var $6be4966fd9bbc698$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return (0, import_react.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $6be4966fd9bbc698$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;
var $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;
export {
  $6be4966fd9bbc698$export$be92b6f5f03c0fe9 as Root,
  $6be4966fd9bbc698$export$b5d5cf8927ab7262 as Switch,
  $6be4966fd9bbc698$export$4d07bf653ea69106 as SwitchThumb,
  $6be4966fd9bbc698$export$6521433ed15a34db as Thumb,
  $6be4966fd9bbc698$export$cf7f5f17f69cbd43 as createSwitchScope
};
//# sourceMappingURL=@radix-ui_react-switch.js.map
