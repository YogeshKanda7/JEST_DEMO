'use-strict';

const nock = require('nock');
const mockHost = "http://api.example.com"
const mocks = {

		/*
		 * users
		 */
		getUsers(){
			return nock(mockHost)
			.get('/users')
			.reply(200, {
				source: [
				       {
				    	id:1,
				    	email:'sample@example.com'
				       },
				       {
				    	id:2,
				    	email:'second@example.com'
				       }
				]
			});
		},
		getUser1() {
		    return nock(mockHost)
		      .get('/users/1')
		      .reply(200, {
		        id: 1,
		        email: 'joe.schmoe@example.com'
		      });
		  },
			createUser() {
    		return nock(mockHost)
		      .post('/users', {
		        email: 'user@example.com',
		        password: 'password'
		      })
		      .reply(201, {
		        id: 2,
		        email: 'user@example.com'
		      });
  		},

			/**
	   * Errors
	   */
	  timeout() {
	    return nock(mockHost)
	      .get('/timeout')
	      .delay(500)
	      .reply(200, {
	        timout: 2000
	      });
	  },

	  postError() {
	    return nock(mockHost)
	      .post('/error')
	      .reply(400, {
	        result: 'error'
	      });
	  },

	  invalidJSON() {
	    return nock(mockHost)
	      .get('/res/invalid')
	      .reply(200, '{"aaa":}', {
	        'Content-Type': 'application/json'
	      });
	  },

		invalidRoute() {
	    return nock(mockHost)
	      .get('/invalid')
	      .reply(404, '{"message":"Page not found"}', {
	        'Content-Type': 'application/json'
	      });
	  }
};

module.exports.use = function (mocksRequested, callback) {
	  mocksRequested.forEach(function(mockName) {
	    if (typeof mocks[mockName] === 'undefined') {
	      throw new Error("Mock '" + mockName + "' is not defined in 'mocks' object. Unknown mock requested.");
	    }

	    var result = mocks[mockName].call(this);


	    if (callback) {
	      //console.log(result);
	      callback.call(this, result);
	    }
	  });
	};
