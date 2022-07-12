require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();


app.use(express.json());
app.use(morgan("dev"));


//GET ALL RESTAURANTS
app.get("/api/v1/restaurants", async (req, res) => {

    try{
        const results = await db.query("SELECT * FROM restaurants");
        console.log(results.rows);
        res.status(200).json ({
            status:"success",
            results: results.rows.length,
            data: {
                 restaurants: results.rows
            }
        });
    } catch(err){
        console.log(err);
    }
});

// GET RESTAURANT BY ID
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id);
    try { 
        const results = await db.query(
            `SELECT * FROM restaurants WHERE id = $1`, [req.params.id]);

        res.status(200).json ({
            status:"success",
            data: {
                restaurant: results.rows[0]
            }
        });
        } catch(err){
            console.log(err);
        }
});

//CREATE RESTAURANT
app.post("/api/v1/restaurants", async (req, res) => {
    try{
        const results = await db.query( `INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) RETURNING *`, [req.body.name, req.body.location, req.body.price_range]);
        console.log(req.body);
        res.status(201).json ({
            status:"success",
            data: {
                restaurant: results.rows[0]
            }
        });

    } catch(err){
        console.log(err);
    }

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

//DELETE RESTAURANT
app.delete("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    res.status(204).json ({
        status:"success",
    });
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});