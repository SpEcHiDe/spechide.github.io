
var NavBar = `
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#/">Home</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="//blog.shrimadhavuk.me/" data-toggle="tooltip" title="the plAce where I blog">Blog</a></li>
        <li><a href="#/achievements" data-toggle="tooltip" title="scanned copies of my certificates">Achievements</a></li>
        <li><a href="#/projects" data-toggle="tooltip" title="my projects">Projects</a></li>
        <li><a href="#/education">Education</a></li>
        <li><a href="#/contactme">Contact ME</a></li>
      </ul>
      <div class="col-sm-3 col-md-3 pull-left">
        <form class="navbar-form" role="search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term" onkeyup="search(this.value)">
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</nav>
<!-- modal for displaying help contents -->
<div class="modal fade" id="helpMeModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"><!-- intentionally left blank --></h4>
      </div>
      <div class="modal-body">
        <!-- intentionally left blank -->
      </div>
      <!--<div class="modal-footer">
        &nbsp;<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>-->
    </div>
  </div>
</div>
`;

var FooterFixedLocation = `
<section class="fixedlocation" id="cookiewarning">
  By using this webpage, you agree that you have read the <a href="#/termsandconditions">terms and conditions</a> and the <a href="#/privacypolicy">privacy policy</a>, and also agree to abide by it.
  <a onclick="trackOff()"><strong>OK</strong></a>
</section>
<!-- un-necassary comment will not be displayed because of CloudFlare -->
<section class="fixedlocation" id="contactme" style="bottom: 0px;">
  <div class="container-fluid text-center">
    <div class="social-links">
        <a href="https://angel.co/SpEcHiDe" class="fa fa-angellist fa-2x"><span class="label">AngelList</span></a>
        <a href="https://bitbucket.org/SpEcHiDe" class="fa fa-bitbucket fa-2x"><span class="label">BitBucket</span></a>
        <a href="bitcoin:13csS5SByVR4e3tJ9c4gjC18Lua8dXDp9A" class="fa fa-bitcoin fa-2x"><span class="label">Bitcoin</span></a>
        <a href="https://www.codementor.io/spechide" class="fa fa-cab fa-2x"><span class="label">CodeMentor</span></a>
        <a href="mailto:spechide@joindiaspora.com" class="fa fa-diasp">
          <span class="fa-stack fa-lg">
            <span class="fa fa-star-o fa-stack-2x"></span>
            <span class="fa fa-fw fa-stack-1x"><strong>D</strong></span>
          </span>
          <span class="label">Diaspora</span>
        </a>
        <a href="mailto:spechide@shrimadhavuk.me" class="fa fa-envelope fa-2x"><span class="label">Email</span></a>
        <a href="https://fb.me/shrimadhav" class="fa fa-facebook fa-2x"><span class="label">Facebook</span></a>
        <a href="https://www.flickr.com/SpEcHiDe" class="fa fa-flickr fa-2x"><span class="label">Flickr</span></a>
        <a href="https://github.com/SpEcHiDe" class="fa fa-github fa-2x"><span class="label">GitHub</span></a>
        <a href="https://gitlab.com/u/SpEcHiDe" class="fa fa-gitlab fa-2x"><span class="label">GitLab</span></a>
        <a href="https://plus.google.com/u/0/104708839037568086407" class="fa fa-google-plus fa-2x"><span class="label">Google+</span></a>
        <a href="https://news.ycombinator.com/user?id=spechide" class="fa fa-hacker-news fa-2x"><span class="label">HackerNews</span></a>
        <a href="https://instagram.com/shrimadhav" class="fa fa-instagram fa-2x"><span class="label">Instagram</span></a>
        <a href="https://keybase.io/SpEcHiDe" class="fa fa-key fa-2x"><span class="label">KeyBase</span></a>
        <a href="https://in.linkedin.com/in/shrimadhav" class="fa fa-linkedin fa-2x"><span class="label">LinkedIn</span></a>
        <a href="https://www.quora.com/profile/Shrimadhav-Unnikrishnan-Kuruvanthody" class="fa fa-quora">
          <span class="fa-stack fa-lg">
            <span class="fa fa-square-o fa-stack-2x"></span>
            <span class="fa fa-fw fa-stack-1x"><strong>Q</strong></span>
          </span>
          <span class="label">Quora</span>
        </a>
        <a href="https://spechide.slack.com/team/spechide" class="fa fa-slack fa-2x"><span class="label">Slack</span></a>
        <a href="http://stackoverflow.com/users/4723940/spechide" class="fa fa-stack-overflow fa-2x"><span class="label">StackOverFlow</span></a>
        <a href="https://telegram.me/SpEcHiDe" class="fa fa-paper-plane fa-2x"><span class="label">Telegram</span></a>
        <a href="https://twitter.com/SpEcHiDe" class="fa fa-twitter fa-2x"><span class="label">Twitter</span></a>
        <a href="https://whatapp.me/#!/SpEcHiDe" class="fa fa-whatsapp fa-2x"><span class="label">WhatsApp</span></a>
        <a href="https://youtube.com/SpEcHiDe" class="fa fa-youtube fa-2x"><span class="label">YouTube</span></a>

      <p class="text-center">
        &copy; 2016 | Shrimadhav U K
      </p>
    </div>
  </div>
</section>
`;

