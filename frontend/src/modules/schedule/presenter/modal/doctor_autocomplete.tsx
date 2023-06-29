import { useStore } from '@/modules/shared/patterns/Store';
import Doctor from '../../domain/entity/doctor.entity';
import { Box, Flex, Select } from '@chakra-ui/react';
import DoctorAvatar from './doctor_avatar';
import DoctorService from '../../infra/http/doctor.service';
import useConstructor from '@/modules/shared/patterns/Constructor';

interface DoctorAutocompleteDTO {
  loading: boolean;
  doctors: Doctor[];
  error: string | null;
}

interface Props {
  onChange: (Doctor) =>void;
  value?: Doctor;
}

const DoctorAutocomplete: React.FC<Props> = ({ onChange, value }) => {
  const store = useStore<DoctorAutocompleteDTO>({
    loading: false,
    doctors: [],
    error: null,
  });

  const handleChange = (event) => {
    const result = store.doctors.find((doctor) => {
      return doctor.id == event.target.value;
    });

    onChange(result);
  };
  
  const loadData = async () => {
    try {
      const result = await DoctorService.build().index({});

      store.doctors = result;
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
          {store.doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </Select>
      </Box>

      <Box maxW={'lg'} w={'lg'}>
        {value ? <DoctorAvatar doctor={value} /> : null}
      </Box>
    </Flex>
  );
};

export default DoctorAutocomplete;
