/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h4v3cjl4f3k8nea",
    "created": "2024-02-09 16:05:09.578Z",
    "updated": "2024-02-09 16:05:09.578Z",
    "name": "Recipe",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "imtaichx",
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
        "id": "wrqz8jtu",
        "name": "RecipeInstructions",
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
        "id": "y42x6mlr",
        "name": "CategoryId",
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
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea");

  return dao.deleteCollection(collection);
})
