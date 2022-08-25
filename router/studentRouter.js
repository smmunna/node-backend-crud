const express = require('express')
const router = express.Router()
const { Student } = require('../model/studentModel')

//function for bellow router
const studentsDetails = async (req,res) =>{
    const students = await Student.find();
    res.send(students);
}
const createStudent = async (req,res) =>{
    const newStudent = new Student(req.body)
        try {
            const data = await newStudent.save();
            res.send(data);
        } catch (error) {
            console.log(error.message);
        }
}

//6307e168e724adeda2d5fa1d
const IndividualStudent = async (req,res) =>{
    const id = req.params.id;
    const students = await Student.find({_id:id});
    res.send(students);
}
const updateStudent = async (req,res) =>{
    const id = req.params.id;
    const update = req.body;
    const updateStudents = await Student.findByIdAndUpdate(id,update)
    res.send("Updated Data");
}
const deleteStudent = async (req,res) =>{
    const id = req.params.id;
    const deleteData = await Student.findOneAndDelete(id);
    res.send('Deleted');
}

//Router for index.js file=>
router.route('/')
    .get(studentsDetails)
    .post(createStudent);
router.route('/:id')
    .post(IndividualStudent)
    .put(updateStudent)
    .delete(deleteStudent);

module.exports = router;