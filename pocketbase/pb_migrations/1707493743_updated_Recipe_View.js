/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Tags` ON `Tags`.id = `Recipe`.`Tags`"
  }

  // remove
  collection.schema.removeField("hapmhunp")

  // remove
  collection.schema.removeField("ipuivmmh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nkunjevb",
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
    "id": "usziyjp8",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Ingredients`.`IngredientName`\nFROM `Recipe`\nFULL JOIN `Ingredients` ON `Ingredients`.id= `Recipe`.`Ingredients`"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hapmhunp",
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
    "id": "ipuivmmh",
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
  collection.schema.removeField("nkunjevb")

  // remove
  collection.schema.removeField("usziyjp8")

  return dao.saveCollection(collection)
})
