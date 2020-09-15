# GitHub Action - Issue Label Notifications
This GitHub Action allows you to notify users or teams when specific labels are added to an issue. It runs every time a label is attached to an issue, and compares the label to the list of notification recipients that you specify. If a match is found, the action will add a comment to the issue and @mention the notification recipients.

![Screen Shot 2020-03-27 at 3 30 46 PM](https://user-images.githubusercontent.com/1865328/77805832-19b91800-7040-11ea-98c8-5eb880be04f7.png)

## Usage
### Pre-requisites
Create a workflow `.yml` file in your repositories `.github/workflows` directory. An [example workflow](#example-workflow) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs
- `recipients`: A map of labels and which individuals or teams to notify. Multiple labels can be configured by putting each on a newline. Multiple teams and/or individuals can be configured for each label by putting a space between them.
- `message`: (Optional) The message to include in the comment. Must include at least `{receipients}` but can also include `{label}`. See the default message in the action.yml file.

### Example workflow

```yaml
name: Notify users based on issue labels

on:
  issues:
      types: [labeled]

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
        - uses: jenschelkopf/issue-label-notification-action@1.3
          with:
             recipients: |
                  help wanted=@jenschelkopf
                  documentation=@jenschelkopf @docs-team