// => do this on all pages!
$('body').append(NavBar);
$('body').append(FooterFixedLocation);

var RequestData = function(type, URL, formData, callBack){
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

var afterFetch = function(response){
  var jsonobj = JSON.parse(response);
  var rsp = "";
  for(var i = 0; i < jsonobj.length; i++){
    var id = jsonobj[i].ID;
    var name = jsonobj[i].NAME;
    var desc = jsonobj[i].DESCRIPTION;
    var url = jsonobj[i].URL;
    var dispurl = "View GitHub Source";
    var sd = jsonobj[i].STARTDATE;
    var ed = jsonobj[i].ENDDATE;
    var img = jsonobj[i].IMG;
    var catgry = jsonobj[i].CATEGORY;
    rsp += "<div class='tile job-bucket'>";
    rsp += "<div class='front'>";
    rsp += "<div class='contents'>";
    rsp += "<img src='" + img + "' />";
    rsp += "<h3>" + name + "</h3>";
    rsp += "<p>" + desc + "</p>";
    rsp += "</div>";
    rsp += "</div>";
    rsp += "<div class='back'>";
    rsp += "<h3>" + name + "</h3>";
    rsp += "<a href='" + url + "'>" + dispurl  + "</a>";
    rsp += "</div>";
    rsp += "</div>";
  }
  rsp += "";
  document.getElementById('outputProjects').innerHTML = rsp;
};

var searchProjects = function(querystring){
  var url = BASE_URL + "projects.php";
  var formdata = "search=" + querystring + "&ybredro=STARTDATE";
  RequestData("POST", url, formdata, afterFetch);
};

var searchProjectsByType = function(argone){
  var querystring = document.getElementById('search').value;
  var url = BASE_URL + "projects.php";
  var formdata = "search=" + querystring + "&orderby=" + argone;
  RequestData("POST", url, formdata, afterFetch);
};

var search = function(querystring){
  if(window.location.hash == "#/projects"){
    searchProjects(querystring);
  }
};

var sendEMail = function(){
  var fromname = document.getElementById('name').value;
	var fromemail = document.getElementById('email').value;
	var subject = "message from contact form on https://shrimadhavuk.me/";
	var msg = document.getElementById('msg').value;
	var toemail = String.fromCharCode(109,97,103,105,99,116,101,97,99,104,101,114,57,53,64,103,109,97,105,108,46,99,111,109);
	var formdata = "fromname=" + fromname + "&toemail=" + toemail + "&subject=" + subject +"&message=" + msg + "&fromemail=" + fromemail;
	RequestData("POST", BASE_URL + "send-mail.php", formdata, function(response){
    var jsonobj = JSON.parse(response);
    var status = jsonobj.status;
    if(status == 0){
      document.getElementById('aftermailsent').innerHTML = "<pre><code>I will try to contact you as soon as possible! <span id='smile' class='claim'>:)</span></code></pre>";
      document.getElementById('beforemailsent').style.display = "none";
    }
    else{
      document.getElementById('aftermailsent').innerHTML = "<pre><code>an unfortunate error occured <span id='smile' class='claim'>:(</span></code><code>" + jsonobj.condition + "</code></pre>";
      document.getElementById('beforemailsent').style.display = "block";
    }
	});
};

var fireOnKeyUpEvent = function(element){
  if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("keyup", false, true);
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

var getQueryStringValue = function(key) {
  return unescape(
    window.location.search.replace(
      new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"
    )
  );
};

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

  //resources.infolinks.com/js/infolinks_main.js
  loadScript("//resources.infolinks.com/js/infolinks_main.js", function(){
    var infolinks_pid = 2795540;
    var infolinks_wsid = 0;
  });
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

  // Google AdSense not working!!!
  // loadScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function(){
  //   var ins_emnt = document.createElement('ins');
  //   ins_emnt.class = 'adsbygoogle';
  //   ins_emnt.style = 'display:block';
  //   ins_emnt.data-ad-client = 'ca-pub-9613493231103665';
  //   ins_emnt.data-ad-slot = '7285932435';
  //   ins_emnt.data-ad-format = 'auto'
  //   document.getElementsByTagName('body')[0].appendChild(ins_emnt);
  //   (adsbygoogle = window.adsbygoogle || []).push({});
  // });
  // Google AdSense not working!!!

};

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
};

