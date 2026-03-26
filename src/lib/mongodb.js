import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add MONGODB_URI to your environment variables.");
}

let cached = global._mongo;

if (!cached) {
  cached = global._mongo = { client: null, promise: null };
}

export async function getMongoClient() {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri, {});
  }

  cached.client = await cached.promise;
  return cached.client;
}
