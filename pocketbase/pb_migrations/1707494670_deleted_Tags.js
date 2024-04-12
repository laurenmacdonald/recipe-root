/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9oscerzqnk994ky");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9oscerzqnk994ky",
    "created": "2024-02-08 15:31:14.774Z",
    "updated": "2024-02-09 15:49:22.541Z",
    "name": "Tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oulvefj6",
        "name": "TagName",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Quick",
            "Easy",
            "Party",
            "Chocolate",
            "Alcoholic",
            "Indian",
            "Thai",
            "Spicy",
            "Rich",
            "Light"
          ]
        }
      },
      {
        "system": false,
        "id": "s3ubtcuy",
        "name": "RecipeId",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ao04hf5ukwu09yq",
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
})
