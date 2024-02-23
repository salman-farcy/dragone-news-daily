require("dotenv").config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = 5000
const cors = require("cors");



app.use(cors());
app.use(express.json());



//DB URI
const uri = "mongodb+srv://dragone-news-daily:kJNVNbCaXSxW8eWf@cluster0.rb5g6hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


//MongoDB Connection
const client = new MongoClient(uri, {
     serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
     }
});


async function run() {
     try {
          // Connect the client to the server	(optional starting in v4.7)
          //   await client.connect();

          const db = client.db("dragone-news-daily");
          const categoriesCollection = db.collection("categories");
          const newsCollection = db.collection("news");
          // get all news
          app.get("/all-news", async (req, res) => {
               const allNews = await newsCollection.find({}).toArray();
               res.send({ status: true, message: "success", data: allNews });
          });

          // get specific news
          app.get("/news/:id", async (req, res) => {
               const id = req.params.id;
               const news = await newsCollection.findOne({ _id: ObjectId(id) });
               res.send({ status: true, message: "success", data: news });
          });

          // get all categories
          app.get("/categories", async (req, res) => {
               const categories = await categoriesCollection.find({}).toArray();
               res.send({ status: true, message: "success", data: categories });
          });

          // get specific categories
          app.get("/news", async (req, res) => {
               const name = req.query.category;
               let newses = [];
               if (name == "all-news") {
                    newses = await newsCollection.find({}).toArray();
                    return res.send({ status: true, message: "success", data: newses });
               }
               newses = await newsCollection
                    .find({ category: { $regex: name, $options: "i" } })
                    .toArray();
               res.send({ status: true, message: "success", data: newses });
          });



          // Send a ping to confirm a successful connection
          await client.db("admin").command({ ping: 1 });
          console.log("Pinged your deployment. You successfully connected to MongoDB!");
     } finally {
          // Ensures that the client will close when you finish/error
          //   await client.close();
     }
}
run().catch(console.dir);




app.get('/', (req, res) => {
     res.send('Welcome to the Dragon News Server!')
})

app.listen(port, () => {
     console.log(`dragone news daily server listening on port ${port}`)
})