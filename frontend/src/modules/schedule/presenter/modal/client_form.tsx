import React from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

import InputMask from 'react-input-mask';

const ClientForm: React.FC = () => {
  return (
    <Flex minH={'60vh'} width={'100%'}>
      <Stack py={3} px={0}>
        <Box p={0}>
          <Stack spacing={4}>
            <FormControl id="cep" w={'md'} mx={'md'}>
              <FormLabel>CEP</FormLabel>
              <Input placeholder="00000-000" as={InputMask} mask="*****-***" maskChar={null} />
            </FormControl>

            <FormControl id="address" w={'md'} mx={'md'}>
              <FormLabel>Endereço</FormLabel>
              <Input />
            </FormControl>

            <FormControl id="state" w={'md'} mx={'md'}>
              <FormLabel>Estado</FormLabel>
              <Input />
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ClientForm;
