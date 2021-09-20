const express = require('express');
const router = express.Router();

// libs
const Messages = require('../src/lib/Messages');

router.get('/list', (req, res, next) => {
    setTimeout(()=>{
        Messages.list(req.query.roomId, messages => {
            res.json(messages);
        });
    },30)

});

module.exports = router;