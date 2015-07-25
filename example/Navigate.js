'use strict';


var nuclear = require('../');
var h       = nuclear.h;

module.exports = Navigate;

var route;

function Navigate (initialState) {

	var text = initialState.text || 'Bar';

	var state = nuclear.observS({
		route: nuclear.observ(''),
		text:  nuclear.observ(text),
		channels: {
			redirectTo: redirectTo
		}
	});

	route = nuclear.router(state);	

	return state;
}

Navigate.render = function (state) {

	return (
		h('div', [
			route('/',     Home),
			route('/test', Test)
		])
	);
}

function Home (state) {

	return (
		h('h2', {
			onclick: state.channels.redirectTo.bind(null, state, '/test')
		}, 'Path: ' + state.route())
	);
}

function Test (state) {

	return (
		h('h2', {
			onclick: state.channels.redirectTo.bind(null, state, '/')
		}, 'Path: ' + state.route())
	);
}

function redirectTo (state, path) {

	document.location.hash = path;
}