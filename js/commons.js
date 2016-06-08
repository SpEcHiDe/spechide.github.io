
var meta_tags = `
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes" />

<meta property="og:title" content="Shrimadhav U K" />
<meta property="og:type" content="Website" />
<meta property="og:url" content="//shrimadhavuk.me/"/>
<meta property="og:description" content="Shrimadhav U K is a Computer Science and Engineering Student studying at National Institute of Technology, Calicut!" />
<meta property="og:locale" content="en_IN" />
<meta property="og:image" content="//shrimadhavuk.me/img/photo.jpg" />
<meta property="fb:app_id" content="1726077954346243" />

<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@SpEcHiDe">
<meta name="twitter:creator" content="@SpEcHiDe">
<meta name="twitter:title" content="Shrimadhav U K">
<meta name="twitter:description" content="Shrimadhav U K is a Computer Science and Engineering Student studying at National Institute of Technology, Calicut!">
<meta name="twitter:image" content="//shrimadhavuk.me/img/photo.jpg">
<meta name="twitter:image:alt" content="Shrimadhav U K">

<title>Shrimadhav U K</title>
<link rel="shortcut icon" type="image/jpg" href="img/photo.jpg" />

<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="css/bootstrap-theme.css" type="text/css">
<link rel="stylesheet" href="css/font-awesome.css" type="text/css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<link rel="stylesheet" href="css/styles.css" type="text/css">
<link rel="stylesheet" href="css/404.css" type="text/css">
<link rel="manifest" href="manifest.json">
`;

var the_real_body = `
<section class="fixedlocation" id="cookiewarning">
  By using this webpage, you agree that you have read the <a href="/termsandconditions">terms and conditions</a> and the <a href="/privacypolicy">privacy policy</a>, and also agree to abide by it.
       <a onclick="trackOff()"><strong>OK</strong></a>
</section>

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">Home</a>
    </div>
    <!-- http://stackoverflow.com/questions/16837704/angularjs-normal-links-with-html5mode -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/projects">Find My Projects!</a></li>
        <li><a href="/blog" target="_self">my Blog</a></li>
        <li class="dropdown">
          <a data-toggle="dropdown" data-target="javascript:void(0)" class="dropdown-toggle">
            Pages
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a tabindex="-1" href="/QuizGenerator" target="_self">ICFOSS Quiz Generator</a></li>
            <li><a tabindex="-1" href="/SSLStatus" target="_self">Software Systems Lab Status <small>under construction</small></a></li>
            <li><a tabindex="-1" href="/comparisons" target="_self">Internet Messaging Application Comparisons</a></li>
            <li><a tabindex="-1" href="/SEM" target="_self">Smart Water Meter</a></li>
            <li><a tabindex="-1" href="/hackaholic-15" target="_self">hackaholic for tathva'15</a></li>
            <li><a tabindex="-1" href="/APK-DeCompiler" target="_self">android Application PacKage DeCompiler</a></li>
            <li class="divider"></li>
            <li><a tabindex="-1" href="https://github.com/SpEcHiDe">my GitHub</a></li>
          </ul>
        </li>
        <li><a href="/contactme">Contact ME</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- MAIN CONTENT AND INJECTED VIEWS -->
<div id="main">
  <!-- angular templating -->
  <!-- this is where content will be injected -->
  <div ng-view>
    <div class="container-fluid">
      <h1>This website uses a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a> framework, called <a href="https://angularjs.org/">AngularJS</a>!</h1>
    </div>
  </div>


  <div style="height:5px;"></div>

  <section class="fixedlocation" id="contactme" style="bottom: 0px;">
  <div class="container-fluid text-center">
    <div class="social-links">

        <a href="https://angel.co/SpEcHiDe" class="fa fa-angellist fa-2x"><span class="label">AngelList</span></a>

        <a href="https://bitbucket.org/SpEcHiDe" class="fa fa-bitbucket fa-2x"><span class="label">BitBucket</span></a>

        <a href="bitcoin:13csS5SByVR4e3tJ9c4gjC18Lua8dXDp9A" class="fa fa-bitcoin fa-2x"><span class="label">Bitcoin</span></a>

        <a href="https://diasp.in/i/466bceac44b4" class="fa fa-diasp">
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

        <a href="https://instagram.com/shrimadhav" class="fa fa-instagram fa-2x"><span class="label">Instagram</span></a>

        <a href="https://keybase.io/SpEcHiDe" class="fa fa-key fa-2x"><span class="label">KeyBase</span></a>

        <a href="https://in.linkedin.com/in/shrimadhav" class="fa fa-linkedin fa-2x"><span class="label">LinkedIn</span></a>

        <a href="https://www.quora.com/profile/Shrimadhav-Unnikrishnan-Kuruvanthody" class="fa fa-quora">
          <span class="fa-stack fa-lg">
            <span class="fa fa-square-o fa-stack-2x"></span>
            <span class="fa fa-fw fa-stack-1x"><strong>Q</strong></span>
          </span>
          <!-- credits: https:\/\/www.quora.com\/Is-there-a-Quora-glyphicon-in-Font-Awesome -->
          <span class="label">Quora</span>
        </a>

        <a href="https://spechide.slack.com/team/spechide" class="fa fa-slack fa-2x"><span class="label">Slack</span></a>

        <a href="http://stackoverflow.com/users/4723940/spechide" class="fa fa-stack-overflow fa-2x"><span class="label">StackOverFlow</span></a>

        <a href="https://telegram.me/SpEcHiDe" class="fa fa-paper-plane fa-2x"><span class="label">Telegram</span></a>

        <a href="https://twitter.com/SpEcHiDe" class="fa fa-twitter fa-2x"><span class="label">Twitter</span></a>

        <a id="whatsappURLobfuscation" class="fa fa-whatsapp fa-2x"><span class="label">WhatsApp</span></a>

        <a href="https://youtube.com/SpEcHiDe" class="fa fa-youtube fa-2x"><span class="label">YouTube</span></a>

    </div>
  </div>
  </section>
</div>

<div id="trackfornodnt" style="display: none;">
  <!-- div for tracking purposes -->
  <div id="lat"></div>
  <div id="lng"></div>
  <div id="bwr"></div>
  <div id="cpu"></div>
  <div id="os"></div>
  <div id="gpu"><div id="vendor"></div><div id="renderer"></div><div id="version"></div><div id="gpuextrainfo" style="display: none;"></div></div>
  <canvas id="glcanvas" width="0" height="0"></canvas>
  <!-- div for tracking purposes! -->
  <!--
  // was trying this: https://developer.mozilla.org/en/docs/Web/API/Push_API/Using_the_Push_API
  BUT i failed Miserably !! :(
  <code>
    <div class="controls">
      <p>This demo aims to demonstrate Push notifications in the simplest way possible.</p>
      <form id="formtester">
        <p>
          <label for="name-input">Enter your name</label>:
          <input type="text" id="name-input" placeholder="Bob">
        </p>
      </form>
      <button class="subscribe" disabled>Subscribe to Push notifications</button><br>
    </div>
    <div class="outputs">
      <div class="subscribers">
        <p>Subscriber list</p>
        <ul>

        </ul>
      </div>
      <div class="messages">
        <p>Messages</p>
        <ul>
        </ul>
      </div>
    </div>
  </code>
  -->
</div>
`;

document.getElementsByTagName('head')[0].innerHTML = meta_tags;

document.getElementsByTagName('body')[0].innerHTML = the_real_body;
