/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q68ul0u05ricfl")

  // remove
  collection.schema.removeField("ymqhgai0")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q68ul0u05ricfl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymqhgai0",
    "name": "Recipe",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "h4v3cjl4f3k8nea",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
