/*import BookList from "./BookList"
import DarkModeToggle from "./DarkModeToggle"
import ListOfFruits from "./ListOfFruits"
import NameForm from "./Onchange"
export default function App() {
  return (
     <div className="p-10 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind + Vite!</h1>
      <DarkModeToggle/>
      <ListOfFruits/>
      <NameForm/>
      <BookList/>
     </div>
  )
}*/

import BookList from "./BookList"
import BookList1 from "./Components/BookList1";
import { useState } from "react";
import Hello from "./Components/Hello";
// import AddBookForm from "./Components/AddBookForm";
// import MovieForm from "./Components/MovieForm";
// import Header from "./Components/Header";
// import MovieList from "./Components/MovieList";
// import TodoForm from "./Components/TodoForm";


// import BookList1 from "./Components/BookList1";
// import Footer from "./Components/Footer";
// import DarkModeToggle from "./DarkModeToggle"
// import ListOfFruits from "./ListOfFruits"
// import NameForm from "./Onchange"
/*export default function App(){

  // student
  // const [books, setBooks] = useState(['']);

  const [students, setStudents] = useState(['']);
  // const handleAddBook =(book) =>
  const handleAddStudent =(student) => {
    // setBooks([book, ...books]);
    setStudents([student, ...students]);
  }

  // const handleRemoveBook = (id) => {
    // setBooks(books.filter((book) => book.id !==id))

    const handleRemoveStudent = (id) => {
    setStudents(students.filter((student) => student.id !==id))
  }
  
  return (
    <div>
      
      {/* <BookList/> 
      <Header/>
      {/* <AddBookForm onAddBook={handleAddBook}/> 
      <AddBookForm onAddStudent={handleAddStudent}/>
      
      {/* <BookList1 books={books} onRemove={handleRemoveBook}/> 
      <BookList1 students={students} onRemove={handleRemoveStudent}/>
      {/* <Footer/> 
      {/* <BookList1/> 
    </div>
  )
};*/


export default function App(){

  // student
  // const [books, setBooks] = useState(['']);

  // const [movies, setMovies] = useState(['']);
  // const handleAddBook =(book) =>
  // const handleAddMovie =(movie) => {
    // setBooks([book, ...books]);
    // setMovies([movie, ...movies]);
  // }

  // const handleRemoveBook = (id) => {
    // setBooks(books.filter((book) => book.id !==id))

    // const handleRemoveMovie = (id) => {
    // setMovies(movies.filter((movie) => movie.id !==id))
  // }
  
  return (
    <div>
      
      {/* {/* <BookList/>  */}
      // <Header/>
      {/* <AddBookForm onAddBook={handleAddBook}/> */}
      {/* // <MovieForm onAddMovie={handleAddMovie}/> */}
      
      {/* <BookList1 books={books} onRemove={handleRemoveBook}/> */}
      {/* // <MovieList movies={movies} onRemove={handleRemoveMovie}/> */}
      {/* // <TodoForm onAdd={handleAddTask}/> */}
      // <Footer/> 
      {/* <BookList1/> */}
      <Hello/>
    </div>
  )
};


/*import { useState } from "react";
import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
// import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";

function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task) => {
        setTasks([task,...tasks]);
    };

    const handleToggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed} : task)
        )
    }

    const handleRemoveTask = (id) => {
        setTasks(tasks.filte((task) => task.id !== id))
    }

    return(
        <div>
            <Header/>
            <TodoForm onAdd={handleAddTask}/>
            {/* <TodoItem/> */
            // <TodoList/>
        // </div>
    // )
// };
// export default App;







