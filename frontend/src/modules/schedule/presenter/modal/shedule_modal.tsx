import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
        <ModalContent>
          <ModalHeader>Cadastro de Agendamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody minW={"80vw"}>
            <RegisterForm/>
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
