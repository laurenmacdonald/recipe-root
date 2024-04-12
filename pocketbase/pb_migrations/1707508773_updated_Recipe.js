/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea")

  // remove
  collection.schema.removeField("z4ckkv3g")

  // remove
  collection.schema.removeField("nx3grovy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tlk4ujqu",
    "name": "RecipeIngredients",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z4ckkv3g",
    "name": "RecipeIngredients",
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

  // remove
  collection.schema.removeField("tlk4ujqu")

  return dao.saveCollection(collection)
})
