import React from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import DoctorAutocomplete from './doctor_autocomplete';
import DoctorAvatar from './doctor_avatar';

const RegisterForm: React.FC = () => {
  return (
    <Flex minH={'60vh'} width={'100%'}>
      <Stack py={3} px={0}>
        <Box p={0}>
          <Stack spacing={4}>
            <FormControl id="schedule_date" w={'md'} mx={'md'}>
              <FormLabel>Data do Agendamento</FormLabel>
              <Input placeholder="Selecione uma data" size="md" type="datetime-local" />
            </FormControl>
            <FormControl id="doctor">
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
