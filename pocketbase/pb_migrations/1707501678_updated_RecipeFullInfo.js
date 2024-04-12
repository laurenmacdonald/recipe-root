/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Category` ON `Recipe`.`CategoryId` = `Category`.id\nJOIN `RecipeIngredient` ON `Recipe`.id = `RecipeIngredient`.`RecipeId`\nJOIN `Ingredients` ON `RecipeIngredient`.`IngredientId` = `Ingredients`.id\nJOIN `RecipeTag` ON `Recipe`.id = `RecipeTag`.`RecipeId`\nJOIN `Tags` ON `RecipeTag`.`TagId` = `Tags`.id"
  }

  // remove
  collection.schema.removeField("1tmdxtyq")

  // remove
  collection.schema.removeField("zhriehvo")

  // remove
  collection.schema.removeField("rsngz5fq")

  // remove
  collection.schema.removeField("0a5cugdl")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT r.id, r.`RecipeName`, r.`RecipeInstructions`, c.`CategoryName`, i.`IngredientName`\nFROM `Recipe` AS r\nJOIN `Category` AS c ON r.`CategoryId` = c.id\nFULL JOIN `RecipeIngredient` AS ri ON r.id = ri.`RecipeId`\nFULL JOIN `Ingredients` AS i on ri.`IngredientId` = i.id\nGROUP BY r.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1tmdxtyq",
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
    "id": "zhriehvo",
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
    "id": "rsngz5fq",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0a5cugdl",
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
  collection.schema.removeField("wlv86nmk")

  // remove
  collection.schema.removeField("o7jegq1o")

  // remove
  collection.schema.removeField("upoulpe2")

  // remove
  collection.schema.removeField("qzd6bokq")

  return dao.saveCollection(collection)
})
