import express from 'express';
const router = express.Router();

import Item from '../modules/Item.mjs';

router.get ('/', (req,res) => {
    Item.find()
        .then(items => res.status(200).json(items));
});

router.post ('/', (req, res) =>{
    let newItem = new Item({
        _id: req.body.id,
        name: req.body.name
    });
    newItem.save().then(item => res.json (item));
});

router.delete ('/:id', (req,res) => {
    Item.findByIdAndDelete (req.params.id)
        .then (() => {
            res.json ({ success:true });
        })
        .catch (err => {
            console.log (err);
            res.status (500).json ({ success:false });
        });
});

router.put ('/:id', (req, res) => {
    Item.findById (req.params.id)
        .then (item => {
            let data = item;
            Item.findByIdAndDelete (req.params.id);
            data.name = req.body.name;
            let updatedItem = new Item (data)
            updatedItem.save().then(item =>{
                res.json(item)
            })
        })
})

export default router;