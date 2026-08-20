(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CustomCursor.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dot": "CustomCursor-module__IN7vAW__dot",
  "dotLarge": "CustomCursor-module__IN7vAW__dotLarge",
  "hideCursor": "CustomCursor-module__IN7vAW__hideCursor",
});
}),
"[project]/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CustomCursor.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CustomCursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
            const isWideEnough = window.innerWidth >= 860;
            if (!isFinePointer || !isWideEnough) return;
            document.body.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hideCursor);
            const onMove = {
                "CustomCursor.useEffect.onMove": (e)=>{
                    target.current.x = e.clientX;
                    target.current.y = e.clientY;
                }
            }["CustomCursor.useEffect.onMove"];
            const onOver = {
                "CustomCursor.useEffect.onOver": (e)=>{
                    const el = e.target.closest("a, button");
                    dotRef.current?.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotLarge, !!el);
                }
            }["CustomCursor.useEffect.onOver"];
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseover", onOver);
            let raf;
            const tick = {
                "CustomCursor.useEffect.tick": ()=>{
                    pos.current.x += (target.current.x - pos.current.x) * 0.65;
                    pos.current.y += (target.current.y - pos.current.y) * 0.65;
                    if (dotRef.current) {
                        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
                    }
                    raf = requestAnimationFrame(tick);
                }
            }["CustomCursor.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("mouseover", onOver);
                    cancelAnimationFrame(raf);
                    document.body.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hideCursor);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dotRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
    }, void 0, false, {
        fileName: "[project]/components/CustomCursor.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_s(CustomCursor, "v/FmxpPBzm4rCdV3o7qtVGOcv8o=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module__Z8hQ_W__actions",
  "content": "Hero-module__Z8hQ_W__content",
  "drift": "Hero-module__Z8hQ_W__drift",
  "eyebrowRow": "Hero-module__Z8hQ_W__eyebrowRow",
  "fallback": "Hero-module__Z8hQ_W__fallback",
  "headline": "Hero-module__Z8hQ_W__headline",
  "hero": "Hero-module__Z8hQ_W__hero",
  "lede": "Hero-module__Z8hQ_W__lede",
  "mediaLayer": "Hero-module__Z8hQ_W__mediaLayer",
  "overlay": "Hero-module__Z8hQ_W__overlay",
  "rating": "Hero-module__Z8hQ_W__rating",
  "scrollHint": "Hero-module__Z8hQ_W__scrollHint",
  "stars": "Hero-module__Z8hQ_W__stars",
  "video": "Hero-module__Z8hQ_W__video",
});
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Hero.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Hero() {
    _s();
    const mediaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            videoRef.current?.play().catch({
                "Hero.useEffect": ()=>{}
            }["Hero.useEffect"]);
        }
    }["Hero.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const isDesktop = window.matchMedia("(min-width: 641px)").matches;
            if (!isDesktop) return;
            const onScroll = {
                "Hero.useEffect.onScroll": ()=>{
                    if (mediaRef.current) {
                        mediaRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
                    }
                }
            }["Hero.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Hero.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "top",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mediaRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaLayer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].video,
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        preload: "auto",
                        poster: "/hero-poster.jpg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "/hero.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `wrap ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "Ästhetische Medizin · Düsseldorf Medienhafen"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headline,
                        children: [
                            "Schönheit, die ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "Zeit"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 41,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            "für sich arbeiten lässt."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                        children: "Individuelle Behandlungskonzepte für natürliche Ergebnisse — fachärztlich betreut, auf Langlebigkeit statt schnelle Effekte ausgelegt."
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://salonkee.de/salon/healthy-aesthetics",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-brass",
                                children: "Beratungstermin sichern"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rating,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                                        children: "★★★★★"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "4,9 · Google Bewertungen"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollHint,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    "Scrollen"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Hero, "4eKrE1Qreaq9G1HgeMBbIOhF2Lk=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MenuOverlay.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "footer": "MenuOverlay-module__Zr32dG__footer",
  "inner": "MenuOverlay-module__Zr32dG__inner",
  "instaLink": "MenuOverlay-module__Zr32dG__instaLink",
  "link": "MenuOverlay-module__Zr32dG__link",
  "linkIndex": "MenuOverlay-module__Zr32dG__linkIndex",
  "linkLabel": "MenuOverlay-module__Zr32dG__linkLabel",
  "links": "MenuOverlay-module__Zr32dG__links",
  "overlay": "MenuOverlay-module__Zr32dG__overlay",
  "overlayOpen": "MenuOverlay-module__Zr32dG__overlayOpen",
});
}),
"[project]/components/MenuOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/MenuOverlay.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LINKS = [
    {
        href: "#treatments",
        label: "Behandlungen",
        index: "01"
    },
    {
        href: "#packages",
        label: "Pakete",
        index: "02"
    },
    {
        href: "#about",
        label: "Über uns",
        index: "03"
    },
    {
        href: "#cta",
        label: "Termin anfragen",
        index: "04"
    }
];
const IG_PATH = "M12 2c-2.716 0-3.056.012-4.123.06-1.066.05-1.79.218-2.427.465" + "a4.9 4.9 0 0 0-1.771 1.153A4.9 4.9 0 0 0 2.525 5.45" + "c-.247.637-.416 1.36-.465 2.427C2.012 8.944 2 9.284 2 12" + "s.012 3.056.06 4.123c.05 1.066.218 1.79.465 2.427" + "a4.9 4.9 0 0 0 1.153 1.771 4.9 4.9 0 0 0 1.771 1.153" + "c.637.247 1.36.416 2.427.465C8.944 21.988 9.284 22 12 22" + "s3.056-.012 4.123-.06c1.066-.05 1.79-.218 2.427-.465" + "a4.9 4.9 0 0 0 1.771-1.153 4.9 4.9 0 0 0 1.153-1.771" + "c.247-.637.416-1.36.465-2.427.048-1.067.06-1.407.06-4.123" + "s-.012-3.056-.06-4.123c-.05-1.066-.218-1.79-.465-2.427" + "a4.9 4.9 0 0 0-1.153-1.771A4.9 4.9 0 0 0 18.55 2.525" + "c-.637-.247-1.36-.416-2.427-.465C15.056 2.012 14.716 2 12 2z" + "m0 1.802c2.67 0 2.987.01 4.041.058.976.045 1.505.207 1.858.344" + "c.467.182.8.399 1.15.748.35.35.566.683.748 1.15" + "c.137.353.3.882.344 1.858.048 1.054.058 1.37.058 4.04" + "c0 2.67-.01 2.987-.058 4.041-.045.976-.207 1.505-.344 1.858" + "a3.1 3.1 0 0 1-.748 1.15 3.1 3.1 0 0 1-1.15.748" + "c-.353.137-.882.3-1.858.344-1.054.048-1.37.058-4.041.058" + "c-2.67 0-2.987-.01-4.04-.058-.977-.045-1.506-.207-1.859-.344" + "a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15" + "c-.137-.353-.3-.882-.344-1.858-.048-1.054-.058-1.37-.058-4.041" + "c0-2.67.01-2.987.058-4.04.045-.977.207-1.506.344-1.859" + "c.182-.467.399-.8.748-1.15a3.1 3.1 0 0 1 1.15-.748" + "c.353-.137.882-.3 1.858-.344C9.013 3.812 9.33 3.802 12 3.802z" + "m0 3.064a5.134 5.134 0 1 0 0 10.268 5.134 5.134 0 0 0 0-10.268z" + "m0 8.468a3.334 3.334 0 1 1 0-6.668 3.334 3.334 0 0 1 0 6.668z" + "m6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z";
function MenuOverlay({ open, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuOverlay.useEffect": ()=>{
            document.body.style.overflow = open ? "hidden" : "";
            return ({
                "MenuOverlay.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["MenuOverlay.useEffect"];
        }
    }["MenuOverlay.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlayOpen : ""}`,
        "aria-hidden": !open,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].links,
                    children: LINKS.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                            style: {
                                transitionDelay: open ? `${0.08 * i + 0.15}s` : "0s"
                            },
                            onClick: onClose,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkIndex,
                                    children: link.index
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuOverlay.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkLabel,
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuOverlay.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, link.href, true, {
                            fileName: "[project]/components/MenuOverlay.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/MenuOverlay.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://maps.app.goo.gl/M6ViAXYM3uE6gkJ49",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Neuer Zollhof 1, 40221 Düsseldorf"
                        }, void 0, false, {
                            fileName: "[project]/components/MenuOverlay.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.instagram.com/healthy_aesthetics_duesseldorf/",
                            "aria-label": "Instagram",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instaLink,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                width: "26",
                                height: "26",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: IG_PATH
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuOverlay.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MenuOverlay.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/MenuOverlay.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MenuOverlay.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MenuOverlay.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MenuOverlay.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(MenuOverlay, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = MenuOverlay;
var _c;
__turbopack_context__.k.register(_c, "MenuOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Nav.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "burger": "Nav-module__e1xquq__burger",
  "burgerOpen": "Nav-module__e1xquq__burgerOpen",
  "header": "Nav-module__e1xquq__header",
  "headerHidden": "Nav-module__e1xquq__headerHidden",
  "logo": "Nav-module__e1xquq__logo",
  "logoImg": "Nav-module__e1xquq__logoImg",
  "nav": "Nav-module__e1xquq__nav",
});
}),
"[project]/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MenuOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Nav.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Nav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const ticking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>{
                    if (ticking.current) return;
                    ticking.current = true;
                    requestAnimationFrame({
                        "Nav.useEffect.onScroll": ()=>{
                            const y = window.scrollY;
                            const goingDown = y > lastY.current;
                            const pastThreshold = y > 120;
                            setHidden(goingDown && pastThreshold);
                            lastY.current = y;
                            ticking.current = false;
                        }
                    }["Nav.useEffect.onScroll"]);
                }
            }["Nav.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} ${hidden && !open ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerHidden : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: `wrap ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].side
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#top",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/healthyaestheticslogo.png",
                                alt: "Healthy Aesthetics",
                                width: 320,
                                height: 96,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImg,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burgerOpen : ""}`,
                            "aria-label": open ? "Menü schließen" : "Menü öffnen",
                            "aria-expanded": open,
                            onClick: ()=>setOpen((v)=>!v),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Nav, "4eC9bvCpnWNURw//KiGj+ob99Co=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reveal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "reveal": "Reveal-module__vCs_Ea__reveal",
  "visible": "Reveal-module__vCs_Ea__visible",
});
}),
"[project]/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Reveal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Reveal({ children, delay = 0, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(el);
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.15
            });
            observer.observe(el);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reveal} ${visible ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : ""} ${className}`,
        style: {
            transitionDelay: `${delay}ms`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Reveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollFill.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "line": "ScrollFill-module__Rw19Xa__line",
  "sticky": "ScrollFill-module__Rw19Xa__sticky",
  "text": "ScrollFill-module__Rw19Xa__text",
  "wrap": "ScrollFill-module__Rw19Xa__wrap",
});
}),
"[project]/components/ScrollFill.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollFill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollFill$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ScrollFill.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LINES = [
    "Gute Ästhetik sieht man",
    "nicht sofort. Man sieht sie",
    "mit der Zeit."
];
function ScrollFill() {
    _s();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollFill.useEffect": ()=>{
            const onScroll = {
                "ScrollFill.useEffect.onScroll": ()=>{
                    const el = wrapRef.current;
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const vh = window.innerHeight;
                    const total = rect.height - vh;
                    const scrolled = -rect.top;
                    const raw = total > 0 ? scrolled / total : 0;
                    setProgress(Math.min(1, Math.max(0, raw)));
                }
            }["ScrollFill.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            onScroll();
            return ({
                "ScrollFill.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["ScrollFill.useEffect"];
        }
    }["ScrollFill.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollFill$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrap,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollFill$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sticky,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollFill$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: LINES.map(function(line, i) {
                    const segment = 1 / LINES.length;
                    const local = Math.min(1, Math.max(0, (progress - i * segment) / segment));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollFill$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                        style: {
                            "--fill": `${local * 100}%`
                        },
                        children: line
                    }, line, false, {
                        fileName: "[project]/components/ScrollFill.tsx",
                        lineNumber: 40,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ScrollFill.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ScrollFill.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollFill.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ScrollFill, "M2fg8IKKy+teHXaO2XmMwHv63zg=");
_c = ScrollFill;
var _c;
__turbopack_context__.k.register(_c, "ScrollFill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SmoothAnchors.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothAnchors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function SmoothAnchors() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothAnchors.useEffect": ()=>{
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual";
            }
            if (window.location.hash) {
                window.scrollTo(0, 0);
            }
            const duration = 1100;
            const onClick = {
                "SmoothAnchors.useEffect.onClick": (e)=>{
                    const link = e.target.closest("a[href^='#']");
                    if (!link) return;
                    const id = link.getAttribute("href");
                    if (!id || id === "#") return;
                    const target = document.querySelector(id);
                    if (!target) return;
                    e.preventDefault();
                    const headerOffset = 90;
                    const startY = window.scrollY;
                    const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                    const distance = targetY - startY;
                    const startTime = performance.now();
                    const step = {
                        "SmoothAnchors.useEffect.onClick.step": (now)=>{
                            const elapsed = now - startTime;
                            const progress = Math.min(1, elapsed / duration);
                            const eased = easeInOutCubic(progress);
                            window.scrollTo(0, startY + distance * eased);
                            if (progress < 1) {
                                requestAnimationFrame(step);
                            }
                        }
                    }["SmoothAnchors.useEffect.onClick.step"];
                    requestAnimationFrame(step);
                }
            }["SmoothAnchors.useEffect.onClick"];
            document.addEventListener("click", onClick);
            return ({
                "SmoothAnchors.useEffect": ()=>document.removeEventListener("click", onClick)
            })["SmoothAnchors.useEffect"];
        }
    }["SmoothAnchors.useEffect"], []);
    return null;
}
_s(SmoothAnchors, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothAnchors;
var _c;
__turbopack_context__.k.register(_c, "SmoothAnchors");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_1r_jcie._.js.map