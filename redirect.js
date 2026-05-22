/*
 * Caldera redirect — live countdown.
 * Cosmetic enhancement only: the <meta http-equiv="refresh"> in index.html is the
 * authoritative redirect and runs even if this script is blocked or disabled.
 * Destination is a hardcoded constant; no user/URL input is ever used.
 */
(function () {
  "use strict";

  var DEST = "https://caldera.apache.org/"; // hardcoded; never derived from input
  var seconds = 20;                          // keep in sync with the meta-refresh delay
  var el = document.getElementById("count");

  function tick() {
    if (el) {
      el.textContent = String(seconds); // textContent only — no HTML injection
    }
    if (seconds <= 0) {
      window.location.replace(DEST);    // replace() so the stub isn't left in history
      return;
    }
    seconds -= 1;
    window.setTimeout(tick, 1000);
  }

  tick();
})();
