// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



var suchOn1;
var recieved = false;
var started = false
console.log('start');


chrome.storage.sync.get(['suchOn'], function(result) {

          suchOn1 = result.suchOn;
          console.log(suchOn1);
          recieved = true;

        




console.log(suchOn1);


if(suchOn1){

var elements = document.getElementsByTagName('img');
console.log(elements);

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    console.log(1);
    element.src = 'http://www.stickpng.com/assets/images/5845e770fb0b0755fa99d7f4.png';
    
        }



var css = '* {font-family: "Comic Sans MS", cursive, sans-serif !important;}',
 head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; 
 if (style.styleSheet){ style.styleSheet.cssText = css; } 
 else { style.appendChild(document.createTextNode(css)); } 
 head.appendChild(style);


}
 console.log('end');
});