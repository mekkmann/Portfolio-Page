
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

const MyNavbar = () => {
    return (
        <Navbar variant="sticky" css={{}}>
            <Navbar.Brand>
                <Text size={"1.5rem"} b color="inherit" hideIn="xs">
                    Pontus Liljekvist
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Link href="#">Start</Navbar.Link>
                <Navbar.Link href="#">Timeline</Navbar.Link>
                <Navbar.Link href="#">Projects</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Content>
            
            <Navbar.Content>
                <Text size={"1.5rem"} b color="inherit" hideIn="xs">
                    Portfolio
                </Text>
            </Navbar.Content>
        </Navbar>
    );
};

export default MyNavbar;