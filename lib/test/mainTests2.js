requirejs.define('mainTests2', [ 
    
], function() {

    "use strict";

    return function(Main) {
    	
    	// start 2nd suite
    	describe('#2 Main Suite:', function(){
    		it('Main Bar.bar', function(){
    			chai.expect(Main.bar.bar).to.equal('foo');
    		});
    		
    		// This test should fail because of our stub at the top of the file
    		it.skip('Main.foo.callback (and stub)', function(){
    			chai.expect(Main.foo.callback()).to.equal('Original');
    		});
    		
    		// ensuring failed tests actually fail
    		it.skip('Array should be 2 (testing a fail)', function(){
    			chai.expect([1,2]).to.have.length(3);
    		});
    		
    		// ...and then continue
    		it('Array should be 3', function(){
    			chai.expect([1,2,3]).to.have.length(3);
    		});	
    	});
            
            
    };
});


