/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nx3grovy",
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
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea")

  // remove
  collection.schema.removeField("nx3grovy")

  return dao.saveCollection(collection)
})
