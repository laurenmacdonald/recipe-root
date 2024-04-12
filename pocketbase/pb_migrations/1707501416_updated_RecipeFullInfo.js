/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT r.id, r.`RecipeName`, r.`RecipeInstructions`, c.`CategoryName`, i.`IngredientName`, t.`TagName`\nFROM `Recipe` AS r\nJOIN `Category` AS c ON r.`CategoryId` = c.id\nFULL JOIN `RecipeIngredient` AS ri ON r.id = ri.`RecipeId`\nFULL JOIN `Ingredients` AS i on ri.`IngredientId` = i.id\nJOIN `RecipeTag` AS rt ON r.id = rt.`RecipeId`\nJOIN `Tags`AS t on rt.`TagId` = t.id\nGROUP BY r.id"
  }

  // remove
  collection.schema.removeField("5tdnlweu")

  // remove
  collection.schema.removeField("hakxoztg")

  // remove
  collection.schema.removeField("ck8x6whu")

  // remove
  collection.schema.removeField("bj6ftblx")

  // remove
  collection.schema.removeField("dkao7mmx")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT r.id, r.`RecipeName`, r.`RecipeInstructions`, c.`CategoryName`, i.`IngredientName`, t.`TagName`\nFROM `Recipe` AS r\nJOIN `Category` AS c ON r.`CategoryId` = c.id\nJOIN `RecipeIngredient` AS ri ON r.id = ri.`RecipeId`\nJOIN `Ingredients` AS i on ri.`IngredientId` = i.id\nJOIN `RecipeTag` AS rt ON r.id = rt.`RecipeId`\nJOIN `Tags`AS t on rt.`TagId` = t.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5tdnlweu",
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
    "id": "hakxoztg",
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
    "id": "ck8x6whu",
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
    "id": "bj6ftblx",
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
    "id": "dkao7mmx",
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
  collection.schema.removeField("bryfb0oy")

  // remove
  collection.schema.removeField("wqcrljyx")

  // remove
  collection.schema.removeField("pilgy0ku")

  // remove
  collection.schema.removeField("ppmt0taj")

  // remove
  collection.schema.removeField("chohv0pz")

  return dao.saveCollection(collection)
})
