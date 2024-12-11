const express = require("express");
const router = express.Router();

const MenuItem = require("../modules/menu");

//FETCHING ALL DETAILS OF ALL THE MENU ITEMS 

router.get('/', async (req, res) => {
    try {
        const itemData = await MenuItem.find();
        console.log("THE DATA OF MENU ITEMS ARE FETCHED SUCCESSFULLY!");
        res.status(200).json(itemData);
    }
    catch (err) {
        console.log("Internal Server Error : ", err);
        res.status(500).json({ err: "Internal Server Erorr" });
    }
})


//FETCHING DATA OF ITEMS ACCORDING TO THE TASTE
router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        const tastes = ['sweet', 'spicy', 'bitter', 'sour'];
        if (tastes.find(taste => taste == tasteType)) {
            const tasteItems =await MenuItem.find({ taste: tasteType });
            res.status(200).json(tasteItems);
            console.log("THE DATA OF ALL THE ITEMS OF ", tasteType, " TASTE");
        }
        else {
            console.log("NO ITEM FOUND OF ", tasteType, " TASTE");
            res.status(200).send("NO ITEMS ARE FOUN OF "+tasteType+ " TASTE");
        }

    }
    catch (err) {
        console.log("Internal Server Error : ", err);
        res.status(500).json({ err: "Internal Server Error" });
    }
})


//INSERTING ITEMS IN THE MENU

router.post('/', async (req, res) => {
    try {
        const requestData = req.body;
        const newItem = new MenuItem(requestData);
        const savedItem = await newItem.save();
        console.log("NEW ITEM IN THE MENU ADDED!");
        res.status(200).json(savedItem);
    }
    catch (err) {
        console.log("Internal Server Error : ", err);
        res.status(500).json({ err: "Internal Server Error" });
    }
})





module.exports = router;