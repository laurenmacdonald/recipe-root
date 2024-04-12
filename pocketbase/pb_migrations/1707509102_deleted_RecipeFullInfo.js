/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0ul46bi4665v7kj",
    "created": "2024-02-09 17:49:27.845Z",
    "updated": "2024-02-09 18:34:57.264Z",
    "name": "RecipeFullInfo",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0mumjhte",
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
        "id": "lxz0x4a2",
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
        "id": "5su6sxur",
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
      },
      {
        "system": false,
        "id": "fqoruwht",
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
        "id": "ljcryjxk",
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
      },
      {
        "system": false,
        "id": "str6mnad",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    Recipe.RecipeName,\n    Recipe.RecipeInstructions,\n    RecipeIngredient.Quantity,\n    Ingredients.IngredientName,\n    Tags.TagName,\n    Category.CategoryName\nFROM\n    Recipe\nJOIN\n    Category ON Recipe.CategoryId = Category.id\nJOIN\n    RecipeIngredient ON Recipe.id = RecipeIngredient.RecipeId\nJOIN\n    Ingredients ON RecipeIngredient.IngredientId = Ingredients.id\nJOIN\n    RecipeTag ON Recipe.id = RecipeTag.RecipeId\nJOIN\n    Tags ON RecipeTag.TagId = Tags.id;"
    }
  });

  return Dao(db).saveCollection(collection);
})
