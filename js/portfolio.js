(function(j) {
    var d = j("#al-pf-wrapper");
    if (d.length == 0) {
        return
    }
    var m = j("#al-pf-preview");
    var t = j("#al-pf-preview-loader");
    var h = j("#al-pf-loader");
    var o = j("#al-pf-load-content");
    j("#al-pf-wrapper-close").click(function(y) {
        y.preventDefault();
        j("a.al-pf-item-active").removeClass("al-pf-item-active");
        //d.css("height", d.height() + "px");
        d.css("min-height", 0);
        d.slideUp(1000);
        j(".al-pf-article").fadeOut(800, function() {
            j(this).remove()
        })
    });

    function i() {
        h.css("display", "none");
        d.find("div.close").fadeIn(800);
        j(".al-pf-article").fadeIn(1000);
        d.css("height", "auto");
        var z = j(".al-pf-slider");
        if (z.length > 0) {
            var y = {};
            if (typeof alSliderSettingsDefault !== "undefined" && typeof alSliderSettingsUser !== "undefined") {
                y = j.extend({}, alSliderSettingsDefault, alSliderSettingsUser)
            }
            z.owlCarousel(y)
        }
    }

    function k() {
        j("[data-after-preload-src]").delay(500).each(function() {
            var y = j(this).data("after-preload-src");
            j(this).attr("src", y).removeAttr("data-after-preload-src")
        })
    }
    m.on("click", "a", function(B) {
        var z = j("a.al-pf-item-active");
        if (z.length > 0) {
            z.removeClass("al-pf-item-active")
        }
        j(this).addClass("al-pf-item-active");
        B.preventDefault();
        var A = j(this).data("load");
        var y = j(window).height();
        if (d.is(":hidden")) {
            d.css("min-height", 0);
            d.find(".close").hide();
            h.css("display", "block");
            o.html("");
            //d.css("height", y + "px");
            d.slideDown(1000, function() {
                d.css("min-height", y + "px")
            });
            j("html,body").clearQueue().animate({
                scrollTop: d.offset().top
            }, 1400);
            setTimeout(function() {
                o.load(A, {
                    ajax: true
                }, function() {
                    j("div.device-slider:not(.al-done)").alDeviceSlider();
                    j("div.quote-slider:not(.al-done)").alQuoteSlider();
                    j("div.al-client-carousel:not(.al-done)").alClientSlider();
                    i()
                })
            }, 1600)
        } else {
            d.find(".close").fadeOut(800);
            h.delay(850).fadeIn();
            //d.css("height", d.height() + "px");
            j(".al-pf-article").fadeOut(800);
            j("html,body").clearQueue().animate({
                scrollTop: d.offset().top
            }, 1400);
            setTimeout(function() {
                o.load(A, {
                    ajax: true
                }, function() {
                    j("div.device-slider:not(.al-done)").alDeviceSlider();
                    j("div.quote-slider:not(.al-done)").alQuoteSlider();
                    j("div.al-client-carousel:not(.al-done)").alClientSlider();
                    i()
                })
            }, 1600)
        }
    });
    i();
    var p = 1000;

    function v() {
        var z = m.find("li");
        var y = m.find("li:not(:has(iframe))");
        y.each(function() {
            j(this).css("height", "auto");
            if (j(this).height() < p && j(this).height() > 50) {
                p = j(this).height()
            }
        });
        z.each(function() {
            var A = j(this).find("iframe");
            if (A.length > 0) {
                A.height(p);
                j(this).height(p);
                j(this).find("a:first").height(p)
            } else {
                j(this).height(p)
            }
            j(this).hoverdir()
        })
    }

    function u() {
        p = 1000;
        if (m.css("opacity") == 1) {
            //t.css("min-height", m.height() + "px");
            m.css("opacity", 0);
            t.css("background-size", "auto");
            m.find("li").each(function() {
                j(this).height("auto")
            })
        }
        if (n) {
            clearTimeout(n)
        }
        n = setTimeout(x, 500)
    }

    function x() {
        t.css("background-size", "0");
        v();
        t.css("min-height", "0");
        m.fadeTo(500, 1)
    }
    if (m.length > 0) {
        j(window).resize(function() {
            u()
        });
        var n = 0
    }
    var q = j("#al-pf-tabs");
    var l = j("#al-pf-button-load-more");
    var r = j("#al-pf-load-more-loader");
    var g = l.data("post-paged");
    var w = "";
    var c = s();
    var f = 0;
    var b = 0;

    function a() {
        if (q.length > 0) {
            var y = q.find("li.active").data("filter");
            if (m.length > 0) {
                if (b == 0) {
                    b = 1;
                    m.mixitup({
                        targetSelector: ".al-pf-mix",
                        filterSelector: ".al-pf-filter",
                        showOnLoad: y,
                        onMixLoad: function() {
                            v()
                        }
                    })
                } else {
                    m.mixitup("remix", y);
                    v()
                }
            }
        } else {
            m.find("li").each(function() {
                j(this).show();
                v();
                j(this).css("opacity", 1)
            })
        }
    }
    j(window).load(function() {
        a()
    });

    function s() {
        var y = q.find("li.active").data("filter");
        if (y == "all") {
            y = "al-pf-mix"
        }
        return m.find("li." + y).length
    }

    function e() {
        j.ajax({
            type: "POST",
            url: alAdmin.ajaxurl,
            data: {
                action: "al_portfolio_load_more_posts",
                "post-paged": w
            },
            success: function(y) {
                w = g.shift();
                if (w) {
                    if (f == 0) {
                        f = s()
                    }
                    m.append(y);
                    if (s() < (f + c)) {
                        e()
                    } else {
                        f = 0;
                        g.push(w);
                        r.fadeOut(800, function() {
                            l.show()
                        });
                        k();
                        a()
                    }
                } else {
                    r.hide();
                    r.parent().slideUp(1200, function() {});
                    m.append(y);
                    k();
                    a()
                }
            },
            error: function(y, A, z) {}
        })
    }
    l.on("click", function(y) {
        y.preventDefault();
        j(this).hide();
        r.fadeIn(800, function() {
            w = g.shift();
            e()
        })
    });
    if (q.length > 0) {
        q.on("click", "li.al-pf-filter > a", function() {
            if (s() == 0) {
                l.hide();
                r.fadeIn(800, function() {
                    w = g.shift();
                    e()
                })
            }
        })
    }
})(jQuery);
