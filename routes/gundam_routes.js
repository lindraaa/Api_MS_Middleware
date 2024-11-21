const express = require("express");
const { indexController, newGController,delGController, updGController } = require("../controllers/gundam_controllers");
const {validateInfo} = require("../middlewares/middleware")
const router = express.Router();


router.get("/", indexController)
      .post("/newGundam", validateInfo, newGController)
      .delete("/:id", delGController)
      .put("/:id" ,updGController)
      
module.exports = router;