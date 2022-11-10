import '/style.css'

document.querySelector('#app').innerHTML = `
  <div id='do-planks-button'>Do Planks</div>
`

function exercise(name, seconds, sound) {
  this.name = name;
  this.seconds = seconds;
  this.sound = sound;
}

var switchAudio = new Audio('switch.m4a');
var getReadyAudio = new Audio('getready.m4a');
var restAudio = new Audio('rest.m4a');
var goAudio = new Audio('go.m4a');

function set() {
  var plankTime = 45;
  var sideTime = 30;
  var bridgeTime = 20;
  var getReadyTime = 5;
  return [
    new exercise('Get Ready', getReadyTime, getReadyAudio),
    new exercise('Front Plank', plankTime, goAudio),
    new exercise('Side Plank (Left)', sideTime, switchAudio),
    new exercise('Side Plank (Right)', sideTime, switchAudio),
    new exercise('Single Leg Bridge (Left)', bridgeTime + getReadyTime, switchAudio),
    new exercise('Single Leg Bridge (Right)', bridgeTime, switchAudio),
  ]
}

function rest() {
  return new exercise('Rest', 120, restAudio);
}

function getPlankItems() {
  var plankitems = [];
  plankitems = plankitems.concat(set());
  plankitems.push(rest());
  plankitems = plankitems.concat(set());
  plankitems.push(rest());
  plankitems = plankitems.concat(set());
  plankitems.push(new exercise('Good Job', 60, restAudio));
  return plankitems;
}

async function doPlanks() {
  var plankItems = getPlankItems();

  var delay = ms => new Promise(res => setTimeout(res, ms));

  for (var i = 0; i < plankItems.length; i++) {
    const item = plankItems[i];

    document.querySelector('#app').innerHTML = `
      <span>${item.name}</span>
    `

    if (item.sound) {
      item.sound.play();
    }

    await delay(item.seconds * 1000);
    console.log(item.name);
  }
}

document.getElementById('do-planks-button').onclick = function() {
  doPlanks();
}
