var chai = require("chai"),
	expect = chai.expect,
	should = chai.should(),
	sinon = require("sinon");

describe("Contact API Test Suite", function(){
	var student;

	before(function(){
		student= {
			dropClass : function(id,callback){
				callback();
			}
		}
	})
	it("Student with spi", function(){
		
		var spy = sinon.spy();

		student.dropClass(1, spy)
		spy.called.should.be.true;
	})

	it("student with spy with logining to console", function(){

		function callback(){
			console.log("I am called");
		}

		var spy = sinon.spy(callback);
		student.dropClass(1, spy)
		spy.called.should.be.true;
	})

	it("student callback method count", function(){

		 var studentObject = { Hello: function () {} };

		   var spy = sinon.spy(studentObject, "Hello");

		   spy.withArgs(1);
   			
   			studentObject.Hello(1);
   			studentObject.Hello(1);
   			studentObject.Hello(1);

   			 (spy.withArgs(1).callCount).should.be.equal(3);

	})

});