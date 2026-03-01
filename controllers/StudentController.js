import StudentModel from '../models/Student.js'

export const CreateStudent = async (req,res) =>{
    try{
        const stud = new StudentModel(req.body);

        const savedstuds = await stud.save();

        res.status(201).json({
            message:"Student Successfully Created",
            savedstuds
        })

    }catch(err){
        res.status(400).json({message: err.message});
    }
}

export const GetAllStudents = async (req,res) =>{
  try{
      const studs = await StudentModel.find();

      res.status(200).json({
        message: "LIST OF ALL STUDENTS",
        studs
      });
  }catch(err){
    res.status(400).json({message: err.message})
  }


} 

 export const UpdateStudent = async (req,res) =>{
    try{

        const updateStudent = await StudentModel.findByIdAndUpdate(req.params.id, req.body, {new:true});

        if(!updateStudent){
            return res.status(404).json({message: "Student Not Found"});
        }

        res.status(200).json({
            message:"Successfully Updated!",
            updateStudent
        })
        
    }catch(err){
        res.status(400).json({message:err.message});
    }
  }

  export const DeleteStudent = async (req,res) =>{
    try{
        const DeletedStudents = await StudentModel.findByIdAndDelete(req.params.id);
        
        if(!DeletedStudents ){
            return res.status(404).json({message: "Student Not Found!"})
        }

        res.status(200).json({
            message: "Student Deleted Successfully!",
            DeletedStudents
        })
        
    }catch(err){
         res.status(400).json({error_message:err.message});
    }
  }