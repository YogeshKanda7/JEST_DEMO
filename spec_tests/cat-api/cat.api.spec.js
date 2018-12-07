var file = require('fs'),
superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks');

describe('JEST Demo', ()=>{
    // test('\/breeds route shall return 200 response', (done) =>{
    //
    //     mocks.use(['listAllCatBreeds']);
    //
    //     request.get('/v1/breeds')
    //     .set("X-Api-Key", config.get("app.api-key"))
    //     .end( (err, res) =>{
    //         if(err) done.fail(err);
    //         console.log(res.status, res.headers);
    //         console.log(res.body);
    //         expect(res.status).toBe(200);
    //         expect()
    //         done();
    //     });
    // });

    // test('\/categories route shall return 200 response', (done) =>{
    //
    //     mocks.use(['listAllCategories']);
    //
    //     request.get('/v1/categories')
    //     .set("X-Api-Key", config.get("app.api-key"))
    //     .end( (err, res) =>{
    //         if(err) done.fail(err);
    //         console.log(res.status, res.headers);
    //         console.log(res.body);
    //         expect(res.status).toBe(200);
    //         expect()
    //         done();
    //     });
    // });
    test('\/favourites route shall return 200 response', (done) =>{

        mocks.use(['listAllFavourities']);

        request.get('/v1/favourites')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            console.log(res.status, res.headers);
            console.log(res.body);
            expect(res.status).toBe(200);
            done();
        });
    });
});
