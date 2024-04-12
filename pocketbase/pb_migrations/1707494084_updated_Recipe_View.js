/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT `Ingredients`.id, `Recipe`.`RecipeName`, `Ingredients`.`Amount`, `Ingredients`.`IngredientName`\nFROM `Ingredients`\nLEFT JOIN `Recipe` ON `Ingredients`.id = `Recipe`.`Ingredients`"
  }

  // remove
  collection.schema.removeField("we3nhrs9")

  // remove
  collection.schema.removeField("x63svlf4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m08qkv5j",
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
    "id": "fuimolty",
    "name": "Amount",
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
    "id": "7bci3kyc",
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
    "query": "SELECT `Ingredients`.id, `Ingredients`.`Amount`, `Ingredients`.`IngredientName`\nFROM `Ingredients`\nLEFT JOIN `Recipe` ON `Ingredients`.id = `Recipe`.`Ingredients`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "we3nhrs9",
    "name": "Amount",
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
    "id": "x63svlf4",
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
  collection.schema.removeField("m08qkv5j")

  // remove
  collection.schema.removeField("fuimolty")

  // remove
  collection.schema.removeField("7bci3kyc")

  return dao.saveCollection(collection)
})
