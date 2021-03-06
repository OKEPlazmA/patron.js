const TypeReader = require('../../structures/TypeReader.js');
const TypeReaderCategory = require('../../enums/TypeReaderCategory.js');
const TypeReaderResult = require('../../results/TypeReaderResult.js');
const Constants = require('../../utility/Constants.js');

class QuantityTypeReader extends TypeReader {
  constructor() {
    super({ type: 'quantity' });

    this.category = TypeReaderCategory.Global;
  }

  async read(command, message, argument, args, input) {
    let value = Number.parseFloat(input);

    if (Number.isNaN(value) === false) {
      if (Constants.regexes.thousand.test(input) === true) {
        value *= Constants.numbers.thousand;
      } else if (Constants.regexes.million.test(input) === true) {
        value *= Constants.numbers.million;
      } else if (Constants.regexes.billion.test(input) === true) {
        value *= Constants.numbers.billion;
      }

      return TypeReaderResult.fromSuccess(value);
    }

    return TypeReaderResult.fromError(command, Constants.errors.invalidArg(argument));
  }
}

module.exports = new QuantityTypeReader();
