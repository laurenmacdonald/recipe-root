/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "3pnh9h8jme2gnsl",
    "created": "2024-02-08 19:11:29.266Z",
    "updated": "2024-02-09 15:54:44.794Z",
    "name": "Recipe_View",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m08qkv5j",
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
        "id": "fuimolty",
        "name": "Amount",
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
        "id": "7bci3kyc",
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
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT `Ingredients`.id, `Recipe`.`RecipeName`, `Ingredients`.`Amount`, `Ingredients`.`IngredientName`\nFROM `Ingredients`\nLEFT JOIN `Recipe` ON `Ingredients`.id = `Recipe`.`Ingredients`"
    }
  });

  return Dao(db).saveCollection(collection);
})
