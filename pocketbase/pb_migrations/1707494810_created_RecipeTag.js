/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cyrwnl7msbzya1t",
    "created": "2024-02-09 16:06:50.605Z",
    "updated": "2024-02-09 16:06:50.605Z",
    "name": "RecipeTag",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qjwt6cmc",
        "name": "RecipeId",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "h4v3cjl4f3k8nea",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "phlnl2m1",
        "name": "TagId",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "6q68ul0u05ricfl",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("cyrwnl7msbzya1t");

  return dao.deleteCollection(collection);
})
