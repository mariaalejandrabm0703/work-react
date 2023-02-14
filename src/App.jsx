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
    <section className="bg-gray-100 text-center w-full mx-auto py-12 px-4">
      <main>
        <h1 className="text-3xl font-extrabold text-black">
          Te recomiendo un libro
        </h1>
        <p>Regálame tu último libro leído</p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <form onSubmit={handleBookRead}>
            <input
              type="text"
              id="book"
              name="book"
              value={book}
              onChange={handleChange}
            ></input>
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="submit"
                className="py-4 px-6 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                Buscar
              </button>
            </div>
          </form>
        </div>

        <p>Regálame tu último libro leído</p>
        <div className="text-center text-gray-500 text-lg">
          <p>{recommendedBook}</p>
        </div>
      </main>
    </section>
  );
}

export default App;
