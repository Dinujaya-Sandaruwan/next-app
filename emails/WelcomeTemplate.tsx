import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abord!</Preview>
      <Body style={body}>
        <Container>
          <Text style={heading}>
            Welcome to our platform {name}! We are excited to have you on board.
          </Text>
          <Link href="https://dinujaya.me">Click here to get started</Link>
        </Container>
      </Body>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

export default WelcomeTemplate;
