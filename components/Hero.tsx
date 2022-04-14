import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 2 }}
        py={{ base: 10, md: 14 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Danger is{" "}
          <Text as={"span"} color={"orange.400"}>
            NEAR
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          You are fire knight in a PIXELVERSE world. You go to forest and facing monster to earn $DANGER token. 
          PLAY TO EARN GAME. *Dacade.org demo*
        </Text>
        <Stack direction={"row"}>
          <Link href="/game" isExternal _hover={{textDecoration: "none"}}>
            <Button
              rounded={"full"}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Play Game
            </Button>
          </Link>
        </Stack>
        <Flex textAlign={"center"}
        align={"center"}>
          <Image
            rounded={'2xl'}
            mt={{ base: 12, sm: 16 }}
            alt={'banner image'}
            src={
              'https://img.itch.zone/aW1nLzMxMzY0NzEuanBn/original/%2FsDB6W.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </Stack>
    </Container>
  );
}