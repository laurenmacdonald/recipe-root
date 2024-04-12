/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wqsu2sq7o523zbf",
    "created": "2024-02-09 20:06:41.945Z",
    "updated": "2024-02-09 20:06:41.945Z",
    "name": "RecipeIngredients",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gd2lpmcu",
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
        "id": "qxkyn7xx",
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
        "id": "djul1gyd",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`\nFROM `Recipe`\nJOIN `Ingredients` ON `Recipe`.`Ingredients` = `Ingredients`.id\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqsu2sq7o523zbf");

  return dao.deleteCollection(collection);
})
