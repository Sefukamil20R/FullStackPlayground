const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
  origin: "http://localhost:5174",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

const mysqlConnection = mysql.createConnection({
  user: "myDBuser13",
  password: "Sorry499833$$",
  host: "localhost",
  database: "mydb12",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database");
  }
});

app.get("/install", (req, res) => {
  const message = "Tables Created";
  const createProducts = `CREATE TABLE if not exists Products(
      product_id int auto_increment,
      product_url varchar(255) not null,
      product_name varchar(255) not null,
      PRIMARY KEY (product_id)
  )`;
  const createProductDescription = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int(11) not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  const createProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,    
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  mysqlConnection.query(createProducts, (err) => {
    if (err) {
      console.error("Error creating Products table:", err);
    }
  });
  mysqlConnection.query(createProductDescription, (err) => {
    if (err) {
      console.error("Error creating ProductDescription table:", err);
    }
  });
  mysqlConnection.query(createProductPrice, (err) => {
    if (err) {
      console.error("Error creating ProductPrice table:", err);
    }
  });

  res.end(message);
});

app.post("/addiphones", (req, res) => {
  const {
    iphoneId,
    imgPath,
    iphoneLink,
    iphoneTitle,
    briefDescription,
    StartPrice,
    priceRange,
    fullDescription,
  } = req.body;

  let addedProductId = 0;

  const sqlAddToProducts = `INSERT INTO Products (product_url, product_name) VALUES ('${iphoneId}', '${iphoneTitle}')`;

  mysqlConnection.query(sqlAddToProducts, (err) => {
    if (err) {
      console.error("Error inserting into Products table:", err);
    } else {
      console.log("1 record inserted into Products");
    }
  });

  mysqlConnection.query(
    `SELECT * FROM Products WHERE product_url = '${iphoneId}'`,
    (err, rows) => {
      if (err) {
        console.error("Error selecting from Products table:", err);
      } else {
        addedProductId = rows[0].product_id;
        console.log("Added product id:", addedProductId);

        if (addedProductId !== 0) {
          const sqlAddToProductDescription = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('${addedProductId}', '${briefDescription}', '${fullDescription}', '${imgPath}', '${iphoneLink}')`;

          const sqlAddToProductPrice = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('${addedProductId}', '${StartPrice}', '${priceRange}')`;

          mysqlConnection.query(sqlAddToProductDescription, (err) => {
            if (err) {
              console.error("Error inserting into ProductDescription table:", err);
            } else {
              console.log("Product description inserted");
            }
          });

          mysqlConnection.query(sqlAddToProductPrice, (err) => {
            if (err) {
              console.error("Error inserting into ProductPrice table:", err);
            } else {
              console.log("Product price inserted");
            }
          });
        }
      }
    }
  );
  res.end("Product added");
});

app.get("/iphones", (req, res) => {
  const query = `SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id`;

  mysqlConnection.query(query, (err, rows) => {
    if (err) {
      console.error("Error selecting products:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const iphones = { products: rows };
      const stringIphones = JSON.stringify(iphones);
      res.end(stringIphones);
    }
  });
});

const PORT = 3009;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
