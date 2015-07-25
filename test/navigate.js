'use strict';

var jsdom    = require('jsdom');
var test     = require('tape');

function clear (window) {

	window.document.body.innerHTML = '';
}

test('Nuclear test component Navigate.js: ', function (t) {

	jsdom.env('', {
		virtualConsole: jsdom.createVirtualConsole().sendTo(console),
		scripts: ['http://code.jquery.com/jquery-2.1.1.js'],
		done: function (errors, window) {

			var $ = window.$;
			global.window   = window;
			global.document = window.document;

			var nuclear     = require('../');
			var navigate    = require('../example/Navigate.js');

			t.test('render initial state', function (st) {

				var state = navigate({});

				var vDom  = navigate.render(state);

				nuclear.app(window.document.body, state, navigate.render, {
					document: window.document
				});

				st.equals($('h2').text(), 'Path: ', 'virtual dom created and appended');

				st.end();
			});

			t.test('redirect to different path', function (st) {

				clear(window);

				var state = navigate({});

				var vDom  = navigate.render(state);

				nuclear.app(window.document.body, state, navigate.render, {
					document: window.document
				});

				st.equals($('h2').text(), 'Path: ', 'virtual dom created and appended');

				$('h2').click();

				process.nextTick(function () {

					st.equals($('h2').text(), 'Path: /test', 'virtual dom updated and appended');
					st.end();
				});
			});
		}
	});
});