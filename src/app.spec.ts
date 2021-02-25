import { app } from "./app";
import chai from "chai";
import chaiHttp from "chai-http";

import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Ping API Request", () => {
  it("should return hello on call", async () => {
    return chai
      .request(app)
      .get("/api/ping")
      .then(res => {
        chai.expect(res.text).to.eql('{"message":"pong"}');
      });
  });
});