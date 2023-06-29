import { useStore } from '@/modules/shared/patterns/Store';
import { Box, Flex, Select } from '@chakra-ui/react';
import ServiceType from '../../domain/entity/service_type.entity';
import ScheduleServicesService from '../../infra/http/schedule_services.service';
import useConstructor from '@/modules/shared/patterns/Constructor';

interface ScheduleServicesAutocompleteDTO {
  loading: boolean;
  services: ServiceType[];
  error: string | null;
}

interface Props {
  onChange: (ServiceType) => void;
  value?: ServiceType;
}

const ScheduleServicesAutocomplete: React.FC<Props> = ({ onChange, value }) => {
  const store = useStore<ScheduleServicesAutocompleteDTO>({
    loading: false,
    services: [
      {description: "Selecione", id: 0,}
    ],
    error: null,
  });

  const handleChange = (event) => {
    const service = store.services.find((service) => `${service.id}` === `${event.target.value}`);

    onChange(service);
  };

  const loadData = async () => {
    try {
      const result = await ScheduleServicesService.build().index({});

      store.services = [...store.services, ...result];
    } catch (error) {
      console.error(error);
    }
  };

  useConstructor(async () => {
    loadData();
  });

  return (
    <Flex gap={2} direction={'column'}>
      <Box w="100%">
        <Select onChange={handleChange} value={value?.id}>
          {store.services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.description}
            </option>
          ))}
        </Select>
      </Box>
    </Flex>
  );
};

export default ScheduleServicesAutocomplete;
