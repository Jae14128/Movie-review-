//import packages 
import cors from "cors";
import express from "express";
import { db } from "./dbConnection";


//initialise express server
const app=express();

//tell server to manipulate data into json form
app.use(express.json());

//set local host to run the server that runs in the address
const PORT= 5500;
app.listen(PORT, () => {
    console.log(`Server is operating in port ${{PORT}}`)
});

//set up root cause of server, it needs to read GET
app.get("/", function (req, res) {
    res.json ({message: "This is the root route."})
});

//route needs to READ all data from the table
app.get("/review", async (req,res) => {
const result= await db.query(`SELECT * FROM review`)
//parse values into JSON & wrangle the data
res.json(result.rows);
});


