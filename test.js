var assert = require("chai").assert,
	expect = require("chai").expect,
    should = require("chai").should();


describe("My First Test Suite", function(){

	before("Before Evry test case", function(){
		console.log("I am Before")
	})
	beforeEach("Before Evry test case", function(){
		console.log("I am BeforeEach")
	})
	after("Before Evry test case", function(){
		console.log("I am after")
	})
	afterEach("Before Evry test case", function(){
		console.log("I am after each")
	})	


	it("should return true", function(){
		var name ="Scott";

		expect(name).to.be.string;
		expect(name).to.be.equal("Scott");
	});
	

	it("should return something", function(){
		var name ="Scott";

		expect(name).to.be.string;
		expect(name).to.be.equal("Scott");
	});

	it("should return anything", function(){
		var name ="Scott";

		expect(name).to.be.string;
		expect(name).to.be.equal("Scott");
	});

})

