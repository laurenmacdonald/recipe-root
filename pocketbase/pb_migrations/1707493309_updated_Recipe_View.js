/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Ingredients`.`IngredientName`\nFROM `Recipe`\nJOIN `Ingredients` on `Ingredients`.id= `Recipe`.`Ingredients`"
  }

  // remove
  collection.schema.removeField("rpkcneoq")

  // remove
  collection.schema.removeField("t2qmbehh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nzwi4ncs",
    "name": "RecipeName",
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
    "id": "ub1tfrtg",
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
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Ingredients`.`IngredientName`\nFROM `Recipe`\nLEFT JOIN `Ingredients` on `Ingredients`.id= `Recipe`.`Ingredients`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rpkcneoq",
    "name": "RecipeName",
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
    "id": "t2qmbehh",
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
  collection.schema.removeField("nzwi4ncs")

  // remove
  collection.schema.removeField("ub1tfrtg")

  return dao.saveCollection(collection)
})
