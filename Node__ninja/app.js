// import {counter,adder,pi} from './stuff.js';
// console.log(counter(['shaun', 'crystal', 'ryu']));
// console.log(adder(5,6));
// console.log(adder(pi,5))
// const events = require('events');
// const myEmitter = new events.EventEmitter();
// myEmitter.on('some_event', function(message){
//     console.log(message);
// });
// myEmitter.emit('some_event', 'the event was emitted');
// const events = require('events');
// const util = require('util');
// const person = function(name){
//     this.name = name;
// };
// util.inherits(person, events.EventEmitter);
// const james = new person('james');
// const mary = new person('mary');
// const ryu = new person('ryu');
// const people = [james, mary, ryu];
// people.forEach(function(person){
//     person.on("speak", function(message){
//    console.log(person.name + ":" + message);
//     })
// });
// james.emit('speak','hey dudes');
// mary.emit('speak','hey james');
// ryu.emit('speak','I want a curry');

// writing and reading from file synchronously

// const fs =  require('fs');
// const data = fs.readFileSync('readmep.txt','utf8');
// fs.writeFileSync('readmep2.txt',data);

// writing and reading file asynchronously
// const fs = require('fs');

// fs.readFile('readmep.txt', 'utf8', function(err, data) {

    
//     fs.writeFile('readmep2.txt', data, function(err) {
      
//             console.log('File written successfully');
//         });
//     });
// deleting a file (
// const fs = require('fs');
// fs.unlink('readmep.txt' , (err) => 
// {
//     if (err)
//     {
//         console.log('error is here',err)
//     }
//     else{
//         console.log('file delted successufully')
//     }
// })
// creating and deleting directory synchrounously
// const fs = require('fs');
// fs.mkdirSync('stuff')
// fs.rmdirSync('stuff')
// creating and deleting directory asynchronously
// const fs = require('fs');
// fs.mkdir('stuff', function(){
//     fs.readFile('demo.txt','utf8',(err,data)=>
//     {
//         fs.writeFile('./stuff/writeme.txt',data,(err)=>
//         {
//             console.log('file written successfully');
//         })
//     })
// })
//deleting directory asynchronously
// const fs = require('fs');
// fs.unlink('./stuff/writeme.txt', function(err){
// fs.rmdir('./stuff',(err)=>
// {
// console.log('objects deleted successfully');
// })
// })

//creating a server 
// const http = require('http');
// const server = http.createServer((req,res)=>
// {
//     console.log('request was made:' + req.url);
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello sefu')
// })
// const port = 1234;
// server.listen(port , ()=>
// {
//     console.log('server is listening to port 1234');
// });

// creating a stream 
// const fs = require('fs');
// const readable = fs.createReadStream(__dirname + '/demo.txt','utf8');  // create readable stream from the file demo in cur directory
// const writeable =  fs.createWriteStream(__dirname + '/demowrite.txt'); //his creates a writable stream to the file demowrite.txt in the current directory.
// readable.on('data',(chunk)=>     
//     // This sets up an event listener on the readable stream for the data event. The data event is emitted whenever a chunk of data is available to be read from the stream.
// {
//     console.log('chunk received');
//     writeable.write(chunk);
    
// })



// using pipes 
// const fs = require('fs');
// const readable = fs.createReadStream(__dirname + '/demo.txt','utf8');
// const writeable = fs.createWriteStream(__dirname + '/demowrite.txt');
// readable.pipe(writeable); // this is the same as the above code but it is more efficient

// rreading file using readstream and send to the client
// const http = require('http');
// const fs = require('fs');
// const server =  http.createServer((req,res)=> {
//     // we create a server here 
//     console.log(req.url); // we want to see the url the client is requesting
//     res.writeHead(200, {'Content-Type': 'text/plain'});   // we are telling the browser that we are sending a text file
//     const readable  =  fs.createReadStream(__dirname + '/demo.txt','utf8'); // we create a readable stream from the file demo.txt in the current directory
//     readable.pipe(res);  // instead of piping into writeable stream we are piping into the response object so directly to the client 
// })
// const port = 1234
// server.listen(port,() => {
//     console.log('server is listening to port 1234');
// })

// serving html file to the client
// const http = require('http');
// const fs = require('fs');
// const server =  http.createServer((req,res)=> {
//     // we create a server here 
//     console.log(req.url); // we want to see the url the client is requesting
//     res.writeHead(200, {'Content-Type': 'text/html'});   // we are telling the browser that we are sending a text file
//     const readable  =  fs.createReadStream(__dirname + '/index.html','utf8'); // we create a readable stream from the file demo.txt in the current directory
//     readable.pipe(res);  // instead of piping into writeable stream we are piping into the response object so directly to the client 
// })
// const port = 1234
// server.listen(port,() => {
//     console.log('server is listening to port 1234');
// })

