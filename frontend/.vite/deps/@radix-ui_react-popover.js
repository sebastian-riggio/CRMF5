import {
  $cf1ac5d9fe0e8206$export$21b07c8f274aebd5,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
  $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9
} from "./chunk-5E4J4HN5.js";
import "./chunk-IP3DGJOH.js";
import {
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  $d3863c46a17e8a28$export$20e40289641fbbb6,
  Combination_default
} from "./chunk-BN2L52F6.js";
import {
  hideOthers
} from "./chunk-IDQL5CFE.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37
} from "./chunk-7GXLLTGG.js";
import {
  $f1701beae083dbae$export$602eac185826482c
} from "./chunk-RMHO2OYH.js";
import {
  $5cb92bef7577960e$export$177fb62ff3ec1f22
} from "./chunk-2XX4PYNK.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "./chunk-GEWL5PN7.js";
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
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
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

// node_modules/@radix-ui/react-popover/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $cb5cc270b50c6fcd$var$POPOVER_NAME = "Popover";
var [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
var $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props) => {
  const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const triggerRef = (0, import_react.useRef)(null);
  const [hasCustomAnchor, setHasCustomAnchor] = (0, import_react.useState)(false);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_react.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react.createElement)($cb5cc270b50c6fcd$var$PopoverProvider, {
    scope: __scopePopover,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    hasCustomAnchor,
    onCustomAnchorAdd: (0, import_react.useCallback)(
      () => setHasCustomAnchor(true),
      []
    ),
    onCustomAnchorRemove: (0, import_react.useCallback)(
      () => setHasCustomAnchor(false),
      []
    ),
    modal
  }, children));
};
Object.assign($cb5cc270b50c6fcd$export$5b6b19405a83ff9d, {
  displayName: $cb5cc270b50c6fcd$var$POPOVER_NAME
});
var $cb5cc270b50c6fcd$var$ANCHOR_NAME = "PopoverAnchor";
var $cb5cc270b50c6fcd$export$96e5381f42521a79 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...anchorProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$ANCHOR_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
  (0, import_react.useEffect)(() => {
    onCustomAnchorAdd();
    return () => onCustomAnchorRemove();
  }, [
    onCustomAnchorAdd,
    onCustomAnchorRemove
  ]);
  return (0, import_react.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
Object.assign($cb5cc270b50c6fcd$export$96e5381f42521a79, {
  displayName: $cb5cc270b50c6fcd$var$ANCHOR_NAME
});
var $cb5cc270b50c6fcd$var$TRIGGER_NAME = "PopoverTrigger";
var $cb5cc270b50c6fcd$export$7dacb05d26466c3 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...triggerProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  const trigger = (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
  return context.hasCustomAnchor ? trigger : (0, import_react.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), trigger);
});
Object.assign($cb5cc270b50c6fcd$export$7dacb05d26466c3, {
  displayName: $cb5cc270b50c6fcd$var$TRIGGER_NAME
});
var $cb5cc270b50c6fcd$var$PORTAL_NAME = "PopoverPortal";
var [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
  forceMount: void 0
});
var $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
  return (0, import_react.createElement)($cb5cc270b50c6fcd$var$PortalProvider, {
    scope: __scopePopover,
    forceMount
  }, (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
Object.assign($cb5cc270b50c6fcd$export$dd679ffb4362d2d4, {
  displayName: $cb5cc270b50c6fcd$var$PORTAL_NAME
});
var $cb5cc270b50c6fcd$var$CONTENT_NAME = "PopoverContent";
var $cb5cc270b50c6fcd$export$d7e1f420b25549ff = (0, import_react.forwardRef)((props, forwardedRef) => {
  const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  return (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? (0, import_react.createElement)($cb5cc270b50c6fcd$var$PopoverContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : (0, import_react.createElement)($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
Object.assign($cb5cc270b50c6fcd$export$d7e1f420b25549ff, {
  displayName: $cb5cc270b50c6fcd$var$CONTENT_NAME
});
var $cb5cc270b50c6fcd$var$PopoverContentModal = (0, import_react.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const contentRef = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const isRightClickOutsideRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return (0, import_react.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, (0, import_react.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      if (!isRightClickOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      isRightClickOutsideRef.current = isRightClick;
    }, {
      checkForDefaultPrevented: false
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $cb5cc270b50c6fcd$var$PopoverContentNonModal = (0, import_react.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const hasInteractedOutsideRef = (0, import_react.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react.useRef)(false);
  return (0, import_react.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $cb5cc270b50c6fcd$var$PopoverContentImpl = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return (0, import_react.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, (0, import_react.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onDismiss: () => context.onOpenChange(false)
  }, (0, import_react.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
    role: "dialog",
    id: context.contentId
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
var $cb5cc270b50c6fcd$var$CLOSE_NAME = "PopoverClose";
var $cb5cc270b50c6fcd$export$d6ac43ebaa40d53e = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...closeProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CLOSE_NAME, __scopePopover);
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
Object.assign($cb5cc270b50c6fcd$export$d6ac43ebaa40d53e, {
  displayName: $cb5cc270b50c6fcd$var$CLOSE_NAME
});
var $cb5cc270b50c6fcd$var$ARROW_NAME = "PopoverArrow";
var $cb5cc270b50c6fcd$export$3152841115e061b2 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...arrowProps } = props;
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  return (0, import_react.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($cb5cc270b50c6fcd$export$3152841115e061b2, {
  displayName: $cb5cc270b50c6fcd$var$ARROW_NAME
});
function $cb5cc270b50c6fcd$var$getState(open) {
  return open ? "open" : "closed";
}
var $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
var $cb5cc270b50c6fcd$export$b688253958b8dfe7 = $cb5cc270b50c6fcd$export$96e5381f42521a79;
var $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
var $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
var $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;
var $cb5cc270b50c6fcd$export$f39c2d165cd861fe = $cb5cc270b50c6fcd$export$d6ac43ebaa40d53e;
var $cb5cc270b50c6fcd$export$21b07c8f274aebd5 = $cb5cc270b50c6fcd$export$3152841115e061b2;
export {
  $cb5cc270b50c6fcd$export$b688253958b8dfe7 as Anchor,
  $cb5cc270b50c6fcd$export$21b07c8f274aebd5 as Arrow,
  $cb5cc270b50c6fcd$export$f39c2d165cd861fe as Close,
  $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 as Content,
  $cb5cc270b50c6fcd$export$5b6b19405a83ff9d as Popover,
  $cb5cc270b50c6fcd$export$96e5381f42521a79 as PopoverAnchor,
  $cb5cc270b50c6fcd$export$3152841115e061b2 as PopoverArrow,
  $cb5cc270b50c6fcd$export$d6ac43ebaa40d53e as PopoverClose,
  $cb5cc270b50c6fcd$export$d7e1f420b25549ff as PopoverContent,
  $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 as PopoverPortal,
  $cb5cc270b50c6fcd$export$7dacb05d26466c3 as PopoverTrigger,
  $cb5cc270b50c6fcd$export$602eac185826482c as Portal,
  $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 as Root,
  $cb5cc270b50c6fcd$export$41fb9f06171c75f4 as Trigger,
  $cb5cc270b50c6fcd$export$c8393c9e73286932 as createPopoverScope
};
//# sourceMappingURL=@radix-ui_react-popover.js.map
