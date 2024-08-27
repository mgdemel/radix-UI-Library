import { Flex, Heading, Link, Text } from "@radix-ui/themes";

export default function NotFound() {
  return (
    <Flex direction="row" justify="center">
      <Flex
        direction="column"
        align="center"
        className="fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
      >
        <Heading>Not Found</Heading>
        <Text as="p">Could not find requested page</Text>
        <Link href="/">Return Home</Link>
      </Flex>
    </Flex>
  );
}
