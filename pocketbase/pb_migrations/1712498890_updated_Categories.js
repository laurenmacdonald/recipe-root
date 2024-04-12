/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("99xybjs0e2bqv0h")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("99xybjs0e2bqv0h")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
