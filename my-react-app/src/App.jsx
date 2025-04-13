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

// import BookList from "./BookList"
// import BookList1 from "./Components/BookList1";
import { useState } from "react";
// import AddBookForm from "./Components/AddBookForm";
import MovieForm from "./Components/MovieForm";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";


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

  const [movies, setMovies] = useState(['']);
  // const handleAddBook =(book) =>
  const handleAddMovie =(movie) => {
    // setBooks([book, ...books]);
    setMovies([movie, ...movies]);
  }

  // const handleRemoveBook = (id) => {
    // setBooks(books.filter((book) => book.id !==id))

    const handleRemoveMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !==id))
  }
  
  return (
    <div>
      
      {/* <BookList/> */}
      <Header/>
      {/* <AddBookForm onAddBook={handleAddBook}/> */}
      <MovieForm onAddMovie={handleAddMovie}/>
      
      {/* <BookList1 books={books} onRemove={handleRemoveBook}/> */}
      <MovieList movies={movies} onRemove={handleRemoveMovie}/>
      {/* <Footer/> */}
      {/* <BookList1/> */}
    </div>
  )
};





