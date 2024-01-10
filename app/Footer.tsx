import { Container, Flex, Text } from "@radix-ui/themes";

const Footer = () => {
  return (
    <footer>
      <Container mb="4">
        <Flex justify="center">
          <Text>&copy; 2024 AutoGrader | All Rights Reserved</Text>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
