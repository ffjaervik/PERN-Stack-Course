require("dotenv").config();
const express = require("express");

const app = express();


//GET ALL RESTAURANTS
app.get("/api/v1/getRestaurants", (req, res) => {
    res.status(200).json ({
        status:"success",
        data: {
             restaurants: ["mcdonalds", "burger king", "subway"] 
        }
    });
});

// GET RESTAURANT BY ID
app.get("/api/v1/restaurant/:id", (req, res) => {
    console.log(req.params);
});

//CREATE RESTAURANT
app.post("/api/v1/restaurant", (req, res) => {
    console.log(req);
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
