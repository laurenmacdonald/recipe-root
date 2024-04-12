/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8ayasl1g7v7ot4i",
    "created": "2024-02-08 15:29:11.322Z",
    "updated": "2024-02-08 15:29:11.322Z",
    "name": "Category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gblkizqb",
        "name": "CategoryType",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Breakfast",
            "Lunch",
            "Dinner",
            "Dessert",
            "Snack",
            "Drink"
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
  const collection = dao.findCollectionByNameOrId("8ayasl1g7v7ot4i");

  return dao.deleteCollection(collection);
})
