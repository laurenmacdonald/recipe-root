/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9oscerzqnk994ky",
    "created": "2024-02-08 15:31:14.774Z",
    "updated": "2024-02-08 15:31:14.774Z",
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
  const collection = dao.findCollectionByNameOrId("9oscerzqnk994ky");

  return dao.deleteCollection(collection);
})
