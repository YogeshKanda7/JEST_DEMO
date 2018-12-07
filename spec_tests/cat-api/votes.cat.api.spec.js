const superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV),
mocks = require('../fixtures/http_mocks');

describe('Votes route', ()=>{
    var vote_id = 123;

    it('should create a vote for selected image', (done) =>{

        request.post('/v1/votes')
        .send({
            "image_id": "asf2",
            "value": 1
        })
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            console.log(res.body);
            vote_id = res.body.id;
            done();
        });
    });

    it('should return votes created by user', (done) =>{

        request.get('/v1/votes')
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            console.log(res.body);
            done();
        });
    });

    it('should return vote specified', (done) =>{
        request.get('/v1/votes/' + vote_id)
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.id).toBe(vote_id);
            done();
        });
    });

    it('should delete specified vote', (done) =>{
        request.delete('/v1/votes/' + vote_id)
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("SUCCESS");
            done();
        });
    });

});