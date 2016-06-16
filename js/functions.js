
var Generate_MD5 = function(s) {
    function L(k, d) {
        return (k << d) | (k >>> (32 - d))
    }

    function K(G, k) {
        var I, d, F, H, x;
        F = (G & 2147483648);
        H = (k & 2147483648);
        I = (G & 1073741824);
        d = (k & 1073741824);
        x = (G & 1073741823) + (k & 1073741823);
        if (I & d) {
            return (x ^ 2147483648 ^ F ^ H)
        }
        if (I | d) {
            if (x & 1073741824) {
                return (x ^ 3221225472 ^ F ^ H)
            } else {
                return (x ^ 1073741824 ^ F ^ H)
            }
        } else {
            return (x ^ F ^ H)
        }
    }

    function r(d, F, k) {
        return (d & F) | ((~d) & k)
    }

    function q(d, F, k) {
        return (d & k) | (F & (~k))
    }

    function p(d, F, k) {
        return (d ^ F ^ k)
    }

    function n(d, F, k) {
        return (F ^ (d | (~k)))
    }

    function u(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(r(F, aa, Z), k), I));
        return K(L(G, H), F)
    }

    function f(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(q(F, aa, Z), k), I));
        return K(L(G, H), F)
    }

    function D(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(p(F, aa, Z), k), I));
        return K(L(G, H), F)
    }

    function t(G, F, aa, Z, k, H, I) {
        G = K(G, K(K(n(F, aa, Z), k), I));
        return K(L(G, H), F)
    }

    function e(G) {
        var Z;
        var F = G.length;
        var x = F + 8;
        var k = (x - (x % 64)) / 64;
        var I = (k + 1) * 16;
        var aa = Array(I - 1);
        var d = 0;
        var H = 0;
        while (H < F) {
            Z = (H - (H % 4)) / 4;
            d = (H % 4) * 8;
            aa[Z] = (aa[Z] | (G.charCodeAt(H) << d));
            H++
        }
        Z = (H - (H % 4)) / 4;
        d = (H % 4) * 8;
        aa[Z] = aa[Z] | (128 << d);
        aa[I - 2] = F << 3;
        aa[I - 1] = F >>> 29;
        return aa
    }

    function B(x) {
        var k = "",
            F = "",
            G, d;
        for (d = 0; d <= 3; d++) {
            G = (x >>> (d * 8)) & 255;
            F = "0" + G.toString(16);
            k = k + F.substr(F.length - 2, 2)
        }
        return k
    }

    function J(k) {
        k = k.replace(/rn/g, "n");
        var d = "";
        for (var F = 0; F < k.length; F++) {
            var x = k.charCodeAt(F);
            if (x < 128) {
                d += String.fromCharCode(x)
            } else {
                if ((x > 127) && (x < 2048)) {
                    d += String.fromCharCode((x >> 6) | 192);
                    d += String.fromCharCode((x & 63) | 128)
                } else {
                    d += String.fromCharCode((x >> 12) | 224);
                    d += String.fromCharCode(((x >> 6) & 63) | 128);
                    d += String.fromCharCode((x & 63) | 128)
                }
            }
        }
        return d
    }
    var C = Array();
    var P, h, E, v, g, Y, X, W, V;
    var S = 7,
        Q = 12,
        N = 17,
        M = 22;
    var A = 5,
        z = 9,
        y = 14,
        w = 20;
    var o = 4,
        m = 11,
        l = 16,
        j = 23;
    var U = 6,
        T = 10,
        R = 15,
        O = 21;
    s = J(s);
    C = e(s);
    Y = 1732584193;
    X = 4023233417;
    W = 2562383102;
    V = 271733878;
    for (P = 0; P < C.length; P += 16) {
        h = Y;
        E = X;
        v = W;
        g = V;
        Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
        V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
        W = u(W, V, Y, X, C[P + 2], N, 606105819);
        X = u(X, W, V, Y, C[P + 3], M, 3250441966);
        Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
        V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
        W = u(W, V, Y, X, C[P + 6], N, 2821735955);
        X = u(X, W, V, Y, C[P + 7], M, 4249261313);
        Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
        V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
        W = u(W, V, Y, X, C[P + 10], N, 4294925233);
        X = u(X, W, V, Y, C[P + 11], M, 2304563134);
        Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
        V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
        W = u(W, V, Y, X, C[P + 14], N, 2792965006);
        X = u(X, W, V, Y, C[P + 15], M, 1236535329);
        Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
        V = f(V, Y, X, W, C[P + 6], z, 3225465664);
        W = f(W, V, Y, X, C[P + 11], y, 643717713);
        X = f(X, W, V, Y, C[P + 0], w, 3921069994);
        Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
        V = f(V, Y, X, W, C[P + 10], z, 38016083);
        W = f(W, V, Y, X, C[P + 15], y, 3634488961);
        X = f(X, W, V, Y, C[P + 4], w, 3889429448);
        Y = f(Y, X, W, V, C[P + 9], A, 568446438);
        V = f(V, Y, X, W, C[P + 14], z, 3275163606);
        W = f(W, V, Y, X, C[P + 3], y, 4107603335);
        X = f(X, W, V, Y, C[P + 8], w, 1163531501);
        Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
        V = f(V, Y, X, W, C[P + 2], z, 4243563512);
        W = f(W, V, Y, X, C[P + 7], y, 1735328473);
        X = f(X, W, V, Y, C[P + 12], w, 2368359562);
        Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
        V = D(V, Y, X, W, C[P + 8], m, 2272392833);
        W = D(W, V, Y, X, C[P + 11], l, 1839030562);
        X = D(X, W, V, Y, C[P + 14], j, 4259657740);
        Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
        V = D(V, Y, X, W, C[P + 4], m, 1272893353);
        W = D(W, V, Y, X, C[P + 7], l, 4139469664);
        X = D(X, W, V, Y, C[P + 10], j, 3200236656);
        Y = D(Y, X, W, V, C[P + 13], o, 681279174);
        V = D(V, Y, X, W, C[P + 0], m, 3936430074);
        W = D(W, V, Y, X, C[P + 3], l, 3572445317);
        X = D(X, W, V, Y, C[P + 6], j, 76029189);
        Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
        V = D(V, Y, X, W, C[P + 12], m, 3873151461);
        W = D(W, V, Y, X, C[P + 15], l, 530742520);
        X = D(X, W, V, Y, C[P + 2], j, 3299628645);
        Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
        V = t(V, Y, X, W, C[P + 7], T, 1126891415);
        W = t(W, V, Y, X, C[P + 14], R, 2878612391);
        X = t(X, W, V, Y, C[P + 5], O, 4237533241);
        Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
        V = t(V, Y, X, W, C[P + 3], T, 2399980690);
        W = t(W, V, Y, X, C[P + 10], R, 4293915773);
        X = t(X, W, V, Y, C[P + 1], O, 2240044497);
        Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
        V = t(V, Y, X, W, C[P + 15], T, 4264355552);
        W = t(W, V, Y, X, C[P + 6], R, 2734768916);
        X = t(X, W, V, Y, C[P + 13], O, 1309151649);
        Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
        V = t(V, Y, X, W, C[P + 11], T, 3174756917);
        W = t(W, V, Y, X, C[P + 2], R, 718787259);
        X = t(X, W, V, Y, C[P + 9], O, 3951481745);
        Y = K(Y, h);
        X = K(X, E);
        W = K(W, v);
        V = K(V, g)
    }
    var i = B(Y) + B(X) + B(W) + B(V);
    return i.toLowerCase()
};

