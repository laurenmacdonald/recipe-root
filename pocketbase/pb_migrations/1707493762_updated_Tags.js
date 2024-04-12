/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9oscerzqnk994ky")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s3ubtcuy",
    "name": "RecipeId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ao04hf5ukwu09yq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9oscerzqnk994ky")

  // remove
  collection.schema.removeField("s3ubtcuy")

  return dao.saveCollection(collection)
})
