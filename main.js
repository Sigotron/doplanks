import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Do Planks</h1>
  </div>
`

// current idea for ui is extremely minimal and bare bones (as is the spirit of do planks)
// at a high level, three sets of planks are done over a time span of ~15 minutes

// need to create an object that represents an exercise
// an exercise consists of a title and length of time in seconds

// need to add all of those items to a queue

// 1 set equals

// get ready
// front plank
// side plank (left)
// side plank (right)
// single leg bridge (left)
// single leg bridge (right)

// add three sets

// add rest after first two sets

// maybe add something like 'good job' after last set

// do planks will be button, when clicked, the first item from the queue will be popped, item title displayed (replaces Do Planks),
// and an item countdown will show up below the title

// when the countdown for an item ends, there will be a sound (like ding ding) and the next item will be popped from the queue,
// this will continue until all of the items have been completed, and the app will essentially reset
