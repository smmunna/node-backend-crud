const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/my-student2')
.then(()=>console.log('MongoDB connected Successfully'))
.catch(err=>console.log(err.message));

const studentSchema = mongoose.Schema({
    name:{type:String, min:4},
    age:{type:Number},
    hobbies: String,
})

const Student = mongoose.model('Student',studentSchema);

exports.Student = Student;