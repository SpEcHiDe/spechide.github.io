
var notifyUSER = function(data) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support system notifications");
  }
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(data);
  }
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(data);
      }
    });
  }
  // Finally, if the user has denied notifications and you
  // want to be respectful there is no need to bother them any more.
};

var sendData = function(type, URL, formData, callBack){
  // create a XHR object
  var xhr = new XMLHttpRequest();
  // open the XHR object in asynchronous mode
  xhr.open(type, URL, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=ISO-8859-1')
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // OK! we have a successful response.
      var response = xhr.responseText;
      //console.log('OUTPUT: ' + response);
      // do something else with the response
      callBack(response);
    }
  };
  // GET or POST the URL according to type
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

var afterFetch = function(response){
  var jsonobj = JSON.parse(response);
  var rsp = "<div class='projects-wrapper'><ul class='slider'>";
  for(var i = 0; i < jsonobj.length; i++){
    var id = jsonobj[i].ID;
    var name = jsonobj[i].NAME;
    var desc = jsonobj[i].DESCRIPTION;
    var url = jsonobj[i].URL;
    var sd = jsonobj[i].STARTDATE;
    var ed = jsonobj[i].ENDDATE;
    var img = jsonobj[i].IMG;
    var catgry = jsonobj[i].CATEGORY;
    rsp += "<li><a href='" + url + "'><img src='" + img + "' width='600px' height='450px'><div class='project-info'><h2>" + name + "</h2><p>" + desc + "</p></div></a></li>";
  }
  rsp += "</ul></div>";
  document.getElementById('outputProjects').innerHTML = rsp;
  console.log(rsp);
};

var searchProjects = function(querystring){
  var url = "https://projects.shrimadhavuk.me/spechide/projects.php";
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
  else{
    element.fireEvent("onchange");
  }
};

var trackOff = function(){
  document.getElementById('cookiewarning').style.display='none';
};

var trackOn = function(){
  document.getElementById('cookiewarning').style.display='block';
};

var mobileAndTabletcheck = (function() {
  var check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))){
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
})();

var hasWebgl = (function() {
  var c = document.createElement('canvas');
  try {
    return !!window.WebGLRenderingContext
      && (!!c.getContext('experimental-webgl') || !!c.getContext('webgl'));
  } catch (e) {
    return null;
  }
}());

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
  analytics_and_adsense();
  // => analytics and adsense code HERE
  trackOn();
}
else{
  // => please do not ue the tracking and adesnse codes here
  trackOff();
}

var MyDOB = function(year, month, date, hour, minute, second){
  var yob = new Date(year, month - 1, date, hour, minute, second);
  var todaydate = new Date();
  var differentdates = todaydate.getTime() - yob.getTime();

  var one_sec = 1000;
  var one_min = 60;
  var one_hour = 60;
  var one_day = 24;
  var one_year = 365;

  var x = differentdates / one_sec;

  var seconds = Math.floor(x % one_min);
  x = x / one_min;
  var minutes = Math.floor(x % one_hour);
  x = x / one_hour;
  var hours = Math.floor(x % one_day);
  x = x / one_day;
  var days = Math.floor(x % one_year);
  x = x / one_year;
  var years = Math.floor(x);

  /*
   => there are "six" leap years between 1995 and 2016
      breaking the abstraction here!!
      but I have no choice :(
      Maybe, a better algorithm can be developed in the coming "three" years
  */
  days = days + 6;

  document.getElementById('yrsl').innerHTML = "<span class='digit'>" + years.toString().split('').join('</span><span class="digit">') + "</span>";
  document.getElementById('daysl').innerHTML = "<span class='digit'>" + days.toString().split('').join('</span><span class="digit">') + "</span>";
  document.getElementById('hrsl').innerHTML = "<span class='digit'>" + hours.toString().split('').join('</span><span class="digit">') + "</span>";
  document.getElementById('minl').innerHTML = "<span class='digit'>" + minutes.toString().split('').join('</span><span class="digit">') + "</span>";
  document.getElementById('secl').innerHTML = "<span class='digit'>" + seconds.toString().split('').join('</span><span class="digit">') + "</span>";
}

$(window).bind('keydown', function(event) {
  // http://stackoverflow.com/questions/93695/best-cross-browser-method-to-capture-ctrls-with-jquery
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
          case 's':
              event.preventDefault();
              window.location.hash = "#/mobile";
              break;
          case 'f':
              event.preventDefault();
              window.location.hash = "#/projects";
              break;
          case 'm':
              event.preventDefault();
              window.location.hash = "#/contactme";
              break;
          case 'e':
              event.preventDefault();
              window.location.hash = "#/education";
              break;
          case 'a':
              event.preventDefault();
              $($("#helpMeModal").modal());
              break;
        }
    }
    else{
      switch(event.which){
        /*
        // => http://stackoverflow.com/a/5597114/4723940
        case 37:
            event.preventDefault();
            alert("left");
            break;
        case 38:
            //event.preventDefault();
            alert("up");
            break;
        case 39:
            event.preventDefault();
            alert("right");
            break;
        case 40:
            //event.preventDefault();
            alert("down");
            break;
        // => http://stackoverflow.com/a/6011119/4723940
        */
      }
    }
  // http://stackoverflow.com/questions/93695/best-cross-browser-method-to-capture-ctrls-with-jquery
});

setInterval(function(){
  if(window.location.hash == "#/"){
    MyDOB(1995,11,16,19,30,30);
  }
}, 1000);
