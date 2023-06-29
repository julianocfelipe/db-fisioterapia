import Schedule from '@/modules/schedule/domain/entity/schedule.entity';
import FormatterHelper from '@/modules/shared/helpers/formatter.helper';
import { Badge, Box, Button, Spacer, useColorModeValue } from '@chakra-ui/react';

interface Props {
  schedule: Schedule;
}

const CalendarSchedulePopover: React.FC<Props> = ({ schedule }) => {
  console.log(schedule);
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxW="sm"
      w={'100%'}
      minH="240px"
      alignItems="baseline"
      padding={4}
      zIndex={5}
    >
      <Badge colorScheme="purple">{schedule.service?.description}</Badge>

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
        {schedule.patient.name}
      </Box>

      <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
        {schedule.doctor.name} &bull; {FormatterHelper.formatPhone(schedule.doctor.phone)}
      </Box>

      <Spacer />

      <Box display="flex" flexDirection="row">
        <Box display={!schedule.end_service ? 'none' : 'block'}>
          {FormatterHelper.formatDate(schedule.end_service)}
          <Box as="span" fontSize="xs" ml={2}>
            Data de finalização
          </Box>
        </Box>

        <Button colorScheme="pink" variant="outline" display={schedule.end_service ? 'none' : 'block'}>
          {schedule.start_service ? 'Finalizar' : 'Iniciar'}
        </Button>
      </Box>

      <Spacer />

      <Box display="flex" flexDirection="row" w="90%">
        <Button colorScheme="gray" variant="ghost">Cancelar</Button>

        <Spacer />
        
        <Button colorScheme="pink" variant="ghost">Pagar</Button>
      </Box>
    </Box>
  );
};

export default CalendarSchedulePopover;