var sendData = function(type, URL, formData, callBack){
  var xhr = new XMLHttpRequest();
  xhr.open(type, URL, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=ISO-8859-1')
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = xhr.responseText;
      callBack(response);
    }
  };
  if(type == "GET"){
    xhr.send();
  }
  if(type == "POST"){
    xhr.send(formData);
  }
};

function scrollNav(){
  $('.nav a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

$('.carousel').carousel({
  interval: 10000
});

var dispProjSFn = function(name, desc, url, sd, ed, img){
  document.getElementById('dispProjSModal_H4').innerHTML = name;
  document.getElementById('dispProjSModal_DESC').innerHTML = desc;
  document.getElementById('dispProjSModal_SD').innerHTML = sd;
  document.getElementById('dispProjSModal_ED').innerHTML = ed;
  document.getElementById('dispProjSModal_URL').innerHTML = "<a href='" + url + "'>" + url + "</a>";
  document.getElementById('dispProjSModal_IMG').src = img;
  $("#dispProjSModal").modal();
};

var afterFetch = function(response){
  var jsonobj = JSON.parse(response);
  var rsp = "<table class='table table-hover'><thead><tr><th>IMAGE</th><th onclick=\"searchProjectsByType(\'NAME\')\">PROJECT NAME</th><th onclick=\"searchProjectsByType(\'CATEGORY\')\">PROJECT CATEGORY</th><th onclick=\"searchProjectsByType(\'URL\')\">PROJECT URL</th></tr></thead><tbody>";
  for(var i = 0; i < jsonobj.length; i++){
    rsp += "<tr onclick=\"dispProjSFn(\'" + jsonobj[i].NAME + "\', \'" + jsonobj[i].DESCRIPTION + "\', \'" + jsonobj[i].URL + "\', \'" + jsonobj[i].STARTDATE + "\', \'" + jsonobj[i].ENDDATE + "\', \'" + jsonobj[i].IMG + "\')\">";
    rsp += "<td><img width='5em' height='2.5em' src='" + jsonobj[i].IMG + "' /></td>";
    rsp += "<td>" + jsonobj[i].NAME + "</td>";
    rsp += "<td>" + jsonobj[i].CATEGORY + "</td>";
    rsp += "<td><a href=" + jsonobj[i].URL + ">" + jsonobj[i].URL + "</a></td>";
    rsp += "</tr>";
  }
  rsp += "</tbody></table>";
  document.getElementById('outputProjects').innerHTML = rsp;
};

var searchProjects = function(){
  var querystring = document.getElementById('search').value;
  var url = "//projects.shrimadhavuk.me/spechide/projects.php";
  var formdata = "search=" + querystring;
  sendData("POST", url, formdata, afterFetch);
};

var searchProjectsByType = function(argone){
  var querystring = document.getElementById('search').value;
  var url = "//projects.shrimadhavuk.me/spechide/projects.php";
  var formdata = "search=" + querystring + "&orderby=" + argone;
  sendData("POST", url, formdata, afterFetch);
};

var sendEMail = function(){
	var afteremailsend = function(response){
		document.getElementById('aftermailsent').innerHTML = "<pre><code>I will try to contact you as soon as possible! <span id='smile' class='claim'>:)</span></code></pre>";
	};
	var fom = document.getElementById('fromname').value + "<" + document.getElementById('fromemail').value + ">";
	var sub = document.getElementById('sub').value;
	var msg = document.getElementById('msg').value;
	var the_real_message = "FROM: " + fom + "\r\nSUBJECT: " + sub + "\r\nMESSAGE: " + msg;
	var to = "Shrimadhav U K <spechide@shrimadhavuk.me>";
	var formdata = "from=" + fom + "&to=" + to + "&sub=message from contact form on website&msg=" + the_real_message;
	sendData("POST", "//projects.shrimadhavuk.me/spechide/send-mail.php", formdata, afteremailsend);
};

var fireEvent = function(element){
  if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    element.dispatchEvent(evt);
}
else
    element.fireEvent("onchange");
};

var trackOff = function(){
  document.getElementById('cookiewarning').style.display='none';
};

var trackOn = function(){
  document.getElementById('cookiewarning').style.display='block';
};

var mobileAndTabletcheck = (function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
})();

