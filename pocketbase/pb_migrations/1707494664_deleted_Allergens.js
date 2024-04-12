/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pt6cw8uag5azj90");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "pt6cw8uag5azj90",
    "created": "2024-02-08 15:34:02.281Z",
    "updated": "2024-02-08 15:34:02.281Z",
    "name": "Allergens",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "475hcmbl",
        "name": "AllergenName",
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
