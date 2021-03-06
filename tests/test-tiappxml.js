var assert = require('assert'),
	appc = require('../lib/appc'), // needed for color & dump()
	tiappxml = require('../lib/tiappxml'),
	path = require('path');

(function () {
	var tiapp = new appc.tiappxml();
	
	console.log('\nCreating empty tiapp.xml'.cyan);
	console.log('toString():')
	console.log(tiapp.toString().green);
	console.log('\nJSON:')
	console.log(tiapp.toString('json').green);
	console.log('\nPretty JSON:')
	console.log(tiapp.toString('pretty-json').green);
	console.log('\nXML:');
	console.log(tiapp.toString('xml').green);
}());

(function () {
	var tiapp = new appc.tiappxml();
	
	tiapp.id = 'com.another.app';
	tiapp.name = 'Another App';
	tiapp.version = '2.0';
	tiapp['deployment-targets'] = { android: false, iphone: true, mobileweb: true };
	tiapp['sdk-version'] = '2.2.0';
	tiapp.properties = {
		prop1: 'value1',
		prop2: 'value2',
		prop3: 'value3',
		prop4: 'value4'
	};
	
	console.log('\nCreating empty tiapp.xml and adding new nodes'.cyan);
	console.log('toString():')
	console.log(tiapp.toString().green);
	console.log('\nJSON:')
	console.log(tiapp.toString('json').green);
	console.log('\nPretty JSON:')
	console.log(tiapp.toString('pretty-json').green);
	console.log('\nXML:');
	console.log(tiapp.toString('xml').green);
}());
(function () {
	var tiapp = new appc.tiappxml(path.dirname(module.filename) + '/resources/tiapp1.xml');
	
	console.log('\nReading tiapp1.xml'.cyan);
	console.log('toString():')
	console.log(tiapp.toString().green);
	console.log('\nJSON:')
	console.log(tiapp.toString('json').green);
	console.log('\nPretty JSON:')
	console.log(tiapp.toString('pretty-json').green);
	console.log('\nXML:');
	console.log(tiapp.toString('xml').green);
}());

(function () {
	var tiapp = new appc.tiappxml(path.dirname(module.filename) + '/resources/tiapp1.xml');
	
	tiapp.id = 'com.another.app';
	tiapp.name = 'Another App';
	tiapp.version = '2.0';
	tiapp['deployment-targets'] = { android: false, iphone: true, mobileweb: true };
	tiapp['sdk-version'] = '2.2.0';
	
	console.log('\nReading tiapp1.xml and modifying nodes'.cyan);
	console.log('toString():')
	console.log(tiapp.toString().green);
	console.log('\nJSON:')
	console.log(tiapp.toString('json').green);
	console.log('\nPretty JSON:')
	console.log(tiapp.toString('pretty-json').green);
	console.log('\nXML:');
	console.log(tiapp.toString('xml').green);
}());

(function () {
	var tiapp = new appc.tiappxml(path.dirname(module.filename) + '/resources/tiapp2.xml');
	
	console.log('\nReading tiapp2.xml'.cyan);
	console.log('toString():')
	console.log(tiapp.toString().green);
	console.log('\nJSON:')
	console.log(tiapp.toString('json').green);
	console.log('\nPretty JSON:')
	console.log(tiapp.toString('pretty-json').green);
	console.log('\nXML:');
	console.log(tiapp.toString('xml').green);
}());
