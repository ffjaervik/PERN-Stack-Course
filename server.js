require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();


app.use(express.json());


//GET ALL RESTAURANTS
app.get("/api/v1/restaurants", (req, res) => {
    console.log("GET ALL RESTAURANTS");
    res.status(200).json ({
        status:"success",
        data: {
             restaurants: ["mcdonalds", "burger king", "subway"] 
        }
    });
});

// GET RESTAURANT BY ID
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json ({
        status:"success",
        data: {
            restaurant: "mcdonalds"
        }
    });
});

//CREATE RESTAURANT
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json ({
        status:"success",
        data: {
            restaurant: "mcdonalds"
        }
    });
});

//UPDATE RESTAURANT
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json ({
        status:"success",
        data: {
            restaurant: "mcdonalds"
        }
    });
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
