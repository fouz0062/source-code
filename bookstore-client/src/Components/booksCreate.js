import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
  ImageField,
} from "react-admin";

const BooksCreate = (props) => {
  return (
    <Create title="Create a Book Info" {...props}>
      <SimpleForm>
        <TextInput source="_id" />
        <DateInput source="created On" />
        <TextInput source="Title" />
        <TextInput source="Author" />
        <TextInput source="Genre" />
        <TextInput source="Rating" />
        <ImageInput source="pictures" label="Related pictures" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default BooksCreate;
