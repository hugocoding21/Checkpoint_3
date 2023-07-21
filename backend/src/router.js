const express = require("express");

const router = express.Router();

const mangaControllers = require("./controllers/mangaControllers");
const chapterControllers = require("./controllers/chapterControllers");
const imageControllers = require("./controllers/imageControllers");

router.get("/manga", mangaControllers.browse);
router.get("/manga/:id", mangaControllers.read);
// router.put("/manga/:id", mangaControllers.edit);
// router.post("/manga", mangaControllers.add);
// router.delete("/manga/:id", mangaControllers.destroy);

router.get("/chapter", chapterControllers.browse);
router.get("/chapter/:id", chapterControllers.findchapter);

// router.get("/image", imageControllers.browse);
router.get("/image/:id", imageControllers.findbychapter);
// router.get("/image/:id", imageControllers.read);
// router.put("/image/:id", imageControllers.edit);
// router.post("/image", imageControllers.add);
// router.delete("/image/:id", imageControllers.destroy);

module.exports = router;
