import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const AuthorCreate = (props) => {
  return (
    <Create title="Create a Genre Info" {...props}>
      <SimpleForm>
        <DateInput source="created on" />
        <TextInput source="_id" />
        <TextInput source="Name" />
      </SimpleForm>
    </Create>
  );
};

export default AuthorCreate;
