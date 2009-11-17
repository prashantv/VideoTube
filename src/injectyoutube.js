// TODO: check if we need to inject the script first (based on DOM)
needInject = true

if(needInject) {
   
   // inject the script that replaces the SWF with a video element
   chrome.extension.sendRequest({getOption: "autoreplace"}, function(response) {
      autoreplace = response.value;

      myscript = document.createElement('script');
      myscript.src = chrome.extension.getURL("replacetube.js");
      myscript.id = "tubevideo_injected";
      
      if(autoreplace) {
         myscript.className = "autoreplace"
      }
      document.body.appendChild(myscript);
   });

}

