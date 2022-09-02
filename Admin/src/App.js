import React from "react";
import { Admin, Resource, Layout, useDataProvider } from "react-admin";
import restProvider from "ra-data-simple-rest";
import Students from "./Components/Students";
import Teachers from "./Components/Teachers";
import Create1 from "./Components/Create";
import Theme from "./Components/Theme";
import Edit1 from "./Components/Edit";
import TeacherEdit from "./Components/TeacherEdit";
import TeacherCreate from "./Components/TeacherCreate";
import PostShow, { PostList, PostCreate } from "./Components/PostShow";
import Js from "./db.json";

function App() {
  const dataProvider = useDataProvider();
  dataProvider.getList(Js);

  const MyTheme = (props) => <Layout {...props} appBar={Theme} />;
  return (
    <Admin
      // dataProvider={restProvider("http://localhost:3000")}
      dataProvider={dataProvider}
      layout={MyTheme}
    >
      {/* <Resource name="Students" list={Students} create={Create1} edit={Edit1} />
      <Resource
        name="Teachers"
        list={Teachers}
        edit={TeacherEdit}
        create={TeacherCreate}
      /> */}
      <Resource
        name="PostShow"
        show={PostShow}
        list={PostList}
        create={PostCreate}
      />
    </Admin>
  );
}

export default App;
