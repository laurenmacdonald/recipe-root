/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1lff7h70ls3xjer");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "1lff7h70ls3xjer",
    "created": "2024-02-08 15:39:32.203Z",
    "updated": "2024-02-08 15:39:32.203Z",
    "name": "Ingredients",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r6yzxoek",
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
        "id": "9tte0kch",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
