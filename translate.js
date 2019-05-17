function googleTranslateElementInit() {
    var ele = document.createElement('DIV');
    ele.setAttribute('id', "google_translate_element");
    document.body.appendChild(ele);
    new GoogleTranslate.TranslateElement({
        pageLanguage: 'random'
    }, 'google_translate_element');
}

function GoogleTranslateInit() {
    if(window.google_translate_inited) return;
    window.google_translate_inited = true;
    var gtConstEvalStartTime = new Date();

    if(!window._mx_translate_api_type){
        try{
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", "https://translate.googleapis.com/", true);
            xhr.timeout = 1000;
            xhr.ontimeout = function(res){
                window._mx_translate_api_type = "bing";
            }
            xhr.onerror=function(){
                window._mx_translate_api_type = "google";
            }
            xhr.send();
        }catch(e){}
        window._mx_translate_api_type = "bing";
    }

    function d(b) {
        var a = document.getElementsByTagName("head")[0];
        a || (a = document.body.parentNode.appendChild(document.createElement("head")));
        a.appendChild(b)
    }

    function _loadJs(b) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.charset = "UTF-8";
        a.src = b;
        d(a)
    }

    function _loadCss(b) {
        var a = document.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.charset = "UTF-8";
        a.href = b;
        d(a)
    }

    function _isNS(b) {
        b = b.split(".");
        for (var a = window, c = 0; c < b.length; ++c)
            if (!(a = a[b[c]])) return !1;
        return !0
    }

    function _setupNS(b) {
        b = b.split(".");
        for (var a = window, c = 0; c < b.length; ++c) a.hasOwnProperty ? a.hasOwnProperty(b[c]) ? a = a[b[c]] : a = a[b[c]] = {} : a = a[b[c]] || (a[b[c]] = {});
        return a
    }
    window.addEventListener && "undefined" == typeof document.readyState && window.addEventListener("DOMContentLoaded", function () {
        document.readyState = "complete"
    }, !1);
    if (_isNS('GoogleTranslate.Element')) {
        return
    }(function () {
        var c = _setupNS('GoogleTranslate._const');
        c._cest = gtConstEvalStartTime;
        gtConstEvalStartTime = undefined;
        c._cl = 'zh-CN';
        c._cuc = 'googleTranslateElementInit'; // this line was add by yangzhichao, which should added by server(parsed from url param ?cb=googleTranslateElementInit)
        c._cac = '';
        c._cam = '';
        c._ctkk = eval('((function(){var a\x3d1654189060;var b\x3d227698104;return 424497+\x27.\x27+(a+b)})())');
        var h = 'translate.googleapis.com';
        var s = (true ? 'https' : window.location.protocol == 'https:' ? 'https' : 'http') + '://';
        //var b = s + h;
        var b = '/translate'
        c._translateApiHost = h;
        c._scheme = s;
        c._pbi = '' //'./translate_static/img/te_bk.gif';
        c._pci = '' //'./translate_static/img/te_ctrl3.gif';
        c._loadingGif = '' //'./translate_static/img/loading.gif';
        c._language_list_url = 'https://10.0.5.187/translate/zh-CN.js'; //h + '/translate_a/l';
        c._miniGooglePng = '' //'./translate_static/img/mini_google.png';
        c._css = '' //https://10.0.5.187/translate/translate_static/css/translateelement.css';
        c._puh = 'translate.google.com';
        //_loadCss(c._css);
        //_loadJs('./main_zh-CN.js');

        var a = document.createElement("style");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.charset = "UTF-8";
        a.innerText = '.goog-te-banner-frame {display: none; } .goog-te-gadget {display: none;}'
        d(a)
    })();




    (function () {
        var d = this;

        function e(a, v) {
            a = a.split(".");
            var b = d;
            a[0] in b || !b.execScript || b.execScript("var " + a[0]);
            for (var c; a.length && (c = a.shift());)
                a.length || void 0 === v ? b[c] && b[c] !== Object.prototype[c] ? b = b[c] : b = b[c] = {} : b[c] = v
        };
        var f = {
            0: "\u7ffb\u8bd1",
            1: "\u53d6\u6d88",
            2: "\u53d6\u6d88",
            3: function (a) {
                    return "Google \u5df2\u5c06\u6b64\u7f51\u9875\u81ea\u52a8\u7ffb\u8bd1\u6210\uff1a" + a
                },
                4: function (a) {
                    return "\u5df2\u7ffb\u8bd1\u4e3a\u4ee5\u4e0b\u8bed\u8a00\uff1a" + a
                },
                5: "\u9519\u8bef\uff1a\u670d\u52a1\u5668\u65e0\u6cd5\u5b8c\u6210\u60a8\u7684\u8bf7\u6c42\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
            6: "\u4e86\u89e3\u8be6\u60c5",
            7: function (a) {
                    return "\u7531 " + (a + "\u5f3a\u529b\u9a71\u52a8")
                },
                8: "\u7ffb\u8bd1",
            9: "\u6b63\u5728\u7ffb\u8bd1",
            10: function (a) {
                    return "\u7528 Google \u7ffb\u8bd1\u5c06\u6b64\u7f51\u9875\u7ffb\u8bd1\u6210" + (a + "\uff1f")
                },
                11: function (a) {
                    return "\u4f7f\u7528\u4ee5\u4e0b\u8bed\u8a00\u67e5\u770b\u6b64\u7f51\u9875\uff1a" + a
                },
                12: "\u663e\u793a\u539f\u6587",
            13: "\u6b64\u672c\u5730\u6587\u4ef6\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002",
            14: "\u6b64\u5b89\u5168\u7f51\u9875\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002",
            15: "\u6b64 Intranet \u7f51\u9875\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002",
            16: "\u9009\u62e9\u8bed\u8a00",
            17: function (a) {
                    return "\u5173\u95ed" + (a + "\u7ffb\u8bd1")
                },
                18: function (a) {
                    return "\u5173\u95ed\u4ee5\u4e0b\u8bed\u8a00\u7684\u81ea\u52a8\u6a2a\u5e45\u5f39\u51fa\u529f\u80fd\uff1a" + a
                },
                19: "\u59cb\u7ec8\u9690\u85cf",
            20: "\u539f\u6587\uff1a",
            21: "\u63d0\u4f9b\u66f4\u597d\u7684\u7ffb\u8bd1\u5efa\u8bae",
            22: "\u63d0\u4f9b\u5efa\u8bae",
            23: "\u5168\u90e8\u7ffb\u8bd1",
            24: "\u5168\u90e8\u6062\u590d",
            25: "\u5168\u90e8\u53d6\u6d88",
            26: "\u5c06\u8fd9\u4e9b\u5185\u5bb9\u7ffb\u8bd1\u6210\u6211\u7684\u8bed\u8a00",
            27: function (a) {
                    return "\u5c06\u6240\u6709\u5185\u5bb9\u7ffb\u8bd1\u6210" + a
                },
                28: "\u663e\u793a\u6e90\u8bed\u8a00",
            29: "\u9009\u9879",
            30: "\u5173\u95ed\u5bf9\u6b64\u7f51\u7ad9\u7684\u7ffb\u8bd1",
            31: null,
            32: "\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1",
            33: "\u70b9\u51fb\u4e0a\u65b9\u7684\u5b57\u8bcd\u5373\u53ef\u83b7\u53d6\u5176\u4ed6\u7ffb\u8bd1",
            34: "\u91c7\u7528",
            35: "\u6309\u4f4f Shift \u952e\u8fdb\u884c\u62d6\u52a8\u53ef\u91cd\u65b0\u6392\u5e8f",
            36: "\u70b9\u51fb\u53ef\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1",
            37: "\u6309\u4f4f Shift \u952e\u7684\u540c\u65f6\u70b9\u51fb\u5e76\u62d6\u52a8\u4e0a\u65b9\u7684\u5b57\u8bcd\u5373\u53ef\u91cd\u65b0\u6392\u5e8f\u3002",
            38: "\u611f\u8c22\u60a8\u4e3a Google \u7ffb\u8bd1\u63d0\u4f9b\u7ffb\u8bd1\u5efa\u8bae\u3002",
            39: "\u7ba1\u7406\u6b64\u7f51\u7ad9\u7684\u7ffb\u8bd1",
            40: "\u70b9\u51fb\u67d0\u4e2a\u5b57\u8bcd\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1\u6216\u53cc\u51fb\u67d0\u4e2a\u5b57\u8bcd\u76f4\u63a5\u8fdb\u884c\u4fee\u6539",
            41: "\u539f\u6587",
            42: "\u7ffb\u8bd1",
            43: "\u7ffb\u8bd1",
            44: "\u60a8\u6240\u505a\u7684\u66f4\u6b63\u5df2\u63d0\u4ea4\u3002",
            45: "\u9519\u8bef\uff1a\u4e0d\u652f\u6301\u7f51\u9875\u6240\u7528\u8bed\u8a00\u3002",
            46: "\u8bed\u8a00\u7ffb\u8bd1\u5fae\u4ef6"
        };
        var g = window.GoogleTranslate && GoogleTranslate._const;
        if (g) {
            var h;
            a: {
                for (var k = [], l = [""], m = 0; m < l.length; ++m) {
                    var n = l[m].split(","),
                        p = n[0];
                    if (p) {
                        var q = Number(n[1]);
                        if (!(!q || .1 < q || 0 > q)) {
                            var r = Number(n[2]),
                                t = new Date,
                                u = 1E4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate();
                            !r || r < u || k.push({
                                version: p,
                                ratio: q,
                                a: r
                            })
                        }
                    }
                }
                var w = 0,
                    x = window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),
                    y = Number(x && x[1]) || Math.random();
                for (m = 0; m < k.length; ++m) {
                    var z = k[m];
                    w += z.ratio;
                    if (1 <= w)
                        break;
                    if (y < w) {
                        h = z.version;
                        break a
                    }
                }
                h = "TE_20170911_00"
            }
            var A = "/element/%s/e/js/element/element_main.js".replace("%s", h);
            if ("0" == h) {
                var B = " element %s e js element element_main.js".split(" ");
                B[B.length - 1] = "main_zh-CN.js";
                A = B.join("/").replace("%s", h)
            }
            if (g._cjlc)
                g._cjlc(g._pas + g._pah + A);
            else {
                Main.call(window);
            }
            e("GoogleTranslate.m", f);
            e("GoogleTranslate.v", h)
        };
    }).call(window)

};




function Main() {
    var aa = '" style="background-image:url(',
        ba = "-disabled",
        ca = "-document.getElementById('",
        da = "/translate_a/t",
        ea = "/translate_suggestion?client=",
        fa = '</button></div></div></td></tr><tr id="',
        ha = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        ia = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
        ja = "Component already rendered",
        f = "DIV",
        ka = "Edge",
        la = "Google Website Translator",
        na = "IFRAME",
        oa = "INPUT",
        pa = "INTERNAL_SERVER_ERROR",
        qa = "OPTION",
        ra = "Opera",
        sa = "POST",
        ta = "SCRIPT",
        ua = "SPAN",
        va = "TEXTAREA",
        wa = "TITLE",
        xa = "Unable to set parent component",
        ya = "[goog.net.IframeIo] Unable to send, already active.",
        za = "about:blank",
        Aa = "absolute",
        Ba = "action",
        Ca = "activedescendant",
        Da = "activity-form-container",
        Ea = "alt-edited",
        Fa = "array",
        Ga = "auto",
        Ha = "backgroundImage",
        Ia = "backgroundPosition",
        Ja = "blur",
        Ka = "border-box",
        La = "button",
        Ma = "cancelled",
        Na = "change",
        Oa = "character",
        Pa = "checked",
        Qa = "chg_tgt_lang",
        Ra = "click",
        Sa = "clk_no_ap_site",
        Ta = "complete",
        Ua = "container",
        Va = "contextmenu",
        Wa = "dblclick",
        Xa = "direction",
        Ya = "finish",
        Za = "finishSourceLang",
        $a = "finishTargetLang",
        ab = "focus",
        bb = "focusin",
        cb = "focusout",
        n = "function",
        db = "goog-float-bottom",
        eb = "goog-float-top",
        fb = "goog-inline-block ",
        gb = "goog-menuheader",
        hb = "goog-menuseparator",
        ib = "goog-option",
        jb = "goog-option-selected",
        kb = "goog-te-menu-value",
        lb = "goog-te-menu2-item-selected",
        mb = "goog-te-spinner-animation-show",
        nb = "goog-te-spinner-pos-show",
        ob = "hidden",
        pb = "hide",
        qb = "horizontal",
        rb = "https://translate.google.com"
        //, sb = "https://www.google.com/images/cleardot.gif"
        ,
        sb = '' //"/translate/translate_static/img/cleardot.gif"
        //, tb = "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
        ,
        tb = '' //"/translate/translate_static/img/googlelogo_color_42x16dp.png"
        ,
        ub = "javascript:void(0)",
        vb = "keydown",
        wb = "keypress",
        xb = "load",
        yb = "mousedown",
        zb = "mousemove",
        Ab = "mouseout",
        Bb = "mouseover",
        Cb = "mouseup",
        Db = "move_offscreen",
        Eb = "none",
        Fb = "number",
        Gb = "object",
        Hb = "opacity 1s linear",
        Ib = "paddingLeft",
        Jb = "paddingRight",
        Kb = "position",
        Lb = "progressSection",
        Mb = "promptSourceLang",
        Nb = "promptTargetLang",
        Ob = "ready",
        Pb = "readystatechange",
        Qb = "rtl",
        Rb = "selected",
        Sb = "skiptranslate",
        Tb = "status-message",
        Ub = "string",
        Vb = "submitted",
        Wb = "targetLanguage",
        Xb = "textarea-placeholder-input",
        Yb = "toggle_display",
        Zb = "trans-target-empty",
        $b = "trans-target-highlight",
        ac = "transition",
        bc = "translate",
        cc = "vertical",
        dc = "visible",
        ec = "withCredentials";

    function makeEmptyFunc() {
        return function () {}
    }

    function setterFor(a) {
        return function (b) {
            this[a] = b
        }
    }

    function getterFor(a) {
        return function () {
            return this[a]
        }
    }

    function func_ValueOf(a) {
        return function () {
            return a
        }
    }
    var u, createObject = typeof Object.create == "function" ? Object.create : function (a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ic;
    if (typeof Object.setPrototypeOf == "function")
        ic = Object.setPrototypeOf;
    else {
        var jc;
        a: {
            var kc = {
                    Bh: !0
                },
                lc = {};
            try {
                lc.__proto__ = kc;
                jc = lc.Bh;
                break a
            } catch (a) {}
            jc = !1
        }
        ic = jc ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var mc = ic;

    function A_Inherit_B(a, b) {
        a.prototype = createObject(b.prototype);
        a.prototype.constructor = a;
        if (mc)
            mc(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.m = b.prototype
    }
    var oc = oc || {},
        _window = this;

    function isDefined(a) {
        return void 0 !== a
    }

    function isString(a) {
        return typeof a == "string"
    }

    function isNumber(a) {
        return typeof a == "number"
    }

    function emptyFunction() {}

    function qc(a) {
        a.Se = void 0;
        a.Y = function () {
            return a.Se ? a.Se : a.Se = new a
        }
    }

    function typeStringOf(a) {
        var b = typeof a;
        if (b == "object")
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || typeof a.length == "number" && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function";
            } else
                return "null";
        else if (b == "function" && "undefined" == typeof a.call)
            return "object";
        return b
    }

    function isArray(a) {
        return typeStringOf(a) == "array"
    }

    function isArray2(a) {
        var b = typeStringOf(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function isFunction(a) {
        return typeStringOf(a) == "function"
    }

    function isFunction2(a) {
        var b = typeof a;
        return b == "object" && null != a || b == "function"
    }

    function uc(a) {
        return a[vc] || (a[vc] = ++wc)
    }
    var vc = "closure_uid_" + (1E9 * Math.random() >>> 0),
        wc = 0;

    function xc(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function yc(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function C(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? C = xc : C = yc;
        return C.apply(null, arguments)
    }

    function zc(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var nowTime = Date.now || function () {
        return +new Date
    };

    function Bc(a, b) {
        a = a.split(".");
        var c = _window;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)
            !a.length && isDefined(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    }

    function D(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.m = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Ck = function (a, c, g) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
                d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };

    function Cc(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Cc);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    D(Cc, Error);
    Cc.prototype.name = "CustomError";
    var Dc, Ec = {
        bk: 1,
        Rj: 2,
        sk: 3,
        Uj: 4,
        dk: 5,
        ck: 6,
        jk: 7,
        Wj: 8,
        Xj: 9,
        Zj: 10,
        Yj: 11,
        gk: 12
    };

    function unescapeSpace(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    }

    function Gc(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }
    var trimString = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function Ic(a) {
        return a.replace(/^[\s\xa0]+/, "")
    }

    function Jc(a) {
        return a.replace(/[\s\xa0]+$/, "")
    }

    function encodeUrl(a) {
        return encodeURIComponent(String(a))
    }

    function decodeUrl(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function escapeHTML(a) {
        if (!Nc.test(a))
            return a; - 1 != a.indexOf("&") && (a = a.replace(Oc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Pc, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Qc, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Rc, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Sc, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Tc, "&#0;"));
        return a
    }
    var Oc = /&/g,
        Pc = /</g,
        Qc = />/g,
        Rc = /"/g,
        Sc = /'/g,
        Tc = /\x00/g,
        Nc = /[\x00&<>"']/;

    function unescapeHTML(a) {
        return -1 != a.indexOf("&") ? "document" in _window ? Vc(a) : Wc(a) : a
    }

    function Vc(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = _window.document.createElement("div");
        return a.replace(Xc, function (a, e) {
            var d = b[a];
            if (d)
                return d;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)),
                isNaN(e) || (d = String.fromCharCode(e)));
            d || (c.innerHTML = a + " ",
                d = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = d
        })
    }

    function Wc(a) {
        return a.replace(/&([^;]+);/g, function (a, c) {
            switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
                    isNaN(c)) ? a : String.fromCharCode(c)
            }
        })
    }
    var Xc = /&([^;\s<&]+);?/g;

    function Yc(a, b) {
        var c = 0;
        a = trimString(String(a)).split(".");
        b = trimString(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var g = a[e] || "",
                h = b[e] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length)
                    break;
                c = Zc(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Zc(0 == g[2].length, 0 == h[2].length) || Zc(g[2], h[2]);
                g = g[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }

    function Zc(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function $c(a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    }

    function ad(a) {
        var b = isString(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function bd(a) {
        return a[a.length - 1]
    }
    var cd = Array.prototype.indexOf ? function (a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (isString(a))
                return isString(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b)
                    return c;
            return -1
        },
        dd = Array.prototype.forEach ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = isString(a) ? a.split("") : a, g = 0; g < d; g++)
                g in e && b.call(c, e[g], g, a)
        },
        ed = Array.prototype.filter ? function (a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = [], g = 0, h = isString(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var l = h[k];
                    b.call(c, l, k, a) && (e[g++] = l)
                }
            return e
        },
        fd = Array.prototype.map ? function (a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), g = isString(a) ? a.split("") : a, h = 0; h < d; h++)
                h in g && (e[h] = b.call(c, g[h], h, a));
            return e
        },
        gd = Array.prototype.some ? function (a, b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = isString(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in e && b.call(c, e[g], g, a))
                    return !0;
            return !1
        },
        hd = Array.prototype.every ? function (a, b, c) {
            return Array.prototype.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = isString(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in e && !b.call(c, e[g], g, a))
                    return !1;
            return !0
        };

    function id(a, b) {
        a: {
            for (var c = a.length, d = isString(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : isString(a) ? a.charAt(b) : a[b]
    }

    function jd(a, b) {
        return 0 <= cd(a, b)
    }

    function kd(a, b) {
        b = cd(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function ld(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function md(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }

    function nd(a, b, c, d) {
        Array.prototype.splice.apply(a, od(arguments, 1))
    }

    function od(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var userAgent;
    a: {
        var qd = _window.navigator;
        if (qd) {
            var rd = qd.userAgent;
            if (rd) {
                userAgent = rd;
                break a
            }
        }
        userAgent = ""
    }

    function hasUserAgent(a) {
        return -1 != userAgent.indexOf(a)
    }

    function sd(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);)
            c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function td(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }

    function ud(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }

    function vd(a) {
        var b = [],
            c = 0,
            d;
        for (d in a)
            b[c++] = a[d];
        return b
    }

    function wd(a) {
        var b = [],
            c = 0,
            d;
        for (d in a)
            b[c++] = d;
        return b
    }

    function xd(a, b) {
        return null !== a && b in a
    }

    function yd() {
        var a = zd,
            b;
        for (b in a)
            return !1;
        return !0
    }

    function Ad(a, b, c) {
        if (null !== a && b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }

    function Bd(a) {
        var b = {},
            c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    var Cd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Dd(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var g = 0; g < Cd.length; g++)
                c = Cd[g],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function Ed(a) {
        var b = arguments.length;
        if (1 == b && isArray(arguments[0]))
            return Ed.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    };

    function isIEBrowser() {
        return hasUserAgent("Trident") || hasUserAgent("MSIE")
    }

    function isChromeBrowser() {
        return (hasUserAgent("Chrome") || hasUserAgent("CriOS")) && !hasUserAgent("Edge")
    }

    function browserVersion() {
        function a(a) {
            a = id(a, d);
            return c[a] || ""
        }
        var b = userAgent;
        if (isIEBrowser())
            return Id(b);
        b = sd(b);
        var c = {};
        dd(b, function (a) {
            c[a[0]] = a[1]
        });
        var d = zc(xd, c);
        return hasUserAgent("Opera") ? a(["Version", "Opera"]) : hasUserAgent("Edge") ? a(["Edge"]) : isChromeBrowser() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    }

    function Id(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])
            return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a),
                "7.0" == c[1])
                if (a && a[1])
                    switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                    } else
                    b = "7.0";
        else
            b = c[1];
        return b
    };

    function Jd() {
        return hasUserAgent("iPhone") && !hasUserAgent("iPod") && !hasUserAgent("iPad")
    }

    function Kd() {
        return Jd() || hasUserAgent("iPad") || hasUserAgent("iPod")
    };

    function Ld(a) {
        Ld[" "](a);
        return a
    }
    Ld[" "] = emptyFunction;

    function Md(a, b) {
        try {
            return Ld(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Nd(a, b) {
        var c = Od;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var F = hasUserAgent("Opera"),
        G = isIEBrowser(),
        Pd = hasUserAgent("Edge"),
        Qd = Pd || G,
        H = hasUserAgent("Gecko") && !(-1 != userAgent.toLowerCase().indexOf("webkit") && !hasUserAgent("Edge")) && !(hasUserAgent("Trident") || hasUserAgent("MSIE")) && !hasUserAgent("Edge"),
        J = -1 != userAgent.toLowerCase().indexOf("webkit") && !hasUserAgent("Edge"),
        Rd = J && hasUserAgent("Mobile"),
        Sd = hasUserAgent("Macintosh"),
        Td = hasUserAgent("Windows"),
        Ud = hasUserAgent("Android"),
        Vd = Jd(),
        Wd = hasUserAgent("iPad"),
        Xd = hasUserAgent("iPod"),
        Yd = Kd();

    function Zd() {
        var a = _window.document;
        return a ? a.documentMode : void 0
    }
    var $d;
    a: {
        var ae = "",
            be = function () {
                var a = userAgent;
                if (H)
                    return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Pd)
                    return /Edge\/([\d\.]+)/.exec(a);
                if (G)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (J)
                    return /WebKit\/(\S+)/.exec(a);
                if (F)
                    return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        be && (ae = be ? be[1] : "");
        if (G) {
            var ce = Zd();
            if (null != ce && ce > parseFloat(ae)) {
                $d = String(ce);
                break a
            }
        }
        $d = ae
    }
    var de = $d,
        Od = {};

    function K(a) {
        return Nd(a, function () {
            return 0 <= Yc(de, a)
        })
    }

    function ee(a) {
        return Number(fe) >= a
    }
    var ge;
    var he = _window.document;
    ge = he && G ? Zd() || ("CSS1Compat" == he.compatMode ? parseInt(de, 10) : 5) : void 0;
    var fe = ge;
    var ie = hasUserAgent("Firefox"),
        je = Jd() || hasUserAgent("iPod"),
        ke = hasUserAgent("iPad"),
        le = hasUserAgent("Android") && !(isChromeBrowser() || hasUserAgent("Firefox") || hasUserAgent("Opera") || hasUserAgent("Silk")),
        me = isChromeBrowser(),
        ne = hasUserAgent("Safari") && !(isChromeBrowser() || hasUserAgent("Coast") || hasUserAgent("Opera") || hasUserAgent("Edge") || hasUserAgent("Silk") || hasUserAgent("Android")) && !Kd();
    var oe = null,
        pe = null,
        qe = H || J && !ne || F || !ne && !G && typeof _window.atob == n;

    function re(a) {
        if (qe)
            return _window.atob(a);
        var b = "";
        se(a, function (a) {
            b += String.fromCharCode(a)
        });
        return b
    }

    function se(a, b) {
        function c(b) {
            for (; d < a.length;) {
                var c = a.charAt(d++),
                    e = pe[c];
                if (null != e)
                    return e;
                if (!/^[\s\xa0]*$/.test(c))
                    throw Error("Unknown base64 encoding at char: " + c);
            }
            return b
        }
        te();
        for (var d = 0;;) {
            var e = c(-1),
                g = c(0),
                h = c(64),
                k = c(64);
            if (64 === k && -1 === e)
                break;
            b(e << 2 | g >> 4);
            64 != h && (b(g << 4 & 240 | h >> 2),
                64 != k && b(h << 6 & 192 | k))
        }
    }

    function te() {
        if (!oe) {
            oe = {};
            pe = {};
            for (var a = 0; 65 > a; a++)
                oe[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
                pe[oe[a]] = a,
                62 <= a && (pe["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    };

    function ue() {}
    var ve = typeof Uint8Array == n;

    function we(a, b, c) {
        a.b = null;
        b || (b = []);
        a.l = void 0;
        a.f = -1;
        a.a = b;
        a: {
            if (a.a.length) {
                b = a.a.length - 1;
                var d = a.a[b];
                if (d && typeof d == "object" && !isArray(d) && !(ve && d instanceof Uint8Array)) {
                    a.g = b - a.f;
                    a.c = d;
                    break a
                }
            }
            a.g = Number.MAX_VALUE
        }
        a.h = {};
        if (c)
            for (b = 0; b < c.length; b++)
                d = c[b],
                d < a.g ? (d += a.f,
                    a.a[d] = a.a[d] || xe) : (ye(a),
                    a.c[d] = a.c[d] || xe)
    }
    var xe = [];

    function ye(a) {
        var b = a.g + a.f;
        a.a[b] || (a.c = a.a[b] = {})
    }

    function ze(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.a[b];
            return c === xe ? a.a[b] = [] : c
        }
        if (a.c)
            return c = a.c[b],
                c === xe ? a.c[b] = [] : c
    }

    function Ae(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.a[b];
            return c === xe ? a.a[b] = [] : c
        }
        c = a.c[b];
        return c === xe ? a.c[b] = [] : c
    }

    function Be(a, b, c) {
        b < a.g ? a.a[b + a.f] = c : (ye(a),
            a.c[b] = c)
    }

    function Ce(a, b, c) {
        a.b || (a.b = {});
        var d = c ? c.Gb() : c;
        a.b[b] = c;
        Be(a, b, d)
    }

    function De(a, b, c) {
        a.b || (a.b = {});
        if (!a.b[b]) {
            for (var d = Ae(a, b), e = [], g = 0; g < d.length; g++)
                e[g] = new c(d[g]);
            a.b[b] = e
        }
        (d = a.b[b]) || (d = a.b[b] = []);
        c = new c;
        a = Ae(a, b);
        d.push(c);
        a.push(c.Gb());
        return c
    }

    function Ee(a) {
        if (a.b)
            for (var b in a.b) {
                var c = a.b[b];
                if (isArray(c))
                    for (var d = 0; d < c.length; d++)
                        c[d] && c[d].Gb();
                else
                    c && c.Gb()
            }
    }
    ue.prototype.Gb = function () {
        Ee(this);
        return this.a
    };
    ue.prototype.toString = function () {
        Ee(this);
        return this.a.toString()
    };

    function Fe(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return isString(a) && a.match(/\S+/g) || []
    }

    function Ge(a, b) {
        return a.classList ? a.classList.contains(b) : jd(Fe(a), b)
    }

    function L(a, b) {
        a.classList ? a.classList.add(b) : Ge(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function He(a, b) {
        if (a.classList)
            dd(b, function (b) {
                L(a, b)
            });
        else {
            var c = {};
            dd(Fe(a), function (a) {
                c[a] = !0
            });
            dd(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }

    function Ie(a, b) {
        a.classList ? a.classList.remove(b) : Ge(a, b) && (a.className = ed(Fe(a), function (a) {
            return a != b
        }).join(" "))
    }

    function Je(a, b) {
        a.classList ? dd(b, function (b) {
            Ie(a, b)
        }) : a.className = ed(Fe(a), function (a) {
            return !jd(b, a)
        }).join(" ")
    };
    var Ke = !G || ee(9),
        Le = !H && !G || G && ee(9) || H && K("1.9.1"),
        Me = G && !K("9"),
        Ne = G || F || J,
        Oe = G && !ee(9);
    var Pe = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Qe() {
        this.a = Re
    }
    Qe.prototype.rb = !0;
    Qe.prototype.Ta = func_ValueOf("");
    Qe.prototype.toString = func_ValueOf("Const{}");

    function Se(a) {
        return a instanceof Qe && a.constructor === Qe && a.a === Re ? "" : "type_error:Const"
    }
    var Re = {};
    var Te = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

    function Ue() {
        this.a = "";
        this.b = Ve
    }
    Ue.prototype.rb = !0;
    Ue.prototype.Ta = getterFor("a");
    Ue.prototype.Pe = !0;
    Ue.prototype.Yb = func_ValueOf(1);

    function We(a) {
        if (a instanceof Ue && a.constructor === Ue && a.b === Ve)
            return a.a;
        typeStringOf(a);
        return "type_error:TrustedResourceUrl"
    }
    var Ve = {};

    function Xe() {
        this.a = "";
        this.b = Ye
    }
    Xe.prototype.rb = !0;
    Xe.prototype.Ta = getterFor("a");
    Xe.prototype.Pe = !0;
    Xe.prototype.Yb = func_ValueOf(1);

    function Ze(a) {
        if (a instanceof Xe && a.constructor === Xe && a.b === Ye)
            return a.a;
        typeStringOf(a);
        return "type_error:SafeUrl"
    }
    var $e = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function af(a) {
        if (a instanceof Xe)
            return a;
        a = a.rb ? a.Ta() : String(a);
        $e.test(a) || (a = "about:invalid#zClosurez");
        return bf(a)
    }
    var Ye = {};

    function bf(a) {
        var b = new Xe;
        b.a = a;
        return b
    }
    bf("about:blank");

    function cf() {
        this.a = "";
        this.b = df
    }
    cf.prototype.rb = !0;
    var df = {};
    cf.prototype.Ta = getterFor("a");

    function ef(a) {
        if (a instanceof cf && a.constructor === cf && a.b === df)
            return a.a;
        typeStringOf(a);
        return "type_error:SafeStyle"
    }

    function ff(a) {
        var b = new cf;
        b.a = a;
        return b
    }
    var gf = ff("");

    function hf(a) {
        if (a instanceof Xe)
            a = 'url("' + Ze(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        else if (a instanceof Qe)
            a = Se(a);
        else {
            a = String(a);
            var b = a.replace(jf, "$1").replace(kf, "url");
            if (b = lf.test(b)) {
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                b = b && c
            }
            a = b ? mf(a) : "zClosurez"
        }
        return a
    }
    var lf = /^[-,."'%_!# a-zA-Z0-9]+$/,
        kf = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        jf = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

    function mf(a) {
        return a.replace(kf, function (a, c, d, e) {
            var b = "";
            d = d.replace(/^(['"])(.*)\1$/, function (a, c, d) {
                b = c;
                return d
            });
            a = af(d).Ta();
            return c + b + a + b + e
        })
    };

    function nf() {
        this.a = "";
        this.b = of
    }
    nf.prototype.rb = !0;
    var of = {};
    nf.prototype.Ta = getterFor("a");

    function pf(a) {
        if (a instanceof nf && a.constructor === nf && a.b === of)
            return a.a;
        typeStringOf(a);
        return "type_error:SafeStyleSheet"
    }

    function qf(a) {
        var b = new nf;
        b.a = a;
        return b
    }
    qf("");

    function rf() {
        this.a = "";
        this.c = sf;
        this.b = null
    }
    rf.prototype.Pe = !0;
    rf.prototype.Yb = getterFor("b");
    rf.prototype.rb = !0;
    rf.prototype.Ta = getterFor("a");

    function tf(a) {
        if (a instanceof rf && a.constructor === rf && a.c === sf)
            return a.a;
        typeStringOf(a);
        return "type_error:SafeHtml"
    }
    var uf = /^[a-zA-Z0-9-]+$/,
        vf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        wf = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function xf(a, b) {
        var c = String(a);
        if (!uf.test(c))
            throw Error("Invalid tag name <" + c + ">.");
        if (c.toUpperCase() in wf)
            throw Error("Tag name <" + c + "> is not allowed for SafeHtml.");
        a = String(a);
        c = null;
        var d = "<" + a,
            e = "";
        if (b)
            for (p in b) {
                if (!uf.test(p))
                    throw Error('Invalid attribute name "' + p + '".');
                var g = b[p];
                if (null != g) {
                    var h = a;
                    var k = p;
                    var l = g;
                    if (l instanceof Qe)
                        l = Se(l);
                    else if ("style" == k.toLowerCase()) {
                        g = void 0;
                        h = l;
                        if (!isFunction2(h))
                            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
                        if (!(h instanceof cf)) {
                            l = "";
                            for (g in h) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(g))
                                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + g);
                                var m = h[g];
                                null != m && (m = isArray(m) ? fd(m, hf).join(" ") : hf(m),
                                    l += g + ":" + m + ";")
                            }
                            h = l ? ff(l) : gf
                        }
                        l = ef(h)
                    } else {
                        if (/^on/i.test(k))
                            throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
                        if (k.toLowerCase() in vf)
                            if (l instanceof Ue)
                                l = We(l);
                            else if (l instanceof Xe)
                            l = Ze(l);
                        else if (isString(l))
                            l = af(l).Ta();
                        else
                            throw Error('Attribute "' + k + '" on tag "' + h + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
                    }
                    l.rb && (l = l.Ta());
                    k = k + '="' + escapeHTML(String(l)) + '"';
                    e += " " + k
                }
            }
        var p = d + e;
        d = void 0;
        null != d ? isArray(d) || (d = [d]) : d = [];
        !0 === Pe[a.toLowerCase()] ? p += ">" : (c = yf(d),
            p += ">" + tf(c) + "</" + a + ">",
            c = c.Yb());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        return zf(p, c)
    }

    function yf(a) {
        function b(a) {
            if (isArray(a))
                dd(a, b);
            else {
                if (a instanceof rf)
                    var e = a;
                else
                    e = null,
                    a.Pe && (e = a.Yb()),
                    a = escapeHTML(a.rb ? a.Ta() : String(a)),
                    e = zf(a, e);
                d += tf(e);
                e = e.Yb();
                0 == c ? c = e : 0 != e && c != e && (c = null)
            }
        }
        var c = 0,
            d = "";
        dd(arguments, b);
        return zf(d, c)
    }
    var sf = {};

    function zf(a, b) {
        var c = new rf;
        c.a = a;
        c.b = b;
        return c
    }
    zf("<!DOCTYPE html>", 0);
    zf("", 0);
    var Af = zf("<br>", 0);

    function M(a, b) {
        this.x = isDefined(a) ? a : 0;
        this.y = isDefined(b) ? b : 0
    }

    function Bf(a) {
        return new M(a.x, a.y)
    }

    function Cf(a, b) {
        return new M(a.x - b.x, a.y - b.y)
    }
    M.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    M.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    M.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    M.prototype.translate = function (a, b) {
        a instanceof M ? (this.x += a.x,
            this.y += a.y) : (this.x += Number(a),
            isNumber(b) && (this.y += b));
        return this
    };

    function Df(a, b) {
        this.width = a;
        this.height = b
    }
    Df.prototype.aspectRatio = function () {
        return this.width / this.height
    };
    Df.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Df.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Df.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ef(a) {
        return a ? new Ff(N(a)) : Dc || (Dc = new Ff)
    }

    function Gf(a, b) {
        return isString(b) ? a.getElementById(b) : b
    }

    function Hf(a, b) {
        return (b || document).getElementsByTagName(String(a))
    }

    function If() {
        var a = document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : Jf(document, "*", "alt-edited", void 0)
    }

    function Kf(a, b) {
        var c = b || document;
        if (c.getElementsByClassName)
            a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector("" + (a ? "." + a : "")) : Jf(c, "*", a, b)[0] || null
        }
        return a || null
    }

    function Jf(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, g = 0, h; h = a[g]; g++)
                    b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (g = e = 0; h = a[g]; g++)
                b = h.className,
                typeof b.split == n && jd(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }

    function Lf(a, b) {
        td(b, function (b, d) {
            b && b.rb && (b = b.Ta());
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Mf.hasOwnProperty(d) ? a.setAttribute(Mf[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Mf = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Nf(a) {
        a = a.document;
        a = Of(a) ? a.documentElement : a.body;
        return new Df(a.clientWidth, a.clientHeight)
    }

    function Pf(a) {
        var b = Qf(a);
        a = a.parentWindow || a.defaultView;
        return G && K("10") && a.pageYOffset != b.scrollTop ? new M(b.scrollLeft, b.scrollTop) : new M(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Qf(a) {
        return a.scrollingElement ? a.scrollingElement : !J && Of(a) ? a.documentElement : a.body || a.documentElement
    }

    function Rf(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Sf(a, b, c) {
        return Tf(document, arguments)
    }

    function Tf(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!Ke && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', escapeHTML(d.name), '"');
            if (d.type) {
                c.push(' type="', escapeHTML(d.type), '"');
                var e = {};
                Dd(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (isString(d) ? c.className = d : isArray(d) ? c.className = d.join(" ") : Lf(c, d));
        2 < b.length && Uf(a, c, b, 2);
        return c
    }

    function Uf(a, b, c, d) {
        function e(c) {
            if (typeof c === "function") return; //camike
            c && b.appendChild(isString(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var g = c[d];
            !isArray2(g) || isFunction2(g) && 0 < g.nodeType ? e(g) : dd(Vf(g) ? md(g) : g, e)
        }
    }

    function Wf() {
        var a = xf("WBR"),
            b = document,
            c = b.createElement(f);
        G ? (a = yf(Af, a),
            c.innerHTML = tf(a),
            c.removeChild(c.firstChild)) : c.innerHTML = tf(a);
        if (1 == c.childNodes.length)
            c = c.removeChild(c.firstChild);
        else {
            for (b = b.createDocumentFragment(); c.firstChild;)
                b.appendChild(c.firstChild);
            c = b
        }
        return c
    }

    function Of(a) {
        return "CSS1Compat" == a.compatMode
    }

    function Xf(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }

    function Yf(a, b) {
        Uf(N(a), a, arguments, 1)
    }

    function Zf(a) {
        for (var b; b = a.firstChild;)
            a.removeChild(b)
    }

    function $f(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }

    function ag(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }

    function bg(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function cg(a) {
        return Le && void 0 != a.children ? a.children : ed(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    }

    function dg(a) {
        return isDefined(a.firstElementChild) ? a.firstElementChild : eg(a.firstChild, !0)
    }

    function eg(a, b) {
        for (; a && 1 != a.nodeType;)
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function fg(a) {
        return isFunction2(a) && 1 == a.nodeType
    }

    function gg(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;)
            b = b.parentNode;
        return b == a
    }

    function hg(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (G && !ee(9)) {
            if (9 == a.nodeType)
                return -1;
            if (9 == b.nodeType)
                return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
                d = 1 == b.nodeType;
            if (c && d)
                return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode,
                g = b.parentNode;
            return e == g ? ig(a, b) : !c && gg(e, b) ? -1 * jg(a, b) : !d && gg(g, a) ? jg(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
        }
        d = N(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(_window.Range.START_TO_END, a)
    }

    function jg(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (; b.parentNode != c;)
            b = b.parentNode;
        return ig(b, a)
    }

    function ig(a, b) {
        for (; b = b.previousSibling;)
            if (b == a)
                return -1;
        return 1
    }

    function kg(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], h = arguments[b]; h;)
                g.unshift(h),
                h = h.parentNode;
            d.push(g);
            e = Math.min(e, g.length)
        }
        g = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++)
                if (h != d[k][b])
                    return g;
            g = h
        }
        return g
    }

    function N(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function lg(a) {
        return a.contentDocument || a.contentWindow.document
    }

    function mg(a) {
        try {
            return a.contentWindow || (a.contentDocument ? Rf(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function ng(a, b) {
        if ("textContent" in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;)
                a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else
            Zf(a),
            a.appendChild(N(a).createTextNode(String(b)))
    }
    var og = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        pg = {
            IMG: " ",
            BR: "\n"
        };

    function qg(a) {
        if (G && !K("9")) {
            var b = a.getAttributeNode("tabindex");
            b = null != b && b.specified
        } else
            b = a.hasAttribute("tabindex");
        b && (a = a.tabIndex,
            b = isNumber(a) && 0 <= a && 32768 > a);
        return b
    }

    function rg(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1,
            a.removeAttribute("tabIndex"))
    }

    function sg(a) {
        if (Me && null !== a && "innerText" in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            tg(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Me || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function ug(a) {
        var b = [];
        tg(a, b, !1);
        return b.join("")
    }

    function tg(a, b, c) {
        if (!(a.nodeName in og))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in pg)
            b.push(pg[a.nodeName]);
        else
            for (a = a.firstChild; a;)
                tg(a, b, c),
                a = a.nextSibling
    }

    function Vf(a) {
        if (a && typeof a.length == "number") {
            if (isFunction2(a))
                return typeof a.item == n || typeof a.item == "string";
            if (isFunction(a))
                return typeof a.item == n
        }
        return !1
    }

    function Ff(a) {
            this.a = a || _window.document || document
        }
        // u = Ff.prototype;
    Ff.prototype.j = function (a) {
        return Gf(this.a, a)
    };
    Ff.prototype.D = function (a, b, c) {
        return Tf(this.a, arguments)
    };

    function vg(a, b) {
        return a.a.createElement(String(b))
    }

    function wg(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    }
    Ff.prototype.appendChild = function (a, b) {
        a.appendChild(b)
    };
    Ff.prototype.Rc = Zf;
    Ff.prototype.Yh = cg;
    Ff.prototype.Zf = dg;
    Ff.prototype.contains = gg;
    Ff.prototype.hb = ng;
    Ff.prototype.ag = sg;

    function xg(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        }
        //u = xg.prototype;
    xg.prototype.contains = function (a) {
        return this && a ? a instanceof xg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    xg.prototype.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    xg.prototype.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    xg.prototype.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    xg.prototype.translate = function (a, b) {
        a instanceof M ? (this.left += a.x,
            this.right += a.x,
            this.top += a.y,
            this.bottom += a.y) : (this.left += a,
            this.right += a,
            isNumber(b) && (this.top += b,
                this.bottom += b));
        return this
    };

    function yg(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        }
        // u = yg.prototype;
    yg.prototype.contains = function (a) {
        return a instanceof M ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    yg.prototype.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    yg.prototype.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    yg.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    yg.prototype.translate = function (a, b) {
        a instanceof M ? (this.left += a.x,
            this.top += a.y) : (this.left += a,
            isNumber(b) && (this.top += b));
        return this
    };

    function O(a, b, c) {
        if (isString(b))
            (b = zg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    g = zg(c, d);
                g && (c.style[g] = e)
            }
    }
    var Ag = {};

    function zg(a, b) {
        var c = Ag[b];
        if (!c) {
            var d = $c(b);
            c = d;
            void 0 === a.style[d] && (d = (J ? "Webkit" : H ? "Moz" : G ? "ms" : F ? "O" : null) + ad(d),
                void 0 !== a.style[d] && (c = d));
            Ag[b] = c
        }
        return c
    }

    function Bg(a, b) {
        var c = N(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Cg(a, b) {
        return Bg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Dg(a, b, c) {
        if (b instanceof M) {
            var d = b.x;
            b = b.y
        } else
            d = b,
            b = c;
        a.style.left = Eg(d);
        a.style.top = Eg(b)
    }

    function Fg(a) {
        a = a ? N(a) : document;
        return !G || ee(9) || Of(Ef(a).a) ? a.documentElement : a.body
    }

    function Gg(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        G && a.ownerDocument.body && (a = a.ownerDocument,
            b.left -= a.documentElement.clientLeft + a.body.clientLeft,
            b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Hg(a) {
        if (G && !ee(8))
            return a.offsetParent;
        var b = N(a),
            c = Cg(a, "position"),
            d = "fixed" == c || c == "absolute";
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
                c = Cg(a, "position"),
                d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == "absolute" || "relative" == c))
                return a;
        return null
    }

    function Ig(a) {
        for (var b = new xg(0, Infinity, Infinity, 0), c = Ef(a), d = c.a.body, e = c.a.documentElement, g = Qf(c.a); a = Hg(a);)
            if (!(G && 0 == a.clientWidth || J && 0 == a.clientHeight && a == d) && a != d && a != e && Cg(a, "overflow") != "visible") {
                var h = Jg(a),
                    k = new M(a.clientLeft, a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, g);
        c = Nf(wg(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }

    function Jg(a) {
        var b = N(a),
            c = new M(0, 0),
            d = Fg(b);
        if (a == d)
            return c;
        a = Gg(a);
        b = Pf(Ef(b).a);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Kg(a, b) {
        var c = new M(0, 0),
            d = Rf(N(a));
        if (!Md(d, "parent"))
            return c;
        do {
            if (d == b)
                var e = Jg(a);
            else
                e = Gg(a),
                e = new M(e.left, e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }

    function Eg(a) {
        typeof a == "number" && (a += "px");
        return a
    }

    function Lg(a) {
        var b = Mg;
        if (Cg(a, "display") != "none")
            return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = e;
        return a
    }

    function Mg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = J && !b && !c;
        return isDefined(b) && !d || !a.getBoundingClientRect ? new Df(b, c) : (a = Gg(a),
            new Df(a.right - a.left, a.bottom - a.top))
    }

    function P(a, b) {
        a.style.display = b ? "" : "none"
    }

    function Ng(a, b) {
        b = Ef(b);
        var c = b.a;
        if (G && c.createStyleSheet) {
            var d = c.createStyleSheet();
            Og(d, a)
        } else
            c = Jf(b.a, "HEAD", void 0, void 0)[0],
            c || (d = Jf(b.a, "BODY", void 0, void 0)[0],
                c = b.D("HEAD"),
                d.parentNode.insertBefore(c, d)),
            d = b.D("STYLE"),
            Og(d, a),
            b.appendChild(c, d)
    }

    function Og(a, b) {
        b = pf(b);
        G && isDefined(a.cssText) ? a.cssText = b : a.innerHTML = b
    }

    function Pg(a) {
        return "rtl" == Cg(a, "direction")
    }
    var Qg = H ? "MozUserSelect" : J || Pd ? "WebkitUserSelect" : null;

    function Rg(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (Qg) {
            if (b = b ? "none" : "",
                a.style && (a.style[Qg] = b),
                c) {
                a = 0;
                for (var d; d = c[a]; a++)
                    d.style && (d.style[Qg] = b)
            }
        } else if (G || F)
            if (b = b ? "on" : "",
                a.setAttribute("unselectable", b),
                c)
                for (a = 0; d = c[a]; a++)
                    d.setAttribute("unselectable", b)
    }

    function Sg(a) {
        return new Df(a.offsetWidth, a.offsetHeight)
    }

    function Tg(a, b) {
        var c = Of(Ef(N(a)).a);
        if (!G || K("10") || c && K("8"))
            Ug(a, b, "content-box");
        else {
            var d = a.style;
            c ? (d.pixelWidth = b.width,
                d.pixelHeight = b.height) : (c = Vg(a),
                a = Wg(a),
                d.pixelWidth = b.width + a.left + c.left + c.right + a.right,
                d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
        }
    }

    function Ug(a, b, c) {
        a = a.style;
        H ? a.MozBoxSizing = c : J ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    }

    function Xg(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var e = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = g;
        return +b
    }

    function Yg(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Xg(a, b, "left", "pixelLeft") : 0
    }

    function Vg(a) {
        if (G) {
            var b = Yg(a, "paddingLeft"),
                c = Yg(a, "paddingRight"),
                d = Yg(a, "paddingTop");
            a = Yg(a, "paddingBottom");
            return new xg(d, c, a, b)
        }
        b = Bg(a, "paddingLeft");
        c = Bg(a, "paddingRight");
        d = Bg(a, "paddingTop");
        a = Bg(a, "paddingBottom");
        return new xg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    }
    var Zg = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function $g(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == "none")
            return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Zg ? Zg[b] : Xg(a, b, "left", "pixelLeft")
    }

    function Wg(a) {
        if (G && !ee(9)) {
            var b = $g(a, "borderLeft"),
                c = $g(a, "borderRight"),
                d = $g(a, "borderTop");
            a = $g(a, "borderBottom");
            return new xg(d, c, a, b)
        }
        b = Bg(a, "borderLeftWidth");
        c = Bg(a, "borderRightWidth");
        d = Bg(a, "borderTopWidth");
        a = Bg(a, "borderBottomWidth");
        return new xg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
    var ah;
    Ed(["A", "AREA", "BUTTON", "HEAD", "INPUT", "LINK", "MENU", "META", "OPTGROUP", "OPTION", "PROGRESS", "STYLE", "SELECT", "SOURCE", "TEXTAREA", "TITLE", "TRACK"]);

    function bh(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }

    function ch(a, b, c) {
        isArray(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (ah || (ah = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }),
            c = ah,
            b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };

    function Q() {
        this.vb = this.vb;
        this.wa = this.wa
    }
    Q.prototype.vb = !1;
    Q.prototype.M = function () {
        this.vb || (this.vb = !0,
            this.F())
    };

    function dh(a, b) {
        a.vb ? isDefined(void 0) ? b.call(void 0) : b() : (a.wa || (a.wa = []),
            a.wa.push(isDefined(void 0) ? C(b, void 0) : b))
    }
    Q.prototype.F = function () {
        if (this.wa)
            for (; this.wa.length;)
                this.wa.shift()()
    };

    function eh(a) {
        a && typeof a.M == n && a.M()
    };
    var fh = !G || ee(9),
        gh = !G || ee(9),
        hh = G && !K("9");
    !J || K("528");
    H && K("1.9b") || G && K("8") || F && K("9.5") || J && K("528");
    H && !K("8") || G && K("9");
    var ih = function () {
        if (!_window.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
        _window.addEventListener("test", emptyFunction, b);
        _window.removeEventListener("test", emptyFunction, b);
        return a
    }();

    function jh(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.c = !1;
        this.Rg = !0
    }
    jh.prototype.stopPropagation = function () {
        this.c = !0
    };
    jh.prototype.b = function () {
        this.Rg = !1
    };

    function kh(a, b) {
        jh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.f = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.a = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? H && (Md(b, "nodeName") || (b = null)): c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
                this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
                this.screenX = a.screenX || 0,
                this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
                this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
                this.screenX = d.screenX || 0,
                this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.f = Sd ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = isString(a.pointerType) ? a.pointerType : lh[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.b()
        }
    }
    D(kh, jh);
    var mh = [1, 4, 2],
        lh = {
            2: "touch",
            3: "pen",
            4: "mouse"
        };

    function nh(a) {
        return fh ? 0 == a.a.button : a.type == "click" ? !0 : !!(a.a.button & mh[0])
    }
    kh.prototype.stopPropagation = function () {
        kh.m.stopPropagation.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    kh.prototype.b = function () {
        kh.m.b.call(this);
        var a = this.a;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
            hh)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    };
    var oh = "closure_listenable_" + (1E6 * Math.random() | 0);

    function ph(a) {
        return !(!a || !a[oh])
    }
    var qh = 0;

    function rh(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Hd = e;
        this.key = ++qh;
        this.qc = this.ed = !1
    }

    function sh(a) {
        a.qc = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Hd = null
    };

    function th(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    th.prototype.add = function (a, b, c, d, e) {
        var g = a.toString();
        a = this.a[g];
        a || (a = this.a[g] = [],
            this.b++);
        var h = uh(a, b, d, e); - 1 < h ? (b = a[h],
            c || (b.ed = !1)) : (b = new rh(b, this.src, g, !!d, e),
            b.ed = c,
            a.push(b));
        return b
    };
    th.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.a))
            return !1;
        var e = this.a[a];
        b = uh(e, b, c, d);
        return -1 < b ? (sh(e[b]),
            Array.prototype.splice.call(e, b, 1),
            0 == e.length && (delete this.a[a],
                this.b--), !0) : !1
    };

    function vh(a, b) {
        var c = b.type;
        if (!(c in a.a))
            return !1;
        var d = kd(a.a[c], b);
        d && (sh(b),
            0 == a.a[c].length && (delete a.a[c],
                a.b--));
        return d
    }

    function wh(a, b) {
        b = b && b.toString();
        var c = 0,
            d;
        for (d in a.a)
            if (!b || d == b) {
                for (var e = a.a[d], g = 0; g < e.length; g++)
                ++c,
                sh(e[g]);
                delete a.a[d];
                a.b--
            }
        return c
    }
    th.prototype.Fc = function (a, b, c, d) {
        a = this.a[a.toString()];
        var e = -1;
        a && (e = uh(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    th.prototype.hasListener = function (a, b) {
        var c = isDefined(a),
            d = c ? a.toString() : "",
            e = isDefined(b);
        return ud(this.a, function (a) {
            for (var g = 0; g < a.length; ++g)
                if (!(c && a[g].type != d || e && a[g].capture != b))
                    return !0;
            return !1
        })
    };

    function uh(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.qc && g.listener == b && g.capture == !!c && g.Hd == d)
                return e
        }
        return -1
    };
    var xh = "closure_lm_" + (1E6 * Math.random() | 0),
        yh = {},
        zh = 0;

    function S(a, b, c, d, e) {
        if (d && d.once)
            return Ah(a, b, c, d, e);
        if (isArray(b)) {
            for (var g = 0; g < b.length; g++)
                S(a, b[g], c, d, e);
            return null
        }
        c = Bh(c);
        return ph(a) ? a.w(b, c, isFunction2(d) ? !!d.capture : !!d, e) : Ch(a, b, c, !1, d, e)
    }

    function Ch(a, b, c, d, e, g) {
        if (!b)
            throw Error("Invalid event type");
        var h = isFunction2(e) ? !!e.capture : !!e,
            k = Dh(a);
        k || (a[xh] = k = new th(a));
        c = k.add(b, c, d, h, g);
        if (c.a)
            return c;
        d = Eh();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            ih || (e = h),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(Fh(b.toString()), d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        zh++;
        return c
    }

    function Eh() {
        var a = Gh,
            b = gh ? function (c) {
                return a.call(b.src, b.listener, c)
            } : function (c) {
                c = a.call(b.src, b.listener, c);
                if (!c)
                    return c
            };
        return b
    }

    function Ah(a, b, c, d, e) {
        if (isArray(b)) {
            for (var g = 0; g < b.length; g++)
                Ah(a, b[g], c, d, e);
            return null
        }
        c = Bh(c);
        return ph(a) ? a.Bb(b, c, isFunction2(d) ? !!d.capture : !!d, e) : Ch(a, b, c, !0, d, e)
    }

    function Hh(a, b, c, d, e) {
        if (isArray(b))
            for (var g = 0; g < b.length; g++)
                Hh(a, b[g], c, d, e);
        else
            d = isFunction2(d) ? !!d.capture : !!d,
            c = Bh(c),
            ph(a) ? a.ca(b, c, d, e) : a && (a = Dh(a)) && (b = a.Fc(b, c, d, e)) && Ih(b)
    }

    function Ih(a) {
        if (isNumber(a) || !a || a.qc)
            return !1;
        var b = a.src;
        if (ph(b))
            return vh(b.Oa, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Fh(c), d);
        zh--;
        (c = Dh(b)) ? (vh(c, a),
            0 == c.b && (c.src = null,
                b[xh] = null)) : sh(a);
        return !0
    }

    function Jh(a, b) {
        if (!a)
            return 0;
        if (ph(a))
            return a.Oa ? wh(a.Oa, b) : 0;
        a = Dh(a);
        if (!a)
            return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a)
            if (!b || d == b)
                for (var e = a.a[d].concat(), g = 0; g < e.length; ++g)
                    Ih(e[g]) && ++c;
        return c
    }

    function Fh(a) {
        return a in yh ? yh[a] : yh[a] = "on" + a
    }

    function Kh(a, b, c, d) {
        var e = !0;
        if (a = Dh(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(),
                    a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.qc && (g = Lh(g, d),
                        e = e && !1 !== g)
                }
        return e
    }

    function Lh(a, b) {
        var c = a.listener,
            d = a.Hd || a.src;
        a.ed && Ih(a);
        return c.call(d, b)
    }

    function Gh(a, b) {
        if (a.qc)
            return !0;
        if (!gh) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = _window, d = 0; d < b.length; d++)
                        if (c = c[b[d]],
                            null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
            d = b;
            b = new kh(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a
                        } catch (h) {
                            e = !0
                        }
                    if (e || void 0 == d.returnValue)
                        d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode)
                    d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.c && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var g = Kh(d[e], a, !0, b);
                    c = c && g
                }
                for (e = 0; !b.c && e < d.length; e++)
                    b.currentTarget = d[e],
                    g = Kh(d[e], a, !1, b),
                    c = c && g
            }
            return c
        }
        return Lh(a, new kh(b, this))
    }

    function Dh(a) {
        a = a[xh];
        return a instanceof th ? a : null
    }
    var Mh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Bh(a) {
        if (isFunction(a))
            return a;
        a[Mh] || (a[Mh] = function (b) {
            return a.handleEvent(b)
        });
        return a[Mh]
    };

    function Nh(a) {
        Q.call(this);
        this.b = a;
        this.a = {}
    }
    D(Nh, Q);
    var Oh = [];
    //u = Nh.prototype;
    Nh.prototype.w = function (a, b, c, d) {
        return Ph(this, a, b, c, d)
    };

    function Qh(a, b, c, d) {
        Ph(a, b, "click", c, !1, d)
    }

    function Ph(a, b, c, d, e, g) {
        isArray(c) || (c && (Oh[0] = c.toString()),
            c = Oh);
        for (var h = 0; h < c.length; h++) {
            var k = S(b, c[h], d || a.handleEvent, e || !1, g || a.b || a);
            if (!k)
                break;
            a.a[k.key] = k
        }
        return a
    }
    Nh.prototype.Bb = function (a, b, c, d) {
        return Rh(this, a, b, c, d)
    };

    function Rh(a, b, c, d, e, g) {
        if (isArray(c))
            for (var h = 0; h < c.length; h++)
                Rh(a, b, c[h], d, e, g);
        else {
            b = Ah(b, c, d || a.handleEvent, e, g || a.b || a);
            if (!b)
                return a;
            a.a[b.key] = b
        }
        return a
    }
    Nh.prototype.ca = function (a, b, c, d, e) {
        if (isArray(b))
            for (var g = 0; g < b.length; g++)
                this.ca(a, b[g], c, d, e);
        else
            c = c || this.handleEvent,
            d = isFunction2(d) ? !!d.capture : !!d,
            e = e || this.b || this,
            c = Bh(c),
            d = !!d,
            b = ph(a) ? a.Fc(b, c, d, e) : a ? (a = Dh(a)) ? a.Fc(b, c, d, e) : null : null,
            b && (Ih(b),
                delete this.a[b.key]);
        return this
    };

    function Sh(a) {
        td(a.a, function (a, c) {
            this.a.hasOwnProperty(c) && Ih(a)
        }, a);
        a.a = {}
    }
    Nh.prototype.F = function () {
        Nh.m.F.call(this);
        Sh(this)
    };
    Nh.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function Th() {
        Q.call(this);
        this.Oa = new th(this);
        this.Dh = this;
        this.jf = null
    }
    D(Th, Q);
    Th.prototype[oh] = !0;
    //u = Th.prototype;
    Th.prototype.nd = getterFor("jf");
    Th.prototype.sf = setterFor("jf");
    Th.prototype.addEventListener = function (a, b, c, d) {
        S(this, a, b, c, d)
    };
    Th.prototype.removeEventListener = function (a, b, c, d) {
        Hh(this, a, b, c, d)
    };
    Th.prototype.dispatchEvent = function (a) {
        var b = this.nd();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.nd())
                c.push(b),
                ++d
        }
        b = this.Dh;
        d = a.type || a;
        if (isString(a))
            a = new jh(a, b);
        else if (a instanceof jh)
            a.target = a.target || b;
        else {
            var e = a;
            a = new jh(d, b);
            Dd(a, e)
        }
        e = !0;
        if (c)
            for (var g = c.length - 1; !a.c && 0 <= g; g--) {
                var h = a.currentTarget = c[g];
                e = Uh(h, d, !0, a) && e
            }
        a.c || (h = a.currentTarget = b,
            e = Uh(h, d, !0, a) && e,
            a.c || (e = Uh(h, d, !1, a) && e));
        if (c)
            for (g = 0; !a.c && g < c.length; g++)
                h = a.currentTarget = c[g],
                e = Uh(h, d, !1, a) && e;
        return e
    };
    Th.prototype.F = function () {
        Th.m.F.call(this);
        this.Oa && wh(this.Oa, void 0);
        this.jf = null
    };
    Th.prototype.w = function (a, b, c, d) {
        return this.Oa.add(String(a), b, !1, c, d)
    };
    Th.prototype.Bb = function (a, b, c, d) {
        return this.Oa.add(String(a), b, !0, c, d)
    };
    Th.prototype.ca = function (a, b, c, d) {
        return this.Oa.remove(String(a), b, c, d)
    };

    function Uh(a, b, c, d) {
        b = a.Oa.a[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.qc && h.capture == c) {
                var k = h.listener,
                    l = h.Hd || h.src;
                h.ed && vh(a.Oa, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Rg
    }
    Th.prototype.Fc = function (a, b, c, d) {
        return this.Oa.Fc(String(a), b, c, d)
    };
    Th.prototype.hasListener = function (a, b) {
        return this.Oa.hasListener(isDefined(a) ? String(a) : void 0, b)
    };

    function Vh() {}
    qc(Vh);
    Vh.prototype.a = 0;

    function T(a) {
        Th.call(this);
        this.b = a || Ef();
        this.ia = Wh;
        this.ka = null;
        this.V = !1;
        this.A = null;
        this.I = void 0;
        this.G = this.s = this.B = this.pa = null;
        this.ib = !1
    }
    D(T, Th);
    T.prototype.ub = Vh.Y();
    var Wh = null;

    function Xh(a, b) {
        switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? ab : "blur";
        case 64:
            return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }

    function Yh(a) {
        return a.ka || (a.ka = ":" + (a.ub.a++).toString(36))
    }

    function Zh(a, b) {
            if (a.B && a.B.G) {
                var c = a.B.G,
                    d = a.ka;
                d in c && delete c[d];
                Ad(a.B.G, b, a)
            }
            a.ka = b
        }
        //u = T.prototype;
    T.prototype.j = getterFor("A");

    function $h(a, b) {
        return a.A ? Kf(b, a.A || a.b.a) : null
    }

    function U(a) {
        a.I || (a.I = new Nh(a));
        return a.I
    }

    function ai(a, b) {
        if (a == b)
            throw Error("Unable to set parent component");
        if (b && a.B && a.ka && bi(a.B, a.ka) && a.B != b)
            throw Error("Unable to set parent component");
        a.B = b;
        T.m.sf.call(a, b)
    }
    T.prototype.xb = getterFor("B");
    T.prototype.sf = function (a) {
        if (this.B && this.B != a)
            throw Error("Method not supported");
        T.m.sf.call(this, a)
    };
    T.prototype.D = function () {
        this.A = vg(this.b, f)
    };
    T.prototype.ga = function (a) {
        ci(this, a)
    };

    function ci(a, b, c) {
        if (a.V)
            throw Error(ja);
        a.A || a.D();
        b ? b.insertBefore(a.A, c || null) : a.b.a.body.appendChild(a.A);
        a.B && !a.B.V || a.P()
    }

    function di(a, b) {
        if (a.V)
            throw Error(ja);
        if (b && a.ze(b)) {
            a.ib = !0;
            var c = N(b);
            a.b && a.b.a == c || (a.b = Ef(b));
            a.T(b);
            a.P()
        } else
            throw Error("Invalid element to decorate");
    }
    T.prototype.ze = func_ValueOf(!0);
    T.prototype.T = setterFor("A");
    T.prototype.P = function () {
        this.V = !0;
        ei(this, function (a) {
            !a.V && a.j() && a.P()
        })
    };
    T.prototype.$ = function () {
        ei(this, function (a) {
            a.V && a.$()
        });
        this.I && Sh(this.I);
        this.V = !1
    };
    T.prototype.F = function () {
        this.V && this.$();
        this.I && (this.I.M(),
            delete this.I);
        ei(this, function (a) {
            a.M()
        });
        !this.ib && this.A && bg(this.A);
        this.B = this.pa = this.A = this.G = this.s = null;
        T.m.F.call(this)
    };

    function V(a, b) {
        return Yh(a) + "." + b
    }
    T.prototype.uc = function (a, b, c) {
        if (a.V && (c || !this.V))
            throw Error(ja);
        if (0 > b || b > fi(this))
            throw Error("Child component index out of bounds");
        this.G && this.s || (this.G = {},
            this.s = []);
        if (a.xb() == this) {
            var d = Yh(a);
            this.G[d] = a;
            kd(this.s, a)
        } else
            Ad(this.G, Yh(a), a);
        ai(a, this);
        nd(this.s, b, 0, a);
        a.V && this.V && a.xb() == this ? (c = this.td(),
            b = c.childNodes[b] || null,
            b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.A || this.D(),
            b = gi(this, b + 1),
            ci(a, this.td(), b ? b.A : null)) : this.V && !a.V && a.A && a.A.parentNode && 1 == a.A.parentNode.nodeType && a.P()
    };
    T.prototype.td = getterFor("A");

    function hi(a) {
        null == a.ia && (a.ia = Pg(a.V ? a.A : a.b.a.body));
        return a.ia
    }

    function fi(a) {
        return a.s ? a.s.length : 0
    }

    function bi(a, b) {
        a.G && b ? (a = a.G,
            b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    }

    function gi(a, b) {
        return a.s ? a.s[b] || null : null
    }

    function ei(a, b, c) {
        a.s && dd(a.s, b, c)
    }

    function ii(a, b) {
        return a.s && b ? cd(a.s, b) : -1
    }
    T.prototype.removeChild = function (a, b) {
        if (a) {
            var c = isString(a) ? a : Yh(a);
            a = bi(this, c);
            if (c && a) {
                var d = this.G;
                c in d && delete d[c];
                kd(this.s, a);
                b && (a.$(),
                    a.A && bg(a.A));
                ai(a, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    };
    T.prototype.Rc = function (a) {
        for (var b = []; this.s && 0 != this.s.length;)
            b.push(this.removeChild(gi(this, 0), a));
        return b
    };

    function ji() {}
    var ki;
    qc(ji);
    var li = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    //u = ji.prototype;
    ji.prototype.bc = makeEmptyFunc();
    ji.prototype.D = function (a) {
        return a.b.D(f, mi(this, a).join(" "), a.da())
    };
    ji.prototype.zb = function (a) {
        return a
    };

    function ni(a, b, c) {
        if (a = a.j ? a.j() : a) {
            var d = [b];
            G && !K("7") && (d = oi(Fe(a), b),
                d.push(b));
            (c ? He : Je)(a, d)
        }
    }
    ji.prototype.wd = func_ValueOf(!0);
    ji.prototype.Pa = function (a, b) {
        b.id && Zh(a, b.id);
        var c = this.zb(b);
        c && c.firstChild ? pi(a, c.firstChild.nextSibling ? md(c.childNodes) : c.firstChild) : a.Nb = null;
        var d = 0,
            e = this.ea(),
            g = this.ea(),
            h = !1,
            k = !1,
            l = !1,
            m = md(Fe(b));
        dd(m, function (a) {
            h || a != e ? k || a != g ? d |= this.pd(a) : k = !0 : (h = !0,
                g == e && (k = !0));
            1 == this.pd(a) && qg(c) && rg(c, !1)
        }, this);
        a.W = d;
        h || (m.push(e),
            g == e && (k = !0));
        k || m.push(g);
        (a = a.te) && m.push.apply(m, a);
        if (G && !K("7")) {
            var p = oi(m);
            0 < p.length && (m.push.apply(m, p),
                l = !0)
        }
        if (!h || !k || a || l)
            b.className = m.join(" ");
        return b
    };
    ji.prototype.cg = function (a) {
        hi(a) && this.Ee(a.j(), !0);
        a.isEnabled() && this.cc(a, a.N())
    };

    function qi(a, b, c) {
        if (a = c || a.bc())
            c = b.getAttribute("role") || null,
            a != c && bh(b, a)
    }

    function ri(a, b, c) {
        b.N() || ch(c, "hidden", !b.N());
        b.isEnabled() || a.Za(c, 1, !b.isEnabled());
        b.ba & 8 && a.Za(c, 8, !!(b.W & 8));
        b.ba & 16 && a.Za(c, 16, !!(b.W & 16));
        b.ba & 64 && a.Za(c, 64, !!(b.W & 64))
    }
    ji.prototype.xd = function (a, b) {
        Rg(a, !b, !G && !F)
    };
    ji.prototype.Ee = function (a, b) {
        ni(a, this.ea() + "-rtl", b)
    };
    ji.prototype.De = function (a) {
        var b;
        return a.ba & 32 && (b = a.j()) ? qg(b) : !1
    };
    ji.prototype.cc = function (a, b) {
        var c;
        if (a.ba & 32 && (c = a.j())) {
            if (!b && a.W & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.W & 32 && a.dg()
            }
            qg(c) != b && rg(c, b)
        }
    };
    ji.prototype.L = function (a, b) {
        P(a, b);
        a && ch(a, "hidden", !b)
    };
    ji.prototype.Kc = function (a, b, c) {
        var d = a.j();
        if (d) {
            var e = this.Ec(b);
            e && ni(a, e, c);
            this.Za(d, b, c)
        }
    };
    ji.prototype.Za = function (a, b, c) {
        ki || (ki = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        b = ki[b];
        var d = a.getAttribute("role") || null;
        d && (d = li[d] || b,
            b = b == "checked" || b == "selected" ? d : b);
        b && ch(a, b, c)
    };
    ji.prototype.Jc = function (a, b) {
        var c = this.zb(a);
        c && (Zf(c),
            b && (isString(b) ? ng(c, b) : (a = function (a) {
                    if (a) {
                        var b = N(c);
                        c.appendChild(isString(a) ? b.createTextNode(a) : a)
                    }
                },
                isArray(b) ? dd(b, a) : !isArray2(b) || "nodeType" in b ? a(b) : dd(md(b), a))))
    };
    ji.prototype.ea = func_ValueOf("goog-control");

    function mi(a, b) {
        var c = a.ea(),
            d = [c],
            e = a.ea();
        e != c && d.push(e);
        c = b.W;
        for (e = []; c;) {
            var g = c & -c;
            e.push(a.Ec(g));
            c &= ~g
        }
        d.push.apply(d, e);
        (a = b.te) && d.push.apply(d, a);
        G && !K("7") && d.push.apply(d, oi(d));
        return d
    }

    function oi(a, b) {
        var c = [];
        b && (a = ld(a, [b]));
        dd([], function (d) {
            !hd(d, zc(jd, a)) || b && !jd(d, b) || c.push(d.join("_"))
        });
        return c
    }
    ji.prototype.Ec = function (a) {
        this.a || si(this);
        return this.a[a]
    };
    ji.prototype.pd = function (a) {
        if (!this.c) {
            this.a || si(this);
            var b = this.a,
                c = {},
                d;
            for (d in b)
                c[b[d]] = d;
            this.c = c
        }
        a = parseInt(this.c[a], 10);
        return isNaN(a) ? 0 : a
    };

    function si(a) {
        var b = a.ea();
        b.replace(/\xa0|\s/g, " ");
        a.a = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };

    function ti() {}
    D(ti, ji);
    qc(ti);
    //u = ti.prototype;
    ti.prototype.bc = func_ValueOf("button");
    ti.prototype.Za = function (a, b, c) {
        switch (b) {
        case 8:
        case 16:
            ch(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            ti.m.Za.call(this, a, b, c)
        }
    };
    ti.prototype.D = function (a) {
        var b = ti.m.D.call(this, a),
            c = a.l;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.Ba()) && this.za(b, c);
        a.ba & 16 && this.Za(b, 16, !!(a.W & 16));
        return b
    };
    ti.prototype.Pa = function (a, b) {
        b = ti.m.Pa.call(this, a, b);
        var c = this.Ba(b);
        a.g = c;
        a.l = b.title;
        a.ba & 16 && this.Za(b, 16, !!(a.W & 16));
        return b
    };
    ti.prototype.Ba = emptyFunction;
    ti.prototype.za = emptyFunction;
    ti.prototype.ea = func_ValueOf("goog-button");

    function ui(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
            return !1;
        switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
            return !1;
        case 0:
            return !H;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
        }
    }

    function vi(a, b, c, d, e, g) {
        if (!(G || Pd || J && K("525")))
            return !0;
        if (Sd && e)
            return wi(a);
        if (e && !d)
            return !1;
        isNumber(b) && (b = xi(b));
        e = 17 == b || 18 == b || Sd && 91 == b;
        if ((!c || Sd) && e || Sd && 16 == b && (d || g))
            return !1;
        if ((J || Pd) && d && c)
            switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
            }
        if (G && d && b == a)
            return !1;
        switch (a) {
        case 13:
            return !0;
        case 27:
            return !(J || Pd)
        }
        return wi(a)
    }

    function wi(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (J || Pd) && 0 == a)
            return !0;
        switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
        }
    }

    function xi(a) {
        if (H)
            a = yi(a);
        else if (Sd && J)
            switch (a) {
            case 93:
                a = 91
            }
        return a
    }

    function yi(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    };

    function zi(a, b) {
        Th.call(this);
        a && Ai(this, a, b)
    }
    D(zi, Th);
    //u = zi.prototype;
    zi.prototype.A = null;
    zi.prototype.Md = null;
    zi.prototype.Te = null;
    zi.prototype.Nd = null;
    zi.prototype.Ka = -1;
    zi.prototype.Ab = -1;
    zi.prototype.he = !1;
    var Bi = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        Ci = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        Di = G || Pd || J && K("525"),
        Ei = Sd && H;
    //u = zi.prototype;
    zi.prototype.pi = function (a) {
        if (J || Pd)
            if (17 == this.Ka && !a.ctrlKey || 18 == this.Ka && !a.altKey || Sd && 91 == this.Ka && !a.metaKey)
                this.Ab = this.Ka = -1; - 1 == this.Ka && (a.ctrlKey && 17 != a.keyCode ? this.Ka = 17 : a.altKey && 18 != a.keyCode ? this.Ka = 18 : a.metaKey && 91 != a.keyCode && (this.Ka = 91));
        Di && !vi(a.keyCode, this.Ka, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Ab = xi(a.keyCode),
            Ei && (this.he = a.altKey))
    };
    zi.prototype.ri = function (a) {
        this.Ab = this.Ka = -1;
        this.he = a.altKey
    };
    zi.prototype.handleEvent = function (a) {
        var b = a.a,
            c = b.altKey;
        if (G && a.type == "keypress")
            var d = this.Ab;
        else if ((J || Pd) && a.type == "keypress")
            d = this.Ab;
        else if (F && !J)
            d = this.Ab;
        else {
            d = b.keyCode || this.Ab;
            var e = b.charCode || 0;
            Ei && (c = this.he);
            Sd && 63 == e && 224 == d && (d = 191)
        }
        (e = d = xi(d)) ? 63232 <= d && d in Bi ? e = Bi[d] : 25 == d && a.shiftKey && (e = 9): b.keyIdentifier && b.keyIdentifier in Ci && (e = Ci[b.keyIdentifier]);
        a = e == this.Ka;
        this.Ka = e;
        b = new Fi(e, 0, a, b);
        b.altKey = c;
        this.dispatchEvent(b)
    };
    zi.prototype.j = getterFor("A");

    function Ai(a, b, c) {
        a.Nd && Gi(a);
        a.A = b;
        a.Md = S(a.A, "keypress", a, c);
        a.Te = S(a.A, "keydown", a.pi, c, a);
        a.Nd = S(a.A, "keyup", a.ri, c, a)
    }

    function Gi(a) {
        a.Md && (Ih(a.Md),
            Ih(a.Te),
            Ih(a.Nd),
            a.Md = null,
            a.Te = null,
            a.Nd = null);
        a.A = null;
        a.Ka = -1;
        a.Ab = -1
    }
    zi.prototype.F = function () {
        zi.m.F.call(this);
        Gi(this)
    };

    function Fi(a, b, c, d) {
        kh.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c
    }
    D(Fi, kh);

    function Hi(a, b) {
        if (!a)
            throw Error("Invalid class name " + a);
        if (!isFunction(b))
            throw Error("Invalid decorator function " + b);
        Ki[a] = b
    }
    var Li = {},
        Ki = {};

    function W(a, b, c) {
        T.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = uc(b);
                if (d = Li[d])
                    break;
                b = b.m ? b.m.constructor : null
            }
            b = d ? isFunction(d.Y) ? d.Y() : new d : null
        }
        this.a = b;
        this.Nb = isDefined(a) ? a : null
    }
    D(W, T);
    //u = W.prototype;
    W.prototype.Nb = null;
    W.prototype.W = 0;
    W.prototype.ba = 39;
    W.prototype.jb = 255;
    W.prototype.Vc = 0;
    W.prototype.ha = !0;
    W.prototype.te = null;
    W.prototype.Le = !0;
    W.prototype.ad = !1;

    function Mi(a, b) {
        a.V && b != a.Le && Ni(a, b);
        a.Le = b
    }
    W.prototype.D = function () {
        var a = this.a.D(this);
        this.A = a;
        qi(this.a, a, this.Gc());
        this.ad || this.a.xd(a, !1);
        this.N() || this.a.L(a, !1)
    };
    W.prototype.Gc = func_ValueOf(null);
    W.prototype.td = function () {
        return this.a.zb(this.j())
    };
    W.prototype.ze = function (a) {
        return this.a.wd(a)
    };
    W.prototype.T = function (a) {
        this.A = a = this.a.Pa(this, a);
        qi(this.a, a, this.Gc());
        this.ad || this.a.xd(a, !1);
        this.ha = a.style.display != "none"
    };
    W.prototype.P = function () {
        W.m.P.call(this);
        ri(this.a, this, this.A);
        this.a.cg(this);
        if (this.ba & -2 && (this.Le && Ni(this, !0),
            this.ba & 32)) {
            var a = this.j();
            if (a) {
                var b = this.f || (this.f = new zi);
                Ai(b, a);
                U(this).w(b, "key", this.Ia).w(a, "focus", this.$h).w(a, "blur", this.dg)
            }
        }
    };

    function Ni(a, b) {
        var c = U(a),
            d = a.j();
        b ? (c.w(d, "mouseover", a.Fe).w(d, "mousedown", a.Mc).w(d, "mouseup", a.fc).w(d, "mouseout", a.Me),
            a.Nc != z && c.w(d, "contextmenu", a.Nc),
            G && (K(9) || c.w(d, "dblclick", a.hg),
                a.h || (a.h = new Oi(a),
                    dh(a, zc(eh, a.h))))) : (c.ca(d, "mouseover", a.Fe).ca(d, "mousedown", a.Mc).ca(d, "mouseup", a.fc).ca(d, "mouseout", a.Me),
            a.Nc != z && c.ca(d, "contextmenu", a.Nc),
            G && (K(9) || c.ca(d, "dblclick", a.hg),
                eh(a.h),
                a.h = null))
    }
    W.prototype.$ = function () {
        W.m.$.call(this);
        this.f && Gi(this.f);
        this.N() && this.isEnabled() && this.a.cc(this, !1)
    };
    W.prototype.F = function () {
        W.m.F.call(this);
        this.f && (this.f.M(),
            delete this.f);
        delete this.a;
        this.h = this.te = this.Nb = null
    };
    W.prototype.da = getterFor("Nb");
    W.prototype.Ob = function (a) {
        this.a.Jc(this.j(), a);
        this.Nb = a
    };

    function pi(a, b) {
        a.Nb = b
    }
    W.prototype.gb = function () {
        var a = this.da();
        if (!a)
            return "";
        a = isString(a) ? a : isArray(a) ? fd(a, ug).join("") : sg(a);
        return Gc(a)
    };
    W.prototype.Vg = function (a) {
        this.Ob(a)
    };
    W.prototype.N = getterFor("ha");
    W.prototype.L = function (a, b) {
        return b || this.ha != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.j()) && this.a.L(b, a),
            this.isEnabled() && this.a.cc(this, a),
            this.ha = a, !0) : !1
    };
    W.prototype.isEnabled = function () {
        return !(this.W & 1)
    };
    W.prototype.oa = function (a) {
        var b = this.xb();
        b && typeof b.isEnabled == n && !b.isEnabled() || !Pi(this, 1, !a) || (a || (Qi(this, !1),
                Ri(this, !1)),
            this.N() && this.a.cc(this, a),
            Si(this, 1, !a, !0))
    };

    function Ri(a, b) {
        Pi(a, 2, b) && Si(a, 2, b)
    }
    W.prototype.hc = function () {
        return !!(this.W & 4)
    };

    function Qi(a, b) {
        Pi(a, 4, b) && Si(a, 4, b)
    }

    function Ti(a, b) {
        Pi(a, 64, b) && Si(a, 64, b)
    }

    function Si(a, b, c, d) {
        d || 1 != b ? a.ba & b && c != !!(a.W & b) && (a.a.Kc(a, b, c),
            a.W = c ? a.W | b : a.W & ~b) : a.oa(!c)
    }
    W.prototype.ta = function (a, b) {
        if (this.V && this.W & a && !b)
            throw Error(ja);
        !b && this.W & a && Si(this, a, !1);
        this.ba = b ? this.ba | a : this.ba & ~a
    };

    function Ui(a, b) {
        return !!(a.jb & b) && !!(a.ba & b)
    }

    function Pi(a, b, c) {
        return !!(a.ba & b) && !!(a.W & b) != c && (!(a.Vc & b) || a.dispatchEvent(Xh(b, c))) && !a.vb
    }
    W.prototype.Fe = function (a) {
        (!a.relatedTarget || !gg(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Ui(this, 2) && Ri(this, !0)
    };
    W.prototype.Me = function (a) {
        a.relatedTarget && gg(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (Ui(this, 4) && Qi(this, !1),
            Ui(this, 2) && Ri(this, !1))
    };
    W.prototype.Nc = emptyFunction;
    W.prototype.Mc = function (a) {
        this.isEnabled() && (Ui(this, 2) && Ri(this, !0), !nh(a) || J && Sd && a.ctrlKey || (Ui(this, 4) && Qi(this, !0),
            this.a && this.a.De(this) && this.j().focus()));
        this.ad || !nh(a) || J && Sd && a.ctrlKey || a.b()
    };
    W.prototype.fc = function (a) {
        this.isEnabled() && (Ui(this, 2) && Ri(this, !0),
            this.hc() && this.oc(a) && Ui(this, 4) && Qi(this, !1))
    };
    W.prototype.hg = function (a) {
        this.isEnabled() && this.oc(a)
    };
    W.prototype.oc = function (a) {
        if (Ui(this, 16)) {
            var b = !(this.W & 16);
            Pi(this, 16, b) && Si(this, 16, b)
        }
        Ui(this, 8) && Pi(this, 8, !0) && Si(this, 8, !0);
        Ui(this, 64) && Ti(this, !(this.W & 64));
        b = new jh(Ba, this);
        a && (b.altKey = a.altKey,
            b.ctrlKey = a.ctrlKey,
            b.metaKey = a.metaKey,
            b.shiftKey = a.shiftKey,
            b.f = a.f);
        return this.dispatchEvent(b)
    };
    W.prototype.$h = function () {
        Ui(this, 32) && Pi(this, 32, !0) && Si(this, 32, !0)
    };
    W.prototype.dg = function () {
        Ui(this, 4) && Qi(this, !1);
        Ui(this, 32) && Pi(this, 32, !1) && Si(this, 32, !1)
    };
    W.prototype.Ia = function (a) {
        return this.N() && this.isEnabled() && this.Lc(a) ? (a.b(),
            a.stopPropagation(), !0) : !1
    };
    W.prototype.Lc = function (a) {
        return 13 == a.keyCode && this.oc(a)
    };
    if (!isFunction(W))
        throw Error("Invalid component class " + W);
    if (!isFunction(ji))
        throw Error("Invalid renderer class " + ji);
    var Vi = uc(W);
    Li[Vi] = ji;
    Hi("goog-control", function () {
        return new W(null)
    });

    function Oi(a) {
        Q.call(this);
        this.b = a;
        this.a = !1;
        this.c = new Nh(this);
        dh(this, zc(eh, this.c));
        a = this.b.A;
        this.c.w(a, "mousedown", this.g).w(a, "mouseup", this.h).w(a, "click", this.f)
    }
    D(Oi, Q);
    var Wi = !G || ee(9);
    Oi.prototype.g = function () {
        this.a = !1
    };
    Oi.prototype.h = function () {
        this.a = !0
    };

    function Xi(a, b) {
        if (!Wi)
            return a.button = 0,
                a.type = b,
                a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    }
    Oi.prototype.f = function (a) {
        if (this.a)
            this.a = !1;
        else {
            var b = a.a,
                c = b.button,
                d = b.type,
                e = Xi(b, "mousedown");
            this.b.Mc(new kh(e, a.currentTarget));
            e = Xi(b, "mouseup");
            this.b.fc(new kh(e, a.currentTarget));
            Wi || (b.button = c,
                b.type = d)
        }
    };
    Oi.prototype.F = function () {
        this.b = null;
        Oi.m.F.call(this)
    };

    function Yi() {}
    D(Yi, ti);
    qc(Yi);
    //u = Yi.prototype;
    Yi.prototype.bc = makeEmptyFunc();
    Yi.prototype.D = function (a) {
        Mi(a, !1);
        a.jb &= -256;
        a.ta(32, !1);
        return a.b.D("BUTTON", {
            "class": mi(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.l || "",
            value: a.Ba() || ""
        }, a.gb() || "")
    };
    Yi.prototype.wd = function (a) {
        return "BUTTON" == a.tagName || a.tagName == "INPUT" && (a.type == "button" || "submit" == a.type || "reset" == a.type)
    };
    Yi.prototype.Pa = function (a, b) {
        Mi(a, !1);
        a.jb &= -256;
        a.ta(32, !1);
        if (b.disabled) {
            var c = this.Ec(1);
            L(b, c)
        }
        return Yi.m.Pa.call(this, a, b)
    };
    Yi.prototype.cg = function (a) {
        U(a).w(a.j(), "click", a.oc)
    };
    Yi.prototype.xd = emptyFunction;
    Yi.prototype.Ee = emptyFunction;
    Yi.prototype.De = function (a) {
        return a.isEnabled()
    };
    Yi.prototype.cc = emptyFunction;
    Yi.prototype.Kc = function (a, b, c) {
        Yi.m.Kc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    };
    Yi.prototype.Ba = function (a) {
        return a.value
    };
    Yi.prototype.za = function (a, b) {
        a && (a.value = b)
    };
    Yi.prototype.Za = emptyFunction;

    function Zi(a, b, c) {
        W.call(this, a, b || Yi.Y(), c)
    }
    D(Zi, W);
    //u = Zi.prototype;
    Zi.prototype.Ba = getterFor("g");
    Zi.prototype.za = function (a) {
        this.g = a;
        this.a.za(this.j(), a)
    };
    Zi.prototype.F = function () {
        Zi.m.F.call(this);
        delete this.g;
        delete this.l
    };
    Zi.prototype.P = function () {
        Zi.m.P.call(this);
        if (this.ba & 32) {
            var a = this.j();
            a && U(this).w(a, "keyup", this.Lc)
        }
    };
    Zi.prototype.Lc = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.oc(a) : 32 == a.keyCode
    };
    Hi("goog-button", function () {
        return new Zi(null)
    });

    function $i() {}
    D($i, ti);
    qc($i);
    //u = $i.prototype;
    $i.prototype.D = function (a) {
        var b = mi(this, a);
        b = a.b.D(f, "goog-inline-block " + b.join(" "), aj(this, a.da(), a.b));
        a = a.l;
        b && (a ? b.title = a : b.removeAttribute("title"));
        return b
    };
    $i.prototype.bc = func_ValueOf("button");
    $i.prototype.zb = function (a) {
        return a && a.firstChild && a.firstChild.firstChild
    };

    function aj(a, b, c) {
        return c.D(f, "goog-inline-block " + (a.ea() + "-outer-box"), c.D(f, "goog-inline-block " + (a.ea() + "-inner-box"), b))
    }
    $i.prototype.wd = function (a) {
        return a.tagName == f
    };
    $i.prototype.Pa = function (a, b) {
        bj(b, !0);
        bj(b, !1);
        a: {
            var c = a.b.Zf(b);
            var d = this.ea() + "-outer-box";
            if (c && Ge(c, d) && (c = a.b.Zf(c),
                d = this.ea() + "-inner-box",
                c && Ge(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(aj(this, b.childNodes, a.b));
        He(b, ["goog-inline-block", this.ea()]);
        return $i.m.Pa.call(this, a, b)
    };
    $i.prototype.ea = func_ValueOf("goog-custom-button");

    function bj(a, b) {
        if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
                d = b ? c.nextSibling : c.previousSibling;
                if (3 == c.nodeType) {
                    var e = c.nodeValue;
                    if ("" == trimString(e))
                        a.removeChild(c);
                    else {
                        c.nodeValue = b ? Ic(e) : Jc(e);
                        break
                    }
                } else
                    break;
                c = d
            }
    };

    function cj(a, b, c) {
        Zi.call(this, a, b || $i.Y(), c);
        this.ta(16, !0)
    }
    D(cj, Zi);
    Hi("goog-toggle-button", function () {
        return new cj(null)
    });
    var dj = "StopIteration" in _window ? _window.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function ej() {}
    ej.prototype.next = function () {
        throw dj;
    };
    ej.prototype.Na = function () {
        return this
    };

    function fj(a) {
        if (a instanceof ej)
            return a;
        if (typeof a.Na == "function")
            return a.Na(!1);
        if (isArray2(a)) {
            var b = 0,
                c = new ej;
            c.next = function () {
                for (;;) {
                    if (b >= a.length)
                        throw dj;
                    if (b in a)
                        return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function gj(a, b, c) {
        a = fj(a);
        try {
            for (; b.call(c, a.next(), void 0, a);)
            ;
        } catch (d) {
            if (d !== dj)
                throw d;
        }
    };

    function hj(a, b) {
            this.b = {};
            this.a = [];
            this.f = this.c = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2)
                    throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2)
                    this.set(arguments[d], arguments[d + 1])
            } else if (a) {
                a instanceof hj ? (c = a.Sa(),
                    d = a.Ca()) : (c = wd(a),
                    d = vd(a));
                for (var e = 0; e < c.length; e++)
                    this.set(c[e], d[e])
            }
        }
        //u = hj.prototype;
    hj.prototype.Ca = function () {
        ij(this);
        for (var a = [], b = 0; b < this.a.length; b++)
            a.push(this.b[this.a[b]]);
        return a
    };
    hj.prototype.Sa = function () {
        ij(this);
        return this.a.concat()
    };

    function jj(a, b) {
        return kj(a.b, b)
    }

    function lj(a) {
        a.b = {};
        a.a.length = 0;
        a.c = 0;
        a.f = 0
    }
    hj.prototype.remove = function (a) {
        return kj(this.b, a) ? (delete this.b[a],
            this.c--,
            this.f++,
            this.a.length > 2 * this.c && ij(this), !0) : !1
    };

    function ij(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                kj(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;)
                d = a.a[b],
                kj(e, d) || (a.a[c++] = d,
                    e[d] = 1),
                b++;
            a.a.length = c
        }
    }
    hj.prototype.get = function (a, b) {
        return kj(this.b, a) ? this.b[a] : b
    };
    hj.prototype.set = function (a, b) {
        kj(this.b, a) || (this.c++,
            this.a.push(a),
            this.f++);
        this.b[a] = b
    };
    hj.prototype.forEach = function (a, b) {
        for (var c = this.Sa(), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    hj.prototype.Na = function (a) {
        ij(this);
        var b = 0,
            c = this.f,
            d = this,
            e = new ej;
        e.next = function () {
            if (c != d.f)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length)
                throw dj;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };

    function kj(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function mj(a) {
        if (a.Ca && typeof a.Ca == "function")
            return a.Ca();
        if (isString(a))
            return a.split("");
        if (isArray2(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return vd(a)
    }

    function nj(a, b, c) {
        if (a.forEach && typeof a.forEach == "function")
            a.forEach(b, c);
        else if (isArray2(a) || isString(a))
            dd(a, b, c);
        else {
            if (a.Sa && typeof a.Sa == "function")
                var d = a.Sa();
            else if (a.Ca && typeof a.Ca == "function")
                d = void 0;
            else if (isArray2(a) || isString(a)) {
                d = [];
                for (var e = a.length, g = 0; g < e; g++)
                    d.push(g)
            } else
                d = wd(a);
            e = mj(a);
            g = e.length;
            for (var h = 0; h < g; h++)
                b.call(c, e[h], d && d[h], a)
        }
    };
    var oj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function pj(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var g = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    g = a[c];
                b(g, e ? decodeUrl(e) : "")
            }
        }
    };

    function qj(a, b) {
        this.f = this.s = this.c = "";
        this.l = null;
        this.g = this.h = "";
        this.b = !1;
        if (a instanceof qj) {
            this.b = isDefined(b) ? b : a.b;
            rj(this, a.c);
            this.s = a.s;
            this.f = a.f;
            sj(this, a.l);
            this.h = a.h;
            b = a.a;
            var c = new tj;
            c.c = b.c;
            b.a && (c.a = new hj(b.a),
                c.b = b.b);
            uj(this, c);
            this.g = a.g
        } else
            a && (c = String(a).match(oj)) ? (this.b = !!b,
                rj(this, c[1] || "", !0),
                this.s = vj(c[2] || ""),
                this.f = vj(c[3] || "", !0),
                sj(this, c[4]),
                this.h = vj(c[5] || "", !0),
                uj(this, c[6] || "", !0),
                this.g = vj(c[7] || "")) : (this.b = !!b,
                this.a = new tj(null, 0, this.b))
    }
    qj.prototype.toString = function () {
        var a = [],
            b = this.c;
        b && a.push(wj(b, xj, !0), ":");
        var c = this.f;
        if (c || "file" == b)
            a.push("//"), (b = this.s) && a.push(wj(b, xj, !0), "@"),
            a.push(encodeUrl(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.l,
            null != c && a.push(":", String(c));
        if (c = this.h)
            this.f && "/" != c.charAt(0) && a.push("/"),
            a.push(wj(c, "/" == c.charAt(0) ? yj : zj, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", wj(c, Aj));
        return a.join("")
    };

    function rj(a, b, c) {
        a.c = c ? vj(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }

    function sj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.l = b
        } else
            a.l = null
    }

    function uj(a, b, c) {
        b instanceof tj ? (a.a = b,
            Bj(a.a, a.b)) : (c || (b = wj(b, Cj)),
            a.a = new tj(b, 0, a.b))
    }

    function vj(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function wj(a, b, c) {
        return isString(a) ? (a = encodeURI(a).replace(b, Dj),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            a) : null
    }

    function Dj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var xj = /[#\/\?@]/g,
        zj = /[\#\?:]/g,
        yj = /[\#\?]/g,
        Cj = /[\#\?@]/g,
        Aj = /#/g;

    function tj(a, b, c) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!c
    }

    function Ej(a) {
            a.a || (a.a = new hj,
                a.b = 0,
                a.c && pj(a.c, function (b, c) {
                    a.add(decodeUrl(b), c)
                }))
        }
        //u = tj.prototype;
    tj.prototype.add = function (a, b) {
        Ej(this);
        this.c = null;
        a = Fj(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = this.b + 1;
        return this
    };
    tj.prototype.remove = function (a) {
        Ej(this);
        a = Fj(this, a);
        return jj(this.a, a) ? (this.c = null,
            this.b = this.b - this.a.get(a).length,
            this.a.remove(a)) : !1
    };

    function Gj(a, b) {
        Ej(a);
        b = Fj(a, b);
        return jj(a.a, b)
    }
    tj.prototype.forEach = function (a, b) {
        Ej(this);
        this.a.forEach(function (c, d) {
            dd(c, function (c) {
                a.call(b, c, d, this)
            }, this)
        }, this)
    };
    tj.prototype.Sa = function () {
        Ej(this);
        for (var a = this.a.Ca(), b = this.a.Sa(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++)
                c.push(b[d]);
        return c
    };
    tj.prototype.Ca = function (a) {
        Ej(this);
        var b = [];
        if (isString(a))
            Gj(this, a) && (b = ld(b, this.a.get(Fj(this, a))));
        else {
            a = this.a.Ca();
            for (var c = 0; c < a.length; c++)
                b = ld(b, a[c])
        }
        return b
    };
    tj.prototype.set = function (a, b) {
        Ej(this);
        this.c = null;
        a = Fj(this, a);
        Gj(this, a) && (this.b = this.b - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = this.b + 1;
        return this
    };
    tj.prototype.get = function (a, b) {
        a = a ? this.Ca(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };

    function Hj(a, b, c) {
        a.remove(b);
        0 < c.length && (a.c = null,
            a.a.set(Fj(a, b), md(c)),
            a.b = a.b + c.length)
    }
    tj.prototype.toString = function () {
        if (this.c)
            return this.c;
        if (!this.a)
            return "";
        for (var a = [], b = this.a.Sa(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeUrl(d);
            d = this.Ca(d);
            for (var g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + encodeUrl(d[g]));
                a.push(h)
            }
        }
        return this.c = a.join("&")
    };

    function Fj(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b
    }

    function Bj(a, b) {
        b && !a.f && (Ej(a),
            a.c = null,
            a.a.forEach(function (a, b) {
                var c = b.toLowerCase();
                b != c && (this.remove(b),
                    Hj(this, c, a))
            }, a));
        a.f = b
    }
    tj.prototype.$f = function (a) {
        for (var b = 0; b < arguments.length; b++)
            nj(arguments[b], function (a, b) {
                this.add(b, a)
            }, this)
    };
    var Ij = {},
        Jj = {},
        Kj = {},
        Lj = {},
        Mj = {};

    function Nj() {
        throw Error("Do not instantiate directly");
    }
    Nj.prototype.lb = null;
    Nj.prototype.da = getterFor("a");
    Nj.prototype.toString = getterFor("a");

    function Oj() {
        Nj.call(this)
    }
    D(Oj, Nj);
    Oj.prototype.Ea = Ij;

    function Pj() {
        Nj.call(this)
    }
    D(Pj, Nj);
    Pj.prototype.Ea = {};
    Pj.prototype.lb = 1;

    function Qj() {
        Nj.call(this)
    }
    D(Qj, Nj);
    Qj.prototype.Ea = Jj;
    Qj.prototype.lb = 1;

    function Rj() {
        Nj.call(this)
    }
    D(Rj, Nj);
    Rj.prototype.Ea = Kj;
    Rj.prototype.lb = 1;

    function Sj() {
        Nj.call(this)
    }
    D(Sj, Nj);
    Sj.prototype.Ea = {};
    Sj.prototype.lb = 1;

    function Tj() {
        Nj.call(this)
    }
    D(Tj, Nj);
    Tj.prototype.Ea = {};
    Tj.prototype.lb = 1;

    function Uj() {
        Nj.call(this)
    }
    D(Uj, Nj);
    Uj.prototype.Ea = Lj;
    Uj.prototype.lb = 1;

    function Vj(a, b) {
        b = a(b || Wj, void 0, void 0);
        a = vg(Ef(), f);
        b = Xj(b);
        a.innerHTML = b;
        1 == a.childNodes.length && (b = a.firstChild,
            1 == b.nodeType && (a = b));
        return a
    }

    function Xj(a) {
        if (!isFunction2(a))
            return String(a);
        if (a instanceof Nj) {
            if (a.Ea === Ij)
                return a.da();
            if (a.Ea === Mj)
                return escapeHTML(a.da())
        }
        return "zSoyz"
    }
    var Wj = {};
    G && K(8);

    function Yj(a) {
        if (null != a)
            switch (a.lb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }

    function Zj(a) {
        return null != a && a.Ea === Ij ? a : a instanceof rf ? ak(tf(a), a.Yb()) : ak(escapeHTML(String(String(a))), Yj(a))
    }

    function bk(a) {
        function b(a) {
            this.a = a
        }
        b.prototype = a.prototype;
        return function (a) {
            return new b(String(a))
        }
    }
    var ak = function (a) {
        function b(a) {
            this.a = a
        }
        b.prototype = a.prototype;
        return function (a, d) {
            a = new b(String(a));
            void 0 !== d && (a.lb = d);
            return a
        }
    }(Oj);
    bk(Pj);
    bk(Qj);
    bk(Rj);
    bk(Sj);
    bk(Tj);
    var ck = bk(Uj);
    (function (a) {
        function b(a) {
            this.a = a
        }
        b.prototype = a.prototype;
        return function (a, d) {
            a = String(a);
            if (!a)
                return "";
            a = new b(a);
            void 0 !== d && (a.lb = d);
            return a
        }
    })(Oj);

    function dk(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function ek(a) {
        return null != a && a.Ea === Ij ? String(String(a.da()).replace(fk, "").replace(gk, "&lt;")).replace(hk, ik) : escapeHTML(String(a))
    }

    function jk(a) {
        null != a && a.Ea === Lj ? a = dk(a.da()) : null == a ? a = "" : a instanceof cf ? a = dk(ef(a)) : a instanceof nf ? a = dk(pf(a)) : (a = String(a),
            a = kk.test(a) ? a : "zSoyz");
        return a
    }

    function X(a) {
        return null != a && a.Ea === Mj ? "zSoyz" : a
    }
    var lk = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function ik(a) {
        return lk[a]
    }
    var mk = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };

    function nk(a) {
        return mk[a]
    }
    var ok = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function pk(a) {
        return ok[a]
    }
    var hk = /[\x00\x22\x27\x3c\x3e]/g,
        qk = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        rk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        kk = /^(?!-*(?:expression|(?:moz-)?binding))(?!\s+)(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|\s+)*$/i,
        sk = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        fk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        gk = /</g;

    function tk(a, b, c) {
        this.g = c;
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null
    }
    tk.prototype.get = function () {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else
            a = this.c();
        return a
    };

    function uk(a, b) {
        a.f(b);
        a.b < a.g && (a.b++,
            b.next = a.a,
            a.a = b)
    };

    function vk(a) {
        _window.setTimeout(function () {
            throw a;
        }, 0)
    }
    var wk;

    function xk() {
        var a = _window.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !hasUserAgent("Presto") && (a = function () {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = C(function (a) {
                if (("*" == d || a.origin == d) && a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !isIEBrowser()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function () {
                if (isDefined(c.next)) {
                    c = c.next;
                    var a = c.Of;
                    c.Of = null;
                    a()
                }
            };
            return function (a) {
                d.next = {
                    Of: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function (a) {
            _window.setTimeout(a, 0)
        }
    };

    function yk() {
        this.b = this.a = null
    }
    var Ak = new tk(function () {
        return new zk
    }, function (a) {
        a.reset()
    }, 100);
    yk.prototype.add = function (a, b) {
        var c = Ak.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    };
    yk.prototype.remove = function () {
        var a = null;
        this.a && (a = this.a,
            this.a = this.a.next,
            this.a || (this.b = null),
            a.next = null);
        return a
    };

    function zk() {
        this.next = this.b = this.a = null
    }
    zk.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    zk.prototype.reset = function () {
        this.next = this.b = this.a = null
    };

    function Bk(a, b) {
        Ck || Dk();
        Ek || (Ck(),
            Ek = !0);
        Fk.add(a, b)
    }
    var Ck;

    function Dk() {
        if (-1 != String(_window.Promise).indexOf("[native code]")) {
            var a = _window.Promise.resolve(void 0);
            Ck = function () {
                a.then(Gk)
            }
        } else
            Ck = function () {
                var a = Gk;
                !isFunction(_window.setImmediate) || _window.Window && _window.Window.prototype && !hasUserAgent("Edge") && _window.Window.prototype.setImmediate == _window.setImmediate ? (wk || (wk = xk()),
                    wk(a)) : _window.setImmediate(a)
            }
    }
    var Ek = !1,
        Fk = new yk;

    function Gk() {
        for (var a; a = Fk.remove();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                vk(b)
            }
            uk(Ak, a)
        }
        Ek = !1
    };

    function Hk(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }

    function Ik(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function Jk(a, b) {
        this.a = 0;
        this.l = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != emptyFunction)
            try {
                var c = this;
                a.call(b, function (a) {
                    Kk(c, 2, a)
                }, function (a) {
                    Kk(c, 3, a)
                })
            } catch (d) {
                Kk(this, 3, d)
            }
    }

    function Lk() {
        this.next = this.c = this.b = this.f = this.a = null;
        this.g = !1
    }
    Lk.prototype.reset = function () {
        this.c = this.b = this.f = this.a = null;
        this.g = !1
    };
    var Mk = new tk(function () {
        return new Lk
    }, function (a) {
        a.reset()
    }, 100);

    function Nk(a, b, c) {
        var d = Mk.get();
        d.f = a;
        d.b = b;
        d.c = c;
        return d
    }

    function Ok(a) {
        if (a instanceof Jk)
            return a;
        var b = new Jk(emptyFunction);
        Kk(b, 2, a);
        return b
    }

    function Pk() {
        var a = Qk[5];
        return new Jk(function (b, c) {
            c(a)
        })
    }
    Jk.prototype.then = function (a, b, c) {
        return Rk(this, isFunction(a) ? a : null, isFunction(b) ? b : null, c)
    };
    Hk(Jk);
    Jk.prototype.cancel = function (a) {
        0 == this.a && Bk(function () {
            var b = new Sk(a);
            Tk(this, b)
        }, this)
    };

    function Tk(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, g = null, h = c.b; h && (h.g || (d++,
                        h.a == a && (e = h), !(e && 1 < d))); h = h.next)
                        e || (g = h);
                    e && (0 == c.a && 1 == d ? Tk(c, b) : (g ? (d = g,
                            d.next == c.f && (c.f = d),
                            d.next = d.next.next) : Uk(c),
                        Vk(c, e, 3, b)))
                }
                a.c = null
            } else
                Kk(a, 3, b)
    }

    function Wk(a, b) {
        a.b || 2 != a.a && 3 != a.a || Xk(a);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }

    function Rk(a, b, c, d) {
        var e = Nk(null, null, null);
        e.a = new Jk(function (a, h) {
            e.f = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (m) {
                    h(m)
                }
            } : a;
            e.b = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    !isDefined(e) && b instanceof Sk ? h(b) : a(e)
                } catch (m) {
                    h(m)
                }
            } : h
        });
        e.a.c = a;
        Wk(a, e);
        return e.a
    }
    Jk.prototype.o = function (a) {
        this.a = 0;
        Kk(this, 2, a)
    };
    Jk.prototype.B = function (a) {
        this.a = 0;
        Kk(this, 3, a)
    };

    function Kk(a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3,
                c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            a: {
                var d = c,
                    e = a.o,
                    g = a.B;
                if (d instanceof Jk) {
                    Wk(d, Nk(e || emptyFunction, g || null, a));
                    var h = !0
                } else if (Ik(d))
                    d.then(e, g, a),
                    h = !0;
                else {
                    if (isFunction2(d))
                        try {
                            var k = d.then;
                            if (isFunction(k)) {
                                Yk(d, k, e, g, a);
                                h = !0;
                                break a
                            }
                        } catch (l) {
                            g.call(a, l);
                            h = !0;
                            break a
                        }
                    h = !1
                }
            }
            h || (a.l = c,
                a.a = b,
                a.c = null,
                Xk(a),
                3 != b || c instanceof Sk || Zk(a, c))
        }
    }

    function Yk(a, b, c, d, e) {
        function g(a) {
            k || (k = !0,
                d.call(e, a))
        }

        function h(a) {
            k || (k = !0,
                c.call(e, a))
        }
        var k = !1;
        try {
            b.call(a, h, g)
        } catch (l) {
            g(l)
        }
    }

    function Xk(a) {
        a.h || (a.h = !0,
            Bk(a.s, a))
    }

    function Uk(a) {
        var b = null;
        a.b && (b = a.b,
            a.b = b.next,
            b.next = null);
        a.b || (a.f = null);
        return b
    }
    Jk.prototype.s = function () {
        for (var a; a = Uk(this);)
            Vk(this, a, this.a, this.l);
        this.h = !1
    };

    function Vk(a, b, c, d) {
        if (3 == c && b.b && !b.g)
            for (; a && a.g; a = a.c)
                a.g = !1;
        if (b.a)
            b.a.c = null,
            $k(b, c, d);
        else
            try {
                b.g ? b.f.call(b.c) : $k(b, c, d)
            } catch (e) {
                al.call(null, e)
            }
        uk(Mk, b)
    }

    function $k(a, b, c) {
        2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
    }

    function Zk(a, b) {
        a.g = !0;
        Bk(function () {
            a.g && al.call(null, b)
        })
    }
    var al = vk;

    function Sk(a) {
        Cc.call(this, a)
    }
    D(Sk, Cc);
    Sk.prototype.name = "cancel";

    function bl(a, b, c) {
        if (isFunction(a))
            c && (a = C(a, c));
        else if (a && typeof a.handleEvent == "function")
            a = C(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : _window.setTimeout(a, b || 0)
    }

    function cl(a) {
        _window.clearTimeout(a)
    };

    function dl(a, b, c) {
        Q.call(this);
        this.b = a;
        this.f = b || 0;
        this.c = c;
        this.a = C(this.Xh, this)
    }
    D(dl, Q);
    // u = dl.prototype;
    dl.prototype.ka = 0;
    dl.prototype.F = function () {
        dl.m.F.call(this);
        this.stop();
        delete this.b;
        delete this.c
    };
    dl.prototype.start = function (a) {
        this.stop();
        this.ka = bl(this.a, isDefined(a) ? a : this.f)
    };
    dl.prototype.stop = function () {
        this.hc() && cl(this.ka);
        this.ka = 0
    };
    dl.prototype.hc = function () {
        return 0 != this.ka
    };
    dl.prototype.Xh = function () {
        this.ka = 0;
        this.b && this.b.call(this.c)
    };
    var el = function () {
        if (Td) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(userAgent)) ? a[1] : "0"
        }
        return Sd ? (a = /10[_.][0-9_.]+/, (a = a.exec(userAgent)) ? a[0].replace(/_/g, ".") : "10") : Ud ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(userAgent)) ? a[1] : "") : Vd || Wd || Xd ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(userAgent)) ? a[1].replace(/_/g, ".") : "") : ""
    }();

    function fl(a) {
        return (a = a.exec(userAgent)) ? a[1] : ""
    }
    var gl = function () {
        if (ie)
            return fl(/Firefox\/([0-9.]+)/);
        if (G || Pd || F)
            return de;
        if (me)
            return Kd() ? fl(/CriOS\/([0-9.]+)/) : fl(/Chrome\/([0-9.]+)/);
        if (ne && !Kd())
            return fl(/Version\/([0-9.]+)/);
        if (je || ke) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(userAgent);
            if (a)
                return a[1] + "." + a[2]
        } else if (le)
            return (a = fl(/Android\s+([0-9.]+)/)) ? a : fl(/Version\/([0-9.]+)/);
        return ""
    }();

    function hl(a) {
        return 0 <= Yc(gl, a)
    };

    function il(a, b, c, d, e, g, h, k, l) {
        var m = jl(c);
        var p = Jg(a);
        var t = Lg(a);
        p = new yg(p.x, p.y, t.width, t.height);
        if (t = Ig(a)) {
            var w = new yg(t.left, t.top, t.right - t.left, t.bottom - t.top);
            t = Math.max(p.left, w.left);
            var I = Math.min(p.left + p.width, w.left + w.width);
            if (t <= I) {
                var R = Math.max(p.top, w.top);
                w = Math.min(p.top + p.height, w.top + w.height);
                R <= w && (p.left = t,
                    p.top = R,
                    p.width = I - t,
                    p.height = w - R)
            }
        }
        t = Ef(a);
        R = Ef(c);
        t.a != R.a && (I = t.a.body,
            R = Kg(I, wg(R)),
            R = Cf(R, Jg(I)), !G || ee(9) || Of(t.a) || (R = Cf(R, Pf(t.a))),
            p.left += R.x,
            p.top += R.y);
        a = kl(a, b);
        b = p.left;
        a & 4 ? b += p.width : a & 2 && (b += p.width / 2);
        b = new M(b, p.top + (a & 1 ? p.height : 0));
        b = Cf(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x,
            b.y += (a & 1 ? -1 : 1) * e.y);
        if (h)
            if (l)
                var ma = l;
            else if (ma = Ig(c))
            ma.top -= m.y,
            ma.right -= m.x,
            ma.bottom -= m.y,
            ma.left -= m.x;
        return ll(b, c, d, g, ma, h, k)
    }

    function jl(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Cg(a, "position")) {
                var c = Jg(a);
                if (!b) {
                    b = Pg(a);
                    var d;
                    if (d = b) {
                        d = ne && hl(10);
                        var e;
                        if (e = Yd)
                            e = 0 <= Yc(el, 10);
                        d = H || d || e
                    }
                    b = d ? -a.scrollLeft : !b || Qd && K("8") || Cg(a, "overflowX") == "visible" ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = Cf(c, new M(b, a.scrollTop))
                }
            }
        }
        return c || new M
    }

    function ll(a, b, c, d, e, g, h) {
        a = Bf(a);
        var k = kl(b, c);
        c = Lg(b);
        h = h ? new Df(h.width, h.height) : new Df(c.width, c.height);
        a = Bf(a);
        h = new Df(h.width, h.height);
        var l = 0;
        if (d || 0 != k)
            k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left),
            k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (g) {
            if (e) {
                d = a;
                k = h;
                l = 0;
                65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
                132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5);
                d.x < e.left && g & 1 && (d.x = e.left,
                    l |= 1);
                if (g & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left,
                        l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left),
                        k.width = Math.max(k.width, 0),
                        l |= 4)
                }
                d.x + k.width > e.right && g & 1 && (d.x = Math.max(e.right - k.width, e.left),
                    l |= 1);
                g & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && g & 4 && (d.y = e.top,
                    l |= 2);
                g & 32 && (m = d.y,
                    d.y < e.top && (d.y = e.top,
                        l |= 8),
                    d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top),
                        k.height = Math.max(k.height, 0),
                        l |= 8));
                d.y + k.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - k.height, e.top),
                    l |= 2);
                g & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                e = l
            } else
                e = 256;
            l = e
        }
        g = new yg(0, 0, 0, 0);
        g.left = a.x;
        g.top = a.y;
        g.width = h.width;
        g.height = h.height;
        e = l;
        if (e & 496)
            return e;
        Dg(b, new M(g.left, g.top));
        h = new Df(g.width, g.height);
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h,
            a = Of(Ef(N(b)).a), !G || K("10") || a && K("8") ? Ug(b, c, "border-box") : (h = b.style,
                a ? (a = Vg(b),
                    b = Wg(b),
                    h.pixelWidth = c.width - b.left - a.left - a.right - b.right,
                    h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width,
                    h.pixelHeight = c.height)));
        return e
    }

    function kl(a, b) {
        return (b & 8 && Pg(a) ? b ^ 4 : b) & -9
    };

    function ml() {}
    ml.prototype.b = makeEmptyFunc();

    function nl() {}
    nl.prototype.a = null;

    function ol(a) {
        var b;
        (b = a.a) || (b = {},
            pl(a) && (b[0] = !0,
                b[1] = !0),
            b = a.a = b);
        return b
    };
    var ql;

    function rl() {}
    D(rl, nl);


    function html_decode(str) 
    { 
        var s = ""; 
        if (str.length == 0) return ""; 
        s = str.replace(/&amp;/g, "&"); 
        s = s.replace(/&lt;/g, "<"); 
        s = s.replace(/&gt;/g, ">"); 
        s = s.replace(/&nbsp;/g, " "); 
        s = s.replace(/&#39;/g, "\'"); 
        s = s.replace(/&quot;/g, "\""); 
        s = s.replace(/<br\/>/g, "\n"); 
        return s; 
    } 
    class MicrosoftXMLHttpRequest {
        constructor(){
            this.xhr = new XMLHttpRequest;
            this.microsoft_url = "https://www.bing.com/translator/api/translate?ref=edge&from=&to=";
            this.lang_list = [
                "ar",        //阿拉伯语
                "et",        //爱沙尼亚语
                "mww",       //白苗文
                "bg",        //保加利亚语
                "is",        //冰岛语
                "ol",        //波兰语
                "bs-Latn",   //波斯尼亚语
                "fa",        //波斯语
                "ko",        //朝鲜语
                "da",        //丹麦语
                "de",        //德语
                "ru",        //俄语
                "fr",        //法语
                "zh-Hant",   //繁体中文
                "fil",       //菲律宾语
                "fj",        //斐济
                "fi",        //芬兰语
                "ht",        //海地克里奥尔语
                "nl",        //荷兰语
                "ca",        //加泰隆语
                "zh-Hans",   //简体中文
                "cs",        //捷克语
                "otq",       //克雷塔罗奥托米语
                "tlh",       //克林贡语
                "tlh-Qaak",  //克林贡语 (pIqaD)
                "hr",        //克罗地亚语
                "lv",        //拉脱维亚语
                "lt",        //立陶宛语
                "ro",        //罗马尼亚语
                "mg",        //马尔加什语
                "mt",        //马耳他语
                "ms",        //马来语
                "bn",        //孟加拉语
                "af",        //南非荷兰语
                "no",        //挪威语
                "pt",        //葡萄牙语
                "ja",        //日语
                "sv",        //瑞典语
                "sm",        //萨摩亚语
                "sr-Latn",   //塞尔维亚语 (拉丁文)
                "sr-Cyrl",   //塞尔维亚语 (西里尔文)
                "sk",        //斯洛伐克语
                "sl",        //斯洛文尼亚语
                "sw",        //斯瓦希里语
                "ty",        //塔希提语
                "te",        //泰卢固语
                "ta",        //泰米尔语
                "th",        //泰语
                "to",        //汤加语
                "tr",        //土耳其语
                "cy",        //威尔士语
                "ur",        //乌尔都语
                "uk",        //乌克兰语
                "es",        //西班牙语
                "he",        //希伯来语
                "el",        //希腊语
                "hu",        //匈牙利语
                "it",        //意大利语
                "hi",        //印地语
                "id",        //印度尼西亚语
                "en",        //英语
                "yua",       //尤卡坦玛雅语
                "vi",        //越南语
                "yue",       //粤语(繁体)
            ];
        }
        get responseText(){
            return this.xhr.responseText;
        }
        set onreadystatechange(value){
            return this.xhr.onreadystatechange = value;
        }
        get onreadystatechange(){
            return this.xhr.onreadystatechange;
        }
        get readyState(){
            return this.xhr.readyState;
        }
        get response(){
            return this.xhr.response;
        }
        get responseText(){
            if(window._mx_translate_api_type == "google"){
                return this.xhr.responseText;
            }
            var obj = JSON.parse(this.xhr.responseText);
            if(obj.items){
                var arrs = [];
                for(var i=0;i<obj.items.length;i++){
                    var text = obj.items[i].text;
                    var data = [];
                    if(text.indexOf('<b10') != -1){
                        var parser = new DOMParser();
                        var doc = parser.parseFromString(text, "text/html");
                        var bs = doc.getElementsByTagName('B10');
                        var str = '';
                        for(var j = 0;j<bs.length;j++){
                            str += '\u003ca i=' + j + '\u003e' + bs[j].innerHTML + '\u003c/a\u003e';
                        }
                        data[0] = str;
                    }else{
                        data[0] = obj.items[i].text; 
                    }
                    data[1] = obj.from;
                    arrs[i] = data;
                }
                return arrs;
            }
            
            return this.xhr.responseText;
        }
        get responseType(){
            return this.xhr.responseType;
        }
        set responseType(value){
            return this.xhr.responseType = value;
        }
        get responseURL(){
            return this.xhr.reponseURL;
        }
        get responseXML(){
            return this.xhr.responseXML;
        }
        get status(){
            return this.xhr.status;
        }
        get statusText(){
            return this.xhr.statusText;
        }
        get timeout(){
            return this.xhr.timeout;
        }
        set timeout(value){
            return this.xhr.timeout = value;
        }
        set onabort(value){
            return this.xhr.onabort = value;
        }
        set ontimeout(value){
            return this.xhr.ontimeout = value;
        }
        set onerror(value){
            return this.xhr.onerror = value;
        }
        set onload(value){
            return this.xhr.onload = value;
        }
        set onprogress(value){
            return this.xhr.onprogress = value;
        }
        set onloadend(value){
            return this.xhr.onloadend = value;
        }
        set onloadstart(value){
            return this.xhr.onloadstart = value;
        }

        real_url(lang){
            lang = lang.substr(0,2);
            switch (lang){
                case "zh":
                    lang = "zh-Hans";
                    break;
                case "sr":
                    lang = "sr-Latn";
                    break;
                case "bs":
                    lang = "bs-Latn";
                    break;
                case "tl":
                    lang = "fil";
                    break;
                default:
                    break;
            }
            return this.microsoft_url + lang;
        }

        send(body){
            if(window._mx_translate_api_type == "google")
                return this.xhr.send(body);
            var arrs = body.split('&q=');
            if(arrs.length > 0){
                arrs[0] = arrs[0].replace('q=', '');
            }
            for(var i=0;i<arrs.length;i++){
                arrs[i] = decodeURIComponent(arrs[i]);
                arrs[i] = html_decode(arrs[i]);
                if(arrs[i].indexOf('<a') != -1){
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(arrs[i], "text/html");
                    var as = doc.getElementsByTagName('A');
                    var str = '';
                    for(var j=0;j<as.length;j++){
                        str += "<b10>" + as[j].innerHTML + "</b10>";
                    }
                    arrs[i] = str;
                }
            }
            var result = JSON.stringify(arrs);
            return this.xhr.send(result);
        }
        open(method, url, async){
            if(window._mx_translate_api_type == "google")
                return this.xhr.open(method, url, async);
            var lang = url.substr(url.indexOf("&tl=")+4, 2);
            return this.xhr.open("POST", this.real_url(lang), async);
        }
        abort(v){
            return this.xhr.abort(v);
        }
        setRequestHeader(key, value){
            if(window._mx_translate_api_type == "google")
                return this.xhr.setRequestHeader(key, value);
            if(key == "Content-Type")
                return this.xhr.setRequestHeader('Content-Type', "application/json");
            return this.xhr.setRequestHeader(key, value);
        }
        overrideMimeType(value){
            return this.xhr.overrideMimeType(value);
        }
        getResponseHeader(){
            return this.xhr.getResponseHeader();
        }
        getAllResponseHeaders(){
            return this.xhr.getAllResponseHeaders();
        }
    };

    function sl(a) {
        return (a = pl(a)) ? new ActiveXObject(a) : new MicrosoftXMLHttpRequest
    }

    function pl(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                        a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }
    ql = new rl;

    function Ajax(a) {
        Th.call(this);
        this.headers = new hj;
        this.de = a || null;
        this.ma = !1;
        this.ce = this.xhr = null;
        this.sb = "";
        this.Ja = 0;
        this.Rb = this.Qe = this.Jd = this.re = !1;
        this.$d = 0;
        this.Zd = null;
        this.Qg = "";
        this.Bf = this.jh = !1
    }
    D(Ajax, Th);
    Ajax.prototype.va = null;
    var ul = /^https?$/i,
        vl = [sa, "PUT"],
        wl = [];

    function xl(a, b, c, d, e) {
            var g = new Ajax;
            wl.push(g);
            b && g.w("complete", b);
            g.Bb("ready", g.Hh);
            e && (g.$d = Math.max(0, e));
            g.send(a, c, d, void 0)
        }
        // u = Ajax.prototype;
    Ajax.prototype.Hh = function () {
        this.M();
        kd(wl, this)
    };
    Ajax.prototype.send = function (url, method, url_param, headers) {
        if (this.xhr)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.url_ + "; newUri=" + url);
        method = method ? method.toUpperCase() : "GET";
        this.url_ = url;
        this.Ja = 0;
        this.re = !1;
        this.ma = !0;
        this.xhr = this.de ? sl(this.de) : sl(ql);
        this.ce = this.de ? ol(this.de) : ol(ql);
        this.xhr.onreadystatechange = C(this.Ig, this);
        try {
            this.Qe = !0,
                this.xhr.open(method, String(url), !0),
                this.Qe = !1
        } catch (g) {
            this.jd(5, g);
            return
        }
        var content = url_param || "";
        var headersObject = new hj(this.headers);
        headers && nj(headers, function (key, value) {
            headersObject.set(value, key)
        });
        headers = id(headersObject.Sa(), yl);
        c = _window.FormData && content instanceof _window.FormData;
        !jd(vl, method) || headers || c || headersObject.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        headersObject.forEach(function (value, key) {
            this.xhr.setRequestHeader(key, value)
        }, this);
        this.Qg && (this.xhr.responseType = this.Qg);
        "withCredentials" in this.xhr && this.xhr.withCredentials !== this.jh && (this.xhr.withCredentials = this.jh);
        try {
            zl(this),
                0 < this.$d && ((this.Bf = Al(this.xhr)) ? (this.xhr.timeout = this.$d,
                    this.xhr.ontimeout = C(this.Fb, this)) : this.Zd = bl(this.Fb, this.$d, this)),
                this.Jd = !0,
                this.xhr.send(content),
                this.Jd = !1
        } catch (g) {
            this.jd(5, g)
        }
    };

    function Al(a) {
        return G && K(9) && isNumber(a.timeout) && isDefined(a.ontimeout)
    }

    function yl(a) {
        return "content-type" == a.toLowerCase()
    }
    Ajax.prototype.Fb = function () {
        "undefined" != typeof oc && this.xhr && (this.Ja = 8,
            this.dispatchEvent("timeout"),
            this.abort(8))
    };
    Ajax.prototype.jd = function (a) {
        this.ma = !1;
        this.xhr && (this.Rb = !0,
            this.xhr.abort(),
            this.Rb = !1);
        this.Ja = a;
        Bl(this);
        Cl(this)
    };

    function Bl(a) {
        a.re || (a.re = !0,
            a.dispatchEvent("complete"),
            a.dispatchEvent("error"))
    }
    Ajax.prototype.abort = function (a) {
        this.xhr && this.ma && (this.ma = !1,
            this.Rb = !0,
            this.xhr.abort(),
            this.Rb = !1,
            this.Ja = a || 7,
            this.dispatchEvent("complete"),
            this.dispatchEvent("abort"),
            Cl(this))
    };
    Ajax.prototype.F = function () {
        this.xhr && (this.ma && (this.ma = !1,
                this.Rb = !0,
                this.xhr.abort(),
                this.Rb = !1),
            Cl(this, !0));
        Ajax.m.F.call(this)
    };
    Ajax.prototype.Ig = function () {
        this.vb || (this.Qe || this.Jd || this.Rb ? Dl(this) : this.fj())
    };
    Ajax.prototype.fj = function () {
        Dl(this)
    };

    function Dl(a) {
        if (a.ma && "undefined" != typeof oc && (!a.ce[1] || 4 != (a.O ? a.O.readyState : 0) || 2 != a.getRequestState()))
            if (a.Jd && 4 == (a.O ? a.O.readyState : 0))
                bl(a.Ig, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            a.isResponseAvailable()) {
            a.ma = !1;
            try {
                a.Qc() ? (a.dispatchEvent("complete"),
                    a.dispatchEvent("success")) : (a.Ja = 6,
                    Bl(a))
            } finally {
                Cl(a)
            }
        }
    }

    function Cl(a, b) {
        if (a.O) {
            zl(a);
            var c = a.O,
                d = a.ce[0] ? z : null;
            a.O = null;
            a.ce = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function zl(a) {
        a.O && a.Bf && (a.O.ontimeout = null);
        isNumber(a.Zd) && (cl(a.Zd),
            a.Zd = null)
    }
    Ajax.prototype.hc = function () {
        return !!this.xhr
    };
    Ajax.prototype.isResponseAvailable = function () {
        return 4 == (this.xhr ? this.xhr.readyState : 0)
    };
    Ajax.prototype.Qc = function () {
        var a = this.getRequestState();
        a: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            var b = !0;
            break a;
        default:
            b = !1
        }
        if (!b) {
            if (a = 0 === a)
                a = String(this.sb).match(oj)[1] || null, !a && _window.self && _window.self.location && (a = _window.self.location.protocol,
                    a = a.substr(0, a.length - 1)),
                a = !ul.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    };
    Ajax.prototype.getRequestState = function () {
        try {
            return 2 < (this.xhr ? this.xhr.readyState : 0) ? this.xhr.status : -1
        } catch (a) {
            return -1
        }
    };
    Ajax.prototype.xe = function () {
        return String(this.sb)
    };
    Ajax.prototype.getResponseText = function () {
        try {
            return this.xhr ? this.xhr.responseText : ""
        } catch (a) {
            return ""
        }
    };
    Ajax.prototype.getResponseHeader = function (a) {
        if (this.xhr && this.isResponseAvailable())
            return a = this.xhr.getResponseHeader(a),
                null === a ? void 0 : a
    };
    Ajax.prototype.getAllResponseHeaders = function () {
        return this.xhr && this.isResponseAvailable() ? this.xhr.getAllResponseHeaders() : ""
    };
    Ajax.prototype.we = getterFor("Ja");

    function El() {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.B = 1;
        this.g = {};
        this.f = null;
        this.s = "";
        S(window, "beforeunload", this.o, !1, this)
    }
    qc(El);

    function Fl(a, b, c) {
        if (null == b)
            return "1";
        switch (typeStringOf(b)) {
        case "string":
            return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)),
                encodeUrl(a);
        case "number":
            return "" + b;
        case "boolean":
            return b ? "1" : "0";
        case "array":
            var d = [],
                e;
            for (e in b)
                d.push(Fl(a, b[e], c));
            return d.join(",");
        case "object":
            d = [];
            for (e in b)
                d.push(Gl(a, e, b[e], c));
            return d.join(",");
        default:
            return ""
        }
    }

    function Gl(a, b, c, d) {
        return [encodeUrl(b), Fl(a, c, d || "smtalt" == b)].join("=")
    }
    El.prototype.log = function (a, b) {
        this.b.push([a, b]);
        this.c || (this.c = !0,
            bl(this.h, 0, this))
    };
    El.prototype.h = function () {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            Hl(this, b[0], b[1])
        }
        this.b = [];
        this.c = !1
    };

    function Hl(a, b, c) {
        Jl(a, a.s + "/gen204?" + (a.f ? ["client=", a.f, "&"].join("") : "") + Gl(a, b, c ? c : {}))
    }

    function Jl(a, b) {
        var c = new Image,
            d = a.B++;
        a.g[d] = c;
        c.onload = c.onerror = function () {
            delete El.Y().g[d]
        };
        c.src = b;
        c = null
    }

    function Kl(a, b) {
        var c = 0,
            d = null;
        b in a.a && (d = a.a[b],
            c = d[0],
            d = d[1]);
        if (typeStringOf(1) == "object") {
            typeStringOf(d) != "object" && (d = {});
            for (var e in 1)
                d[e] = Ll(e in d ? d[e] : null, 1[e])
        } else
            d = Ll(d, 1);
        a.a[b] = [c, d];
        cl(a.a[b][0]);
        c = bl(C(a.l, a, b), 2E3);
        a.a[b][0] = c
    }
    El.prototype.l = function (a) {
        Hl(this, a, this.a[a][1]);
        a in this.a && (cl(this.a[a][0]),
            delete this.a[a])
    };

    function Ll(a, b) {
        null != b || (b = 1);
        isNaN(a) && (a = parseInt(a, 10));
        isNaN(b) && (b = parseInt(b, 10));
        return a + b
    }
    El.prototype.o = function () {
        this.h();
        for (var a in this.a)
            0 != this.a[a] && this.l(a)
    };

    function Ml() {
        G ? hl(9) : me && hl(25) || G && hl(8) || Pd || ie && hl(19) || F && hl(12.1) || ne && hl(5.1) || ke && hl(3.2) || le && hl(2.1)
    }
    qc(Ml);

    function Nl(a) {
        we(this, a, Ol)
    }
    D(Nl, ue);
    var Ol = [3, 4];

    function Pl(a) {
        we(this, a, Ql)
    }
    D(Pl, ue);
    var Ql = [3];

    function Rl(a) {
        we(this, a, Sl)
    }
    D(Rl, ue);
    var Sl = [2];

    function Tl(a) {
        we(this, a, Ul)
    }
    D(Tl, ue);
    var Ul = [26];
    Tl.prototype.Zb = function () {
        return ze(this, 16)
    };
    Tl.prototype.Ub = function (a) {
        Be(this, 16, a)
    };
    Tl.prototype.ya = function () {
        return ze(this, 1)
    };
    Tl.prototype.ua = function (a) {
        Be(this, 1, a)
    };

    function Vl(a) {
        we(this, a, null)
    }
    D(Vl, ue);

    function Wl() {
        this.c = this.a = "";
        Ml.Y()
    }
    qc(Wl);
    Wl.prototype.Ub = setterFor("a");
    Wl.prototype.ua = setterFor("c");
    var Xl = !1;

    function Yl(a) {
            if (a = a.match(/[\d]+/g))
                a.length = 3
        }
        (function () {
            if (navigator.plugins && navigator.plugins.length) {
                var a = navigator.plugins["Shockwave Flash"];
                if (a && (Xl = !0,
                    a.description)) {
                    Yl(a.description);
                    return
                }
                if (navigator.plugins["Shockwave Flash 2.0"]) {
                    Xl = !0;
                    return
                }
            }
            if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"],
                Xl = !(!a || !a.enabledPlugin))) {
                Yl(a.enabledPlugin.description);
                return
            }
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                Xl = !0;
                Yl(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                Xl = !0;
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    Xl = !0,
                    Yl(b.GetVariable("$version"))
            } catch (c) {}
        })();

    function Zl() {
        this.b = Wl.Y()
    }
    qc(Zl);
    Zl.prototype.a = function () {
        $l(this, 25)
    };

    function $l(a, b) {
        var c = new Tl;
        a = a.b;
        Be(c, 65, 0);
        c.Ub(a.a);
        Be(c, 14, "");
        c.ua(a.c);
        Be(c, 50, "");
        Be(c, 52, "");
        Be(c, 32, 0);
        Be(c, 31, b);
        return c
    };

    function am() {
        this.a = []
    }
    am.prototype.add = function (a) {
        this.a.push(a)
    };

    function bm() {
        this.a = []
    }
    D(bm, am);
    qc(bm);
    bm.prototype.add = function (a) {
        if (a)
            for (; a();)
        ;
    };

    function cm(a) {
        this.a = [];
        this.b = .5;
        dm(this, a);
        this.f = 0;
        this.c = !0;
        this.g = C(this.h, this)
    }
    D(cm, am);

    function dm(a, b) {
        1 < b ? a.b = 1 : .001 > b ? a.b = .001 : b && (a.b = b)
    }
    cm.prototype.add = function (a) {
        cm.m.add.call(this, a);
        this.c && em(this)
    };

    function em(a) {
        a.c = !1;
        window.setTimeout(a.g, Math.min(a.f, 5E3))
    }
    cm.prototype.h = function () {
        var a = (new Date).getTime();
        do {
            this.a.length && (this.a[0] && this.a[0]() || this.a.shift());
            var b = !!this.a.length;
            var c = 95 * this.b + 5;
            var d = (new Date).getTime() - a
        } while (b && d < c);
        this.f = Math.ceil(d * (1 / this.b - 1)) + 1;
        b ? em(this) : this.c = !0
    };

    function fm(a, b) {
        this.o = a || null;
        this.C = b || bm.Y();
        this.l = this.h = this.G = null;
        this.f = this.c = !1;
        this.g = null;
        this.a = [];
        this.b = 0
    }

    function gm() {}

    function hm() {}

    function im(a, b) {
        a.c || (a.G = b)
    }

    function jm(a, b, c) {
        a.h = c ? C(b, c) : b
    }

    function km(a, b, c) {
        a.l = c ? C(b, c) : b
    }

    function lm(a, b) {
        a.c || (a.c = !0,
            a.B = b,
            a.b++,
            a.g = a.G,
            a.s())
    }
    fm.prototype.stop = function () {
        this.b++;
        this.c = !1;
        this.a = []
    };

    function mm(a) {
        if (!a.c)
            return null;
        for (var b = !1, c = 0; c < a.a.length; ++c)
            if (a.a[c].target === a) {
                a.a[c].ready = !1;
                a.a[c].hh = a.b + 1;
                b = !0;
                break
            }
        b || a.a.push({
            target: a,
            ready: !1,
            hh: a.b + 1
        });
        return C(a.s, a, a, a.b + 1)
    }

    function nm(a) {
        if (!a.c)
            return !0;
        for (var b = 0; b < a.a.length; ++b)
            if (a.a[b].target === a && a.a[b].hh == a.b)
                return a.a[b].ready;
        return !0
    }
    fm.prototype.s = function (a, b) {
        if (this.c) {
            if (a)
                for (var c = 0; c < this.a.length; ++c)
                    if (this.a[c].target === a) {
                        this.a[c].ready = !0;
                        break
                    }
            this.f || this.C.add(C(this.I, this, b || this.b))
        }
    };
    fm.prototype.I = function (a) {
        if (this.b != a)
            return !1;
        a = this.g;
        if (a == hm)
            return this.stop(),
                this.h && this.h.call(this.o, this, this.B), !1;
        this.f = !0;
        try {
            var b = a.call(this.o, this, this.B);
            if (!b)
                throw Error();
        } catch (c) {
            this.stop();
            a = c;
            if (this.l)
                this.l.call(this.o, a, this, this.B);
            else
                throw a;
            return !1
        } finally {
            this.f = !1
        }
        b != gm && (this.g = b,
            this.b++,
            this.s());
        return !1
    };

    function om() {
        Th.call(this);
        this.a = 0;
        this.l = this.c = null
    }
    D(om, Th);
    om.prototype.f = function () {
        this.Ra("begin")
    };
    om.prototype.g = function () {
        this.Ra("end")
    };
    om.prototype.Cb = function () {
        this.Ra("stop")
    };
    om.prototype.Ra = function (a) {
        this.dispatchEvent(a)
    };

    function pm(a, b) {
        isArray(b) || (b = [b]);
        b = fd(b, function (a) {
            return isString(a) ? a : a.Fk + " " + a.duration + "s " + a.timing + " " + a.fb + "s"
        });
        O(a, "transition", b.join(","))
    }
    var qm = function (a) {
        var b = !1,
            c;
        return function () {
            b || (c = a(),
                b = !0);
            return c
        }
    }(function () {
        if (G)
            return K("10.0");
        var a = document.createElement(f),
            b = J ? "-webkit" : H ? "-moz" : G ? "-ms" : F ? "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = xf("div", {
            style: c
        });
        a.innerHTML = tf(b);
        a = a.firstChild;
        b = a.style[$c("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[zg(a, "transition")] || "")
    });

    function rm(a, b, c, d, e) {
        om.call(this);
        this.A = a;
        this.s = b;
        this.o = c;
        this.b = d;
        this.B = isArray(e) ? e : [e]
    }
    D(rm, om);
    //u = rm.prototype;
    rm.prototype.play = function () {
        if (1 == this.a)
            return !1;
        this.f();
        this.Ra("play");
        this.c = nowTime();
        this.a = 1;
        if (qm())
            return O(this.A, this.o),
                this.h = bl(this.kj, void 0, this), !0;
        this.yf(!1);
        return !1
    };
    rm.prototype.kj = function () {
        Lg(this.A);
        pm(this.A, this.B);
        O(this.A, this.b);
        this.h = bl(C(this.yf, this, !1), 1E3 * this.s)
    };
    rm.prototype.stop = function () {
        1 == this.a && this.yf(!0)
    };
    rm.prototype.yf = function (a) {
        O(this.A, "transition", "");
        cl(this.h);
        O(this.A, this.b);
        this.l = nowTime();
        this.a = 0;
        a ? this.Cb() : this.Ra("finish");
        this.g()
    };
    rm.prototype.F = function () {
        this.stop();
        rm.m.F.call(this)
    };

    function sm(a, b) {
        Th.call(this);
        this.h = new Nh(this);
        this.dc(a || null);
        b && (this.sc = b)
    }
    D(sm, Th);
    //u = sm.prototype;
    sm.prototype.A = null;
    sm.prototype.vc = !0;
    sm.prototype.Mf = null;
    sm.prototype.jc = !1;
    sm.prototype.Ve = -1;
    sm.prototype.sc = "toggle_display";
    sm.prototype.j = getterFor("A");
    sm.prototype.dc = function (a) {
        tm(this);
        this.A = a
    };
    sm.prototype.Tc = function (a) {
        tm(this);
        this.vc = a
    };

    function tm(a) {
        if (a.jc)
            throw Error("Can not change this state of the popup while showing.");
    }
    sm.prototype.N = getterFor("jc");
    sm.prototype.L = function (a) {
        this.xa && this.xa.stop();
        this.pa && this.pa.stop();
        if (a) {
            if (!this.jc && this.Ge()) {
                if (!this.A)
                    throw Error("Caller must call setElement before trying to show the popup");
                this.ob();
                a = N(this.A);
                if (this.vc)
                    if (this.h.w(a, "mousedown", this.ef, !0),
                        G) {
                        try {
                            var b = a.activeElement
                        } catch (d) {}
                        for (; b && b.nodeName == "IFRAME";) {
                            try {
                                var c = lg(b)
                            } catch (d) {
                                break
                            }
                            a = c;
                            b = a.activeElement
                        }
                        this.h.w(a, "mousedown", this.ef, !0);
                        this.h.w(a, "deactivate", this.Hg)
                    } else
                        this.h.w(a, "blur", this.Hg);
                this.sc == "toggle_display" ? (this.A.style.visibility = "visible",
                    P(this.A, !0)) : this.sc == "move_offscreen" && this.ob();
                this.jc = !0;
                this.Ve = nowTime();
                this.xa ? (Ah(this.xa, "end", this.Jg, !1, this),
                    this.xa.play()) : this.Jg()
            }
        } else
            um(this)
    };
    sm.prototype.ob = emptyFunction;

    function um(a, b) {
        a.jc && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.h && Sh(a.h),
            a.jc = !1,
            nowTime(),
            a.pa ? (Ah(a.pa, "end", zc(a.Pf, b), !1, a),
                a.pa.play()) : a.Pf(b))
    }
    sm.prototype.Pf = function (a) {
        this.sc == "toggle_display" ? this.Ii() : this.sc == "move_offscreen" && (this.A.style.top = "-10000px");
        this.ff(a)
    };
    sm.prototype.Ii = function () {
        this.A.style.visibility = "hidden";
        P(this.A, !1)
    };
    sm.prototype.Ge = function () {
        return this.dispatchEvent("beforeshow")
    };
    sm.prototype.Jg = function () {
        this.dispatchEvent("show")
    };
    sm.prototype.ff = function (a) {
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    };
    sm.prototype.ef = function (a) {
        a = a.target;
        gg(this.A, a) || vm(this, a) || 150 > nowTime() - this.Ve || um(this, a)
    };
    sm.prototype.Hg = function (a) {
        var b = N(this.A);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || gg(this.A, a) || "BODY" == a.tagName)
                return
        } else if (a.target != b)
            return;
        150 > nowTime() - this.Ve || um(this)
    };

    function vm(a, b) {
        return gd(a.Mf || [], function (a) {
            return b === a || gg(a, b)
        })
    }
    sm.prototype.F = function () {
        sm.m.F.call(this);
        this.h.M();
        eh(this.xa);
        eh(this.pa);
        delete this.A;
        delete this.h;
        delete this.Mf
    };

    function wm(a, b) {
        this.s = b || void 0;
        sm.call(this, a)
    }
    D(wm, sm);
    wm.prototype.ob = function () {
        if (this.s) {
            var a = !this.N() && this.sc != "move_offscreen",
                b = this.j();
            a && (b.style.visibility = "hidden",
                P(b, !0));
            this.s.b(b, 8, this.Ze);
            a && P(b, !1)
        }
    };

    function xm(a, b) {
        wm.call(this, a);
        this.c = b;
        this.a = 0;
        this.b = null;
        this.f = 0;
        this.L(!0);
        this.L(!1);
        L(this.j(), "round-trip-popup");
        L(this.c, "round-trip-content")
    }
    D(xm, wm);
    xm.prototype.o = function () {
        cl(this.f);
        1 == this.a ? Ah(this.b, "finish", C(this.o, this)) : 0 == this.a && (this.f = bl(C(this.l, this, -1), 200))
    };
    xm.prototype.l = function (a) {
        if (this.a != a && (0 != this.a || !(this.N() && 1 == a || !this.N() && -1 == a))) {
            var b = this.N();
            this.L(!0);
            var c = -Math.ceil(Lg(this.c).width);
            Pg(this.j()) && (c = -c);
            var d = 1 == a ? c : 0;
            c = 1 == a ? 0 : c;
            this.L(b);
            if (qm()) {
                b = .2;
                if (0 != this.a) {
                    var e = parseInt(Bg(this.c, "left"), 10);
                    this.g();
                    b *= (c - e) / (c - d);
                    d = e
                }
                this.a = a;
                this.b = new rm(this.c, b, {
                    left: d + "px"
                }, {
                    left: c + "px"
                }, "left " + b + "s");
                this.b.play();
                Ah(this.b, "finish", C(this.g, this)); - 1 == a ? Ah(this.b, "finish", C(this.L, this, !1)) : this.L(!0)
            } else
                O(this.c, "left", c + "px"),
                this.L(1 == a ? !0 : !1)
        }
    };
    xm.prototype.g = function () {
        0 != this.a && (this.b.stop(),
            bl(C(Jh, this, this.b)),
            this.a = 0,
            this.b = null)
    };

    function ym(a, b) {
        if (null == a || null == b)
            return null == a == (null == b);
        if (a.constructor != Array && a.constructor != Object)
            throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
        if (a === b)
            return !0;
        if (a.constructor != b.constructor)
            return !1;
        for (var c in a)
            if (!(c in b && zm(a[c], b[c])))
                return !1;
        for (var d in b)
            if (!(d in a))
                return !1;
        return !0
    }

    function zm(a, b) {
        if (a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b))
            return !0;
        if (a instanceof Object && b instanceof Object) {
            if (!ym(a, b))
                return !1
        } else
            return !1;
        return !0
    };

    function Am(a) {
        this.data = a || []
    }

    function Bm(a, b, c) {
        a = a.data[b];
        return null != a ? a : c
    }

    function Cm(a, b) {
        return !!Bm(a, b, void 0)
    }

    function Dm(a, b) {
        return Bm(a, b, 0)
    }

    function Em(a, b) {
        return Bm(a, b, "")
    }

    function Fm(a, b, c) {
        a = a.data;
        a[b] || (a[b] = []);
        return a[b][c]
    }

    function Y(a, b) {
        return a.data[b] ? a.data[b].length : 0
    }
    Am.prototype.Gb = getterFor("data");
    Am.prototype.Bj = function (a) {
        var b = this.data;
        this.data = a.data;
        a.data = b
    };

    function Gm(a) {
        this.data = a || []
    }
    D(Gm, Am);

    function Hm(a) {
        this.data = a || []
    }
    D(Hm, Am);

    function Im(a) {
        this.data = a || []
    }
    D(Im, Am);

    function Jm(a) {
        this.data = a || []
    }
    D(Jm, Am);

    function Km(a) {
        this.data = a || []
    }
    D(Km, Am);

    function Lm(a, b) {
        return new Hm(Fm(a, 2, b))
    }

    function Mm(a, b) {
        return new Gm(Fm(a, 5, b))
    };

    function Nm() {
        this.A = null;
        this.a = Sf(f, "gt-hl-layer", document.createTextNode(""));
        this.b = null;
        this.A && ($f(this.a, this.A),
            Om(this))
    }

    function Pm(a, b, c, d, e) {
        var g = d || "gt-hl-text";
        d = a.A && (a.A.value || sg(a.A));
        Om(a);
        Zf(a.a);
        if (b != c || e) {
            if (0 < b) {
                var h = d.substring(0, b);
                Qm(a.a, h, 0, e)
            }
            b < c && (h = d.substring(b, c),
                g = Sf("SPAN", g),
                Qm(g, h, b, e),
                a.a.appendChild(g));
            c < d.length && (h = d.substring(c),
                Qm(a.a, h, c, e))
        }
    }

    function Om(a) {
        var b = a.A;
        var c = N(b),
            d = G && b.currentStyle;
        d && Of(Ef(c).a) && d.width != "auto" && d.height != "auto" && !d.boxSizing ? (c = Xg(b, d.width, "width", "pixelWidth"),
            b = Xg(b, d.height, "height", "pixelHeight"),
            b = new Df(c, b)) : (d = Sg(b),
            c = Vg(b),
            b = Wg(b),
            b = new Df(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
        Tg(a.a, b);
        c = Jg(a.A);
        b = a.a;
        d = c.x;
        c = c.y;
        var e = Jg(b);
        d instanceof M && (c = d.y,
            d = d.x);
        Dg(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = Vg(a.A);
        O(a.a, "paddingLeft", b.left + "px");
        O(a.a, "paddingRight", b.right + "px");
        a.a.dir = a.A.dir
    }

    function Qm(a, b, c, d) {
        d = d || [];
        for (var e = 0, g; g = d[e]; e++)
            if (!(0 > g.Cc - c)) {
                if (g.Cc - c >= b.length)
                    break;
                if (0 < g.Cc - c) {
                    var h = b.substring(0, g.Cc - c);
                    Rm(a, h)
                }
                var k = g.className || "gt-hl-text";
                h = b.substring(g.Cc - c, g.zf - c);
                k = Sf("SPAN", k);
                Rm(k, h);
                a.appendChild(k);
                b = b.substring(g.zf - c);
                c = g.zf
            }
        b && Rm(a, b)
    }

    function Rm(a, b) {
        b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = Sf("BR");
                a.appendChild(e)
            }
            a.appendChild(document.createTextNode(String(b[c])))
        }
    };

    function Sm() {
        Q.call(this)
    }
    D(Sm, Q);
    Sm.prototype.restore = function (a) {
        var b = this.b();
        a || this.M();
        return b
    };

    function Tm(a, b, c, d, e) {
        this.f = !!b;
        this.node = null;
        this.a = 0;
        this.o = !1;
        this.B = !c;
        a && Um(this, a, d);
        this.depth = void 0 != e ? e : this.a || 0;
        this.f && (this.depth *= -1)
    }
    D(Tm, ej);

    function Um(a, b, c, d) {
        if (a.node = b)
            a.a = isNumber(c) ? c : 1 != a.node.nodeType ? 0 : a.f ? -1 : 1;
        isNumber(d) && (a.depth = d)
    }
    Tm.prototype.g = function () {
        var a = this.f ? -1 : 1;
        this.a == a && (this.a = -1 * a,
            this.depth += this.a * (this.f ? -1 : 1))
    };
    Tm.prototype.next = function () {
        if (this.o) {
            if (!this.node || this.B && 0 == this.depth)
                throw dj;
            var a = this.node;
            var b = this.f ? -1 : 1;
            if (this.a == b) {
                var c = this.f ? a.lastChild : a.firstChild;
                c ? Um(this, c) : Um(this, a, -1 * b)
            } else
                (c = this.f ? a.previousSibling : a.nextSibling) ? Um(this, c) : Um(this, a.parentNode, -1 * b);
            this.depth += this.a * (this.f ? -1 : 1)
        } else
            this.o = !0;
        a = this.node;
        if (!this.node)
            throw dj;
        return a
    };
    Tm.prototype.splice = function (a) {
        var b = this.node,
            c = this.f ? 1 : -1;
        this.a == c && (this.a = -1 * c,
            this.depth += this.a * (this.f ? -1 : 1));
        this.f = !this.f;
        Tm.prototype.next.call(this);
        this.f = !this.f;
        c = isArray2(arguments[0]) ? arguments[0] : arguments;
        for (var d = c.length - 1; 0 <= d; d--)
            ag(c[d], b);
        bg(b)
    };

    function Vm() {}

    function Wm(a) {
        if (a.getSelection)
            return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a)
                        return null
                } else if (!c.length || c.item(0).document != a)
                    return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    }

    function Xm(a) {
        for (var b = [], c = 0, d = a.Hc(); c < d; c++)
            b.push(a.ac(c));
        return b
    }

    function Ym(a) {
        return a.Pc() ? a.Ga() : a.Ua()
    }

    function Zm(a) {
        return a.Pc() ? a.Ha() : a.Va()
    }
    Vm.prototype.Pc = func_ValueOf(!1);

    function $m(a, b) {
        Tm.call(this, a, b, !0)
    }
    D($m, Tm);

    function an(a, b, c, d, e) {
        this.c = this.b = null;
        this.h = 0;
        if (a) {
            this.b = a;
            this.c = c;
            this.h = d;
            if (1 == a.nodeType && "BR" != a.tagName)
                if (a = a.childNodes,
                    b = a[b])
                    this.b = b;
                else {
                    a.length && (this.b = bd(a));
                    var g = !0
                }
            1 == c.nodeType && ((this.c = c.childNodes[d]) ? this.h = 0 : this.c = c)
        }
        Tm.call(this, e ? this.c : this.b, e, !0);
        if (g)
            try {
                this.next()
            } catch (h) {
                if (h != dj)
                    throw h;
            }
    }
    D(an, $m);
    an.prototype.s = getterFor("b");
    an.prototype.l = function () {
        return this.o && this.node == this.c && (!this.h || 1 != this.a)
    };
    an.prototype.next = function () {
        if (this.l())
            throw dj;
        return an.m.next.call(this)
    };
    an.prototype.g = function () {
        an.m.g.apply(this);
        if (gg(this.node, this.c))
            throw dj;
    };

    function bn() {}

    function cn(a, b) {
        b = b.Dc();
        try {
            return 0 <= a.eb(b, 0, 0) && 0 >= a.eb(b, 1, 1)
        } catch (c) {
            if (!G)
                throw c;
            return !1
        }
    }
    bn.prototype.Na = function () {
        return new an(this.Wa(), this.nb(), this.mb(), this.wb())
    };

    function dn(a) {
        this.a = a
    }
    D(dn, bn);

    function en(a) {
        var b = N(a).createRange();
        if (3 == a.nodeType)
            b.setStart(a, 0),
            b.setEnd(a, a.length);
        else if (fn(a)) {
            for (var c, d = a;
                (c = d.firstChild) && fn(c);)
                d = c;
            b.setStart(d, 0);
            for (d = a;
                (c = d.lastChild) && fn(c);)
                d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else
            c = a.parentNode,
            a = cd(c.childNodes, a),
            b.setStart(c, a),
            b.setEnd(c, a + 1);
        return b
    }

    function gn(a, b, c, d) {
            var e = N(a).createRange();
            e.setStart(a, b);
            e.setEnd(c, d);
            return e
        }
        //u = dn.prototype;
    dn.prototype.Dc = getterFor("a");
    dn.prototype.ye = function () {
        return this.a.commonAncestorContainer
    };
    dn.prototype.Wa = function () {
        return this.a.startContainer
    };
    dn.prototype.nb = function () {
        return this.a.startOffset
    };
    dn.prototype.mb = function () {
        return this.a.endContainer
    };
    dn.prototype.wb = function () {
        return this.a.endOffset
    };
    dn.prototype.eb = function (a, b, c) {
        return this.a.compareBoundaryPoints(1 == c ? 1 == b ? _window.Range.START_TO_START : _window.Range.START_TO_END : 1 == b ? _window.Range.END_TO_START : _window.Range.END_TO_END, a)
    };
    dn.prototype.Xa = function () {
        return this.a.collapsed
    };
    dn.prototype.sa = function () {
        return this.a.toString()
    };
    dn.prototype.select = function (a) {
        var b = Rf(N(this.Wa()));
        this.Sc(b.getSelection(), a)
    };
    dn.prototype.Sc = function (a) {
        a.removeAllRanges();
        a.addRange(this.a)
    };

    function hn(a) {
        this.a = a
    }
    D(hn, dn);
    hn.prototype.Sc = function (a, b) {
        !b || this.Xa() ? hn.m.Sc.call(this, a, b) : (a.collapse(this.mb(), this.wb()),
            a.extend(this.Wa(), this.nb()))
    };

    function jn(a) {
        this.c = this.b = this.h = null;
        this.g = this.f = -1;
        this.a = a
    }
    D(jn, bn);

    function kn(a) {
            var b = N(a).body.createTextRange();
            if (1 == a.nodeType)
                b.moveToElementText(a),
                fn(a) && !a.childNodes.length && b.collapse(!1);
            else {
                for (var c = 0, d = a; d = d.previousSibling;) {
                    var e = d.nodeType;
                    if (3 == e)
                        c += d.length;
                    else if (1 == e) {
                        b.moveToElementText(d);
                        break
                    }
                }
                d || b.moveToElementText(a.parentNode);
                b.collapse(!d);
                c && b.move(Oa, c);
                b.moveEnd(Oa, a.length)
            }
            return b
        }
        //u = jn.prototype;
    jn.prototype.Dc = getterFor("a");
    jn.prototype.ye = function () {
        if (!this.h) {
            var a = this.a.text,
                b = this.a.duplicate(),
                c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(Oa, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.Xa() && 0 < b)
                return this.h = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;)
                c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == ln(c.firstChild) && fn(c.firstChild);)
                c = c.firstChild;
            0 == a.length && (c = mn(this, c));
            this.h = c
        }
        return this.h
    };

    function mn(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var g = c[d];
            if (fn(g)) {
                var h = kn(g),
                    k = h.htmlText != g.outerHTML;
                if (a.Xa() && k ? 0 <= a.eb(h, 1, 1) && 0 >= a.eb(h, 1, 0) : a.a.inRange(h))
                    return mn(a, g)
            }
        }
        return b
    }
    jn.prototype.Wa = function () {
        this.b || (this.b = nn(this, 1),
            this.Xa() && (this.c = this.b));
        return this.b
    };
    jn.prototype.nb = function () {
        0 > this.f && (this.f = on(this, 1),
            this.Xa() && (this.g = this.f));
        return this.f
    };
    jn.prototype.mb = function () {
        if (this.Xa())
            return this.Wa();
        this.c || (this.c = nn(this, 0));
        return this.c
    };
    jn.prototype.wb = function () {
        if (this.Xa())
            return this.nb();
        0 > this.g && (this.g = on(this, 0),
            this.Xa() && (this.f = this.g));
        return this.g
    };
    jn.prototype.eb = function (a, b, c) {
        return this.a.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };

    function nn(a, b, c) {
        c = c || a.ye();
        if (!c || !c.firstChild)
            return c;
        for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
            var h = d ? e : g - e - 1,
                k = c.childNodes[h];
            try {
                var l = pn(k)
            } catch (p) {
                continue
            }
            var m = l.Dc();
            if (a.Xa())
                if (!fn(k)) {
                    if (0 == a.eb(m, 1, 1)) {
                        a.f = a.g = h;
                        break
                    }
                } else {
                    if (cn(l, a))
                        return nn(a, b, k)
                } else {
                if (cn(a, l)) {
                    if (!fn(k)) {
                        d ? a.f = h : a.g = h + 1;
                        break
                    }
                    return nn(a, b, k)
                }
                if (0 > a.eb(m, 1, 0) && 0 < a.eb(m, 0, 1))
                    return nn(a, b, k)
            }
        }
        return c
    }

    function on(a, b) {
        var c = 1 == b,
            d = c ? a.Wa() : a.mb();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
                var k = d[h];
                if (!fn(k) && 0 == a.a.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), pn(k).Dc()))
                    return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        a = a.a.duplicate();
        b = kn(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    }

    function ln(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    }
    jn.prototype.Xa = function () {
        return 0 == this.a.compareEndPoints("StartToEnd", this.a)
    };
    jn.prototype.sa = function () {
        return this.a.text
    };
    jn.prototype.select = function () {
        this.a.select()
    };

    function qn(a) {
        this.a = a
    }
    D(qn, dn);
    qn.prototype.Sc = function (a) {
        a.collapse(this.Wa(), this.nb());
        this.mb() == this.Wa() && this.wb() == this.nb() || a.extend(this.mb(), this.wb());
        0 == a.rangeCount && a.addRange(this.a)
    };

    function rn(a) {
        this.a = a
    }
    D(rn, dn);
    rn.prototype.eb = function (a, b, c) {
        return K("528") ? rn.m.eb.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? _window.Range.START_TO_START : _window.Range.END_TO_START : 1 == b ? _window.Range.START_TO_END : _window.Range.END_TO_END, a)
    };
    rn.prototype.Sc = function (a, b) {
        b ? a.setBaseAndExtent(this.mb(), this.wb(), this.Wa(), this.nb()) : a.setBaseAndExtent(this.Wa(), this.nb(), this.mb(), this.wb())
    };

    function sn(a) {
        return Oe ? new jn(a, N(a.parentElement())) : J ? new rn(a) : H ? new hn(a) : F ? new qn(a) : new dn(a)
    }

    function pn(a) {
        if (G && !ee(9)) {
            var b = new jn(kn(a));
            if (fn(a)) {
                for (var c, d = a;
                    (c = d.firstChild) && fn(c);)
                    d = c;
                b.b = d;
                b.f = 0;
                for (d = a;
                    (c = d.lastChild) && fn(c);)
                    d = c;
                b.c = d;
                b.g = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.h = a
            } else
                b.b = b.c = b.h = a.parentNode,
                b.f = cd(b.h.childNodes, a),
                b.g = b.f + 1;
            a = b
        } else
            a = J ? new rn(en(a)) : H ? new hn(en(a)) : F ? new qn(en(a)) : new dn(en(a));
        return a
    }

    function fn(a) {
        return Xf(a) || 3 == a.nodeType
    };

    function tn() {
        this.a = this.c = this.f = this.b = this.h = null;
        this.g = !1
    }
    D(tn, Vm);

    function un(a, b) {
        var c = new tn;
        c.h = a;
        c.g = !!b;
        return c
    }

    function vn(a, b, c, d) {
            var e = new tn;
            e.g = wn(a, b, c, d);
            if (fg(a) && !Xf(a)) {
                var g = a.parentNode;
                b = cd(g.childNodes, a);
                a = g
            }
            fg(c) && !Xf(c) && (g = c.parentNode,
                d = cd(g.childNodes, c),
                c = g);
            e.g ? (e.b = c,
                e.f = d,
                e.c = a,
                e.a = b) : (e.b = a,
                e.f = b,
                e.c = c,
                e.a = d);
            return e
        }
        //u = tn.prototype;
    tn.prototype.ld = function () {
        return xn(this).Dc()
    };
    tn.prototype.Hc = func_ValueOf(1);
    tn.prototype.ac = function () {
        return this
    };

    function xn(a) {
        var b;
        if (!(b = a.h)) {
            b = a.Ga();
            var c = a.Ha(),
                d = a.Ua(),
                e = a.Va();
            if (G && !ee(9)) {
                var g = b,
                    h = c,
                    k = d,
                    l = e,
                    m = !1;
                1 == g.nodeType && (h = g.childNodes[h],
                    m = !h,
                    g = h || g.lastChild || g,
                    h = 0);
                var p = kn(g);
                h && p.move(Oa, h);
                g == k && h == l ? p.collapse(!0) : (m && p.collapse(!1),
                    m = !1,
                    1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k,
                        l = 0,
                        m = !h),
                    g = kn(k),
                    g.collapse(!m),
                    l && g.moveEnd(Oa, l),
                    p.setEndPoint("EndToEnd", g));
                l = new jn(p);
                l.b = b;
                l.f = c;
                l.c = d;
                l.g = e;
                b = l
            } else
                b = J ? new rn(gn(b, c, d, e)) : H ? new hn(gn(b, c, d, e)) : F ? new qn(gn(b, c, d, e)) : new dn(gn(b, c, d, e));
            b = a.h = b
        }
        return b
    }
    tn.prototype.rd = function () {
        return xn(this).ye()
    };
    tn.prototype.Ga = function () {
        return this.b || (this.b = xn(this).Wa())
    };
    tn.prototype.Ha = function () {
        return null != this.f ? this.f : this.f = xn(this).nb()
    };
    tn.prototype.Ua = function () {
        return this.c || (this.c = xn(this).mb())
    };
    tn.prototype.Va = function () {
        return null != this.a ? this.a : this.a = xn(this).wb()
    };
    tn.prototype.Pc = getterFor("g");
    tn.prototype.sd = function () {
        return xn(this).Xa()
    };
    tn.prototype.sa = function () {
        return xn(this).sa()
    };
    tn.prototype.Na = function () {
        return new an(this.Ga(), this.Ha(), this.Ua(), this.Va())
    };
    tn.prototype.select = function () {
        xn(this).select(this.g)
    };
    tn.prototype.pf = function () {
        return new yn(this)
    };

    function yn(a) {
        Q.call(this);
        this.a = a.Pc() ? a.Ua() : a.Ga();
        this.f = a.Pc() ? a.Va() : a.Ha();
        this.c = Ym(a);
        this.g = Zm(a)
    }
    D(yn, Sm);
    yn.prototype.b = function () {
        return vn(this.a, this.f, this.c, this.g)
    };
    yn.prototype.F = function () {
        yn.m.F.call(this);
        this.c = this.a = null
    };

    function zn() {}
    D(zn, Vm);

    function An() {
        this.c = this.b = this.a = null
    }
    D(An, zn);

    function Bn(a) {
            var b = new An;
            b.a = a;
            return b
        }
        //u = An.prototype;
    An.prototype.ld = function () {
        return this.a || document.body.createControlRange()
    };
    An.prototype.Hc = function () {
        return this.a ? this.a.length : 0
    };
    An.prototype.ac = function (a) {
        a = this.a.item(a);
        return un(pn(a), void 0)
    };
    An.prototype.rd = function () {
        return kg.apply(null, Cn(this))
    };
    An.prototype.Ga = function () {
        return Dn(this)[0]
    };
    An.prototype.Ha = func_ValueOf(0);
    An.prototype.Ua = function () {
        var a = Dn(this),
            b = bd(a);
        return id(a, function (a) {
            return gg(a, b)
        })
    };
    An.prototype.Va = function () {
        return this.Ua().childNodes.length
    };

    function Cn(a) {
        if (!a.b && (a.b = [],
            a.a))
            for (var b = 0; b < a.a.length; b++)
                a.b.push(a.a.item(b));
        return a.b
    }

    function Dn(a) {
        a.c || (a.c = Cn(a).concat(),
            a.c.sort(function (a, c) {
                return a.sourceIndex - c.sourceIndex
            }));
        return a.c
    }
    An.prototype.sd = function () {
        return !this.a || !this.a.length
    };
    An.prototype.sa = func_ValueOf("");
    An.prototype.Na = function () {
        return new En(this)
    };
    An.prototype.select = function () {
        this.a && this.a.select()
    };
    An.prototype.pf = function () {
        return new Fn(this)
    };

    function Fn(a) {
        this.a = Cn(a)
    }
    D(Fn, Sm);
    Fn.prototype.b = function () {
        for (var a = (this.a.length ? N(this.a[0]) : document).body.createControlRange(), b = 0, c = this.a.length; b < c; b++)
            a.addElement(this.a[b]);
        return Bn(a)
    };
    Fn.prototype.F = function () {
        Fn.m.F.call(this);
        delete this.a
    };

    function En(a) {
        this.h = this.c = this.b = null;
        a && (this.h = Dn(a),
            this.b = this.h.shift(),
            this.c = bd(this.h) || this.b);
        Tm.call(this, this.b, !1, !0)
    }
    D(En, $m);
    En.prototype.s = getterFor("b");
    En.prototype.l = function () {
        return !this.depth && !this.h.length
    };
    En.prototype.next = function () {
        if (this.l())
            throw dj;
        if (!this.depth) {
            var a = this.h.shift();
            Um(this, a, 1, 1);
            return a
        }
        return En.m.next.call(this)
    };

    function Gn() {
        this.va = null;
        this.a = [];
        this.b = [];
        this.f = this.c = null
    }
    D(Gn, zn);

    function Hn(a) {
            var b = new Gn;
            b.b = a;
            b.a = fd(a, function (a) {
                return a.ld()
            });
            return b
        }
        //u = Gn.prototype;
    Gn.prototype.ld = function () {
        return this.a[0]
    };
    Gn.prototype.Hc = function () {
        return this.a.length
    };
    Gn.prototype.ac = function (a) {
        this.b[a] || (this.b[a] = un(sn(this.a[a]), void 0));
        return this.b[a]
    };
    Gn.prototype.rd = function () {
        if (!this.f) {
            for (var a = [], b = 0, c = this.Hc(); b < c; b++)
                a.push(this.ac(b).rd());
            this.f = kg.apply(null, a)
        }
        return this.f
    };

    function In(a) {
        a.c || (a.c = Xm(a),
            a.c.sort(function (a, c) {
                var b = a.Ga();
                a = a.Ha();
                var e = c.Ga();
                c = c.Ha();
                return b == e && a == c ? 0 : wn(b, a, e, c) ? 1 : -1
            }));
        return a.c
    }
    Gn.prototype.Ga = function () {
        return In(this)[0].Ga()
    };
    Gn.prototype.Ha = function () {
        return In(this)[0].Ha()
    };
    Gn.prototype.Ua = function () {
        return bd(In(this)).Ua()
    };
    Gn.prototype.Va = function () {
        return bd(In(this)).Va()
    };
    Gn.prototype.sd = function () {
        return 0 == this.a.length || 1 == this.a.length && this.ac(0).sd()
    };
    Gn.prototype.sa = function () {
        return fd(Xm(this), function (a) {
            return a.sa()
        }).join("")
    };
    Gn.prototype.Na = function () {
        return new Jn(this)
    };
    Gn.prototype.select = function () {
        var a = Wm(Rf(N(G ? this.rd() : this.Ga())));
        a.removeAllRanges();
        for (var b = 0, c = this.Hc(); b < c; b++)
            a.addRange(this.ac(b).ld())
    };
    Gn.prototype.pf = function () {
        return new Kn(this)
    };

    function Kn(a) {
        this.a = fd(Xm(a), function (a) {
            return a.pf()
        })
    }
    D(Kn, Sm);
    Kn.prototype.b = function () {
        var a = fd(this.a, function (a) {
            return a.restore()
        });
        return Hn(a)
    };
    Kn.prototype.F = function () {
        Kn.m.F.call(this);
        dd(this.a, function (a) {
            a.M()
        });
        delete this.a
    };

    function Jn(a) {
        this.b = null;
        this.c = 0;
        a && (this.b = fd(In(a), function (a) {
            return fj(a)
        }));
        Tm.call(this, a ? this.s() : null, !1, !0)
    }
    D(Jn, $m);
    Jn.prototype.s = function () {
        return this.b[0].s()
    };
    Jn.prototype.l = function () {
        return this.b[this.c].l()
    };
    Jn.prototype.next = function () {
        try {
            var a = this.b[this.c],
                b = a.next();
            Um(this, a.node, a.a, a.depth);
            return b
        } catch (c) {
            if (c !== dj || this.b.length - 1 == this.c)
                throw c;
            this.c++;
            return this.next()
        }
    };

    function Ln() {
        var a = Wm(window);
        return a && Mn(a)
    }

    function Mn(a) {
        var b = !1;
        if (a.createRange)
            try {
                var c = a.createRange()
            } catch (e) {
                return null
            } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new Gn;
                c = 0;
                for (var d = a.rangeCount; c < d; c++)
                    b.a.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = wn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else
            return null;
        return (a = c) && a.addElement ? Bn(a) : un(sn(a), b)
    }

    function wn(a, b, c, d) {
        if (a == c)
            return d < b;
        var e;
        if (1 == a.nodeType && b)
            if (e = a.childNodes[b])
                a = e,
                b = 0;
            else if (gg(a, c))
            return !0;
        if (1 == c.nodeType && d)
            if (e = c.childNodes[d])
                c = e,
                d = 0;
            else if (gg(c, a))
            return !1;
        return 0 < (hg(a, c) || b - d)
    };

    function Nn() {
        var a = Ln();
        return null != a && !a.sd() && 0 < a.sa().length
    };

    function On() {
        this.b = []
    }
    D(On, ji);
    qc(On);

    function Pn(a, b) {
            var c = a.b[b];
            if (!c) {
                switch (b) {
                case 0:
                    c = a.ea() + "-highlight";
                    break;
                case 1:
                    c = a.ea() + "-checkbox";
                    break;
                case 2:
                    c = a.ea() + "-content"
                }
                a.b[b] = c
            }
            return c
        }
        //u = On.prototype;
    On.prototype.bc = func_ValueOf("menuitem");
    On.prototype.D = function (a) {
        var b = a.b.D(f, mi(this, a).join(" "), Qn(this, a.da(), a.b));
        Rn(this, a, b, !!(a.ba & 8) || !!(a.ba & 16));
        return b
    };
    On.prototype.zb = function (a) {
        return a && a.firstChild
    };
    On.prototype.Pa = function (a, b) {
        var c = dg(b),
            d = Pn(this, 2);
        c && Ge(c, d) || b.appendChild(Qn(this, b.childNodes, a.b));
        Ge(b, "goog-option") && (a.ta(16, !0),
            a && b && Rn(this, a, b, !0));
        return On.m.Pa.call(this, a, b)
    };
    On.prototype.Jc = function (a, b) {
        var c = this.zb(a),
            d = Sn(this, a) ? c.firstChild : null;
        On.m.Jc.call(this, a, b);
        d && !Sn(this, a) && c.insertBefore(d, c.firstChild || null)
    };

    function Qn(a, b, c) {
        a = Pn(a, 2);
        return c.D(f, a, b)
    }

    function Sn(a, b) {
        return (b = a.zb(b)) ? (b = b.firstChild,
            a = Pn(a, 1), !!b && fg(b) && Ge(b, a)) : !1
    }

    function Rn(a, b, c, d) {
        qi(a, c, b.Gc());
        ri(a, b, c);
        d != Sn(a, c) && (d ? L(c, "goog-option") : Ie(c, "goog-option"),
            c = a.zb(c),
            d ? (a = Pn(a, 1),
                c.insertBefore(b.b.D(f, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    }
    On.prototype.Ec = function (a) {
        switch (a) {
        case 2:
            return Pn(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return On.m.Ec.call(this, a)
        }
    };
    On.prototype.pd = function (a) {
        var b = Pn(this, 0);
        switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return On.m.pd.call(this, a)
        }
    };
    On.prototype.ea = func_ValueOf("goog-menuitem");

    function Tn(a, b, c, d) {
        W.call(this, a, d || On.Y(), c);
        this.za(b)
    }
    D(Tn, W);
    //u = Tn.prototype;
    Tn.prototype.Ba = function () {
        var a = this.pa;
        return null != a ? a : this.gb()
    };
    Tn.prototype.za = setterFor("pa");
    Tn.prototype.ta = function (a, b) {
        Tn.m.ta.call(this, a, b);
        switch (a) {
        case 8:
            this.W & 16 && !b && Pi(this, 16, !1) && Si(this, 16, !1);
            (a = this.j()) && this && a && Rn(this.a, this, a, b);
            break;
        case 16:
            (a = this.j()) && this && a && Rn(this.a, this, a, b)
        }
    };
    Tn.prototype.gb = function () {
        var a = this.da();
        return isArray(a) ? (a = fd(a, function (a) {
                return fg(a) && (Ge(a, "goog-menuitem-accel") || Ge(a, "goog-menuitem-mnemonic-separator")) ? "" : ug(a)
            }).join(""),
            Gc(a)) : Tn.m.gb.call(this)
    };
    Tn.prototype.fc = function (a) {
        var b = this.xb();
        if (b) {
            var c = b.K;
            b.K = null;
            if (b = c && isNumber(a.clientX))
                b = new M(a.clientX, a.clientY),
                b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b)
                return
        }
        Tn.m.fc.call(this, a)
    };
    Tn.prototype.Lc = function (a) {
        return a.keyCode == this.Fg && this.oc(a) ? !0 : Tn.m.Lc.call(this, a)
    };
    Tn.prototype.Wh = getterFor("Fg");
    Hi("goog-menuitem", function () {
        return new Tn(null)
    });
    Tn.prototype.Gc = function () {
        return this.ba & 16 ? "menuitemcheckbox" : this.ba & 8 ? "menuitemradio" : Tn.m.Gc.call(this)
    };
    Tn.prototype.xb = function () {
        return W.prototype.xb.call(this)
    };
    Tn.prototype.nd = function () {
        return W.prototype.nd.call(this)
    };

    function Un(a) {
        this.a = a
    }
    qc(Un);

    function Vn(a, b) {
            a && (a.tabIndex = b ? 0 : -1)
        }
        //u = Un.prototype;
    Un.prototype.D = function (a) {
        return a.b.D(f, Wn(this, a).join(" "))
    };
    Un.prototype.Ae = function (a) {
        return a.tagName == f
    };

    function Xn(a, b, c) {
        c.id && Zh(b, c.id);
        var d = a.ud(),
            e = !1,
            g = Fe(c);
        g && dd(g, function (a) {
            a == d ? e = !0 : a && (a == d + ba ? b.oa(!1) : a == d + "-horizontal" ? Yn(b, "horizontal") : a == d + "-vertical" && Yn(b, "vertical"))
        }, a);
        e || L(c, d);
        Zn(a, b, c);
        return c
    }

    function Zn(a, b, c) {
        if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c;) {
                e = d.nextSibling;
                if (1 == d.nodeType) {
                    var g = a.ve(d);
                    g && (g.A = d,
                        b.isEnabled() || g.oa(!1),
                        b.uc(g, fi(b), void 0),
                        di(g, d))
                } else
                    d.nodeValue && "" != trimString(d.nodeValue) || c.removeChild(d);
                d = e
            }
    }
    Un.prototype.ve = function (a) {
        a: {
            a = Fe(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (d = d in Ki ? Ki[d]() : null) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    };
    Un.prototype.Be = function (a) {
        a = a.j();
        Rg(a, !0, H);
        G && (a.hideFocus = !0);
        var b = this.a;
        b && bh(a, b)
    };
    Un.prototype.ud = func_ValueOf("goog-container");

    function Wn(a, b) {
        a = a.ud();
        var c = [a, b.Tb == "horizontal" ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + "-disabled");
        return c
    };

    function $n() {}
    D($n, ji);
    qc($n);
    $n.prototype.D = function (a) {
        return a.b.D(f, this.ea())
    };
    $n.prototype.Pa = function (a, b) {
        b.id && Zh(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.D(a);
            $f(b, c);
            bg(c)
        } else
            L(b, this.ea());
        return b
    };
    $n.prototype.Jc = makeEmptyFunc();
    $n.prototype.ea = func_ValueOf("goog-menuseparator");

    function ao(a, b) {
        W.call(this, null, a || $n.Y(), b);
        this.ta(1, !1);
        this.ta(2, !1);
        this.ta(4, !1);
        this.ta(32, !1);
        this.W = 1
    }
    D(ao, W);
    ao.prototype.P = function () {
        ao.m.P.call(this);
        bh(this.j(), "separator")
    };
    Hi("goog-menuseparator", function () {
        return new ao
    });

    function bo(a) {
        this.a = a || "menu"
    }
    D(bo, Un);
    qc(bo);
    //u = bo.prototype;
    bo.prototype.Ae = function (a) {
        return "UL" == a.tagName || bo.m.Ae.call(this, a)
    };
    bo.prototype.ve = function (a) {
        return "HR" == a.tagName ? new ao : bo.m.ve.call(this, a)
    };
    bo.prototype.yc = function (a, b) {
        return gg(a.j(), b)
    };
    bo.prototype.ud = func_ValueOf("goog-menu");
    bo.prototype.Be = function (a) {
        bo.m.Be.call(this, a);
        ch(a.j(), "haspopup", "true")
    };

    function co(a, b, c) {
        this.c = a;
        this.f = b;
        this.s = c
    }
    D(co, ml);
    co.prototype.b = function (a, b, c) {
        il(this.c, this.f, a, b, void 0, c, this.s)
    };

    function eo(a, b, c, d) {
        co.call(this, a, b);
        this.l = c ? 5 : 0;
        this.g = d || void 0
    }
    D(eo, co);
    eo.prototype.h = setterFor("l");
    eo.prototype.b = function (a, b, c, d) {
        var e = il(this.c, this.f, a, b, null, c, 10, d, this.g);
        if (e & 496) {
            var g = fo(e, this.f);
            b = fo(e, b);
            e = il(this.c, g, a, b, null, c, 10, d, this.g);
            e & 496 && (g = fo(e, g),
                b = fo(e, b),
                il(this.c, g, a, b, null, c, this.l, d, this.g))
        }
    };

    function fo(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    };

    function go(a, b) {
        this.a = a instanceof M ? a : new M(a, b)
    }
    D(go, ml);
    go.prototype.b = function (a, b, c, d) {
        var e = N(a);
        var g = e.body;
        e = e.documentElement;
        e = new M(g.scrollLeft || e.scrollLeft, g.scrollTop || e.scrollTop);
        g = this.a.x + e.x;
        e = this.a.y + e.y;
        var h = jl(a);
        g -= h.x;
        e -= h.y;
        ll(new M(g, e), a, b, c, null, null, d)
    };

    function ho(a, b) {
        go.call(this, a, b)
    }
    D(ho, go);
    ho.prototype.c = 0;
    ho.prototype.h = setterFor("c");
    ho.prototype.b = function (a, b, c, d) {
        var e = Fg(a);
        e = Ig(e);
        var g = Qf(Ef(a).a);
        g = new M(this.a.x + g.scrollLeft, this.a.y + g.scrollTop);
        var h = b,
            k = ll(g, a, h, c, e, 10, d);
        if (0 != (k & 496)) {
            if (k & 16 || k & 32)
                h ^= 4;
            if (k & 64 || k & 128)
                h ^= 1;
            k = ll(g, a, h, c, e, 10, d);
            0 != (k & 496) && ll(g, a, b, c, e, this.c, d)
        }
    };

    function io(a, b, c) {
        T.call(this, c);
        this.yb = b || Un.Y();
        this.Tb = a || "vertical"
    }
    D(io, T);
    //u = io.prototype;
    io.prototype.kc = null;
    io.prototype.Ic = null;
    io.prototype.yb = null;
    io.prototype.Tb = null;
    io.prototype.ha = !0;
    io.prototype.Mb = !0;
    io.prototype.Jb = !0;
    io.prototype.ja = -1;
    io.prototype.na = null;
    io.prototype.lc = !1;
    io.prototype.kb = null;

    function jo(a) {
        return a.kc || a.j()
    }

    function ko(a, b) {
        if (a.Jb) {
            var c = jo(a),
                d = a.V;
            a.kc = b;
            var e = jo(a);
            d && (a.kc = c,
                lo(a, !1),
                a.kc = b,
                Ai(mo(a), e),
                lo(a, !0))
        } else
            throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    }

    function mo(a) {
        return a.Ic || (a.Ic = new zi(jo(a)))
    }
    io.prototype.D = function () {
        this.A = this.yb.D(this)
    };
    io.prototype.td = function () {
        return this.j()
    };
    io.prototype.ze = function (a) {
        return this.yb.Ae(a)
    };
    io.prototype.T = function (a) {
        this.A = Xn(this.yb, this, a);
        a.style.display == "none" && (this.ha = !1)
    };
    io.prototype.P = function () {
        io.m.P.call(this);
        ei(this, function (a) {
            a.V && no(this, a)
        }, this);
        var a = this.j();
        this.yb.Be(this);
        this.L(this.ha, !0);
        U(this).w(this, "enter", this.Je).w(this, "highlight", this.Oc).w(this, "unhighlight", this.Ne).w(this, "open", this.ui).w(this, "close", this.hi).w(a, "mousedown", this.Zh).w(N(a), "mouseup", this.ji).w(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.fi);
        this.Jb && lo(this, !0)
    };

    function lo(a, b) {
        var c = U(a),
            d = jo(a);
        b ? c.w(d, "focus", a.bg).w(d, "blur", a.vd).w(mo(a), "key", a.Ia) : c.ca(d, "focus", a.bg).ca(d, "blur", a.vd).ca(mo(a), "key", a.Ia)
    }
    io.prototype.$ = function () {
        this.Db(-1);
        this.na && Ti(this.na, !1);
        this.lc = !1;
        io.m.$.call(this)
    };
    io.prototype.F = function () {
        io.m.F.call(this);
        this.Ic && (this.Ic.M(),
            this.Ic = null);
        this.yb = this.na = this.kb = this.kc = null
    };
    io.prototype.Je = func_ValueOf(!0);
    io.prototype.Oc = function (a) {
        var b = ii(this, a.target);
        if (-1 < b && b != this.ja) {
            var c = oo(this);
            c && Ri(c, !1);
            this.ja = b;
            c = oo(this);
            this.lc && Qi(c, !0);
            this.na && c != this.na && (c.ba & 64 ? Ti(c, !0) : Ti(this.na, !1))
        }
        b = this.j();
        null != a.target.j() && ch(b, "activedescendant", a.target.j().id)
    };
    io.prototype.Ne = function (a) {
        a.target == oo(this) && (this.ja = -1);
        this.j().removeAttribute("aria-activedescendant")
    };
    io.prototype.ui = function (a) {
        (a = a.target) && a != this.na && a.xb() == this && (this.na && Ti(this.na, !1),
            this.na = a)
    };
    io.prototype.hi = function (a) {
        a.target == this.na && (this.na = null);
        var b = this.j(),
            c = a.target.j();
        b && a.target.W & 2 && c && (a = "",
            c && (a = c.id),
            ch(b, "activedescendant", a))
    };
    io.prototype.Zh = function (a) {
        this.Mb && (this.lc = !0);
        var b = jo(this);
        b && qg(b) ? b.focus() : a.b()
    };
    io.prototype.ji = function () {
        this.lc = !1
    };
    io.prototype.fi = function (a) {
        a: {
            var b = a.target;
            if (this.kb)
                for (var c = this.j(); b && b !== c;) {
                    var d = b.id;
                    if (d in this.kb) {
                        b = this.kb[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b)
            switch (a.type) {
            case "mousedown":
                b.escapeHTML(a);
                break;
            case "mouseup":
                b.fc(a);
                break;
            case "mouseover":
                b.Fe(a);
                break;
            case "mouseout":
                b.Me(a);
                break;
            case "contextmenu":
                b.Nc(a)
            }
    };
    io.prototype.bg = makeEmptyFunc();
    io.prototype.vd = function () {
        this.Db(-1);
        this.lc = !1;
        this.na && Ti(this.na, !1)
    };
    io.prototype.Ia = function (a) {
        return this.isEnabled() && this.N() && (0 != fi(this) || this.kc) && this.Ce(a) ? (a.b(),
            a.stopPropagation(), !0) : !1
    };
    io.prototype.Ce = function (a) {
        var b = oo(this);
        if (b && typeof b.Ia == n && b.Ia(a) || this.na && this.na != b && typeof this.na.Ia == n && this.na.Ia(a))
            return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
            return !1;
        switch (a.keyCode) {
        case 27:
            if (this.Jb)
                jo(this).blur();
            else
                return !1;
            break;
        case 36:
            po(this);
            break;
        case 35:
            qo(this);
            break;
        case 38:
            if (this.Tb == "vertical")
                ro(this);
            else
                return !1;
            break;
        case 37:
            if (this.Tb == "horizontal")
                hi(this) ? so(this) : ro(this);
            else
                return !1;
            break;
        case 40:
            if (this.Tb == "vertical")
                so(this);
            else
                return !1;
            break;
        case 39:
            if (this.Tb == "horizontal")
                hi(this) ? ro(this) : so(this);
            else
                return !1;
            break;
        default:
            return !1
        }
        return !0
    };

    function no(a, b) {
        var c = b.j();
        c = c.id || (c.id = Yh(b));
        a.kb || (a.kb = {});
        a.kb[c] = b
    }
    io.prototype.uc = function (a, b, c) {
        a.Vc |= 2;
        a.Vc |= 64;
        a.ta(32, !1);
        Mi(a, !1);
        var d = a.xb() == this ? ii(this, a) : -1;
        io.m.uc.call(this, a, b, c);
        a.V && this.V && no(this, a);
        a = d; - 1 == a && (a = fi(this));
        a == this.ja ? this.ja = Math.min(fi(this) - 1, b) : a > this.ja && b <= this.ja ? this.ja++ : a < this.ja && b > this.ja && this.ja--
    };
    io.prototype.removeChild = function (a, b) {
        if (a = isString(a) ? bi(this, a) : a) {
            var c = ii(this, a); - 1 != c && (c == this.ja ? (Ri(a, !1),
                this.ja = -1) : c < this.ja && this.ja--);
            var d = a.j();
            d && d.id && this.kb && (c = this.kb,
                d = d.id,
                d in c && delete c[d])
        }
        a = io.m.removeChild.call(this, a, b);
        Mi(a, !0);
        return a
    };

    function Yn(a, b) {
        if (a.j())
            throw Error(ja);
        a.Tb = b
    }
    io.prototype.N = getterFor("ha");
    io.prototype.L = function (a, b) {
        if (b || this.ha != a && this.dispatchEvent(a ? "show" : "hide")) {
            this.ha = a;
            var c = this.j();
            c && (P(c, a),
                this.Jb && Vn(jo(this), this.Mb && this.ha),
                b || this.dispatchEvent(this.ha ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    io.prototype.isEnabled = getterFor("Mb");
    io.prototype.oa = function (a) {
        this.Mb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Mb = !0,
                ei(this, function (a) {
                    a.ih ? delete a.ih : a.oa(!0)
                })) : (ei(this, function (a) {
                    a.isEnabled() ? a.oa(!1) : a.ih = !0
                }),
                this.lc = this.Mb = !1),
            this.Jb && Vn(jo(this), a && this.ha))
    };

    function to(a, b) {
        b != a.Jb && a.V && lo(a, b);
        a.Jb = b;
        a.Mb && a.ha && Vn(jo(a), b)
    }
    io.prototype.Db = function (a) {
        (a = gi(this, a)) ? Ri(a, !0): -1 < this.ja && Ri(oo(this), !1)
    };

    function oo(a) {
        return gi(a, a.ja)
    }

    function po(a) {
        uo(a, function (a, c) {
            return (a + 1) % c
        }, fi(a) - 1)
    }

    function qo(a) {
        uo(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    }

    function so(a) {
        uo(a, function (a, c) {
            return (a + 1) % c
        }, a.ja)
    }

    function ro(a) {
        uo(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.ja)
    }

    function uo(a, b, c) {
        c = 0 > c ? ii(a, a.na) : c;
        var d = fi(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var g = gi(a, c);
            if (g && a.Nf(g)) {
                a.Db(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    }
    io.prototype.Nf = function (a) {
        return a.N() && a.isEnabled() && !!(a.ba & 2)
    };

    function vo() {}
    D(vo, ji);
    qc(vo);
    vo.prototype.ea = func_ValueOf("goog-menuheader");

    function wo(a, b, c) {
        W.call(this, a, c || vo.Y(), b);
        this.ta(1, !1);
        this.ta(2, !1);
        this.ta(4, !1);
        this.ta(32, !1);
        this.W = 1
    }
    D(wo, W);
    Hi("goog-menuheader", function () {
        return new wo(null)
    });
    Hi("goog-menuseparator", function () {
        return new ao
    });

    function xo(a, b) {
        io.call(this, "vertical", b || bo.Y(), a);
        to(this, !1)
    }
    D(xo, io);
    //u = xo.prototype;
    xo.prototype.fe = !0;
    xo.prototype.yc = function (a) {
        if (this.yb.yc(this, a))
            return !0;
        for (var b = 0, c = fi(this); b < c; b++) {
            var d = gi(this, b);
            if (typeof d.yc == n && d.yc(a))
                return !0
        }
        return !1
    };
    xo.prototype.L = function (a, b, c) {
        (b = xo.m.L.call(this, a, b)) && a && this.V && this.fe && jo(this).focus();
        a && c && isNumber(c.clientX) ? this.K = new M(c.clientX, c.clientY) : this.K = null;
        return b
    };
    xo.prototype.Je = function (a) {
        this.fe && jo(this).focus();
        return xo.m.Je.call(this, a)
    };
    xo.prototype.Nf = function (a) {
        return a.isEnabled() && a.N() && !!(a.ba & 2)
    };
    xo.prototype.T = function (a) {
        for (var b = this.yb, c = Jf(this.b.a, f, b.ud() + "-content", a), d = c.length, e = 0; e < d; e++)
            Zn(b, this, c[e]);
        xo.m.T.call(this, a)
    };
    xo.prototype.Ce = function (a) {
        var b = xo.m.Ce.call(this, a);
        b || ei(this, function (c) {
            !b && c.Wh && c.Fg == a.keyCode && (this.isEnabled() && this.Db(ii(this, c)),
                b = c.Ia(a))
        }, this);
        return b
    };
    xo.prototype.Db = function (a) {
        xo.m.Db.call(this, a);
        var b = gi(this, a);
        if (b) {
            a = this.j() || Qf(document);
            var c = b.j();
            b = a || Qf(document);
            var d = Jg(c),
                e = Jg(b),
                g = Wg(b);
            if (b == Qf(document)) {
                var h = d.x - b.scrollLeft;
                d = d.y - b.scrollTop;
                G && !ee(10) && (h += g.left,
                    d += g.top)
            } else
                h = d.x - e.x - g.left,
                d = d.y - e.y - g.top;
            c = Mg(c);
            g = b.clientHeight - c.height;
            e = b.scrollLeft;
            var k = b.scrollTop;
            e += Math.min(h, Math.max(h - (b.clientWidth - c.width), 0));
            k += Math.min(d, Math.max(d - g, 0));
            b = new M(e, k);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    };

    function yo(a, b) {
        xo.call(this, a, b);
        this.fe = !0;
        to(this, !0);
        this.L(!1, !0);
        this.a = new hj
    }
    D(yo, xo);
    //u = yo.prototype;
    yo.prototype.gh = !1;
    yo.prototype.xg = 0;
    yo.prototype.Fa = null;
    yo.prototype.T = function (a) {
        yo.m.T.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && zo(this, this.b.j(a), 1)
    };
    yo.prototype.P = function () {
        yo.m.P.call(this);
        this.a.forEach(this.bd, this);
        var a = U(this);
        a.w(this, "action", this.cf);
        a.w(this.b.a, "mousedown", this.dj, !0)
    };

    function zo(a, b, c, d, e, g) {
        b && jj(a.a, uc(b)) || (c = a.ne(b, c, d, e, g),
            a.V && a.bd(c),
            b = zc(a.ej, b),
            a.j() && U(a).w(a.j(), "keydown", b))
    }
    yo.prototype.ej = function (a, b) {
        if (27 == b.keyCode)
            a.focus();
        else if (a = gi(this, this.ja)) {
            a = a.j();
            var c = new kh(b.a, a);
            c.target = a;
            if (32 == b.keyCode || 13 == b.keyCode)
                ph(a) ? Uh(a, "keydown", !1, c) : Kh(a, "keydown", !1, c);
            32 == b.keyCode && this.pb()
        }
    };
    yo.prototype.ne = function (a, b, c, d, e) {
        if (!a)
            return null;
        b = {
            A: a,
            $g: b,
            $i: c,
            Bc: d ? "contextmenu" : "mousedown",
            Ze: e
        };
        this.a.set(uc(a), b);
        return b
    };
    yo.prototype.bd = function (a) {
        U(this).w(a.A, a.Bc, this.Sd);
        a.Bc != "contextmenu" && U(this).w(a.A, "keydown", this.hj)
    };
    yo.prototype.hd = function () {
        if (this.V)
            for (var a = this.a.Sa(), b = 0; b < a.length; b++)
                this.pe(this.a.get(a[b]));
        lj(this.a)
    };
    yo.prototype.pe = function (a) {
        U(this).ca(a.A, a.Bc, this.Sd)
    };
    yo.prototype.yd = function (a, b, c) {
        b = isDefined(a.$g) ? new eo(a.A, a.$g, !0) : new ho(b, c);
        b.h && b.h(5);
        var d = a.$i;
        c = a.Ze;
        var e = a.A;
        a = this.N();
        var g;
        (g = this.N()) || (g = 150 > nowTime() - this.xg);
        g && this.gh ? this.pb() : (this.Fa = e || null,
            this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8,
                a || (this.j().style.visibility = "hidden"),
                P(this.j(), !0),
                b.b(this.j(), d, c),
                a || (this.j().style.visibility = "visible"),
                this.Db(-1),
                this.L(!0)))
    };
    yo.prototype.pb = function () {
        this.N() && (this.L(!1),
            this.N() || (this.xg = nowTime(),
                this.Fa = null))
    };
    yo.prototype.cf = function () {
        this.pb()
    };
    yo.prototype.Sd = function (a) {
        Ao(this, a)
    };
    yo.prototype.hj = function (a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Ao(this, a);
        40 == a.keyCode && po(this)
    };

    function Ao(a, b) {
        for (var c = a.a.Sa(), d = 0; d < c.length; d++) {
            var e = a.a.get(c[d]);
            if (e.A == b.currentTarget) {
                a.yd(e, b.clientX, b.clientY);
                b.b();
                b.stopPropagation();
                break
            }
        }
    }
    yo.prototype.dj = function (a) {
        this.N() && !this.yc(a.target) && this.pb()
    };
    yo.prototype.vd = function (a) {
        yo.m.vd.call(this, a);
        this.pb()
    };
    yo.prototype.F = function () {
        yo.m.F.call(this);
        this.a && (lj(this.a),
            delete this.a)
    };

    function Bo(a) {
        Th.call(this);
        this.A = a;
        a = G ? "focusout" : "blur";
        this.a = S(this.A, G ? "focusin" : "focus", this, !G);
        this.b = S(this.A, a, this, !G)
    }
    D(Bo, Th);
    Bo.prototype.handleEvent = function (a) {
        var b = new kh(a.a);
        b.type = a.type == "focusin" || a.type == "focus" ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    Bo.prototype.F = function () {
        Bo.m.F.call(this);
        Ih(this.a);
        Ih(this.b);
        delete this.A
    };

    function Co(a, b) {
        this.a = a instanceof M ? a : new M(a, b)
    }
    D(Co, ml);
    Co.prototype.b = function (a, b, c, d) {
        il(Fg(a), 0, a, b, this.a, c, null, d)
    };

    function Do(a) {
        this.a = new hj;
        a && Eo(this, a)
    }

    function Fo(a) {
            var b = typeof a;
            return b == "object" && a || b == n ? "o" + uc(a) : b.substr(0, 1) + a
        }
        //u = Do.prototype;
    Do.prototype.add = function (a) {
        this.a.set(Fo(a), a)
    };

    function Eo(a, b) {
        b = mj(b);
        for (var c = b.length, d = 0; d < c; d++)
            a.add(b[d])
    }
    Do.prototype.remove = function (a) {
        return this.a.remove(Fo(a))
    };
    Do.prototype.contains = function (a) {
        return jj(this.a, Fo(a))
    };
    Do.prototype.Ca = function () {
        return this.a.Ca()
    };
    Do.prototype.Na = function () {
        return this.a.Na(!1)
    };

    function Go(a, b, c) {
        this.ia = c || (a ? Ef(Gf(document, a)) : Ef());
        wm.call(this, this.ia.D(f, {
            style: "position:absolute;display:none;"
        }));
        this.Hb = new M(1, 1);
        this.B = new Do;
        this.G = null;
        a && Ho(this, a);
        null != b && this.Qa(b)
    }
    D(Go, wm);
    var Io = [];
    //u = Go.prototype;
    Go.prototype.Aa = null;
    Go.prototype.className = "goog-tooltip";
    Go.prototype.Yg = 500;
    Go.prototype.ug = 0;

    function Ho(a, b) {
        b = Gf(document, b);
        a.B.add(b);
        S(b, "mouseover", a.He, !1, a);
        S(b, "mouseout", a.ec, !1, a);
        S(b, "mousemove", a.lg, !1, a);
        S(b, "focus", a.eg, !1, a);
        S(b, "blur", a.ec, !1, a)
    }

    function Jo(a, b) {
        if (b)
            b = Gf(document, b),
            Ko(a, b),
            a.B.remove(b);
        else {
            for (var c = a.B.Ca(), d = 0; b = c[d]; d++)
                Ko(a, b);
            lj(a.B.a)
        }
    }

    function Ko(a, b) {
        Hh(b, "mouseover", a.He, !1, a);
        Hh(b, "mouseout", a.ec, !1, a);
        Hh(b, "mousemove", a.lg, !1, a);
        Hh(b, "focus", a.eg, !1, a);
        Hh(b, "blur", a.ec, !1, a)
    }
    Go.prototype.Qa = function (a) {
        ng(this.j(), a)
    };
    Go.prototype.dc = function (a) {
        var b = this.j();
        b && bg(b);
        Go.m.dc.call(this, a);
        a ? (b = this.ia.a.body,
            b.insertBefore(a, b.lastChild),
            eh(this.G),
            this.G = new Bo(this.j()),
            dh(this, zc(eh, this.G)),
            S(this.G, "focusin", this.Xb, void 0, this),
            S(this.G, "focusout", this.Wd, void 0, this)) : (eh(this.G),
            this.G = null)
    };
    Go.prototype.sa = function () {
        return sg(this.j())
    };

    function Lo(a) {
        return a.J ? a.N() ? 4 : 1 : a.fa ? 3 : a.N() ? 2 : 0
    }
    Go.prototype.Ge = function () {
        if (!sm.prototype.Ge.call(this))
            return !1;
        if (this.b)
            for (var a, b = 0; a = Io[b]; b++)
                gg(a.j(), this.b) || a.L(!1);
        jd(Io, this) || Io.push(this);
        a = this.j();
        a.className = this.className;
        this.Xb();
        S(a, "mouseover", this.Gd, !1, this);
        S(a, "mouseout", this.Fd, !1, this);
        Mo(this);
        return !0
    };
    Go.prototype.ff = function () {
        kd(Io, this);
        for (var a = this.j(), b, c = 0; b = Io[c]; c++)
            b.b && gg(a, b.b) && b.L(!1);
        this.$c && this.$c.Wd();
        Hh(a, "mouseover", this.Gd, !1, this);
        Hh(a, "mouseout", this.Fd, !1, this);
        this.b = void 0;
        0 == Lo(this) && (this.Ma = !1);
        sm.prototype.ff.call(this)
    };
    Go.prototype.af = function (a, b) {
        this.b == a && this.B.contains(this.b) && (this.Ma || !this.Jf ? (this.L(!1),
            this.N() || (this.b = a,
                this.s = b || new No(Bf(this.Hb)),
                this.N() && this.ob(),
                this.L(!0))) : this.b = void 0);
        this.J = void 0
    };
    Go.prototype.Zi = function (a) {
        this.fa = void 0;
        if (a == this.b) {
            a = this.ia;
            a: {
                var b = a.a;
                try {
                    var c = b && b.activeElement;
                    break a
                } catch (d) {}
                c = null
            }
            c = c && this.j() && a.contains(this.j(), c);
            null != this.Aa && (this.Aa == this.j() || this.B.contains(this.Aa)) || c || this.Zc && this.Zc.Aa || this.L(!1)
        }
    };

    function Oo(a, b) {
        var c = Pf(a.ia.a);
        a.Hb.x = b.clientX + c.x;
        a.Hb.y = b.clientY + c.y
    }
    Go.prototype.He = function (a) {
        var b = Po(this, a.target);
        this.Aa = b;
        this.Xb();
        b != this.b && (this.b = b,
            Qo(this, b),
            Ro(this),
            Oo(this, a))
    };

    function Po(a, b) {
        try {
            for (; b && !a.B.contains(b);)
                b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    }
    Go.prototype.lg = function (a) {
        Oo(this, a);
        this.Ma = !0
    };
    Go.prototype.eg = function (a) {
        this.Aa = a = Po(this, a.target);
        this.Ma = !0;
        if (this.b != a) {
            this.b = a;
            var b = new So(this.Aa);
            this.Xb();
            Qo(this, a, b);
            Ro(this)
        }
    };

    function Ro(a) {
        if (a.b)
            for (var b, c = 0; b = Io[c]; c++)
                gg(b.j(), a.b) && (b.Zc = a,
                    a.$c = b)
    }
    Go.prototype.ec = function (a) {
        var b = Po(this, a.target),
            c = Po(this, a.relatedTarget);
        b != c && (b == this.Aa && (this.Aa = null),
            Mo(this),
            this.Ma = !1, !this.N() || a.relatedTarget && gg(this.j(), a.relatedTarget) ? this.b = void 0 : this.Wd())
    };
    Go.prototype.Gd = function () {
        var a = this.j();
        this.Aa != a && (this.Xb(),
            this.Aa = a)
    };
    Go.prototype.Fd = function (a) {
        var b = this.j();
        this.Aa != b || a.relatedTarget && gg(b, a.relatedTarget) || (this.Aa = null,
            this.Wd())
    };

    function Qo(a, b, c) {
        a.J || (a.J = bl(C(a.af, a, b, c), a.Yg))
    }

    function Mo(a) {
        a.J && (cl(a.J),
            a.J = void 0)
    }
    Go.prototype.Wd = function () {
        2 == Lo(this) && (this.fa = bl(C(this.Zi, this, this.b), this.ug))
    };
    Go.prototype.Xb = function () {
        this.fa && (cl(this.fa),
            this.fa = void 0)
    };
    Go.prototype.F = function () {
        this.L(!1);
        Mo(this);
        Jo(this);
        this.j() && bg(this.j());
        this.Aa = null;
        delete this.ia;
        Go.m.F.call(this)
    };

    function No(a, b) {
        Co.call(this, a, b)
    }
    D(No, Co);
    No.prototype.b = function (a, b, c) {
        b = Fg(a);
        b = Ig(b);
        c = c ? new xg(c.top + 10, c.right, c.bottom, c.left + 10) : new xg(10, 0, 0, 10);
        ll(this.a, a, 8, c, b, 9) & 496 && ll(this.a, a, 8, c, b, 5)
    };

    function So(a) {
        co.call(this, a, 5)
    }
    D(So, co);
    So.prototype.b = function (a, b, c) {
        var d = new M(10, 0);
        il(this.c, this.f, a, b, d, c, 9) & 496 && il(this.c, 4, a, 1, d, c, 5)
    };

    function To(a, b, c) {
        yo.call(this, b, c);
        this.h = new hj;
        this.f = a || 5;
        this.l = null;
        this.o = !1;
        this.g = Array(this.f);
        this.H = Array(this.f);
        this.C = El.Y();
        this.va = Zl.Y();
        this.J = null;
        this.gh = !0
    }
    D(To, yo);
    var Uo = "";
    //u = To.prototype;
    To.prototype.D = function () {
        To.m.D.call(this);
        for (var a = 0; a < this.f; ++a) {
            var b = new Tn("");
            this.uc(b, fi(this), !0)
        }
    };
    To.prototype.ga = function (a) {
        To.m.ga.call(this, a);
        L(this.j(), "alt-menu")
    };
    To.prototype.uf = function (a) {
        a = this.h.get(uc(a));
        for (var b = 0; b < Y(a, 2) && b < this.f; ++b) {
            var c = gi(this, b);
            c.Ob(Em(Lm(a, b), 0));
            c.za(b);
            c.L(!0, !0)
        }
        for (; b < this.f; ++b)
            gi(this, b).L(!1)
    };

    function Vo(a, b, c) {
        a.h.set(uc(b), c);
        zo(a, b, 9, 8, !1, new xg(-2, 1, -2, 1))
    }
    To.prototype.hd = function () {
        To.m.hd.call(this);
        lj(this.h)
    };
    To.prototype.L = function (a, b) {
        var c = this.Fa;
        this.J = c;
        a && null != c ? (Wo(this, c),
            Kl(this.C, "altshow"),
            $l(this.va, 207)) : null != this.l && Pm(this.l, 0, 0);
        null != c && (a ? this.oe(c) : this.ke(c));
        b = To.m.L.call(this, a, b);
        a && null != this.j() && Rg(this.j(), !1);
        return b
    };
    To.prototype.gb = function () {
        if (null != this.J) {
            var a = sg(this.J);
            if (null != a)
                return a
        }
        return ""
    };
    To.prototype.pb = function () {
        To.m.pb.call(this);
        if (this.o)
            for (var a = 0; a < this.g.length; a++) {
                var b = this.g[a];
                cl(b.f);
                b.g();
                b.l(-1);
                b.g();
                b.L(!1)
            }
    };
    To.prototype.oe = function (a) {
        L(a, "trans-target");
        a.title = ""
    };
    To.prototype.ke = function (a) {
        Ie(a, "trans-target");
        a.title = Uo
    };
    To.prototype.Ia = function (a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode)
            return !1;
        var b = To.m.Ia.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = Pg(this.Fa.parentNode.parentNode),
                d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode)
                d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode)
                d = !0;
            if (this.ge(d) && (c = this.Fa, (c = d ? isDefined(c.nextElementSibling) ? c.nextElementSibling : eg(c.nextSibling, !0) : isDefined(c.previousElementSibling) ? c.previousElementSibling : eg(c.previousSibling, !1)) && c != this.Fa))
                return this.pb(),
                    this.Xg(d),
                    this.yd(c ? this.a.get(uc(c)) : null, 0, 0),
                    Xo(this),
                    a.b(),
                    a.stopPropagation(), !0
        }
        return b
    };
    To.prototype.yd = function (a, b, c) {
        Pg((a.A || this.Fa).parentNode.parentNode) ? O(this.j(), "direction", "rtl") : O(this.j(), "direction", "");
        if (this.o)
            for (var d = 0; d < this.g.length; d++)
                Yo(this, d),
                ng(this.g[d].c, "...");
        this.uf(a.A);
        To.m.yd.call(this, a, b, c)
    };

    function Zo(a, b, c) {
        !a.o || b >= a.f || "" == c || (ng(a.g[b].c, c),
            Yo(a, b))
    }

    function Yo(a, b) {
        il(gi(a, b).j(), 12, a.g[b].j(), 8, new M(1, 0))
    }
    To.prototype.Oc = function (a) {
        To.m.Oc.call(this, a);
        var b = this.Fa;
        null != b && (Kl(this.C, "altmenuhl"),
            $l(this.va, 209),
            Wo(this, b),
            a = this.od(a.target), -1 != a && a != this.f && (cl(this.H[a]),
                this.H[a] = bl(this.Xi, 300, this),
                this.o && (b = this.g[a],
                    Pg(this.Fa.parentNode.parentNode) ? (L(b.j(), "rtl"),
                        O(b.j(), "direction", "rtl")) : (Ie(b.j(), "rtl"),
                        O(b.j(), "direction", "")),
                    Yo(this, a),
                    cl(b.f),
                    0 == b.a ? b.f = bl(C(b.l, b, 1), 300) : b.l(1))))
    };
    To.prototype.Xi = function () {
        Kl(this.C, "altmenuhold");
        $l(this.va, 208)
    };
    To.prototype.Ne = function (a) {
        To.m.Ne.call(this, a);
        a = this.od(a.target); - 1 != a && a != this.f && (cl(this.H[a]),
            this.o && this.g[a].o())
    };
    To.prototype.od = function (a) {
        return ii(this, a)
    };
    To.prototype.ge = func_ValueOf(!0);
    To.prototype.Xg = makeEmptyFunc();
    To.prototype.ne = function (a, b, c, d, e) {
        (a = To.m.ne.call(this, a, b, c, d, e)) && a.Bc == "mousedown" && (a.Bc = "click");
        return a
    };
    To.prototype.bd = function (a) {
        To.m.bd.call(this, a);
        U(this).w(a.A, "mouseover", this.qg);
        U(this).w(a.A, "mouseout", this.Dd);
        U(this).w(a.A, "contextmenu", this.og);
        U(this).w(a.A, "mousemove", this.pg)
    };
    To.prototype.pe = function (a) {
        To.m.pe.call(this, a);
        U(this).ca(a.A, "mouseover", this.qg);
        U(this).ca(a.A, "mouseout", this.Dd);
        U(this).ca(a.A, "contextmenu", this.og);
        U(this).ca(a.A, "mousemove", this.pg)
    };

    function Wo(a, b) {
        if (null != a.l && (b = a.h.get(uc(b))) && (a = a.l,
            a.b))
            for (var c = a.A && (a.A.value || sg(a.A)), d = -1, e = -1, g = !1, h = 0; h < Y(a.b, 5); h++) {
                var k = Mm(a.b, h);
                if (0 != Y(k, 2) && (0 == Dm(k, 5) && (g = c.indexOf(Em(k, 4), e + 1),
                        0 <= g ? (d = g,
                            e = d + Em(k, 4).length,
                            g = !0) : g = !1),
                    Mm(a.b, h).Gb() == b.Gb())) {
                    if (g) {
                        c = [];
                        for (e = 0; e < Y(b, 3); ++e)
                            c.push({
                                Cc: d + Dm(new Im(Fm(b, 3, e)), 0),
                                zf: d + Dm(new Im(Fm(b, 3, e)), 1)
                            });
                        Pm(a, 0, 0, void 0, c)
                    } else
                        d = c.indexOf(Em(b, 0)),
                        0 <= d && Pm(a, d, d + Em(b, 0).length);
                    break
                }
            }
    }

    function $o(a, b) {
        b ? gj(a.a.Na(!1), function (a) {
            "" == this.b.ag(a.A) && (L(a.A, "trans-target-empty"),
                this.b.hb(a.A, "_"));
            return !0
        }, a) : gj(a.a.Na(!1), function (a) {
            Ge(a.A, "trans-target-empty") && (Ie(a.A, "trans-target-empty"),
                this.b.hb(a.A, ""));
            return !0
        }, a)
    }
    To.prototype.qg = function (a) {
        Nn() || (L(a.target, "trans-target-highlight"),
            Wo(this, a.target),
            $o(this, !0),
            Kl(this.C, "althighlight"),
            $l(this.va, 206))
    };
    To.prototype.Dd = function (a) {
        Ie(a.target, "trans-target-highlight");
        null == this.l || this.N() || Pm(this.l, 0, 0);
        $o(this, !1)
    };
    To.prototype.pg = function (a) {
        Nn() && this.Dd(a)
    };
    To.prototype.og = function (a) {
        Nn() || (this.Dd(a),
            un(pn(a.target), void 0).select())
    };

    function Xo(a) {
        gj(a.a.Na(!1), function (a) {
            Ie(a.A, "trans-target-highlight");
            return !0
        }, a)
    }
    To.prototype.cf = function (a) {
        a && a.currentTarget && a.currentTarget.Fa && (a.g = a.currentTarget.Fa);
        To.m.cf.call(this, a)
    };
    To.prototype.Sd = function (a) {
        Nn() ? Xo(this) : To.m.Sd.call(this, a)
    };

    function ap(a, b, c) {
        this.R = this.c = null;
        To.call(this, a, b, c)
    }
    D(ap, To);
    //u = ap.prototype;
    ap.prototype.Xg = setterFor("c");
    ap.prototype.L = function (a, b) {
        b = ap.m.L.call(this, a, b);
        this.c = null;
        a ? this.R = this.gb() : null != this.R && this.R != this.gb() && this.dispatchEvent(new jh("action", this));
        return b
    };
    ap.prototype.oe = function (a) {
        ap.m.oe.call(this, a);
        L(a, "trans-edit");
        a.contentEditable = !0;
        ko(this, a);
        jo(this).focus();
        rg(jo(this), !0);
        U(this).w(a, "keydown", this.ig);
        U(this).w(a, "mouseout", this.Ed);
        U(this).w(a, "mouseover", this.Ed);
        if (null != this.c) {
            var b = un(pn(a), void 0);
            a = this.c ? b.Ha() : b.Va();
            b = Ym(b);
            vn(b, a, b, a).select()
        }
    };
    ap.prototype.ke = function (a) {
        ap.m.ke.call(this, a);
        Ie(a, "trans-edit");
        a.contentEditable = !1;
        jo(this) && rg(jo(this), !1);
        U(this).ca(a, "keydown", this.ig);
        U(this).ca(a, "mouseout", this.Ed);
        U(this).ca(a, "mouseover", this.Ed)
    };
    ap.prototype.Ed = function () {
        var a = Ln();
        null == a || a.Ga() == a.Ua() && a.Ha() == a.Va() || this.L(a.Ga() == a.Ua())
    };
    ap.prototype.ig = function (a) {
        for (var b = 0; b < this.f; ++b)
            gi(this, b).L(!1);
        if (13 == a.keyCode || 3 == a.keyCode)
            return null === oo(this) ? (this.pb(),
                a.stopPropagation(),
                a.b(), !0) : !1;
        null === oo(this) || !ui(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Fa.focus(),
            this.Db(ii(this, null)));
        return !1
    };
    ap.prototype.ge = function (a) {
        var b = Ln();
        if (b.Ga() == b.Ua() && b.Ha() == b.Va()) {
            var c = Zm(b);
            b = un(pn(Ym(b)), void 0);
            if (!a && c == b.Ha() || a && c == b.Va())
                return !0
        }
        return !1
    };

    function bp(a, b, c) {
        To.call(this, a, b, c);
        this.c = null
    }
    D(bp, To);
    //u = bp.prototype;
    bp.prototype.ga = function (a) {
        bp.m.ga.call(this, a);
        this.c = new cp("");
        this.uc(this.c, fi(this), !0)
    };
    bp.prototype.uf = function (a) {
        bp.m.uf.call(this, a);
        this.c.j().firstChild.value = this.b.ag(a)
    };
    bp.prototype.L = function (a, b) {
        b = bp.m.L.call(this, a, b);
        a && null != this.j() && (jo(this) == this.c.j().firstChild || jo(this) == this.c.j().firstChild.nextSibling) && Ri(this.c, !0);
        return b
    };
    bp.prototype.Oc = function (a) {
        bp.m.Oc.call(this, a);
        a.target == this.c ? ko(this, this.c.j().firstChild) : ko(this, this.j());
        jo(this).focus();
        jo(this).tabIndex = 0
    };
    bp.prototype.od = function (a) {
        return a == this.c ? -1 : bp.m.od.call(this, a)
    };
    bp.prototype.Ia = function (a) {
        return 9 == a.keyCode ? (this.c.W & 2 ? (jo(this) == this.c.j().firstChild ? ko(this, this.c.j().firstChild.nextSibling) : ko(this, this.c.j().firstChild),
                jo(this).focus(),
                jo(this).tabIndex = 0) : Ri(this.c, !0),
            a.b(),
            a.stopPropagation(), !0) : bp.m.Ia.call(this, a)
    };
    bp.prototype.ge = function () {
        return null === oo(this) || !(oo(this) instanceof cp)
    };

    function cp(a, b, c) {
        W.call(this, a, c || dp.Y(), b);
        this.ta(4, !1)
    }
    D(cp, W);
    cp.prototype.Mc = function (a) {
        a.target == this.j().firstChild.nextSibling && this.dispatchEvent("action")
    };
    cp.prototype.P = function () {
        cp.m.P.call(this);
        U(this).w(this.j().firstChild, "keydown", function (a) {
            32 == a.keyCode && a.stopPropagation()
        })
    };
    cp.prototype.gb = function () {
        return this.j().firstChild.value
    };

    function dp() {}
    D(dp, ji);
    qc(dp);
    var ep = "";
    dp.prototype.D = function (a) {
        var b = a.b.D("INPUT", {
                value: a.da(),
                id: "alt-input-text",
                type: "text"
            }),
            c = a.b.D("INPUT", {
                value: ep,
                id: "alt-input-submit",
                "class": "",
                type: "button"
            });
        return a.b.D(f, {
            id: "alt-input"
        }, b, c)
    };
    J || G || Pd || H && K("1.9");

    function fp() {}
    D(fp, ji);
    qc(fp);
    //u = fp.prototype;
    fp.prototype.bc = makeEmptyFunc();
    fp.prototype.Pa = function (a, b) {
        Mi(a, !1);
        a.jb &= -256;
        a.ta(32, !1);
        fp.m.Pa.call(this, a, b);
        a.Ob(b.value);
        return b
    };
    fp.prototype.D = function (a) {
        Mi(a, !1);
        a.jb &= -256;
        a.ta(32, !1);
        return a.b.D("TEXTAREA", {
            "class": mi(this, a).join(" "),
            disabled: !a.isEnabled()
        }, a.da() || "")
    };
    fp.prototype.wd = function (a) {
        return a.tagName == va
    };
    fp.prototype.Ee = emptyFunction;
    fp.prototype.De = function (a) {
        return a.isEnabled()
    };
    fp.prototype.cc = emptyFunction;
    fp.prototype.Kc = function (a, b, c) {
        fp.m.Kc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    };
    fp.prototype.Za = emptyFunction;
    fp.prototype.Jc = function (a, b) {
        a && (a.value = b)
    };
    fp.prototype.ea = func_ValueOf("goog-textarea");

    function gp(a, b, c) {
        W.call(this, a, b || fp.Y(), c);
        Mi(this, !1);
        this.ad = !0;
        (b = this.j()) && this.a.xd(b, !0);
        this.gc = "" != a;
        a || (this.Nb = "")
    }
    D(gp, W);
    var hp = !(G && !ee(11));
    //u = gp.prototype;
    gp.prototype.ic = !1;
    gp.prototype.Id = !1;
    gp.prototype.gc = !1;
    gp.prototype.qb = 0;
    gp.prototype.Bg = 0;
    gp.prototype.bf = 0;
    gp.prototype.tg = !1;
    gp.prototype.Qd = !1;
    gp.prototype.rf = !1;
    gp.prototype.qf = !1;
    gp.prototype.pc = "";

    function ip(a) {
        return a.c.top + a.c.bottom + a.o.top + a.o.bottom
    }

    function jp(a) {
        var b = a.bf,
            c = a.j();
        b && c && a.Qd && (b -= ip(a));
        return b
    }

    function kp(a) {
        a.bf = 50;
        lp(a)
    }

    function mp(a) {
        a.Bg = 50;
        lp(a)
    }
    gp.prototype.za = function (a) {
        this.Ob(String(a))
    };
    gp.prototype.Ba = function () {
        return this.j().value != this.pc || np(this) || this.gc ? this.j().value : ""
    };
    gp.prototype.Ob = function (a) {
        gp.m.Ob.call(this, a);
        this.gc = "" != a;
        lp(this)
    };
    gp.prototype.oa = function (a) {
        gp.m.oa.call(this, a);
        this.j().disabled = !a
    };

    function lp(a) {
        a.j() && a.zd()
    }

    function np(a) {
        return "placeholder" in a.j()
    }

    function op(a) {
        a.pc && (np(a) ? a.j().placeholder = a.pc : !a.j() || a.gc || a.Id || (L(a.j(), "textarea-placeholder-input"),
            a.j().value = a.pc))
    }
    gp.prototype.P = function () {
        gp.m.P.call(this);
        var a = this.j();
        O(a, {
            overflowY: "hidden",
            overflowX: "auto",
            boxSizing: "border-box",
            MsBoxSizing: "border-box",
            WebkitBoxSizing: "border-box",
            MozBoxSizing: "border-box"
        });
        this.c = Vg(a);
        this.o = Wg(a);
        U(this).w(a, "scroll", this.zd).w(a, "focus", this.zd).w(a, "keyup", this.zd).w(a, "mouseup", this.aj).w(a, "blur", this.Fh);
        op(this);
        lp(this)
    };

    function pp(a) {
        if (!a.tg) {
            var b = a.j().cloneNode(!1);
            O(b, {
                position: "absolute",
                height: "auto",
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: "hidden"
            });
            a.b.a.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.rf = d > c;
            b.style.borderWidth = "10px";
            a.qf = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Qd = !0);
            bg(b);
            a.tg = !0
        }
        b = a.j();
        isNaN(a.c.top) && (a.c = Vg(b),
            a.o = Wg(b));
        c = a.j().scrollHeight;
        var e = a.j();
        d = e.offsetHeight - e.clientHeight;
        if (!a.rf) {
            var g = a.c;
            d -= g.top + g.bottom
        }
        a.qf || (e = Wg(e),
            d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Qd ? c -= ip(a) : (a.rf || (d = a.c,
                c += d.top + d.bottom),
            a.qf || (a = Wg(b),
                c += a.top + a.bottom));
        return c
    }

    function qp(a, b) {
        a.qb != b && (a.qb = b,
            a.j().style.height = b + "px")
    }

    function rp(a) {
        var b = a.j();
        b.style.height = "auto";
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.qb = 0
    }
    gp.prototype.Fh = function () {
        np(this) || (this.Id = !1,
            "" == this.j().value && (this.gc = !1,
                op(this)))
    };
    gp.prototype.zd = function (a) {
        if (!this.ic) {
            var b = this.j();
            !np(this) && a && a.type == "focus" && (b.value == this.pc && this.pc && !this.Id && (Ie(b, "textarea-placeholder-input"),
                    b.value = ""),
                this.Id = !0,
                this.gc = "" != b.value);
            var c = !1;
            this.ic = !0;
            a = this.qb;
            if (b.scrollHeight) {
                var d = !1,
                    e = !1,
                    g = pp(this),
                    h = b.offsetHeight,
                    k = jp(this);
                var l = this.Bg;
                var m = this.j();
                l && m && this.Qd && (l -= ip(this));
                k && g < k ? (qp(this, k),
                    d = !0) : l && g > l ? (qp(this, l),
                    b.style.overflowY = "",
                    e = !0) : h != g ? qp(this, g) : this.qb || (this.qb = g);
                d || e || !hp || (c = !0)
            } else
                rp(this);
            this.ic = !1;
            c && (b = this.j(),
                this.ic || (this.ic = !0, (e = b.scrollHeight) ? (g = pp(this),
                        c = jp(this),
                        c && g <= c || (d = this.c,
                            b.style.paddingBottom = d.bottom + 1 + "px",
                            pp(this) == g && (b.style.paddingBottom = d.bottom + e + "px",
                                b.scrollTop = 0,
                                e = pp(this) - e,
                                e >= c ? qp(this, e) : qp(this, c)),
                            b.style.paddingBottom = d.bottom + "px")) : rp(this),
                    this.ic = !1));
            a != this.qb && this.dispatchEvent("resize")
        }
    };
    gp.prototype.aj = function () {
        var a = this.j(),
            b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.qb && (this.qb = this.bf = b)
    };

    function sp(a) {
        return function () {
            return a
        }
    }

    function tp(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    }

    function up(a, b) {
        var c = b.split(".");
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, g = 0; g < a.length; g++) {
            var h = a.charCodeAt(g);
            128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++g) & 1023),
                        d[e++] = h >> 18 | 240,
                        d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224,
                    d[e++] = h >> 6 & 63 | 128),
                d[e++] = h & 63 | 128)
        }
        a = b;
        for (e = 0; e < d.length; e++)
            a += d[e],
            a = tp(a, "+-a^+6");
        a = tp(a, "+-3^+b+-f");
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1E6;
        return c.toString() + "." + (c ^ b)
    }
    var vp = null;

    function wp() {
        var a = sp(String.fromCharCode(116)),
            b = sp(String.fromCharCode(107));
        a = [a(), a()];
        a[1] = b();
        return a.join("")
    };

    function xp(a, b) {
        this.b = a;
        this.a = "";
        b && (this.a = b);
        this.c = 0;
        this.va = Zl.Y()
    }

    function yp(a) {
        a = a.Ca("q").join("");
        if (null !== vp)
            var b = vp;
        else {
            var c = sp(String.fromCharCode(84));
            b = sp(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            b = (vp = window[c.join(b())] || "") || ""
        }
        return "&" + wp() + "=" + up(a, b)
    }

    function zp(a, b, c, d, e) {
        c = c.toString();
        c += yp(d);
        d = d.toString();
        var g = "POST";
        b += "?" + c;
        2E3 > b.length + d.length && (g = "GET",
            b += "&" + d,
            d = "");
        ++a.c;
        xl(b, function (b) {
            --a.c;
            e(b)
        }, g, d, void 0)
    }
    xp.prototype.f = function (a, b, c) {
        c = c.target;
        !c.Qc() || "[" != c.Lb()[0] && "{" != c.Lb()[0] ? (Ap(this, c),
            b && b(c.$b())) : (b = Bp(c, "handleSingleResult_"),
            isArray(b) && (b = new Km(b)),
            a(b))
    };
    xp.prototype.g = function (a, b, c) {
        c = c.target;
        if (c.Qc()) {
            c = Bp(c, "handleTextResult_");
            var d = [];
            if (a)
                d.push(isArray(c) ? c[0] : c);
            else if (isArray(c))
                for (a = 0; a < c.length; ++a)
                    d.push(isArray(c[a]) ? c[a][0] : c[a]);
            b(d)
        } else
            Ap(this, c),
            b(null, c.we())
    };

    function Bp(a, b) {
        var c = a.Lb();
        a = {
            "class": "trans.common.TranslationAPI",
            func: b,
            url: a.xe()
        };
        try {
            var d = JSON.parse(c)
        } catch (e) {
            throw d = El.Y(),
                a.js = c,
                a.error = e.message,
                d.log("jsonParseErr", a),
                e;
        }
        return d
    }
    var Cp = {},
        Dp = (Cp[1] = 15,
            Cp[2] = 16,
            Cp[3] = 17,
            Cp[4] = 18,
            Cp[5] = 19,
            Cp[6] = 20,
            Cp[7] = 21,
            Cp[8] = 22,
            Cp[9] = 23,
            Cp);

    function Ap(a, b) {
        var c = b.we();
        c = c in Dp ? Dp[c] : 0;
        a = $l(a.va, 148);
        var d = new Vl;
        Be(d, 1, 156);
        c && Be(d, 5, c);
        Ce(a, 63, d);
        c = El.Y();
        a = b.xe();
        b = b.Lb();
        c.log("invalidResponse", {
            q: a.substring(0, 500),
            ql: a.length,
            r: b.substring(0, 500),
            rl: b.length
        })
    };

    function Ep(a, b) {
        this.a = [];
        this.b = b;
        for (var c = !0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d] | 0;
            c && e == b || (this.a[d] = e,
                c = !1)
        }
    }
    var Fp = {};

    function Gp(a) {
        if (-128 <= a && 128 > a) {
            var b = Fp[a];
            if (b)
                return b
        }
        b = new Ep([a | 0], 0 > a ? -1 : 0); - 128 <= a && 128 > a && (Fp[a] = b);
        return b
    }

    function Hp(a) {
        if (isNaN(a) || !isFinite(a))
            return Ip;
        if (0 > a)
            return Jp(Hp(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++)
            b[d] = a / c | 0,
            c *= 4294967296;
        return new Ep(b, 0)
    }
    var Ip = Gp(0),
        Kp = Gp(1),
        Lp = Gp(16777216);

    function Mp(a) {
        if (-1 == a.b)
            return -Mp(Jp(a));
        for (var b = 0, c = 1, d = 0; d < a.a.length; d++) {
            var e = Np(a, d);
            b += (0 <= e ? e : 4294967296 + e) * c;
            c *= 4294967296
        }
        return b
    }
    Ep.prototype.toString = function (a) {
        a = a || 10;
        if (2 > a || 36 < a)
            throw Error("radix out of range: " + a);
        if (Op(this))
            return "0";
        if (-1 == this.b)
            return "-" + Jp(this).toString(a);
        for (var b = Hp(Math.pow(a, 6)), c = this, d = "";;) {
            var e = Pp(c, b);
            c = Qp(c, Rp(e, b));
            var g = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a);
            c = e;
            if (Op(c))
                return g + d;
            for (; 6 > g.length;)
                g = "0" + g;
            d = "" + g + d
        }
    };

    function Np(a, b) {
        return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b
    }

    function Op(a) {
        if (0 != a.b)
            return !1;
        for (var b = 0; b < a.a.length; b++)
            if (0 != a.a[b])
                return !1;
        return !0
    }

    function Sp(a, b) {
        a = Qp(a, b);
        return -1 == a.b ? -1 : Op(a) ? 0 : 1
    }

    function Jp(a) {
        for (var b = a.a.length, c = [], d = 0; d < b; d++)
            c[d] = ~a.a[d];
        return (new Ep(c, ~a.b)).add(Kp)
    }
    Ep.prototype.add = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
            var g = d + (Np(this, e) & 65535) + (Np(a, e) & 65535),
                h = (g >>> 16) + (Np(this, e) >>> 16) + (Np(a, e) >>> 16);
            d = h >>> 16;
            g &= 65535;
            h &= 65535;
            c[e] = h << 16 | g
        }
        return new Ep(c, c[c.length - 1] & -2147483648 ? -1 : 0)
    };

    function Qp(a, b) {
        return a.add(Jp(b))
    }

    function Rp(a, b) {
        if (Op(a) || Op(b))
            return Ip;
        if (-1 == a.b)
            return -1 == b.b ? Rp(Jp(a), Jp(b)) : Jp(Rp(Jp(a), b));
        if (-1 == b.b)
            return Jp(Rp(a, Jp(b)));
        if (0 > Sp(a, Lp) && 0 > Sp(b, Lp))
            return Hp(Mp(a) * Mp(b));
        for (var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++)
            d[e] = 0;
        for (e = 0; e < a.a.length; e++)
            for (var g = 0; g < b.a.length; g++) {
                var h = Np(a, e) >>> 16,
                    k = Np(a, e) & 65535,
                    l = Np(b, g) >>> 16,
                    m = Np(b, g) & 65535;
                d[2 * e + 2 * g] += k * m;
                Tp(d, 2 * e + 2 * g);
                d[2 * e + 2 * g + 1] += h * m;
                Tp(d, 2 * e + 2 * g + 1);
                d[2 * e + 2 * g + 1] += k * l;
                Tp(d, 2 * e + 2 * g + 1);
                d[2 * e + 2 * g + 2] += h * l;
                Tp(d, 2 * e + 2 * g + 2)
            }
        for (e = 0; e < c; e++)
            d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++)
            d[e] = 0;
        return new Ep(d, 0)
    }

    function Tp(a, b) {
        for (;
            (a[b] & 65535) != a[b];)
            a[b + 1] += a[b] >>> 16,
            a[b] &= 65535,
            b++
    }

    function Pp(a, b) {
        if (Op(b))
            throw Error("division by zero");
        if (Op(a))
            return Ip;
        if (-1 == a.b)
            return -1 == b.b ? Pp(Jp(a), Jp(b)) : Jp(Pp(Jp(a), b));
        if (-1 == b.b)
            return Jp(Pp(a, Jp(b)));
        if (30 < a.a.length) {
            if (-1 == a.b || -1 == b.b)
                throw Error("slowDivide_ only works with positive integers.");
            for (var c = Kp; 0 >= Sp(b, a);)
                c = Up(c, 1),
                b = Up(b, 1);
            var d = Vp(c, 1),
                e = Vp(b, 1);
            b = Vp(b, 2);
            for (c = Vp(c, 2); !Op(b);) {
                var g = e.add(b);
                0 >= Sp(g, a) && (d = d.add(c),
                    e = g);
                b = Vp(b, 1);
                c = Vp(c, 1)
            }
            return d
        }
        for (c = Ip; 0 <= Sp(a, b);) {
            d = Math.max(1, Math.floor(Mp(a) / Mp(b)));
            e = Math.ceil(Math.log(d) / Math.LN2);
            e = 48 >= e ? 1 : Math.pow(2, e - 48);
            g = Hp(d);
            for (var h = Rp(g, b); - 1 == h.b || 0 < Sp(h, a);)
                d -= e,
                g = Hp(d),
                h = Rp(g, b);
            Op(g) && (g = Kp);
            c = c.add(g);
            a = Qp(a, h)
        }
        return c
    }

    function Up(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length + c + (0 < b ? 1 : 0), e = [], g = 0; g < d; g++)
            e[g] = 0 < b ? Np(a, g - c) << b | Np(a, g - c - 1) >>> 32 - b : Np(a, g - c);
        return new Ep(e, a.b)
    }

    function Vp(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length - c, e = [], g = 0; g < d; g++)
            e[g] = 0 < b ? Np(a, g + c) >>> b | Np(a, g + c + 1) << 32 - b : Np(a, g + c);
        return new Ep(e, a.b)
    };
    Qp(Up(Kp, 32), Kp);
    Gp(65535);
    Qp(Up(Kp, 128), Kp);
    var Wp = G || J || F || Pd || !1;
    J && K("534.16");
    G && K("7.0");
    H && K("1.8");
    J || G && K("9");
    G || Pd || F || H && K("1.9");
    H || J && K("527");
    G || Pd || J && K("525");
    J && K("531");
    J && K("528");
    H && K("1.9") || G || Pd || F || J && K("531");
    H || J && K("526");
    me && hl("4") || ne && K("533") || H && K("2.0") || G && K("10") || F && Yc(browserVersion(), "15");
    F && K("11.10");
    me && hl("12");

    function Xp(a, b, c, d, e, g, h, k) {
        T.call(this, a);
        this.g = h || null;
        null != this.g && this.g.h(C(this.ki, this));
        this.l = null;
        this.a = "auto";
        this.xa = this.c = "";
        this.bb = new xp("mt");
        this.Hb = !!b && Wp && !G;
        this.K = null != e ? e : 0;
        this.f = null;
        this.Hb ? this.f = new ap : this.f = new bp;
        if (0 < this.K)
            for (a = this.f,
                a.o = !0,
                b = 0; b < a.f; b++)
                h = Sf(f, "goog-menu", ""),
                e = Sf(f, null, h),
                h = new xm(e, h),
                a.g[b] = h,
                document.body.appendChild(e);
        this.f.ga(c);
        this.h = k || null;
        this.Ma = null != d ? d : -1;
        this.J = El.Y();
        this.C = new hj;
        this.H = null;
        this.ab = "t";
        this.R = this.X = null;
        this.o = g || null;
        this.fa = !1;
        null != this.o && (this.o.c(C(this.vj, this)),
            this.o.a(C(this.gi, this)));
        this.qa = null;
        this.va = Zl.Y()
    }
    D(Xp, T);

    function Yp(a, b) {
        a.qa = b;
        a.f.l = b
    }

    function Zp(a) {
        a.H = rb; // rb = "https://translate.google.com"
        a.f.C.s = a.H || ""
    }

    function $p(a) {
        var b = aq;
        a.J.f = b;
        a.ab = b
    }

    function bq(a, b) {
        null != a.o && a.o.f();
        b && (a.l = new Km(b),
            a.R = null);
        cq(a) && (a.g.b(),
            null != a.h && a.h.a(!1));
        if (a.l) {
            b = 0 != If().length;
            a.b.Rc(a.j());
            a.f.hd();
            a.qa && (a.qa.b = a.l);
            for (var c = "", d = 0, e = 0; e < Y(a.l, 5); e++)
                dq(a.l, e) && (c += " "),
                c += eq(a.l, e),
                d += Y(Mm(a.l, e), 2);
            if (0 != d) {
                c = [];
                d = !1;
                e = a.l;
                for (var g = "", h = 0; h < Y(e, 5); h++) {
                    var k = Mm(e, h);
                    null != k.data[4] && 0 < Em(k, 4).length ? g = Em(k, 4) : (new Gm(k.Gb())).data[4] = g
                }
                for (e = 0; e < Y(a.l, 5); e++) {
                    g = Mm(a.l, e);
                    h = Lm(g, 0);
                    dq(a.l, e) ? a.b.appendChild(a.j(), a.b.a.createTextNode(" ")) : ("km" == a.c || "lo" == a.c) && a.b.appendChild(a.j(), J ? Wf() : F ? document.createTextNode("&shy;") : G && K(8) ? document.createTextNode("&#8203;") : Wf());
                    null != g.data[4] && 0 < Em(g, 4).length && 0 == Dm(g, 5) && c.push(Em(g, 4));
                    var l;
                    k = eq(a.l, e);
                    /^[\s\xa0]*$/.test(k) ? 0 == k.length || (l = fq(k)) : (l = a.b.D("SPAN", null, k),
                        h = Dm(h, 1),
                        0 <= a.Ma && h < a.Ma && L(l, "alt-low-conf"),
                        jj(a.C, a.a + "." + a.c + "." + Em(g, 0)) && (h = a.C.get(a.a + "." + a.c + "." + Em(g, 0)),
                            h != gq(g, 0) && (a.b.hb(l, h),
                                L(l, "alt-edited"),
                                d = !0,
                                hq(a, !0))),
                        l.title = Uo,
                        Vo(a.f, l, g));
                    l && a.b.appendChild(a.j(), l)
                }
                if (null != a.g) {
                    l = a.a + "." + a.c;
                    for (e = 0; e < c.length; ++e)
                        l += "." + c[e];
                    jj(a.C, l) && (iq(a, !1),
                        d = !0,
                        jq(a, a.C.get(l)),
                        null != a.h && a.h.a(!1),
                        hq(a, !0))
                }
                d || (hq(a, !1),
                    iq(a, !1));
                (d || b) && a.dispatchEvent("action")
            }
        } else
            hq(a, !1),
            iq(a, !1)
    }

    function fq(a) {
        a = escapeHTML(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
        var b = document.createDocumentFragment(),
            c = 0;
        dd(a, function (a) {
            0 != c && b.appendChild(Sf("BR"));
            c++;
            "" != a && b.appendChild(document.createTextNode(String(unescapeHTML(a))))
        });
        return b
    }

    function kq(a, b) {
        if (cq(a))
            return a.g.a();
        var c = [];
        if (a.j() && a.j().childNodes)
            for (var d = 0; d < a.j().childNodes.length; ++d) {
                var e = a.j().childNodes[d];
                c[d] = b && "BR" == e.tagName ? "\n" : sg(e)
            }
        return c.join("")
    }

    function lq(a, b, c, d) {
        for (a = 0; a < Y(b, 5); a++) {
            var e = Mm(b, a),
                g = e && e;
            if (ym(c.data, e ? g.data : null)) {
                c = b;
                b = a;
                e = -1;
                a = Y(c, 5);
                for (g = b; 0 <= g; g--)
                    if (0 == Dm(Mm(c, g), 5)) {
                        e = g;
                        break
                    }
                for (g = b + 1; g <= Y(c, 5); g++)
                    if (0 == Dm(Mm(c, g), 5)) {
                        a = g;
                        break
                    }
                if (null != d && d)
                    b = mq(c, e, a);
                else if (d = c,
                    c = e,
                    d) {
                    e = b + 1;
                    g = b;
                    for (b = eq(d, b).length; 64 > b && (e != a || g != c);)
                        e < a && (b += eq(d, e++).length + 1),
                        64 > b && g > c && (b += eq(d, --g).length + 1);
                    b = mq(d, g, e)
                } else
                    b = "";
                return b
            }
        }
        return ""
    }

    function mq(a, b, c) {
        var d = [];
        d.push(eq(a, b));
        for (b += 1; b < c; b++)
            dq(a, b) && d.push(" "),
            d.push(eq(a, b));
        return d.join("")
    }

    function dq(a, b) {
            if (0 == b)
                return !1;
            var c = Mm(a, b),
                d = Mm(a, b - 1);
            if (c = Cm(Lm(c, 0), 2) && !Cm(Lm(d, 0), 3))
                a = eq(a, b - 1),
                b = a.length - 1,
                c = !(0 <= b && a.indexOf("\n", b) == b);
            return c
        }
        //u = Xp.prototype;
    Xp.prototype.Zb = getterFor("a");
    Xp.prototype.ya = getterFor("c");
    Xp.prototype.D = function () {
        this.T(vg(this.b, "span"))
    };
    Xp.prototype.T = function (a) {
        Xp.m.T.call(this, a);
        bq(this)
    };
    Xp.prototype.P = function () {
        Xp.m.P.call(this);
        U(this).w(this.f, "action", this.xi);
        null != this.h && null != this.h.b && (U(this).w(this.h.b, "click", this.Bi),
            Qh(U(this), this.h.b, this.va.a, this.va));
        U(this).w(this.f, "show", this.wi);
        this.j() && U(this).w(this.j(), "keydown", function (a) {
            32 == a.keyCode && a.stopPropagation()
        }, !0)
    };
    Xp.prototype.F = function () {
        Xp.m.F.call(this);
        this.f.M()
    };
    Xp.prototype.ki = function () {
        this.o.oa(this.g.c());
        hq(this, this.g.c())
    };
    Xp.prototype.xi = function (a) {
        if (a.type != pb || a.target == this.f)
            if (null == a.target && null != this.g)
                this.J.log("editpopupclk"),
                $l(this.va, 233),
                null != this.h && this.h.a(!0),
                this.g.l(kq(this)),
                this.fa = this.o.j().style.display != "none",
                this.o.reset(),
                null != this.h ? this.o.oa(this.h.b.style.display != "none") : this.o.oa(!1),
                hq(this, !1);
            else {
                var b = a.g;
                null == b && null != a.currentTarget && (b = a.currentTarget.Fa);
                var c = a.target.gb();
                if (null != b && null != a.target) {
                    var d = b,
                        e = this.f.h.get(uc(d));
                    this.b.hb(d, c);
                    c == gq(e, 0) ? (Ie(d, "alt-edited"),
                        0 == If().length && (hq(this, !1),
                            iq(this, !1))) : (L(d, "alt-edited"),
                        hq(this, !0),
                        iq(this, !0));
                    null != this.C && this.C.set(this.a + "." + this.c + "." + Em(e, 0), c);
                    e = this.f.h.get(uc(b));
                    null != this.C && this.C.set(this.a + "." + this.c + "." + Em(e, 0), c);
                    d = gq(e, 0);
                    b = ii(this.f, a.target);
                    d = {
                        sl: this.a,
                        tl: this.c,
                        utrans: c,
                        gtrans: d,
                        index: b,
                        ophrase: Em(e, 0),
                        osentence: Em(e, 4),
                        tsentence: lq(this, this.l, e)
                    };
                    0 < Y(e, 2) && (d.confidence = Dm(Lm(e, 0), 1));
                    if (a.target instanceof cp || -1 == b)
                        d.manual = 1,
                        $l(this.va, 240);
                    else {
                        a = $l(this.va, 239);
                        e = new Rl;
                        var g = De(De(e, 2, Pl), 3, Nl);
                        Be(g, 1, b);
                        Ce(a, 27, e)
                    }
                    for (var h in d)
                        isString(d[h]) && 64 < d[h].length && (d.tr = 1,
                            d[h] = d[h].substr(0, 64));
                    this.J.log("usealt", d, this.H);
                    h = new jh("usealt");
                    h.text = c;
                    this.dispatchEvent(h);
                    this.dispatchEvent("action")
                }
            }
    };

    function jq(a, b) {
        if (a.j()) {
            null == a.X && (a.R = md(a.b.Yh(a.j())));
            a.X = b;
            var c;
            if (c = a.j().childNodes && 0 < a.j().childNodes.length)
                c = (c = a.j().childNodes[0]) ? jj(a.f.a, uc(c)) : !1;
            c ? (a.b.Rc(a.j()),
                a.f.hd(),
                b = a.b.D("SPAN", "alt-edited", a.X),
                a.b.appendChild(a.j(), b),
                Vo(a.f, b, new Gm)) : a.j().innerHTML = escapeHTML(b).replace(/(\r\n|\r|\n)/g, "<br>")
        }
    }
    Xp.prototype.Bi = function () {
        null != this.g && cq(this) ? this.g.g() : nq(this);
        this.J.log("clkundo", void 0, this.H)
    };
    Xp.prototype.gi = function () {
        cq(this) && (this.g.c() && (jq(this, this.g.a()),
                this.fa = !0),
            this.g.b(),
            null != this.h && this.h.a(!1),
            this.g.c() && hq(this, !0),
            this.o.oa(!0),
            P(this.o.j(), this.fa),
            this.dispatchEvent("action"));
        $l(this.va, 215);
        this.J.log("clkcancel", void 0, this.H)
    };
    Xp.prototype.wi = function () {
        var a = this.f.h.get(uc(this.f.Fa));
        if (a) {
            if (0 < this.K) {
                var b = new tj("source=baf");
                if (1 == this.K) {
                    for (var c = [], d = 0, e = Y(a, 2); d < e; d++)
                        c.push(gq(a, d));
                    d = this.bb;
                    var g = this.c,
                        h = this.a,
                        k = Gf(document, "hl").value,
                        l = C(this.wj, this);
                    e = d.a + da;
                    var m = new tj,
                        p = new tj;
                    m.set("client", d.b);
                    m.set("sl", g);
                    m.set("tl", h);
                    m.set("hl", k);
                    m.set("v", "1.0");
                    b && m.$f(b);
                    (b = !isArray(c) || isArray(c) && 1 == c.length) ? p.set("q", c): Hj(p, "q", c);
                    b = C(d.g, d, b, l);
                    zp(d, e, m, p, b)
                } else
                    for (d = 0,
                        e = Y(a, 2); d < e; d++) {
                        g = gq(a, d);
                        c = this.bb;
                        m = this.c;
                        p = this.a;
                        l = Gf(document, "hl").value;
                        h = C(this.xj, this, d);
                        k = b;
                        var t = c.a + "/translate_a/single",
                            w = new tj,
                            I = new tj;
                        w.set("client", c.b);
                        w.set("sl", m);
                        w.set("tl", p);
                        w.set("hl", l);
                        Hj(w, "dt", ["at", "t"]);
                        k && w.$f(k);
                        I.set("q", g);
                        zp(c, t, w, I, C(c.f, c, h, void 0))
                    }
            }
            b = new jh("click");
            b.text = this.f.gb();
            b.h = Y(this.l, 5);
            this.dispatchEvent(b);
            b = {};
            b.confidence = Dm(Lm(a, 0), 1);
            this.a && this.c && this.xa && (b.segments = Y(this.l, 5),
                b.sl = this.a,
                b.tl = this.c,
                b.hl = this.xa);
            $l(this.va, 238);
            this.J.log("phrsclk", b, this.H)
        }
    };
    Xp.prototype.xj = function (a, b) {
        if (1 == this.K || 1 < Y(b, 5)) {
            var c = Em(new Jm(Fm(b, 0, 0)), 0);
            var d = 1;
            for (var e = Y(b, 0); d < e; d++)
                c += " " + Em(new Jm(Fm(b, 0, d)), 0);
            d = c
        } else if (1 == Y(b, 5)) {
            c = [];
            b = Mm(b, 0);
            d = 0;
            for (e = Math.min(this.K, Y(b, 2)); d < e; d++)
                c.push(gq(b, d));
            d = c.join(", ")
        } else
            d = "...";
        Zo(this.f, a, d)
    };
    Xp.prototype.wj = function (a) {
        for (var b = 0; b < a.length; b++)
            Zo(this.f, b, a[b])
    };

    function nq(a) {
        cq(a) && (null != a.h && a.h.a(!1),
            a.g.b());
        lj(a.C);
        a.X = null;
        bq(a);
        a.dispatchEvent("action")
    }

    function hq(a, b) {
        null != a.h && null != a.h.b && P(a.h.b, b)
    }

    function iq(a, b) {
        null != a.o && (b && a.o.reset(),
            P(a.o.j(), b))
    }
    Xp.prototype.vj = function () {
        var a = [],
            b;
        null != this.R ? b = this.R : b = cg(this.j());
        for (var c = {
            segment: []
        }, d = null, e = 0, g = 0; g < b.length; g++) {
            var h = Mm(this.l, g);
            if (null != h) {
                var k = sg(b[g]);
                a: {
                    var l = k;
                    var m = h;
                    if (0 == Y(m, 2))
                        l = 0;
                    else {
                        for (var p = 0; p < Y(m, 2); ++p)
                            if (l == gq(m, p)) {
                                l = p;
                                break a
                            }
                        l = -1
                    }
                }
                m = trimString(Em(h, 4));
                p = lq(this, this.l, h, !0);
                if (0 != m.length) {
                    if (0 == a.length || m != a[a.length - 1])
                        a.push(m),
                        d = oq(this, a.length - 1),
                        e = 0,
                        d = {
                            source: m,
                            original_target: p,
                            segment_source: d,
                            phrase_correction: []
                        },
                        c.segment.push(d);
                    if (0 != l)
                        for (m = gq(h, 0).length,
                            l = {
                                alternative_index: l,
                                edited_phrase: k,
                                source_span: [],
                                target_span: [{
                                    start: e,
                                    end: e + m
                                }]
                            },
                            d.phrase_correction.push(l),
                            m = 0; m < Y(h, 3); ++m)
                            p = new Im(Fm(h, 3, m)),
                            l.source_span.push({
                                start: Dm(p, 0),
                                end: Dm(p, 1)
                            });
                    e += k.length;
                    Cm(Lm(h, 0), 2) && e++
                }
            }
        }
        if (cq(this)) {
            this.dispatchEvent("action");
            this.g.b();
            null != this.h && this.h.a(!1);
            hq(this, !0);
            this.g.a() != kq(this) && jq(this, this.g.a());
            b = this.a + "." + this.c;
            for (g = 0; g < a.length; ++g)
                b += "." + a[g];
            a = this.g.a();
            this.C.set(b, a);
            c.contains_full_edit = !0
        }
        c.edited_target = kq(this, !0);
        a = new tj;
        a.set("ue", JSON.stringify(c));
        a.set("sl", this.a);
        a.set("tl", this.c);
        xl(ea + this.ab, void 0, "POST", a.toString(), 1E4)
    };

    function oq(a, b) {
        if (b < Y(a.l, 0))
            switch (Bm(new Jm(Fm(a.l, 0, b)), 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
            }
        return 0
    }

    function cq(a) {
        return null != a.g && a.g.f()
    }

    function eq(a, b) {
        a = Mm(a, b);
        return 0 == Y(a, 2) ? Em(a, 0) : gq(a, 0)
    }

    function gq(a, b) {
        return Em(Lm(a, b), 0)
    };
    var pq = window.GoogleTranslate && GoogleTranslate._const;
    pq || (pq = {
        _cac: "",
        _cam: "",
        _cest: new Date,
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        Ak: "",
        _translateApiHost: "",
        _scheme: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _loadingGif: "",
        _language_list_url: "",
        _miniGooglePng: "",
        _css: "",
        _pta: "",
        _puh: ""
    });
    var qq = window.GoogleTranslate && window.GoogleTranslate.v || "",
        rq = pq._cl || "en",
        sq = pq._cuc // "googleTranslateElementInit"
        ,
        tq = pq._cnad,
        uq = pq._cest,
        vq = pq._cnal || {},
        wq = "lib" == pq._cam ? 1 : 0,
        xq = (pq._cac || "te") + (1 == wq ? "_lib" : ""),
        yq = function () {
            function a(a) {
                return function () {
                    return a
                }
            }
            var b = a(String.fromCharCode(116)),
                c = a(String.fromCharCode(107));
            b = [b(), b()];
            b[1] = c();
            return pq["_c" + b.join(c())] || ""
        }(),
        translateApiHost = pq._translateApiHost || "",
        translateApiHostScheme = pq._scheme || "https://",
        Bq = pq._pbi || "",
        Cq = pq._pci || "",
        language_list_url = pq._language_list_url || "",
        Eq = pq._loadingGif || "",
        Fq = pq._css || "",
        Gq = pq._puh || "",
        Hq = "//" + Gq + ea + xq,
        Iq = "https://www.google.com/support/translate" + ("en" == rq ? "" : "#googtrans/en/" + rq);

    function Jq(a) {
        for (var b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = !0;
        return b
    }

    function Kq(a) {
        this.b = a ? [a] : [];
        this.a = [0];
        this.c = !1
    }
    Kq.prototype.register = function (a) {
        if (this.c)
            return a || emptyFunction;
        this.a.push(0);
        var b = this.a.length - 1;
        return C(function () {
            this.a[b]++;
            a && a.apply(null, arguments);
            Lq(this)
        }, this)
    };
    Kq.prototype.fb = function (a) {
        return this.c ? a : C(function () {
            if (this.c)
                a.apply(null, arguments);
            else {
                var b = arguments;
                this.b.push(function () {
                    a.apply(null, b)
                })
            }
        }, this)
    };
    Kq.prototype.finish = function () {
        this.a[0] = 1;
        Lq(this)
    };

    function Lq(a) {
        for (var b = 0; b < a.a.length; ++b)
            if (0 == a.a[b])
                return;
        a.c = !0;
        for (b = 0; b < a.b.length; ++b) {
            var c = a.b[b];
            a.b[b] = null;
            c.call()
        }
        a.b = [];
        a.a = []
    }

    function Mq(a) {
        this.c = a;
        this.b = this.a = !1
    }

    function Nq(a, b) {
        return C(function () {
            b && b.apply(null, arguments);
            this.b ? this.a || (this.c.call(),
                this.a = !0) : this.a = !0
        }, a)
    }
    Mq.prototype.finish = function () {
        this.b || (this.b = !0,
            this.a && this.c.call())
    };

    function Oq(a, b, c, d) {
        this.a = b;
        this.h = a;
        this.s = c || 0;
        this.l = d || 0;
        this.b = this.c = !1
    }

    function Pq(a) {
        a.c || a.g()
    }
    Oq.prototype.g = function () {
        (this.c = (this.b = !!this.h.call()) || 0 >= --this.l) ? (this.a.call(null, this.b),
            this.f = 0) : this.f = window.setTimeout(C(this.g, this), this.s)
    };
    Oq.prototype.cancel = function () {
        this.f && window.clearTimeout(this.f);
        this.c = !0;
        this.a.call(null, this.b)
    };

    function dispatchEventFromObject(a, b) {
        return function () {
            a.dispatchEvent(b)
        }
    }

    function Rq(a) {
        a = trimString(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a)
            return "zh-CN";
        if ("zh-tw" == a)
            return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        //return "zh" == a ? "zh-CN" : a
        return a
    }

    function Sq(a) {
        var b = [],
            c;
        for (c in a)
            if (a[c] !== Object.prototype[c]) {
                var d = encodeUrl(c);
                if (typeStringOf(a[c]) == "array")
                    for (var e = 0; e < a[c].length; ++e)
                        b.push(d + "=" + encodeUrl(a[c][e]));
                else
                    b.push(d + "=" + encodeUrl(a[c]))
            }
        return b.join("&")
    }

    function Tq(a, b) {
        b = b || {};
        b.nca = a;
        b.client = xq;
        qq && (b.logld = "v" + qq);
        var c = new Image;
        //c.src = "//" + Gq + "/gen204?" + Sq(b);
        c.onload = function () {
            c.onload = null
        }
    }

    function Uq(a, b) {
        if ((G || F) && window.location.hostname != document.domain) {
            Vq = Vq ? Vq + 1 : 1;
            var c = "f" + Vq + "_" + nowTime().toString(36);
            window[c] = function () {
                window[c] = void 0;
                a.src = "javascript:void(0)";
                b && window.setTimeout(function () {
                    b()
                }, 0)
            };
            a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
        } else
            b && b()
    }
    var Vq;

    function Wq() {
        var a = {};
        try {
            for (var b in Object.prototype) {
                var c = Object.prototype[b];
                delete Object.prototype[b];
                a[b] = c
            }
        } catch (d) {
            return {}
        }
        return a
    }

    function Xq(a) {
        for (var b in a)
            Object.prototype[b] = a[b]
    }

    function Yq(a) {
        for (var b in a)
            if (a[b] !== Object.prototype[b])
                return !1;
        return !0
    }

    function Zq(a, b) {
        return a != "auto" && "zh-CN" != a && a == b
    };
    var $q, ar, br;
    (function () {
        function a(a, c, g) {
            var d = Array.prototype.slice.call(arguments);
            d.splice(0, 2);
            d = "l" + a.toString(16) + "i" + c.toString(16) + (d.length ? "-" + d.join("_") : "");
            b ? b.push(d) : Tq(d)
        }
        var b = null,
            c = null;
        $q = function (b, c, g) {
            for (var d in g)
                g[d] !== Object.prototype[d] && (c[d] = isFunction(g[d]) ? g[d] : zc(a, b, Number(g[d])))
        };
        ar = function () {
            b && br();
            b = [];
            c = S(window, "unload", function () {
                br()
            })
        };
        br = function () {
            c && (Ih(c),
                c = null);
            b && b.length && Tq(b.join(""));
            b = null
        }
    })();
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function cr(a, b) {
        this.g = [];
        this.C = a;
        this.G = b || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.o = this.I = this.l = !1;
        this.h = 0;
        this.b = null;
        this.s = 0
    }
    cr.prototype.cancel = function (a) {
        if (this.a)
            this.c instanceof cr && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.s--,
                    0 >= b.s && b.cancel())
            }
            this.C ? this.C.call(this.G, this) : this.o = !0;
            this.a || (a = new dr,
                er(this),
                fr(this, !1, a))
        }
    };
    cr.prototype.B = function (a, b) {
        this.l = !1;
        fr(this, a, b)
    };

    function fr(a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        gr(a)
    }

    function er(a) {
        if (a.a) {
            if (!a.o)
                throw new hr;
            a.o = !1
        }
    }

    function ir(a, b, c, d) {
        a.g.push([b, c, d]);
        a.a && gr(a)
    }
    cr.prototype.then = function (a, b, c) {
        var d, e, g = new Jk(function (a, b) {
            d = a;
            e = b
        });
        ir(this, d, function (a) {
            a instanceof dr ? g.cancel() : e(a)
        });
        return g.then(a, b, c)
    };
    Hk(cr);

    function jr(a) {
        return gd(a.g, function (a) {
            return isFunction(a[1])
        })
    }

    function gr(a) {
        if (a.h && a.a && jr(a)) {
            var b = a.h,
                c = kr[b];
            c && (_window.clearTimeout(c.ka),
                delete kr[b]);
            a.h = 0
        }
        a.b && (a.b.s--,
            delete a.b);
        b = a.c;
        for (var d = c = !1; a.g.length && !a.l;) {
            var e = a.g.shift(),
                g = e[0],
                h = e[1];
            e = e[2];
            if (g = a.f ? h : g)
                try {
                    var k = g.call(e || a.G, b);
                    isDefined(k) && (a.f = a.f && (k == b || k instanceof Error),
                        a.c = b = k);
                    if (Ik(b) || typeof _window.Promise === n && b instanceof _window.Promise)
                        d = !0,
                        a.l = !0
                } catch (l) {
                    b = l,
                        a.f = !0,
                        jr(a) || (c = !0)
                }
        }
        a.c = b;
        d && (k = C(a.B, a, !0),
            d = C(a.B, a, !1),
            b instanceof cr ? (ir(b, k, d),
                b.I = !0) : b.then(k, d));
        c && (b = new lr(b),
            kr[b.ka] = b,
            a.h = b.ka)
    }

    function hr() {
        Cc.call(this)
    }
    D(hr, Cc);
    hr.prototype.message = "Deferred has already fired";
    hr.prototype.name = "AlreadyCalledError";

    function dr() {
        Cc.call(this)
    }
    D(dr, Cc);
    dr.prototype.message = "Deferred was canceled";
    dr.prototype.name = "CanceledError";

    function lr(a) {
        this.ka = _window.setTimeout(C(this.a, this), 0);
        this.jd = a
    }
    lr.prototype.a = function () {
        delete kr[this.ka];
        throw this.jd;
    };
    var kr = {};

    function mr(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = We(a),
            e = document.createElement(ta),
            g = {
                Tg: e,
                Fb: void 0
            },
            h = new cr(nr, g),
            k = null,
            l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function () {
                or(e, !0);
                var a = new pr(1, "Timeout reached for loading script " + d);
                er(h);
                fr(h, !1, a)
            }, l),
            g.Fb = k);
        e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && e.readyState != "complete" || (or(e, c.Ih || !1, k),
                er(h),
                fr(h, !0, null))
        };

        e.onerror = function () {
            or(e, !0, k);
            var a = new pr(0, "Error while loading script " + d);
            er(h);
            fr(h, !1, a)
        };

        g = c.attributes || {};
        Dd(g, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        Lf(e, g);
        //e.src = We(a);
        //qr(b).appendChild(e);
        /* API response */
        _callbacks___lasovmwhsl352s_({
            "sl": {
                "auto": "检测语言",
                "sq": "阿尔巴尼亚语",
                "ar": "阿拉伯语",
                "am": "阿姆哈拉语",
                "az": "阿塞拜疆语",
                "ga": "爱尔兰语",
                "et": "爱沙尼亚语",
                "eu": "巴斯克语",
                "be": "白俄罗斯语",
                "bg": "保加利亚语",
                "is": "冰岛语",
                "pl": "波兰语",
                "bs": "波斯尼亚语",
                "fa": "波斯语",
                "af": "布尔语(南非荷兰语)",
                "da": "丹麦语",
                "de": "德语",
                "ru": "俄语",
                "fr": "法语",
                "tl": "菲律宾语",
                "fi": "芬兰语",
                "fy": "弗里西语",
                "km": "高棉语",
                "ka": "格鲁吉亚语",
                "gu": "古吉拉特语",
                "kk": "哈萨克语",
                "ht": "海地克里奥尔语",
                "ko": "韩语",
                "ha": "豪萨语",
                "nl": "荷兰语",
                "ky": "吉尔吉斯语",
                "gl": "加利西亚语",
                "ca": "加泰罗尼亚语",
                "cs": "捷克语",
                "kn": "卡纳达语",
                "co": "科西嘉语",
                "hr": "克罗地亚语",
                "ku": "库尔德语",
                "la": "拉丁语",
                "lv": "拉脱维亚语",
                "lo": "老挝语",
                "lt": "立陶宛语",
                "lb": "卢森堡语",
                "ro": "罗马尼亚语",
                "mg": "马尔加什语",
                "mt": "马耳他语",
                "mr": "马拉地语",
                "ml": "马拉雅拉姆语",
                "ms": "马来语",
                "mk": "马其顿语",
                "mi": "毛利语",
                "mn": "蒙古语",
                "bn": "孟加拉语",
                "my": "缅甸语",
                "hmn": "苗语",
                "xh": "南非科萨语",
                "zu": "南非祖鲁语",
                "ne": "尼泊尔语",
                "no": "挪威语",
                "pa": "旁遮普语",
                "pt": "葡萄牙语",
                "ps": "普什图语",
                "ny": "齐切瓦语",
                "ja": "日语",
                "sv": "瑞典语",
                "sm": "萨摩亚语",
                "sr": "塞尔维亚语",
                "st": "塞索托语",
                "si": "僧伽罗语",
                "eo": "世界语",
                "sk": "斯洛伐克语",
                "sl": "斯洛文尼亚语",
                "sw": "斯瓦希里语",
                "gd": "苏格兰盖尔语",
                "ceb": "宿务语",
                "so": "索马里语",
                "tg": "塔吉克语",
                "te": "泰卢固语",
                "ta": "泰米尔语",
                "th": "泰语",
                "tr": "土耳其语",
                "cy": "威尔士语",
                "ur": "乌尔都语",
                "uk": "乌克兰语",
                "uz": "乌兹别克语",
                "es": "西班牙语",
                "iw": "希伯来语",
                "el": "希腊语",
                "haw": "夏威夷语",
                "sd": "信德语",
                "hu": "匈牙利语",
                "sn": "修纳语",
                "hy": "亚美尼亚语",
                "ig": "伊博语",
                "it": "意大利语",
                "yi": "意第绪语",
                "hi": "印地语",
                "su": "印尼巽他语",
                "id": "印尼语",
                "jw": "印尼爪哇语",
                "en": "英语",
                "yo": "约鲁巴语",
                "vi": "越南语",
                "zh-CN": "中文",

                //--------Google------
                "zh": "中文",
                "kr": "韩语",
            },
            "tl": {
                "sq": "阿尔巴尼亚语",
                "ar": "阿拉伯语",
                "am": "阿姆哈拉语",
                "az": "阿塞拜疆语",
                "ga": "爱尔兰语",
                "et": "爱沙尼亚语",
                "eu": "巴斯克语",
                "be": "白俄罗斯语",
                "bg": "保加利亚语",
                "is": "冰岛语",
                "pl": "波兰语",
                "bs": "波斯尼亚语",
                "fa": "波斯语",
                "af": "布尔语(南非荷兰语)",
                "da": "丹麦语",
                "de": "德语",
                "ru": "俄语",
                "fr": "法语",
                "tl": "菲律宾语",
                "fi": "芬兰语",
                "fy": "弗里西语",
                "km": "高棉语",
                "ka": "格鲁吉亚语",
                "gu": "古吉拉特语",
                "kk": "哈萨克语",
                "ht": "海地克里奥尔语",
                "ko": "韩语",
                "ha": "豪萨语",
                "nl": "荷兰语",
                "ky": "吉尔吉斯语",
                "gl": "加利西亚语",
                "ca": "加泰罗尼亚语",
                "cs": "捷克语",
                "kn": "卡纳达语",
                "co": "科西嘉语",
                "hr": "克罗地亚语",
                "ku": "库尔德语",
                "la": "拉丁语",
                "lv": "拉脱维亚语",
                "lo": "老挝语",
                "lt": "立陶宛语",
                "lb": "卢森堡语",
                "ro": "罗马尼亚语",
                "mg": "马尔加什语",
                "mt": "马耳他语",
                "mr": "马拉地语",
                "ml": "马拉雅拉姆语",
                "ms": "马来语",
                "mk": "马其顿语",
                "mi": "毛利语",
                "mn": "蒙古语",
                "bn": "孟加拉语",
                "my": "缅甸语",
                "hmn": "苗语",
                "xh": "南非科萨语",
                "zu": "南非祖鲁语",
                "ne": "尼泊尔语",
                "no": "挪威语",
                "pa": "旁遮普语",
                "pt": "葡萄牙语",
                "ps": "普什图语",
                "ny": "齐切瓦语",
                "ja": "日语",
                "sv": "瑞典语",
                "sm": "萨摩亚语",
                "sr": "塞尔维亚语",
                "st": "塞索托语",
                "si": "僧伽罗语",
                "eo": "世界语",
                "sk": "斯洛伐克语",
                "sl": "斯洛文尼亚语",
                "sw": "斯瓦希里语",
                "gd": "苏格兰盖尔语",
                "ceb": "宿务语",
                "so": "索马里语",
                "tg": "塔吉克语",
                "te": "泰卢固语",
                "ta": "泰米尔语",
                "th": "泰语",
                "tr": "土耳其语",
                "cy": "威尔士语",
                "ur": "乌尔都语",
                "uk": "乌克兰语",
                "uz": "乌兹别克语",
                "es": "西班牙语",
                "iw": "希伯来语",
                "el": "希腊语",
                "haw": "夏威夷语",
                "sd": "信德语",
                "hu": "匈牙利语",
                "sn": "修纳语",
                "hy": "亚美尼亚语",
                "ig": "伊博语",
                "it": "意大利语",
                "yi": "意第绪语",
                "hi": "印地语",
                "su": "印尼巽他语",
                "id": "印尼语",
                "jw": "印尼爪哇语",
                "en": "英语",
                "yo": "约鲁巴语",
                "vi": "越南语",
                "zh-TW": "中文(繁体)",
                "zh-CN": "中文(简体)",



                //--------Google------
                "zh": "中文",
                "kr": "韩语",
            },
            "al": {}
        })
        return h
    }

    function qr(a) {
        var b = Hf("HEAD", a);
        return b && 0 != b.length ? b[0] : a.documentElement
    }

    function nr() {
        if (this && this.Tg) {
            var a = this.Tg;
            a && a.tagName == ta && or(a, !0, this.Fb)
        }
    }

    function or(a, b, c) {
        null != c && _window.clearTimeout(c);
        a.onload = emptyFunction;
        a.onerror = emptyFunction;
        a.onreadystatechange = emptyFunction;
        b && window.setTimeout(function () {
            bg(a)
        }, 0)
    }

    function pr(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Cc.call(this, c);
        this.code = a
    }
    D(pr, Cc);

    function rr(a, b) {
        this.b = new qj(a);
        this.a = b ? b : "callback";
        this.Fb = 5E3
    }
    var sr = 0;
    rr.prototype.send = function (a, b, c, d) {
        a = a || null;
        d = d || "_" + (sr++).toString(36) + nowTime().toString(36);

        //var e = "_callbacks___" + d
        var e = "_callbacks___" + "lasovmwhsl352s_",
            g = new qj(this.b);
        if (a)
            for (var h in a)
                if (!a.hasOwnProperty || a.hasOwnProperty(h)) {
                    var k = g,
                        l = h,
                        m = a[h];
                    isArray(m) || (m = [String(m)]);
                    Hj(k.a, l, m)
                }
        b && (_window[e] = tr(d, b),
            b = this.a,
            h = e,
            isArray(h) || (h = [String(h)]),
            Hj(g.a, b, h));
        b = {
            timeout: this.Fb,
            Ih: !0
        };
        h = new Ue;
        h.a = g.toString();
        g = mr(h, b);
        ir(g, null, ur(d, a, c), void 0);
        return {
            ka: d,
            Qf: g
        }
    };
    rr.prototype.cancel = function (a) {
        a && (a.Qf && a.Qf.cancel(),
            a.ka && vr(a.ka, !1))
    };

    function ur(a, b, c) {
        return function () {
            vr(a, !1);
            c && c(b)
        }
    }

    function tr(a, b) {
        return function (c) {
            vr(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function vr(a, b) {
        //a = "_callbacks___" + a;
        a = "_callbacks___" + "lasovmwhsl352s_";
        if (_window[a])
            if (b)
                try {
                    delete _window[a]
                } catch (c) {
                    _window[a] = void 0
                } else
                _window[a] = emptyFunction;
    };

    function wr(a, b) {
        Q.call(this);
        this.b = new qj(a);
        if (b)
            for (var c in b)
                b[c] !== Object.prototype[c] && this.b.a.set(c, b[c])
    }
    D(wr, Q);
    wr.prototype.f = func_ValueOf(!0);
    wr.prototype.Ya = function () {
        return this.f()
    };
    wr.prototype.send = func_ValueOf(null);
    wr.prototype.cancel = makeEmptyFunc();

    function xr(a, b, c, d) {
        wr.call(this, a, b);
        this.c = null == d || !!d;
        this.a = new rr(this.b.toString(), c)
    }
    D(xr, wr);
    xr.prototype.f = getterFor("c");
    xr.prototype.send = function (a, b) {
        this.a.Fb = -1;
        return this.a.send(a, b)
    };
    xr.prototype.cancel = function (a) {
        this.a.cancel(a)
    };

    function yr(a, b) {
        wr.call(this, a, b);
        this.c = {};
        this.a = this.g = 0;
        window.XMLHttpRequest && ec in new XMLHttpRequest && (this.a = 1);
        !this.a && window.XDomainRequest && "file:" != window.location.protocol && (this.a = 2,
            this.b.a.set("u", window.location.href))
    }
    D(yr, wr);
    $q(17170, yr.prototype, {
        Ag: 1,
        zg: 2
    });
    yr.prototype.f = function () {
        return !!this.a
    };
    yr.prototype.send = function (a, b) {
        var c = Wq(),
            d = ++this.g,
            e = {},
            g = {};
        "q" in a && (g.q = a.q,
            delete a.q);
        a.mode = this.a;
        1 == this.a ? (e.tb = new Ajax,
            S(e.tb, "complete", C(function () {
                e.wc || (e.tb.Qc() ? b(e.tb.getResponseText()) : (this.zg(),
                        b(null, e.tb.getResponseText() || null)),
                    zr(this, d))
            }, this)),
            S(e.tb, "timeout", C(function () {
                e.wc || (this.Ag(),
                    zr(this, d))
            }, this)),
            //e.tb.send(this.b.toString() + "&" + Sq(a), "POST", Sq(g), {
            e.tb.send("https://translate.googleapis.com/translate_a/t?anno=3&client=te_lib&format=html&v=1.0&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&logld=vTE_20170911_00&sl=auto&tl="+a.tl+"&sp=nmt&tc=1&sr=1&tk=706275.834617&mode=1" + "&" + Sq(a), "POST", Sq(g), {
                "Content-Type": "application/x-www-form-urlencoded"
            })) : (e.$a = new XDomainRequest,
            e.$a.timeout = 2E4,
            e.$a.onload = C(function () {
                e.wc || (b(e.$a.responseText),
                    zr(this, d))
            }, this),
            e.$a.onerror = C(function () {
                e.wc || (this.zg(),
                    b(null),
                    zr(this, d))
            }, this),
            e.$a.ontimeout = C(function () {
                e.wc || (this.Ag(),
                    b(null),
                    zr(this, d))
            }, this),
            e.$a.open("POST", this.b.toString() + "&" + Sq(a)),
            e.$a.send(Sq(g)));
        this.c[d] = e;
        Xq(c);
        return d
    };
    yr.prototype.cancel = function (a) {
        var b = this.c[a];
        b && (b.wc = !0,
            b.$a && b.$a.abort(),
            zr(this, a))
    };

    function zr(a, b) {
        var c = a.c[b];
        c && (c.tb ? (c.tb.M(),
                c.tb = null) : c.$a && (c.$a = null),
            delete a.c[b])
    }
    yr.prototype.F = function () {
        yr.m.F.call(this);
        for (var a in this.c)
            this.cancel(a)
    };
    var Qk = {
        0: "NO_ERROR",
        1: "UNKNOWN_ERROR",
        2: "JWT_TOKEN_CANNOT_PARSE",
        3: "JWT_TOKEN_MISS_PARAM",
        4: "JWT_TOKEN_INVALID_ISS",
        5: "JWT_TOKEN_INVALID",
        6: pa,
        7: "OUT_OF_QUOTA",
        8: pa
    };

    function Ar() {}
    Ar.prototype.b = makeEmptyFunc();

    function Br(a) {
        a = a.split(".");
        if (3 !== a.length)
            return !1;
        a = JSON.parse(re(a[1]));
        return null == a || !a.exp || 1E3 * a.exp < nowTime() ? !1 : !0
    }

    function Cr(a) {
        this.a = a
    }
    A_Inherit_B(Cr, Ar);
    Cr.prototype.b = function () {
        return Br(this.a) ? Ok(this.a) : Pk()
    };

    function Dr(a) {
        this.a = null;
        this.c = a
    }
    A_Inherit_B(Dr, Ar);
    Dr.prototype.b = function () {
        if (null != this.a && Br(this.a))
            return Ok(this.a);
        this.a = null;
        return new Jk(function (a, b) {
            var c = this;
            this.c(function (d) {
                c.a = d;
                Br(c.a) ? a(d) : b(Qk[5])
            }, b)
        }, this)
    };

    function Er(a, b, c, d, e) {
        Q.call(this);
        var g;
        b ? g = {
            client: b
        } : g = {
            anno: 3,
            client: xq,
            format: "html",
            v: "1.0"
        };
        c && (g.sp = c);
        g.key = a;
        qq && (g.logld = "v" + qq);
        this.s = d || null;
        this.Wb = e || null;
        this.a = null;
        this.l = !0;
        this.b = {
            fd: C(this.I, this),
            Dg: 300
        };
        //this.f = new xr(translateApiHostScheme + language_list_url,{
        this.f = new xr(language_list_url, {
            client: xq
        }, "cb");
        this.h = g;
        a = [{
            ra: new yr(translateApiHostScheme + translateApiHost + da, g),
            fd: C(this.C, this),
            $e: 30720,
            Eg: 4294967295,
            Cg: -1,
            Ug: 0,
            qe: !1
        }, {
            ra: new xr(translateApiHostScheme + translateApiHost + da, g, "cb", G && 7 >= de),
            fd: C(this.G, this),
            $e: 1900,
            Eg: 4294967295,
            Cg: -1,
            Ug: 3,
            qe: !0
        }];
        this.o = new Fr(a);
        this.c = !1;
        for (b = 0; b < a.length; ++b)
            this.c = this.c || a[b].ra.f();
        this.c || this.Pi()
    }
    D(Er, Q);
    $q(7361, Er.prototype, {
        Oi: function () {
                Tq("te_afbr")
            },
            Pi: function () {
                Tq("te_au")
            }
    });

    function Gr(a, b) {
        if (!a.l)
            return b;
        if (typeStringOf(b) != "array")
            a = [
                [b, 200]
            ];
        else if (2 == b.length && typeStringOf(b[0]) != "array" && typeStringOf(b[1]) != "array")
            a = [
                [b[0], 200, b[1]],
                [b[1], 200, b[1]]
            ];
        else {
            a = [];
            for (var c = 0; c < b.length; ++c)
                typeStringOf(b[c]) != "array" ? a[c] = [b[c], 200] : a[c] = [b[c][0], 200, b[c][1]]
        }
        return a
    }
    Er.prototype.C = function (a) {
        var b = this;
        return function (c) {
            if (c)
                try {
                  //_console.log(c)
                    var e;
                    var d = c.indexOf("\x00");
                    0 <= d && (c = c.substr(0, d));
                    try{
                        e = eval("(" + c + ")");
                    }catch(g){
                        e = c;
                    }
                } catch (g) {
                    e = null,
                        b.Oi()
                }
            e ? a(Gr(b, e), 200) : a([], 500)
        }
    };
    Er.prototype.G = function (a) {
        var b = this;
        return function (c) {
            c ? a(Gr(b, c), 200) : a([], 500)
        }
    };
    Er.prototype.I = function (a) {
        return function (b) {
            if (b)
                try {
                    var c = eval("(" + b + ")")
                } catch (d) {
                    c = null
                }
            a(c && c[1] || void 0)
        }
    };

    function Fr(a) {
        this.b = a
    }
    Fr.prototype.start = function (a) {
        this.a = a;
        this.c = 0;
        Hr(this)
    };

    function Hr(a) {
        if (a.c >= a.b.length)
            a.a(null);
        else {
            var b = a.b[a.c++];
            b.lj ? Pq(new Oq(C(b.ra.Ya, b.ra), C(function (a) {
                a ? this.a(b) : Hr(this)
            }, a), 30, b.lj)) : b.ra.Ya() ? a.a(b) : Hr(a)
        }
    }
    Er.prototype.g = function (a) {
        this.B || (this.B = !0,
            this.o.start(C(function (b) {
                b && (this.a = b,
                    this.b.ra = b.ra);
                a()
            }, this)))
    };
    Er.prototype.Ya = function () {
        return null !== this.a && null !== this.a.ra && this.a.ra.Ya()
    };
    Er.prototype.translate = function (a, b, c, d, e, g, h, k) {
        var l = this,
            m = this.a.fd(a),
            p = {
                q: b,
                sl: c,
                tl: d
            };
        this.h.sp && 0 == this.h.sp.indexOf("nmt") || (p.sp = "nmt");
        p.tc = e;
        g && (p.ctt = 1);
        h && (p.dom = 1);
        k && (p.sr = 1);
        p[wp()] = up(b.join(""), yq);
        return this.s ? this.s.b().then(function (a) {
            null != a && (p.jwtt = a,
                p.rurl = location.hostname);
            return l.a.ra.send(p, C(Ir(m), l))
        }, function (a) {
            a && l.Wb && l.Wb(a)
        }) : this.a.ra.send(p, m)
    };

    function Ir(a) {
        return function (b, c) {
            if (c && this.Wb) {
                try {
                    var d = JSON.parse(c).error_code
                } catch (e) {
                    d = null
                }
                c = Qk[1];
                this.Wb(null != d ? Qk[d] || c : c)
            }
            a(b)
        }
    }

    function Jr(a, b) {
        b instanceof Jk ? b.then(function (b) {
            a.a.ra.cancel(b)
        }) : a.a.ra.cancel(b)
    }
    Er.prototype.F = function () {
        Er.m.F.call(this);
        this.a && (this.a.ra.M(),
            this.a.ra = null);
        this.b.ra = null;
        this.f.M();
        this.f = null
    };
    var Kr = Jq(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", "INPUT", "NOBR", "LABEL", "Q", "S", "SMALL", "SPAN", "STRIKE", "STRONG", "SUB", "SUP", "TEXTAREA", "TT", "U", "VAR"]),
        Lr = Jq(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", "INPUT", "TEXTAREA", "TITLE"]),
        Mr = Jq(["BR", "CODE", "IMG", "KBD", "MAP", "OBJECT", "PARAM", ta, "STYLE", "WBR", "svg"]),
        Nr = Jq(["submit", "button"]);

    function Or(a, b) {
        this.a = new Tm(a, !1, b, 3 == a.nodeType ? 0 : 1, 1);
        this.c = G ? [] : null;
        for (this.b = []; a = a.parentNode;)
            Pr(this, a, !0);
        this.b.push(!1);
        this.b.reverse();
        for (a = 1; a < this.b.length; ++a)
            null == this.b[a] && (this.b[a] = this.b[a - 1]);
        this.f = !1
    }
    $q(52754, Or.prototype, {
        Vi: 1
    });

    function Pr(a, b, c) {
        var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
        "pre" == d || !d && "PRE" == b.tagName ? a.b.push(!0) : d && "pre" != d ? a.b.push(!1) : c ? a.b.push(null) : a.b.push(a.b[a.b.length - 1])
    }
    Or.prototype.node = function () {
        return this.a.node
    };
    Or.prototype.depth = function () {
        return this.a.depth
    };
    Or.prototype.next = function () {
        try {
            this.c && 0 < this.c.length && -1 == this.a.a && this.c.length--, -1 == this.a.a && this.b.length--,
                this.c && 0 < this.c.length && 1 != this.a.a && !this.a.node.nextSibling ? Um(this.a, this.c[this.c.length - 1], -1, this.a.depth - 1) : (this.a.next(),
                    this.c && 1 == this.a.a && this.c.push(this.a.node)),
                1 == this.a.a && this.a.o && Pr(this, this.a.node)
        } catch (a) {
            a != dj && this.Vi(a),
                this.f = !0
        }
    };

    function Qr() {
        return "[msg_undefined]"
    }
    var Z = {};
    (function () {
        function a(a) {
            return function () {
                return a
            }
        }
        Z = {
            If: a(0),
            Ef: a(1),
            Ff: a(2),
            ik: a(3),
            vh: a(4),
            Gf: a(5),
            mh: a(45),
            nh: a(6),
            qh: a(7),
            Xc: a(8),
            wh: a(9),
            wk: a(10),
            Ah: a(11),
            rh: a(12),
            rk: a(13),
            th: a(14),
            qk: a(15),
            sh: a(16),
            yk: a(17),
            xh: a(18),
            Qj: a(19),
            hk: a(20),
            kh: a(21),
            uh: a(22),
            nk: a(23),
            mk: a(24),
            kk: a(25),
            xk: a(26),
            vk: a(27),
            lk: a(28),
            oh: a(29),
            yh: a(30),
            Pj: a(32),
            Oj: a(33),
            zh: a(34),
            ak: a(35),
            Vj: a(36),
            $j: a(37),
            Hf: a(38),
            fk: a(39),
            Df: a(40),
            ph: a(41),
            lh: a(46)
        }
    })();

    function Rr(a) {
        return '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + X(a.La) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + X(a.dir) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + X(a.Yi) + '" class="goog-logo-link" target="_blank"><img src="' + X(a.Ye) + '" alt="Google ' + ek(Z.Xc) + '"></a></td>' + (a.rc ? '<td width=1><img src="' + X(a.le) + '" width="9" height="15" title="' + X(a.rc) + '" alt="' + X(a.rc) + '" style="background-image:url(' + X(a.Oe) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + X(a.qj) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + X(a.pj) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.Kh) + '"><b>' + Zj(Z.If) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.cj) + '"></button></div></div></td></tr><tr id="' + X(a.oj) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + Zj(Z.wh) + '&nbsp;<span dir="ltr">(<b id="' + X(a.nj) + '"></b>%)</span>&nbsp;<img src="' + X(a.Ni) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.Gh) + '">' + Zj(Z.Ef) + '</button></div></div></td></tr><tr id="' + X(a.Vh) + '" style="display:none"><td><span class="goog-te-banner-content">' + X(a.Uh) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.sj) + '">' + Zj(Z.rh) + '</button></div></div></td></tr><tr id="' + X(a.Rh) + '" style="display:none" valign=middle><td><span id="' + X(a.Nh) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' + X(a.Jh) + '" class="goog-close-link" href="javascript:void(0)" title="' + ek(Z.Ff) + '"><img src="' + X(a.le) + '" width="15" height="15" alt="' + ek(Z.Ff) + '" style="background-image:url(' + X(a.Oe) + ');background-position:-28px 0px"></a></td></tr></table></body>'
    }

    function Sr(a) {
        return '<span id="' + X(a.id) + '"></span>'
    }

    function Tr(a) {
        return X(a.Og) + '<div id="' + X(a.id) + '"></div>' + X(a.Ng)
    }

    function Ur() {
        var a = G && !K("7.0");
        return '<span style="white-space:nowrap"><a class="goog-logo-link" href="' + X(rb) + '" target="_blank">' + (a ? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + X(tb) + "',sizingMethod='scale');\"></span>" : '<img src="' + X(tb) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + ek(Z.Xc) + '">') + Zj(Z.Xc) + "</a></span>"
    }

    function Vr(a) {
        return "";
        var b = a.Ye;
        a = '<div id="goog-gt-tt" class="skiptranslate" dir="' + ek(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="';
        null != b && b.Ea === Jj || null != b && b.Ea === Kj ? b = String(b).replace(rk, pk) : b instanceof Xe ? b = String(Ze(b)).replace(rk, pk) : b instanceof Ue ? b = String(We(b)).replace(rk, pk) : (b = String(b),
            b = sk.test(b) ? b.replace(rk, pk) : "about:invalid#zSoyz");
        return a + ek(b) + '" width="20" height="20" alt="Google ' + ek(Z.Xc) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + Zj(Z.ph) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>'
    }

    function Wr(a) {
        var b = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + X(a.Ch) + '" method="' + X(a.method) + '"><div class="form-buttons" style="text-align:' + (a.dir == "rtl" ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + ek(Z.uh) + '"></input><input class="activity-cancel" type="button" value="' + ek(Z.Ef) + '"></input></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        a = a.Th;
        for (var c = a.length, d = 0; d < c; d++)
            b += '<input type="hidden" name="' + X(a[d]) + '"/>';
        return b + "</div></form></div>"
    }

    function Xr() {
        return ak('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
    }

    function Yr(a) {
        return '<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + X(a.Gi) + '</div><div class="activity-form-container"></div></div>'
    }

    function Zr() {
        return ak('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"></div></div>')
    };

    function $r(a) {
        T.call(this);
        a = a || {};
        this.id = a.id || Yh(this);
        this.We = a.We || "";
        this.Od = a.Od || null;
        this.Pd = a.Pd || null;
        this.dd = a.dd || !1;
        this.className = a.className || null;
        this.c = null
    }
    D($r, T);
    $r.prototype.nc = setterFor("c");
    $r.prototype.Vb = function () {
        if (!this.V)
            throw Error("Activity must be rendered before it can be resumed.");
        if (!this.c)
            throw Error("Acitivity must have a tooltip instance to be resumed");
    };
    $r.prototype.Cb = makeEmptyFunc();
    $r.prototype.M = function () {
        this.vb || ($r.m.M.call(this),
            delete this.Pd)
    };

    function as() {
        Th.call(this);
        this.b = "closure_frame" + bs++;
        this.c = [];
        cs[this.b] = this
    }
    var ds;
    D(as, Th);
    var cs = {},
        bs = 0;

    function es(a, b) {
            var c = Ef(a);
            nj(b, function (b, e) {
                isArray(b) || (b = [b]);
                dd(b, function (b) {
                    b = c.D("INPUT", {
                        type: "hidden",
                        name: e,
                        value: b
                    });
                    a.appendChild(b)
                })
            })
        }
        //u = as.prototype;
    as.prototype.va = null;
    as.prototype.Z = null;
    as.prototype.la = null;
    as.prototype.Qb = null;
    as.prototype.bj = 0;
    as.prototype.ma = !1;
    as.prototype.xc = !1;
    as.prototype.Xd = !1;
    as.prototype.sb = null;
    as.prototype.Ue = null;
    as.prototype.Ja = 0;
    as.prototype.Pb = null;
    as.prototype.send = function (a, b, c, d) {
        if (this.ma)
            throw Error("[goog.net.IframeIo] Unable to send, already active.");
        this.sb = a = new qj(a);
        b = b ? b.toUpperCase() : "GET";
        c && (c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ nowTime()).toString(36),
            a.a.set("zx", c));
        ds || (ds = Sf("FORM"),
            ds.acceptCharset = "utf-8",
            c = ds.style,
            c.position = "absolute",
            c.visibility = "hidden",
            c.top = c.left = "-10px",
            c.width = c.height = "10px",
            c.overflow = "hidden",
            document.body.appendChild(ds));
        this.Z = ds;
        "GET" == b && es(this.Z, a.a);
        d && es(this.Z, d);
        this.Z.action = a.toString();
        this.Z.method = b;
        fs(this);
        gs(this)
    };

    function hs(a, b) {
        if (a.ma)
            throw Error("[goog.net.IframeIo] Unable to send, already active.");
        var c = new qj(b.action);
        a.sb = c;
        a.Z = b;
        a.Z.action = c.toString();
        fs(a)
    }
    as.prototype.abort = function (a) {
        if (this.ma) {
            var b = is(this);
            Jh(b);
            this.Xd = this.ma = this.xc = !1;
            this.Ja = a || 7;
            this.dispatchEvent("abort");
            js(this)
        }
    };
    as.prototype.F = function () {
        this.ma && this.abort();
        as.m.F.call(this);
        this.la && ks(this);
        gs(this);
        delete this.f;
        this.sb = this.Ue = this.Z = null;
        this.Ja = 0;
        delete cs[this.b]
    };
    as.prototype.Ld = getterFor("xc");
    as.prototype.Qc = getterFor("Xd");
    as.prototype.hc = getterFor("ma");
    as.prototype.Lb = getterFor("Ue");
    as.prototype.xe = getterFor("sb");
    as.prototype.we = getterFor("Ja");

    function fs(a) {
        a.ma = !0;
        a.xc = !1;
        a.Ja = 0;
        a.Qb = a.b + "_" + (a.bj++).toString(36);
        a.la = Ef(a.Z).D("IFRAME", {
            name: a.Qb,
            id: a.Qb
        });
        G && 7 > Number(de) && (a.la.src = 'javascript:""');
        var b = a.la.style;
        b.visibility = "hidden";
        b.width = b.height = "10px";
        b.display = "none";
        J ? b.marginTop = b.marginLeft = "-10px" : (b.position = "absolute",
            b.top = b.left = "-10px");
        if (G && !K("11")) {
            a.Z.target = a.Qb || "";
            Ef(a.Z).a.body.appendChild(a.la);
            S(a.la, "readystatechange", a.gf, !1, a);
            try {
                a.a = !1,
                    a.Z.submit()
            } catch (w) {
                Hh(a.la, "readystatechange", a.gf, !1, a),
                    ls(a, 1)
            }
        } else {
            Ef(a.Z).a.body.appendChild(a.la);
            b = a.Qb + "_inner";
            var c = lg(a.la);
            if (document.baseURI) {
                var d = escapeHTML(b);
                d = '<head><base href="' + escapeHTML(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>';
                d = zf(d, null)
            } else
                d = escapeHTML(b),
                d = zf('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null);
            F && !J ? c.documentElement.innerHTML = tf(d) : c.write(tf(d));
            S(c.getElementById(b), "load", a.Rd, !1, a);
            var e = Hf("TEXTAREA", a.Z);
            d = 0;
            for (var g = e.length; d < g; d++) {
                var h = e[d].value;
                ug(e[d]) != h && (ng(e[d], h),
                    e[d].value = h)
            }
            e = c.importNode(a.Z, !0);
            e.target = b;
            e.action = a.Z.action;
            c.body.appendChild(e);
            h = Hf("SELECT", a.Z);
            var k = Hf("SELECT", e);
            d = 0;
            for (g = h.length; d < g; d++)
                for (var l = Hf(qa, h[d]), m = Hf(qa, k[d]), p = 0, t = l.length; p < t; p++)
                    m[p].selected = l[p].selected;
            h = Hf("INPUT", a.Z);
            k = Hf("INPUT", e);
            d = 0;
            for (g = h.length; d < g; d++)
                if ("file" == h[d].type && h[d].value != k[d].value) {
                    a.Z.target = b;
                    e = a.Z;
                    break
                }
            try {
                a.a = !1,
                    e.submit(),
                    c.close(),
                    H && bl(a.eh, 250, a)
            } catch (w) {
                Hh(c.getElementById(b), "load", a.Rd, !1, a),
                    c.close(),
                    ls(a, 2)
            }
        }
    }
    as.prototype.gf = function () {
        if (this.la.readyState == "complete") {
            Hh(this.la, "readystatechange", this.gf, !1, this);
            try {
                var a = lg(this.la);
                if (G && a.location == "about:blank" && !navigator.onLine) {
                    ls(this, 9);
                    return
                }
            } catch (b) {
                ls(this, 1);
                return
            }
            ms(this, a)
        }
    };
    as.prototype.Rd = function () {
        if (!F || J || (this.la ? lg(is(this)) : null).location != "about:blank") {
            Hh(is(this), "load", this.Rd, !1, this);
            try {
                ms(this, this.la ? lg(is(this)) : null)
            } catch (a) {
                ls(this, 1)
            }
        }
    };

    function ms(a, b) {
        a.xc = !0;
        a.ma = !1;
        try {
            var c = b.body;
            a.Ue = c.textContent || c.innerText
        } catch (e) {
            var d = 1
        }
        d || typeof a.f != n || (b = a.f(b)) && (d = 4);
        d ? ls(a, d) : (a.Xd = !0,
            a.Ja = 0,
            a.dispatchEvent("complete"),
            a.dispatchEvent("success"),
            js(a))
    }

    function ls(a, b) {
        a.a || (a.Xd = !1,
            a.ma = !1,
            a.xc = !0,
            a.Ja = b,
            a.dispatchEvent("complete"),
            a.dispatchEvent("error"),
            js(a),
            a.a = !0)
    }

    function js(a) {
        ks(a);
        gs(a);
        a.Z = null;
        a.dispatchEvent("ready")
    }

    function ks(a) {
        var b = a.la;
        b && (b.onreadystatechange = null,
            b.onload = null,
            b.onerror = null,
            a.c.push(b));
        a.Pb && (cl(a.Pb),
            a.Pb = null);
        H || F && !J ? a.Pb = bl(a.Sf, 2E3, a) : a.Sf();
        a.la = null;
        a.Qb = null
    }
    as.prototype.Sf = function () {
        this.Pb && (cl(this.Pb),
            this.Pb = null);
        for (; 0 != this.c.length;) {
            var a = this.c.pop();
            bg(a)
        }
    };

    function gs(a) {
        a.Z && a.Z == ds && Zf(a.Z)
    }

    function is(a) {
        return a.la ? G && !K("11") ? a.la : lg(a.la).getElementById(a.Qb + "_inner") : null
    }
    as.prototype.eh = function () {
        if (this.ma) {
            var a = this.la ? lg(is(this)) : null;
            a && !Md(a, "documentUri") ? (Hh(is(this), "load", this.Rd, !1, this),
                navigator.onLine ? ls(this, 3) : ls(this, 9)) : bl(this.eh, 250, this)
        }
    };

    function ns(a, b) {
        T.call(this);
        this.l = a || "";
        this.c = null;
        this.h = [];
        this.a = null;
        this.o = b || "GET";
        this.f = this.g = null
    }
    D(ns, T);
    //u = ns.prototype;
    ns.prototype.D = function () {
        var a = {
            Ch: this.l,
            method: this.o,
            Th: this.h,
            dir: Te.test(rq) ? "rtl" : "ltr"
        };
        this.T(Vj(Wr, a))
    };
    ns.prototype.T = function (a) {
        this.A = a;
        this.a = $h(this, "activity-form");
        a = $h(this, "activity-submit");
        this.f = new Zi("");
        di(this.f, a);
        a = $h(this, "activity-cancel");
        this.c = new Zi("");
        di(this.c, a)
    };
    ns.prototype.P = function () {
        var a = U(this);
        a.w(this.f, "action", C(this.Aj, this));
        a.w(this.c, "action", C(this.dispatchEvent, this, "cancelled"))
    };
    ns.prototype.Aj = function () {
        var a = !0;
        this.g && (a = this.g());
        a && (a = new as,
            S(a, "success", function () {
                this.dispatchEvent("successful")
            }),
            S(a, "error", function () {
                this.dispatchEvent("failed")
            }),
            hs(a, this.a));
        this.dispatchEvent("submitted")
    };

    function os(a, b) {
        for (var c in b)
            a.a[c] && (a.a[c].value = b[c])
    }

    function ps(a, b) {
        return a.a[b] ? a.a[b].value : ""
    }
    ns.prototype.F = function () {
        this.f = this.a = this.c = null;
        ns.m.F.call(this)
    };

    function qs(a, b) {
        a.g = b
    };

    function rs(a, b) {
        $r.call(this, a);
        this.f = null;
        this.o = b || {};
        this.h = new Nm;
        this.l = this.a = null;
        this.g = new Er((a || {}).cb || "", aq);
        this.g.l = !1
    }
    D(rs, $r);
    var aq = xq.replace("_", "-") + "-alt";
    //u = rs.prototype;
    rs.prototype.nc = function (a) {
        rs.m.nc.call(this, a);
        this.g.g(C(this.Vb, this))
    };
    rs.prototype.Vb = function () {
        rs.m.Vb.call(this);
        var a = this.c.K,
            b = this.c.o;
        if (a && b) {
            ng(this.l, a);
            var c = this.h;
            c.A = b;
            $f(c.a, c.A);
            Om(c);
            P(this.h.a, !0);
            b = this.c.Zb();
            c = this.c.ya();
            if (this.g.Ya() && b && c) {
                var d = this.c.sa(),
                    e = C(this.gj, this);
                this.g && this.g.translate(e, [d], b, c, 0, !1);
                os(this.a, {
                    gtrans: a,
                    text: this.c.sa(),
                    hl: rq,
                    langpair: b + "|" + c
                });
                os(this.a, this.o);
                os(this.a, {
                    client: aq
                })
            }
            this.dispatchEvent("ready")
        }
    };
    rs.prototype.D = function () {
        this.T(Vj(Yr, {
            Gi: Z.Df
        }))
    };
    rs.prototype.T = function (a) {
        this.A = a;
        this.l = $h(this, "alt-translated-text");
        var b = $h(this, "activity-form-container");
        this.a = new ns(Hq, "POST");
        this.a.h = wd(this.o);
        qs(this.a, C(function () {
            os(this.a, {
                utrans: kq(this.f)
            });
            return ps(this.a, "utrans") != ps(this.a, "gtrans")
        }, this));
        this.a.ga(b);
        ep = Z.zh;
        Uo = Z.Df;
        this.f = new Xp(void 0, !0, a);
        Yp(this.f, this.h);
        Zp(this.f);
        $p(this.f);
        di(this.f, this.l)
    };
    rs.prototype.P = function () {
        rs.m.P.call(this);
        var a = U(this);
        a.w(this.a, "cancelled", C(function () {
            nq(this.f);
            this.dispatchEvent("cancelled")
        }, this));
        a.w(this.a, "submitted", C(function () {
            var a = kq(this.f);
            this.c.K = a && trimString(a);
            this.dispatchEvent("submitted");
            ng(this.c.$b().j(), Z.Hf)
        }, this))
    };
    rs.prototype.gj = function (a) {
        a && bq(this.f, a)
    };
    rs.prototype.Cb = function () {
        P(this.h.a, !1)
    };
    rs.prototype.F = function () {
        this.f && this.f.M();
        this.l = this.h = this.f = null;
        this.g && this.g.M();
        this.g = null;
        this.a && this.a.M();
        this.a = null;
        rs.m.F.call(this)
    };

    function ss(a, b) {
        $r.call(this, a);
        this.h = !1;
        this.g = b || {};
        this.f = null
    }
    D(ss, $r);
    //u = ss.prototype;
    ss.prototype.nc = function (a) {
        ss.m.nc.call(this, a);
        U(this).w(this.f.j(), "keydown", C(this.c.Tc, this.c, !1));
        this.h = this.c.vc;
        this.Vb()
    };
    ss.prototype.Vb = function () {
        ss.m.Vb.call(this);
        this.f.Ob(this.c.K);
        var a = this.c.Zb(),
            b = this.c.ya();
        a && b && (os(this.a, {
                gtrans: this.c.K,
                text: this.c.sa(),
                hl: rq,
                langpair: a + "|" + b
            }),
            os(this.a, this.g));
        this.dispatchEvent("ready");
        this.f.j().focus()
    };
    ss.prototype.Cb = function () {
        this.c.Tc(this.h)
    };
    ss.prototype.D = function () {
        this.T(Vj(Xr))
    };
    ss.prototype.T = function (a) {
        this.A = a;
        a = $h(this, "contribute-original-text");
        this.f = new gp("");
        di(this.f, a);
        mp(this.f);
        kp(this.f);
        a = $h(this, "activity-form-container");
        this.a = new ns(Hq, "POST");
        this.a.h = wd(this.g);
        qs(this.a, C(function () {
            os(this.a, {
                utrans: trimString(this.f.Ba())
            });
            return ps(this.a, "utrans") != ps(this.a, "gtrans")
        }, this));
        this.a.ga(a)
    };
    ss.prototype.P = function () {
        ss.m.P.call(this);
        var a = U(this);
        a.w(this.a, "cancelled", C(function () {
            this.dispatchEvent("cancelled")
        }, this));
        a.w(this.a, "submitted", C(function () {
            var a = this.f.Ba();
            this.c.K = a && trimString(a);
            this.dispatchEvent("submitted");
            ng(this.c.$b().j(), Z.Hf)
        }, this))
    };
    ss.prototype.F = function () {
        this.f && this.f.M();
        this.f = null;
        this.a && this.a.M();
        this.a = null;
        ss.m.F.call(this)
    };

    function ts(a) {
        Th.call(this);
        this.h = a;
        this.g = {};
        this.c = new Nh(this);
        this.f = null
    }
    D(ts, Th);
    ts.prototype.bh = makeEmptyFunc();
    ts.prototype.dh = makeEmptyFunc();
    ts.prototype.F = function () {
        this.c.M();
        this.c = null
    };

    function us(a, b, c) {
        if (b = a.h.c[b]) {
            c = c || "undefined" == typeof c;
            for (var d = 0; d < b.Da.length; ++d)
                b.Da[d] && a.vg(b.Da[d], c)
        }
    }
    ts.prototype.vg = function (a, b) {
        O(a, "backgroundColor", b ? "#E6ECF9" : "");
        O(a, "color", b ? "#000" : "")
    };
    var zd = {},
        vs = null;

    function ws(a) {
        a = uc(a);
        delete zd[a];
        yd() && vs && vs.stop()
    }

    function xs() {
        vs || (vs = new dl(function () {
            ys()
        }, 20));
        var a = vs;
        a.hc() || a.start()
    }

    function ys() {
        var a = nowTime();
        td(zd, function (b) {
            zs(b, a)
        });
        yd() || xs()
    };

    function As(a, b, c, d) {
        om.call(this);
        if (!isArray(a) || !isArray(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.s = a;
        this.I = b;
        this.duration = c;
        this.C = d;
        this.h = [];
        this.b = 0
    }
    D(As, om);
    //u = As.prototype;
    As.prototype.play = function (a) {
        if (a || 0 == this.a)
            this.b = 0,
            this.h = this.s;
        else if (1 == this.a)
            return !1;
        ws(this);
        this.c = a = nowTime(); - 1 == this.a && (this.c -= this.duration * this.b);
        this.l = this.c + this.duration;
        this.b || this.f();
        this.Ra("play"); - 1 == this.a && this.Ra("resume");
        this.a = 1;
        var b = uc(this);
        b in zd || (zd[b] = this);
        xs();
        zs(this, a);
        return !0
    };
    As.prototype.stop = function (a) {
        ws(this);
        this.a = 0;
        a && (this.b = 1);
        Bs(this, this.b);
        this.Cb();
        this.g()
    };
    As.prototype.tf = function (a) {
        this.b = a;
        1 == this.a && (this.c = nowTime() - this.duration * this.b,
            this.l = this.c + this.duration)
    };
    As.prototype.F = function () {
        0 == this.a || this.stop(!1);
        this.Ra("destroy");
        As.m.F.call(this)
    };

    function zs(a, b) {
        b < a.c && (a.l = b + a.l - a.c,
            a.c = b);
        a.b = (b - a.c) / (a.l - a.c);
        1 < a.b && (a.b = 1);
        Bs(a, a.b);
        1 == a.b ? (a.a = 0,
            ws(a),
            a.Ra("finish"),
            a.g()) : 1 == a.a && a.df()
    }

    function Bs(a, b) {
        isFunction(a.C) && (b = a.C(b));
        a.h = Array(a.s.length);
        for (var c = 0; c < a.s.length; c++)
            a.h[c] = (a.I[c] - a.s[c]) * b + a.s[c]
    }
    As.prototype.df = function () {
        this.Ra("animate")
    };
    As.prototype.Ra = function (a) {
        this.dispatchEvent(new Cs(a, this))
    };

    function Cs(a, b) {
        jh.call(this, a);
        this.x = b.h[0];
        this.y = b.h[1];
        this.duration = b.duration
    }
    D(Cs, jh);

    function Ds(a, b, c, d, e) {
        As.call(this, b, c, d, e);
        this.o = a
    }
    D(Ds, As);
    Ds.prototype.G = emptyFunction;
    Ds.prototype.df = function () {
        this.G();
        Ds.m.df.call(this)
    };
    Ds.prototype.g = function () {
        this.G();
        Ds.m.g.call(this)
    };
    Ds.prototype.f = function () {
        this.G();
        Ds.m.f.call(this)
    };

    function Es(a, b, c, d, e) {
        isNumber(b) && (b = [b]);
        isNumber(c) && (c = [c]);
        Ds.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length)
            throw Error("Start and end points must be 1D");
        this.B = -1
    }
    D(Es, Ds);
    var Fs = 1 / 1024;
    Es.prototype.G = function () {
        var a = this.h[0];
        if (Math.abs(a - this.B) >= Fs) {
            var b = this.o.style;
            "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
            this.B = a
        }
    };
    Es.prototype.f = function () {
        this.B = -1;
        Es.m.f.call(this)
    };
    Es.prototype.g = function () {
        this.B = -1;
        Es.m.g.call(this)
    };

    function Gs(a, b, c) {
        Es.call(this, a, 1, 0, b, c)
    }
    D(Gs, Es);
    Gs.prototype.f = function () {
        this.o.style.display = "";
        Gs.m.f.call(this)
    };
    Gs.prototype.g = function () {
        this.o.style.display = "none";
        Gs.m.g.call(this)
    };

    function Hs(a, b, c) {
        Es.call(this, a, 0, 1, b, c)
    }
    D(Hs, Es);
    Hs.prototype.f = function () {
        this.o.style.display = "";
        Hs.m.f.call(this)
    };

    function Is() {
        T.call(this);
        this.a = null
    }
    D(Is, T);
    //u = Is.prototype;
    Is.prototype.D = function () {
        this.T(this.b.D(f, {
            "class": "status-message"
        }))
    };
    Is.prototype.T = function (a) {
        this.A = a;
        a.style.display = "none"
    };

    function Js(a) {
        var b = c;
        var c = C(function () {
            ng(this.j(), "");
            b && b()
        }, a);
        c = C(a.Hi, a, 750, c);
        Ks(a, c)
    }

    function Ls(a) {
        a.a && (a.a.stop(!0),
            a.a = null);
        ng(a.j(), "");
        a.L(!1)
    }

    function Ks(a, b) {
        a.a = new Hs(a.j(), 750);
        U(a).Bb(a.a, "begin", C(function () {
            this.j().style.display = "block"
        }, a));
        U(a).Bb(a.a, "finish", C(function () {
            this.a = null;
            window.setTimeout(b, 2E3)
        }, a));
        a.a.play()
    }
    Is.prototype.Hi = function (a, b) {
        this.N() && (this.a = new Gs(this.j(), a),
            U(this).Bb(this.a, "finish", C(function () {
                b && b()
            }, this)),
            this.a.play())
    };
    Is.prototype.L = function (a) {
        this.j().style.display = a ? "block" : "none";
        this.j().style.opacity = a ? "1" : "0"
    };
    Is.prototype.N = function () {
        return this.j().style.display !== "none" && "0" !== this.j().style.opacity
    };

    function Ms() {
        Go.call(this);
        this.R = {};
        this.ib = {};
        this.I = null;
        this.Yc = !1;
        this.ub = this.f = this.H = null;
        this.X = {};
        this.l = new Nh(this);
        this.o = this.c = this.g = this.ab = this.a = this.K = this.qa = null;
        this.C = !0;
        this.bb = []
    }
    D(Ms, Go);
    //u = Ms.prototype;
    Ms.prototype.ga = function () {
        this.C = !1;
        var a = Te.test(rq) ? "rtl" : "ltr";
        this.dc(Vj(Vr, {
            //Ye: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
            Ye: "/translate/translate_static/img/translate_24dp.png",
            le: sb,
            Oe: Cq,
            dir: a
        }));
        this.className += " skiptranslate";
        if (a = !!(this.j() && this.I && this.ab && this.g.j() && this.H && this.o))
            this.l.w(window, "resize", C(this.ob, this)),
            this.l.w(this, "hide", C(this.ij, this)),
            this.bb.length && (a = this.ee.apply(this, this.bb),
                this.bb = []);
        return a
    };
    Ms.prototype.ee = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
            var d = arguments[c];
            if (d)
                if (this.I || d.Pd) {
                    var e = d;
                    var g = Sf("SPAN", {
                        "class": e.className || "activity-link"
                    });
                    ng(g, e.We || "");
                    e = g;
                    b.push(e);
                    Yf(d.Pd || this.I, e);
                    d.nc && d.Cb && (g = C(this.ai, this, d),
                        this.l.w(e, "click", g),
                        d.Od && this.l.w(this.H, d.Od, g));
                    d.id = d.id || Yh(d);
                    this.R[d.id] && this.Pg(d);
                    this.R[d.id] = d;
                    this.ib[d.id] = e
                } else
                    this.bb.push(d)
        }
        return b
    };
    Ms.prototype.Pg = function (a) {
        for (var b = 0; b < arguments.length; ++b) {
            var c = isString(arguments[b]) || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
                d = this.R[c],
                e = this.ib[c];
            d && e && (this.f && this.f.id === c && this.me(),
                this.l.ca(d, ["submitted", "cancelled"]),
                d.M(),
                this.X[c] && delete this.X[c],
                delete this.R[c],
                delete this.ib[c],
                bg(e))
        }
    };
    Ms.prototype.ai = function (a) {
        if (this.H) {
            a != this.f && this.f && (Ls(this.g),
                this.f.Cb.call(this.f),
                this.f.j() && (this.f.j().style.display = "none"),
                Ns(this, !1),
                this.f = null);
            Ns(this, !0);
            Ls(this.g);
            this.f = a;
            if (this.X[a.id]) {
                var b = this.X[a.id];
                var c = a.Vb
            } else
                a.ga(),
                b = a.j(),
                c = a.nc,
                this.l.w(a, ["submitted", "cancelled"], C(this.me, this)),
                a.dd && (this.X[a.id] = b);
            Yf(this.H, b);
            c.call(a, this);
            a = new Hs(b, 100);
            this.l.Bb(a, "finish", C(this.ob, this, !0, !0));
            a.play()
        }
    };
    Ms.prototype.me = function () {
        if (this.f)
            if (Ls(this.g),
                this.f.Cb.call(this.f),
                this.f.j()) {
                var a = new Gs(this.f.j(), 100);
                this.l.Bb(a, "finish", C(function () {
                    bg(this.f.j());
                    this.f = null;
                    Ns(this, !1);
                    sg(this.g.j()) && (Js(this.g),
                        this.ob(!0, !0))
                }, this));
                a.play()
            } else
                Ns(this, !1),
                this.f = null
    };
    Ms.prototype.af = function (a, b) {
        this.ub = a;
        Ms.m.af.call(this, a, b);
        this.j().style.display = "block"
    };
    Ms.prototype.He = function (a) {
        if (!this.C) {
            var b = Po(this, a.target);
            this.Aa = b;
            this.Xb();
            b != this.b ? (this.b = b,
                Qo(this, b),
                Ro(this),
                Oo(this, a)) : Qo(this, b)
        }
    };
    Ms.prototype.ij = function () {
        Ls(this.g);
        this.Yc && this.me()
    };
    Ms.prototype.F = function () {
        for (var a in this.R)
            this.Pg(a);
        this.l && this.l.M();
        this.l = null;
        this.g && this.g.M();
        this.o = this.ab = this.ub = this.H = this.I = this.g = null;
        Ms.m.F.call(this)
    };

    function Ns(a, b) {
        a.Yc = b;
        a.C = b;
        if (a.C) {
            var c = a.j();
            a.qa = new M(c.offsetLeft, c.offsetTop)
        } else
            a.qa && (null != (a.s || null) && ((a.s || null).a = a.qa),
                Dg(a.j(), a.qa),
                a.qa = null);
        a.I.style.display = b ? "none" : "inline-block";
        a.ab.style.display = b ? "inline-block" : "none"
    }
    Ms.prototype.Tc = function (a) {
        this.N() ? (this.vc = a, (this.vc ? this.h.w : this.h.ca).call(this.h, N(this.j()), "mousedown", this.ef, !0)) : Ms.m.Tc.call(this, a)
    };
    Ms.prototype.dc = function (a) {
        Ms.m.dc.call(this, a);
        if (a) {
            this.I = Kf("activity-links", a);
            var b = Kf("status-message", a);
            b && (this.g = new Is,
                di(this.g, b));
            this.ab = Kf("started-activity-container", a);
            this.H = Kf("activity-root", a);
            this.o = Kf("original-text", a)
        }
    };
    Ms.prototype.ob = function (a, b) {
        var c = Jg(document.body).y;
        if (this.s) {
            (this.s || null).a.y += c;
            Ms.m.ob.call(this);
            var d = parseInt(this.j().style.left, 10);
            a = parseInt(this.j().style.top, 10) - (a ? 0 : c);
            b && (b = this.Ze || {},
                a -= b.top || 10,
                d -= b.left || 10);
            a -= c;
            (this.s || null).a.y = a;
            (this.s || null).a.x = d;
            Dg(this.j(), new M(d, a))
        }
    };
    Ms.prototype.Ub = setterFor("a");
    Ms.prototype.ua = setterFor("c");
    Ms.prototype.Qa = function (a) {
        a = a ? trimString(a) : "";
        this.o ? ng(this.o, a) : Ms.m.Qa.call(this, a)
    };
    Ms.prototype.Zb = getterFor("a");
    Ms.prototype.$b = getterFor("g");
    Ms.prototype.ya = getterFor("c");
    Ms.prototype.sa = function () {
        return this.o ? sg(this.o) : Ms.m.sa.call(this)
    };
    Ms.prototype.ec = function (a) {
        this.C || Ms.m.ec.call(this, a)
    };
    Ms.prototype.Gd = function (a) {
        this.C || Ms.m.Gd.call(this, a)
    };
    Ms.prototype.Fd = function (a) {
        this.C || Ms.m.Fd.call(this, a)
    };
    var Os = {
        set: function (a, b) {
                a.className = b
            },
            get: function (a) {
                a = a.className;
                return isString(a) && a.match(/\S+/g) || []
            },
            add: function (a, b) {
                var c = Os.get(a),
                    d = od(arguments, 1),
                    e = c.length + d.length;
                Os.Kf(c, d);
                Os.set(a, c.join(" "));
                return c.length == e
            },
            remove: function (a, b) {
                var c = Os.get(a),
                    d = od(arguments, 1),
                    e = Os.Yf(c, d);
                Os.set(a, e.join(" "));
                return e.length == c.length - d.length
            },
            Kf: function (a, b) {
                for (var c = 0; c < b.length; c++)
                    jd(a, b[c]) || a.push(b[c])
            },
            Yf: function (a, b) {
                return ed(a, function (a) {
                    return !jd(b, a)
                })
            },
            Bj: function (a, b, c) {
                for (var d = Os.get(a), e = !1, g = 0; g < d.length; g++)
                    d[g] == b && (nd(d, g--, 1),
                        e = !0);
                e && (d.push(c),
                    Os.set(a, d.join(" ")));
                return e
            },
            Bk: function (a, b, c) {
                var d = Os.get(a);
                isString(b) ? kd(d, b) : isArray(b) && (d = Os.Yf(d, b));
                isString(c) && !jd(d, c) ? d.push(c) : isArray(c) && Os.Kf(d, c);
                Os.set(a, d.join(" "))
            },
            has: function (a, b) {
                return jd(Os.get(a), b)
            },
            enable: function (a, b, c) {
                c ? Os.add(a, b) : Os.remove(a, b)
            },
            toggle: function (a, b) {
                var c = !Os.has(a, b);
                Os.enable(a, b, c);
                return c
            }
    };

    function Ps(a, b) {
        ts.call(this, a);
        b = b || {};
        this.a = {
            cb: b.cb || "",
            Kb: b.Kb || 1
        };
        this.b = null
    }
    D(Ps, ts);
    //u = Ps.prototype;
    Ps.prototype.bh = function (a, b) {
        b && (b.a = a,
            Ho(this.b, b))
    };
    Ps.prototype.dh = function (a) {
        a && Jo(this.b, a)
    };
    Ps.prototype.Jj = function () {
        var a = this.b.ub;
        if (a && void 0 !== a.a) {
            var b = a.a;
            a = this.h.c[b];
            us(this, this.f, !1);
            this.f = b;
            us(this, b);
            this.b.Ub(a.zj);
            this.b.ua(a.Kj);
            b = a.U;
            this.b.K = b && trimString(b);
            this.b.Qa(a.text)
        }
    };
    Ps.prototype.Ij = function () {
        us(this, this.f, !1)
    };
    Ps.prototype.Kg = function () {
        this.h.c[this.f].Sh.dispatchEvent("updating")
    };
    Ps.prototype.F = function () {
        this.b.M();
        this.b = null;
        Ps.m.F.call(this)
    };
    Ps.prototype.vg = function (a, b) {
        Os[b ? "add" : "remove"](a, "goog-text-highlight")
    };
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var Qs;
    (function () {
        var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        Qs = function (b, c) {
            var d = [],
                e;
            c = c || a.length;
            if (b)
                for (e = 0; e < b; e++)
                    d[e] = a[0 | Math.random() * c];
            else
                for (d[8] = d[13] = d[18] = d[23] = "-",
                    d[14] = "4",
                    e = 0; 36 > e; e++)
                    d[e] || (b = 0 | 16 * Math.random(),
                        d[e] = a[19 == e ? b & 3 | 8 : b]);
            return d.join("")
        }
    })();

    function Rs(a) {
        this.h = a;
        this.c = this.a = this.f = this.b = -1;
        this.g = !1;
        this.s = 0;
        this.o = "";
        this.B = 0
    }
    Rs.prototype.start = function () {
        this.g || (this.g = !0,
            this.o = Qs(15, 62),
            this.s = 0,
            this.c = this.a = this.f = this.b = -1,
            this.B = nowTime(),
            bl(this.l, 1E4, this))
    };
    Rs.prototype.stop = function () {
        this.g && (this.g = !1,
            Ss(this))
    };
    Rs.prototype.l = function () {
        this.g && (Ss(this),
            bl(this.l, 1E3, this))
    };

    function Ss(a) {
        var b = a.h.f,
            c = a.h.h,
            d = a.h.c,
            e = a.h.g;
        if (a.b != b || a.f != c || a.a != d || a.c != e) {
            var g = {};
            g.ct = b;
            g.cv = c;
            g.cts = d;
            g.cvs = e;
            g.sid = a.o;
            g.seq = a.s++;
            g.tat = nowTime() - a.B;
            if (0 <= a.b || 0 <= a.f || 0 <= a.a || 0 <= a.c)
                g.pt = a.b,
                g.pv = a.f,
                g.pts = a.a,
                g.pvs = a.c;
            Tq("te_v", g);
            a.b = b;
            a.f = c;
            a.a = d;
            a.c = e
        }
    };

    function Ts() {
        this.g = this.c = this.h = this.f = 0;
        this.a = [];
        this.b = null != _window.IntersectionObserver ? new IntersectionObserver(C(this.l, this)) : null
    }
    $q(36546, Ts.prototype, {
        yg: 1
    });
    var Us = "_gt_" + Math.random().toString(36).substr(2);
    Ts.prototype.reset = function () {
        this.g = this.c = this.h = this.f = 0;
        this.a = []
    };
    Ts.prototype.l = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (0 < c.intersectionRatio && null != c.target[Us]) {
                this.h += sg(c.target).length;
                var d = c.target[Us];
                this.g += this.a[d];
                this.a[d] = 0;
                c.target[Us] = void 0
            }
        }
    };

    function Vs(a, b) {
        Q.call(this);
        a = a || {};
        this.a = Bd(a);
        this.a.Kb = a.Kb;
        this.a.wf = !!a.wf;
        this.a.Lh = parseInt(a.Lh, 10) || 300;
        this.a.mj = a.mj;
        this.a.Wc = a.Wc || !1;
        this.h = 0;
        this.c = {};
        this.l = new Nh(this);
        this.f = new Ps(this, this.a);
        b && (this.f.g = b || {});
        a = this.f;
        a.b = new Ms;
        a.b.ug = 300;
        a.b.Yg = 1E3;
        a.b.Tc(!0);
        a.c.w(a.b, "show", C(a.Jj, a));
        a.c.w(a.b, "hide", C(a.Ij, a));
        b = new rs({
            cb: a.a.cb,
            id: "alternate",
            We: Z.kh,
            dd: !0
        }, a.g);
        a.b.ee(b);
        a.c.w(b, "submitted", C(a.Kg, a));
        a.a.Kb && (b = new ss({
                id: "contribute",
                Od: "dblclick",
                dd: !0
            }, a.g),
            a.b.ee(b),
            a.c.w(b, "submitted", C(a.Kg, a)));
        a.b.ga();
        this.g = this.b = null;
        this.a.Wc && null != _window.IntersectionObserver && (this.b = new Ts,
            this.g = new Rs(this.b))
    }
    D(Vs, Q);

    function Ws(a, b, c, d, e, g) {
        d = a.c[++a.h] = {
            id: a.h.toString(),
            Sh: g,
            text: c,
            Gk: e || c,
            U: d,
            zj: a.s,
            Kj: a.o,
            Da: b
        };
        for (e = 0; e < b.length; ++e)
            b[e] && a.f.bh(d.id, b[e]);
        if (a.b)
            for (e = a.b,
                g = c.length,
                e.c += g,
                c = e.a.length,
                e.a.push(g),
                g = 0; g < b.length; ++g) {
                var h = e,
                    k = b[g];
                fg(k) ? (k[Us] = c,
                    h.f += sg(k).length,
                    h.b && h.b.observe(k)) : h.yg(k.nodeType)
            }
        a.g && a.g.start();
        return d.id
    }

    function Xs(a) {
        a.g && a.g.stop();
        for (var b in a.c) {
            var c = a,
                d = b,
                e = c.c[d];
            if (e) {
                if (c.b)
                    for (var g = c.b, h = e.Da, k = 0; k < h.length; ++k) {
                        var l = g,
                            m = h[k];
                        fg(m) ? (m[Us] = void 0,
                            l.b && l.b.unobserve(m)) : l.yg(m.nodeType)
                    }
                for (g = 0; g < e.Da.length; ++g)
                    e.Da[g] && c.f.dh(e.Da[g]);
                delete c.c[d]
            }
        }
        a.b && a.b.reset()
    }
    Vs.prototype.F = function () {
        Xs(this);
        this.l.M();
        this.l = null;
        this.f.M();
        this.f = null
    };

    function Ys(a) {
        for (var b = 0; b < a.length; ++b)
            if (a[b] && a[b].node)
                return a[b].node;
        return null
    }

    function Zs(a) {
        var b = Ys(a);
        if (!b)
            return null;
        var c = [],
            d = [],
            e = [];
        b = new Or(b, !0);
        var g = a[a.length - 1].node,
            h = 0,
            k = !1;
        do {
            b.next();
            var l = b.node();
            if (!l)
                break;
            var m = b.a.a,
                p = b.depth();
            for (1 == m && --p; h < a.length && !a[h].node;)
            ++h;
            l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !$s(at(l))) ? (m = bt(l),
                d.push({
                    node: m,
                    Qa: makeEmptyFunc()
                }),
                e[d.length - 1] = p,
                $f(m, l),
                l == a[h].node && (c[h++] = d.length - 1,
                    k = !0)) : k = !1
        } while (l != g);
        return {
            Cf: e,
            jj: c,
            Ji: d
        }
    }

    function $s(a) {
        return null != a && Mr[a.tagName]
    }

    function at(a) {
        if (null == a)
            return null;
        for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == trimString(sg(a));)
            a = a.previousSibling;
        return a
    }

    function ct(a, b, c, d, e, g) {
        Th.call(this);
        this.a = [];
        for (var h = 0; h < a.length; ++h)
            this.a.push("nodeType" in a[h] ? dt(a[h]) : a[h]),
            et(a[h].node);
        this.f = b;
        this.G = d || 0;
        this.K = e || 0;
        this.l = c;
        this.s = g || null;
        this.C = this.B = this.I = !1;
        this.c = [];
        this.h = [];
        this.b = [];
        this.J = [];
        new Nh(this);
        this.g = this.H = !1
    }
    var dt;
    D(ct, Th);

    function ft() {
        this.b = {};
        this.a = {}
    }
    ft.prototype.has = function (a, b) {
        return null != this.b[a] || null != this.a[a] || b && (a in this.b || a in this.a)
    };
    ft.prototype.write = function (a, b) {
        this.a[a] = b
    };
    ft.prototype.remove = function (a) {
        delete this.a[a];
        delete this.b[a]
    };
    var gt = "_gt_" + Math.random().toString(36).substr(2),
        ht = "_gtn_" + Math.random().toString(36).substr(2);

    function it(a) {
            if (!a)
                return !1;
            if (3 != a.nodeType || !G)
                return gt in a && !!a[gt];
            if (!a.parentNode)
                return !0;
            if (!(ht in a.parentNode))
                return !1;
            var b = a.parentNode[ht];
            if (!b || !b[a.nodeValue])
                return !1;
            b = b[a.nodeValue];
            for (var c = 0; c < b.length; ++c)
                if (b[c] == a)
                    return !0;
            return !1
        }
        (function () {
            function a(a) {
                document.title = a
            }
            var b = {};
            dt = function (c, d) {
                if (c.tagName == "TITLE")
                    return {
                        node: c,
                        Qa: a,
                        be: !0,
                        wg: !0,
                        Af: !0
                    };
                if (3 == c.nodeType)
                    return {
                        node: c,
                        Qa: function (a, b) {
                            ng(b, a)
                        }
                    };
                d || (d = "value");
                b[d] || (b[d] = function (a, b) {
                    b.setAttribute && b.setAttribute(d, a);
                    isString(a) && (b[d] = a)
                });
                c = {
                    node: c,
                    Qa: b[d],
                    be: !0
                };
                "value" != d && (c.Af = !0);
                return c
            }
        })();

    function jt(a, b) {
        if (!a)
            return "";
        if (a.tagName == "TITLE")
            return String(document.title);
        3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
        return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : isString(a[b]) ? String(a[b]) : ""
    }
    ct.prototype.da = getterFor("f");

    function kt(a, b, c, d) {
        d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : sg(d);
        d = {
            S: c,
            U: unescapeHTML(d)
        };
        a.push(d);
        b[c] ? b[c].end = d : b[c] = {
            start: d,
            end: d
        };
        return d
    }

    function lt(a, b, c) {
        b = {
            Lg: b,
            hf: c,
            aa: []
        };
        a.b.push(b);
        return b
    }

    function mt(a) {
        if (!a.g && a.I && !a.B && !a.C) {
            a.B = !0;
            var b;
            if (b = nt(a.a)) {
                b = a.a;
                var c = a.b;
                if (1 == b.length && b[0] && b[0].Af) {
                    for (var d = [], e = 0; e < c.length; ++e)
                        for (var g = 0; g < c[e].aa.length; ++g)
                            d.push(c[e].aa[g].U);
                    b[0].Qa(d.join(" "), b[0].node);
                    b = !0
                } else
                    b = !1;
                b = !b
            }
            if (b && (b = Zs(a.a))) {
                a.h = b.jj;
                a.c = b.Ji;
                d = a.a;
                e = a.h;
                g = a.c;
                var h = b.Cf;
                c = [];
                for (var k = 0; k < d.length; ++k)
                    if (c[k] = [],
                        d[k].node && isDefined(e[k]))
                        for (var l = 0; l < g.length; ++l)
                            if (!(h[l] > h[e[k]])) {
                                if (h[l] == h[e[k]]) {
                                    if (g[l].node.parentNode != g[e[k]].node.parentNode)
                                        continue
                                } else {
                                    for (var m = h[e[k]] - h[l], p = g[e[k]].node.parentNode; m-- && p && p != g[l].node.parentNode;)
                                        p = p.parentNode;
                                    if (p != g[l].node.parentNode)
                                        continue
                                }
                                c[k].push(l)
                            }
                d = a.a;
                e = a.b;
                g = -1;
                for (h = e.length - 1; 0 <= h; --h)
                    for (k = e[h],
                        l = k.aa.length - 1; 0 <= l; --l)
                        if (m = k.aa[l], !(0 > m.S) && d[m.S] && d[m.S].node)
                            if (0 > g)
                                m.Kd = Jq(c[m.S]),
                                g = c[m.S][c[m.S].length - 1];
                            else
                                for (p = c[m.S].length - 1; 0 <= p; --p)
                                    if (c[m.S][p] <= g) {
                                        m.Kd = Jq(c[m.S].slice(0, p + 1));
                                        g = c[m.S][p];
                                        break
                                    }
                for (c = e = 0; c < a.b.length; ++c) {
                    d = a.b[c];
                    g = a.a;
                    h = d;
                    k = b.Cf;
                    l = a.h;
                    m = "";
                    for (p = 0; p < h.aa.length; ++p) {
                        var t = h.aa[p];
                        m += t.U;
                        if (0 > t.S) {
                            var w = -1,
                                I = -1,
                                R = l[h.aa[p - 1].S];
                            isDefined(R) && (w = k[R]);
                            p < h.aa.length - 1 && (R = l[h.aa[p + 1].S],
                                isDefined(R) && (I = k[R]));
                            if (0 <= w || 0 <= I)
                                a: if (I = (0 > w || I < w) && p < h.aa.length - 1,
                                    w = h.aa[I ? p + 1 : p - 1], !(w.S >= g.length) && null != g[w.S].node) {
                                    R = t.U;
                                    t.U = "";
                                    if (/^ +$/.test(R) && (t = I ? w.U.charCodeAt(0) : w.U.charCodeAt(w.U.length - 1),
                                        3584 <= t && 3711 >= t || 12288 <= t && 12351 >= t || 12352 <= t && 12543 >= t || 12784 <= t && 12799 >= t || 19968 <= t && 40959 >= t || 65280 <= t && 65519 >= t))
                                        break a;
                                    w.U = I ? R + w.U : w.U + R
                                }
                        }
                    }
                    g = m;
                    h = a.a;
                    k = d;
                    l = a.c;
                    m = b.Cf;
                    p = a.h;
                    t = [];
                    for (w = 0; w < k.aa.length && !(e >= l.length); ++w)
                        if (I = k.aa[w],
                            I.Kd && !(0 > I.S) && h[I.S].node && I.U)
                            if (e == p[I.S] || e in I.Kd && (!(e + 1 in I.Kd) || e + 1 != p[I.S])) {
                                if (l[e] && l[e].node) {
                                    R = bt(l[e].node);
                                    t.push(R);
                                    for (var ma = l[e].node, zu = m[p[I.S]] - m[e], Il = R, Ii = h[I.S].node.parentNode, Ji = Il; Ii && zu--;)
                                        Ji = Ii.cloneNode(!1),
                                        Ji.appendChild(Il),
                                        Ii = Ii.parentNode,
                                        Il = Ji;
                                    ma.appendChild(Ji);
                                    ma = h[I.S].node;
                                    h[I.S].be ? h[I.S].wg || R.appendChild(ma) : (ma = h[I.S].node.cloneNode(!1),
                                        ma.id && (ma.id = ""),
                                        R.appendChild(ma));
                                    h[I.S].Qa(I.U, ma)
                                }
                            } else
                                ++e,
                                --w;
                    h = t;
                    t = a.a;
                    k = a.l;
                    if (d.Lg)
                        k = d.Lg;
                    else {
                        l = t.length;
                        m = -1;
                        for (p = 0; p < d.aa.length; ++p)
                            w = d.aa[p].S,
                            0 <= w && t[w] && t[w].node && (m = Math.max(m, w),
                                l = Math.min(l, w));
                        t = "";
                        for (p = l; p <= m; ++p)
                            k[p] && (t += k[p]);
                        k = t
                    }
                    if (a.s)
                        3 != a.s.a.Kb && a.J.push(Ws(a.s, h, k, g, d.hf, a));
                    else
                        for (d = 0; d < h.length; ++d)
                            h[d].title = k
                }
                b = a.a;
                for (c = 0; c < b.length; ++c)
                    b[c].node && !b[c].be && bg(b[c].node);
                b = a.a;
                c = a.c;
                a = a.h;
                for (e = d = 0; e < c.length; ++e)
                    if (g = c[e].node) {
                        for (; d < b.length && e > a[d];)
                            d++;
                        (d >= b.length || e != a[d]) && !g.firstChild && (bg(g),
                            c[e].node = null)
                    }
            }
        }
    }
    ct.prototype.restore = function () {
        if (this.B)
            if (this.B = !1,
                this.s && Xs(this.s),
                this.J = [],
                nt(this.c),
                1 == this.a.length && this.a[0].Af)
                this.a[0].Qa(this.l[0], this.a[0].node);
            else {
                for (var a = 0, b = 0; b < this.c.length; ++b) {
                    var c = this.c[b].node;
                    if (c) {
                        for (; a < this.a.length && b > this.h[a];) {
                            var d = a++;
                            this.a[d].node && (ot(this.a[d].node),
                                this.a[d].node = null)
                        }
                        if (a < this.a.length && b == this.h[a] && this.a[a].node) {
                            this.a[a].wg || (Zf(c),
                                c.appendChild(this.a[a].node));
                            this.a[a].Qa(this.l[a], this.a[a].node);
                            a++;
                            d = c;
                            var e = d.parentNode;
                            if (e && 11 != e.nodeType)
                                if (d.removeNode)
                                    d.removeNode(!1);
                                else {
                                    for (; c = d.firstChild;)
                                        e.insertBefore(c, d);
                                    bg(d)
                                }
                        } else
                            bg(c)
                    }
                }
                this.c = []
            }
    };
    ct.prototype.F = function () {
        ct.m.F.call(this);
        this.restore();
        for (var a = 0; a < this.a.length; ++a)
            this.a[a].node && ot(this.a[a].node);
        this.a = null
    };

    function et(a) {
        if (a)
            if (3 == a.nodeType && G) {
                ht in a.parentNode && a.parentNode[ht] || (a.parentNode[ht] = {});
                var b = a.parentNode[ht];
                b[a.nodeValue] || (b[a.nodeValue] = []);
                b = b[a.nodeValue];
                for (var c = 0; c < b.length; ++c)
                    if (b[c] == a)
                        return;
                b.push(a)
            } else
                a[gt] = 1
    }

    function ot(a) {
        if (!a || 3 == a.nodeType && G) {
            var b = a.parentNode;
            if (b && ht in b) {
                var c = b[ht];
                if (c && a && c[a.nodeValue]) {
                    var d = c[a.nodeValue];
                    if (d)
                        for (var e = 0; e < d.length; ++e)
                            if (d[e] == a) {
                                d.splice(e, 1);
                                break
                            }
                    0 == d.length && delete c[a.nodeValue]
                }
                if (c && Yq(c))
                    try {
                        delete b[ht]
                    } catch (g) {
                        b[ht] = ""
                    }
            }
        } else if (gt in a)
            try {
                delete a[gt]
            } catch (g) {
                a[gt] = ""
            }
    }

    function nt(a) {
        for (var b = 0; b < a.length; ++b)
            try {
                a[b].node && !a[b].node.parentNode && (a[b].node = null)
            } catch (c) {
                a[b].node = null
            }
        for (b = a.length - 1; 0 <= b && !a[b].node; --b)
        ;
        a.length = b + 1;
        return a.length
    }

    function bt(a) {
        a = a.ownerDocument ? a.ownerDocument.createElement("font") : document.createElement("font");
        et(a);
        a.style.verticalAlign = "inherit";
        return a
    }

    function pt(a) {
        for (var b, c = a.firstChild; c; c = b)
            b = c.nextSibling,
            3 != c.nodeType && (c == a.firstChild ? $f(c, a) : ag(c, a),
                pt(c))
    };

    function qt(a, b, c, d, e) {
        b = b || {};
        this.wa = e || [];
        this.h = [];
        this.o = [];
        rt(this, a || document.documentElement, !isDefined(b.Sg) || !!b.Sg);
        this.l = c || ct;
        this.C = b.Mi;
        this.c = this.a = this.g = this.Ac = null;
        this.s = !!b.Nj;
        this.H = !!b.Mj;
        this.I = this.s ? 27 : 13;
        this.G = !0;
        this.B = [];
        this.f = new fm(this, d)
    }
    $q(5762, qt.prototype, {
        Ui: 1
    });

    function st(a, b, c, d) {
        a.f.c || (b = {
                fh: b,
                Zg: c,
                Da: [],
                Mg: [],
                Ib: [],
                Yd: 0,
                size: 0,
                continuous: !0
            },
            a.Ac = null,
            im(a.f, a.b),
            jm(a.f, d),
            km(a.f, C(function (a) {
                this.Ui(a);
                d()
            }, a)),
            lm(a.f, b))
    }

    function tt(a, b) {
        return 0 < a.Da.length ? new b(a.Da, a.Ib.join(""), a.Mg, a.Yd, a.size) : null
    }

    function ut(a, b) {
        if (!a.c)
            return a.Ac = tt(b, a.l), !0;
        if (!b.continuous && 0 < b.Da.length)
            return a.Ac = tt(b, a.l), !0;
        b.continuous = a.c.Gg;
        a: {
            var c = a.c;
            var d = a.I;
            if (b.size > b.Zg || b.Yd > b.fh)
                c = !1;
            else {
                var e = c.size,
                    g = c.text.length;
                if (0 != b.Da.length && (e += 1 == b.Da.length ? b.size + d + d : b.size + d,
                    g += b.Yd,
                    e > b.Zg || g > b.fh)) {
                    c = !1;
                    break a
                }
                b.size = e;
                b.Yd = g;
                b.Da.push(c.node);
                b.Mg.push(c.text);
                d = b.Da.length - 1;
                0 == d ? b.Ib.push(c.se) : (1 == d && (b.Ib[0] = "<a i=0>" + b.Ib[0] + "</a>"),
                    b.Ib.push("<a i=" + d + ">"),
                    b.Ib.push(c.se),
                    b.Ib.push("</a>"));
                c = !0
            }
        }
        if (c)
            return a.c = null, !1;
        a.Ac = tt(b, a.l);
        return !0
    }

    function vt(a, b, c) {
        var d = jt(b, c);
        d && trimString(unescapeSpace(d)) && a.B.push({
            node: b,
            Eh: c,
            text: d
        })
    }
    qt.prototype.b = function (a, b) {
        if (this.c && ut(this, b))
            return hm;
        if (!this.a) {
            this.G = !!this.h.length;
            if (!this.h.length && (a = this.B.shift()))
                return this.c = {
                        Gg: !1,
                        node: dt(a.node, a.Eh),
                        text: a.text,
                        se: escapeHTML(a.text),
                        size: this.s ? encodeUrl(a.text).length : a.text.length
                    },
                    b.continuous = !1,
                    ut(this, b),
                    hm;
            a = this.h.shift() || this.o.shift();
            if (!a)
                return this.c = null,
                    ut(this, b),
                    hm;
            this.g = [a.Lj];
            this.a = new Or(a.root)
        }
        this.a.next();
        if (this.a.f)
            return this.a = null,
                b.continuous = !1,
                this.b;
        a = this.a.node();
        var c = this.a.a.a;
        if (-1 == c) {
            wt(this);
            if (!a || 3 != a.nodeType && !Kr[a.tagName])
                b.continuous = !1;
            return this.b
        }
        var d = !it(a) && (a.nodeType == Ec && xt(this) || !Ge(a, "notranslate") && (Ge(a, "translate") || xt(this)));
        this.g.push(d);
        c = 1 == c;
        if (((d = !!a && (3 == a.nodeType && isString(a.nodeValue) || a.tagName == "TITLE" && isString(a.value) || a.tagName == "TEXTAREA" && Ge(a, "translate") || a.tagName == "INPUT" && (Nr[a.type] || Ge(a, "translate")))) || c) && this.G && !yt(a))
            return rt(this, a, xt(this), !0),
                this.a.a.g(),
                wt(this),
                this.b;
        if (c && xt(this)) {
            this.H && vt(this, a, "title");
            vt(this, a, "alt");
            var e = this.a;
            if (e.b[e.b.length - 1])
                for (e = a.firstChild; e;) {
                    if (3 == e.nodeType) {
                        var g = e.nodeValue.split("\n");
                        if (2 < g.length || 2 == g.length && "" != trimString(g[0]) && "" != trimString(g[1])) {
                            e.nodeValue = g[0];
                            for (var h = 1; h < g.length; ++h) {
                                var k = N(a).createElement("font");
                                this.wa.push(k);
                                ag(k, e);
                                e = k;
                                ag(N(a).createTextNode("\n" + g[h]), e);
                                e = e.nextSibling
                            }
                        }
                    }
                    e = e.nextSibling
                }
        }
        if (d) {
            this.a.a.g();
            if (xt(this)) {
                var l = jt(a);
                if (trimString(unescapeSpace(l)) && (this.c = {
                        Gg: !0,
                        node: dt(a),
                        text: l,
                        se: escapeHTML(l),
                        size: this.s ? encodeUrl(l).length : l.length
                    },
                    ut(this, b)))
                    return wt(this),
                        hm
            }
            wt(this);
            return this.b
        }
        if (c) {
            if (zt(a) || !a.firstChild && a.tagName != "IFRAME")
                return b.continuous = b.continuous && !!Mr[a.tagName],
                    this.a.a.g(),
                    wt(this),
                    this.b;
            if (a.tagName == "IFRAME") {
                try {
                    if (!(l = !a.src.match(/https?:\/\//))) {
                        var m = a.src.match(oj)[3] || null;
                        l = (m ? decodeURI(m) : m) == window.location.hostname
                    }
                    if (l) {
                        var p = lg(a).documentElement;
                        p && rt(this, p, xt(this))
                    }
                } catch (t) {}
                b.continuous = !1;
                this.a.a.g();
                wt(this);
                return this.b
            }
            xt(this) && a && (3 == a.nodeType || Kr[a.tagName]) ? this.C && "A" == a.tagName && a.href && this.C(a) : b.continuous = !1;
            return this.b
        }
        this.a.a.g();
        wt(this);
        return this.b
    };

    function zt(a) {
        return it(a) || 3 != a.nodeType && (!a.tagName || Lr[a.tagName] || Mr[a.tagName] || Ge(a, "skiptranslate") || "gts-order" == a.id)
    }

    function yt(a) {
        if (3 == a.nodeType)
            return !0;
        if (1 != a.nodeType)
            return !1;
        if (!a.offsetWidth || !a.offsetHeight) {
            var b = N(a),
                c = null;
            b.defaultView && b.defaultView.getComputedStyle ? c = b.defaultView.getComputedStyle(a, null) : c = a.currentStyle;
            return c && c.display != "none" && c.visibility != "hidden"
        }
        return !0
    }

    function rt(a, b, c, d) {
        (d ? a.o : a.h).push({
            root: b,
            Lj: !isDefined(c) || c
        })
    }

    function xt(a) {
        return a.g[a.g.length - 1]
    }

    function wt(a) {
        a.g.pop()
    };

    function At() {
        Q.call(this);
        this.a = []
    }
    D(At, Q);
    At.prototype.restore = function () {
        bl(this.b, 0, this)
    };
    At.prototype.b = function () {
        for (var a = 0; a < this.a.length; ++a)
            bg(this.a[a]);
        this.a = []
    };
    At.prototype.F = function () {
        At.m.F.call(this);
        this.restore()
    };

    function Bt(a) {
        var b = new Do;
        nj(a, function (a) {
            if (fg(a))
                b.add(a);
            else {
                a: {
                    var c;
                    if (Ne && !(G && K("9") && !K("10") && _window.SVGElement && a instanceof _window.SVGElement) && (c = a.parentElement)) {
                        a = c;
                        break a
                    }
                    c = a.parentNode;
                    a = fg(c) ? c : null
                }
                null != a && b.add(a)
            }
        });
        return b
    };

    function Ct(a) {
        this.b = !0;
        this.f = a;
        this.c = !1;
        this.a = []
    }
    Ct.prototype.da = function () {
        return this.a.join("")
    };

    function Dt(a, b) {
        this.g = a;
        this.f = !0;
        this.c = b;
        this.a = null;
        this.b = 0
    }

    function Et(a, b) {
        return a.f ? (b(C(a.h, a), a.g, a.c ? "en" : ""), !0) : !1
    }
    Dt.prototype.h = function (a, b, c) {
        this.a = b;
        this.b = c;
        a()
    };

    function Ft(a, b) {
        this.f = a;
        this.o = !!b;
        this.b = this.s = 0;
        this.g = this.c = -1;
        this.h = this.l = this.a = 0
    }
    var Gt = Jq(". , ; : \\? !".split(" ")),
        Ht = Jq([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

    function It(a, b, c) {
        a.o && (b -= 9);
        for (var d = "", e = 0, g = a.s; g < a.f.length; ++g) {
            var h = a.f.charAt(g),
                k = h.charCodeAt(0);
            e++;
            a.a += a.o ? 127 >= k ? 32 >= k || Ht[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
            k = a.a >= b;
            Gt[h] ? (a.g = g,
                a.l = a.a,
                k = k || e > c) : " " == h && (a.c = g,
                a.h = a.a,
                k = k || e > c);
            if (k)
                return 0 <= a.g ? (d = a.f.substring(a.b, a.g + 1),
                        a.a -= a.l,
                        a.b = a.g + 1,
                        a.g >= a.c ? (a.c = -1,
                            a.h = 0) : a.h -= a.l,
                        a.g = -1,
                        a.l = 0) : 0 <= a.c ? (d = a.f.substring(a.b, a.c + 1),
                        a.a -= a.h,
                        a.b = a.c + 1,
                        a.c = -1,
                        a.h = 0) : (d = a.f.substring(a.b, g + 1),
                        a.a = 0,
                        a.b = g + 1,
                        a.g = a.c = -1,
                        a.h = a.l = 0),
                    a.s = g + 1,
                    d
        }
        a.b < a.f.length && (d = a.f.substring(a.b),
            a.b = a.f.length);
        return d
    };

    function Jt(a, b, c, d, e, g) {
        this.B = d || emptyFunction;
        this.R = g || emptyFunction;
        this.H = !!e;
        this.c = a.a.Eg;
        this.f = 0;
        this.G = emptyFunction;
        this.C = c;
        this.s = this.b = this.g = 0;
        this.a = null;
        this.I = 0;
        this.pa = !1;
        this.X = a.a.Cg;
        this.J = [];
        this.ia = 0;
        this.h = (this.K = a.a.qe) ? a.a.$e - (new qj(a.a.ra.b)).toString().length : a.a.$e;
        this.xa = this.H ? 1 : 6;
        this.Ma = a.a.Ug;
        this.wa = b;
        this.l = [];
        this.fa = a
    }

    function Kt(a, b) {
        var c = 0;
        a.G = C(function () {
            ++c == this.l.length && b()
        }, a)
    }

    function Lt(a, b, c) {
        if (0 == a.b && (a.b = b ? 860 : a.h, !c || c <= a.h)) {
            a.g = a.b;
            return
        }
        do
            b = a.b,
            a.b < a.h && (a.b *= a.xa,
                a.b > a.h && (a.b = a.h));
        while (b != a.b && c && a.b < c);
        a.g = a.b
    }

    function Mt(a, b) {
        var c = null != b,
            d = !c && !a.pa;
        (d || c) && a.B(100, d, b)
    }

    function Nt(a) {
        return a.K ? a.a.K : a.a.da().length
    }

    function Ot(a, b, c, d) {
        return new qt(a.wa.shift(), {
            Nj: a.K,
            Mi: b,
            Sg: !0,
            Mj: !!c
        }, function () {
            var a = Array.prototype.slice.call(arguments);
            return new ct(a.shift(), a.shift(), a.shift(), a.shift(), a.shift(), c)
        }, a.C, d)
    }

    function Pt(a, b, c) {
        if (0 < a.X && Qt(b) >= a.X)
            return !0;
        if (Nt(a) > a.b) {
            if (0 < Qt(b))
                return !0;
            Lt(a, c, Nt(a));
            for (var d = a.a.da(), e = new Ft(d, a.K), g; g = It(e, a.b, a.c);)
                if (b.g.push(new Dt([g], !1)),
                    a.f += g.length,
                    a.c -= g.length,
                    0 >= a.c) {
                    b.B = d.substring(e.b);
                    break
                } else
                    Lt(a, c);
            Rt(b, a.a, !0);
            a.a = null;
            return !0
        }
        if (Nt(a) > a.g)
            return !0;
        Rt(b, a.a, !0);
        a.g -= Nt(a) + a.Ma;
        a.f += a.a.G;
        a.c -= a.a.G;
        a.a = null;
        return !1
    };

    function St(a, b) {
        Q.call(this);
        this.f = b;
        this.b = {
            rootMargin: a
        };
        this.a = new IntersectionObserver(C(this.c, this), this.b)
    }
    D(St, Q);
    St.prototype.F = function () {
        St.m.F.call(this);
        this.a = null
    };
    St.prototype.c = function (a) {
        for (var b = 0; b < a.length; b++)
            if (0 < a[b].intersectionRatio) {
                this.f();
                break
            }
    };

    function Tt() {
        T.call(this)
    }
    D(Tt, T);
    Tt.prototype.D = function () {
        this.T(Vj(Zr))
    };
    Tt.prototype.T = setterFor("A");

    function Ut(a) {
        Ie(a.j(), "goog-te-spinner-pos-show");
        Ie(a.j().firstChild, "goog-te-spinner-animation-show")
    };

    function Vt(a) {
        this.a = a || new Tt;
        this.a.D();
        this.a.ga();
        this.b = 0
    }
    Vt.prototype.reset = function () {
        this.b = 0;
        Ut(this.a)
    };

    function Wt(a, b, c, d, e, g, h, k) {
        this.g = a;
        this.b = b;
        this.s = [];
        this.B = null;
        this.f = c;
        this.a = d;
        this.c = e;
        this.wa = g;
        this.H = h;
        this.o = this.h = null;
        this.l = k || null;
        this.I = this.C = !1;
        this.G = {}
    }

    function Xt(a) {
            for (var b = new Do, c = 0; c < a.length; c++) {
                for (var d = a[c], e = new Do, g = 0; g < d.a.length; g++) {
                    var h = d.a[g].node;
                    null != h && e.add(h)
                }
                Eo(b, e)
            }
            return b
        }
        //u = Wt.prototype;
    Wt.prototype.Wc = function (a) {
        a = this.h = new St("200px", C(this.yi, this, a));
        var b = Bt(Xt([].concat(this.b, this.s)));
        nj(b, C(a.a.observe, a.a));
        a = this.o = new St("0px", C(this.Ci, this));
        b = Bt(Xt([].concat(this.b, this.s)));
        nj(b, C(a.a.observe, a.a))
    };
    Wt.prototype.yi = function (a) {
        this.h && (this.h.a.disconnect(),
            this.h = null);
        a()
    };
    Wt.prototype.Ci = function () {
        this.C = !0;
        Yt(this);
        if (!this.I && this.l) {
            var a = this.l;
            0 == a.b++ && (a = a.a,
                L(a.j(), "goog-te-spinner-pos-show"),
                L(a.j().firstChild, "goog-te-spinner-animation-show"))
        }
    };

    function Yt(a) {
        a.o && (a.o.a.disconnect(),
            a.o = null)
    }
    Wt.prototype.ah = function () {
        if (this.C && !this.I && this.l) {
            var a = this.l;
            0 == --a.b && Ut(a.a)
        }
        this.h && (this.h.a.disconnect(),
            this.h = null);
        Yt(this)
    };

    function Rt(a, b, c) {
        c ? (a.b.push(b),
            a.G[b.da()] = !0) : a.s.push(b)
    }

    function Qt(a) {
        return a.b.length + a.s.length
    }

    function Zt(a) {
        if (0 == a.g.length) {
            for (var b = [], c = 0; c < a.b.length; ++c)
                b.push(a.b[c].da());
            a.g.push(new Dt(b, !1))
        }
    }
    Wt.prototype.translate = function (a) {
        function b() {
            d++;
            d == c && e()
        }
        Zt(this);
        for (var c = 0, d = 0, e = emptyFunction, g = this.f, h = this.a, k = this.c, l = this.wa, m = this.H, p = 0; p < this.g.length; ++p)
            Et(this.g[p], function (a, c, d) {
                a = g.fa.translate(zc(a, b), c, d || h, k, ++g.ia, l, m, g.H);
                g.J.push(a);
                return a
            }) && c++;
        0 != c && (e = mm(a));
        return c
    };

    function $t(a, b) {
        Q.call(this);
        this.b = [];
        this.f = [];
        this.a = a;
        this.c = b
    }
    D($t, Q);
    $t.prototype.g = function (a) {
        var b = trimString(a.href);
        0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.f.push(a.href),
            this.b.push(a),
            a.href = b + "#googtrans/" + this.a + "/" + this.c)
    };
    $t.prototype.F = function () {
        $t.m.F.call(this);
        this.restore()
    };
    $t.prototype.restore = function () {
        if (this.b.length) {
            for (var a = 0; a < this.b.length; ++a)
                this.b[a].href = this.f[a];
            this.b = [];
            this.f = []
        }
    };

    function au(a, b) {
        Q.call(this);
        this.b = a;
        this.a = Te.test(b) ? "translated-rtl" : "translated-ltr";
        a = [].concat(this.b);
        for (b = 0; b < a.length; ++b)
            fg(a[b]) && L(a[b], this.a)
    }
    D(au, Q);
    au.prototype.F = function () {
        au.m.F.call(this);
        this.restore()
    };
    au.prototype.restore = function () {
        for (var a = [].concat(this.b), b = 0; b < a.length; ++b)
            fg(a[b]) && Ie(a[b], this.a)
    };

    function bu(a, b, c, d, e, g, h, k, l, m) {
        Q.call(this);
        this.qa = a;
        this.Jf = b;
        this.ia = c || null;
        this.xa = m || null;
        this.G = null;
        this.ub = !!d;
        this.Hb = !!g;
        this.o = [];
        this.ib = this.B = this.b = !1;
        this.l = k || new ft;
        this.$c = !k;
        this.pa = h || bm.Y();
        this.Ma = new At;
        this.R = this.K = this.C = !1;
        this.ab = this.f = .5;
        this.bb = .01;
        this.s = new cm(this.f);
        this.J = (this.h = this.fa = !!l) ? new MutationObserver(C(this.ti, this)) : null;
        S(window, "blur", this.rg, !0, this);
        S(window, "focus", this.sg, !0, this)
    }
    D(bu, Q);
    $q(3046, bu.prototype, {
        Qi: 1,
        Si: 2,
        Ri: 3,
        Ti: 4
    });
    // u = bu.prototype;
    bu.prototype.Oh = function (a) {
        this.Qi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    bu.prototype.Uf = function (a) {
        this.Ri.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    bu.prototype.Ph = function (a) {
        this.Si.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    bu.prototype.Qh = function (a) {
        this.Ti.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    bu.prototype.translate = function (a, b, c, d, e) {
        if (d || a != this.a || b != this.c)
            cu(this),
            this.$c && (this.l = new ft);
        else if (this.b)
            return;
        this.g = c;
        this.Yc = e;
        this.h = this.fa && !0;
        this.J && this.J.observe(document.body, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        });
        this.b = !0;
        this.a = a;
        this.c = b;
        this.ub && (this.G = new $t(a, b));
        this.R = this.a == "auto";
        this.ia && (c = this.ia,
            a && (c.s = a),
            b && (c.o = b));
        this.X = new au(this.qa, this.c);
        this.I = du(this)
    };

    function du(a) {
        var b = new fm(a, a.pa);
        im(b, a.ng);
        km(b, C(a.Oh, a));
        lm(b, new Jt(a.Jf, [].concat(a.qa), a.pa, a.g, a.h, a.Yc));
        return b
    }
    bu.prototype.restore = function () {
        cu(this);
        this.Ma.restore()
    };
    bu.prototype.F = function () {
        bu.m.F.call(this);
        this.restore();
        Hh(window, "blur", this.rg, !0, this);
        Hh(window, "focus", this.sg, !0, this)
    };

    function eu(a, b, c, d) {
        var e = Yq(a.l.b),
            g = new fm(a, b.C);
        b.l.push(g);
        jm(g, b.G);
        Lt(b, e);
        im(g, d || a.jg);
        b = c || new Wt([], [], b, a.a, a.c, a.ib, a.B, a.xa);
        km(g, a.zi, a);
        a.h && jm(g, b.ah, b);
        lm(g, b)
    }
    bu.prototype.zi = function (a, b, c) {
        c.ah();
        this.B ? this.Qh(a) : this.Ph(a);
        c.f.G()
    };
    bu.prototype.sg = function () {
        this.C = !1;
        this.H = 0;
        dm(this.s, this.f)
    };
    bu.prototype.rg = function (a) {
        a.target == window && (this.C = !0,
            this.H = 0,
            dm(this.s, .01))
    };
    bu.prototype.ti = function (a) {
        if (this.b && this.h) {
            for (var b = 0; b < a.length; b++)
                if (a[b].target && a[b].target.className  && (0 <= a[b].target.className.indexOf("translate") || 0 == a[b].target.className.indexOf("goog-")))
                    return;
            this.pa.add(C(this.rj, this))
        }
    };
    bu.prototype.rj = function () {
        this.B = !0;
        this.I.stop();
        this.I = du(this);
        return !1
    };
    bu.prototype.ng = function (a, b) {
        Kt(b, mm(a));
        eu(this, b);
        return this.Ei
    };
    bu.prototype.Ei = function (a, b) {
        if (!this.b)
            return hm;
        if (!nm(a))
            return gm;
        if (!this.h)
            for (a = 0; a < this.o.length; ++a) {
                var c = C(this.Lf, this, b, this.o[a]);
                b.C.add(c)
            }
        return this.Di
    };
    bu.prototype.gg = function (a, b) {
        if (this.H && !this.C) {
            a = (new Date).getTime() - this.H;
            var c = this.f;
            900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
            this.f = c;
            this.K ? this.bb = .01 : this.ab = this.f
        }
        this.B = this.b = !0;
        this.H = (new Date).getTime();
        this.Zc != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Zc = a,
            a = !0) : a = !1;
        a ? (this.K = !1,
            this.f = this.ab,
            this.C || dm(this.s, this.f),
            a = [].concat(this.qa),
            c = this.s,
            b.B = emptyFunction,
            b.wa = a,
            b.a = null,
            b.ia = 0,
            b.l = [],
            b.G = emptyFunction,
            b.C = c,
            a = new fm(this, this.s),
            im(a, this.ng)) : (this.K = !0,
            this.f = this.bb,
            this.C || dm(this.s, this.f),
            a = new fm(this, this.s),
            im(a, this.gg));
        km(a, C(this.Uf, this));
        lm(a, b);
        this.I = a;
        return hm
    };
    bu.prototype.Di = function (a, b) {
        if (!this.b)
            return hm;
        this.B = this.b = !1;
        this.R ? Mt(b, !0) : (Mt(b),
            b.R(b.f));
        if (this.Hb)
            return this.gg;
        for (a = 0; a < b.l.length; ++a)
            b.l[a].stop();
        for (a = 0; a < b.J.length; ++a)
            Jr(b.fa, b.J[a]);
        return hm
    };

    function fu(a, b, c) {
        a: {
            var d = a.ub ? C(a.G.g, a.G) : emptyFunction;
            b = mm(b);
            if (!c.o) {
                if (0 == c.wa.length) {
                    c = !1;
                    break a
                }
                c.o = Ot(c, d, a.ia, a.Ma.a)
            }
            c.qa = !0;
            st(c.o, c.c, c.b, b);
            c = !0
        }
        return c ? a.jg : a.Cd
    }
    bu.prototype.jg = function (a, b) {
        if (!this.b)
            return hm;
        var c = b.f;
        if (null == c.a) {
            if (!c.qa)
                return fu(this, a, b.f);
            if (!nm(a))
                return gm;
            c.qa = !1;
            c.a = c.o.Ac || null;
            var d = c.a ? c.a : c.o = null;
            if (!d)
                return fu(this, a, b.f);
            this.o.push(d);
            var e = d.da();
            if (this.l.has(e, !this.h) || null != b.G[e] && b.G[e])
                return e = c.a.G,
                    c.f += e,
                    c.c -= e,
                    c.a = null,
                    this.h && Rt(b, d, !1),
                    fu(this, a, b.f);
            this.l.a[d.da()] = null
        }
        0 < Qt(b) && dm(this.s, .5);
        return Pt(c, b, Yq(this.l.b)) ? this.Cd : fu(this, a, b.f)
    };
    bu.prototype.Cd = function (a, b) {
        if (!this.b || 0 == Qt(b))
            return hm;
        eu(this, b.f);
        return this.h ? (b.Wc(mm(a)),
            this.Fi) : 0 == b.translate(a) ? hm : this.mg
    };
    bu.prototype.Fi = function (a, b) {
        return this.b ? nm(a) ? 0 == b.translate(a) ? hm : this.mg : gm : hm
    };
    bu.prototype.Lf = function (a, b) {
        b.g && this.l.remove(b.f);
        if (!this.b)
            return !1;
        if (this.l.has(b.da(), !1)) {
            var c = this.l;
            if (c.has(b.f, !1)) {
                var d = b.f,
                    e = c.a[d];
                e || (e = c.b[d],
                    c.a[d] = e);
                b.b = e;
                b.I = !0
            } else
                c.remove(b.f),
                b.g = !0;
            mt(b)
        } else if (c = this.l,
            b.g)
            c.remove(b.f);
        else if (b.o) {
            d = b.o.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
            b.I = !0;
            delete b.o;
            b.o = null;
            b.b = [];
            e = document.createElement("div");
            P(e, !1);
            e.innerHTML = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
            document.body.appendChild(e);
            d = [];
            var g;
            for (g = e.firstChild; g; g = g.nextSibling)
                if ("I" == g.tagName)
                    var h = lt(b, sg(g), g.innerHTML);
                else if ("B" == g.tagName) {
                h || (h = lt(b, "", ""));
                if (1 == b.a.length)
                    kt(h.aa, d, 0, g);
                else {
                    var k = d;
                    var l = g;
                    var m = b.a;
                    h = h.aa;
                    for (var p = [], t, w = l.firstChild; w; w = t)
                        t = w.nextSibling,
                        pt(w);
                    for (t = l.firstChild; t; t = t.nextSibling)
                        t.attributes && t.attributes.i ? (l = parseInt(t.attributes.i.nodeValue, 10), !isNaN(l) && 0 <= l && l < m.length && (m[l].be && p[l] ? p[l].U += t.firstChild && 3 == t.firstChild.nodeType ? t.firstChild.nodeValue : sg(t) : p[l] = kt(h, k, l, t))) : 3 == t.nodeType && h.push({
                            S: -1,
                            U: unescapeHTML(t.nodeValue)
                        });
                    null != h && 0 < h.length && -1 == h[0].S && (1 == h.length ? h[0].S = 0 : (h[1].U = h[0].U + h[1].U,
                        h.shift()))
                }
                h = void 0
            }
            g = b.b;
            for (k = 0; k < g.length - 1; ++k)
                m = g[k],
                h = Jc(m.aa[m.aa.length - 1].U),
                h = h.charCodeAt(h.length - 1),
                12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.aa[m.aa.length - 1].U += " ");
            bg(e);
            for (e = 0; e < b.a.length; ++e)
                e < d.length && e < b.l.length && null != d[e] && (g = b.l[e],
                    k = d[e].start,
                    null != k && (m = g.substring(0, g.length - Ic(g).length),
                        " " == m && (m = ""),
                        m && (k.U = m + Ic(k.U))),
                    k = d[e].end,
                    null != k && (g = g.substring(Jc(g).length),
                        " " == g && (g = ""),
                        g && (k.U = Jc(k.U) + g)));
            1 != b.b.length || b.b[0].hf || (b.b[0].hf = b.f);
            c.write(b.f, b.b);
            mt(b)
        }
        b.H || (this.R = !1);
        c = b.g ? !0 : void 0;
        a.I += b.G;
        null != c && (a.pa = !0);
        b = Math.min(Math.floor(100 * a.I / a.f), 100);
        if (a.s != b || c)
            a.s = b,
            a.H ? (a.B(a.s, !0, c),
                a.R(a.I)) : a.B(a.s, !1, c);
        return !1
    };
    bu.prototype.mg = function (a, b) {
        if (!this.b)
            return hm;
        if (!nm(a))
            return gm;
        if (1 < Qt(b)) {
            a = b.g[0];
            var c = b.b;
            if (a.c || 0 == c.length || null == a.a || 0 == a.a.length)
                a = null;
            else {
                for (var d = [], e = [], g = 0; g < a.a.length && g < c.length; ++g) {
                    var h = a.a[g];
                    h && h[0] && 200 == h[1] || (e.push(c[g]),
                        d.push(a.g[g]))
                }
                a = 0 < e.length ? {
                    tj: new Dt(d, !0),
                    uj: e
                } : null
            }
            a = a ? new Wt([a.tj], a.uj, b.f, b.a, b.c, b.wa, b.H, b.l) : null;
            null != a && eu(this, b.f, a, this.Cd)
        } else {
            a = !1;
            for (c = 0; c < b.g.length; ++c)
                d = b.g[c],
                d.c || 200 == d.b && d.a && d.a[0] ? d = d.f = !1 : (d.c = !0,
                    d = d.f = !0),
                a = d || a;
            if (a)
                return this.Cd
        }
        d = this.a;
        a = this.c;
        if (1 < b.b.length)
            if (c = b.g[0],
                e = d == "auto",
                d = b.b,
                200 == c.b)
                for (g = 0; g < c.a.length && g < d.length; ++g)
                    if ((h = c.a[g]) && 200 == h[1]) {
                        var k = h[2],
                            l = d[g],
                            m = l,
                            p = null != k && k == a;
                        m.o = h[0];
                        isDefined(p) && (m.C = p);
                        l.H = e && null == k
                    } else
                        d[g].g = !0;
        else
            for (a = 0; a < d.length; ++a)
                d[a].g = !0;
        else {
            c = new Ct(d == "auto");
            for (d = 0; d < b.g.length; ++d)
                h = b.g[d],
                e = a,
                g = c,
                200 == h.b && h.a && h.a[0] ? (h = h.a[0],
                    g.a.push(h[0]),
                    h = h[2],
                    g.b = g.b && null != h && h == e,
                    null != h && (g.f = !1)) : 500 != h.b && (g.c = !0);
            null != b.B && (c.a.push(b.B),
                b.B = null);
            if (a = b.b[0])
                d = c.b,
                a.o = c.da(),
                isDefined(d) && (a.C = d),
                a.H = c.f,
                a.g = c.c
        }
        if (this.h) {
            a = C(this.Lf, this);
            for (c = 0; c < b.b.length; c++)
                a(b.f, b.b[c]);
            for (c = 0; c < b.s.length; c++)
                a(b.f, b.s[c]);
            Yt(b);
            b.I = !0;
            b.C && b.l && (b = b.l,
                0 == --b.b && Ut(b.a))
        }
        return hm
    };

    function cu(a) {
        a.J && a.J.disconnect();
        a.xa && a.xa.reset();
        a.b && (a.I.stop(),
            a.b = !1,
            a.B = !1);
        if (a.o.length) {
            for (var b = 0; b < a.o.length; ++b)
                a.o[b].M();
            a.o = []
        }
        null != a.G && (a.G.restore(),
            a.G = null);
        null != a.X && (a.X.restore(),
            a.X = null)
    };

    function gu(a, b, c, d, e, g, h, k, l, m) {
        Q.call(this);
        this.I = b || null;
        this.J = !!c;
        this.C = d || "transparent";
        this.g = g || "";
        b = h || {
            fetchStart: 0,
            Ek: 0
        };
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.G = a && b ? b - a : 0;
        this.K = nowTime() - uq;
        this.l = !1;
        this.b = new Er(e || "", void 0, g, l, m);
        this.H = new cm(1);
        this.s = new ft;
        this.f = null;
        this.h = !0;
        this.o = null != _window.IntersectionObserver;
        this.B = k || null;
        new Nh(this);
        e = new Kq;
        g = new Mq(C(this.b.g, this.b, e.register()));
        this.qd = Nq(g, e.fb(C(this.qd, this)));
        this.md = Nq(g, e.fb(C(this.md, this)));
        this.ae = Nq(g, e.fb(C(this.ae, this)));
        this.restore = Nq(g, e.fb(C(this.restore, this)));
        g.finish();
        e.finish()
    }
    D(gu, Q);
    $q(14097, gu.prototype, {
        Xe: function () {
            Tq(this.b.c ? "te_afas" : "te_afau")
        }
    });
    //u = gu.prototype;
    gu.prototype.Ya = function () {
        return this.b.c
    };
    gu.prototype.qd = function (a, b) {
        if (this.b.Ya()) {
            var c = this.b,
                d = {
                    alpha: !0
                };
            b && (d.hl = b);
            c.f.send(d, a)
        } else
            this.Xe(),
            a(null)
    };
    gu.prototype.md = function (a) {
        var b = document.documentElement.lang;
        if (b)
            a(b);
        else if (this.b.Ya()) {
            var c = new Tm(document.body, !1, !1, 1, 1);
            b = [];
            try {
                for (var d = 0, e = this.b.b.Dg; b.length + d < e;) {
                    var g = c.next();
                    if (1 == c.a && zt(g))
                        c.g();
                    else if (3 == g.nodeType) {
                        var h = trimString(unescapeSpace(g.nodeValue));
                        h && (b.push(h),
                            d += h.length)
                    }
                }
            } catch (k) {
                if (k != dj)
                    throw k;
            }
            e = this.b;
            b = b.join(" ");
            a = e.b.fd(a);
            e.b.ra.send({
                q: b.substring(0, e.b.Dg),
                sl: "auto",
                tl: "en"
            }, a)
        } else
            this.Xe(),
            a(null, !0)
    };
    gu.prototype.ae = function (a, b, c, d, e) {
        var g = nowTime();
        ar();
        if (!a || Zq(a, b))
            a = "auto";
        if (e || a != this.a || b != this.c)
            this.s = new ft;
        this.a = a;
        this.c = b;
        this.b.Ya() ? (d = d || document.documentElement,
            this.f && this.f.M(),
            this.B.reset(),
            this.f = new bu(d, this.b, this.I, this.J, this.C, !0, this.H, this.s, this.o, this.B),
            this.f.ib = this.l,
            this.h = !0,
            this.f.translate(a, b, c, e, C(this.Wi, this, g, a, b))) : (this.Xe(),
            c(0, !1, !0))
    };
    gu.prototype.Cj = function () {
        return !!this.f && this.f.b
    };
    gu.prototype.Wg = setterFor("l");
    gu.prototype.restore = function () {
        ar();
        this.b.Ya() && this.f && this.f.restore()
    };
    gu.prototype.F = function () {
        br();
        gu.prototype.m.F.call(this);
        this.b.M();
        this.f = this.b = null;
        this.s = new ft
    };
    gu.prototype.Wi = function (a, b, c, d) {
        this.h && (this.h = !1,
            b = {
                sl: b,
                tl: c,
                textlen: d
            },
            this.l && (b.ctt = "1"),
            "" != this.g && (b.sp = this.g),
            0 != this.g.indexOf("nmt") && (b.sp = "" != this.g ? "nmt," + this.g : "nmt"),
            b.ttt = nowTime() - a,
            b.ttl = this.K,
            this.G && (b.ttf = this.G),
            this.o && (b.sr = 1),
            Tq("te_time", b))
    };

    function hu(a) {
        T.call(this, a);
        this.l = new Nh(this)
    }
    D(hu, T);
    //u = hu.prototype;
    hu.prototype.D = function () {
        var a = vg(this.b, "select");
        a.className = "goog-te-combo";
        this.T(a)
    };
    hu.prototype.P = function () {
        hu.m.P.call(this);
        this.Tf()
    };
    hu.prototype.Tf = function () {
        S(this.j(), "change", dispatchEventFromObject(this, "change"));
        this.dispatchEvent("load")
    };
    hu.prototype.$ = function () {
        hu.m.$.call(this);
        this.l.M();
        this.l = null
    };

    function iu(a, b) {
        return; //camike
        a.j().parentNode != b && (a.j().parentNode.removeChild(a.j()),
            b.appendChild(a.j()))
    }
    hu.prototype.Uc = function (a) {
        this.b.Rc(this.j());
        for (var b in a)
            if (a[b] !== Object.prototype[b]) {
                var c = this.b.D(qa, {
                    value: b
                });
                this.b.hb(c, a[b]);
                this.j().appendChild(c)
            }
        this.j().selectedIndex = 0
    };
    hu.prototype.Ba = function () {
        return this.j().value
    };
    hu.prototype.za = function (a) {
        if (this.j().value != a)
            for (var b = 0, c; c = this.j().options.item(b); ++b)
                if (c.value == a) {
                    this.j().selectedIndex = b;
                    break
                }
    };
    hu.prototype.sa = function (a) {
        if ("undefined" == typeStringOf(a))
            return this.j().options.item(this.j().selectedIndex).text;
        for (var b = 0, c; c = this.j().options.item(b); ++b)
            if (c.value == a)
                return c.text
    };
    hu.prototype.oa = function (a) {
        this.j().disabled = !a
    };

    function ju(a) {
        hu.call(this, a)
    }
    D(ju, hu);
    ju.prototype.Eb = function (a) {
        this.Uc.call(this, a)
    };

    function ku(a, b) {
        hu.call(this, b);
        this.a = a && Bd(a) || {};
        this.a.nf = this.a.nf || 11;
        this.a.Vd = 0 != this.a.Vd;
        this.a.La || (this.a.La = Fq)
    }
    D(ku, hu);
    //u = ku.prototype;
    ku.prototype.gd = function () {
        throw Error("Not implemented.");
    };
    ku.prototype.D = function () {
        this.gd();
        this.o = this.j();
        this.f = Sf("IFRAME", {
            frameBorder: 0,
            "class": "goog-te-menu-frame skiptranslate",
            title: Z.lh
        });
        this.f.style.visibility = "visible";
        P(this.f, !1);
        document.body.appendChild(this.f)
    };
    ku.prototype.Tf = function () {
        var a = Te.test(rq) ? "rtl" : "ltr",
            b = this.a.La,
            c = V(this, "menuBody");
        this.l.w(this.f, "load", this.Hj);
        Uq(this.f, C(function () {
            var d = lg(this.f);
            d.write('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + X(b) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + X(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + X(c) + '" class="goog-te-menu"></div></body>');
            d.close()
        }, this))
    };
    ku.prototype.Hj = function () {
        this.c = new Ff(lg(this.f));
        this.J = this.c.j(V(this, "menuBody"));
        this.l.w(this.o, "click", this.Ke);
        G ? this.l.w(this.f, "blur", this.Bd) : this.l.w(mg(this.f), "blur", this.Bd);
        this.dispatchEvent("load")
    };
    ku.prototype.$ = function () {
        ku.m.$.call(this);
        bg(this.f);
        this.o = this.R = this.h = this.J = this.c = this.f = null
    };
    ku.prototype.kg = function (a) {
        this.g != a.currentTarget.value && (this.za(a.currentTarget.value),
            this.dispatchEvent("change"));
        this.Bd()
    };
    ku.prototype.Ke = function () {
        lu(this);
        mg(this.f).focus();
        this.X = !0
    };
    ku.prototype.Bd = function () {
        this.X && (this.X = !1,
            lu(this, !1),
            Rf(N(this.o)).focus())
    };
    ku.prototype.kf = makeEmptyFunc();
    ku.prototype.lf = makeEmptyFunc();

    function lu(a, b) {
        if ("undefined" == typeof b || b) {
            a.lf();
            b = Kg(a.o, window);
            var c = b.y + a.o.offsetHeight,
                d = b.y - a.C.height,
                e = b.x,
                g = b.x + a.o.offsetWidth - a.C.width;
            if (G && !K("7.0")) {
                var h = document.body;
                c -= h.offsetTop;
                d -= h.offsetTop;
                e -= h.offsetLeft;
                g -= h.offsetLeft
            } else
                h = Pf(document),
                c -= h.y,
                d -= h.y,
                e -= h.x,
                g -= h.x;
            h = Nf(window);
            b.y = b.y <= h.height - a.C.height ? c : d;
            b.y > h.height - a.C.height && (b.y = h.height - a.C.height);
            0 > b.y && (b.y = 0);
            Te.test(rq) ? b.x = 0 <= g ? g : e : b.x = e <= h.width - a.C.width ? e : g;
            b.x > h.width - a.C.width && (b.x = h.width - a.C.width);
            0 > b.x && (b.x = 0);
            Dg(a.f, b);
            P(a.f, !0);
            mu(a)
        } else
            a.kf(),
            P(a.f, !1)
    }
    ku.prototype.Ba = getterFor("g");
    ku.prototype.Uc = function (a) {
        this.c.Rc(this.J);
        P(this.f, !0);
        this.fa = a;
        this.h = [];
        for (var b in a)
            if (a[b] !== Object.prototype[b])
                if ("---" == a[b]) {
                    var c = {
                        link: this.c.D(f, {
                            className: "goog-te-menu2-separator",
                            value: b
                        }),
                        Ki: !0
                    };
                    this.h.push(c)
                } else {
                    c = {
                        link: this.c.D("A", {
                            className: "goog-te-menu2-item-selected",
                            href: "javascript:void(0)",
                            value: b
                        })
                    };
                    this.h.push(c);
                    var d = this.c.D(f, {
                        style: "white-space:nowrap"
                    });
                    this.c.appendChild(c.link, d);
                    this.a.Vd && this.c.appendChild(d, this.c.D("SPAN", {
                        className: "indicator"
                    }, "\u203a"));
                    this.c.appendChild(d, this.c.D("SPAN", {
                        className: "text"
                    }, a[b]));
                    this.l.w(c.link, "click", this.kg)
                }
        a = this.h.length - 1;
        a = Math.round((a - a % this.a.nf) / this.a.nf) + 1;
        this.R = this.c.D("TABLE", {
            cellspacing: 0,
            cellpadding: 0,
            border: 0
        });
        c = this.c.D("TBODY");
        b = this.c.D("TR", {
            valign: "top"
        });
        this.J.className = "goog-te-menu2";
        this.c.appendChild(this.J, this.R);
        this.c.appendChild(this.R, c);
        this.c.appendChild(c, b);
        for (d = c = 0; c < a; ++c) {
            var e = this.c.D("TD");
            this.c.appendChild(b, e);
            for (var g = 0; 11 > g && d < this.h.length; ++g,
                ++d)
                this.c.appendChild(e, this.h[d].link);
            c != a - 1 && (e = this.c.D("TD", {
                    "class": "goog-te-menu2-colpad"
                }, "\u00a0"),
                this.c.appendChild(b, e))
        }
        this.g = null;
        this.za(this.h[0].link.value);
        mu(this);
        P(this.f, !1)
    };
    ku.prototype.sa = function (a) {
        a = "undefined" == typeStringOf(a) ? this.g : a;
        return this.fa[a]
    };
    ku.prototype.mf = makeEmptyFunc();
    ku.prototype.za = function (a) {
        if (this.g != a) {
            this.sa(a) && (this.g = a,
                this.mf());
            for (var b = 0; b < this.h.length; ++b) {
                var c = this.h[b];
                c.Ki || (c.link.className = c.link.value == a && this.a.Vd ? "goog-te-menu2-item-selected" : "goog-te-menu2-item")
            }
        }
    };

    function mu(a) {
        Tg(a.J, Sg(a.R));
        Tg(a.f, Sg(a.J));
        a.C = Sg(a.f)
    }

    function nu(a, b) {
        ku.call(this, a, b)
    }
    D(nu, ku);
    //u = nu.prototype;
    nu.prototype.gd = function () {
        var a = this.b.D("a", {
            "aria-haspopup": "true"
        });
        a.className = "goog-te-menu-value";
        a.href = "javascript:void(0)";
        this.H = this.b.D("SPAN");
        a.appendChild(this.H);
        this.K = this.b.D("IMG", {
            src: sb,
            alt: "",
            style: "background-image:url(" + Cq + ");background-position:-14px 0px;border:none",
            width: 14,
            height: 14
        });
        a.appendChild(this.K);
        this.T(a)
    };
    nu.prototype.kf = function () {
        O(this.K, "backgroundPosition", "-14px 0px")
    };
    nu.prototype.lf = function () {
        O(this.K, "backgroundPosition", "0px 0px")
    };
    nu.prototype.$ = function () {
        nu.m.$.call(this);
        this.K = this.H = null
    };
    nu.prototype.mf = function () {
        this.b.hb(this.H, this.sa(this.g) || "")
    };
    nu.prototype.Eb = function (a) {
        this.Uc.call(this, a)
    };

    function ou(a, b) {
        ku.call(this, a, b)
    }
    D(ou, ku);
    //u = ou.prototype;
    ou.prototype.gd = function () {
        var a = this.b.D("a", {
            "aria-haspopup": "true"
        });
        a.className = "goog-te-menu-value";
        a.href = "javascript:void(0)";
        this.H = this.b.D("SPAN");
        a.appendChild(this.H);
        a.appendChild(this.b.D("IMG", {
            src: sb,
            alt: "",
            width: 1,
            height: 1
        }));
        a.appendChild(this.b.D("SPAN", {
            style: "border-left:1px solid #bbb"
        }, "\u200b"));
        a.appendChild(this.b.D("IMG", {
            src: sb,
            alt: "",
            width: 1,
            height: 1
        }));
        this.K = this.b.D("span", {
            style: "color:#767676",
            "aria-hidden": "true"
        }, "\u25bc");
        a.appendChild(this.K);
        this.T(a)
    };
    ou.prototype.kf = function () {
        O(this.K, "color", "#9b9b9b")
    };
    ou.prototype.lf = function () {
        O(this.K, "color", "#d5d5d5")
    };
    ou.prototype.$ = function () {
        ou.m.$.call(this);
        this.K = this.H = null
    };
    ou.prototype.mf = function () {
        this.b.hb(this.H, this.sa(this.g) || "")
    };
    ou.prototype.Eb = function (a) {
        this.Uc.call(this, a)
    };

    function pu(a, b) {
        ku.call(this, a, b);
        this.a.Vd = !1
    }
    D(pu, ku);
    pu.prototype.gd = function () {
        var a = vg(this.b, "div");
        a.className = "goog-te-button";
        var b = this.b.D(f, {
            style: "background: url(" + Bq + ") repeat-x 0 -39px"
        });
        a.appendChild(b);
        this.H = vg(this.b, "button");
        b.appendChild(this.H);
        this.T(a)
    };
    pu.prototype.Vg = function (a) {
        Zf(this.H);
        this.H.appendChild(this.b.a.createTextNode(String(a + "\u00a0\u25bc")))
    };
    pu.prototype.$ = function () {
        pu.m.$.call(this);
        this.H = null
    };
    pu.prototype.kg = function (a) {
        this.za(a.currentTarget.value);
        this.dispatchEvent("change");
        this.Bd()
    };

    function qu(a, b) {
        T.call(this, b);
        this.a = a && Bd(a) || {};
        this.c = new Nh(this)
    }
    D(qu, T);
    var ru = {
        zk: 0,
        ek: 1,
        pk: 2
    };
    //u = qu.prototype;
    qu.prototype.D = function () {
        var a = vg(this.b, "div");
        L(a, "skiptranslate");
        L(a, "goog-te-gadget");

        a.dir = Te.test(rq) ? "rtl" : "ltr";
        P(a, !1);
        if (2 == this.a.Sb)
            a.innerHTML = Tr({
                id: V(this, "targetLanguage"),
                Og: "",
                Ng: ""
            });
        else {
            var b = Z.qh(Ur() || "");
            a.innerHTML = Tr({
                id: V(this, "targetLanguage"),
                Og: "",
                Ng: 1 == this.a.Sb ? "&nbsp;&nbsp;" + b : b
            })
        }
        this.T(a)
    };
    qu.prototype.P = function () {
        qu.m.P.call(this);
        this.f = 2 == this.a.Sb ? new ou(null, this.b) : new ju(this.b);
        this.c.w(this.f, "change", dispatchEventFromObject(this, "chg_tgt_lang"));
        this.c.w(this.f, "load", this.Fj);
        var a = this.b.j(V(this, "targetLanguage"));
        if (2 == this.a.Sb) {
            var b = this.b.D("IMG", {
                src: sb,
                "class": "goog-te-gadget-icon",
                alt: ""
            });
            b.style.backgroundImage = "url(" + Cq + ")";
            b.style.backgroundPosition = "-65px 0px";
            var c = this.b.D("SPAN", {
                style: "vertical-align: middle"
            });
            a.appendChild(b);
            a.appendChild(c);
            this.f.ga(c);
            a.style.whiteSpace = "nowrap";
            a.className = "goog-te-gadget-simple"
        } else
            this.f.ga(a),
            1 == this.a.Sb && (a.style.display = "inline")
    };
    qu.prototype.Fj = function () {
        if (2 == this.a.Sb) {
            var a = this.f,
                b = this.b.j(V(this, "targetLanguage"));
            a.l.ca(a.o, "click", a.Ke);
            a.o = b;
            a.l.w(a.o, "click", a.Ke)
        }
        this.dispatchEvent("load")
    };
    qu.prototype.$ = function () {
        qu.m.$.call(this);
        this.c.M();
        this.c = null;
        this.f.M();
        this.f = null
    };
    qu.prototype.ya = function () {
        return this.f.Ba()
    };
    qu.prototype.ua = function (a) {
        "" == a ? this.H && this.f.Eb(this.H) : this.C && this.f.Eb(this.C);
        this.f.za(a)
    };
    qu.prototype.L = function (a) {
        P(this.j(), a)
    };
    qu.prototype.oa = function (a) {
        this.f.oa(a)
    };
    qu.prototype.vf = function (a, b) {
        this.H = a;
        this.C = b
    };

    function su(a, b) {
        b || Ef();
        this.a = a || null
    }
    su.prototype.ga = function (a, b) {
        a = a(b || {}, void 0, this.a ? this.a.a() : {});
        this.b();
        return String(a)
    };

    function tu(a, b) {
        b = b || {};
        a.a && a.a.a();
        var c = b.top,
            d = b.left,
            e = b.bottom,
            g = b.right,
            h = b.id;
        b = ck("." + jk(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (c || 0 == c ? "top:" + jk(c) + "px; _top:expression((" + jk(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (d || 0 == d ? "left:" + jk(d) + "px; _left:expression((" + jk(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (e || 0 == e ? "bottom:" + jk(e) + "px; _top:expression((-" + jk(e) + "-document.getElementById('" + String(h).replace(qk, nk) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (g || 0 == g ? "right:" + jk(g) + "px; _left:expression((-" + jk(g) + "-document.getElementById('" + String(h).replace(qk, nk) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}");
        a.b();
        return qf(b.toString())
    }
    su.prototype.b = emptyFunction;

    function uu(a, b) {
        T.call(this, b);
        this.a = a && Bd(a) || {};
        this.a.La || (this.a.La = Fq);
        this.c = new Nh(this)
    }
    D(uu, T);
    var vu = {
        tk: 1,
        uk: 2,
        Tj: 3,
        Sj: 4
    };
    //u = uu.prototype;
    uu.prototype.D = function () {
        var a = vg(this.b, "div");
        this.ha = !1;
        P(a, !1);
        var b = V(this, "container");
        a.innerHTML = '<iframe id="' + X(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>';
        this.T(a)
    };
    uu.prototype.P = function () {
        uu.m.P.call(this);
        var a = Te.test(rq) ? "rtl" : "ltr",
            b = this.a.La,
            c = V(this, "translate");
        this.j().id = V(this, "floatContainer");
        var d = {
            id: this.j().id,
            className: "goog-te-ftab-float"
        };
        this.j().className += " goog-te-ftab-float";
        switch (this.a.kd) {
        case 2:
            var e = "goog-float-top";
            d.top = 0;
            d.right = 20;
            break;
        case 3:
            e = "goog-float-bottom";
            d.bottom = 0;
            d.right = 20;
            break;
        case 4:
            e = "goog-float-bottom";
            d.bottom = 0;
            d.left = 20;
            break;
        default:
            e = "goog-float-top",
                d.top = 0,
                d.left = 20
        }
        Ng(tu(new su, d), this.j());
        this.l = this.b.j(V(this, "container"));
        this.c.w(this.l, "load", this.Gj);
        Uq(this.l, C(function () {
            var d = lg(this.l);
            d.write('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + X(b) + '"></head><body class="goog-te-ftab ' + X(e) + '" scroll="no" style="overflow:hidden" dir="' + X(a) + '"><a id="' + X(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + X(sb) + '" style="background-image:url(' + X(Cq) + ');background-position:-65px 0px"><span>' + Zj(Z.If) + "</span></a></body>");
            d.close()
        }, this))
    };
    uu.prototype.Gj = function () {
        this.f = (new Ff(lg(this.l))).j(V(this, "translate"));
        this.c.w(this.f, "click", dispatchEventFromObject(this, "clk_trans"));
        P(this.j(), !0);
        var a = Sg(this.f);
        P(this.j(), !1);
        Tg(this.l, a);
        Tg(this.j(), a);
        this.dispatchEvent("load")
    };
    uu.prototype.$ = function () {
        uu.m.$.call(this);
        this.c.M();
        this.c = null;
        bg(this.l);
        this.f = this.l = null
    };
    uu.prototype.N = getterFor("ha");
    uu.prototype.L = function (a) {
        this.ha = a;
        P(this.j(), a)
    };

    function wu(a, b) {
        T.call(this, b);
        this.h = new Nh(this);
        this.a = a && Bd(a) || {};
        this.a.La || (this.a.La = Fq);
        this.a.xf = !1;
        O(this.b.a.body, "position", "relative");
        le || O(this.b.a.body, "minHeight", "100%");
        O(this.b.a.documentElement, "height", "100%");
        O(this.b.a.body, "top", "0px");
        G && (window._bannerquirkfixleft = -parseInt("0" + this.b.a.body.leftMargin, 10),
            window._bannerquirkfixtop = -parseInt("0" + this.b.a.body.topMargin, 10) - 40)
    }
    D(wu, T);
    //u = wu.prototype;
    wu.prototype.ga = function () {
        var a = this.b.a.body.firstChild;
        ci(this, a.parentNode, a)
    };
    wu.prototype.D = function () { //createBannerFrameIfNotExists
        var a = vg(this.b, "div");
        this.ha = !1;
        P(a, !1);
        L(a, "skiptranslate");
        var b = V(this, "container");
        a.innerHTML = '<iframe id="' + X(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible; display:none;"></iframe>';
        //this.T(a)
        this["A"] = a;
    };
    wu.prototype.P = function () {
        wu.m.P.call(this);
        var a = {
                dir: Te.test(rq) ? "rtl" : "ltr",
                La: this.a.La,
                le: sb,
                Yi: rb, // rb = "https://translate.google.com"
                //Ye: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png",
                Ye: '', //"/translate/translate_static/img/googlelogo_color_68x28dp.png",
                Oe: Cq,
                qj: V(this, "promptSection"),
                Kh: V(this, "confirm"),
                oj: V(this, "progressSection"),
                nj: V(this, "progressValue"),
                Ni: Eq,
                Gh: V(this, "cancel"),
                Vh: V(this, "finishSection"),
                sj: V(this, "restore"),
                Rh: V(this, "errorSection"),
                Nh: V(this, "errorContent"),
                Jh: V(this, "close"),
                Dk: Cq,
                cj: V(this, "noAutoPopup")
            },
            b = [];
        this.a.xf && b.push(Sr({
            id: V(this, "promptSourceLang")
        }));
        b.push(Sr({
            id: V(this, "promptTargetLang")
        }));
        a.pj = Z.Ah.apply(null, b);
        b = [];
        this.a.xf && b.push(Sr({
            id: V(this, "finishSourceLang")
        }));
        b.push(Sr({
            id: V(this, "finishTargetLang")
        }));
        a.Uh = Z.vh.apply(null, b);
        this.a.rc && (a.rc = this.a.rc);
        this.l = this.b.j(V(this, "container"));
        this.h.w(this.l, "load", this.Dj);
        Uq(this.l, C(function () {
            var b = lg(this.l);
            b.write(Rr(a));
            b.close()
        }, this))
    };
    wu.prototype.Dj = function () {
        this.c = new Ff(lg(this.l));
        xu(this, Z.Gf);
        if (this.a.La == Fq) {
            var a = "url(" + Bq + ")";
            O(this.c.a.body, "backgroundImage", a);
            for (var b = this.c.a.getElementsByTagName("button"), c = 0; c < b.length; ++c) {
                var d = b[c].parentNode;
                O(d, "backgroundImage", a);
                O(d, "backgroundRepeat", "repeat-x");
                O(d, "backgroundPosition", "0 -39px")
            }
        }
        this.a.xf && (this.g = new nu(this.a, this.c));
        this.f = new nu(this.a, this.c);
        this.o = new pu(this.a, this.c);
        this.h.w(this.c.j(V(this, "confirm")), "click", dispatchEventFromObject(this, "clk_confirm"));
        this.h.w(this.c.j(V(this, "cancel")), "click", dispatchEventFromObject(this, "clk_cancel"));
        this.h.w(this.c.j(V(this, "restore")), "click", dispatchEventFromObject(this, "clk_restore"));
        this.h.w(this.c.j(V(this, "close")), "click", dispatchEventFromObject(this, "clk_close"));
        this.J = this.c.j(V(this, "noAutoPopup"));
        this.h.w(this.J, "click", dispatchEventFromObject(this, "clk_no_ap"));
        this.g && this.h.w(this.g, "change", dispatchEventFromObject(this, "chg_src_lang"));
        this.h.w(this.f, "change", dispatchEventFromObject(this, "chg_tgt_lang"));
        this.h.w(this.o, "change", this.vi);
        a = new Kq(C(this.Ej, this));
        this.g && this.h.w(this.g, "load", a.register());
        this.h.w(this.f, "load", a.register());
        this.h.w(this.o, "load", a.register());
        a.finish();
        this.g && this.g.ga(this.c.j(V(this, "promptSourceLang")));
        this.f.ga(this.c.j(V(this, "promptTargetLang")));
        this.o.ga(this.c.j("options"))
    };
    wu.prototype.Ej = function () {
        this.o.Vg(Z.oh);
        this.o.Uc({
            turn_off_site: Z.yh,
            s1: "---",
            learn_more: Z.nh
        });
        this.dispatchEvent("load")
    };
    wu.prototype.vi = function () {
        switch (this.o.Ba()) {
        case "learn_more":
            window.open(Iq, "_blank");
            break;
        case "turn_off_site":
            this.dispatchEvent("clk_no_ap_site")
        }
    };
    wu.prototype.$ = function () {
        this.L(!1);
        wu.m.$.call(this);
        this.h.M();
        this.h = null;
        this.g && (this.g.M(),
            this.g = null);
        this.f.M();
        this.f = null;
        this.o.M();
        this.o = null;
        bg(this.l);
        this.zc = this.c = null
    };
    wu.prototype.Zb = function () {
        return this.g ? this.g.Ba() : ""
    };
    wu.prototype.ya = function () {
        return this.f.Ba()
    };
    wu.prototype.Ub = function (a) {
        this.g && this.g.za(a);
        this.K && this.K[a] && this.c.hb(this.J, Z.xh(this.K[a]))
    };
    wu.prototype.ua = function (a) {
        this.f.za(a)
    };

    function yu(a, b, c, d) {
        if(b == -1){
            //_console.error("translate error")
            try{
			   TranslateDelegate.reportStatus("error");
            }catch(e){}
        }else if(b == 2){
            //_console.log("translate finish")
            try{
			   TranslateDelegate.reportStatus("finish");
            }catch(e){}
        }else if(b ==1){
            //_console.log("translate progress")
            try{
			    TranslateDelegate.reportStatus("progress");
            }catch(e){}
        }
        if (a.zc != b) {
            a.zc = b;
            if (0 == b) {
                a.g && iu(a.g, a.c.j(V(a, "promptSourceLang")));
                if (a.H) {
                    var e = a.ya();
                    a.f.Eb(a.H);
                    a.ua(e)
                }
                iu(a.f, a.c.j(V(a, "promptTargetLang")))
            } else 
                2 == b && (a.g && iu(a.g, a.c.j(V(a, "finishSourceLang"))),
                    a.C && (e = a.ya(),
                        a.f.Eb(a.C),
                        a.ua(e)),
                    iu(a.f, a.c.j(V(a, "finishTargetLang"))));
            e = {};
            e[-1] = a.c.j(V(a, "errorSection"));
            e[0] = a.c.j(V(a, "promptSection"));
            e[1] = a.c.j(V(a, "progressSection"));
            e[2] = a.c.j(V(a, "finishSection"));
            for (var g in e)
                e[g] !== Object.prototype[g] && P(e[g], g == b)
        }
        c && a.L(!0);
        a.J.parentNode.parentNode.style.display = d ? "block" : "none"
    }
    wu.prototype.N = getterFor("ha");
    wu.prototype.L = function (a) {
        if (this.ha != a) {
            this.ha = a;
            if (G)
                var b = parseInt("0" + this.b.a.body.leftMargin, 10),
                    c = parseInt("0" + this.b.a.body.topMargin, 10);
            var d = "BackCompat" == this.b.a.compatMode;
            //a ? (O(this.b.a.body, "top", "40px"),  // bannerFrameBar  40px 
            a ? (O(this.b.a.body, "top", "0px"),
                P(this.j(), !0),
                G && (K("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0,
                    d && (this.b.a.body.topMargin = c + 40)) : d ? (this.b.a.body.topMargin = c + 40,
                    window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b,
                    window._bannerquirkfixtop = -c - 40))) : (O(this.b.a.body, "top", "0px"),
                P(this.j(), !1),
                d && 40 <= c && (this.b.a.body.topMargin = c - 40))
        }
    };
    wu.prototype.tf = function (a) {
        //_console.log("progress: "+a+"%");
        this.c.hb(this.c.j(V(this, "progressValue")), a)
    };

    function xu(a, b) {
        a.c.hb(a.c.j(V(a, "errorContent")), b)
    }
    wu.prototype.vf = function (a, b) {
        this.H = a;
        this.C = b;
        this.f.Eb(a)
    };

    function TranslateElement(param, b) {
        Q.call(this);
        typeStringOf(param) == "string" && (b = param,
            param = {});
        typeStringOf(b) == "string" && (b = Gf(document, String(b)));
        this.ia = b;
        this.h = new Nh(this);
        this.Wb = this.X = void 0;
        param = Object(param);
        this.g = "auto";
        !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
            b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
        this.a = {
            ie: b,
            Wf: !1,
            je: null,
            cd: null,
            Re: [],
            Vf: [],
            Mh: !1,
            mc: !1,
            cb: "",
            Xf: !1,
            ue: "",
            Sb: 0,
            Rf: !1
        };
        this.pa = {
            La: Fq,
            rc: "https://" == translateApiHostScheme ? Z.th : null
        };
        this.R = {
            La: Fq,
            kd: null
        };
        param && ("autoDisplay" in param && (this.a.ie = this.a.ie && !!param.autoDisplay),
            "multilanguagePage" in param && (this.a.mc = !!param.multilanguagePage),
            "gaTrack" in param && (this.a.Xf = !!param.gaTrack),
            "layout" in param && (this.a.Sb = param.layout),
            param.pageLanguage && (this.a.Td = Rq(param.pageLanguage)),
            param.includedLanguages && (this.a.Re = param.includedLanguages.split(",")),
            param.excludedLanguages && (this.a.Vf = param.excludedLanguages.split(",")),
            this.a.Td && (this.g = this.a.Td),
            param.key && (this.a.cb = param.key),
            param.gaId && (this.a.ue = param.gaId),
            this.R.kd = Number(param.floatPosition) || this.R.kd,
            "disableAutoTranslation" in param && (this.a.Rf = !!param.disableAutoTranslation),
            param.jwtToken && (this.X = new Cr(param.jwtToken)),
            param.jwtTokenProvider && (this.X = new Dr(param.jwtTokenProvider)),
            param.translateErrorHandler && (this.Wb = param.translateErrorHandler));
        !this.a.Rf && Bu(this) && (this.a.Wf = !0);
        this.s = {};
        if ((param = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && param[2])
            for (this.s = {},
                param = decodeUrl(param[2]).split("|"),
                b = 0; b < param.length; ++b) {
                var c = param[b].split("=");
                c[0] && (this.s[c[0]] = c[1])
            }
        this.xa = new Vs({
            cb: this.a.cb,
            Kb: 1,
            wf: !0,
            Hk: Hq
        }, {
            client: xq,
            u: window.location.href
        });
        this.B = new gu(0, this.xa, void 0, void 0, this.a.cb, void 0, void 0, new Vt, this.X, this.Wb);
        this.G = !1;
        this.h.w(window, "unload", this.M);
        this.I = new Kq(C(this.oi, this));
        this.C = new Kq(C(this.si, this));
        this.J = new Mq(C(this.Li, this));
        this.b = new wu(this.pa);
        this.B.qd(this.I.register(C(this.ni, this)), rq);
        this.ia ? (this.f = new qu(this.a),
            this.h.w(this.f, "load", this.I.register()),
            this.h.w(this.f, "chg_tgt_lang", Nq(this.J, this.C.fb(C(this.mi, this)))),
            this.f.ga(this.ia)) : this.R.kd && (this.l = new uu(this.R),
            this.h.w(this.l, "load", this.I.register()),
            this.h.w(this.l, "clk_trans", Nq(this.J, this.C.fb(C(this.li, this)))),
            this.l.ga());
        !this.a.Td && this.a.Mh && this.B.md(this.I.register(C(this.ii, this)));
        this.I.finish();
        
        window.GoogleTranslate.translate = function (lang) {
            if (true) {
                if (!lang) {
                    if (GoogleTranslate.TranslateElement.getInstance().c) {
                        return GoogleTranslate.TranslateElement.getInstance().b.dispatchEvent('clk_confirm');
                    }
                    return false;
                }
                document.querySelector('.goog-te-combo').value = lang;
                if (!window.GoogleTranslate._change_event) {
                    var ev = document.createEvent('HTMLEvents');
                    ev.initEvent('change', false, true);
                    window.GoogleTranslate._change_event = ev;
                }
                GoogleTranslate.TranslateElement.getInstance().c = lang;
                document.querySelector('.goog-te-combo').dispatchEvent(window.GoogleTranslate._change_event);
                return true;
            }
            //if (lang)
             ///   window.GoogleTranslate.TranslateElement.getInstance().c = lang;
            //return window.GoogleTranslate.TranslateElement.getInstance().b.dispatchEvent('clk_confirm')
        }
        window.GoogleTranslate.restore = function () {
            return window.GoogleTranslate.TranslateElement.getInstance().b.dispatchEvent('clk_restore');
        }

        window.GoogleTranslate.clear = function () {
            return window.GoogleTranslate.TranslateElement.getInstance().b.dispatchEvent('clk_close');
        }
        window.GoogleTranslate.cancel = function () {
            return window.GoogleTranslate.TranslateElement.getInstance().b.dispatchEvent('clk_cancel');
        }

    }
    D(TranslateElement, Q);

    function Bu(a) {
        function b(a, b) {
            if (a = decodeUrl(a).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                if (a[3])
                    return b.a.je = a[2],
                        b.a.cd = a[3], !0;
                if (a[6])
                    return b.a.je = a[5],
                        b.a.cd = a[6], !0
            }
            return !1
        }
        var c = {
                url: function () {
                        var a = window.location.href.match(/#.*googtrans(.*)/);
                        return a && a[1]
                    },
                    cookie: function () {
                        var a = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                        return a && a[2]
                    }
            },
            d;
        for (d in c)
            if (c[d] !== Object.prototype[d]) {
                var e = c[d]();
                if (e && b(e, a))
                    return d
            }
        return ""
    }

    function setCookie(a, b) {
        return; //camike
        for (var c = window.location.hostname.split("."); 2 < c.length;)
            c.shift();
        c = ";domain=" + c.join(".");
        null != b ? a = a + "=" + b : (b = new Date,
            b.setTime(b.getTime() - 1),
            a = a + "=none;expires=" + b.toGMTString());
        a += ";path=/";
        document.cookie = a;
        try {
            document.cookie = a + c
        } catch (d) {}
    }

    function Du(a, b) {
            var c = null;
            isDefined(b) && (c = isDefined(a) ? "/" + a + "/" + b : "/" + b);
            setCookie("googtrans", c)
        }
        //u = TranslateElement.prototype;
    TranslateElement.prototype.ni = function (a) { // u = TranslateElement.prototype;
        this.c = Rq(rq);
        this.H = a || {};
        this.o = {};
        this.K = {};
        a = !this.a.Re.length;
        var b = Jq(this.a.Re),
            c = Jq(this.a.Vf);
        this.o[rq] = "";
        this.K[rq] = "";
        for (var d in this.H.tl)
            this.H.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.K[d] = this.H.tl[d],
                d == this.a.Td && !this.a.mc) || (this.o[d] = this.H.tl[d]);
        this.o[rq] || delete this.o[rq];
        this.K[rq] || delete this.K[rq];
        this.fa = Bd(this.H.sl)
    };
    TranslateElement.prototype.ii = function (a) { // u = TranslateElement.prototype;
        a && (this.g = Rq(a))
    };
    TranslateElement.prototype.oi = function () { // u = TranslateElement.prototype;
        delete this.I;
        if (this.H) {
            this.g = this.g || this.a.je;
            this.c = this.a.cd || this.c;
            var a = this.a.Wf || this.a.ie && this.g != this.c && !(this.g in vq) && "1" != this.s.os && "1" != this.s["o" + this.g];
            "zh-TW" == this.g && (this.g = "zh-CN");
            this.fa[this.g] || (a = !1,
                this.g = "auto");
            if (!this.o[this.c])
                if (a = !1,
                    this.o.en)
                    this.c = "en";
                else
                    for (var b in this.o)
                        if (this.o[b] !== Object.prototype[b]) {
                            this.c = b;
                            break
                        }
            if (this.f) {
                var c = this.o,
                    d = {
                        "": Z.sh
                    };
                for (b in c)
                    c[b] !== Object.prototype[b] && (d[b] = c[b]);
                this.f.vf(d, this.K);
                this.f.ua("")
            }!tq && a ? this.a.cd ? Nq(this.J, this.C.fb(C(this.Ud, this, !0, !0))).call() : (this.G = !0,
                Nq(this.J, this.C.fb(C(this.Ud, this))).call(),
                Tq("te_ap", {
                    sl: this.g
                })) : (this.l && this.l.L(!0),
                this.f && this.f.L(!0));
            window.GoogleTranslate.TranslateService && this.oa(!1);
            this.J.finish()
        }
    };
    TranslateElement.prototype.si = function () { // u = TranslateElement.prototype;
        var a = this.b,
            b = this.fa;
        a.g && a.g.Eb(b);
        a.K = b;
        this.b.vf(this.o, this.K);
        this.b.Ub(this.g);
        this.b.ua(this.c);
        this.h.w(this.b, "clk_confirm", this.confirm);
        this.h.w(this.b, "clk_cancel", this.cancel);
        this.h.w(this.b, "clk_restore", this.restore);
        this.h.w(this.b, "clk_close", this.close);
        this.h.w(this.b, "clk_no_ap", this.di);
        this.h.w(this.b, "clk_no_ap_site", this.ei);
        this.h.w(this.b, "chg_src_lang", this.fg);
        this.h.w(this.b, "chg_tgt_lang", this.fg);
        this.f && this.f.L(!0)
    };
    TranslateElement.prototype.Li = function () { // u = TranslateElement.prototype;
        this.h.w(this.b, "load", this.C.register());
        this.b.ga();
        this.C.finish()
    };
    TranslateElement.prototype.F = function () { // u = TranslateElement.prototype;
        this.B.restore();
        TranslateElement.m.F.call(this);
        this.B.M();
        this.h.M();
        this.h = null;
        this.b && this.b.M();
        this.b = null;
        this.l && this.l.M();
        this.l = null;
        this.f && this.f.M();
        this.ia = this.f = null
    };
    TranslateElement.prototype.confirm = function () { // u = TranslateElement.prototype;
        !this.b.N() || !this.a.mc && Zq(this.g, this.b.ya()) || (this.G && Tq("te_apt", {
                sl: this.g
            }),
            Eu(this, !1),
            this.f && this.f.ua(this.b.ya()))
    };
    TranslateElement.prototype.cancel = function () { // u = TranslateElement.prototype;
        this.b.N() && (Fu(this),
            yu(this.b, 0),
            this.f && this.f.ua(""))
    };
    TranslateElement.prototype.restore = function () { // u = TranslateElement.prototype;
        this.b.N() && (Fu(this),
            yu(this.b, 0));
        this.f && this.f.ua("")
    };
    TranslateElement.prototype.close = function () { // u = TranslateElement.prototype;
        this.b.N() && (this.G && (this.G = !1,
                Tq("te_apc", {
                    sl: this.g
                })),
            Fu(this),
            this.b.L(!1),
            this.f && this.f.ua(""),
            this.l && this.l.L(!0))
    };
    TranslateElement.prototype.di = function () { // u = TranslateElement.prototype;
        this.b.N() && (this.s["o" + this.g] = "1",
            Tq("te_apr", {
                sl: this.g
            }),
            this.G = !1,
            this.Ad())
    };
    TranslateElement.prototype.ei = function () { // u = TranslateElement.prototype;
        if (this.b.N()) {
            this.G = !1;
            this.s.os = "1";
            var a = null;
            if (this.s) {
                a = [];
                for (var b in this.s)
                    this.s[b] !== Object.prototype[b] && a.push(b + "=" + this.s[b]);
                a = a.join("|")
            }
            setCookie("googtransopt", a);
            this.Ad()
        }
    };
    TranslateElement.prototype.fg = function () { // u = TranslateElement.prototype;
        this.b.N() && (!this.a.mc && Zq(this.g, this.b.ya()) ? this.Ie() : (this.g = this.b.Zb() || this.g,
            this.c = this.b.ya(),
            2 == this.b.zc && (this.f && this.f.ua(this.b.ya()),
                Eu(this))))
    };
    TranslateElement.prototype.Ud = function (a, b) { // u = TranslateElement.prototype;
        this.b.N() || (this.l && this.l.L(!1),
            a ? Eu(this, b) : yu(this.b, 0, !0, this.G))
    };
    TranslateElement.prototype.yj = function (a, b) { // u = TranslateElement.prototype;
        Nq(this.J, this.C.fb(C(this.Ud, this, a, b))).call()
    };
    TranslateElement.prototype.li = function () { // u = TranslateElement.prototype;
        this.Ud(2 == this.b.zc)
    };
    TranslateElement.prototype.mi = function () { // u = TranslateElement.prototype;
        this.f.ya() ? !this.a.mc && Zq(this.g, this.b.ya()) ? this.Ie() : (this.c = this.f.ya(),
            this.b.ua(this.c),
            Eu(this)) : this.f.ua(this.c)
    };

    function Eu(a, b) {
        if (window.GoogleTranslate.TranslateService)
            try {
                window.GoogleTranslate.TranslateService.getInstance().restore()
            } catch (c) {}
        Du(a.g, a.c);
        a.G = !1;
        !b && a.g in vq && Tq("te_ape", {
            sl: a.g
        });
        a.b.tf(0);
        yu(a.b, 1, !0);
        a.B.Wg(!!b);
        window.setTimeout(C(a.B.ae, a.B, a.a.mc ? "auto" : a.g, a.c, C(a.Ai, a), void 0, void 0), 0);
        if (a.a.Xf && window._gaq && window._gat)
            try {
                a.a.ue ? window._gat._getTracker(a.a.ue)._trackEvent(la, "Translate", a.c) : window._gat._getTrackerByName()._trackEvent(la, "Translate", a.c)
            } catch (c) {}
    }
    TranslateElement.prototype.Ai = function (a, b, c) { // u = TranslateElement.prototype;
        typeStringOf(this.qa) == n && this.qa();
        this.b.N() && 1 == this.b.zc && (c ? (Fu(this),
            yu(this.b, -1, !0),
            2 == c ? xu(this.b, Z.mh) : xu(this.b, Z.Gf)) : (this.b.tf(a),
            b && (this.f && this.f.ua(this.c),
                this.b.Ub(this.g),
                yu(this.b, 2))))
    };

    function Fu(a) {
        Du();
        window.setTimeout(C(a.B.restore, a.B, null), 0)
    }
    TranslateElement.prototype.oa = function (a) { // u = TranslateElement.prototype;
        a || this.Ad();
        this.f && this.f.oa(a);
        this.l && this.l.L(a)
    };

    function windowMember(a) {
        if (a && (a = String(a),
            a = a.split("."),
            a.length)) {
            for (var b = window, c = 0; c < a.length; ++c) {
                var d = a[c];
                if (!(d && d in b))
                    return;
                b = b[d]
            }
            return b
        }
    };
    var Hu = windowMember("GoogleTranslate.m");
    if (Hu)
        for (var Iu in Z)
            if (Z[Iu] !== Object.prototype[Z[Iu]] && Z[Iu]) {
                var Ju = Z[Iu]();
                Z[Iu] = Hu[Ju] ? Hu[Ju] : Qr
            }
    if (1 == wq) {
        var Ku = null,
            Lu = function (a) {
                if (!Ku) {
                    var b, c, d;
                    a && ("key" in a && (b = a.key),
                        "serverParams" in a && (c = a.serverParams),
                        "timeInfo" in a && (d = a.timeInfo), (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
                    a = 0;
                    if ("te_lib" == xq || Rd)
                        a = 3;
                    Ku = new gu(0, new Vs({
                        cb: b,
                        Kb: a,
                        wf: !0,
                        Wc: "tvis" == c
                    }), void 0, void 0, b, c, d, new Vt);
                    Ku.constructor = emptyFunction;
                    Ku.isAvailable = Ku.Ya;
                    Ku.getSupportedLanguages = Ku.qd;
                    Ku.getPageLanguage = Ku.md;
                    Ku.setClickThrough = Ku.Wg;
                    Ku.translatePage = Ku.ae;
                    Ku.restore = Ku.restore;
                    Ku.isTranslating = Ku.Cj
                }
                return Ku
            };
        Lu.getInstance = function () {
            return Ku
        };
        Bc("GoogleTranslate.TranslateService", Lu);
        Tq("te_li")
    } else {
        var translateElementInstance = null,
            translateElement = function (a, b) {
                translateElementInstance || (translateElementInstance = new TranslateElement(a, b),
                    translateElementInstance.constructor = emptyFunction);
                return translateElementInstance
            };
        translateElement.getInstance = function () {
            return translateElementInstance
        };
        Bc("GoogleTranslate.TranslateElement", translateElement);
        TranslateElement.prototype.dispose = TranslateElement.prototype.M;
        TranslateElement.prototype.showBanner = TranslateElement.prototype.yj;
        TranslateElement.prototype.setEnabled = TranslateElement.prototype.oa;
        Bc("GoogleTranslate.TranslateElement.FloatPosition", vu);
        vu.TOP_LEFT = 1;
        vu.TOP_RIGHT = 2;
        vu.BOTTOM_RIGHT = 3;
        vu.BOTTOM_LEFT = 4;
        Bc("GoogleTranslate.TranslateElement.InlineLayout", ru);
        ru.VERTICAL = 0;
        ru.HORIZONTAL = 1;
        ru.SIMPLE = 2
    }
    (function () {
        for (var a in Object.prototype) {
            td = function (a, b, c) {
                for (var d in a)
                    a[d] !== Object.prototype[d] && b.call(c, a[d], d, a)
            };
            break
        }
        var b = nowTime(),
            c = windowMember(sq); // googleTranslateElementInit
        c && typeStringOf(c) == "function" && (1 == wq ? c() : function e() {
            var a = document.readyState;
            "undefined" == typeStringOf(a) || a == "complete" || "interactive" == a || 2E4 <= nowTime() - b ? c() : window.setTimeout(e, 500)
        }())
    })();
};

GoogleTranslateInit();
