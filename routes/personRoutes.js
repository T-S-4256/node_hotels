const express = require("express");
const router = express.Router();




const Person = require("../modules/person");


//FETCH ALL PERSON DATA

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("PERSON DATA FETCHED SUCCESSFULLY");
        res.status(200).json(data);
    }
    catch (err) {
        console.log("Internal Server Error : ", err);
        res.status(500).json({ err: "Internal Server Error" });
    }
})



//FETCHING DATA ON THE BASIS OF DESIGNATION 


router.get('/:designationName', async (req, res) => {
    try {
        const designationName = req.params.designationName;
        const designation = ['chef', 'waiter', 'manager'];

        // if (designationName=='chef'||designationName=='manager'||designationName=='waiter') {
        if (designation.find(data => data == designationName)) {
            const personData = await Person.find({ designation: designationName });
            res.status(200).json(personData);
            console.log("THE DATA OF ", designationName, " IS FETCHED SUCCESSFULLY!");
        }
        else {
            console.log("NO DATA FOUND WITH DESIGNATION NAME : ", designationName)
        }
    }
    catch (err) {
        console.log("Internal Server Error : ", err);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

//INSERTING DATA 

router.post('/', async (req, res) => {
    try {
        const responseData = req.body;
        const newPerson = new Person(responseData);
        const savedData = await newPerson.save();
        console.log("NEW PERSON ADDED SUCCESSFULLY!");
        res.status(200).json(savedData);
    }
    catch (err) {
        console.log("Internal Server Problem : ", err);
        res.status(500).json({ err: "Internal Server Error" })
    }

});


//UPDATE PERSON DATA 

router.put('/:person_id', async (req, res) => {
    try {
        const personId = req.params.person_id;
        const dataToBeUpdated = req.body;
        const response = await Person.findByIdAndUpdate(personId, dataToBeUpdated, {
            new: true,
            runValidators: true
        })

        if (!response) {
            console.log("NO DATA FOUND WITH THE GIVEN ID")
            return res.status(404).json({ error: "Person Not Found" })
        }

        console.log("THE DATE OF PERSON UPDATED WHOSE ID : ", personId);
        res.status(200).json(response);

    }
    catch (err) {
        console.log("Internal Server Error : ", err);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

//DELETE PERSON

router.delete('/:person_id', async (req, res) => {
    try {
        const personId = req.params.person_id;
        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            console.log("NO DATA FOUND WITH THE GIVEN ID");
            return res.status(404).json({ error: "No Data Found" })
        }
        console.log("THE DATA OF THE PERSON DELETED WHOSE ID : ", personId);
        res.status(200).json(response);
    }
    catch (err) {
        console.log("Internal Server Error :", err);
        res.status(500).json({ err: "Internal Server Error" });
    }

})



module.exports = router;