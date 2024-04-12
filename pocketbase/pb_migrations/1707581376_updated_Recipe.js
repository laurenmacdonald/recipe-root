/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tlk4ujqu",
    "name": "Ingredients",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vnyhphhdryjdnmn",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tlk4ujqu",
    "name": "Ingredients",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vnyhphhdryjdnmn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
