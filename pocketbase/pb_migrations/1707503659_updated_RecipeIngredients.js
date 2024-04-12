/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ezty5pifqd7tks")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nLEFT JOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nFULL JOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
  }

  // remove
  collection.schema.removeField("erywln4c")

  // remove
  collection.schema.removeField("ewyzgtof")

  // remove
  collection.schema.removeField("dcgoweuh")

  // remove
  collection.schema.removeField("qznpxiiz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1kn27qk5",
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
    "id": "oobqv8fw",
    "name": "RecipeInstructions",
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
    "id": "teechhmp",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jtlrvaf9",
    "name": "Quantity",
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
  const collection = dao.findCollectionByNameOrId("4ezty5pifqd7tks")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nFULL JOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nFULL JOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erywln4c",
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
    "id": "ewyzgtof",
    "name": "RecipeInstructions",
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
    "id": "dcgoweuh",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qznpxiiz",
    "name": "Quantity",
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
  collection.schema.removeField("1kn27qk5")

  // remove
  collection.schema.removeField("oobqv8fw")

  // remove
  collection.schema.removeField("teechhmp")

  // remove
  collection.schema.removeField("jtlrvaf9")

  return dao.saveCollection(collection)
})
