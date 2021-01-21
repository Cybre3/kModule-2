class Song {
  constructor(typeList, name, time) {
    this.typeList = typeList;
    this.name = name;
    this.time = time;
  }
}

function main(inputArr) {
  let songDataElements = inputArr.shift();
  let playList = inputArr.pop();
  // create array to store songs
  let songs = [];

  inputArr.forEach((song) => {
    // create array for each song from string seperated by '_'
    let songArr = song.split('_');
    // get song name, time, type list
    let [typeList, name, time] = songArr;
    // create song object using cong Class and push to songs array
    songs.push(new Song(typeList, name, time));
  });

  // if playlist is 'all'
  if (playList == 'all') {
    // print all songs inside songs array
    songs.forEach((song) => console.log(song.name));
  } else {
    // if playlist has specific playlist to play
    // search/filter playlist songs
    let filteredList = songs.filter((song) => song.typeList == playList);
    filteredList.forEach((song) => console.log(song.name));
  }
}

main([
  3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite',
]);
main([
  4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater',
]);
main([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
