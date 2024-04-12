/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea")

  // remove
  collection.schema.removeField("pw7qvsdt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nx5v78th",
    "name": "Tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "6q68ul0u05ricfl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
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
    "id": "pw7qvsdt",
    "name": "Tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cyrwnl7msbzya1t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("nx5v78th")

  return dao.saveCollection(collection)
})
