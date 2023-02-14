import { useState } from "react";

/**
 * Description
 * aplicación donde pueda darle mis ultimo 3 libros leidos y me recomiende 1 libro leer basado en esos
 * adicionarle al buscar calificación de gusto del (malo)1-5(excelente)
 * mostrar titulo, autor, portada, resumen y comentario de algun otro autor
 * poder compartirlo en twitter
 * la cantidad de libros ingresados sea n-cantidad
 */
function App() {
  const recommendedBook = "Deberías leer ...";
  const [book, setBook] = useState("");

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const handleBookRead = (event) => {
    event.preventDefault();
    console.log(book);
  };

  return (
    <section className="bg-gray-100 p-4 rounded-lg shadow-md">
      <main>
        <h1>Te recomiendo un libro</h1>
        <p>Regálame tu último libro leído</p>
        <form onSubmit={handleBookRead}>
          <input
            type="text"
            id="book"
            name="book"
            value={book}
            onChange={handleChange}
          ></input>
          <button type="submit">Buscar</button>
        </form>
        <p>Regálame tu último libro leído</p>
        <div className="">
          <p>{recommendedBook}</p>
        </div>
      </main>
    </section>
  );
}

export default App;
