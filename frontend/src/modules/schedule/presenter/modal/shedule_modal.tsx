import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ScheduleContext } from '../store/schedule_store';
import RegisterForm from './register_form';

const ScheduleModal: React.FC = () => {
  const store = useContext(ScheduleContext);

  const onClose = () => {
    store.isOpen = false;
  };

  return (
    <>
      <Modal isOpen={store.isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW={'80vw'}
          bg={useColorModeValue('#f5f4f9', '#121212')}
          color={useColorModeValue('black', 'white')}
        >
          <ModalHeader>Cadastro de Agendamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RegisterForm />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red">Registrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScheduleModal;
