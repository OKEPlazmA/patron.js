const CommandError = require('../enums/CommandError.js');
const ArgumentResult = require('../results/ArgumentResult.js');
const CooldownResult = require('../results/CooldownResult.js');
const ExceptionResult = require('../results/ExceptionResult.js');
const InvalidContextResult = require('../results/InvalidContextResult.js');
const Result = require('../results/Result.js');
const PermissionUtil = require('../utility/PermissionUtil.js');

class Constants {
  constructor() {
    this.config = {
      maxMatches: 5
    };

    this.conversions = {
      secondInMs: 1000,
      minuteInMs: 60000,
      hourInMs: 3600000,
      dayInMs: 86400000,
      weekInMs: 604800000,
      monthInMs: 2592000000,
      yearInMs: 31536000000,
      decadeInMs: 315360000000,
      centuryInMs: 3153600000000,
      rToHex: 16,
      gToHex: 8
    };

    this.errors = {
      bannedUserNotFound: 'Banned user not found.',
      categoryChannelNotFound: 'Category channel not found.',
      channelNotFound: 'Channel not found.',
      emojiNotFound: 'Emoji not found.',
      dmChannelNotFound: 'DM channel not found.',
      guildChannelNotFound: 'Guild channel not found.',
      guildEmojiNotFound: 'Guild emoji not found.',
      guildNotFound: 'Guild not found.',
      groupChannelNotFound: 'Group channel not found.',
      invalidArg: (argument) => 'You have provided an invalid ' + argument.name + '.',
      memberNotFound: 'Member not found.',
      messageNotFound: 'Message not found.',
      multipleMatches: (matches) => 'Multiple matches found: ' + matches + '.',
      roleNotFound: 'Role not found.',
      textChannelNotFound: 'Text channel not found.',
      tooManyMatches: 'Multiple matches found, please be more specific.',
      userNotFound: 'User not found.',
      voiceChannelNotFound: 'Voice channel not found.'
    };

    this.numbers = {
      thousand: 1000,
      million: 1000000,
      billion: 1000000000,
      maxRGB: 255
    };

    this.regexes = {
      argument: /"[\S\s]+?"|[\S\n]+/g,
      billion: /b\$?$/i,
      centuries: /^(\d+(\.\d+)?|\.\d+)\s*(cen(tur(y|ies))?)$/i,
      days: /^(\d+(\.\d+)?|\.\d+)\s*(days?|d)$/i,
      decades: /^(\d+(\.\d+)?|\.\d+)\s*(dec(ade)?s?)$/i,
      emoji: /^<:.+:\d+>/,
      hex: /^(0x|#)?[\da-f]{6}$/i,
      hours: /^(\d+(\.\d+)?|\.\d+)\s*(hours?|h)$/i,
      id: /^\d{17,19}/,
      million: /m\$?$/i,
      milliseconds: /^(\d+(\.\d+)?|\.\d+)\s*(milliseconds?|ms)$/i,
      minutes: /^(\d+(\.\d+)?|\.\d+)\s*(min(ute)?s?|m)$/i,
      months: /^(\d+(\.\d+)?|\.\d+)\s*months?$/i,
      findId: /\d{17,19}/,
      quotes: /^"|"$/g,
      quotesMatch: /^"[\S\s]+"$/,
      rgb: /^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/i,
      roleMention: /^<@&\d+>/,
      seconds: /^(\d+(\.\d+)?|\.\d+)\s*(sec(onds)?s?|s)$/i,
      smallHex: /^(0x|#)?[\da-f]{3}$/i,
      textChannelMention: /^<#\d+>/,
      thousand: /k\$?$/i,
      usernameAndDiscrim: /.+#\d{4}/,
      userMention: /^<@!?\d+>/,
      weeks: /^(\d+(\.\d+)?|\.\d+)\s*(weeks?|w)$/i,
      whiteSpace: /\s/,
      years: /^(\d+(\.\d+)?|\.\d+)\s*(years?|y)$/i
    };

    this.results = {
      args: (command, args) => new ArgumentResult({ success: true, command: command, args: args }),
      cooldown: (command, remaining) => new CooldownResult({ success: false, command: command, commandError: CommandError.Cooldown, errorReason: 'This command is on a cooldown.', remaining: remaining }),
      botPermissions: (client, command, permissions) => new Result({ success: false, command: command, commandError: CommandError.BotPermission, errorReason: client.user.username + ' cannot execute this command without the ' + PermissionUtil.format(permissions) + ' permission' + (permissions.length > 1 ? 's' : '') + '.' }),
      commandNotFound: (commandName) => new Result({ success: false, commandName: commandName, commandError: CommandError.CommandNotFound, errorReason: 'This command does not exist.' }),
      exception: (command, error) => new ExceptionResult({ success: false, command: command, commandError: CommandError.Exception, errorReason: error.message, error: error }),
      invalidArgs: (command, reason) => new ArgumentResult({ success: false, command: command, commandError: CommandError.InvalidArg, errorReason: reason }),
      invalidArgCount: (command) => new Result({ success: false, command: command, commandError: CommandError.InvalidArgCount, errorReason: 'You have provided an invalid number of arguments.' }),
      invalidContext: (command, context) => new InvalidContextResult({ success: false, command: command, commandError: CommandError.InvalidContext, context: context, errorReason: 'This command may not be used in that context.' }),
      memberPermissions: (command, permissions) => new Result({ success: false, command: command, commandError: CommandError.MemberPermission, errorReason: 'This command may only be used by members with the ' + permissions + ' permission' + (permissions.length > 1 ? 's' : '') + '.' }),
      success: (command) => new Result({ success: true, command: command })
    };

    this.trueValues = [
      'y',
      'yes',
      'yup',
      'yea',
      'yeah',
      'true'
    ];

    this.falseValues = [
      'n',
      'no',
      'nope',
      'na',
      'nah',
      'false'
    ];
  }
}

module.exports = new Constants();
