// 6. Create "myWebServer" module
// a. Inside of your myWebServer module, create a web server which listens to requests
// on port 1234
// ■ Note: It is a good practice to write a custom message such as
// console.log(“Server running”) in your server listener you create to check
// if your server is running and listening to requests
// b. Run your "myWebServer" module on your terminal to check if your server is
// listening to requests at port 1234
// c. Inside of your "myWebServer" module, write your request listener function as a
// callback inside of the server you created above. This function should return the
// following text message "Request received and processed" to the browser.
// d. Run your "myWebServer" module on your terminal and go to your browser and
// type “localhost:1234” to check if your browser displays the "Request received and
// processed " message sent from your server
//*************************************************************** */
// const http = require("http"); //including the module

// // Create the server
// const server = http.createServer();
// http.createServer((req, res) => {
//   // Request listener function
//   res.write("Request received and processed");
//   res.end(); // ending the response
// });

// // Listen on port 1144
// server.listen(1544, () => {
//   console.log("Server is running on port 1244");
// });
//************************************************************************** */
// 7. Inside your "myWebServer" module
// a. Import your "randomNumber" module inside of your "myWebServer" module.
// Now, generate a random number using the random() function from the
// "randomNumber" module and return the generated random number to the client
// browser when request is sent to port 1234
// *********************************************************//
// const http = require("http"); //including the module
// const rand1 = require("./randomNumber");

// const server = http.createServer((req, res) => {
//   let num = rand1.random();
//   res.write(`The generated random number is : ${num}`);

//   res.end(); // ending the response
// });

// // Listen on port 1114
// server.listen(1114, () => {
//   console.log("Server is running on port 1114");
// });
// ********************************************************
// 8. Create a new folder called "static"
// a. Inside the "static" folder, save the “apple html css replica” folder by
// downloading and extracting it
// b. Add a sample "about.html" page inside of your “apple html css replica” folder
// you just downloaded. Open your "about.html” file and add the text ‘This is
// coming from my "about page ” ’
// c. Modify your request listener function in a way it would serve the "about.html"
// page when users request it on the browser
// ■ Hint: You will need to import additional node modules to display your
// “about.html” page when users request it on the browser
// d. Don’t forget to run your module on your terminal to keep your server running.
// Now, go to your browser and type “localhost:1234” to see the ‘This is coming
// from my "about page ” ’ text sent to your browser
// e. Now, modify your listener function in a way that it serves any of the pages inside
// of your "static" folder when requested
// ************************************************
// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// const server = http.createServer(function (req, res) {
//   const parsedUrl = url.parse(req.url, true);
//   console.log(parsedUrl);
//   let filePath = parsedUrl.path;
//   var requestedFile = __dirname + "/Static/" + "/apple/" + filePath;

//   if (filePath === "/about.html") {
//     fs.readFile(requestedFile, function (err, content) {
//       if (err) {
//         res.writeHead(404);
//         res.end();
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     });
//   } else {
//     res.write("wrong entry");
//     res.end();
//   }
// });
// server.listen(7996, function () {
//   console.log("Listening to port 7996");
// });
// ######################################################
// e. Now, modify your listener function in a way that it serves any of the pages inside
// of your "static" folder when requested
const http = require("http");
const url = require("url");
const fs = require("fs");
const mimetypelookup = require("mime-types").lookup;
let mime;
const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  console.log(__dirname);
  let filePath = parsedUrl.path;

  if (filePath == "/") {
    filePath = "/index.html";
  }
  var requestedFile = __dirname + "/Static/" + "/apple/" + filePath;

  const readfile = fs.readFile(requestedFile, function (err, content) {
    if (err) {
      res.writeHead(404);
      res.end();
    } else {
      mime = mimetypelookup(filePath);
      res.writeHead(200, { "content-type": mime });
      res.end(content);
    }
  });
});
server.listen(7996, function () {
  console.log("Listening to port 7996");
});
