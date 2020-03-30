function correctRecipients(recipients) {
  const regex = /(^| +|\t+)(?!@)(\w+)/gm;
  return recipients.replace(regex, '$1@$2');
}

module.exports = correctRecipients;
