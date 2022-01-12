export default function priority() {
  const priorityDiv = document.createElement('div');
  priorityDiv.className = 'form-priority';
  const priorityLabel = document.createElement('label');
  priorityLabel.for = 'priority';
  priorityLabel.textContent = 'Priority: ';
  const radioDiv = document.createElement('div');

  const radioButtons = (label) => {
    const pLabel = document.createElement('label');
    pLabel.for = label;
    pLabel.className = `radio ${label}`;
    pLabel.textContent = label;
    const radio = document.createElement('input');
    radio.id = label;
    radio.name = 'radio';
    radio.type = 'radio';
    radio.textContent = label;

    // check 'Medium' by default to prevent blank priorities.
    if (label === 'Medium') {
      radio.defaultChecked = true;
    }

    pLabel.appendChild(radio);
    radioDiv.append(pLabel);
  };
  priorityDiv.append(priorityLabel, radioDiv);
  radioButtons('Low');
  radioButtons('Medium');
  radioButtons('High');
  return priorityDiv;
}
