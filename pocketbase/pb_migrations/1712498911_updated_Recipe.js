/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // remove
  collection.schema.removeField("uns6envn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "miwdvzsn",
    "name": "Tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ov11gkh7sslwh4r",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uns6envn",
    "name": "Tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Sweet",
        "Salty",
        "Vegan",
        "Vegetarian",
        "Healthy",
        "Light",
        "Rich"
      ]
    }
  }))

  // remove
  collection.schema.removeField("miwdvzsn")

  return dao.saveCollection(collection)
})
