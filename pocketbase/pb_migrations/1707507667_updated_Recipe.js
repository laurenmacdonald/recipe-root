/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4v3cjl4f3k8nea")

  // remove
  collection.schema.removeField("z4ckkv3g")

  return dao.saveCollection(collection)
})
