/*********************************************************************************

WEB322 – Assignment 02
I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source (including 3rd party web sites) or distributed to other students.

Name: Agenor Dionizio da Silva Junior
Student ID: 138121223
Date: Oct 09, 2024
Replit Web App URL: 
GitHub Repository URL: https://github.com/Agenor-Junior/web322-app.git
********************************************************************************/

const express = require("express");
const path = require("path");
const app = express();
const storeService = require("./store-service"); //importing my module

// Setting the port number to listen on
const HTTP_PORT = process.env.PORT || 8080;

//CSS & images, JS
app.use(express.static("public"));

// / route:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

// HOME route:
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

// ABOUT route:
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

// SHOP route: (Static HTML)
app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/shop.html"));
});

// shop route:
app.get("/api/shop", (req, res) => {
  storeService
    .getPublishedItems()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// ITEMS route: (Static HTML)
app.get("/items", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/items.html"));
});

// items route:
app.get("/api/items", (req, res) => {
  storeService
    .getAllItems()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// CATEGORIES route: (Static HTML)
app.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/categories.html"));
});

// CATEGORIES route:
app.get("/api/categories", (req, res) => {
  storeService
    .getCategories()
    .then((data) => {
      // Send the fetched categories data to the client as JSON
      res.json(data);
    })
    .catch((err) => {
      // Return an error message in the correct format
      res.json({ message: err });
    });
});

// Handle unmatched routes with a custom 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "/views/404.html"));
});

// Listen on this port to run the website locally
storeService
  .initialize()
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log(`Express http server listening on port: ${HTTP_PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to initialize data: ", err);
  });

//app.listen(3000)

let count = 1; // global counter
let maxCount = 5; // global maximum

let myCountInterval = setInterval(function () {
  console.log("Hello after " + count++ + " second(s)");
  checkMaximum();
}, 1000);

let checkMaximum = function () {
  if (count > maxCount) {
    clearInterval(myCountInterval);
  }
};

console.log(__dirname);
// outputs /Users/pcrawford

console.log(__filename);
// outputs /Users/pcrawford/ex1.js

// outputs "Hello after 1 second" to the console
setTimeout(function () {
  console.log("Hello after 1 second");
}, 1000);

let myURL = new URL(
  "https://myProductInventory.com/products?sort=asc&onSale=true"
);

for (const [key, value] of myURL.searchParams) {
  console.log("key: " + key + " value: " + value);
}

/*
  key: sort value: asc
  key: onSale value: true
  */

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("event", function () {
  console.log("an event occurred!");
});

myEmitter.emit("event");

const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("First Name: ", function (fName) {
  rl.question("Last Name: ", function (lName) {
    console.log("Hello: " + fName + " " + lName);
    rl.close();
  });
});

console.log("Absolute path to about.html");

console.log(path.join(__dirname, "/about.html")); // with leading slash
console.log(path.join(__dirname, "//about.html")); // with multiple leading slashes
console.log(path.join(__dirname, "about.html")); // without leading slash
console.log(path.join(__dirname, "about.html")); // with incorrect leading slash

const fs = require("fs");

fs.readdir("img", function (err, filesArray) {
  if (err) console.log(err);
  else {
    console.log(filesArray);
  }
});

fs.readFile("names.csv", function (err, fileData) {
  if (err) console.log(err);
  else {
    namesArray = fileData.toString().split(",");
    console.log(namesArray);
  }
});
