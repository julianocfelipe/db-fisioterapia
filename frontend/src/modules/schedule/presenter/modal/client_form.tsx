import React from 'react';
import { Flex, FormControl, FormLabel, Input, Stack, Heading, Select } from '@chakra-ui/react';

import InputMask from 'react-input-mask';
import { UseFormReturn } from 'react-hook-form';
import Schedule from '../../domain/entity/schedule.entity';

interface Props {
  form: UseFormReturn<Schedule, any, undefined>;
}

const ClientForm: React.FC<Props> = ({ form }) => {
  return (
    <Flex minH={'60vh'} width={'100%'}>
      <Stack width="100%" py={3} px={0} spacing={2}>
        <Heading w="100%" fontWeight="normal" size={'md'} mb="2%">
          Informações do Paciente
        </Heading>

        <FormControl id="cpf" w="94%">
          <FormLabel>CPF</FormLabel>
          <Input {...form.register('patient.cpf')} as={InputMask} mask="999.999.999-99" maskChar={null} />
        </FormControl>

        <FormControl id="name" w="94%">
          <FormLabel>Nome</FormLabel>
          <Input {...form.register('patient.name')} />
        </FormControl>

        <FormControl id="phone" w="94%">
          <FormLabel>Telefone</FormLabel>
          <Input {...form.register('patient.phone')} as={InputMask} mask="(99) 99999-9999" maskChar={null} />
        </FormControl>

        <FormControl id="email" w="94%">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input {...form.register('patient.email')} id="email" type="email" />
        </FormControl>

        <Flex direction={'row'} w="100%" wrap="wrap" alignContent="space-around">
          <FormControl id="birth" flex={1} mr="1%">
            <FormLabel>Gênero</FormLabel>
            <Select
              {...form.register('patient.gender')}
              id="gender"
              name="Genêro"
              autoComplete="gender"
              placeholder="Selecione o gênero"
              shadow="sm"
              size="md"
              w="full"
              rounded="md"
            >
              <option>Masculino</option>
              <option>Feminino</option>
            </Select>
          </FormControl>

          <FormControl id="birth" w="94%" flex={1} mr="6%">
            <FormLabel>Data de Nascimento</FormLabel>
            <Input {...form.register('patient.birthdate')} type="date" size={'md'} placeholder="" />
          </FormControl>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ClientForm;
