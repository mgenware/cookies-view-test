import Cookies from 'js-cookie';

function createTD(val) {
  const td = document.createElement('td');
  td.textContent = val;
  return td;
}

function createTR(tds) {
  const tr = document.createElement('tr');
  for (const node of tds) {
    tr.appendChild(node);
  }
  return tr;
}

const tableBody = document.getElementById('tableBody');
const nameInput = document.getElementById('nameInput');
const valInput = document.getElementById('valInput');

function setCookie() {
  const name = nameInput.value;
  const val = valInput.value;
  if (!name) {
    alert('name is empty');
    return;
  }
  if (!val) {
    alert('value is empty');
    return;
  }
  console.log(`Cookie set ${name} = ${val}`);
  Cookies.set(name, val, { expires: 7 });
}

const randString = new Date().toTimeString().split(' ')[0];
nameInput.value = randString;
valInput.value = randString;

const cookies = Cookies.get();
for (const [k, v] of Object.entries(cookies)) {
  tableBody.appendChild(createTR([createTD(k), createTD(v)]));
}

window.setCookie = setCookie;
