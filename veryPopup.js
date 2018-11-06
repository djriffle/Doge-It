// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var suchOn;

chrome.storage.sync.get(['suchOn'], function(result) {
          suchOn = result.suchOn;
          console.log(result.suchOn);
        



	if(suchOn)
	{
		toggle.innerText= "On";
	}
	else
	{
		toggle.innerText="Off"
	}
});

var toggle = document.getElementById('toggle');

toggle.onclick = function() {
	
	suchOn= !suchOn;

	if(!suchOn)
	{
		toggle.innerText= "Off";

	}
	else
	{
		toggle.innerText="On"

	}

	chrome.storage.sync.set({'suchOn': suchOn}, function(result){
	console.log(result.suchOn);
})
}

