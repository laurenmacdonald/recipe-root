/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT\n    Recipe.id,\n    Recipe.RecipeName,\n    Recipe.RecipeInstructions,\n    RecipeIngredient.Quantity,\n    Ingredients.IngredientName,\n    Tags.TagName,\n    Category.CategoryName\nFROM\n    Recipe\nRIGHT JOIN\n    Category ON Recipe.CategoryId = Category.id\nJOIN\n    RecipeIngredient ON Recipe.id = RecipeIngredient.RecipeId\nJOIN\n    Ingredients ON RecipeIngredient.IngredientId = Ingredients.id\nJOIN\n    RecipeTag ON Recipe.id = RecipeTag.RecipeId\nJOIN\n    Tags ON RecipeTag.TagId = Tags.id;"
  }

  // remove
  collection.schema.removeField("0ufyduew")

  // remove
  collection.schema.removeField("xnzhqtdt")

  // remove
  collection.schema.removeField("to42nuti")

  // remove
  collection.schema.removeField("vrtpgfra")

  // remove
  collection.schema.removeField("cizsk40o")

  // remove
  collection.schema.removeField("mhivqwl9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyko7u1m",
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
    "id": "evbh8cva",
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
    "id": "ckf5kz9b",
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
    "id": "cotjcogq",
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
    "id": "ei0skrkw",
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
    "id": "qzjpmdmo",
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
    "query": "SELECT\n    Recipe.id,\n    Recipe.RecipeName,\n    Recipe.RecipeInstructions,\n    RecipeIngredient.Quantity,\n    Ingredients.IngredientName,\n    Tags.TagName,\n    Category.CategoryName\nFROM\n    Recipe\nFULL OUTER JOIN\n    Category ON Recipe.CategoryId = Category.id\nJOIN\n    RecipeIngredient ON Recipe.id = RecipeIngredient.RecipeId\nJOIN\n    Ingredients ON RecipeIngredient.IngredientId = Ingredients.id\nJOIN\n    RecipeTag ON Recipe.id = RecipeTag.RecipeId\nJOIN\n    Tags ON RecipeTag.TagId = Tags.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ufyduew",
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
    "id": "xnzhqtdt",
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
    "id": "to42nuti",
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
    "id": "vrtpgfra",
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
    "id": "cizsk40o",
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
    "id": "mhivqwl9",
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

  // remove
  collection.schema.removeField("eyko7u1m")

  // remove
  collection.schema.removeField("evbh8cva")

  // remove
  collection.schema.removeField("ckf5kz9b")

  // remove
  collection.schema.removeField("cotjcogq")

  // remove
  collection.schema.removeField("ei0skrkw")

  // remove
  collection.schema.removeField("qzjpmdmo")

  return dao.saveCollection(collection)
})
