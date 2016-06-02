(function(a) {
    a.fn.parallax = function(c) {
        var b = 1050;
        var d = a(window).width();
        var f = a(window).height();
        a(window).resize(function() {
            d = a(window).width()
        });
        var e = a.extend({
            speed: 0.15
        }, c);
        return this.each(function() {
            var g = a(this);
            a(document).scroll(function() {
                if (d > b) {
                    var j = a(window).scrollTop();
                    var k = g.offset().top;
                    var h = g.outerHeight();
                    if (k + h <= j || k >= j + f) {
                        return
                    }
                    var i = Math.round((k - j) * e.speed);
                    g.css("background-position", "center " + i + "px")
                }
            })
        })
    }
}(jQuery));