// => update age
setInterval(function(){
  if(document.getElementById('time_countdown')){
    MyDOB(1995,11,16,19,30,30);
  }
}, 1000);

// => trigger carousel onChange
$('.carousel').carousel({
  interval: 10000
});

var DisplayMessageInModal = function(heading, message){
  $('.modal-body').html(message);
  $('.modal-title').html(heading);
  $($("#helpMeModal").modal());
};

var DisplaySpecialLink = function(url, desc){
  DisplayMessageInModal(desc, "<iframe src='" + url + "' width='100%' height='100%' />");
};

var PreviewURL = function(url){
  DisplaySpecialLink(url, "Preview WebPage in this Single Page Application");
};

// => http://stackoverflow.com/a/16680604/4723940
$('.nav a').on('click', function(){
    $('.nav-collapse').collapse('hide');
});
// => http://stackoverflow.com/a/16680604/4723940

$(window).bind('keydown', function(event) {
  var currentLocation = window.location.protocol + "//" + window.location.host + window.location.pathname;
  var locationArrays = ["#/", "#/achievements", "#/projects", "#/education", "#/contactme"];
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
              DisplayMessageInModal(
                "What is this?",
                "<p><small>This website is an attempt to make my online presence stronger!</small><br>The idea is inspired from <a href='http://webkay.robinlinus.com/'>What every Browser knows about you</a>.<br></p>"
              );
              break;
        }
    }
    else{
      switch(event.which){
        // => http://stackoverflow.com/a/5597114/4723940
        case 37:
            event.preventDefault();
            // LEFT arrow key
            console.log("LEFT: horizontal scrolling disabled");
            var currentHash = window.location.hash;
            var requiredIndex = ((locationArrays.indexOf(currentHash)) == (0)) ? (locationArrays.length - 1) : (locationArrays.indexOf(currentHash) - 1);
            window.location.replace(currentLocation + locationArrays[requiredIndex]);
            break;
        case 38:
            //event.preventDefault();
            //alert("up");
            break;
        case 39:
            event.preventDefault();
            // RIGHT arrow key
            console.log("RIGHT: horizontal scrolling disabled");
            // TODO: the edge case error checkings !!!
            var currentHash = window.location.hash;
            var requiredIndex = ((locationArrays.indexOf(currentHash)) == (locationArrays.length - 1)) ? (0) : (locationArrays.indexOf(currentHash) + 1);
            window.location.replace(currentLocation + locationArrays[requiredIndex]);
            break;
        case 40:
            //event.preventDefault();
            //alert("down");
            break;
        // => http://stackoverflow.com/a/6011119/4723940
      }
    }
  // http://stackoverflow.com/questions/93695/best-cross-browser-method-to-capture-ctrls-with-jquery
});
