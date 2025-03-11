import { useState } from 'react';

//componente para adicionar novos livros através do formulário
//recebe por props função addBook
function BookForm({ addBook }) {
    //varíável book com o setter e o useState para inicialização
    const [book, setBook] = useState({title: '', author: '', genre: '', date: ''});

    //lida com o evento do formulário
    const handleSubmit = (e) => {
        //previne de recarregar a página ao enviar o formulário
        e.preventDefault();
        addBook(book);
        //reseta os campos para a próxima entrada
        setBook({title: '', author: '', genre: '', date: ''});
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', textAlign: 'center' }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <h1>Cadastrar Novo Livro</h1>
                
                {/*atributo onSubmit garante que ao enviar o form, função handleSubmit será chamada*/}
                <form onSubmit={handleSubmit}>

                    {/*caixas de texto para adicionar novos livros*/}
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Título:
                            <input
                                type="text"
                                placeholder="Título"
                                value={book.title}
                                onChange={(e) => setBook({ ...book, title: e.target.value })}
                                required
                                style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Autor:
                            <input
                                type="text"
                                placeholder="Autor"
                                value={book.author}
                                onChange={(e) => setBook({ ...book, author: e.target.value })}
                                required
                                style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Gênero:
                            <input
                                type="text"
                                placeholder="Gênero"
                                value={book.genre}
                                onChange={(e) => setBook({ ...book, genre: e.target.value })}
                                required
                                style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Data de Publicação:
                            <input
                                type="date"
                                value={book.date}
                                onChange={(e) => setBook({ ...book, date: e.target.value })}
                                required
                                style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
                            />
                        </label>
                    </div>

                    {/*botão para adicionar novo livro*/}
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '15px',
                            backgroundColor: '#808080',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            marginTop: '20px'
                        }}
                    >
                        Adicionar Livro
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BookForm;
