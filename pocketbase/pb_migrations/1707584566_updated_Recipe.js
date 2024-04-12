/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fp8a1kyx",
    "name": "Image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // remove
  collection.schema.removeField("fp8a1kyx")

  return dao.saveCollection(collection)
})
