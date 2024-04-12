/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ul46bi4665v7kj")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    Recipe.RecipeName,\n    Recipe.RecipeInstructions,\n    RecipeIngredient.Quantity,\n    Ingredients.IngredientName,\n    Tags.TagName,\n    Category.CategoryName\nFROM\n    Recipe\nJOIN\n    Category ON Recipe.CategoryId = Category.id\nJOIN\n    RecipeIngredient ON Recipe.id = RecipeIngredient.RecipeId\nJOIN\n    Ingredients ON RecipeIngredient.IngredientId = Ingredients.id\nJOIN\n    RecipeTag ON Recipe.id = RecipeTag.RecipeId\nJOIN\n    Tags ON RecipeTag.TagId = Tags.id;"
  }

  // remove
  collection.schema.removeField("1mh5hyf5")

  // remove
  collection.schema.removeField("7meovtdq")

  // remove
  collection.schema.removeField("vghh18pk")

  // remove
  collection.schema.removeField("xfbxxlni")

  // remove
  collection.schema.removeField("qzztx27o")

  // remove
  collection.schema.removeField("mf56jte0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0mumjhte",
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
    "id": "lxz0x4a2",
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
    "id": "5su6sxur",
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
    "id": "fqoruwht",
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
    "id": "ljcryjxk",
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
    "id": "str6mnad",
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
    "query": "SELECT\n    Recipe.id,\n    Recipe.RecipeName,\n    Recipe.RecipeInstructions,\n    RecipeIngredient.Quantity,\n    Ingredients.IngredientName,\n    Tags.TagName,\n    Category.CategoryName\nFROM\n    Recipe\nJOIN\n    Category ON Recipe.CategoryId = Category.id\nJOIN\n    RecipeIngredient ON Recipe.id = RecipeIngredient.RecipeId\nJOIN\n    Ingredients ON RecipeIngredient.IngredientId = Ingredients.id\nJOIN\n    RecipeTag ON Recipe.id = RecipeTag.RecipeId\nJOIN\n    Tags ON RecipeTag.TagId = Tags.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1mh5hyf5",
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
    "id": "7meovtdq",
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
    "id": "vghh18pk",
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
    "id": "xfbxxlni",
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
    "id": "qzztx27o",
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
    "id": "mf56jte0",
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
  collection.schema.removeField("0mumjhte")

  // remove
  collection.schema.removeField("lxz0x4a2")

  // remove
  collection.schema.removeField("5su6sxur")

  // remove
  collection.schema.removeField("fqoruwht")

  // remove
  collection.schema.removeField("ljcryjxk")

  // remove
  collection.schema.removeField("str6mnad")

  return dao.saveCollection(collection)
})
