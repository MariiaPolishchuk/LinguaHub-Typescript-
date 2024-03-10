import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const Layout: React.FC = ({ children }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div >
      <Tabs className="lesson-tabs "
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label="Reading"
          component={Link}
          to="/course/intermediate/my-fascinating-morning/lesson"
        />
        <Tab
          label="Vocabulary"
          component={Link}
          to="/course/intermediate/my-fascinating-morning/lesson/test"
        />
        <Tab
          label="Grammar"
          component={Link}
          to="/course/intermediate/my-fascinating-morning/lesson/grammar"
        />
        <Tab
          label="Listening"
          component={Link}
          to="/course/intermediate/my-fascinating-morning/lesson/listening"
        />
      </Tabs>
      {children}
    </div>
  );
};

export default Layout;


