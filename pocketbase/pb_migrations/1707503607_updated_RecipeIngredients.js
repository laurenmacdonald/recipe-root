/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ezty5pifqd7tks")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nFULL JOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nFULL JOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
  }

  // remove
  collection.schema.removeField("os74stvw")

  // remove
  collection.schema.removeField("gpglnvhm")

  // remove
  collection.schema.removeField("hquv7ekc")

  // remove
  collection.schema.removeField("wk3jtuhq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q0k4okpm",
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
    "id": "tjpzq7c1",
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
    "id": "0yhugvyx",
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
    "id": "havtf1bp",
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
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nFULL JOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nFULL JOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "os74stvw",
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
    "id": "gpglnvhm",
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
    "id": "hquv7ekc",
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
    "id": "wk3jtuhq",
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
  collection.schema.removeField("q0k4okpm")

  // remove
  collection.schema.removeField("tjpzq7c1")

  // remove
  collection.schema.removeField("0yhugvyx")

  // remove
  collection.schema.removeField("havtf1bp")

  return dao.saveCollection(collection)
})
