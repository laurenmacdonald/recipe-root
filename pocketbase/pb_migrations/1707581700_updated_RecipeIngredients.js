/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqsu2sq7o523zbf")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `Category`.`CategoryName`, `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Ingredients` ON `Ingredients`.`Recipe` = `Recipe`.id\nJOIN `Category` ON `Category`.id = `Recipe`.`CategoryId`\nJOIN `Tags` ON `Tags`.`Recipe` = `Recipe`.id\n"
  }

  // remove
  collection.schema.removeField("1gkikaod")

  // remove
  collection.schema.removeField("njnicghe")

  // remove
  collection.schema.removeField("8ktpy1d2")

  // remove
  collection.schema.removeField("ebsz26pg")

  // remove
  collection.schema.removeField("jv4wvcmd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xnxs9cyk",
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
    "id": "raul1qbu",
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
    "id": "3zjvcus1",
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
    "id": "up4phq5n",
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
    "id": "5booh8cl",
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
  const collection = dao.findCollectionByNameOrId("wqsu2sq7o523zbf")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, `Recipe`.`RecipeName`, `Recipe`.`RecipeInstructions`, `Ingredients`.`IngredientName`, `Category`.`CategoryName`, `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Ingredients` ON `Ingredients`.`Recipe` = `Recipe`.id\nJOIN `Category` ON `Category`.id = `Recipe`.`CategoryId`\nJOIN `Tags` ON `Tags`.id = `Recipe`.`Tags`\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1gkikaod",
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
    "id": "njnicghe",
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
    "id": "8ktpy1d2",
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
    "id": "ebsz26pg",
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
    "id": "jv4wvcmd",
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
  collection.schema.removeField("xnxs9cyk")

  // remove
  collection.schema.removeField("raul1qbu")

  // remove
  collection.schema.removeField("3zjvcus1")

  // remove
  collection.schema.removeField("up4phq5n")

  // remove
  collection.schema.removeField("5booh8cl")

  return dao.saveCollection(collection)
})
