'use strict';

var jsdom   = require('jsdom');
var test    = require('tape');
var decache = require('decache');

function clear (window) {

	window.document.body.innerHTML = '';
}


test('Nuclear', function (t) {

	jsdom.env(
		'',
		['http://code.jquery.com/jquery-2.1.1.js'],
		function (errors, window) {

			var $ = window.$;
			
			var nuclear = require('../');
			var Toggle  = require('../example/Toggle.js');

			t.test('render initial state', function (st) {

				var state = Toggle({text: 'Bes'});

				var vDom  = Toggle.render(state);

				nuclear.app(window.document.body, state, Toggle.render, {
					document: window.document
				});

				st.equals($('h2').text(), 'Hello Bes', 'virtual dom created and appended');

				st.end();
			});

			t.test('toggle', function (st) {

				clear(window);

				var state = Toggle({});

				var vDom  = Toggle.render(state);

				nuclear.app(window.document.body, state, Toggle.render, {
					document: window.document
				});

				st.equals($('h2').text(), 'Hello Bar', 'virtual dom created and appended');

				$('h2').click();

				st.equals($('h2').text(), 'Hello Foo', 'virtual dom updated and appended');

				decache('../');
				st.end();
			});
		}
	);
});

