/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // remove
  collection.schema.removeField("ccc1bzjs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mobkd1hu",
    "name": "Category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "99xybjs0e2bqv0h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ccc1bzjs",
    "name": "Category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Breakfast",
        "Dinner",
        "Lunch",
        "Snack"
      ]
    }
  }))

  // remove
  collection.schema.removeField("mobkd1hu")

  return dao.saveCollection(collection)
})