// serving json data to the client we are not using streams here
// const http = require('http');
// const fs = require('fs');
// const server =  http.createServer((req,res)=> {
//     // we create a server here 
//     console.log(req.url); // we want to see the url the client is requesting
//     res.writeHead(200, {'Content-Type': 'application/json'});   // we are telling the browser that we are sending a text file
//     const sefusobj = {
//         name:'sefu',
//         age: '22',
//         job: 'developer'
//     }
//     res.end(JSON.stringify(sefusobj));  // res.end expects eithe a string or a buffer so we are converting the object to a string in json format
// });
// const port = 1234
// server.listen(port,() => {
//     console.log('server is listening to port 1234');
// })


// creating basic routing 
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res) =>
// {
//   console.log('the requested url is ', req.url);
//   if (req.url === '/home' || req.url === '/')
//   {
//     res.writeHead(200,{'content-type':'text/html'});
//     fs.ReadStream(__dirname + '/index.html').pipe(res);
//   }
//   else if(req.url === '/contact-us')
//   {
//     res.writeHead(200,{'content-type':'text/html'});
//     fs.ReadStream(__dirname + '/contact.html').pipe(res);
//   }
//   else if(req.url === '/api/users')
//   {
//     res.writeHead(200,{'Contnet-Type':'application/json'});
//     const users  =  [{name:'sefu,age',age:22},{name:'james',age:23}];
//     res.end(JSON.stringify(users));
//   }
//   else{
//     res.writeHead(200,{'content-type':'text/html'});
//     fs.ReadStream(__dirname + '/404.html').pipe(res);
//   }


// })
// const port =  1234;
// server.listen(port,() =>console.log('server listening on port 1234'));

// creating express server
// const express = require('express');
// const app = express();
// app.get('/',(req,res)=>
// {
//   res.end('hey sefu with express');
// })
// app.get('/contact',(req,res) =>
// {
//   res.end('hey sefu with contact with express');
// })



// dynamic routing
// const express = require('express');
// const app = express();
// app.get('/profile/:id',(req,res) =>
// {
//   res.send('you requested tosee profile in your id ' +  req.params.id);
// })
// app.get('/User/:name' ,(req,res) =>
// {
//   res.end('you requested tp see profile in your name ' + req.params.name);
// })

// // // serving html content using express
// const express = require('express');
// const app = express();
// app.use('/assets', express.static('assets'));
// app.get('/',(req,res) =>
//    {
//      res.sendFile(__dirname + '/index.html');
//    });
// app.get('/contact',(req,res) =>
// {

//   res.sendFile(__dirname + '/contact.html');
// });

// const port = 1234;
// app.listen(port,()=>
// {
//   console.log('serever is listening on port 1234');
// })

// using ejs 
// const express =  require('express');
// const app = express();
// // telling the express that we are using ejs as template engine
// app.set('view engine','ejs');
// app.get('/profile/:name',(req,res)=>
// {
//   const data = { age:22 , job : 'developer' , hobbies:['eating','fighting','fishing']};
//   // parameters of render is the first one is the file name that we are reading the second one is the data that we are passing to the file
//   res.render('profile',{person:req.params.name , data:data});
// })
// app.listen(1234,()=>console.log('server is listening on port 1234'));

//using partials in ejs
// const express = require('express');
//  const app = express();
//  app.set('view engine','ejs');
//  app.use('/assets',express.static('assets'));

//  app.get('/profile/:name',(req,res)=>
//  {
//    const data = { age:22 , job : 'developer' , hobbies:['eating','fighting','fishing']};
//    res.render('profile',{person:req.params.name , data:data});
//  })
//  app.get('/contact',(req,res) =>
//  {   
//     console.log(req.query)
//     res.render('contact' , {qs:req.query});
//  });
//  app.get('/',(req,res) =>
//   {
//      res.render('index');
//   });
// app.listen(1234,()=>console.log('server is listening on port 1234'));

// using body-parser as middleware (Express route-specific)

// var express = require('express')
// var bodyParser = require('body-parser')

// var app = express()
// app.set('view engine','ejs');
// app.use('/assets',express.static('assets'));
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
//  app.get('/contact',(req,res) =>
//  {   
//     console.log(req.query)
//     res.render('contact' , {qs:req.query});
//  });
// app.post('/contact', urlencodedParser, function (req, res) {
//    // res.send('welcome, ' + req.body.name)
//    console.log(req.body);
//    res.render('contact-success',{data:req.body});
//  })
// app.listen(1234,()=>console.log('server is listening on port 1234'));

const pop = require('./Module');
console.log(pop);
