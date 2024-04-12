/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4ezty5pifqd7tks");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4ezty5pifqd7tks",
    "created": "2024-02-09 18:04:49.896Z",
    "updated": "2024-02-09 18:39:40.747Z",
    "name": "RecipeIngredients",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d6fmjea7",
        "name": "RecipeName",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "ayg0uk2d",
        "name": "RecipeInstructions",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "kt2kuu15",
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
        "id": "vzdg6kh9",
        "name": "Quantity",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nFULL JOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nFULL JOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
    }
  });

  return Dao(db).saveCollection(collection);
})
