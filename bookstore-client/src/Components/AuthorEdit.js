import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const AuthorEdit = (props) => {
  return (
    <Edit title="Edit a Genre Info" {...props}>
      <SimpleForm>
        <DateInput source="Updated on" />
        <TextInput source="_id" />
        <TextInput source="Name" />
      </SimpleForm>
    </Edit>
  );
};

export default AuthorEdit;
