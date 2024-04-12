/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ezty5pifqd7tks")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nLEFT JOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nLEFT JOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
  }

  // remove
  collection.schema.removeField("3iyairhi")

  // remove
  collection.schema.removeField("2akvcwvo")

  // remove
  collection.schema.removeField("x5wrbny8")

  // remove
  collection.schema.removeField("as2y4k5o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxg05qsr",
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
    "id": "ywlezxl7",
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
    "id": "oxpklq7p",
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
    "id": "01hfnmr5",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `RecipeIngredient`.`Quantity`\nFROM `Recipe`\nRIGHT JOIN `RecipeIngredient` ON `RecipeIngredient`.`RecipeId` = `Recipe`.id\nRIGHT JOIN `Ingredients` ON `Ingredients`.id = `RecipeIngredient`.`IngredientId`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3iyairhi",
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
    "id": "2akvcwvo",
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
    "id": "x5wrbny8",
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
    "id": "as2y4k5o",
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
  collection.schema.removeField("pxg05qsr")

  // remove
  collection.schema.removeField("ywlezxl7")

  // remove
  collection.schema.removeField("oxpklq7p")

  // remove
  collection.schema.removeField("01hfnmr5")

  return dao.saveCollection(collection)
})
