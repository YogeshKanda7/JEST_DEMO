var file = require('fs'),
	supertest = require('supertest'),
	config = require('config'),
	server = supertest("http://api.example.com"),
	mocks = require('./fixtures/http_mocks');


describe('JEST Demo', ()=>{

	test('It should get 200 status code', (done) =>{

		mocks.use(['getUsers'])

		server.get('/users')
		.end( (err, res) =>{
			if(err) done.fail(err);
			expect(res.status).toBe(200);
			done();
		});
	});

	test('It should fail', (done) =>{

		mocks.use(['invalidRoute'])

		server.get('/invalid')
		.end( (err, res) =>{
			if(err) done.fail(err);
			expect(res.status).toBe(404);
			done();
		});
	});

	test('It should return data', (done)=>{

		mocks.use(['getUser1'])

		server.get('/users/1')
		.end( (err, res)=>{
			if(err) done.fail(err);
			expect(res.text.length).toBeGreaterThan(0);
			done();
		});
	});

	it('expect body content must match string', (done)=>{
		mocks.use(['getUser1'])

		server.get('/users/1')
	      .expect('json', {
	        id: 1,
	        email: 'joe.schmoe@example.com'
	      })
	      done();
	})

	it('expectHeader should match regardless of case', (doneFn)=>{
    mocks.use(['getUser1']);

    server.get('/users/1')
      .expect('header', 'conTent-tYpe', 'application/json')
      .done();
  });

	// it('expectHeader should not match with bad regex', (doneFn)=>{
  //   mocks.use(['getUser1']);
	//
  //   server.get('/users/1')
  //     .expectNot('header', 'Content-Type', /jsonx/)
  //     .done(doneFn);
  // });
	//
	// it('expectHeader should fail check for header existence when third argument is not supplied and header is not present', function(doneFn) {
  //   mocks.use(['getUser1']);
	//
  //   server.get('/users/1')
  //     .expectNot('header', 'Custom-Header')
  //     .done(doneFn);
  // });
	//
	// it('should output invalid body and reason in error message', function(doneFn) {
  //   mocks.use(['invalidJSON']);
	//
  //   frisby.setup({ request: { inspectOnFailure: false } })
  //     .get(testHost + '/res/invalid')
  //     .then(function (res) {
  //       fail('this function will never be called.');
  //     })
  //     .catch(function (err) {
  //       expect(err.message).toMatch(/^Invalid json response /);
  //       expect(err.message).toMatch(/body: '.*'/);
  //       expect(err.message).toMatch(/reason: '.+'/);
  //     })
  //     .done(doneFn);
  // });

	// test('It should add data', (done)=>{
	// 	server.post('/addUser', {
	// 		"user4" : {
	// 			"name" : "mohit",
	// 			"password" : "password4",
	// 			"profession" : "teacher",
	// 			"id": 4
	// 		 }
	// 	})
	// 	.end( (err, res)=>{
	// 		if(err) done.fail(err);
	// 		expect(res.text.length).toBeGreaterThan(0);
	// 		done();
	// 	});
	// });

});
