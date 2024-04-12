/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ynv03fx6gbswj5w");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ynv03fx6gbswj5w",
    "created": "2024-02-09 16:06:23.158Z",
    "updated": "2024-02-09 19:52:34.003Z",
    "name": "RecipeIngredient",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b71ellub",
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
        "id": "ynlwxx1a",
        "name": "IngredientId",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "vnyhphhdryjdnmn",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "mti1z0zl",
        "name": "Quantity",
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
