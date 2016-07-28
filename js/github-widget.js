$(document).ready(function() {
  var username = $(".github-widget").data("username");
  fetchRepos(username);
  fetchUserDetails(username);
})

function fetchRepos(username) {
  var url = "https://api.github.com/users/" + username + "/repos";
  $.get(url, function(response) {
    updateRepoDetails(topRepos(response));
    updateLastPush(lastPushedDay(response));
  });
}

function fetchUserDetails(username) {
  var url = "https://api.github.com/users/" + username;
  $.get(url, function(response) {
    updateUserDetails(response);
  });
}

function updateLastPush(lastDay) {
  $(".active-time").append('Last active: ' + lastDay + ' days ago');
}

function lastPushedDay(repos) {
  var now = new Date();
  var latestDate;
  var difference = 9999999999999;
  for (var i = 0; i < repos.length; i++) {
    var pushedDate = new Date(repos[i].pushed_at)
    if (now - pushedDate < difference) {
      latestDate = pushedDate;
      difference = now - pushedDate;
    }
  }
  return Math.floor((now - latestDate) / (1000 * 3600 * 24));
}

function updateUserDetails(user) {
  $(".personal-details").append('<div class="full-name">' + user.name + '</div>');
  if (user.bio) {
    $(".personal-details").append('<div class="bio">' + user.bio + '</div>')
  }
  if (user.location) {
    $(".personal-details").append('<div class="location"><i class="fa fa-map-marker"></i> ' + user.location + '</div>');
  }

  $(".stats").append(' <div class="item"><div class="count">' + user.followers + '</div><div class="stat-name">Followers</div></div>');

  $(".stats").append(' <div class="item"><div class="count">' + user.following + '</div><div class="stat-name">Following</div></div>');

  $(".stats").append(' <div class="item"><div class="count">' + user.public_repos + '</div><div class="stat-name">Repositories</div></div>');

  $(".photo").append('<img src="' + user.avatar_url + '">');

  $(".follow").append('<button><a target="new" href="' + user.html_url + '">Follow</a></button>');

}

function updateRepoDetails(repos) {

  for (var i = 0; i < repos.length; i++) {
    var language = repos[i].language ? repos[i].language : "Unknown";
    $(".repositories").append('<div class="continer"><div class="item names"><div><a href="' + repos[i].repoUrl + '">' + repos[i].name + '</a></div></div><div class="item language"><div>' + language + '</div></div><div class="item stars"><div>&#9733;' + repos[i].stars + '</div></div></div>');
  }

}

function topRepos(repos) {
  repos.sort(function(a, b) {
    if (a.stargazers_count === b.stargazers_count) {
      return 0;
    } else if (a.stargazers_count > b.stargazers_count) {
      return -1;
    } else {
      return 1;
    }
  })
  repos = repos.slice(0, 3);
  var result = [];
  for (var i in repos) {
    result.push({
      name: repos[i].name,
      stars: repos[i].stargazers_count,
      language: repos[i].language,
      repoUrl: repos[i].html_url

    });
  }
  return result;

}
