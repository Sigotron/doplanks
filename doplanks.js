import { showProgressBar } from './progressbar.js';

var switchAudio = new Audio('switch.mp3');
var getReadyAudio = new Audio('getready.mp3');
var restAudio = new Audio('rest.mp3');
var goAudio = new Audio('go.mp3');

function exercise(name, seconds, sound, showProgressBar = true) {
  this.name = name;
  this.seconds = seconds;
  this.sound = sound;
  this.showProgressBar = showProgressBar;
}
  
  function set() {
    var plankTime = 45;
    var sideTime = 30;
    var bridgeTime = 20;
    var getReadyTime = 5;
    return [
      new exercise('Get Ready', getReadyTime, getReadyAudio, false),
      new exercise('Front Plank', plankTime, goAudio),
      new exercise('Side Plank Left', sideTime, switchAudio),
      new exercise('Side Plank Right', sideTime, switchAudio),
      new exercise('Single Leg Bridge Left', bridgeTime + getReadyTime, switchAudio),
      new exercise('Single Leg Bridge Right', bridgeTime, switchAudio),
    ]
  }
  
  function rest() {
    return new exercise('Rest', 120, restAudio);
  }

  function getPlankItems() {
    var plankItems = [];
    for (var i = 0; i < 3; i++) {
      plankItems = plankItems.concat(set());
      if (i < 3) {
        plankItems.push(rest())
      }
    }
    plankItems.push(new exercise('Good Job', 5, restAudio, false));
    return plankItems;
  }
  
  export async function doPlanks() {
    var plankItems = getPlankItems();
    var delay = ms => new Promise(res => setTimeout(res, ms));
  
    for (var i = 0; i < plankItems.length; i++) {
      const item = plankItems[i];
  
      document.querySelector('#app').innerHTML = `
        <div id="parent">
          <div id="name">${item.name}</div>
        </div>
      `

      if (item.showProgressBar) showProgressBar(item.seconds, item.name);
      if (item.sound) item.sound.play();
  
      await delay(item.seconds * 1000);
      console.log(item.name);
    }

    document.querySelector('#app').innerHTML = `
     <img src="so_good.png" />
    `
  }