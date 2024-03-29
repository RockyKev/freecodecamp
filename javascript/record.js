// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  let newRecord = {prop: value};

  collection[id] = newRecord;

//If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
  if (typeof collection[id]['tracks'] === 'undefined') {
      collection[id]['tracks'] = [];
  }

//If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
  if (prop !== "tracks" && value) {
    collection[id][prop] = value;
  }   

//If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
  if (prop == "tracks" && value) {
    collection[id][prop].push(value);
  }   

  if (typeof value === 'undefined') {
    collection[id][prop] = '';
  }   


  return collection;
}


//console.log(collection[2468]['artist']);
// Alter values below to test your code
//updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");

//console.log(collection[5439]['artist'])
console.log(collection[5439]['tracks'])