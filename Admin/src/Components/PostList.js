import * as React from "react";
import {
  List,
  Datagrid,
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
  ShowButton,
  ShowContextProvider,
  useShowController,
} from "react-admin";

const PostList = (props) => {
  return (
    <List>
      <Datagrid>
        <TextField source="title" />
        <TextField source="teaser" />
        <RichTextField source="body" />
        <DateField label="Publication date" source="published_at" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default PostList;
