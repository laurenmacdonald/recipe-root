/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT r.id, r.`RecipeName`, r.`RecipeInstructions`, c.`CategoryName`, i.`IngredientName`\nFROM `Recipe` AS r\nJOIN `Category` AS c ON r.`CategoryId` = c.id\nFULL JOIN `RecipeIngredient` AS ri ON r.id = ri.`RecipeId`\nFULL JOIN `Ingredients` AS i on ri.`IngredientId` = i.id\nGROUP BY r.id"
  }

  // remove
  collection.schema.removeField("bryfb0oy")

  // remove
  collection.schema.removeField("wqcrljyx")

  // remove
  collection.schema.removeField("pilgy0ku")

  // remove
  collection.schema.removeField("ppmt0taj")

  // remove
  collection.schema.removeField("chohv0pz")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT r.id, r.`RecipeName`, r.`RecipeInstructions`, c.`CategoryName`, i.`IngredientName`, t.`TagName`\nFROM `Recipe` AS r\nJOIN `Category` AS c ON r.`CategoryId` = c.id\nFULL JOIN `RecipeIngredient` AS ri ON r.id = ri.`RecipeId`\nFULL JOIN `Ingredients` AS i on ri.`IngredientId` = i.id\nJOIN `RecipeTag` AS rt ON r.id = rt.`RecipeId`\nJOIN `Tags`AS t on rt.`TagId` = t.id\nGROUP BY r.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bryfb0oy",
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
    "id": "wqcrljyx",
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
    "id": "pilgy0ku",
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
    "id": "ppmt0taj",
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
    "id": "chohv0pz",
    "name": "TagName",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("1tmdxtyq")

  // remove
  collection.schema.removeField("zhriehvo")

  // remove
  collection.schema.removeField("rsngz5fq")

  // remove
  collection.schema.removeField("0a5cugdl")

  return dao.saveCollection(collection)
})
