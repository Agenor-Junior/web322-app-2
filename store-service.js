/*********************************************************************************

WEB322 – Assignment 02
I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source (including 3rd party web sites) or distributed to other students.

Name: Agenor Dionizio da Silva Junior
Date: Oct 09, 2024
Student ID: 138121223
Replit Web App URL: 
GitHub Repository URL: https://github.com/Agenor-Junior/web322-app.git

********************************************************************************/ 


const fs = require("fs");

var itemsArray = [];
var categoriesArray = [];

var pathToItems = "./data/items.json";
var pathToCat = "./data/categories.json";

function initialize() {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToItems, "utf8", (err, jsonString) => {
      if (err) {
        return reject("Unable to read ITEMS file");
      }

      try {
        //parse the items file
        itemsArray = JSON.parse(jsonString);

        fs.readFile(pathToCat, "utf-8", (err, jsonString) => {
          if (err) {
            return reject("Unable to read CATEGORIES file");
          }
          try {
            //parse the items file
            categoriesArray = JSON.parse(jsonString);
            resolve("Initialization successfull!");
          } catch (error) {
            reject("Unable to parse CATEGORIES file");
          }
        });
      } catch (error) {
        reject("Unable to parse ITEMS file");
      }
    });
  });
}

function getAllItems() {
  return new Promise((resolve, reject) => {
    itemsArray.length === 0 ? reject("no results returned!") : resolve(itemsArray);
  });
}

function getPublishedItems() {
  return new Promise((resolve, reject) => {
    const publishedItems = itemsArray.filter((item) => item.published);
    publishedItems.length === 0
      ? reject("no results returned")
      : resolve(publishedItems);
  });
}

function getCategories() {
  return new Promise((resolve, reject) => {
    categoriesArray.length == 0
      ? reject("no results returned")
      : resolve(categoriesArray);
  });
}

initialize()
  .then((message) => {
    console.log(message); // Initialize success
    return getAllItems();
  })
  .then((items) => {
    console.log("All items: ", items);
    return getPublishedItems();
  })
  .then((publishedItems)=>{
    console.log("Published items: ", publishedItems);
    return getCategories();
  })
  .then((categories)=>{
    console.log("Categories: ", categories);
  })
  .catch((err) => {
    console.error(err);
  });

// Exporting the functions so that they can be used in other files
module.exports = {
  initialize,
  getAllItems,
  getPublishedItems,
  getCategories,
};