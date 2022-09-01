import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
} from "react-admin";

const TeacherCreate = (props) => {
  return (
    <Create title="Create Student Details" {...props}>
      <SimpleForm>
        <TextInput source="id" validate={required()} />
        <TextInput source="Name" validate={required()} />
        <TextInput source="Class" validate={required()} />
        <TextInput source="Subject" validate={required()} />
        <DateInput source="JoinedDate" validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export default TeacherCreate;
