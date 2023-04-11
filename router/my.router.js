var router = require("express").Router();
var testcontroller = require('../controller/test.controller');

router.get('/greetings', testcontroller.greetings);
router.get('/testing', testcontroller.testing);
router.get('/testing1', testcontroller.testing1);
router.get('/testing2', testcontroller.testing2);
router.get('/testing3', testcontroller.testing3);





module.exports = router;
