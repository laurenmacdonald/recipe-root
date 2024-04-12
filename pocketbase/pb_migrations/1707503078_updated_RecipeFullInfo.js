/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `RecipeIngredient`.`Quantity`, `Ingredients`.`IngredientName`,  `Tags`.`TagName`, `Category`.`CategoryName`\nFROM `Recipe`\nJOIN `Category` ON `Recipe`.`CategoryId` = `Category`.id\nJOIN `RecipeIngredient` ON `Recipe`.id = `RecipeIngredient`.`RecipeId`\nJOIN `Ingredients` ON `RecipeIngredient`.`IngredientId` = `Ingredients`.id\nJOIN `RecipeTag` ON `Recipe`.id = `RecipeTag`.`RecipeId`\nJOIN `Tags` ON `RecipeTag`.`TagId` = `Tags`.id"
  }

  // remove
  collection.schema.removeField("ehkyr3sq")

  // remove
  collection.schema.removeField("ezjhtv41")

  // remove
  collection.schema.removeField("oyqwfnmf")

  // remove
  collection.schema.removeField("4eamkphc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bchx7ljw",
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
    "id": "g6dxtnur",
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
    "id": "fwmmxxy9",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ycxhvt3r",
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
    "id": "zn4btlbg",
    "name": "TagName",
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
    "id": "n7h1mpon",
    "name": "CategoryName",
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
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Category` ON `Recipe`.`CategoryId` = `Category`.id\nJOIN `RecipeIngredient` ON `Recipe`.id = `RecipeIngredient`.`RecipeId`\nJOIN `Ingredients` ON `RecipeIngredient`.`IngredientId` = `Ingredients`.id\nJOIN `RecipeTag` ON `Recipe`.id = `RecipeTag`.`RecipeId`\nJOIN `Tags` ON `RecipeTag`.`TagId` = `Tags`.id\nGROUP BY `Recipe`.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehkyr3sq",
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
    "id": "ezjhtv41",
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
    "id": "oyqwfnmf",
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
    "id": "4eamkphc",
    "name": "TagName",
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
  collection.schema.removeField("bchx7ljw")

  // remove
  collection.schema.removeField("g6dxtnur")

  // remove
  collection.schema.removeField("fwmmxxy9")

  // remove
  collection.schema.removeField("ycxhvt3r")

  // remove
  collection.schema.removeField("zn4btlbg")

  // remove
  collection.schema.removeField("n7h1mpon")

  return dao.saveCollection(collection)
})
