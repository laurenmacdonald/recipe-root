/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Tags`.`TagName`\nFROM `Recipe`\nFULL JOIN `Tags` ON `Recipe`.id = `Tags`.`RecipeId`"
  }

  // remove
  collection.schema.removeField("puaygkrc")

  // remove
  collection.schema.removeField("pyhfhnzd")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Tags`.`TagName`\nFROM `Recipe`\nFULL JOIN `Tags` ON `Tags`.`RecipeId` = `Recipe`.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "puaygkrc",
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
    "id": "pyhfhnzd",
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
  collection.schema.removeField("edwj2jss")

  // remove
  collection.schema.removeField("mzvqvlov")

  return dao.saveCollection(collection)
})
