var test = require('tape');
var classyBrew = require('../src/classyBrew');

test('INSTANTIATION', function (t) {
	t.plan(1);

	t.equal( typeof(new classyBrew()) , 'object', 'Instaniation returns object');
});

test('TEST STATISTICAL METHODS', function (t) {
	t.plan(2);

	//array
	var brew = new classyBrew();
	brew.setSeries([2, 4, 6, 8]);
	var breaks = brew.classify('equal_interval');
	t.equal(Array.isArray(breaks), true, 'Equal interval returns array');
	var breaks = brew.classify('jenks', 3);
	t.equal(Array.isArray(breaks), true, 'Jenks returns array');
});