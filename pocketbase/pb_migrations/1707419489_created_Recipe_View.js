/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3pnh9h8jme2gnsl",
    "created": "2024-02-08 19:11:29.266Z",
    "updated": "2024-02-08 19:11:29.266Z",
    "name": "Recipe_View",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "ryxp7byz",
        "name": "Favorite",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT `Recipe`.id, `Recipe`.`RecipeName`, `Ingredients`.`IngredientName`, `Recipe`.`Directions`, `Recipe`.`Favorite`, `Recipe`.`Image`, `Recipe`.`Notes`, `Recipe`.`Source`, `Recipe`.`Tags`\nFROM `Recipe` \nJOIN `Category` ON `Recipe`.`Category` = `Category`.id \nJOIN `Ingredients` ON `Recipe`.`Ingredients` = `Ingredients`.id \nJOIN `Tags` ON `Recipe`.`Tags` = `Tags`.id\nJOIN `Allergens` ON `Recipe`.`Allergen` = `Allergens`.id "
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3pnh9h8jme2gnsl");

  return dao.deleteCollection(collection);
})
