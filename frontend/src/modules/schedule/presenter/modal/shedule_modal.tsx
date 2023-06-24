import React, { useContext } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { ScheduleContext } from '../store/schedule_store';

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
          <ModalBody>
            <FormControl>
              <FormLabel>Fisioterapeuta</FormLabel>
              <Input placeholder="Nome do fisioterapeuta" />
            </FormControl>
            <FormControl>
              <FormLabel>Paciente</FormLabel>
              <Input placeholder="Nome do paciente" />
            </FormControl>
            <FormControl>
              <FormLabel>Celular</FormLabel>
              <Input placeholder="Telefone" />
            </FormControl>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Select placeholder="Selecione o status">
                <option value="agendado">Agendado</option>
                <option value="confirmado">Confirmado</option>
                <option value="cancelado">Cancelado</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Procedimento</FormLabel>
              <Textarea placeholder="Descrição do procedimento" />
            </FormControl>
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
