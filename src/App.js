//importação dos componentes de roteamento
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importação do hook useState
import { useState } from 'react';

//importação dos demais componentes criados
import NavBar from './components/NavBar/NavBar';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Home from './pages/Home';
import Info from './pages/Info';


//componente principal
function App() {
    //armazena lista de livroos cadastrados
    const [books, setBooks] = useState([]);

    //adiciona novo livro a lista
    const addBook = (book) => setBooks([...books, book]);

    //deleta livro com base no índice, criando um novo array sem o livro com o índice indicado
    const deleteBook = (index) => setBooks(books.filter((_, i) => i !== index));
    
    //possibilita edição de um livro
    const editBook = (index, updatedBook) => {
        const newBooks = [...books];
        newBooks[index] = updatedBook; //atualiza o livro específico pelo índice
        setBooks(newBooks);
    };


    return (
        //utilização do Router para navegação
        <Router>
            {/*chama o componente que possui os links para a navegação*/}
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Home /> } />
                    <Route path="/info" element={<Info /> } />
                    <Route path="/add" element={<BookForm addBook={addBook} />} /> {/*propriedade addBook é passada via props*/}
                    <Route path="/list" element={<BookList books={books} deleteBook={deleteBook} editBook={editBook} />} /> {/*as três propriedades são passadas via props*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;