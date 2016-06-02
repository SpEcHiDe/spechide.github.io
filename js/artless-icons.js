(function(a) {
    function b() {
        a("body").find("i.al-icon-fa").each(function() {
            var h = a(this);
            var k = h.parent(".al-icon-circle");
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
    a(window).load(function() {
        b()
    })
})(jQuery);
