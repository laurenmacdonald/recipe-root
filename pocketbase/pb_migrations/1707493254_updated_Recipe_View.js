/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT\n    `Recipe`.id,\n    `Recipe`.`RecipeName`,\n    count(`Ingredients`.id) as totalIngredients\nFROM `Recipe`\nLEFT JOIN `Ingredients` on `Ingredients`.id= `Recipe`.`Ingredients`"
  }

  // remove
  collection.schema.removeField("w82gkbql")

  // remove
  collection.schema.removeField("jvxnvzj3")

  // remove
  collection.schema.removeField("rb5ehy9w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ptg99qog",
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
    "id": "okhz6lwf",
    "name": "totalIngredients",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Ingredients`.`IngredientName`, `Recipe`.`Directions`\nFROM `Recipe` \nJOIN `Ingredients` ON `Recipe`.`Ingredients` = `Ingredients`.id "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w82gkbql",
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
    "id": "jvxnvzj3",
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
    "id": "rb5ehy9w",
    "name": "Directions",
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
  collection.schema.removeField("ptg99qog")

  // remove
  collection.schema.removeField("okhz6lwf")

  return dao.saveCollection(collection)
})
