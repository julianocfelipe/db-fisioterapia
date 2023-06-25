import { useStore } from '@/modules/shared/patterns/Store';
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from '@choc-ui/chakra-autocomplete';
import Doctor from '../../domain/entity/doctor.entity';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import DoctorAvatar from './doctor_avatar';

interface DoctorAutocompleteDTO {
  loading: boolean;
  doctors: Doctor[];
  selected: Doctor | null;
  error: string | null;
}

const DoctorAutocomplete: React.FC = () => {
  const store = useStore<DoctorAutocompleteDTO>({
    loading: false,
    doctors: [
      {
        id: 1,
        name: 'Fisioterapeuta William',
        cpf: '999.999.999-99',
        crf: 'CFMAEdFATD',
        phone: '(48) 99651-7030',
        image_directory: 'https://this-person-does-not-exist.com/img/avatar-gen92f376c1bed17f77e7fc4cad13871b8e.jpg',
      },
      {
        id: 2,
        name: 'Fisioterapeuta Cesar',
        cpf: '111.111.111-11',
        crf: 'C6MAETfaTD',
        phone: '(48) 99661-7070',
        image_directory: 'https://this-person-does-not-exist.com/img/avatar-gen1146e5095bd800ddda1d7d06eebcbd51.jpg',
      },
    ],
    selected: null,
    error: null,
  });

  const selectDoctor = (doctorId: number) => {
    const result = store.doctors.find((doctor) => {
      return doctor.id == doctorId;
    });

    store.selected = ({ ...result } as Doctor) || null;
  };

  return (
    <Flex gap={2} direction={'column'}>
      <Box w="100%">
        <AutoComplete openOnFocus onChange={selectDoctor}>
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
            {store.doctors.map((doctor, index) => (
              <AutoCompleteItem key={index} value={doctor} getValue={(item) => `${item.id}`}>
                {doctor.name}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </Box>

      <Box maxW={'lg'} w={'lg'}>
        {!store.selected || <DoctorAvatar doctor={store.selected} />}
      </Box>
    </Flex>
  );
};

export default DoctorAutocomplete;
