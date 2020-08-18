
const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const order = require('../tupago.json');

router.get('/', (req, res) => {
    res.json(order);
});

router.post('/', async (req, res) =>{

    
    const orderTPGFee = req.body.orderValue*0.032;
    const orderTPGFeeTax = orderTPGFee*0.19;
    // Primera forma de guardar en lo que pasan por post
    const task = {
        idRequest: req.body.idRequest,
        orderValue: req.body.orderValue,
        orderTPGFee,
        orderTPGFeeTax
        
    };
    // Segunda forma de guardar los cambios del post
    /*const { title, description } = req.body;*/
    
    res.json(task);
});




module.exports = router;