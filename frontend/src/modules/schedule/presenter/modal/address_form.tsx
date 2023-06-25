import { Flex, FormControl, FormLabel, Heading, Input, Progress, Stack } from '@chakra-ui/react';
import { UseFormReturn } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import Schedule from '../../domain/entity/schedule.entity';
import { useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import AddressInformationService from '../../infra/http/address_information.service';

interface Props {
  form: UseFormReturn<Schedule, any, undefined>;
}

const AddressForm: React.FC<Props> = ({ form }) => {
  const [load, setLoad] = useState(false);

  const loadAddressByCEP = async (event: any) => {
    try {
      setLoad(true);

      const value = `${event.target.value}`;
      const withoutSpecialCharactes = value.replace(/[^a-zA-Z0-9 ]/, '');

      const response = await AddressInformationService.getAddressInformation(withoutSpecialCharactes);

      form.setValue('patient.address.state', response.state);
      form.setValue('patient.address.city', response.city);
      form.setValue('patient.address.neighbourhood', response.neighborhood);
      form.setValue('patient.address.street', response.street);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };

  const debouncedSave = useRef(debounce(loadAddressByCEP, 1000)).current;

  return (
    <Flex minH={'60vh'} width={'100%'}>
      <Stack width="100%" py={3} spacing={2}>
        <Heading w="100%" fontWeight="normal" size={'md'} mb="2%">
          Endereço
        </Heading>

        <FormControl id="cep" w="94%">
          <FormLabel>CEP</FormLabel>
          <Input
            {...form.register('patient.address.cep')}
            placeholder="00000-000"
            as={ReactInputMask}
            mask="99999-999"
            onChange={debouncedSave}
            maskChar={null}
          />
          <Progress size="xs" isIndeterminate display={load ? 'block' : 'none'} />
        </FormControl>

        <Flex direction={'row'} w="100%" wrap="wrap" alignContent="space-around">
          <FormControl id="state" w="md" flex="1" mr="6%">
            <FormLabel>Estado</FormLabel>
            <Input {...form.register('patient.address.state')} />
          </FormControl>

          <FormControl id="city" w="md" flex="1" mr="6%">
            <FormLabel>Cidade</FormLabel>
            <Input {...form.register('patient.address.city')} />
          </FormControl>
        </Flex>

        <Flex direction={'row'} w="100%" wrap="wrap" alignContent="space-around">
          <FormControl id="address" w={'md'} mx={'md'} flex={10} mr="2%">
            <FormLabel>Rua</FormLabel>
            <Input {...form.register('patient.address.street')} />
          </FormControl>

          <FormControl id="number" w={'md'} mx={'md'} flex={2} mr="6%">
            <FormLabel>Número</FormLabel>
            <Input {...form.register('patient.address.number')} />
          </FormControl>
        </Flex>

        <FormControl id="complement" mx={'md'} w="94%">
          <FormLabel>Complemento</FormLabel>
          <Input {...form.register('patient.address.complement')} />
        </FormControl>

        <FormControl id="neighborhood" mx={'md'} w="94%">
          <FormLabel>Bairro</FormLabel>
          <Input {...form.register('patient.address.neighbourhood')} />
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default AddressForm;
