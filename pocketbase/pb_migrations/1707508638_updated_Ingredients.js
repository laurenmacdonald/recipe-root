/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyhphhdryjdnmn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wduy53le",
    "name": "RecipeIngredient",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ynv03fx6gbswj5w",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyhphhdryjdnmn")

  // remove
  collection.schema.removeField("wduy53le")

  return dao.saveCollection(collection)
})
