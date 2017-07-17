/**
 * An argument precondition.
 */
class ArgumentPrecondition {
  /**
   * @param {Command} command The command being run.
   * @param {Message} message The received message.
   * @param {Argument} argument The argument in question.
   * @param {*} value The value of the argument.
   * @returns {Promise<PreconditionResult>} The result of the argument precondition.
   */
  async run(command, message, argument, value) {
    throw new Error(this.constructor.name + ' has no run method.');
  }
}

module.exports = ArgumentPrecondition;
