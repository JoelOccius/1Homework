/*import BookCard from "./BookCard";
import './BookList.css';

//import './Header.css';

function BookList1({books, onRemove}) {
    return (
        <div className="book-list">
            {books.length === 0 ?(
                <p className="empty">No Book Added yet</p>
            ) : (
                books.map((book) => (
                    <BookCard key={book.id} book={book} onRemove={onRemove} />
                ))
            )}
            // {/* <h1 className="text-2xl font-bold">My 33library</h1> *//*/*
            {/* <BookCard/> *//*
        // </div>
        
        
    // )
// };
// export default BookList1;*/

// import StudentCard from "./StudentCard";
//import './BookList.css';

//import './Header.css';

/*import BookCard from './BookCard'; // Asire ou gen import si sa nesesè

function StudentList1({ students, onRemove }) {
  return (
    <div className="student-list">
      {students.length === 0 ? (
        <p className="empty">No Student Added yet</p>
      ) : (
        students.map((student) => (
          <BookCard key={student.id} student={student} onRemove={onRemove} />
        ))
      )}
      
      {/* 
        <h1 className="text-2xl font-bold">My Library</h1> 
        <StudentCard />
      }
      {/* <BookCard/> 
    </div>
  );
}

export default StudentList1;*/

