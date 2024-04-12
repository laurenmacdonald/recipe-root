/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea")

  // remove
  collection.schema.removeField("y42x6mlr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rdznpqbu",
    "name": "CategoryId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9eh947v59ht307n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("rdznpqbu")

  return dao.saveCollection(collection)
})
