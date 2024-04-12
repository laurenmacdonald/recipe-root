/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ao04hf5ukwu09yq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "azqs4cqi",
    "name": "Directions",
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
  const collection = dao.findCollectionByNameOrId("ao04hf5ukwu09yq")

  // remove
  collection.schema.removeField("azqs4cqi")

  return dao.saveCollection(collection)
})
