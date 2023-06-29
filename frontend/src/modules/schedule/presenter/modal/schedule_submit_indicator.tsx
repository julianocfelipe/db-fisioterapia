import { Alert, AlertDescription, AlertIcon, AlertTitle, Spinner, useColorModeValue } from '@chakra-ui/react';

interface Props {
  success: boolean;
  error: string;
  loading: boolean;
}

const ScheduleSubmitIndicator: React.FC<Props> = ({ loading, success, error }) => {
  const getLabel = () => {
    if (success) return 'Agendamento Cadastrado com sucesso';
    if (error) return 'Erro ao cadastrar agendamento';
    return 'Enviando...';
  };

  const getMessage = () => {
    if (success) return 'Seu agendamento foi enviado para nossa base';

    if (error) return error;

    return "Aguarde enquanto enviamos os dados para o servidor."
  }

  return (
    <Alert
      status={error ? 'error' : 'success'}
      variant="top-accent"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="md"
    >
      {loading ? (
        <Spinner thickness="4px" speed="0.65s" color="green.500" size="xl" />
      ) : (
        <AlertIcon boxSize="40px" mr={0} />
      )}
      <AlertTitle mt={4} mb={1} fontSize="lg" color={useColorModeValue("gray.700", "whiteAlpha.900")}>
        {getLabel()}
      </AlertTitle>
      <AlertDescription maxWidth="md" color={useColorModeValue("gray.600", "whiteAlpha.700")}>
        {getMessage()}
      </AlertDescription>
    </Alert>
  );
};

export default ScheduleSubmitIndicator;
