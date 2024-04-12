/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vtyvuwbwofxst6a");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vtyvuwbwofxst6a",
    "created": "2024-02-08 15:32:17.165Z",
    "updated": "2024-02-08 15:32:17.165Z",
    "name": "Allergens",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lrbg6mcc",
        "name": "AllergenName",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Soy",
            "Peanut",
            "Tree nut",
            "Sesame",
            "Gluten"
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
})
