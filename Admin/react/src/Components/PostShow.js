import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";

const PostShow = (props) => {
  return (
    <List title="Post view" {...props}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="teaser" />
        <DateField source="published_at" />
      </Datagrid>
    </List>
  );
};

export default PostShow;
