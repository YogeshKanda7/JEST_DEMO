const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks');

describe('Categories route', ()=>{

    response_limit = 2;
    page_limit = 1;

    it('should return 200 status code', (done) =>{

        mocks.use(['listAllCategories']);

        request.get('/v1/categories')
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            if(err) done.fail(err);
            // console.log(res.status, res.headers);
            // console.log(res.body);
            expect(res.status).toBe(200);
            expect()
            done();
        });
    });
    
    it('should return specified limit of data in response body', (done) =>{



        mocks.use(['listAllCategories']);

        request.get('/v1/categories?limit=' + response_limit + '&page=' + page_limit)
        .set("X-Api-Key", config.get("app.api-key"))
        .end( (err, res) =>{
            
            if(err) done.fail(err);
            // console.log(res.status, res.headers);
            //     res.on('data', function (chunk) {
            //         // str += chunk;
            //   });

            //     res.on('end', function () {
            //         // console.log(str);
            //   });

            // res.on(res, function(body){
            //     console.log("inside response.on");
            //     console.log(body);
            // });
            // expect(res.status).toBe(200);
            // expect()
            done();
        });
    });

});