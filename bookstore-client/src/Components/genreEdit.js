import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const GenreEdit = (props) => {
  return (
    <Edit title="Edit a Genre Info" {...props}>
      <SimpleForm>
        <DateInput source="Updated on" />
        <TextInput source="_id" />
        <TextInput source="Type" />
      </SimpleForm>
    </Edit>
  );
};

export default GenreEdit;
