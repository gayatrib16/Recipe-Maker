const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    return res.status(200).json({ message: "Welcome to DMS server ", success: true, });
});

module.exports = router;