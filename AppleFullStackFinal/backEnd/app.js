// Importing the mysql2 module for connecting to the MySQL database.
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Creating a connection to the MySQL database anf configure .
const mysqlConnection = mysql.createConnection({
  user: "your username",
  password: "your username",
  host: "127.0.0.1",
  database: "your username",
});

// Connecting to the MySQL database.
mysqlConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

app.get("/install", (req, res) => {
  // SQL queries to create tables for products, product descriptions, and product prices.
  const createProducts = `CREATE TABLE IF NOT EXISTS Products(
    product_id INT AUTO_INCREMENT,
    product_url VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (product_id)
  )`;

  const createProductDescription = `CREATE TABLE IF NOT EXISTS ProductDescription(
    description_id INT AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    product_brief_description TEXT NOT NULL,
    product_description TEXT NOT NULL,
    product_img VARCHAR(255) NOT NULL,
    product_link VARCHAR(255) NOT NULL,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  const createProductPrice = `CREATE TABLE IF NOT EXISTS ProductPrice(
    price_id INT AUTO_INCREMENT,
    product_id INT(11) NOT NULL,
    starting_price VARCHAR(255) NOT NULL,
    price_range VARCHAR(255) NOT NULL,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  // Executing SQL queries to create tables.
  mysqlConnection.query(createProducts, (err) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createProductDescription, (err) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createProductPrice, (err) => {
    if (err) console.log(err);
  });

  // Sending response indicating tables creation completion.
  res.end("Tables Created");
});

// Route to add iPhones to the database and handles HTTP POST requests

app.post("/addiphones", (req, res) => {
  // Extracting iPhone details from the request body.
  // data extraction
  const { products } = req.body;

  // Loop through each product and insert into the database.
  //   Insertion Loop:

  products.forEach((product) => {
    const {
      product_url,
      product_img,
      product_link,
      product_name,
      product_brief_description,
      starting_price,
      price_range,
      product_description,
    } = product;

    // SQL query to add iPhone details to the Products table.
    const sqlAddToProducts = `INSERT INTO Products (product_url, product_name) VALUES ('${product_url}', '${product_name}')`;

    // Executing SQL query to add iPhone details to the Products table.
    mysqlConnection.query(sqlAddToProducts, (err, result) => {
      if (err) throw err; // Throw error if insertion fails

      // Getting the ID of the added product.
      const addedProductId = result.insertId;

      // SQL query to add iPhone details to the ProductDescription table.
      const sqlAddToProductDescription = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (${addedProductId}, '${product_brief_description}', '${product_description}', '${product_img}', '${product_link}')`;

      // Executing SQL query to add iPhone details to the ProductDescription table.
      mysqlConnection.query(sqlAddToProductDescription, (err) => {
        if (err) throw err; // Throw error if insertion fails
      });

      const sqlAddToProductPrice = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (${addedProductId}, '${starting_price}', '${price_range}')`;

      mysqlConnection.query(sqlAddToProductPrice, (err) => {
        if (err) throw err;
      });
    });
  });

  // Sending response indicating successful product addition.
  res.end("Products added");
});

// Route to fetch iPhone details from the database.
app.get("/iphone", (req, res) => {
  // SQL query to fetch iPhone details from multiple tables using JOIN.
  const sqlQuery = `SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id`;

  // Executing SQL query to fetch iPhone details.
  mysqlConnection.query(sqlQuery, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ products: rows });
    }
  });
});

const port = 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
