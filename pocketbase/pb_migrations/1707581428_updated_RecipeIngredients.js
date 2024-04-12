/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqsu2sq7o523zbf")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Ingredients`.`IngredientName`\nFROM `Recipe`\nJOIN `Ingredients` ON `Ingredients`.`Recipe` = `Recipe`.id\n"
  }

  // remove
  collection.schema.removeField("npbsoi1s")

  // remove
  collection.schema.removeField("8zkqhzei")

  // remove
  collection.schema.removeField("k2axnusx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfq72e3r",
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
    "id": "nps9oevr",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`\nFROM `Recipe`\nJOIN `Ingredients` ON `Ingredients`.id = `Recipe`.`Ingredients`\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "npbsoi1s",
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
    "id": "8zkqhzei",
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
    "id": "k2axnusx",
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
  collection.schema.removeField("sfq72e3r")

  // remove
  collection.schema.removeField("nps9oevr")

  return dao.saveCollection(collection)
})
