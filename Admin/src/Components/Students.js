import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const Students = (props) => {
  return (
    <List {...props}>
      <Datagrid hover={true}>
        <TextField source="id" />
        <TextField source="Name" />
        <DateField source="Dob" />
        <TextField source="Class" />
        <DateField source="JoinedDate" />
        <EditButton basepath="/Students" />
        <DeleteButton basepath="/Students" />
      </Datagrid>
    </List>
  );
};

export default Students;
