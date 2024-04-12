/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ao04hf5ukwu09yq")

  // remove
  collection.schema.removeField("yoagrkra")

  // remove
  collection.schema.removeField("zyainyjn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1auohgfy",
    "name": "Ingredients",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1lff7h70ls3xjer",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wsgkuqum",
    "name": "Category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8ayasl1g7v7ot4i",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fhs3dbpf",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmoucbqg",
    "name": "Allergen",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "pt6cw8uag5azj90",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ao04hf5ukwu09yq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yoagrkra",
    "name": "Equipment",
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
    "id": "zyainyjn",
    "name": "Ingredients",
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
  collection.schema.removeField("1auohgfy")

  // remove
  collection.schema.removeField("wsgkuqum")

  // remove
  collection.schema.removeField("fhs3dbpf")

  // remove
  collection.schema.removeField("vmoucbqg")

  return dao.saveCollection(collection)
})
