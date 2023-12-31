import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b
} from "./chunk-G4QG6SND.js";
import {
  $f631663db3294ace$export$b39126d51d94e6f3
} from "./chunk-Z2WVH235.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37
} from "./chunk-7GXLLTGG.js";
import {
  $ea1ef594cf570d83$export$be92b6f5f03c0fe9
} from "./chunk-KHP73JOL.js";
import {
  $5cb92bef7577960e$export$177fb62ff3ec1f22
} from "./chunk-2XX4PYNK.js";
import {
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2
} from "./chunk-HS4X7M7J.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "./chunk-GEWL5PN7.js";
import {
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "./chunk-EPQIXPUN.js";
import {
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "./chunk-FAMS5IXB.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f
} from "./chunk-YANAMVMO.js";
import {
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05
} from "./chunk-BLL33RSN.js";
import {
  _extends
} from "./chunk-PQEZCWQY.js";
import {
  require_react_dom
} from "./chunk-MKG3NT3Y.js";
import {
  require_react
} from "./chunk-67XTWVEJ.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var $322c88a641701f3b$var$NAVIGATION_MENU_NAME = "NavigationMenu";
var [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
  $322c88a641701f3b$var$createCollectionScope,
  $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
var [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var $322c88a641701f3b$export$5b2278cf1e8bcae2 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
  const [navigationMenu, setNavigationMenu] = (0, import_react.useState)(null);
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNavigationMenu(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const openTimerRef = (0, import_react.useRef)(0);
  const closeTimerRef = (0, import_react.useRef)(0);
  const skipDelayTimerRef = (0, import_react.useRef)(0);
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react.useState)(true);
  const [value1 = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: (value) => {
      const isOpen = value !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(value);
    },
    defaultProp: defaultValue
  });
  const startCloseTimer = (0, import_react.useCallback)(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setValue(""),
      150
    );
  }, [
    setValue
  ]);
  const handleOpen = (0, import_react.useCallback)((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [
    setValue
  ]);
  const handleDelayedOpen = (0, import_react.useCallback)((itemValue) => {
    const isOpenItem = value1 === itemValue;
    if (isOpenItem)
      window.clearTimeout(closeTimerRef.current);
    else
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
  }, [
    value1,
    setValue,
    delayDuration
  ]);
  (0, import_react.useEffect)(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value: value1,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue(
        (prevValue) => prevValue === itemValue ? "" : itemValue
      );
    },
    onItemDismiss: () => setValue("")
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.nav, _extends({
    "aria-label": "Main",
    "data-orientation": orientation,
    dir: direction
  }, NavigationMenuProps, {
    ref: composedRef
  })));
});
Object.assign($322c88a641701f3b$export$5b2278cf1e8bcae2, {
  displayName: $322c88a641701f3b$var$NAVIGATION_MENU_NAME
});
var $322c88a641701f3b$var$SUB_NAME = "NavigationMenuSub";
var $322c88a641701f3b$export$5958edd6c4ee7c79 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", ...subProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$SUB_NAME, __scopeNavigationMenu);
  const [value = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue
  });
  return (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: false,
    value,
    dir: context.dir,
    orientation,
    rootNavigationMenu: context.rootNavigationMenu,
    onTriggerEnter: (itemValue) => setValue(itemValue),
    onItemSelect: (itemValue) => setValue(itemValue),
    onItemDismiss: () => setValue("")
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-orientation": orientation
  }, subProps, {
    ref: forwardedRef
  })));
});
Object.assign($322c88a641701f3b$export$5958edd6c4ee7c79, {
  displayName: $322c88a641701f3b$var$SUB_NAME
});
var $322c88a641701f3b$var$NavigationMenuProvider = (props) => {
  const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
  const [viewport, setViewport] = (0, import_react.useState)(null);
  const [viewportContent, setViewportContent] = (0, import_react.useState)(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = (0, import_react.useState)(null);
  return (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: $010c2913dbd2fe3d$export$5cae361ad82dce8b(value),
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerEnter),
    onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerLeave),
    onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentEnter),
    onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentLeave),
    onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemSelect),
    onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemDismiss),
    onViewportContentChange: (0, import_react.useCallback)((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: (0, import_react.useCallback)((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, [])
  }, (0, import_react.createElement)($322c88a641701f3b$var$Collection.Provider, {
    scope
  }, (0, import_react.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
    scope,
    items: viewportContent
  }, children)));
};
var $322c88a641701f3b$var$LIST_NAME = "NavigationMenuList";
var $322c88a641701f3b$export$c361068a95fd2286 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...listProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$LIST_NAME, __scopeNavigationMenu);
  const list = (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.ul, _extends({
    "data-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  }));
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, {
    style: {
      position: "relative"
    },
    ref: context.onIndicatorTrackChange
  }, (0, import_react.createElement)($322c88a641701f3b$var$Collection.Slot, {
    scope: __scopeNavigationMenu
  }, context.isRootMenu ? (0, import_react.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, list) : list));
});
Object.assign($322c88a641701f3b$export$c361068a95fd2286, {
  displayName: $322c88a641701f3b$var$LIST_NAME
});
var $322c88a641701f3b$var$ITEM_NAME = "NavigationMenuItem";
var [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
var $322c88a641701f3b$export$ffdbb83a2de845c2 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
  const autoValue = $1746a345f3d73bb7$export$f680877a34711e37();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const contentRef = (0, import_react.useRef)(null);
  const triggerRef = (0, import_react.useRef)(null);
  const focusProxyRef = (0, import_react.useRef)(null);
  const restoreContentTabOrderRef = (0, import_react.useRef)(() => {
  });
  const wasEscapeCloseRef = (0, import_react.useRef)(false);
  const handleContentEntry = (0, import_react.useCallback)((side = "start") => {
    if (contentRef.current) {
      restoreContentTabOrderRef.current();
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        $322c88a641701f3b$var$focusFirst(side === "start" ? candidates : candidates.reverse());
    }
  }, []);
  const handleContentExit = (0, import_react.useCallback)(() => {
    if (contentRef.current) {
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        restoreContentTabOrderRef.current = $322c88a641701f3b$var$removeFromTabOrder(candidates);
    }
  }, []);
  return (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuItemContextProvider, {
    scope: __scopeNavigationMenu,
    value,
    triggerRef,
    contentRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onEntryKeyDown: handleContentEntry,
    onFocusProxyEnter: handleContentEntry,
    onRootContentClose: handleContentExit,
    onContentFocusOutside: handleContentExit
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.li, _extends({}, itemProps, {
    ref: forwardedRef
  })));
});
Object.assign($322c88a641701f3b$export$ffdbb83a2de845c2, {
  displayName: $322c88a641701f3b$var$ITEM_NAME
});
var $322c88a641701f3b$var$TRIGGER_NAME = "NavigationMenuTrigger";
var $322c88a641701f3b$export$37fe8002734d8f2 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = (0, import_react.useRef)(false);
  const wasClickCloseRef = (0, import_react.useRef)(false);
  const open = itemContext.value === context.value;
  return (0, import_react.createElement)(import_react.Fragment, null, (0, import_react.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
    scope: __scopeNavigationMenu,
    value: itemContext.value
  }, (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    id: triggerId,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "aria-expanded": open,
    "aria-controls": contentId
  }, triggerProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => {
      wasClickCloseRef.current = false;
      itemContext.wasEscapeCloseRef.current = false;
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
        return;
      context.onTriggerEnter(itemContext.value);
      hasPointerMoveOpenedRef.current = true;
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled)
        return;
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    })),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      context.onItemSelect(itemContext.value);
      wasClickCloseRef.current = open;
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: verticalEntryKey
      }[context.orientation];
      if (open && event.key === entryKey) {
        itemContext.onEntryKeyDown();
        event.preventDefault();
      }
    })
  })))), open && (0, import_react.createElement)(import_react.Fragment, null, (0, import_react.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    "aria-hidden": true,
    tabIndex: 0,
    ref: itemContext.focusProxyRef,
    onFocus: (event) => {
      const content = itemContext.contentRef.current;
      const prevFocusedElement = event.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === ref.current;
      const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent)
        itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
  }), context.viewport && (0, import_react.createElement)("span", {
    "aria-owns": contentId
  })));
});
Object.assign($322c88a641701f3b$export$37fe8002734d8f2, {
  displayName: $322c88a641701f3b$var$TRIGGER_NAME
});
var $322c88a641701f3b$var$LINK_NAME = "NavigationMenuLink";
var $322c88a641701f3b$var$LINK_SELECT = "navigationMenu.linkSelect";
var $322c88a641701f3b$export$6893bf21536567da = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
  return (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-active": active ? "" : void 0,
    "aria-current": active ? "page" : void 0
  }, linkProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event1) => {
      const target = event1.target;
      const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
        bubbles: true,
        cancelable: true
      });
      target.addEventListener(
        $322c88a641701f3b$var$LINK_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
        const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, rootContentDismissEvent);
      }
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
Object.assign($322c88a641701f3b$export$6893bf21536567da, {
  displayName: $322c88a641701f3b$var$LINK_NAME
});
var $322c88a641701f3b$var$INDICATOR_NAME = "NavigationMenuIndicator";
var $322c88a641701f3b$export$8ddb526647c0d8fb = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? import_react_dom.default.createPortal((0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || isVisible
  }, (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, _extends({}, indicatorProps, {
    ref: forwardedRef
  }))), context.indicatorTrack) : null;
});
Object.assign($322c88a641701f3b$export$8ddb526647c0d8fb, {
  displayName: $322c88a641701f3b$var$INDICATOR_NAME
});
var $322c88a641701f3b$var$NavigationMenuIndicatorImpl = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, __scopeNavigationMenu);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = (0, import_react.useState)(null);
  const [position, setPosition] = (0, import_react.useState)(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  (0, import_react.useEffect)(() => {
    var _items$find;
    const items = getItems();
    const triggerNode = (_items$find = items.find(
      (item) => item.value === context.value
    )) === null || _items$find === void 0 ? void 0 : _items$find.ref.current;
    if (triggerNode)
      setActiveTrigger(triggerNode);
  }, [
    getItems,
    context.value
  ]);
  const handlePositionChange = () => {
    if (activeTrigger)
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
  };
  $322c88a641701f3b$var$useResizeObserver(activeTrigger, handlePositionChange);
  $322c88a641701f3b$var$useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true,
    "data-state": isVisible ? "visible" : "hidden",
    "data-orientation": context.orientation
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      position: "absolute",
      ...isHorizontal ? {
        left: 0,
        width: position.size + "px",
        transform: `translateX(${position.offset}px)`
      } : {
        top: 0,
        height: position.size + "px",
        transform: `translateY(${position.offset}px)`
      },
      ...indicatorProps.style
    }
  })) : null;
});
var $322c88a641701f3b$var$CONTENT_NAME = "NavigationMenuContent";
var $322c88a641701f3b$export$38e00e996c2f93f7 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open)
  }, commonProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ...commonProps.style
    }
  }))) : (0, import_react.createElement)($322c88a641701f3b$var$ViewportContentMounter, _extends({
    forceMount
  }, commonProps, {
    ref: composedRefs
  }));
});
Object.assign($322c88a641701f3b$export$38e00e996c2f93f7, {
  displayName: $322c88a641701f3b$var$CONTENT_NAME
});
var $322c88a641701f3b$var$ViewportContentMounter = (0, import_react.forwardRef)((props, forwardedRef) => {
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [
    props,
    forwardedRef,
    onViewportContentChange
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    return () => onViewportContentRemove(props.value);
  }, [
    props.value,
    onViewportContentRemove
  ]);
  return null;
});
var $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var $322c88a641701f3b$var$NavigationMenuContentImpl = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, __scopeNavigationMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, value);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const prevMotionAttributeRef = (0, import_react.useRef)(null);
  const { onItemDismiss } = context;
  (0, import_react.useEffect)(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        var _triggerRef$current;
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement))
          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || _triggerRef$current.focus();
      };
      content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [
    context.isRootMenu,
    props.value,
    triggerRef,
    onItemDismiss,
    onRootContentClose
  ]);
  const motionAttribute = (0, import_react.useMemo)(() => {
    const items = getItems();
    const values = items.map(
      (item) => item.value
    );
    if (context.dir === "rtl")
      values.reverse();
    const index = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected)
      return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index !== prevIndex) {
        if (isSelected && prevIndex !== -1)
          return index > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index !== -1)
          return index > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [
    context.previousValue,
    context.value,
    context.dir,
    getItems,
    value
  ]);
  return (0, import_react.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, (0, import_react.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    id: contentId,
    "aria-labelledby": triggerId,
    "data-motion": motionAttribute,
    "data-orientation": context.orientation
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => {
      var _ref$current;
      const rootContentDismissEvent = new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.dispatchEvent(rootContentDismissEvent);
    },
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      var _context$rootNavigati;
      onContentFocusOutside();
      const target = event.target;
      if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target))
        event.preventDefault();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      var _context$viewport;
      const target = event.target;
      const isTrigger = getItems().some((item) => {
        var _item$ref$current;
        return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
      });
      const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
      if (isTrigger || isRootViewport || !context.isRootMenu)
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) {
        const candidates = $322c88a641701f3b$var$getTabbableCandidates(event.currentTarget);
        const focusedElement = document.activeElement;
        const index = candidates.findIndex(
          (candidate) => candidate === focusedElement
        );
        const isMovingBackwards = event.shiftKey;
        const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
        if ($322c88a641701f3b$var$focusFirst(nextCandidates))
          event.preventDefault();
        else {
          var _focusProxyRef$curren;
          (_focusProxyRef$curren = focusProxyRef.current) === null || _focusProxyRef$curren === void 0 || _focusProxyRef$curren.focus();
        }
      }
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      wasEscapeCloseRef.current = true;
    })
  })));
});
var $322c88a641701f3b$var$VIEWPORT_NAME = "NavigationMenuViewport";
var $322c88a641701f3b$export$ee880b97cc6d44a5 = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, _extends({}, viewportProps, {
    ref: forwardedRef
  })));
});
Object.assign($322c88a641701f3b$export$ee880b97cc6d44a5, {
  displayName: $322c88a641701f3b$var$VIEWPORT_NAME
});
var $322c88a641701f3b$var$NavigationMenuViewportImpl = (0, import_react.forwardRef)((props1, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props1;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onViewportChange);
  const viewportContentContext = $322c88a641701f3b$var$useViewportContentContext($322c88a641701f3b$var$CONTENT_NAME, props1.__scopeNavigationMenu);
  const [size, setSize] = (0, import_react.useState)(null);
  const [content, setContent] = (0, import_react.useState)(null);
  const viewportWidth = size ? (size === null || size === void 0 ? void 0 : size.width) + "px" : void 0;
  const viewportHeight = size ? (size === null || size === void 0 ? void 0 : size.height) + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content)
      setSize({
        width: content.offsetWidth,
        height: content.offsetHeight
      });
  };
  $322c88a641701f3b$var$useResizeObserver(content, handleSizeChange);
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "data-orientation": context.orientation
  }, viewportImplProps, {
    ref: composedRefs,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: viewportWidth,
      ["--radix-navigation-menu-viewport-height"]: viewportHeight,
      ...viewportImplProps.style
    },
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
  }), Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props }]) => {
    const isActive = activeContentValue === value;
    return (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      key: value,
      present: forceMount || isActive
    }, (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({}, props, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(ref, (node) => {
        if (isActive && node)
          setContent(node);
      })
    })));
  }));
});
var $322c88a641701f3b$var$FOCUS_GROUP_NAME = "FocusGroup";
var $322c88a641701f3b$var$FocusGroup = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_NAME, __scopeNavigationMenu);
  return (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider, {
    scope: __scopeNavigationMenu
  }, (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot, {
    scope: __scopeNavigationMenu
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: context.dir
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $322c88a641701f3b$var$ARROW_KEYS = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
];
var $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var $322c88a641701f3b$var$FocusGroupItem = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
    scope: __scopeNavigationMenu
  }, (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({}, groupProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isFocusNavigationKey = [
        "Home",
        "End",
        ...$322c88a641701f3b$var$ARROW_KEYS
      ].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map(
          (item) => item.ref.current
        );
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [
          prevItemKey,
          "ArrowUp",
          "End"
        ];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $322c88a641701f3b$var$focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  })));
});
function $322c88a641701f3b$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function $322c88a641701f3b$var$removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function $322c88a641701f3b$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
function $322c88a641701f3b$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
var $322c88a641701f3b$export$d7a01e11500dfb6f = $322c88a641701f3b$export$5958edd6c4ee7c79;
var $322c88a641701f3b$export$54c2e3dc7acea9f5 = $322c88a641701f3b$export$c361068a95fd2286;
var $322c88a641701f3b$export$6d08773d2e66f8f2 = $322c88a641701f3b$export$ffdbb83a2de845c2;
var $322c88a641701f3b$export$41fb9f06171c75f4 = $322c88a641701f3b$export$37fe8002734d8f2;
var $322c88a641701f3b$export$a6c7ac8248d6e38a = $322c88a641701f3b$export$6893bf21536567da;
var $322c88a641701f3b$export$adb584737d712b70 = $322c88a641701f3b$export$8ddb526647c0d8fb;
var $322c88a641701f3b$export$7c6e2c02157bb7d2 = $322c88a641701f3b$export$38e00e996c2f93f7;
var $322c88a641701f3b$export$d5c6c08dc2d3ca7 = $322c88a641701f3b$export$ee880b97cc6d44a5;
export {
  $322c88a641701f3b$export$7c6e2c02157bb7d2 as Content,
  $322c88a641701f3b$export$adb584737d712b70 as Indicator,
  $322c88a641701f3b$export$6d08773d2e66f8f2 as Item,
  $322c88a641701f3b$export$a6c7ac8248d6e38a as Link,
  $322c88a641701f3b$export$54c2e3dc7acea9f5 as List,
  $322c88a641701f3b$export$5b2278cf1e8bcae2 as NavigationMenu,
  $322c88a641701f3b$export$38e00e996c2f93f7 as NavigationMenuContent,
  $322c88a641701f3b$export$8ddb526647c0d8fb as NavigationMenuIndicator,
  $322c88a641701f3b$export$ffdbb83a2de845c2 as NavigationMenuItem,
  $322c88a641701f3b$export$6893bf21536567da as NavigationMenuLink,
  $322c88a641701f3b$export$c361068a95fd2286 as NavigationMenuList,
  $322c88a641701f3b$export$5958edd6c4ee7c79 as NavigationMenuSub,
  $322c88a641701f3b$export$37fe8002734d8f2 as NavigationMenuTrigger,
  $322c88a641701f3b$export$ee880b97cc6d44a5 as NavigationMenuViewport,
  $322c88a641701f3b$export$be92b6f5f03c0fe9 as Root,
  $322c88a641701f3b$export$d7a01e11500dfb6f as Sub,
  $322c88a641701f3b$export$41fb9f06171c75f4 as Trigger,
  $322c88a641701f3b$export$d5c6c08dc2d3ca7 as Viewport,
  $322c88a641701f3b$export$fb8ea5af8c9fcdf0 as createNavigationMenuScope
};
//# sourceMappingURL=@radix-ui_react-navigation-menu.js.map
