/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vnyhphhdryjdnmn");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vnyhphhdryjdnmn",
    "created": "2024-02-09 16:05:36.990Z",
    "updated": "2024-02-10 16:58:27.590Z",
    "name": "Ingredients",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xjgc5chu",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})