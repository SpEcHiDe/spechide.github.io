(function(b) {
    function a() {
        b("body").find("i.al-sc-fa").each(function() {
            var h = b(this);
            var k = h.parent(".al-fa-circle");
            if (k.length > 0) {
                var g = h.height();
                var e = h.width();
                var d = Math.round((g - e) / 2);
                var f = h.data("size");
                if (g < 40) {
                    g = 40
                }
                var j = g * 0.5 + "px " + (g * 0.5 + d) + "px";
                k.css("padding", j);
                k.css("-webkit-border-radius", g * 2 + "px");
                k.css("-moz-border-radius", g * 2 + "px");
                k.css("border-radius", g * 2 + "px");
                var c = 0.1;
                if (f && f != "") {
                    c = f * 0.1
                }
                if (c <= 0.1) {
                    c = 2 + "px"
                } else {
                    c += "em"
                }
                k.css("border-width", c);
                var i = h.data("color");
                if (i) {
                    k.css("border-color", i)
                }
            }
        })
    }
    b(window).load(function() {
        a()
    });
    b("#contact-form").submit(function(d) {
        d.preventDefault();
        b("#contact-success").fadeOut();
        b("#contact-error").fadeOut();
        var c = b(this).serialize();
        b.ajax({
            type: "POST",
            url: "http://spechide.netne.net/send-mail.php",
            data: c,
            dataType: "json",
            success: function(e) {
                if (e.successMsg) {
                    b("#contact-success > span").html(e.successMsg);
                    b("#contact-success").fadeIn();
                    b("#contact-form").find("input[type=text], textarea").val("");
                    var f = b(".al-contact-form-hide");
                    if (f.length > 0) {
                        f.fadeOut()
                    }
                } else {
                    if (e.errorMsg) {
                        b("#contact-error > span").html(e.errorMsg);
                        b("#contact-error").fadeIn()
                    }
                }
            },
            error: function(e, g, f) {}
        })
    });
    b("[data-sc-after-preload-src]").each(function() {
        var c = b(this).data("sc-after-preload-src");
        b(this).attr("src", c).removeAttr("data-sc-after-preload-src")
    })
})(jQuery);
