import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const TeacherEdit = (props) => {
  return (
    <Edit title="Edit Student Details" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="Name" />
        <TextInput source="Subject" />
        <TextInput source="Class" />
        <DateInput source="JoinedDate" />
      </SimpleForm>
    </Edit>
  );
};

export default TeacherEdit;
