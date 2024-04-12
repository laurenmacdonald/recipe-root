/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0ul46bi4665v7kj",
    "created": "2024-02-09 17:49:27.845Z",
    "updated": "2024-02-09 17:49:27.845Z",
    "name": "RecipeFullInfo",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5tdnlweu",
        "name": "RecipeName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hakxoztg",
        "name": "RecipeInstructions",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ck8x6whu",
        "name": "CategoryName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bj6ftblx",
        "name": "IngredientName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dkao7mmx",
        "name": "TagName",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT r.id, r.`RecipeName`, r.`RecipeInstructions`, c.`CategoryName`, i.`IngredientName`, t.`TagName`\nFROM `Recipe` AS r\nJOIN `Category` AS c ON r.`CategoryId` = c.id\nJOIN `RecipeIngredient` AS ri ON r.id = ri.`RecipeId`\nJOIN `Ingredients` AS i on ri.`IngredientId` = i.id\nJOIN `RecipeTag` AS rt ON r.id = rt.`RecipeId`\nJOIN `Tags`AS t on rt.`TagId` = t.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj");

  return dao.deleteCollection(collection);
})
