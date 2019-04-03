var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (library) {

   // var playlistLenght = Object.keys(library["playlists"]).length;


  var playlists2 = library.playlists;

for(var x in playlists2){

    var pPrint = playlists2[x];
    var trackLength = Object.keys(pPrint.tracks).length;
    console.log(pPrint.id + ": " + pPrint.name + " - " + trackLength + " tracks");
}

 }
 printPlaylists(library);



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (library) {
  var tracks2 = library.tracks;

for(var y in tracks2){

    var tPrint = tracks2[y];
    console.log(tPrint.id + ": " + tPrint.name + "by " + tPrint.artist + " (" + tPrint.album + ")");
}

 }
printTracks(library);



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

// this code prints the first playlist
   var playlists2 = library.playlists;

    var pPrint = playlists2[playlistId];
    var trackLength = Object.keys(pPrint.tracks).length;
    console.log(pPrint.id + ": " + pPrint.name + " - " + trackLength + " tracks");

// this code prints the tracks
  var tracks2 = library.tracks;
  var playlistPs = library.playlists;
  var pp = playlistPs.p01;
  var pTracks = pp.tracks;

for(var i = 0; i < pTracks.length; i++){
if (pTracks[i] in tracks2) {
  // console.log(pTracks[i]);
  // console.log(tracks2[pTracks[i]]);
  var newPtrack = tracks2[pTracks[i]];
    console.log(newPtrack.id + ": " + newPtrack.name + "by " + newPtrack.artist + " (" + newPtrack.album + ")");
  }
  }
}

 printPlaylist("p01");




// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
   var listOfPlaylist = library.playlists;
   var idOfPlaylist = listOfPlaylist[playlistId];
  idOfPlaylist.tracks.push(trackId);
  console.log(idOfPlaylist);
}
addTrackToPlaylist("t04","p02");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var newId = uid();
library["tracks"][newId] = {};
var partialLibrary = {};
partialLibrary.id = newId;
partialLibrary.name = name;
partialLibrary.artist = artist;
partialLibrary.album = album;
var correctPlace =library["tracks"][newId];
Object.assign(correctPlace,partialLibrary);
console.log(library);
}

addTrack("bla", "bla", "bla");
// adds a playlist to the library

var addPlaylist = function (name) {
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var newId = uid();
library["playlists"][newId] = {};
var partialLibrary = {};
partialLibrary.id = newId;
partialLibrary.name = name;
partialLibrary.tracks = [];
var correctPlace =library["playlists"][newId];
Object.assign(correctPlace,partialLibrary);
console.log(library);
}

addPlaylist("bla");



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}