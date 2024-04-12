/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rw592htfne4gofk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rw592htfne4gofk",
    "created": "2024-02-09 16:07:26.709Z",
    "updated": "2024-02-09 16:07:26.709Z",
    "name": "Allergen",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "99k0vhjz",
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
