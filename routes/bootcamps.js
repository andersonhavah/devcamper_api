const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");
const router = express.Router();

// Handle the root path: /api/v1/bootcamps
router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp);

// Handle paths with IDs: /api/v1/bootcamps/:id
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// Can also be written like this:
// router.get('/', getBootcamps);
// router.post('/', createBootcamp);
// router.get('/:id', getBootcamp);
// router.put('/:id', updateBootcamp);
// router.delete('/:id', deleteBootcamp);

module.exports = router;
