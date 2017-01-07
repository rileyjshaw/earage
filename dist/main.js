var levels = document.querySelector('.levels');

var pairs = [{
  age: 65,
  frequency: 12000
}, {
  age: 55,
  frequency: 13000
}, {
  age: 45,
  frequency: 14000
}, {
  age: 35,
  frequency: 15000
}, {
  age: 25,
  frequency: 16000
}, {
  age: 15,
  frequency: 16000
}];

for (var i = 0, _len = pairs.length, li, pair; i < _len; ++i) {
  pair = pairs[i];
  li = document.createElement('li');
  li.className = 'level';
  li.textContent = pair.frequency + 'Hz';
  li.dataset.age = pair.age;
  levels.appendChild(li);
}

// audio
var context = new AudioContext();

function playFrequency (hz) {
  var oscillator = context.createOscillator();
  oscillator.frequency.value = hz;

  oscillator.connect(context.destination);

  oscillator.start(0);
  oscillator.stop(3);
}

playFrequency(440);
