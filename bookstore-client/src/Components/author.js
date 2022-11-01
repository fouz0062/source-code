import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  useRefresh,
  DeleteButton,
  RichTextField,
} from "react-admin";

const Author = (props) => {
  const refresh = useRefresh();

  const handleClick1 = (e) => {
    e.preventDefault();
    // console.log(e.target.href);

    fetch(e.target.href)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        refresh();
      });
  };
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="Name" />
        <EditButton basePath="author" />
        <RichTextField source="link" onClick={handleClick1} />
      </Datagrid>
    </List>
  );
};

export default Author;
