import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const SMQRACard = () => (
  <Card variant="bordered" css={{ w: "100%", h: "400px" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="/apipic.png"
        objectFit="fit"
        width="100%"
        height="100%"
        alt="Screenshot of TicTacToe"
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
                Swedish Motivational Quotes API
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="space-around">
            <a href="https://github.com/mekkmann/Portfolio-Page"
              target="_blank"
              rel="noopener noreferrer"
              className="projectCardLink">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#EEE6CE"}}
                className="projectCardButton"
              >
                <Text
                  css={{ color: "#11181C" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  GitHub
                </Text>
              </Button>
            </a>
          </Row>
        </Col>
    </Card.Footer>
  </Card>
);
