/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Tags`.`TagName`\nFROM `Recipe`\nFULL JOIN `Tags` ON `Tags`.`RecipeId` = `Recipe`.id"
  }

  // remove
  collection.schema.removeField("cwt6m2aw")

  // remove
  collection.schema.removeField("vgvs5o2o")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    `Tags`.`TagName`\nFROM `Recipe`\nJOIN `Tags` ON `Tags`.`RecipeId` = `Recipe`.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwt6m2aw",
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
    "id": "vgvs5o2o",
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
  collection.schema.removeField("puaygkrc")

  // remove
  collection.schema.removeField("pyhfhnzd")

  return dao.saveCollection(collection)
})
