import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const SonarScoutCard = () => (
  <Card variant="bordered" css={{ w: "100%", h: "400px" }}>
    <Card.Body css={{ p: 0, bg: "#313552" }}>
      <Card.Image
        src="/sonarscoutcapsule.jpg"
        // objectFit="fit"
        width="100%"
        height="100%"
        alt="Sonar Scout Capsule Art"
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
              Sonar Scout
            </Text>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row justify="space-around">

          <a href="https://store.steampowered.com/app/3137740/Sonar_Scout/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCardLink">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026", }}
              className="projectCardButton"
            >
              <Text
                css={{ color: "#EEE6CE" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Steam
              </Text>
            </Button>
          </a>
        </Row>
      </Col>
    </Card.Footer>
  </Card>
);
