var colour;
var creature;
var adjective;
var verd;
var story;

alert('Let’s make a story together!');

colour = prompt('A colour (orange, indigo, etc.)');
creature = prompt('A creature (dragon, moth, etc.)');
adjective = prompt('An adjective (beautiful, super, etc.)');
verd = prompt('A past tense verb (ran, burped, etc.)');

story = prompt('Which story would you like? \nEnter the letter below: \na) Snacking \nb) Escaping \nc) Winning');

if (story == 'a') {
  document.write('After snacking on ' + (adjective) + ' treats, the ' + (colour) + ' bellied ' + (creature) + ' ' + (verb) + ' for hours.');
}

if (story == 'b') {
  document.write('Ameilia ' + (verb) + ' through the ' + (adjective) + (colour) + ' nebula escaping the space ' + (creature) + '.');
}

if (story == 'c') {
  document.write('Jackson chose his ' + (adjective) + ', ' + (colour) + ' ' + (creature) + ' card and ' + (verb) + ' it to the table knowing he won.');
}
