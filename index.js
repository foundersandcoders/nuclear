"use strict";


var nuclear = module.exports = {
  app:           app,
  router:        require('nuclear-router'),
  diff:          require('virtual-dom/diff'),
  patch:         require('virtual-dom/patch'),
  createElement: require('virtual-dom/create-element'),
  h:             require('virtual-dom/h'),
  observ:        require('observ'),
  observS:       require('observ-struct'),
  observA:       require('observ-array'),
  observV:       require('observ-varhash'),
  request:       require('xhr')
};


function app (elem, observ, render) {

  if (!elem) {
    throw new Error('Element does not exist. Nuclear cannot be initialized.');
  }

	var target = start(render, observ);
	elem.appendChild(target.dom);

	return observ(target.update);
}


function start (render, observ) {
	var virtualTree;
	var resultsNode;
	var target = {};

	virtualTree = render(observ);
	resultsNode = nuclear.createElement(virtualTree);
	target.dom  = resultsNode;
	target.update = function () {

		var newResults = render(observ);
		var patches    = nuclear.diff(virtualTree, newResults);
		resultsNode    = nuclear.patch(resultsNode, patches);
		virtualTree    = resultsNode;
	};

	return target;
}