var WhatsApp = function(){
  var the_real_url = ["e", "D", "i", "H", "c", "E", "p", "S", "/", "!", "#", "/", "e", "m", ".", "p", "p", "a", "t", "a", "h", "w", "/", "/", ":", "s", "p", "t", "t", "h"];
  var el = document.getElementById('whatsappURLobfuscation');
  var obfuscated_url = the_real_url.reverse().join('');
  el.href = obfuscated_url;
};

// open external links in new tabs
// var host = window.location.hostname;
// $("body").on("click", "a", function() {
//   if (this.protocol.indexOf("http") == 0 && this.hostname != host) {
//     window.open(this.href, "_blank");
//     return false;
//   } else {
//     return true;
//   }
// });
// the above thing does not work on Mozilla FireFox!

var analytics_and_adsense = function(){

  function loadScript(url, callback){
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;
    // Fire the loading
    head.appendChild(script);
  }

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-78771890-1', 'auto');
  ga('send', 'pageview');

  var infolinkanalytics = function(){
    var infolinks_pid = 2795540;
    var infolinks_wsid = 0;
  }

  //resources.infolinks.com/js/infolinks_main.js
  loadScript("//resources.infolinks.com/js/infolinks_main.js", infolinkanalytics);
  //resources.infolinks.com/js/infolinks_main.js

  sa_client = "94c732f75083abcdc4b3c63809a9ad5d";
  sa_code = "129e32cee27bfc79a12ce88fbf3e96fb";
  sa_protocol = ("https:"==document.location.protocol)?"https":"http";
  sa_pline = "0";
  sa_maxads = "2";
  sa_bgcolor = "FFFFFF";
  sa_bordercolor = "BDD631";
  sa_superbordercolor = "BDD631";
  sa_linkcolor = "001EB5";
  sa_desccolor = "000000";
  sa_urlcolor = "788300";
  sa_b = "0";
  sa_format = "banner_468x60";
  sa_width = "468";
  sa_height = "60";
  sa_location = "0";
  sa_radius = "0";
  sa_borderwidth = "1";
  sa_font = "0";
  document.write(unescape("%3cscript type='text/javascript' src='"+sa_protocol+"://sa.entireweb.com/sense2.js'%3e%3c/script%3e"));

};

