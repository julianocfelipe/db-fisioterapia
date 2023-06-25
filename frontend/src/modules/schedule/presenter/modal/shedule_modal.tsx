/* eslint-disable react-hooks/exhaustive-deps */
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
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { ScheduleContext } from '../store/schedule_store';
import RegisterForm from './register_form';
import ClientForm from './client_form';
import AddressForm from './address_form';
import { useForm } from 'react-hook-form';
import Schedule from '../../domain/entity/schedule.entity';

const ScheduleModal: React.FC = () => {
  const store = useContext(ScheduleContext);

  const form = useForm<Schedule>({ defaultValues: { ...new Schedule() } });

  useEffect(() => {
    form.setValue('date', Schedule.serializeDate(store.selected_date));

    console.log('tamo aqui', store.selected_date, form.getValues());
  }, [store.selected_date]);

  const closeModal = () => {
    store.isOpen = false;
    store.step = 1;
    store.progress = 33.33;
  };

  const onReturn = () => {
    if (store.step == 1) {
      closeModal();
      return;
    }

    store.step -= 1;
    store.progress = (store.step - 1) * 33.33;
  };

  const onContinue = () => {
    if (store.step == 3) {
      closeModal();
      return;
    }

    store.step += 1;
    store.progress = (store.step + 1) * 33.33;
  };

  const onSubmit = (values: any) => {
    console.log('tamo aqui, values', values);
  };

  const renderStep = () => {
    switch (store.step) {
      case 1:
        return <RegisterForm form={form} />;

      case 2:
        return <ClientForm form={form} />;

      case 3:
        return <AddressForm form={form} />;

      default:
        return <RegisterForm form={form} />;
    }
  };

  return (
    <>
      <Modal isOpen={store.isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent
          minW={'70vw'}
          bg={useColorModeValue('#f5f4f9', '#121212')}
          color={useColorModeValue('black', 'white')}
        >
          <ModalHeader>Cadastro de Agendamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box width={'100%'}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Progress isAnimated value={store.progress} size="sm" />
                {renderStep()}
              </form>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onReturn}>
              {store.step == 1 ? 'Cancelar' : 'Voltar'}
            </Button>
            <Button colorScheme="red" onClick={onContinue}>
              {store.step == 3 ? 'Registrar' : 'Continuar'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScheduleModal;
