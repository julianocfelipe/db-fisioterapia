import { DateTime } from "luxon";

export default class FormatterHelper {
  static formatPhone(number: string) {
    // Remover todos os caracteres não numéricos do número
    const serializedNumber = number.replace(/\D/g, '');

    // Aplicar a formatação
    const formatted = serializedNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    return formatted;
  }

  static formatDate(date: Date) {
    return DateTime.fromJSDate(date).toFormat('dd/MM/yyyy hh:mm');
  }
}
