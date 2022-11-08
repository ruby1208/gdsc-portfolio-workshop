import { Heading, VStack, Text, Flex, Box } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    
    <VStack spacing={4} justifyContent="left" alignItems="flex-start">
      <Heading color={"displayColor"}>
        CV
      </Heading>
      <Text fontSize="display3" color="textSecondary">
          何もない。<br/>
          job ください。 <br/>
          お願い :(
      </Text>
    </VStack>

  )

}