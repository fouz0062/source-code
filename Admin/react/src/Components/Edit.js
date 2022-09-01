import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const Edit1 = (props) => {
  return (
    <Edit title="Edit Student Details" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="Name" />
        <DateInput source="Dob" />
        <TextInput source="Class" />
        <DateInput source="JoinedDate" />
      </SimpleForm>
    </Edit>
  );
};

export default Edit1;
