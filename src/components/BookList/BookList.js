
//importando hook useState
import React, { useState } from 'react';

//importando componente para navegação
import { Link } from 'react-router-dom';

// Componente para tornar campos editáveis
function EditableField({ label, value, onSave }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newValue, setNewValue] = useState(value);

    // Ativa modo editável
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Salva edição e desativa modo editável
    const handleSaveClick = () => {
        onSave(newValue);
        setIsEditing(false);
    };

    // Atualiza novo valor
    const handleChange = (e) => {
        setNewValue(e.target.value);
    };


    return (
        <div>
            <strong>{label}:</strong>{" "}

            {/* Verifica se está no modo editável ou não */}
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newValue} // Valor do campo em edição
                        onChange={handleChange} // Atualiza valor
                        autoFocus
                    />
                    {/* Botão para salvar edição */}
                    <button onClick={handleSaveClick}>Salvar</button>
                </div>
            ) : (
                // Se não estiver no modo editável, mostra valor padrão que pode ser clicado
                <span onClick={handleEditClick}>{value}</span>
            )}
        </div>
    );
}


function BookList({ books, deleteBook, editBook }) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Lista de Livros</h1>

            {/* Verifica se a lista de livros está vazia */}
            {books.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Nenhum livro cadastrado...</p>
            ) : (
                // Contêiner flex para centralizar as caixinhas
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '20px',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    {books.map((book, index) => (
                        <div
                            key={index}
                            style={{
                                width: '300px',
                                padding: '10px',
                                marginBottom: '10px',
                                borderRadius: '8px',
                                backgroundColor: '#f9f9f9',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                        >
                            {/* Campos editáveis para atributos do livro */}
                            <EditableField
                                label="Título"
                                value={book.title}
                                onSave={(newTitle) => editBook(index, { ...book, title: newTitle })}
                            />
                            <EditableField
                                label="Autor"
                                value={book.author}
                                onSave={(newAuthor) => editBook(index, { ...book, author: newAuthor })}
                            />
                            <EditableField
                                label="Gênero"
                                value={book.genre}
                                onSave={(newGenre) => editBook(index, { ...book, genre: newGenre })}
                            />
                            <EditableField
                                label="Data de Publicação"
                                value={book.date}
                                onSave={(newDate) => editBook(index, { ...book, date: newDate })}
                            />

                            {/* Botão para excluir livro através do índice*/}
                            <button onClick={() => deleteBook(index)}>Excluir</button>
                        </div>
                    ))}
                </div>
            )}

            {/* Botão para cadastrar novo livro */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link to="/add">
                    <button style={{ width: '300px', padding: '6px' }}>Cadastrar Novo Livro</button>
                </Link>
            </div>
        </div>
    );
}

export default BookList;