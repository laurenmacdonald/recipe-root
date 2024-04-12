/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT `Ingredients`.id, `Ingredients`.`Amount`, `Ingredients`.`IngredientName`\nFROM `Ingredients`\nLEFT JOIN `Recipe` ON `Ingredients`.id = `Recipe`.`Ingredients`"
  }

  // remove
  collection.schema.removeField("edwj2jss")

  // remove
  collection.schema.removeField("mzvqvlov")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "we3nhrs9",
    "name": "Amount",
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
    "id": "x63svlf4",
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
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Tags`.`TagName`\nFROM `Recipe`\nFULL JOIN `Tags` ON `Recipe`.id = `Tags`.`RecipeId`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "edwj2jss",
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
    "id": "mzvqvlov",
    "name": "TagName",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Quick",
        "Easy",
        "Party",
        "Chocolate",
        "Alcoholic",
        "Indian",
        "Thai",
        "Spicy",
        "Rich",
        "Light"
      ]
    }
  }))

  // remove
  collection.schema.removeField("we3nhrs9")

  // remove
  collection.schema.removeField("x63svlf4")

  return dao.saveCollection(collection)
})
