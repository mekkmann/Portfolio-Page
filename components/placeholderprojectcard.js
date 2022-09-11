import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const PHCard = () => (
  <Card variant="bordered" css={{ w: "100%", h: "400px" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="/placeholder.png"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Placeholder"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
        <Col>
          <Row>
            <Col>
              <Text b color="#EEE6CE" size={"1.5rem"}>
              Placeholder
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="space-around">
            <a href="Placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCardLink">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026", marginTop: "" }}
                className="projectCardButton"
              >
                <Text
                  css={{ color: "#EEE6CE" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  GitHub
                </Text>
              </Button>
            </a>
            <a href="Placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCardLink">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                className="projectCardButton"
              >
                <Text
                  css={{ color: "#EEE6CE" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  disabled
                >
                  Live
                </Text>
              </Button>
            </a>
          </Row>
        </Col>
    </Card.Footer>
  </Card>
);
