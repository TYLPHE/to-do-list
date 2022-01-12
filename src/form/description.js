export default function description() {
  const desc = document.createElement('div');
  desc.className = 'form-desc';
  const label = document.createElement('label');
  label.textContent = 'Description:';
  label.for = 'text';
  const textDiv = document.createElement('div');
  textDiv.className = 'text-div';
  const textBox = document.createElement('textarea');
  textBox.className = 'text';
  textBox.id = 'text';
  textBox.required = true;
  textBox.autocapitalize = 'sentences';
  textBox.spellcheck = true;
  textBox.placeholder = 'Get booster shot';
  const span = document.createElement('span');
  span.class = 'validity';
  textDiv.append(textBox, span);
  desc.append(label, textDiv);
  return desc;
}
