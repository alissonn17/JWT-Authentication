import supertest from "supertest";
import app from "./index.js";

var token = ""; 

test("Post /auth/login", async () => {
    await supertest(app)
        .post("/auth/login")
        .send({
            username: "admin",
            password: "admin"
        })
        .expect(200)
        .then((response)=>{
            (token = response.body.token);
        });
});

test("Post /auth/logout", async () =>{
    await supertest(app)
        .post("/auth/logout")
        .set('Authorization', 'Bearer ' + (token))
        .then((response)=>{
            expect(response.body.token).toBe(null);
        });
});

test("Get /auth/clientes", async () =>{
    await supertest(app)
        .get("/auth/clientes")
        .set('Authorization', 'Bearer ' + (process.env.TEST_TOKEN || token))
        .then((response)=>{
            expect(response.body = [
            {id:1,nome:'luiz'},
            {id:2,nome:'Fabio'},
            {id:3,nome:'Pedro'},
        ]);
        });
} );
