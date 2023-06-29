export interface ScheduleDTO {
  doctor: {
    id: number;
  };
  patient: {
    birthday: string;
    cpf: string;
    email: string;
    gender: string;
    name: string;
    phone: string;
    address: {
      cep: string;
      city: string;
      complement: string;
      neighbourhood: string;
      number: string;
      state: string;
      street: string;
    };
  };
  schedule_date: string;
  service: {
    id: number;
    description: string;
    price: number;
  };
}
