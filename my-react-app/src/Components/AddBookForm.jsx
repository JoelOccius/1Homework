/*import { useState } from "react";
import './AddBookForm.css';

function AddBookForm({onAdd}){
    const [title, setTitle] = useState ('');
    const [author, setAuthor] = useState ('');
    const [description, setDescription] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim() || !author.trim() || !description.trim()) return;

        const newBook = {
            id:Date.now(),
            title,
            author,
            description,
        };

        onAdd(newBook);
        setTitle('');
        setAuthor('');
        setDescription('');
    };

    return(
        <form className="Add-Book-Form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title} 
            onChange={(e) => setTitle(e.target.value)}/>

            <input type="text" placeholder="Author" value={author} 
            onChange={(e) => setAuthor(e.target.value)}/>

            <textarea type="text" placeholder="Description" value={description} 
            onChange={(e) => setDescription(e.target.value)}/>

            <button type="submit">+ Add Book</button>
            
        </form>
    )
};
export default AddBookForm;*/


// AddStudentForm.jsx
/*import { useState } from "react";

function AddStudentForm({onAddStudent}){
    //controler input pour la forme
    const [firstName, setFirstName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [grade, setGrade] = useState ('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!firstName.trim || !lastName.trim || !grade.trim) return;

        const newStudent = {
            id: Date.now(), firstName, lastName, grade,
        };

        onAddStudent = (newStudent); //call parent function student

        setFirstName('');
        setLastName('');
        setGrade('');
    };

    return(
        <form className="student-form">
            <input type="text" placeholder="First Name" value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}/>

            <input type="text" placeholder="Last Name" value={lastName} 
            onChange={(e) => setLastName(e.target.value)}/>

            <input type="text" placeholder="Grade" value={grade} 
            onChange={(e) => setGrade(e.target.value)}/>

            <button type="submit">+ Add Student</button>
        </form>
    )
};
export default AddStudentForm;*/