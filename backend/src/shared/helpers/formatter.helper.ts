export default class FormatterHelper {
  static removeSpecialCharacters(value: string) {
    return value.replace(/[^\w\s]/gi, '');
  }
}
