const express = require("express");
const { indexController, newGController,delGController, updGController } = require("../controllers/gundam_controllers");
const router = express.Router();


router.get("/", indexController)
      .post("/newGundam", newGController)
      .delete("/:id", delGController)
      .put("/:id" ,updGController)
      
module.exports = router;