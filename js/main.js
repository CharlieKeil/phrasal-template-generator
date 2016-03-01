var storyTime = 'Let’s make a story together!';

alert(storyTime);

var colour = prompt('A colour (orange, indigo, etc.)');

var creature = prompt('A creature (dragon, moth, etc.)');

var adjective = prompt('An adjective (beautiful, super, etc.)');

var verbed = prompt('A past tense verb (ran, burped, etc.)');

var list = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning');

if(list == 'a') {
  document.write('After snacking on ' + adjective + 'treats, the ' + colour + 'bellied ' + creature + verbed + 'for hours.')
}

if(list == 'b') {
  document.write('Ameilia ' + verbed + 'through the ' + adjective + colour + 'nebula escaping the space ' + creature + '.')
}

if(list == 'c') {
  document.write('Jackson chose his' + adjective + ', ' + colour + creature 'card and ' + verbed + 'it to the table knowing he won.')
}
