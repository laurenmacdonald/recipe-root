/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ezty5pifqd7tks")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nFULL JOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nJOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
  }

  // remove
  collection.schema.removeField("mbf6xjbc")

  // remove
  collection.schema.removeField("zpjixqky")

  // remove
  collection.schema.removeField("tvvqfceo")

  // remove
  collection.schema.removeField("mjawczlv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l3arrnho",
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
    "id": "jwb8o03n",
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
    "id": "t5buvpvb",
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
    "id": "obbvfuxt",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nJOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nJOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mbf6xjbc",
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
    "id": "zpjixqky",
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
    "id": "tvvqfceo",
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
    "id": "mjawczlv",
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
  collection.schema.removeField("l3arrnho")

  // remove
  collection.schema.removeField("jwb8o03n")

  // remove
  collection.schema.removeField("t5buvpvb")

  // remove
  collection.schema.removeField("obbvfuxt")

  return dao.saveCollection(collection)
})