// JavaScript to obfuscate my WhatsApp contact number
WhatsApp();

// respect user's privacy
if (navigator.doNotTrack != "yes" && navigator.doNotTrack != "1" && navigator.msDoNotTrack != "1") {
  // => analytics and adsense code HERE
  trackOn();
}
else{
  // => please do not ue the tracking and adesnse codes here
  trackOff();
}

analytics_and_adsense();

var AlwaysHTTPS = function(){
  var host = "shrimadhavuk.me";
  if ((host == window.location.host) && (window.location.protocol != "https:")){
    window.location.protocol = "https";
  }
};

// AlwaysHTTPS();

$(window).bind('keydown', function(event) {
  // http://stackoverflow.com/questions/93695/best-cross-browser-method-to-capture-ctrls-with-jquery
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
        case 's':
            event.preventDefault();
            window.location.href = "//shrimadhavuk.me/#/mobile";
            break;
        case 'f':
            event.preventDefault();
            window.location.href = "//shrimadhavuk.me/#/projects";
            break;
        case 'm':
            event.preventDefault();
            window.location.href = "//shrimadhavuk.me/#/contactme";
            break;
        case 'e':
            event.preventDefault();
            window.location.href = "//shrimadhavuk.me/#/education";
            break;
        case 'a':
            event.preventDefault();
            $($("#helpMeModal").modal());
            break;
        }
    }
  // http://stackoverflow.com/questions/93695/best-cross-browser-method-to-capture-ctrls-with-jquery
});
