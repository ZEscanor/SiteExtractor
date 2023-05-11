import { useState } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import Summary from './components/Summary';
import {Container, Box} from '@chakra-ui/react';




import './App.css';
import Footer from './components/Footer';


const App = () => {

  const [keyWords, setKeyWords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  


  const extractKeywords =async (text) => {
    setIsLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         'Authorization': `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract the main content from the link or text given. \n\n' + text +'',
        temperature: 0.5, //controls randomness. 0 means always use the "top choice". 1 means always use a random choice among the possible choices.
        max_tokens: 150,  //The maximum number of tokens to generate. Requests can use up to 2048 tokens shared between prompt and completion.
        frequency_penalty: 0.4, //higher means repetitiveness. 0 means no penalty.
        presence_penalty: 0.5, //higher means model is less likely to talk about topics not present in the prompt. 0 means no penalty.
      })
    }

    const response = await fetch(import.meta.env.VITE_OPEN_AI_URL, options);

    const json = await response.json();

    const data = json.choices[0].text.trim();
    console.log(data);

    setKeyWords(data);
    setIsLoading(false);
    
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    
      


                <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
                 <Container maxW='3xl' centerContent>
                    <Header/>
                    <TextInput extractKeywords={extractKeywords}/>
                    <Footer/>
                 </Container>
                  <Summary keyWords={keyWords} isLoading={isLoading} isOpen={isOpen} closeModal={closeModal}/>
                </Box>
            
      
       
  )
}

export default App