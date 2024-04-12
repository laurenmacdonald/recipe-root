/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sa6mh89j",
    "name": "WantToTry",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skomrapx",
    "name": "Favorite",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ccc1bzjs",
    "name": "Category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Breakfast",
        "Dinner",
        "Lunch",
        "Snack"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fatbtlrlzkoaj6s")

  // remove
  collection.schema.removeField("sa6mh89j")

  // remove
  collection.schema.removeField("skomrapx")

  // remove
  collection.schema.removeField("uns6envn")

  // remove
  collection.schema.removeField("ccc1bzjs")

  return dao.saveCollection(collection)
})
