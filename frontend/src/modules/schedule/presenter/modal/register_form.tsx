import React from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import DoctorAutocomplete from './doctor_autocomplete';
import ScheduleServicesAutocomplete from './schedule_services_autocomplete';
import { UseFormReturn } from 'react-hook-form';
import Schedule from '../../domain/entity/schedule.entity';

interface Props {
  form: UseFormReturn<Schedule, any, undefined>;
}

const RegisterForm: React.FC<Props> = ({ form }) => {
  return (
    <Flex minH={'60vh'} width={'100%'}>
      <Stack width="100%" py={3} px={0}>
        <Box p={0}>
          <Stack spacing={4}>
            <FormControl id="schedule_date" w="94%">
              <FormLabel>Data do Agendamento</FormLabel>
              <Input
                placeholder="Selecione uma data"
                size="md"
                type="datetime-local"
                {...form.register('date', { required: true })}
              />
            </FormControl>
            <FormControl id="service" w="94%">
              <FormLabel>Serviço</FormLabel>
              <ScheduleServicesAutocomplete {...form.register('service')} />
            </FormControl>
            <FormControl id="doctor" w="94%" {...form.register('doctor')}>
              <FormLabel>Fisioterapeuta</FormLabel>
              <DoctorAutocomplete />
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
