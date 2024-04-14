module.exports = app => {
  const names = require("../controllers/name.controller.js");

  var router = require("express").Router();

  app.use("/api/names", router);

  // GET
  router.get("/", names.findAll);
  router.get("/:id", names.findOne);
  
  // POST
  router.post("/", names.create);

  // PUT
  router.put("/:id", names.update);

  // DELETE
  router.delete("/:id", names.delete);
  router.delete("/", names.deleteAll);
};
