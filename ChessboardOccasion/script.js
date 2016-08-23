/**
 * Created by valeriy on 23.08.16.
 */
// range for start position
var maxRange = 5;
var minRande = 0;

// start positions for figures
var horse= [Math.floor(Math.random()*(maxRange - minRande) + minRande),
    Math.floor(Math.random()*(maxRange - minRande) + minRande)];
var rook = [Math.floor(Math.random()*(maxRange - minRande) + minRande),
    Math.floor(Math.random()*(maxRange - minRande) + minRande)];

if (winHorse(horse, rook)) alert(1 + " horse: " + horse + "; rook: " + rook);
else if (winRook(horse, rook)) alert(-1 + " horse: " + horse + "; rook: " + rook);
else alert(0 + " horse: " + horse + "; rook: " + rook);

/**
 *
 * @param horse position for horse, like a horse[0 : x-position, 1 : y-position]
 * @param rook position for rook, like a rook[0 : x-position, 1 : y-position]
 * @returns {boolean} true if horse can hit rook
 */
function winHorse(horse, rook) {
    if( (horse[0] + 1 == rook[0]) && (horse[1] - 2 == rook[1]) ||
        (horse[0] - 1 == rook[0]) && (horse[1] - 2 == rook[1]) ||
        (horse[0] + 1 == rook[0]) && (horse[1] + 2 == rook[1]) ||
        (horse[0] - 1 == rook[0]) && (horse[1] + 2 == rook[1]) ||
        (horse[0] + 2 == rook[0]) && (horse[1] - 1 == rook[1]) ||
        (horse[0] - 2 == rook[0]) && (horse[1] - 1 == rook[1]) ||
        (horse[0] + 2 == rook[0]) && (horse[1] + 1 == rook[1]) ||
        (horse[0] - 2 == rook[0]) && (horse[1] + 1 == rook[1]))
        return true;
    return false;
}

/**
 *
 * @param horse position for horse, like a horse[0 : x-position, 1 : y-position]
 * @param rook position for rook, like a rook[0 : x-position, 1 : y-position]
 * @returns {boolean} true if rook can hit horse
 */
function winRook(horse, rook) {
    if(horse[0] == rook[0] ||
       horse[1] == rook[1])
        return true;
    return false
}
