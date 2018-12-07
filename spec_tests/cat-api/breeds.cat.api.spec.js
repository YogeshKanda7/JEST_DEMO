const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks');

describe('Breeds route', ()=>{

    it('should return 200 status code', (done) =>{

        mocks.use(['listAllCatBreeds']);

        request.get('/v1/breeds')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            console.log(res.status, res.headers);
            console.log(res.body);
            expect(res.status).toBe(200);
            expect()
            done();
        });
    });
});