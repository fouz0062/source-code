import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import Books from "./Components/books";
import author from "./Components/author";
import genre from "./Components/genre";
import BooksCreate from "./Components/booksCreate";
import GenreCreate from "./Components/genreCreate";
import AuthorCreate from "./Components/AuthorCreate";
import BookEdit from "./Components/BookEdit";
import GenreEdit from "./Components/genreEdit";
import AuthorEdit from "./Components/AuthorEdit";
const fetchJson = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("X-Custom-Header", "bookstore");
  const token = "XXXXXXXXXXXXX";
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const Data = simpleRestProvider("http://localhost:4004/api/v1/show", fetchJson);

function App() {
  return (
    <Admin dataProvider={Data}>
      <Resource
        name="books"
        list={Books}
        create={BooksCreate}
        edit={BookEdit}
      />
      <Resource
        name="genre"
        list={genre}
        create={GenreCreate}
        edit={GenreEdit}
        recordRepresentation={(record) => `${record.id}`}
      />

      <Resource
        name="author"
        list={author}
        create={AuthorCreate}
        edit={AuthorEdit}
      />
    </Admin>
  );
}

export default App;
