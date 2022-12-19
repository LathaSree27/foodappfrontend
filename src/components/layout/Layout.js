import React from "react";
import Header from "../header/Header";
import { Box, Container, Card } from "@material-ui/core";

const Layout = (props) => {
  return (
    <Box>
      <Header />
      <Container maxWidth={false}>
        <Card>{props.children}</Card>
      </Container>
    </Box>
  );
};

export default Layout;
