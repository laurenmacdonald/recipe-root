/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyhphhdryjdnmn")

  // remove
  collection.schema.removeField("ivp3eixv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vnyhphhdryjdnmn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ivp3eixv",
    "name": "Allergen",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
