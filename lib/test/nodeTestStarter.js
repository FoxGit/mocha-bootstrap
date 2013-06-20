requirejs = require('requirejs');
chai = require('chai');

requirejs.config({
  baseUrl: __dirname
});

"use strict";

// our test file is declared here, but loaded async
var Main;

beforeEach(function(done){
	// beforeEach will cause the suites to fire async if the `done`
	// parameter is used. Function.length > 0 tells mocha to pause
	// until the callback is fired - done() in this case
	
	// load our file
	// Must use a fully qualified path, as requirejs is first invoked here;
	// it does not recognize relative paths from the spec
	console.log(process.cwd());
	console.log(__dirname);

	requirejs(['../src/Main'], function(_Module){
		// set our declared test file
		Main = _Module;
		done();
		
		// this unloads our stub, in case other specs need to use
		// the original
		requirejs.undef('../src/Foo');
	});
});

describe('#1 Main Suite:', function(){
	it('main test', function(done){
		requirejs([
		    'mainTests1', 
		    'mainTests2',
		    'otherTests1'
		], function(
		    mainTests1,
		    mainTests2,
		    otherTests1
		) {
			
			"use strict";
			describe("Specs stepfolio", function() {
				mainTests1(Main);
				mainTests2(Main);
				otherTests1();
				//without done mocha does not wait and no tests are executed
				done();
			});
			
		});
	});
});


