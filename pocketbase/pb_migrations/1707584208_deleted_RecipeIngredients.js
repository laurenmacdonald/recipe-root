/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqsu2sq7o523zbf");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "wqsu2sq7o523zbf",
    "created": "2024-02-09 20:06:41.945Z",
    "updated": "2024-02-10 16:15:24.019Z",
    "name": "RecipeIngredients",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4lngnwxd",
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
        "id": "naf3sfud",
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
        "id": "bulo2zaf",
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
        "id": "7jpg5hpx",
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
        "id": "huiyox4b",
        "name": "TagName",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `Category`.`CategoryName`, `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Ingredients` ON `Ingredients`.`Recipe` = `Recipe`.id\nJOIN `Category` ON `Category`.id = `Recipe`.`CategoryId`\nJOIN `Tags` ON `Tags`.id = `Recipe`.`Tags`\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
