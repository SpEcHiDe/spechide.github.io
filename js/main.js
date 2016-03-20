
(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set this link to active
							t.addClass('active');

					});

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});

})(jQuery);

function sendemail(){
	var url = "http://spechide.netne.net/send-mail.php";
	var from = document.getElementById('name').value + "<" + document.getElementById('email').value + ">";
	//console.log(from);
	var to = "Shrimadhav U K <spechide@shrimadhavuk.me>";
	//console.log(to);
	var sub = "message from contact form on shrimadhavuk.me!";
	//console.log(sub);
	var msg = document.getElementById('message').value;
	//console.log(msg);
	var formdata = "from="+from+"&to="+to+"&sub="+sub+"&msg="+msg+"";
	//console.log(formdata);
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET',url+'?'+formdata,true);
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4) {
			if (xhttp.status >= 200 && xhttp.status < 400) {
				console.log(xhttp.responseText);
				document.getElementsByClassName('form')[0].innerHTML='We will get back to you soon!';
			} else {
				console.log(new Error('Response returned with non-OK status'));
			}
		}
	};
	xhttp.send();
}
