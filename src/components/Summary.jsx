import {
 Text, Button, Modal, ModalOverlay, 
 ModalContent, 
 ModalHeader, 
 ModalFooter, 
 ModalBody, 
 ModalCloseButton, 
 CircularProgress,
} from '@chakra-ui/react';

const Summary = ({ keyWords, isLoading, isOpen, closeModal}) => {
  return (
    <>
    <Modal isOpen={isOpen} 
    onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Summary</ModalHeader>
            <ModalCloseButton />
            <ModalBody display= 'flex' alignItems= 'center' justifyContent= 'center'>
                {isLoading ? 
                <CircularProgress isIndeterminate color="green.300" /> : 
                <Text>{keyWords}</Text>}
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={closeModal}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>

    </>
  )
}

export default Summary