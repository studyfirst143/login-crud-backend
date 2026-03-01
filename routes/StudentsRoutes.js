import { Router } from "express";
import { CreateStudent, GetAllStudents, UpdateStudent, DeleteStudent } from "../controllers/StudentController.js";


const router = Router();

router.post("/student", CreateStudent);
router.get("/student", GetAllStudents);
router.put("/student/:id", UpdateStudent);
router.delete("/student/:id", DeleteStudent);

export default router