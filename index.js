const core = require('@actions/core');
const github = require('@actions/github');

try {
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  const labelRecipients = core.getInput('recipients').split("\n");

  labelRecipients.forEach(labelRecipient => {
    const mapping = labelRecipient.split("=");
    console.log(`When the ${mapping[0]} label is added to an issue notify ${mapping[1]}`);
  })

} catch (error) {
  core.setFailed(error.message);
}
