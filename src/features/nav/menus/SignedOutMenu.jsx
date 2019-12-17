import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedOutMenu = ({ signIn }) => {
  return (
    <Menu.Item position="right">
      <Button
        onClick={signIn}
        as={Link}
        to="/"
        basic
        inverted
        content="Login"
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
