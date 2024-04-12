/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ynv03fx6gbswj5w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ynlwxx1a",
    "name": "IngredientId",
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
  const collection = dao.findCollectionByNameOrId("ynv03fx6gbswj5w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ynlwxx1a",
    "name": "IngredientId",
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
