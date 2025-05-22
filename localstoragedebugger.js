// localstorage-debugger.js
// Basic automation for testing document objects and elements

function logOutput(msg) {
  document.getElementById('output').textContent = msg;
}

// LocalStorage commands (already present in HTML, but exposed for completeness)
function setItemOn() {
  var key = document.getElementById('set-key').value;
  var value = document.getElementById('set-value').value;
  if (!key) return logOutput('Set: Key required');
  localStorage.setItem(key, value);
  logOutput('Set: ' + key + ' = ' + value);
}
function setItemOff() {
  document.getElementById('set-key').value = '';
  document.getElementById('set-value').value = '';
  logOutput('Set: Inputs cleared');
}
function getItemOn() {
  var key = document.getElementById('get-key').value;
  if (!key) return logOutput('Get: Key required');
  var value = localStorage.getItem(key);
  logOutput('Get: ' + key + ' = ' + (value === null ? '[null]' : value));
}
function getItemOff() {
  document.getElementById('get-key').value = '';
  logOutput('Get: Input cleared');
}
function removeItemOn() {
  var key = document.getElementById('remove-key').value;
  if (!key) return logOutput('Remove: Key required');
  localStorage.removeItem(key);
  logOutput('Remove: ' + key + ' removed');
}
function removeItemOff() {
  document.getElementById('remove-key').value = '';
  logOutput('Remove: Input cleared');
}
function clearOn() {
  localStorage.clear();
  logOutput('Storage cleared');
}
function clearOff() {
  logOutput('Clear: No action');
}

// Document object/element tests
function testDocumentTitle() {
  logOutput('Document Title: ' + document.title);
}
function testBodyChildren() {
  logOutput('Body Children: ' + document.body.children.length);
}
function testCreateElement() {
  var el = document.createElement('div');
  el.textContent = 'Test Div Created';
  el.style.background = '#444';
  el.style.color = '#fff';
  el.style.margin = '8px 0';
  document.getElementById('dom-area').appendChild(el);
  logOutput('Created a new div element in DOM area.');
}
function testQuerySelector() {
  var el = document.querySelector('.container');
  logOutput('Query .container: ' + (el ? 'Found' : 'Not found'));
}

// Expose for global testing
window.setItemOn = setItemOn;
window.setItemOff = setItemOff;
window.getItemOn = getItemOn;
window.getItemOff = getItemOff;
window.removeItemOn = removeItemOn;
window.removeItemOff = removeItemOff;
window.clearOn = clearOn;
window.clearOff = clearOff;
window.testDocumentTitle = testDocumentTitle;
window.testBodyChildren = testBodyChildren;
window.testCreateElement = testCreateElement;
window.testQuerySelector = testQuerySelector;