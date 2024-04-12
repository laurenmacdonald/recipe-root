/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Category` ON `Recipe`.`CategoryId` = `Category`.id\nJOIN `RecipeIngredient` ON `Recipe`.id = `RecipeIngredient`.`RecipeId`\nJOIN `Ingredients` ON `RecipeIngredient`.`IngredientId` = `Ingredients`.id\nJOIN `RecipeTag` ON `Recipe`.id = `RecipeTag`.`RecipeId`\nJOIN `Tags` ON `RecipeTag`.`TagId` = `Tags`.id\nGROUP BY `Recipe`.id"
  }

  // remove
  collection.schema.removeField("wlv86nmk")

  // remove
  collection.schema.removeField("o7jegq1o")

  // remove
  collection.schema.removeField("upoulpe2")

  // remove
  collection.schema.removeField("qzd6bokq")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Category` ON `Recipe`.`CategoryId` = `Category`.id\nJOIN `RecipeIngredient` ON `Recipe`.id = `RecipeIngredient`.`RecipeId`\nJOIN `Ingredients` ON `RecipeIngredient`.`IngredientId` = `Ingredients`.id\nJOIN `RecipeTag` ON `Recipe`.id = `RecipeTag`.`RecipeId`\nJOIN `Tags` ON `RecipeTag`.`TagId` = `Tags`.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlv86nmk",
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
    "id": "o7jegq1o",
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
    "id": "upoulpe2",
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
    "id": "qzd6bokq",
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
  collection.schema.removeField("ehkyr3sq")

  // remove
  collection.schema.removeField("ezjhtv41")

  // remove
  collection.schema.removeField("oyqwfnmf")

  // remove
  collection.schema.removeField("4eamkphc")

  return dao.saveCollection(collection)
})
