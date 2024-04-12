/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyhphhdryjdnmn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nazkgdqf",
    "name": "Recipe",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "h4v3cjl4f3k8nea",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyhphhdryjdnmn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nazkgdqf",
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
