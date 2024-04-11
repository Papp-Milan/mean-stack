const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://pappmilan:sandbox@sandbox.m8ahpn3.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('test');
    const names = database.collection('collection');

    const query = { name: 'Levente' };
    const name = await names.findOne(query);

    console.log(name);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);