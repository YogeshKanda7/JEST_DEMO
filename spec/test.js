var file = require('fs'),
	supertest = require('supertest'),
	server = supertest('127.0.0.1:8081');

	console.log(global.baseurl);

describe('JEST Demo', ()=>{
	
	test('It should get 200 status code', (done) =>{
		server.get('/listUsers')
		.end( (err, res) =>{
			if(err) done.fail(err);
			expect(res.status).toBe(200);
			done();
		});
	});

	test('It should fail', (done) =>{
		server.get('/listUsers')
		.end( (err, res) =>{
			if(err) done.fail(err);
			expect(res.status).toBe(500);
			done();
		});
	});

	test('It should return data', (done)=>{
		server.get('/listUsers')
		.end( (err, res)=>{
			if(err) done.fail(err);
			expect(res.text.length).toBeGreaterThan(0);
			done();
		});
	});

	test('It should add data', (done)=>{
		server.post('/addUser', {
			"user4" : {
				"name" : "mohit",
				"password" : "password4",
				"profession" : "teacher",
				"id": 4
			 }
		})
		.end( (err, res)=>{
			if(err) done.fail(err);
			expect(res.text.length).toBeGreaterThan(0);
			done();
		});
	});

});