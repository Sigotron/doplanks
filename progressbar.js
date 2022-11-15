export function showProgressBar(seconds) {
  var progressBar = document.createElement('div');
  var progressBarChild = document.createElement('div');
  progressBar.id = `progress-bar`;
  progressBarChild.id = `progress-bar-child`;

  progressBar.appendChild(progressBarChild);
  document.getElementById('parent').appendChild(progressBar);

  progressBarChild.style.width = `0%`;
  progressBarChild.style.transition = `width ${seconds}s linear`
  progressBarChild.offsetHeight; // hack make element update
  progressBarChild.style.width = `100%`;
}