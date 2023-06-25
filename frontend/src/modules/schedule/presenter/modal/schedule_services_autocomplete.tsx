import { useStore } from '@/modules/shared/patterns/Store';
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from '@choc-ui/chakra-autocomplete';
import Doctor from '../../domain/entity/doctor.entity';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import ServiceType from '../../domain/entity/service_type.entity';

interface ScheduleServicesAutocompleteDTO {
  loading: boolean;
  services: ServiceType[];
  selected: ServiceType | null;
  error: string | null;
}

const ScheduleServicesAutocomplete: React.FC<any> = (props) => {
  const store = useStore<ScheduleServicesAutocompleteDTO>({
    loading: false,
    services: [
      {
        id: 1,
        name: 'Consulta',
      },
      {
        id: 2,
        name: 'Sessão de Fisioterapia',
      },
      {
        id: 2,
        name: 'Sessão de Quiropraxia',
      },
    ],
    selected: null,
    error: null,
  });

  const selectValue = (id: string) => {
    const result = store.services.find((item) => {
      return `${item.id}` == `${id}`;
    });

    store.selected = ({ ...result } as ServiceType) || null;
  };

  return (
    <Flex gap={2} direction={'column'}>
      <Box w="100%">
        <AutoComplete openOnFocus onChange={selectValue}>
          <AutoCompleteInput
            padding={4}
            minWidth={300}
            w={'100%'}
            bg={'transparent'}
            value={store.selected?.name || ''}
            border={useColorModeValue('1px solid #E2E8F0', '1px solid rgba(255,255,255,0.16)')}
            borderRadius={4}
          />
          <AutoCompleteList mt={12}>
            {store.services.map((item, index) => (
              <AutoCompleteItem key={index} value={item} getValue={(item) => `${item.id}`}>
                {item.name}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </Box>
    </Flex>
  );
};

export default ScheduleServicesAutocomplete;
