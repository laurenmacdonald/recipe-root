/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqsu2sq7o523zbf")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`\nFROM `Recipe`\nFULL JOIN `Ingredients` ON `Ingredients`.id = `Recipe`.`Ingredients`\n"
  }

  // remove
  collection.schema.removeField("xuenkmso")

  // remove
  collection.schema.removeField("uhayfnya")

  // remove
  collection.schema.removeField("zfuzjad5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8mwoh6ss",
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
    "id": "a9u0ll2r",
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
    "id": "nrbjfp4h",
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
  const collection = dao.findCollectionByNameOrId("wqsu2sq7o523zbf")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`\nFROM `Recipe`\nFULL JOIN `Ingredients` ON `Ingredients`.id = `Recipe`.`Ingredients`\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xuenkmso",
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
    "id": "uhayfnya",
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
    "id": "zfuzjad5",
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
  collection.schema.removeField("8mwoh6ss")

  // remove
  collection.schema.removeField("a9u0ll2r")

  // remove
  collection.schema.removeField("nrbjfp4h")

  return dao.saveCollection(collection)
})
