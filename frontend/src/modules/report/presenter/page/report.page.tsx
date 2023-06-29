import useConstructor from '@/modules/shared/patterns/Constructor';
import { useStore } from '@/modules/shared/patterns/Store';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import ReportService from '../../infra/services/report.service';
import Schedule from '@/modules/schedule/domain/entity/schedule.entity';
import Doctor from '@/modules/schedule/domain/entity/doctor.entity';
import ScheduleDTO from '@/modules/calendar/domain/dto/schedules.dto';
import FormatterHelper from '@/modules/shared/helpers/formatter.helper';
import { DateTime } from 'luxon';

interface ReportItem {
  value: any;
}

interface ReportDTO {
  loading: boolean;
  result: Schedule[];
  cancelled: ReportItem;
  attended: ReportItem;
  bestDoctor: any;
}

const ReportPage: React.FC = () => {
  const store = useStore<ReportDTO>({
    loading: false,
    result: [],
    cancelled: { value: 0 },
    attended: { value: 0 },
    bestDoctor: null,
  });

  useConstructor(async () => {
    try {
      store.loading = true;

      const result = await ReportService.build().index({});

      store.result = result.data.map((item) => ScheduleDTO.toSchedule(item));
      store.cancelled = result.cancelled;
      store.attended = result.attended;
      store.bestDoctor = result.bestDoctor;
    } catch (error) {
      console.error(error);
    } finally {
      store.loading = false;
    }
  });

  return (
    <Flex flexDirection="column">
      <Container py={5} maxW={'container.xl'}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(5, 1fr)',
          }}
          gap={6}
        >
          <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
            <Heading as={'h2'}>Realizados Vs Cancelados</Heading>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <StatGroup>
                <Stat>
                  <StatLabel>Realizados</StatLabel>
                  <StatNumber>{store.attended?.value || 0}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Com pagamento já realizado
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <StatGroup>
                <Stat>
                  <StatLabel>Cancelados</StatLabel>
                  <StatNumber>{store.cancelled?.value || 0}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    Pelo cliente ou clínica
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <StatGroup>
                <Stat>
                  <StatLabel>Mais Atendimentos</StatLabel>
                  <StatNumber>{store.bestDoctor?.name || ""}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    { store.bestDoctor?.num_services || 0 }
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Flex width="100%" marginTop="5vh">
          <TableContainer margin="0 auto">
            <Table variant="striped" colorScheme="gray" width="80vw">
              <TableCaption>Todos os Agendamentos Cancelados</TableCaption>
              <Thead>
                <Tr>
                  <Th>Data do Agendamento</Th>
                  <Th>Nome do Cliente</Th>
                  <Th isNumeric>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  store.result.map((item: Schedule) => (
                    <Tr>
                      <Td>{DateTime.fromISO(item.schedule_date).toFormat('dd/MM/yyyy hh:mm')}</Td>
                      <Td>{item.patient.name}</Td>
                      <Td isNumeric>{item.status.description}</Td>
                    </Tr>
                  ))
                }
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Data do Agendamento</Th>
                  <Th>Nome do Cliente</Th>
                  <Th isNumeric>Status</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
      </Flex>
    </Flex>
  );
};

export default ReportPage;
