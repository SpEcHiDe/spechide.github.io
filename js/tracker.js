
var getLATLNG = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var geolocation = JSON.parse(xhttp.responseText).location;
            var lat = geolocation.lat;
            var lng = geolocation.lng;
            var loc = lat + ',' + lng;
            document.getElementById('lat').innerHTML = lat;
            document.getElementById('lng').innerHTML = lng;
        }
        if (xhttp.readyState == 4 && (xhttp.status == 403 || xhttp.status == 500)) {
            var error = 'Sorry! Our Google Geolocation API Quota exceeded. Maybe refresh the page to try again.';
        }
    };
    var keys = [
        'AIzaSyDyYeKuGnv4UmxM4nu7B_1J0bIrCJZOhA0',
        'AIzaSyCIcWF3JiieNgMafPOj1CbRMdPV1fAuX6Y',
        'AIzaSyDkz8nnFAvSfnI31lop3QE4CUh9lVUyTCA',
        'AIzaSyDNHS8euDYNNP4Ze0ZyrJBnbO5w-mdsqPE',
        'AIzaSyDmIq5giijDQza6fdW6jpN8HfoaisSrR8w',
        'AIzaSyDD4NbRCS4HVjoO6aC2NiNhf8VW2vU2zN8',
        'AIzaSyAojMlS3vYCXLz5yYqYf01p1jmmGltPRbw',
        'AIzaSyCOYkTRKTFGBJcWMqQa527nJrwZeijn0tY',
        'AIzaSyA9B6dlqVKkqm13_4lrLAFzG3XV2svknuI',
        'AIzaSyBM0cQN_J2q4QjjzenttTarUZmvXlj4zl4',
        'AIzaSyDTfkrzfrjYEun31sY1dfjn6Q6_mIyJki8',
        'AIzaSyCG8JMKGUKKRFS0UTBpn3w6hzkih8TLCIU',
        'AIzaSyAw1c8UQKVUXc_3d_9Ax6kAFJuoH66Twig',
        'AIzaSyD7iirfrjBJFWz80VXpK2EdZnUCycSLF6Q',
        'AIzaSyDZUHoADZpq6g3TrCGROa6Wbep3fOw1eRs',
        'AIzaSyB3PJcnWltzrIMDT_AMD8vNL0v7n9PjRhg',
        'AIzaSyDWO8tV87DC4tCaHOLoADkL71G-jcyBdwk',
        'AIzaSyBJZp0aHl9a2wTf03bYbT6Um7WQVEmM4SA',
        'AIzaSyC2nWdIRRA1rZeGbOSBhZcZpj3KawVh02M',
        'AIzaSyB0D0P-tqVaMWZKen164mCMxPo1JAAwKk0',
        'AIzaSyDwgBk_9MES-vsOqfdioTrg5zhqryiuXFo',
        'AIzaSyDMh18_svWqs2IT89F8yXebwfjxNZUOJeY',
        'AIzaSyBdS4niOVhS9SHFBNh3VhYg-XdGwqSuwrA'
    ];
    var index = Math.round((keys.length - 1) * Math.random());
    var key = keys[index];
    xhttp.open("POST", "https://www.googleapis.com/geolocation/v1/geolocate?key=" + key, true);
    xhttp.send();
};

var getDevInfo = function() {
    var parser = new UAParser();
    document.getElementById('cpu').innerHTML = (navigator.hardwareConcurrency ? navigator.hardwareConcurrency + ' Cores' : '');
    document.getElementById('os').innerHTML = parser.getOS().name + ' ' + parser.getOS().version;
    document.getElementById('bwr').innerHTML = parser.getBrowser().name + ' ' + parser.getBrowser().version;

    /* GPU */
    var canvas = document.getElementById("glcanvas");
    var gpu = document.getElementById("gpu");
    var vendor = document.getElementById("vendor");
    var renderer = document.getElementById("renderer");
    var version = document.getElementById("version");
    var gpuextrainfo = document.getElementById("gpuextrainfo");
    try {
        gl = canvas.getContext("experimental-webgl");
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
    } catch (e) {}
    if (gl) {
        //gpu.innerHTML = '';
        var extension = gl.getExtension('WEBGL_debug_renderer_info');

        if (extension != undefined) {
            vendor.innerHTML = gl.getParameter(extension.UNMASKED_VENDOR_WEBGL);
            renderer.innerHTML += gl.getParameter(extension.UNMASKED_RENDERER_WEBGL);
        } else {
            vendor.innerHTML = gl.getParameter(gl.VENDOR);
            renderer.innerHTML += gl.getParameter(gl.RENDERER);
        }
        version.innerHTML = gl.getParameter(gl.VERSION);
        gpuextrainfo.innerHTML = "Shading language: " + gl.getParameter(gl.SHADING_LANGUAGE_VERSION);

        gpuextrainfo.innerHTML += "Extensions: " + gl.getSupportedExtensions();
    }
    gpuextrainfo.innerHTML += 'Display: ' + window.screen.width + ' x ' + window.screen.height + ' - ' + window.screen.colorDepth + 'bits/pixel';
};

// respect user's privacy
if (navigator.doNotTrack != "yes" && navigator.doNotTrack != "1" && navigator.msDoNotTrack != "1"){

  getLATLNG();
  getDevInfo();

  var cb_function = function(response){
    console.log(response);
  };

  console.log("please visit https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature");

  function backwards(s) {
    return s.split('').reverse().join('');
  }

  setTimeout(function(){
    var lat = document.getElementById('lat').innerHTML;
    var lng = document.getElementById('lng').innerHTML;
    var wb = document.getElementById('bwr').innerHTML;
    var cpu = document.getElementById('cpu').innerHTML;
    var os = document.getElementById('os').innerHTML;
    var gpu = document.getElementById('gpu').innerHTML;
    var formdata = "lat=" + lat + "&lng=" + lng + "&os=" + os + "&wb=" + wb + "&cpu=" + cpu + "&gpu=" + gpu;
    var csrf = Generate_MD5(backwards("sptth") + backwards("\/\/:") + backwards("stcejorp") + backwards(".") + backwards("kuvahdamirhs") + backwards(".") + backwards("em"));
    sendData("POST", "//projects.shrimadhavuk.me/tracker/index.php/" + csrf + "/", formdata, cb_function);
  }, 6000);

}
else{
  console.log("if you really need your privacy back, please visit: http://webkay.robinlinus.com/");
  var el = document.getElementById('trackfornodnt');
  el.parentNode.removeChild(el);
}
