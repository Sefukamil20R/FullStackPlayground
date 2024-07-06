const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
// const uuid = require("uuid");
let server = express();

server.use(bodyparser.urlencoded({ extended: true }));
//creating mysql connections
let connecttomysql = mysql.createConnection({
  user: "sefinaaa",
  password: "sefu@123kamil",
  host: "localhost",
  database: "datadb",
});
// conncted to databases
connecttomysql.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to database");
});

server.get("/install", (req, res) => {
  let resback = "Tables are created";
  // queries for table creation
  let product_table = `create table  if not exists products  (
    product_id int auto_increment,
    product_url varchar(255) not null,
    product_name varchar(255) not null,
    PRIMARY KEY (product_id)

  )`;
  let Description_table = `create table if not exists ProductDescription(
    description_id int auto_increment,
    product_id int not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)

  )`;
  let price_table = `CREATE TABLE  if not exists ProductPrice(
    price_id int auto_increment,
    product_id int not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  )`;
  let user_table = `CREATE TABLE  if not exists User(
    user_id int auto_increment,
    User_name int not null,
    user_password VARCHAR(36) not null,
    PRIMARY KEY (user_id)
  )`;

  let createProductOrders = `CREATE TABLE if not exists ProductOrders(
    Order_id int auto_increment,
    product_id int(11) not null,
    User_id int(11) not null,
    PRIMARY KEY (Order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
     FOREIGN KEY (User_id) REFERENCES User(User_id)
)`;

  // executing query for table creation
  connecttomysql.query(product_table, (err, results, fields) => {
    if (err) console.log(err);
  });
  connecttomysql.query(Description_table, (err, results, fields) => {
    if (err) console.log(err);
  });
  connecttomysql.query(price_table, (err, results, fields) => {
    if (err) console.log(err);
  });
  connecttomysql.query(user_table, (err, results, fields) => {
    if (err) console.log(err);
  });
  connecttomysql.query(createProductOrders, (err, results, fields) => {
    if (err) console.log(err);
  });
  res.end(resback);
});

// part 2 ######################################################

// // Insert a new product
server.post("/add-products", (req, res) => {
  // console.log(bodyparser.json);
  // console.log(req.body.product_id);
  let Id = req.body.product_id;
  let img = req.body.proPath;
  let Url = req.body.productlink;
  let Title = req.body.productname;
  let Brief = req.body.briefDescription;
  let StartPrice = req.body.StartPrice;
  let PriceRange = req.body.priceRange;
  let Description = req.body.fullDescription;

  // let newProductId = 0;

  let AddToProducts =
    "INSERT INTO Products (product_url, product_name) VALUES ('" +
    Id +
    "', '" +
    Title +
    "' )";

  connecttomysql.query(AddToProducts, function (err, result) {
    if (err) throw err;
    console.log("new record inserted");
  });
});

//   connecttomysql.query(
    "SELECT * FROM Products WHERE product_url = '" + Id + "' ",
    (err, rows, fields) => {
      newProductId = rows[0].product_id;
      console.log(newProductId);
      if (err) console.log(err);

      if (newProductId != 0) {
        let AddToProductDescription =
          "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('" +
          newProductId +
          "', '" +
          Brief +
          "', '" +
          Description +
          "', '" +
          img +
          "', '" +
          Url +
          "' )";

        let AddToProductPrice =
          "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
          newProductId +
          "', '" +
          StartPrice +
          "', '" +
          PriceRange +
          "')";

        mysqlConnection.query(AddToProductDescription, function (err, result) {
          if (err) throw err;
          console.log("Product description inserted");
        });

        mysqlConnection.query(AddToProductPrice, function (err, result) {
          if (err) throw err;
          console.log("Product price inserted");
        });
      }
    }
  );
  res.end("Products are added");
});

server.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});
// using join keyword it selcts all columns of the three table products , productsprice and productsdescription where their products id matches
// call back function
// err: Contains any error that occurred during the execution of the query.
// rows: Contains the result rows returned by the query.
// fields: Contains metadata about the result fields (columns).
// it initializes an object iphones with an empty array products.(let iphones = { products: [] };)
// It then assigns the fetched rows to iphones.products
// it converts the iphones object to a JSON string using JSON.stringify()
// If there are no errors(!err), it sends the JSON string as the response using res.end().

server.listen(3001, () => {
  console.log("Server is running on port 3200");
});
