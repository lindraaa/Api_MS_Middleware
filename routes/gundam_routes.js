const express = require("express");
const gundam = require("../controllers/gundam_controllers");
const {validateInfo,createBasicAuth} = require("../middlewares/middleware")
const router = express.Router();


router.get("/", gundam.indexController)
      .post("/newGundam", validateInfo, gundam.newGController)
      .delete("/:id", createBasicAuth(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD), gundam.delGController)
      .put("/:id" , createBasicAuth(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD),validateInfo,gundam.updGController)
      
module.exports = router;