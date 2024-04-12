/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ov11gkh7sslwh4r",
    "created": "2024-04-07 14:07:09.913Z",
    "updated": "2024-04-07 14:07:09.913Z",
    "name": "Tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xk61djxi",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ov11gkh7sslwh4r");

  return dao.deleteCollection(collection);
})
