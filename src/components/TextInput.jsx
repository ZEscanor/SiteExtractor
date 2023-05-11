import { useState } from 'react';
import {Textarea, Button, useToast} from '@chakra-ui/react';


const TextInput = ({extractKeywords}) => {
    const [text, setText] = useState('');
    
    
    const toast = useToast();
    
    const submitText = () => {
      if (text === '') {
        toast({
          title: 'No text entered',
          description: 'Please enter some text to extract the main content.',
          status: 'error',
          duration: 5200,
          isClosable: true,
        });
       
        return;
      }
    
    else {
        
       extractKeywords(text);
        }

    }
  
    return (
    <>
    <Textarea  bg='blue.400' color='white' padding={4} marginTop={6} height={200} value={text} onChange={(e) => setText(e.target.value)}/>
    
    <Button 
     bg= 'blue.400'
     color='black'
     marginTop={4}
     width='100%'
     _hover={{opacity: '0.8', bg: 'blue.500'}}
        onClick={submitText}
    >
         Extract
    </Button>
    </>
  )
}

export default TextInput