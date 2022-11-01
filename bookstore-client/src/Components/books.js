import { Link } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  ReferenceField,
  RichTextField,
  useRefresh,
  DateField,
} from "react-admin";

const Books = () => {
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
    <List>
      <Datagrid>
        <DateField source="Created On" />
        <TextField source="id" />
        <TextField source="Title" />
        <ReferenceField source="Author" reference="author" />
        <ReferenceField source="Genre" reference="genre" />
        <TextField source="Rating" />
        <ImageField source="pictures" src="url" title="desc" />
        <EditButton basePath="/books" />
        <RichTextField source="link" onClick={handleClick1} />
      </Datagrid>
    </List>
  );
};

export default Books;
