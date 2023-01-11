// I want to find which pilot is the most experienced one.
// For that, I can use reduce as well:

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  }];

var mostExpPilot = pilots.reduce(
  function (oldest, pilot) {
    if((oldest.years || 0) > pilot.years){
    return oldest;
    } else {
      return pilot;
    }

    }, {})
