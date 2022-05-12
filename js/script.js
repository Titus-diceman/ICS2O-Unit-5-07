/* Created by: Titus diceman
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-07/sw.js", {
    scope: "/ICS2O-Unit-5-07/",
  })
}

/**
 * Input.
 */

function buttonClicked() {
  
  const integer = document.getElementById("integer").value
  var integerValue = 0
  var answer = 0

  if (integer >= 0) {
    for (let count = 0; count < integer; count++) {
      integerValue++
      answer = answer + integerValue
    }
  } else 
    for (let count = 0; count > integer; count--) {
      integerValue--
      answer = answer + integerValue
    }
    document.getElementById("output").innerHTML = answer
}
