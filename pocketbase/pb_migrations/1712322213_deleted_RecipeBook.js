/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8ig66pgamfn207s");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "8ig66pgamfn207s",
    "created": "2024-04-05 12:40:36.159Z",
    "updated": "2024-04-05 12:43:36.880Z",
    "name": "RecipeBook",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9gipiujl",
        "name": "recipe",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "fatbtlrlzkoaj6s",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "kj1zadxk",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
