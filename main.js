import Cookies from 'js-cookie';

/******** HTML Util *********/

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

function reloadPage() {
  window.location.reload();
}

/******** DOM Elements *********/

const tableBody = document.getElementById('tableBody');
const nameInput = document.getElementById('nameInput');
const valInput = document.getElementById('valInput');

/******** Main logic *********/

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
  reloadPage();
}

document.getElementById('setBtn').addEventListener('click', () => {
  setCookie();
});

document.getElementById('reloadBtn').addEventListener('click', () => {
  reloadPage();
});

const randString = new Date().toTimeString().split(' ')[0];
nameInput.value = randString;
valInput.value = randString;

const cookies = Cookies.get();
for (const [k, v] of Object.entries(cookies)) {
  tableBody.appendChild(createTR([createTD(k), createTD(v)]));
}
