var chai = require("chai"),
	expect = chai.expect,
	should = chai.should();

var isEven = require("./isEven");


describe("Top one", function(){

	describe("Sample test cases", function(){


		it("Should return true if number is even", function(){
			expect(isEven(4)).to.be.true;
			isEven(4).should.be.true;
		})

		it("should return false if number is odd", function(){
			expect(isEven(3)).to.be.false;
			isEven(3).should.be.false;
		})
	})

	function add(num1, num2){
		return num1 + num2;
	}

	describe("check the functionality of beforeeach", function(){

		var num;

		beforeEach(function(){
			num = 5;
		})

		it("should return Ten if we add 5 + 5", function(){
			num = add(num , 5);
			num.should.be.equal(10);
		})

		it("should return tewlvw if we add 5 +7", function(){
			num = add(num, 7)
			num.should.be.equal(12);
		})
	})	
})