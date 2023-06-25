import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Slide,
  SlideFade,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ScheduleContext } from '../store/schedule_store';
import RegisterForm from './register_form';
import ClientForm from './client_form';

const ScheduleModal: React.FC = () => {
  const store = useContext(ScheduleContext);

  const onClose = () => {
    store.isOpen = false;
    store.step = 1;
    store.progress = 45;
  };

  const onContinue = () => {
    if (store.step == 2) {
      store.isOpen = false;
      return;
    }

    store.step += 1;
    console.log(store.progress, '1', store.step);
    store.progress = (store.step + 1) * 45;
    console.log(store.progress, '2');
  };

  const renderStep = () => {
    switch (store.step) {
      case 1:
        return <RegisterForm />;

      case 2:
        return <ClientForm />;

      default:
        return <RegisterForm />;
    }
  };

  return (
    <>
      <Modal isOpen={store.isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW={'70vw'}
          bg={useColorModeValue('#f5f4f9', '#121212')}
          color={useColorModeValue('black', 'white')}
        >
          <ModalHeader>Cadastro de Agendamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Progress isAnimated value={store.progress} size="sm" />
              {renderStep()}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={onContinue}>
              {store.step == 2 ? 'Registrar' : 'Continuar'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScheduleModal;
