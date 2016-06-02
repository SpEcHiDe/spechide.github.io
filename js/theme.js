;
var alSliderSettingsDefault = {
    singleItem: true,
    navigation: true,
    navigationText: ['<a class="bx-prev al-slider-prev" href="javascript:void(0);"></a>', '<a class="bx-next al-slider-next" href="javascript:void(0);"></a>'],
    baseClass: "bx-wrapper owl-carousel",
    beforeUpdate: function(a) {
        a.find("div.owl-wrapper-outer").css("max-height", jQuery(window).height() + "px")
    },
    afterInit: function(a) {
        a.find("div.owl-wrapper-outer").css("max-height", jQuery(window).height() + "px")
    }
};
if (typeof alSliderSettingsUser === "undefined") {
    var alSliderSettingsUser = {}
}(function(x) {
    x.fn.alDeviceSlider = function() {
        if (this.length > 0) {
            this.owlCarousel({
                singleItem: true,
                navigation: false,
                baseClass: "bx-wrapper owl-carousel"
            });
            this.addClass("al-done")
        }
    };
    x.fn.alQuoteSlider = function() {
        if (this.length > 0) {
            this.owlCarousel({
                singleItem: true,
                navigation: false
            });
            this.addClass("al-done")
        }
    };
    x.fn.alClientSlider = function() {
        if (this.length > 0) {
            this.owlCarousel({
                items: 4,
                autoPlay: 3000,
                stopOnHover: true,
                pagination: false,
                navigation: false
            });
            this.addClass("al-done")
        }
    };
    x.fn.bxSlider = function(M) {
        this.owlCarousel({
            singleItem: true,
            navigation: true,
            navigationText: ['<a class="bx-prev al-slider-prev" href="javascript:void(0);"></a>', '<a class="bx-next al-slider-next" href="javascript:void(0);"></a>'],
            baseClass: "bx-wrapper owl-carousel",
            beforeUpdate: function(N) {
                N.find("div.owl-wrapper-outer").css("max-height", x(window).height() + "px")
            },
            beforeInit: function(N) {},
            afterInit: function(N) {
                N.find("div.owl-wrapper-outer").css("max-height", x(window).height() + "px")
            }
        })
    };
    var B = x("#al-page-preloader");
    if (B.length) {
        x(window).load(function() {
            s();
            B.delay(2000).show(function() {
                if (x("#page-wrapper").height() == x(window).height()) {
                    x(".bottom-box").css("position", "absolute")
                }
                B.fadeOut(300, function() {
                    x(".al-video-fullscreen").find("video").css("display", "block")
                })
            })
        })
    }

    function E() {
        var M = x("#home-parallax");
        if (M.length > 0) {
            M.css("min-height", x(window).height() + "px");
            x("section.al-home-banner").css("min-height", x(window).height() + "px")
        }
    }
    E();

    function s() {
        x("[data-after-preload-src]").delay(500).each(function() {
            var M = x(this).data("after-preload-src");
            x(this).attr("src", M).removeAttr("data-after-preload-src")
        })
    }
    var l = 0;
    var y = x("#open-nav");
    y.click(function(M) {
        M.preventDefault();
        if (l == 0) {
            x("#header").clearQueue().animate({
                left: "0"
            }, 500, "swing");
            x("#page-wrapper").clearQueue().animate({
                left: "260px"
            }, 500, "swing");
            l = 1
        } else {
            x("#page-wrapper").clearQueue().animate({
                left: "0"
            }, 600, "easeOutBounce");
            x("#header").clearQueue().animate({
                left: "-260px"
            }, 600, "easeOutBounce");
            l = 0
        }
    });
    x(".scrollto").click(function(P) {
        P.preventDefault();
        var N = 0;
        var M = x(this).attr("href");
        var O;
        if (M) {
            O = x(M)
        } else {
            O = x(this).closest("section").parent().next("section")
        }
        if (O.offset()) {
            x("html,body").clearQueue().animate({
                scrollTop: O.offset().top - N
            }, 1800, "swing")
        }
        return false
    });
    var C = x("#main-navigation"),
        i = C.find("a.al-scrollto-anchor");

    function a() {
        var N = (x("#header").height() - C.height());
        var M = 10;
        if (N > 0) {
            M = N / 2 - 10;
            if (M < 10) {
                M = 10
            }
        }
        C.css("top", M + "px")
    }
    x(window).load(function() {
        a();
        y.css("right", "-" + y.outerWidth() + "px")
    });
    i.click(function(O) {
        O.preventDefault();
        var N = 0;
        var M = x(x.attr(this, "href"));
        if (M.length) {
            x("html,body").clearQueue().animate({
                scrollTop: M.offset().top - N
            }, 1800, "swing")
        }
        return false
    });
    var J = i.map(function() {
        return x(x(this).attr("href"))
    });

    function f() {
        var N = C.height();
        var M = x(window).scrollTop() + N + 50;
        var O = J.map(function() {
            if (x(this).length) {
                var Q = x(this).offset().top;
                var R = x(this).position().top + x(this).outerHeight(true);
                if (Q < M && R > M) {
                    return this
                }
            }
        });
        if (O.length) {
            O = O[O.length - 1];
            var P = O.attr("id")
        } else {
            var P = ""
        }
        i.removeClass("active").filter("[href=#" + P + "]").addClass("active")
    }
    x(window).scroll(function() {
        f()
    });
    var p = 965;
    var G = x(window).width();
    var H = x("#al-blog-wrapper");
    var b = x("#al-blog-preview");
    var j = b.find("div.layer");
    var z = x("#al-blog-load-content");
    var g = x("#al-blog-loader");

    function n() {
        j = b.find("div.layer");
        G = x(window).width();
        if (G < p) {
            j.css({
                top: "25%",
                left: "0",
                width: "100%",
                opacity: "1"
            })
        } else {
            j.css({
                top: "40%",
                left: "-50%",
                width: "50%",
                opacity: "0"
            })
        }
        x(".al-blog-empty-preview").each(function() {
            if (x(this).parent().width() > 700) {
                x(this).css("min-height", x(this).parent().height() + 10 + "px")
            } else {
                x(this).css("min-height", 0)
            }
        })
    }
    b.on("mouseenter", "li", function() {
        if (G > p) {
            x(this).children(".layer").clearQueue().animate({
                left: "0",
                opacity: "1"
            }, 400)
        }
    });
    b.on("mouseleave", "li", function() {
        if (G > p) {
            x(this).children(".layer").clearQueue().animate({
                left: "-50%",
                opacity: "0"
            }, 400)
        }
    });
    x("#close-blog-wrapper").click(function(M) {
        M.preventDefault();
        H.css("height", H.height() + "px");
        H.css("min-height", 0);
        H.slideUp(1000);
        x(".al-blog-article").fadeOut(800, function() {
            x(this).remove()
        })
    });

    function r() {
        g.css("display", "none");
        H.find("div.close").fadeIn(800);
        x(".al-blog-article").fadeIn(1000);
        H.css("height", "auto");
        var N = x(".blog-slider");
        if (N.length > 0) {
            var M = x.extend({}, alSliderSettingsDefault, alSliderSettingsUser);
            N.owlCarousel(M)
        }
    }
    r();
    b.on("click", "a.button", function(O) {
        O.preventDefault();
        var N = x(this).data("load");
        var M = x(window).height();
        if (H.is(":hidden")) {
            H.css("min-height", 0);
            H.find(".close").hide();
            g.css("display", "block");
            z.html("");
            H.css("height", M + "px");
            H.slideDown(1000, function() {
                H.css("min-height", M + "px")
            });
            x("html, body").clearQueue().animate({
                scrollTop: H.offset().top
            }, 1400);
            setTimeout(function() {
                z.load(N, {
                    ajax: true
                }, function() {
                    x("div.device-slider:not(.al-done)").alDeviceSlider();
                    x("div.quote-slider:not(.al-done)").alQuoteSlider();
                    x("div.al-client-carousel:not(.al-done)").alClientSlider();
                    r()
                })
            }, 1600)
        } else {
            H.find(".close").fadeOut(800);
            g.delay(850).fadeIn();
            H.css("height", H.height() + "px");
            x(".al-blog-article").fadeOut(800);
            x("html, body").clearQueue().animate({
                scrollTop: H.offset().top
            }, 1400);
            setTimeout(function() {
                console.log("works");
                z.load(N, {
                    ajax: true
                }, function() {
                    x("div.device-slider:not(.al-done)").alDeviceSlider();
                    x("div.quote-slider:not(.al-done)").alQuoteSlider();
                    x("div.al-client-carousel:not(.al-done)").alClientSlider();
                    r()
                })
            }, 1600)
        }
    });
    var e = x("#al-blog-tabs");
    var w = x("#al-blog-load-more-links");
    var q = x("#al-blog-button-load-more");
    var k = x("#al-blog-load-more-loader");
    var m = q.data("post-paged");
    var K = "";
    var u = F();
    var L = 0;
    var A = 0;

    function I() {
        if (e.length > 0) {
            var M = e.find("li.active").data("filter");
            if (A == 0) {
                A = 1;
                b.mixitup({
                    targetSelector: ".al-blog-mix",
                    filterSelector: ".al-blog-filter",
                    showOnLoad: M
                })
            } else {
                b.mixitup("remix", M)
            }
        } else {
            b.find("li").css("display", "block")
        }
        n()
    }
    x(window).load(function() {
        I()
    });

    function F() {
        var M = e.find("li.active").data("filter");
        if (M == "all") {
            M = "al-blog-mix"
        }
        return b.find("li." + M).length
    }

    function h() {
        x.ajax({
            type: "POST",
            url: alAdmin.ajaxurl,
            data: {
                action: "al_blog_load_more_posts",
                "post-paged": K
            },
            success: function(M) {
                K = m.shift();
                if (K) {
                    if (L == 0) {
                        L = F()
                    }
                    b.append(M);
                    if (F() < (L + u)) {
                        h(K)
                    } else {
                        L = 0;
                        m.push(K);
                        I();
                        k.fadeOut(800, function() {
                            q.show()
                        })
                    }
                } else {
                    k.hide();
                    k.closest("section").addClass("margin-bottom");
                    k.parent().slideUp(1200);
                    b.append(M);
                    I()
                }
                D();
                s()
            },
            error: function(M, O, N) {}
        })
    }
    q.on("click", function(M) {
        M.preventDefault();
        x(this).hide();
        k.fadeIn(800, function() {
            K = m.shift();
            h()
        })
    });
    if (e.length > 0) {
        e.on("click", "li.al-blog-filter > a", function() {
            if (F() == 0) {
                q.hide();
                k.fadeIn(800, function() {
                    K = m.shift();
                    h(K)
                })
            }
        })
    }
    x(".toggle .header").click(function() {
        if (x(this).parent(".toggle").children(".content").is(":hidden")) {
            x(this).addClass("active");
            x(this).parent(".toggle").children(".content").slideDown();
            x(this).parent(".toggle").children(".header").children(".plus").css({
                display: "none"
            });
            x(this).parent(".toggle").children(".header").children(".minus").css({
                display: "inline-block"
            })
        } else {
            x(this).removeClass("active");
            x(this).parent(".toggle").children(".content").slideUp();
            x(this).parent(".toggle").children(".header").children(".plus").css({
                display: "inline-block"
            });
            x(this).parent(".toggle").children(".header").children(".minus").css({
                display: "none"
            })
        }
    });
    x(".percent-bar").each(function() {
        var M = x(this).attr("data-percent");
        x(this).children(".percent-bg").css("width", M + "%")
    });
    x(".tab-content-navi").each(function() {
        var M = x(this).children("li:first-child").children("a");
        var N = M.attr("open-content");
        x("#" + N).css("display", "block");
        M.addClass("active")
    });
    x(".tab-content-navi li a").click(function(N) {
        N.preventDefault();
        var O = x(this).attr("open-content");
        if (x("#" + O).is(":hidden")) {
            var M = x(this).parent("li").parent("ul");
            M.children("li").each(function() {
                x(this).children("a").removeClass("active");
                var P = x(this).children("a").attr("open-content");
                x("#" + P).css("display", "none")
            });
            x("#" + O).fadeIn(400);
            x(this).addClass("active")
        }
    });
    x(".alert-box .close").click(function(M) {
        M.preventDefault();
        x(this).parent(".alert-box ").fadeOut(350)
    });
    var v;
    x(".cleartext").focusin(function() {
        v = this.defaultValue;
        if (this.value == this.defaultValue) {
            this.value = ""
        }
    }).focusout(function() {
        if (x(this).val() == "") {
            this.value = v
        }
    });
    var c = 0;
    x(window).resize(function() {
        if (c) {
            clearTimeout(c)
        }
        c = setTimeout(o, 500)
    });

    function o() {
        E();
        n();
        a();
        D();
        t()
    }

    function D() {
        if (x(window).width() > 979) {
            var M = x(".al-vertical-mid-to-parent");
            M.each(function() {
                var O = x(this);
                var P = O.parent();
                var N = P.find("img");
                if (N.length > 0) {
                    Q(O);
                    N.load(function() {
                        Q(O)
                    })
                } else {
                    Q(O)
                }

                function Q(S) {
                    var T = S.parent().height() - S.height();
                    var R = 10;
                    if (T > 0) {
                        R = T / 2 - 10;
                        if (R < 10) {
                            R = 10
                        }
                    }
                    S.css("padding-top", Math.round(R) + "px")
                }
            })
        }
    }
    x("section.al-home-banner").parallax({
        speed: 0.25
    });
    x(".parallax-content").parallax({
        speed: 0.25
    });
    x(window).load(function() {
        D();
        t();
        x("div.device-slider").alDeviceSlider();
        x("div.quote-slider").alQuoteSlider();
        x("div.al-client-carousel").alClientSlider()
    });
    var d = x(".al-video-fullscreen");

    function t() {
        if (d.length > 0) {
            d.css("min-height", x(window).height() + "px")
        }
    }
})(jQuery);
