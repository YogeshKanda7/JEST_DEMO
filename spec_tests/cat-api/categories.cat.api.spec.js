const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks');

describe('Categories route', ()=>{

    it('should return 200 status code', (done) =>{

        mocks.use(['listAllCategories']);

        request.get('/v1/categories')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect()
            done();
        });
    });

    it('should return specified limit of data in response body', (done) =>{

        mocks.use(['limitedCategories']);

        request.get('/v1/categories?limit=2&page=1')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.length).toEqual(2);
            expect()
            done();
        });
    });

});
