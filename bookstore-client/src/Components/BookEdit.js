import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
  ImageField,
} from "react-admin";

const BookEdit = (props) => {
  return (
    <Edit title="Edit a Book Info" {...props}>
      <SimpleForm>
        <TextInput source="_id" />
        <DateInput source="Updated On" />
        <TextInput source="Title" />
        <TextInput source="Author" />
        <TextInput source="Genre" />
        <TextInput source="Rating" />
        <ImageInput source="pictures" label="Related pictures" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default BookEdit;
