/* import { useState } from "react";

function BookList() {
    const [books, setBooks] = useState([
        { id: 1, title: 'The Engineer', author: 'JOEL OCCIUS' },
        { id: 2, title: 'The Alchemist', author: 'JEAN ROBERT LOUS' },
        { id: 3, title: 'Clean code', author: 'RENER SILLY' },

    ])

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleAddBook = (e) => {
        e.preventDefault();

        if (title.trim() === '' || author.trim() === '') return;
        const newBook = {
            id: Date.now(), 
            title, 
            author,
        };

        setBooks([newBook, ...books,]);
        setTitle('');
        setAuthor('');
    }

    const removeBook = (id) => {
        const filtered = books.filter((book) => book.id !== id);
        setBooks(filtered);
    };

    return (

        <div className="p-6 space-y-4">

            <h1 className="text-2xl font-bold text-center">My books</h1>
            <form onSubmit={handleAddBook} className="p-4 space-y-4 bg-amber-400 rounded shadow">
                <input
                    type="text"
                    placeholder="Title"
                    className="border p-2 rounded w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Author"
                    className="border p-2 rounded w-full"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                    + Add Book
                </button>
            </form>

            {books.length === 0 ? (
                <p className="text-center text-blue-400">No books avalable for the moment.</p>
            ) : (
                books.map((book) => (
                    <div
                        key={book.id}
                        className="bg-blue-200 shadow-md rounded p-8 flex justify-between items-center"
                    >
                        <div>
                            <p className="text-lg font-semibold">{book.title}</p>
                            <p className="text-gray-600">{book.author}</p>
                        </div>

                        <button onClick={() => removeBook(book.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                            Remove.
                        </button>
                    </div>

                ))
            )}

        </div>

    );

};
 export default BookList;/*
 /** */