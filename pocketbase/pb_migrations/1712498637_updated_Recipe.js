/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mobkd1hu",
    "name": "Category",
    "type": "relation",
    "required": false,
    "presentable": true,
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

  // update
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
})
