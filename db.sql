-- for help     \?
-- list database    \l
-- Create database    CREATE DATABASE database_Name;
-- Connect to database     \c database_Name;
-- List all tables     \d



CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id, name, location, price_range) VALUES (2, 'mcdonalds', 'new york', 1);