var file = require('fs'),
superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV);
 
describe('JEST Demo', ()=>{
    test('It should get 200 status code', (done) =>{

        request.get('v1/favourites')
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            done();
        });
    });
});