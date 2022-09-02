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
  SimpleForm,
  Create,
  DateInput,
  TextInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

// const PostList = () => (
//   <SimpleShowLayout>
//     <TextField source="title" />
//     <TextField source="teaser" />
//     <RichTextField source="body" />
//   </SimpleShowLayout>
// );

const PostShow = (props) => {
  const controllerProps = useShowController();
  return (
    <ShowContextProvider value={controllerProps}>
      <Show>
        <SimpleShowLayout>
          <TextField source="title" />
          <TextField source="teaser" />
          <RichTextField source="body" />
          <DateField label="Publication date" source="published_at" />
        </SimpleShowLayout>
      </Show>
    </ShowContextProvider>
  );
};

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

const PostCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="teaser" />
        <RichTextInput source="body" />
        <DateInput label="Publication date" source="published_at" />
      </SimpleForm>
    </Create>
  );
};

export default PostShow;
export { PostList, PostCreate };
