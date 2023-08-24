import crypto from "crypto";

const algorithm = "sha256";
const key = crypto.randomBytes(32);

const hash = crypto.createHash(algorithm, key).update("test").digest("hex");

console.log(hash);
