import React from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import DoctorAutocomplete from './doctor_autocomplete';
import ScheduleServicesAutocomplete from './schedule_services_autocomplete';
import { Controller, UseFormReturn } from 'react-hook-form';
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
                {...form.register('schedule_date', { required: true })}
                onChange={console.log}
              />
            </FormControl>
            <FormControl id="service" w="94%">
              <FormLabel>Serviço</FormLabel>
              <Controller
                name={'service'}
                control={form.control}
                render={({ field: { onChange, value } }) => (
                  <ScheduleServicesAutocomplete onChange={onChange} value={value} />
                )}
              />
            </FormControl>
            <FormControl id="doctor" w="94%" {...form.register('doctor')}>
              <FormLabel>Fisioterapeuta</FormLabel>

              <Controller
                name={'doctor'}
                control={form.control}
                render={({ field: { onChange, value } }) => (
                  <DoctorAutocomplete onChange={onChange} value={value} />
                )}
              />
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
