var chai =require("chai"),
	expect = chai.expect;
	should = chai.should();


	function getTheValue(){

	}

describe.skip("Language Chains Test Suite", function(){
	it("not assertions", function(){
		var foo ="buck";		
		expect(foo).to.not.equal('bar');
		foo.should.not.equal("bar");

		function sample(){
			return "hello";
		}
		expect(sample).to.not.throw(Error);
		sample.should.not.throw(Error);

		var obj = { name: 'baz' };

		expect(obj).to.have.property('name').and.not.equal('bar');
		obj.should.have.property("name").and.not.equal("bar");
	})

	it("deep assertion", function(){

		var obj ={ city: 'Bengaluru' }
		expect(obj).to.deep.equal({ city: 'Bengaluru' });

		var objOne = { 				
						foo: {
							 
							 	bar: { 

							 		name: 'Tuan'
							  	}
					 		}
		 			}

		expect(objOne).to.have.deep.property('foo.bar.name').to.be.equal("Tuan");

		var deepCss = { '.link': { '[target]': 42 }};
		expect(deepCss).to.have.deep.property("\\.link.\\[target\\]", 42);

	})

	it("any assertion", function(){
			var sample ={
				name: "uma",
				city: "bengaluru"
			}
			expect(sample).to.have.any.keys("name", "citys", "mobile", "date");
			sample.should.have.any.keys("name", "citys", "mobile", "date");
	})

	it("all assertion", function(){
			var sample ={
				name: "uma",
				city: "bengaluru"
			}	
			expect(sample).to.have.all.keys("name","city")
			sample.should.have.all.keys("name","city");	
	})

	it("a and an seertions", function(){
		expect('boston').to.be.a('string');
		("boston").should.be.a("string")
		expect({ foo: 'bar' }).to.be.an('object');
		expect(null).to.be.a('null');
		//(null).should.be.a("null");
	})

	it("include assertion", function(){
		expect([1,2,3]).to.include(2,5,4);
		expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

	})

	it("Property assertion", function(){
		// simple referencing
		var obj = { foo: 'beer' ,
					city: "hyd"};
		expect(obj).to.have.property('foo').to.be.equal("beer").with.length(4);
		expect(obj).to.have.property('foo', 'beer');		
	})

	it("match assertion", function(){
		//expect("Bengaluru").to.match(/^gal/);
		expect('99BEfoobar').to.match(/^[0-9, a-z, A-Z]/);
	})
})
