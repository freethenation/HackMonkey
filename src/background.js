(function(){
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
      if (request.message == "gimme")
       sendResponse([
         {
           id: "shitonstic",
           regex: ".*",
           code:"console.log('shit on stick')"
         },
         {
           id: "suckacock",
           regex: "suckacock",
           code:"console.log('suckacock')"
         },
       ]);
  });
})();