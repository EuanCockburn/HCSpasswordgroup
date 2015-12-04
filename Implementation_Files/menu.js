function setupChecker() {
	
	
    for (var i = 1; i <= 4; i++) {
        var radioName = "q" + i;
        radioOptions = document.getElementsByName(radioName);
        for (var j = 0; j < radioOptions.length; j++) {
            if (radioOptions[j].checked) {
                radioVal = radioOptions[j].value;
                sessionStorage.setItem(radioName, radioVal);
            }
        }
    }
    
    window.location.assign("results.html");
}