import { doPlanks } from './doplanks.js';

document.querySelector('#app').innerHTML = `
  <div id='do-planks-button'>Do Planks</div>
`
document.getElementById('do-planks-button').onclick = function() {
  doPlanks();
}
