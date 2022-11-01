import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const GenreCreate = (props) => {
  return (
    <Create title="Create a Genre Info" {...props}>
      <SimpleForm>
        <DateInput source="created on" />
        <TextInput source="_id" />
        <TextInput source="Type" />
      </SimpleForm>
    </Create>
  );
};

export default GenreCreate;
