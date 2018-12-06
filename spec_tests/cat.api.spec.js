var file = require('fs'),
superTest = require('supertest'),
config = require('config'),
request = superTest(global.ENV);
 
var d = new Date();
this.vote_id = 123;
this.image_id = 123;

describe('Cat API', ()=>{
    it('should return 200 status code', (done) =>{

        request.get('v1/breeds')
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            done();
        });
    });

    it('should get a list of cat breeds', (done) =>{

        request.get('v1/breeds')
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            console.log(res.headers);
            done();
        });
    });

    it('should return a list of categories', (done) =>{

        request.get('v1/categories')
        .set({
            "Content-Type": "application/json",
            "X-Api-Key" : "04cf3299-801e-4eac-b899-31c16488f94e"
        })
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            console.log(res.headers);
            // expect(res.headers).to.
            done();
        });
    });

    it('should create a vote for selected image', (done) =>{

        request.post('v1/votes')
        .send({
            "image_id": "asf2",
            "value": 1
        })
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            console.log(res.body);
            this.vote_id = res.body.id;
            done();
        });
    });

    it('should return votes created by user', (done) =>{

        request.get('v1/votes')
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            console.log(res.body);
            done();
        });
    });

    it('should return vote specified', (done) =>{
        request.get('v1/votes/' + this.vote_id)
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.id).toBe(this.vote_id);
            done();
        });
    });

    it('should delete specified vote', (done) =>{
        request.delete('v1/votes/' + this.vote_id)
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("SUCCESS");
            done();
        });
    });

    it('should save an image as favourite', (done) =>{
        request.post('v1/favourites')
        .send({
            "image_id": "asf2",
        })
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("SUCCESS");
            this.image_id = res.body.id;
            done();
        });
    });

    it('should return all favourites', (done) =>{
        request.get('v1/favourites')
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            console.log(res.body);
            done();
        });
    });

    it('should return specified favourite image', (done) =>{
        request.get('v1/favourites/' + this.image_id)
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.id).toBe(this.image_id);
            done();
        });
    });

    it('should delete specified favourite image', (done) =>{
        request.delete('v1/favourites/' + this.image_id)
        .set("X-Api-Key", "04cf3299-801e-4eac-b899-31c16488f94e")
        .end( (err, res) =>{
            if(err) done.fail(err);
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("SUCCESS");
            done();
        });
    });

});