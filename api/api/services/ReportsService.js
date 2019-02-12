const MongoClient = require("mongodb").MongoClient
const test = require("assert")
const url = "mongodb://localhost:27017"
const dbName = "dashboard"
const ObjectID = require("mongodb").ObjectID

module.exports = {
  getReportsFromDB: res => {
    console.log("getting reports collection from dashboard DB!")

    MongoClient.connect(url, (err, client) => {
      test.equal(null, err)
      // Create a collection we want to drop later
      const col = client.db(dbName).collection("reports")
      // get all documents
      col
        .find({
          //blank query
        })
        .toArray((err, result) => {
          if (err) {
            console.warn(err.message) // returns error if no matching object found
          } else {
            console.log(result)
            res
              .status(200)
              .send({ result: result, msg: "aqui van todos los reportes" })
          }
          client.close()
        })
    })
  }
}
