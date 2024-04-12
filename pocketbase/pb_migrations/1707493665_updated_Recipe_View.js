/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Ingredients`.`IngredientName`\nFROM `Recipe`\nFULL JOIN `Ingredients` WHERE `Ingredients`.id= `Recipe`.`Ingredients`"
  }

  // remove
  collection.schema.removeField("nc7ajpzt")

  // remove
  collection.schema.removeField("3yd8ovhv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "heuvamfm",
    "name": "RecipeName",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q1np4gxb",
    "name": "IngredientName",
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
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Ingredients`.`IngredientName`\nFROM `Recipe`\nFULL JOIN `Ingredients` on `Ingredients`.id= `Recipe`.`Ingredients`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nc7ajpzt",
    "name": "RecipeName",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3yd8ovhv",
    "name": "IngredientName",
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

  // remove
  collection.schema.removeField("heuvamfm")

  // remove
  collection.schema.removeField("q1np4gxb")

  return dao.saveCollection(collection)
})
