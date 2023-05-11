import React from 'react';
import { Heading, Image, Text } from '@chakra-ui/react';


const Header = () => {
  return (
    <>
      <Heading color= 'black' marginBottom='1rem'>
        Extractor
      </Heading>
      <Text fontSize={25} textAlign='center'>
        Paste a link or some text below to extract the main content.
      </Text>
    </>
  )
}

export default Header