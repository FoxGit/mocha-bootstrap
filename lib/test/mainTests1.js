requirejs.define('mainTests1', [ 
    
], function() {

    "use strict";

    return function(Main) {
    	
    	// start 1st suite
    	describe('#1 Main Suite:', function(){
    		it('Main.test', function(){
    			chai.expect(Main.test).to.equal(true);
    		});
    	});        
    };
});


