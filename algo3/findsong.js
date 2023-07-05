const duration = 300;

const songs = [70, 120, 200, 45, 210, 40, 60, 50];

const expected = [4,6] //return index of values


function findsong(arr, target) {
    //return [-1,-1] if no match
    let songPair = [-1, -1];
    const targetDuration = busDuration - 30;
  
    for (let i = 0; i < songDurations.length; i++) {
      const songA = songDurations[i];
  
      for (let j = i + 1; j < songDurations.length; j++) {
        const songB = songDurations[j];
  
        if (songA + songB === targetDuration) {
          // Existing found pair. Only update if this pair has a longer song.
          if (songPair[0] > -1) {
            const max = Math.max(
              songA,
              songB,
              songDurations[songPair[0]],
              songDurations[songPair[1]]
            );
  
            if (max === songA || max === songB) {
              songPair = [i, j];
            }
          } else {
            songPair = [i, j];
          }
        }
      }
    }
    return songPair;
}

console.log(findsong(songs, duration));