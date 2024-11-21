const express = require("express");
const gundam = require("../controllers/gundam_controllers");
const {validateInfo} = require("../middlewares/middleware")
const router = express.Router();


router.get("/", gundam.indexController)
      .post("/newGundam", validateInfo, gundam.newGController)
      .delete("/:id", gundam.delGController)
      .put("/:id" ,validateInfo,gundam.updGController)
      
module.exports = router;