/*import './BookCard.css';

function BookCard({book, onRemove}) {
    return(
        <div className='book-card'>

            <div className="book-info">
                <h3>{book.title}</h3>
                <p><strong>Author</strong>{book.author}</p>
                <p className="descriptiom">{book.description}</p>
                
            </div>
            <button onClick={() => onRemove(book.id)}>Remove</button>
        </div>
    )
};
export default BookCard;*/

function StudentCard({ student, onRemove}) {
    return(
        <div className="student-card">
            <div className="info">
                <h1>{student.firstName} {student.lastName}</h1>
                <p>Grade: {student.grade}</p>
            </div>
            <button onClick={() => onRemove(student.id)}>Remove</button>
        </div>
    )
};
export default StudentCard;