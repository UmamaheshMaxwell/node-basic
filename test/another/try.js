var chai = require("chai"),
	expect = chai.expect,
	should = chai.should();

var isEven = require("../isEven");

	describe.skip("try these", function(){


		it("Should return true if number is even", function(){
			expect(isEven(4)).to.be.true;
			isEven(4).should.be.true;
		})

		it("should return false if number is odd", function(){
			expect(isEven(3)).to.be.false;
			isEven(3).should.be.false;
		})
	})