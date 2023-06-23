import { useStore } from '@/modules/shared/patterns/Store';
import { Flex, FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from '@choc-ui/chakra-autocomplete';
import Doctor from '../../domain/entity/doctor.entity';

interface DoctorAutocompleteDTO {
  loading: boolean;
  doctors: Doctor[];
  error?: string;
}

const DoctorAutocomplete: React.FC = () => {
  const store = useStore<DoctorAutocompleteDTO>({
    loading: false,
    doctors: [],
    error: '',
  });

  return (
    <Flex pt="48" justify="center" align="center" w="full">
      <FormControl w="60">
        <FormLabel>Fisioterapeuta</FormLabel>
        <AutoComplete openOnFocus>
          <AutoCompleteInput variant="filled" />
          <AutoCompleteList>
            {store.doctors.map((doctor, cid) => (
              <AutoCompleteItem key={`option-${cid}`} value={doctor.id} textTransform="capitalize">
                {doctor.name}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
        <FormHelperText>Who do you support.</FormHelperText>
      </FormControl>
    </Flex>
  );
};

export default DoctorAutocomplete;
