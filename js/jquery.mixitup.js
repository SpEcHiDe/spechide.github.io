(function(f) {
    function c(I, J, D, K, L) {
        function H() {
            B.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");
            J && b(J, D, K, L);
            L.startOrder = [];
            L.newOrder = [];
            L.origSort = [];
            L.checkSort = [];
            i.removeStyle(L.prefix + "filter, filter, " + L.prefix + "transform, transform, opacity, display").css(L.clean).removeAttr("data-checksum");
            window.atob || i.css({
                display: "none",
                opacity: "0"
            });
            B.removeStyle(L.prefix + "transition, transition, " + L.prefix + "perspective, perspective, " + L.prefix + "perspective-origin, perspective-origin, " + (L.resizeContainer ? "height" : ""));
            "list" == L.layoutMode ? (A.css({
                display: L.targetDisplayList,
                opacity: "1"
            }), L.origDisplay = L.targetDisplayList) : (A.css({
                display: L.targetDisplayGrid,
                opacity: "1"
            }), L.origDisplay = L.targetDisplayGrid);
            L.origLayout = L.layoutMode;
            setTimeout(function() {
                i.removeStyle(L.prefix + "transition, transition");
                L.mixing = !1;
                if ("function" == typeof L.onMixEnd) {
                    var k = L.onMixEnd.call(this, L);
                    L = k ? k : L
                }
            })
        }
        clearInterval(L.failsafe);
        L.mixing = !0;
        L.filter = I;
        if ("function" == typeof L.onMixStart) {
            var G = L.onMixStart.call(this, L);
            L = G ? G : L
        }
        for (var E = L.transitionSpeed, G = 0; 2 > G; G++) {
            var F = 0 == G ? F = L.prefix : "";
            L.transition[F + "transition"] = "all " + E + "ms linear";
            L.transition[F + "transform"] = F + "translate3d(0,0,0)";
            L.perspective[F + "perspective"] = L.perspectiveDistance + "px";
            L.perspective[F + "perspective-origin"] = L.perspectiveOrigin
        }
        var d = L.targetSelector,
            i = K.find(d);
        i.each(function() {
            this.data = {}
        });
        var B = i.parent();
        B.css(L.perspective);
        L.easingFallback = "ease-in-out";
        "smooth" == L.easing && (L.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
        "snap" == L.easing && (L.easing = "cubic-bezier(0.77, 0, 0.175, 1)");
        "windback" == L.easing && (L.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", L.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)");
        "windup" == L.easing && (L.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", L.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)");
        G = "list" == L.layoutMode && null != L.listEffects ? L.listEffects : L.effects;
        Array.prototype.indexOf && (L.fade = -1 < G.indexOf("fade") ? "0" : "", L.scale = -1 < G.indexOf("scale") ? "scale(.01)" : "", L.rotateZ = -1 < G.indexOf("rotateZ") ? "rotate(180deg)" : "", L.rotateY = -1 < G.indexOf("rotateY") ? "rotateY(90deg)" : "", L.rotateX = -1 < G.indexOf("rotateX") ? "rotateX(90deg)" : "", L.blur = -1 < G.indexOf("blur") ? "blur(8px)" : "", L.grayscale = -1 < G.indexOf("grayscale") ? "grayscale(100%)" : "");
        var A = f(),
            x = f(),
            o = [],
            y = !1;
        "string" === typeof I ? o = e(I) : (y = !0, f.each(I, function(k) {
            o[k] = e(this)
        }));
        "or" == L.filterLogic ? ("" == o[0] && o.shift(), 1 > o.length ? x = x.add(K.find(d + ":visible")) : i.each(function() {
            var l = f(this);
            if (y) {
                var k = 0;
                f.each(o, function(m) {
                    this.length ? l.is("." + this.join(", .")) && k++ : 0 < k && k++
                });
                k == o.length ? A = A.add(l) : x = x.add(l)
            } else {
                l.is("." + o.join(", .")) ? A = A.add(l) : x = x.add(l)
            }
        })) : (A = A.add(B.find(d + "." + o.join("."))), x = x.add(B.find(d + ":not(." + o.join(".") + "):visible")));
        I = A.length;
        var j = f(),
            z = f(),
            C = f();
        x.each(function() {
            var k = f(this);
            "none" != k.css("display") && (j = j.add(k), C = C.add(k))
        });
        if (A.filter(":visible").length == I && !j.length && !J) {
            if (L.origLayout == L.layoutMode) {
                return H(), !1
            }
            if (1 == A.length) {
                return "list" == L.layoutMode ? (K.addClass(L.listClass), K.removeClass(L.gridClass), C.css("display", L.targetDisplayList)) : (K.addClass(L.gridClass), K.removeClass(L.listClass), C.css("display", L.targetDisplayGrid)), H(), !1
            }
        }
        L.origHeight = B.height();
        if (A.length) {
            K.removeClass(L.failClass);
            A.each(function() {
                var k = f(this);
                "none" == k.css("display") ? z = z.add(k) : C = C.add(k)
            });
            if (L.origLayout != L.layoutMode && !1 == L.animateGridList) {
                return "list" == L.layoutMode ? (K.addClass(L.listClass), K.removeClass(L.gridClass), C.css("display", L.targetDisplayList)) : (K.addClass(L.gridClass), K.removeClass(L.listClass), C.css("display", L.targetDisplayGrid)), H(), !1
            }
            if (!window.atob) {
                return H(), !1
            }
            i.css(L.clean);
            C.each(function() {
                this.data.origPos = f(this).offset()
            });
            "list" == L.layoutMode ? (K.addClass(L.listClass), K.removeClass(L.gridClass), z.css("display", L.targetDisplayList)) : (K.addClass(L.gridClass), K.removeClass(L.listClass), z.css("display", L.targetDisplayGrid));
            z.each(function() {
                this.data.showInterPos = f(this).offset()
            });
            j.each(function() {
                this.data.hideInterPos = f(this).offset()
            });
            C.each(function() {
                this.data.preInterPos = f(this).offset()
            });
            "list" == L.layoutMode ? C.css("display", L.targetDisplayList) : C.css("display", L.targetDisplayGrid);
            J && b(J, D, K, L);
            if (J && a(L.origSort, L.checkSort)) {
                return H(), !1
            }
            j.hide();
            z.each(function(k) {
                this.data.finalPos = f(this).offset()
            });
            C.each(function() {
                this.data.finalPrePos = f(this).offset()
            });
            L.newHeight = B.height();
            J && b("reset", null, K, L);
            z.hide();
            C.css("display", L.origDisplay);
            "block" == L.origDisplay ? (K.addClass(L.listClass), z.css("display", L.targetDisplayList)) : (K.removeClass(L.listClass), z.css("display", L.targetDisplayGrid));
            L.resizeContainer && B.css("height", L.origHeight + "px");
            I = {};
            for (G = 0; 2 > G; G++) {
                F = 0 == G ? F = L.prefix : "", I[F + "transform"] = L.scale + " " + L.rotateX + " " + L.rotateY + " " + L.rotateZ, I[F + "filter"] = L.blur + " " + L.grayscale
            }
            z.css(I);
            C.each(function() {
                var l = this.data,
                    q = f(this);
                q.hasClass("mix_tohide") ? (l.preTX = l.origPos.left - l.hideInterPos.left, l.preTY = l.origPos.top - l.hideInterPos.top) : (l.preTX = l.origPos.left - l.preInterPos.left, l.preTY = l.origPos.top - l.preInterPos.top);
                for (var p = {}, m = 0; 2 > m; m++) {
                    var n = 0 == m ? n = L.prefix : "";
                    p[n + "transform"] = "translate(" + l.preTX + "px," + l.preTY + "px)"
                }
                q.css(p)
            });
            "list" == L.layoutMode ? (K.addClass(L.listClass), K.removeClass(L.gridClass)) : (K.addClass(L.gridClass), K.removeClass(L.listClass));
            setTimeout(function() {
                if (L.resizeContainer) {
                    for (var k = {}, m = 0; 2 > m; m++) {
                        var l = 0 == m ? l = L.prefix : "";
                        k[l + "transition"] = "all " + E + "ms ease-in-out";
                        k.height = L.newHeight + "px"
                    }
                    B.css(k)
                }
                j.css("opacity", L.fade);
                z.css("opacity", 1);
                z.each(function() {
                    var n = this.data;
                    n.tX = n.finalPos.left - n.showInterPos.left;
                    n.tY = n.finalPos.top - n.showInterPos.top;
                    for (var r = {}, q = 0; 2 > q; q++) {
                        var p = 0 == q ? p = L.prefix : "";
                        r[p + "transition-property"] = p + "transform, " + p + "filter, opacity";
                        r[p + "transition-timing-function"] = L.easing + ", linear, linear";
                        r[p + "transition-duration"] = E + "ms";
                        r[p + "transition-delay"] = "0";
                        r[p + "transform"] = "translate(" + n.tX + "px," + n.tY + "px)";
                        r[p + "filter"] = "none"
                    }
                    f(this).css("-webkit-transition", "all " + E + "ms " + L.easingFallback).css(r)
                });
                C.each(function() {
                    var n = this.data;
                    n.tX = 0 != n.finalPrePos.left ? n.finalPrePos.left - n.preInterPos.left : 0;
                    n.tY = 0 != n.finalPrePos.left ? n.finalPrePos.top - n.preInterPos.top : 0;
                    for (var r = {}, q = 0; 2 > q; q++) {
                        var p = 0 == q ? p = L.prefix : "";
                        r[p + "transition"] = "all " + E + "ms " + L.easing;
                        r[p + "transform"] = "translate(" + n.tX + "px," + n.tY + "px)"
                    }
                    f(this).css("-webkit-transition", "all " + E + "ms " + L.easingFallback).css(r)
                });
                k = {};
                for (m = 0; 2 > m; m++) {
                    l = 0 == m ? l = L.prefix : "", k[l + "transition"] = "all " + E + "ms " + L.easing + ", " + l + "filter " + E + "ms linear, opacity " + E + "ms linear", k[l + "transform"] = L.scale + " " + L.rotateX + " " + L.rotateY + " " + L.rotateZ, k[l + "filter"] = L.blur + " " + L.grayscale, k.opacity = L.fade
                }
                j.css(k);
                B.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(n) {
                    if (-1 < n.originalEvent.propertyName.indexOf("transform") || -1 < n.originalEvent.propertyName.indexOf("opacity")) {
                        -1 < d.indexOf(".") ? f(n.target).hasClass(d.replace(".", "")) && H() : f(n.target).is(d) && H()
                    }
                })
            }, 10);
            L.failsafe = setTimeout(function() {
                L.mixing && H()
            }, E + 400)
        } else {
            L.resizeContainer && B.css("height", L.origHeight + "px");
            if (!window.atob) {
                return H(), !1
            }
            j = x;
            setTimeout(function() {
                B.css(L.perspective);
                if (L.resizeContainer) {
                    for (var m = {}, k = 0; 2 > k; k++) {
                        var l = 0 == k ? l = L.prefix : "";
                        m[l + "transition"] = "height " + E + "ms ease-in-out";
                        m.height = L.minHeight + "px"
                    }
                    B.css(m)
                }
                i.css(L.transition);
                if (x.length) {
                    m = {};
                    for (k = 0; 2 > k; k++) {
                        l = 0 == k ? l = L.prefix : "", m[l + "transform"] = L.scale + " " + L.rotateX + " " + L.rotateY + " " + L.rotateZ, m[l + "filter"] = L.blur + " " + L.grayscale, m.opacity = L.fade
                    }
                    j.css(m);
                    B.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(n) {
                        if (-1 < n.originalEvent.propertyName.indexOf("transform") || -1 < n.originalEvent.propertyName.indexOf("opacity")) {
                            K.addClass(L.failClass), H()
                        }
                    })
                } else {
                    L.mixing = !1
                }
            }, 10)
        }
    }

    function b(p, q, j, d) {
        function i(l, k) {
            var s = isNaN(1 * l.attr(p)) ? l.attr(p).toLowerCase() : 1 * l.attr(p),
                r = isNaN(1 * k.attr(p)) ? k.attr(p).toLowerCase() : 1 * k.attr(p);
            return s < r ? -1 : s > r ? 1 : 0
        }

        function o(k) {
            "asc" == q ? m.prepend(k).prepend(" ") : m.append(k).append(" ")
        }

        function n(l) {
            l = l.slice();
            for (var k = l.length, t = k; t--;) {
                var r = parseInt(Math.random() * k),
                    s = l[t];
                l[t] = l[r];
                l[r] = s
            }
            return l
        }
        j.find(d.targetSelector).wrapAll('<div class="mix_sorter"/>');
        var m = j.find(".mix_sorter");
        d.origSort.length || m.find(d.targetSelector + ":visible").each(function() {
            f(this).wrap("<s/>");
            d.origSort.push(f(this).parent().html().replace(/\s+/g, ""));
            f(this).unwrap()
        });
        m.empty();
        if ("reset" == p) {
            f.each(d.startOrder, function() {
                m.append(this).append(" ")
            })
        } else {
            if ("default" == p) {
                f.each(d.origOrder, function() {
                    o(this)
                })
            } else {
                if ("random" == p) {
                    d.newOrder.length || (d.newOrder = n(d.startOrder)), f.each(d.newOrder, function() {
                        m.append(this).append(" ")
                    })
                } else {
                    if ("custom" == p) {
                        f.each(q, function() {
                            o(this)
                        })
                    } else {
                        if ("undefined" === typeof d.origOrder[0].attr(p)) {
                            return console.log("No such attribute found. Terminating"), !1
                        }
                        d.newOrder.length || (f.each(d.origOrder, function() {
                            d.newOrder.push(f(this))
                        }), d.newOrder.sort(i));
                        f.each(d.newOrder, function() {
                            o(this)
                        })
                    }
                }
            }
        }
        d.checkSort = [];
        m.find(d.targetSelector + ":visible").each(function(k) {
            var l = f(this);
            0 == k && l.attr("data-checksum", "1");
            l.wrap("<s/>");
            d.checkSort.push(l.parent().html().replace(/\s+/g, ""));
            l.unwrap()
        });
        j.find(d.targetSelector).unwrap()
    }

    function h(i) {
        for (var k = ["Webkit", "Moz", "O", "ms"], j = 0; j < k.length; j++) {
            if (k[j] + "Transition" in i.style) {
                return k[j]
            }
        }
        return "transition" in i.style ? "" : !1
    }

    function a(i, k) {
        if (i.length != k.length) {
            return !1
        }
        for (var j = 0; j < k.length; j++) {
            if (i[j].compare && !i[j].compare(k[j]) || i[j] !== k[j]) {
                return !1
            }
        }
        return !0
    }

    function e(d) {
        d = d.replace(/\s{2,}/g, " ");
        var i = d.split(" ");
        f.each(i, function(j) {
            "all" == this && (i[j] = "mix_all")
        });
        "" == i[0] && i.shift();
        return i
    }
    var g = {
        init: function(d) {
            return this.each(function() {
                var o = window.navigator.appVersion.match(/Chrome\/(\d+)\./),
                    o = o ? parseInt(o[1], 10) : !1,
                    k = function(p) {
                        p = document.getElementById(p);
                        var l = p.parentElement,
                            r = document.createElement("div"),
                            q = document.createDocumentFragment();
                        l.insertBefore(r, p);
                        q.appendChild(p);
                        l.replaceChild(p, r)
                    };
                (o && 31 == o || 32 == o) && k(this.id);
                var i = {
                    targetSelector: ".mix",
                    filterSelector: ".filter",
                    sortSelector: ".sort",
                    buttonEvent: "click",
                    effects: ["fade", "scale"],
                    listEffects: null,
                    easing: "smooth",
                    layoutMode: "grid",
                    targetDisplayGrid: "inline-block",
                    targetDisplayList: "block",
                    listClass: "",
                    gridClass: "",
                    transitionSpeed: 600,
                    showOnLoad: "all",
                    sortOnLoad: !1,
                    multiFilter: !1,
                    filterLogic: "or",
                    resizeContainer: !0,
                    minHeight: 0,
                    failClass: "fail",
                    perspectiveDistance: "3000",
                    perspectiveOrigin: "50% 50%",
                    animateGridList: !0,
                    onMixLoad: null,
                    onMixStart: null,
                    onMixEnd: null,
                    container: null,
                    origOrder: [],
                    startOrder: [],
                    newOrder: [],
                    origSort: [],
                    checkSort: [],
                    filter: "",
                    mixing: !1,
                    origDisplay: "",
                    origLayout: "",
                    origHeight: 0,
                    newHeight: 0,
                    isTouch: !1,
                    resetDelay: 0,
                    failsafe: null,
                    prefix: "",
                    easingFallback: "ease-in-out",
                    transition: {},
                    perspective: {},
                    clean: {},
                    fade: "1",
                    scale: "",
                    rotateX: "",
                    rotateY: "",
                    rotateZ: "",
                    blur: "",
                    grayscale: ""
                };
                d && f.extend(i, d);
                this.config = i;
                f.support.touch = "ontouchend" in document;
                f.support.touch && (i.isTouch = !0, i.resetDelay = 350);
                i.container = f(this);
                var j = i.container;
                i.prefix = h(j[0]);
                i.prefix = i.prefix ? "-" + i.prefix.toLowerCase() + "-" : "";
                j.find(i.targetSelector).each(function() {
                    i.origOrder.push(f(this))
                });
                if (i.sortOnLoad) {
                    var n;
                    f.isArray(i.sortOnLoad) ? (o = i.sortOnLoad[0], n = i.sortOnLoad[1], f(i.sortSelector + "[data-sort=" + i.sortOnLoad[0] + "][data-order=" + i.sortOnLoad[1] + "]").addClass("active")) : (f(i.sortSelector + "[data-sort=" + i.sortOnLoad + "]").addClass("active"), o = i.sortOnLoad, i.sortOnLoad = "desc");
                    b(o, n, j, i)
                }
                for (n = 0; 2 > n; n++) {
                    o = 0 == n ? o = i.prefix : "", i.transition[o + "transition"] = "all " + i.transitionSpeed + "ms ease-in-out", i.perspective[o + "perspective"] = i.perspectiveDistance + "px", i.perspective[o + "perspective-origin"] = i.perspectiveOrigin
                }
                for (n = 0; 2 > n; n++) {
                    o = 0 == n ? o = i.prefix : "", i.clean[o + "transition"] = "none"
                }
                "list" == i.layoutMode ? (j.addClass(i.listClass), i.origDisplay = i.targetDisplayList) : (j.addClass(i.gridClass), i.origDisplay = i.targetDisplayGrid);
                i.origLayout = i.layoutMode;
                n = i.showOnLoad.split(" ");
                f.each(n, function() {
                    f(i.filterSelector + '[data-filter="' + this + '"]').addClass("active")
                });
                j.find(i.targetSelector).addClass("mix_all");
                "all" == n[0] && (n[0] = "mix_all", i.showOnLoad = "mix_all");
                var m = f();
                f.each(n, function() {
                    m = m.add(f("." + this))
                });
                m.each(function() {
                    var l = f(this);
                    "list" == i.layoutMode ? l.css("display", i.targetDisplayList) : l.css("display", i.targetDisplayGrid);
                    l.css(i.transition)
                });
                setTimeout(function() {
                    i.mixing = !0;
                    m.css("opacity", "1");
                    setTimeout(function() {
                        "list" == i.layoutMode ? m.removeStyle(i.prefix + "transition, transition").css({
                            display: i.targetDisplayList,
                            opacity: 1
                        }) : m.removeStyle(i.prefix + "transition, transition").css({
                            display: i.targetDisplayGrid,
                            opacity: 1
                        });
                        i.mixing = !1;
                        if ("function" == typeof i.onMixLoad) {
                            var l = i.onMixLoad.call(this, i);
                            i = l ? l : i
                        }
                    }, i.transitionSpeed)
                }, 10);
                i.filter = i.showOnLoad;
                f(i.sortSelector).bind(i.buttonEvent, function() {
                    if (!i.mixing) {
                        var q = f(this),
                            p = q.attr("data-sort"),
                            l = q.attr("data-order");
                        if (!q.hasClass("active")) {
                            f(i.sortSelector).removeClass("active"), q.addClass("active")
                        } else {
                            if ("random" != p) {
                                return !1
                            }
                        }
                        j.find(i.targetSelector).each(function() {
                            i.startOrder.push(f(this))
                        });
                        c(i.filter, p, l, j, i)
                    }
                });
                f(i.filterSelector).bind(i.buttonEvent, function() {
                    if (!i.mixing) {
                        var p = f(this);
                        if (!1 == i.multiFilter) {
                            f(i.filterSelector).removeClass("active"), p.addClass("active"), i.filter = p.attr("data-filter"), f(i.filterSelector + '[data-filter="' + i.filter + '"]').addClass("active")
                        } else {
                            var l = p.attr("data-filter");
                            p.hasClass("active") ? (p.removeClass("active"), i.filter = i.filter.replace(RegExp("(\\s|^)" + l), "")) : (p.addClass("active"), i.filter = i.filter + " " + l)
                        }
                        c(i.filter, null, null, j, i)
                    }
                })
            })
        },
        toGrid: function() {
            return this.each(function() {
                var d = this.config;
                "grid" != d.layoutMode && (d.layoutMode = "grid", c(d.filter, null, null, f(this), d))
            })
        },
        toList: function() {
            return this.each(function() {
                var d = this.config;
                "list" != d.layoutMode && (d.layoutMode = "list", c(d.filter, null, null, f(this), d))
            })
        },
        filter: function(d) {
            return this.each(function() {
                var i = this.config;
                i.mixing || (f(i.filterSelector).removeClass("active"), f(i.filterSelector + '[data-filter="' + d + '"]').addClass("active"), c(d, null, null, f(this), i))
            })
        },
        sort: function(d) {
            return this.each(function() {
                var m = this.config,
                    k = f(this);
                if (!m.mixing) {
                    f(m.sortSelector).removeClass("active");
                    if (f.isArray(d)) {
                        var i = d[0],
                            j = d[1];
                        f(m.sortSelector + '[data-sort="' + d[0] + '"][data-order="' + d[1] + '"]').addClass("active")
                    } else {
                        f(m.sortSelector + '[data-sort="' + d + '"]').addClass("active"), i = d, j = "desc"
                    }
                    k.find(m.targetSelector).each(function() {
                        m.startOrder.push(f(this))
                    });
                    c(m.filter, i, j, k, m)
                }
            })
        },
        multimix: function(d) {
            return this.each(function() {
                var j = this.config,
                    i = f(this);
                multiOut = {
                    filter: j.filter,
                    sort: null,
                    order: "desc",
                    layoutMode: j.layoutMode
                };
                f.extend(multiOut, d);
                j.mixing || (f(j.filterSelector).add(j.sortSelector).removeClass("active"), f(j.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"), "undefined" !== typeof multiOut.sort && (f(j.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"), i.find(j.targetSelector).each(function() {
                    j.startOrder.push(f(this))
                })), j.layoutMode = multiOut.layoutMode, c(multiOut.filter, multiOut.sort, multiOut.order, i, j))
            })
        },
        remix: function(d) {
            return this.each(function() {
                var j = this.config,
                    i = f(this);
                j.origOrder = [];
                i.find(j.targetSelector).each(function() {
                    var k = f(this);
                    k.addClass("mix_all");
                    j.origOrder.push(k)
                });
                j.mixing || "undefined" === typeof d || (f(j.filterSelector).removeClass("active"), f(j.filterSelector + '[data-filter="' + d + '"]').addClass("active"), c(d, null, null, i, j))
            })
        }
    };
    f.fn.mixitup = function(i, j) {
        if (g[i]) {
            return g[i].apply(this, Array.prototype.slice.call(arguments, 1))
        }
        if ("object" === typeof i || !i) {
            return g.init.apply(this, arguments)
        }
    };
    f.fn.removeStyle = function(d) {
        return this.each(function() {
            var j = f(this);
            d = d.replace(/\s+/g, "");
            var i = d.split(",");
            f.each(i, function() {
                var k = RegExp(this.toString() + "[^;]+;?", "g");
                j.attr("style", function(l, m) {
                    if (m) {
                        return m.replace(k, "")
                    }
                })
            })
        })
    }
})(jQuery);
