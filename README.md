<pre style="font-family: monospace;">
        .-"-.            .-"-.            .-"-. 
      _/_-.-_\_        _/.-.-.\_        _/.-.-.\_
     / __} {__ \      /|( o o )|\      ( ( o o ) )
    / //  "  \\ \    | //  "  \\ |      |/  "  \|
   / / \'---'/ \ \  / / \'---'/ \ \      \'/^\'/
   \ \_/`"""`\_/ /  \ \_/`"""`\_/ /      /`\ /`\     
    \           /    \           /      /  /|\  \    
     see no evil     hear no evil     speak no evil </pre>
HackMonkey
==========
HackMonkey is a Chrome/Chomium extension which allows the execution of arbitrary javascript code on arbitrary pages. Use it with appropriate discretion, as arbitrary script execution is inherently dangerous.

Installing HackMonkey:

1. Go to chrome://extensions
2. Enable developer mode.
3. Install an unpacked extension, and navigate to the HackMonkey src folder.

Using HackMonkey:

1. Go to chrome://extensions
2. Open the background page, listed under Hackmonkey
3. Open the chrome developer tools and select the console
4. In console, type some analogue of the following:

```
    hackmonkey.add("https?://www\\\.google\\\.com/.*", "http://jsbin.com/IHOdIyU/1.js")
```

And now, whenever you load a page beginning with www.google.com, the script "1.js" will run on that page.

Monkeys courtesy of: http://www.geocities.com/spunk1111/zoo.htm#monkeys
