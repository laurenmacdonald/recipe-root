/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Ingredients`.`IngredientName`, `Recipe`.`Directions`\nFROM `Recipe` \nJOIN `Ingredients` ON `Recipe`.`Ingredients` = `Ingredients`.id "
  }

  // remove
  collection.schema.removeField("ixl84lsi")

  // remove
  collection.schema.removeField("qgbnnar8")

  // remove
  collection.schema.removeField("u5xeyxnk")

  // remove
  collection.schema.removeField("ryxp7byz")

  // remove
  collection.schema.removeField("xqnsimtd")

  // remove
  collection.schema.removeField("6zdjbfvb")

  // remove
  collection.schema.removeField("ts42dmbc")

  // remove
  collection.schema.removeField("wocl4pwr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "biux8iy7",
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
    "id": "huyram0h",
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
    "id": "eko4ewlk",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl")

  collection.options = {
    "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Ingredients`.`IngredientName`, `Recipe`.`Directions`, `Recipe`.`Favorite`, `Recipe`.`Image`, `Recipe`.`Notes`, `Recipe`.`Source`, `Recipe`.`Tags`\nFROM `Recipe` \nJOIN `Category` ON `Recipe`.`Category` = `Category`.id \nJOIN `Ingredients` ON `Recipe`.`Ingredients` = `Ingredients`.id \nJOIN `Tags` ON `Recipe`.`Tags` = `Tags`.id\nJOIN `Allergens` ON `Recipe`.`Allergen` = `Allergens`.id "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ixl84lsi",
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
    "id": "qgbnnar8",
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
    "id": "u5xeyxnk",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryxp7byz",
    "name": "Favorite",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xqnsimtd",
    "name": "Image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6zdjbfvb",
    "name": "Notes",
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
    "id": "ts42dmbc",
    "name": "Source",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wocl4pwr",
    "name": "Tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9oscerzqnk994ky",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("biux8iy7")

  // remove
  collection.schema.removeField("huyram0h")

  // remove
  collection.schema.removeField("eko4ewlk")

  return dao.saveCollection(collection)
})
