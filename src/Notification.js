/**
 * Created by SLJ on 28/2/17.
 */

/*
// Module Sample
export default function (message) {
    alert(message);
}
 */


/*
// Common JS
module.exports = function (message) {
    alert(message);
}
 */

function notify(message) {
    alert(message);
};

function log(message) {
    console.log(message);
};

export default {
    notify: notify,
    log: log
};