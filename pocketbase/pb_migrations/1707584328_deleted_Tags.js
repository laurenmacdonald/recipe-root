/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6q68ul0u05ricfl");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6q68ul0u05ricfl",
    "created": "2024-02-09 16:06:31.138Z",
    "updated": "2024-02-10 16:57:52.738Z",
    "name": "Tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o8t6xm7e",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
