/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9eh947v59ht307n");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9eh947v59ht307n",
    "created": "2024-02-09 16:07:08.931Z",
    "updated": "2024-02-09 19:30:06.072Z",
    "name": "Category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "988q6xzs",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
