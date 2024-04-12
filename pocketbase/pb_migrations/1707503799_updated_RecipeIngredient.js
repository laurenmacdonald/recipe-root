/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynv03fx6gbswj5w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b71ellub",
    "name": "RecipeId",
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
  const collection = dao.findCollectionByNameOrId("ynv03fx6gbswj5w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b71ellub",
    "name": "RecipeId",
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
