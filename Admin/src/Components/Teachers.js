import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const Teachers = (props) => {
  return (
    <List {...props}>
      <Datagrid hover={true}>
        <TextField source="id" />
        <TextField source="Name" />
        <TextField source="Class" />
        <TextField source="Subject" />
        <DateField source="JoinedDate" />
        <EditButton basepath="/Teachers" />
        <DeleteButton basepath="/Teachers" />
      </Datagrid>
    </List>
  );
};

export default Teachers;
