import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
} from "react-admin";

const Create1 = (props) => {
  return (
    <Create title="Create Student Details" {...props}>
      <SimpleForm>
        <TextInput source="id" validate={required()} />
        <TextInput source="Name" validate={required()} />
        <DateInput source="Dob" validate={required()} />
        <TextInput source="Class" validate={required()} />
        <DateInput source="JoinedDate" validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export default Create1;
