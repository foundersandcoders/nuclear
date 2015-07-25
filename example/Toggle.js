'use strict';


var nuclear = require('../');
var h       = nuclear.h;

module.exports = Toggle;

function Toggle (initialState) {

	var text = initialState.text || 'Bar';

	var state = nuclear.observS({
		text: nuclear.observ(text),
		channels: {
			toggle: toggle
		}
	});

	return state;
}

Toggle.render = function (state) {

	return (
		h('h2', {
			onclick: state.channels.toggle.bind(null, state)
		},'Hello ' + state.text())
	);
}

function toggle (state) {

	state.text.set('Foo');
}