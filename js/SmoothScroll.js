(function() {
    var D = {
        frameRate: 150,
        animationTime: 600,
        stepSize: 100,
        pulseAlgorithm: true,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true,
        excluded: ""
    };
    var u = D;
    var s = false;
    var p = false;
    var h = {
        x: 0,
        y: 0
    };
    var b = false;
    var w = document.documentElement;
    var d;
    var y;
    var J;
    var H = [120, 120, 120];
    var o = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };
    var u = D;

    function K() {
        var L = false;
        if (L) {
            a("keydown", t)
        }
        if (u.keyboardSupport && !L) {
            f("keydown", t)
        }
    }

    function E() {
        if (!document.body) {
            return
        }
        var L = document.body;
        var M = document.documentElement;
        var P = window.innerHeight;
        var N = L.scrollHeight;
        w = (document.compatMode.indexOf("CSS") >= 0) ? M : L;
        d = L;
        K();
        b = true;
        if (top != self) {
            p = true
        } else {
            if (N > P && (L.offsetHeight <= P || M.offsetHeight <= P)) {
                M.style.height = "auto";
                setTimeout(J, 10);
                if (w.offsetHeight <= P) {
                    var O = document.createElement("div");
                    O.style.clear = "both";
                    L.appendChild(O)
                }
            }
        }
        if (!u.fixedBackground && !s) {
            L.style.backgroundAttachment = "scroll";
            M.style.backgroundAttachment = "scroll"
        }
    }
    var z = [];
    var g = false;
    var m = +new Date;

    function F(O, N, S, P) {
        P || (P = 1000);
        x(N, S);
        if (u.accelerationMax != 1) {
            var L = +new Date;
            var T = L - m;
            if (T < u.accelerationDelta) {
                var Q = (1 + (30 / T)) / 2;
                if (Q > 1) {
                    Q = Math.min(Q, u.accelerationMax);
                    N *= Q;
                    S *= Q
                }
            }
            m = +new Date
        }
        z.push({
            x: N,
            y: S,
            lastX: (N < 0) ? 0.99 : -0.99,
            lastY: (S < 0) ? 0.99 : -0.99,
            start: +new Date
        });
        if (g) {
            return
        }
        var R = (O === document.body);
        var M = function(V) {
            var U = +new Date;
            var ac = 0;
            var ab = 0;
            for (var X = 0; X < z.length; X++) {
                var ae = z[X];
                var ad = U - ae.start;
                var W = (ad >= u.animationTime);
                var Y = (W) ? 1 : ad / u.animationTime;
                if (u.pulseAlgorithm) {
                    Y = j(Y)
                }
                var aa = (ae.x * Y - ae.lastX) >> 0;
                var Z = (ae.y * Y - ae.lastY) >> 0;
                ac += aa;
                ab += Z;
                ae.lastX += aa;
                ae.lastY += Z;
                if (W) {
                    z.splice(X, 1);
                    X--
                }
            }
            if (R) {
                window.scrollBy(ac, ab)
            } else {
                if (ac) {
                    O.scrollLeft += ac
                }
                if (ab) {
                    O.scrollTop += ab
                }
            }
            if (!N && !S) {
                z = []
            }
            if (z.length) {
                A(M, O, (P / u.frameRate + 1))
            } else {
                g = false
            }
        };
        A(M, O, 0);
        g = true
    }

    function l(O) {
        if (!b) {
            E()
        }
        var P = O.target;
        var N = B(P);
        if (!N || O.defaultPrevented || k(d, "embed") || (k(P, "embed") && /\.pdf/i.test(P.src))) {
            return true
        }
        var M = O.wheelDeltaX || 0;
        var L = O.wheelDeltaY || 0;
        if (!M && !L) {
            L = O.wheelDelta || 0
        }
        if (!u.touchpadSupport && I(L)) {
            return true
        }
        if (Math.abs(M) > 1.2) {
            M *= u.stepSize / 120
        }
        if (Math.abs(L) > 1.2) {
            L *= u.stepSize / 120
        }
        F(N, -M, -L);
        O.preventDefault()
    }

    function t(M) {
        var R = M.target;
        var P = M.ctrlKey || M.altKey || M.metaKey || (M.shiftKey && M.keyCode !== o.spacebar);
        if (/input|textarea|select|embed/i.test(R.nodeName) || R.isContentEditable || M.defaultPrevented || P) {
            return true
        }
        if (k(R, "button") && M.keyCode === o.spacebar) {
            return true
        }
        var N, T = 0,
            S = 0;
        var O = B(d);
        var Q = O.clientHeight;
        if (O == document.body) {
            Q = window.innerHeight
        }
        switch (M.keyCode) {
            case o.up:
                S = -u.arrowScroll;
                break;
            case o.down:
                S = u.arrowScroll;
                break;
            case o.spacebar:
                N = M.shiftKey ? 1 : -1;
                S = -N * Q * 0.9;
                break;
            case o.pageup:
                S = -Q * 0.9;
                break;
            case o.pagedown:
                S = Q * 0.9;
                break;
            case o.home:
                S = -O.scrollTop;
                break;
            case o.end:
                var L = O.scrollHeight - O.scrollTop - Q;
                S = (L > 0) ? L + 10 : 0;
                break;
            case o.left:
                T = -u.arrowScroll;
                break;
            case o.right:
                T = u.arrowScroll;
                break;
            default:
                return true
        }
        F(O, T, S);
        M.preventDefault()
    }

    function n(L) {
        d = L.target
    }
    var i = {};
    setInterval(function() {
        i = {}
    }, 10 * 1000);
    var v = (function() {
        var L = 0;
        return function(M) {
            return M.uniqueID || (M.uniqueID = L++)
        }
    })();

    function c(M, L) {
        for (var N = M.length; N--;) {
            i[v(M[N])] = L
        }
        return L
    }

    function B(O) {
        var M = [];
        var L = w.scrollHeight;
        do {
            var N = i[v(O)];
            if (N) {
                return c(M, N)
            }
            M.push(O);
            if (L === O.scrollHeight) {
                if (!p || w.clientHeight + 10 < L) {
                    return c(M, document.body)
                }
            } else {
                if (O.clientHeight + 10 < O.scrollHeight) {
                    overflow = getComputedStyle(O, "").getPropertyValue("overflow-y");
                    if (overflow === "scroll" || overflow === "auto") {
                        return c(M, O)
                    }
                }
            }
        } while (O = O.parentNode)
    }

    function f(N, M, L) {
        window.addEventListener(N, M, (L || false))
    }

    function a(N, M, L) {
        window.removeEventListener(N, M, (L || false))
    }

    function k(M, L) {
        return (M.nodeName || "").toLowerCase() === L.toLowerCase()
    }

    function x(L, M) {
        L = (L > 0) ? 1 : -1;
        M = (M > 0) ? 1 : -1;
        if (h.x !== L || h.y !== M) {
            h.x = L;
            h.y = M;
            z = [];
            m = 0
        }
    }
    var e;

    function I(L) {
        if (!L) {
            return
        }
        L = Math.abs(L);
        H.push(L);
        H.shift();
        clearTimeout(e);
        var N = (H[0] == H[1] && H[1] == H[2]);
        var M = (q(H[0], 120) && q(H[1], 120) && q(H[2], 120));
        return !(N || M)
    }

    function q(M, L) {
        return (Math.floor(M / L) == M / L)
    }
    var A = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(N, M, L) {
            window.setTimeout(N, L || (1000 / 60))
        }
    })();

    function C(L) {
        var N, O, M;
        L = L * u.pulseScale;
        if (L < 1) {
            N = L - (1 - Math.exp(-L))
        } else {
            O = Math.exp(-1);
            L -= 1;
            M = 1 - Math.exp(-L);
            N = O + (M * (1 - O))
        }
        return N * u.pulseNormalize
    }

    function j(L) {
        if (L >= 1) {
            return 1
        }
        if (L <= 0) {
            return 0
        }
        if (u.pulseNormalize == 1) {
            u.pulseNormalize /= C(1)
        }
        return C(L)
    }
    var G = /chrome/i.test(window.navigator.userAgent);
    var r = "onmousewheel" in document;
    if (r && G) {
        f("mousedown", n);
        f("mousewheel", l);
        f("load", E)
    }
})();
