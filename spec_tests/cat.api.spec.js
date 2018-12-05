var file = require('fs'),
superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV);


// extend with Request#proxy()
require('superagent-proxy')(request);
 
// HTTP, HTTPS, or SOCKS proxy to use
var proxy = process.env.http_proxy || 'http://internetpu:8085';
 
describe('JEST Demo', ()=>{
    test('It should get 200 status code', (done) =>{
        mocks.use(['getUsers'])

        request.get('/favourites')
        .set("x-api-key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .proxy(proxy)
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            done();
        });
    });
});