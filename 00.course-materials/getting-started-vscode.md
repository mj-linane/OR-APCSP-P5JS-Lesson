# Getting Started With VISUAL STUDIO CODE

We recommend using Visual Studio Code (VSCode) for doing the programming assignments in AP CSP.

You will need to use some text editor for editing JavaScript programs and web pages (e.g., html and css files).
It is worth investing your time in learning to use good tools (like VSCode).
Why I recommend VSCode:
VSCode has great support for JavaScript editing. It does the basics very well (autoformatting, syntax highlighting, …) as well as more advanced editing features (code refactoring, …).
VSCode can provide tooltips, hints, and command completion. It knows about JavaScript and the libraries we will use, and will figure out your code. This can save you from having to remember how things are spelled, what arguments a function takes, etc.
VSCode integrates syntax and style checkers (linters) so you see potential problems in your code immediately.
VSCode integrates a JavaScript type checker – which will find problems in your programs before you run them (see Typed JavaScript in CS559).
VSCode integrates with the web browser to do good debugging. You can set breakpoints by clicking lines in the editor, and see the JavaScript console in an editor window.
If you use the “LiveServer” extension, VSCode will run a simple http server for testing, and automatically fire up the browser as appropriate. A particularly nice feature is that it will force the browser to reload your program if you edit it. The browser console appears within VSCode, so you can see messages and type JavaScript at the prompt.
VSCode is infinitely configurable. If there’s something you don’t like about it, you can probably change it.
VSCode has a very active community building various extensions. I am always finding new gadgets that make programming better.
VSCode has an interface to GIT.
The features are really helpful for learning. They catch mistakes. Tooltips that pop up when you look at a function call give you documentation which saves you from having to remember what all the functions are (and having to do a web search each time you want to do something). It’s so easy to do a commit to GIT, that you can do it more often. And so on.
Of course, there are downsides. With all of its features, there is a lot to learn (of course, you could start with just using the basic stuff). Also, with all of its extensibility and options, it can be hard to set up. Getting the right extensions and getting all the setting right can be tricky. But when it works, it can be pretty cool.
To get started with it:
look at the “Interactive Playground” (under help) to learn some ideas of cool things VSCode can do
look at the JavaScript in Visual Studio page
SOME ADVICE
Make sure that you install the JavaScript language support. On the Welcome screen, it invites you to do this.
You will want to have Node and npm installed. It’s probably better to install Node first (so VSCode can find it). Even if you don’t use Node, VSCode will. And the Node package manager (npm) is the best (only?) way to get tools like jshint or eslint.
The “LiveServer” extension is very helpful – this will set up a local host server that will make it easier to try stuff out. LiveServer puts its service on port 5500 – the default VSCode debugging works on a different port (you may want to edit your “launch.json” file – which is automatically created by VSCode). Documentation is at <https://ritwickdey.github.io/vscode-live-server/>
You will want to tell the JavaScript error checker that you are using “modern” JavaScript – create a “.jshintrc” file, configure ESLint, or put an appropriate comment in your program to tell it what to do.
The debugger defaults to always wanting to debug “index.html” (so if you have multiple html pages in one directory, this can be challenging).
Be sure to install the extension that enables debugging for the browser that you intend to use. There are extensions for Chome and Firefox.
VSCode will give you TypeScript style type checking on your JavaScript programs if you put the magic ”’// @ts-check”’ into your code. Try it. It will take some effort, but it can catch all sorts of problems. See the Typed JavaScript in CS559 page.
If you are using the CSL computers in the CS computing labs… You can install VSCode to your CS user account. The trick is to download the “VSCodeUserSetup” (assuming you’re installing on Windows). This puts things in your home directory (under AppData) – so you have your own copy. Performance may not be great (since your home directory migrates to the file server).
You need to make sure to start the “live server” – there’s a button that appears in the blue bar at the bottom of VSCode. You may get an error about the firewall, but it should work (even with the firewall) for localhost. Sometimes the button to start “Live Server” (at the bottom of the screen) is missing (it only appears if Visual Studio Code thinks you’re working on a web page project). If the folder has an index.html file, restarting VSCode usually does the trick. Also, “Start Live Server” is usually in some menu.
Starting the debugger (using “launch”) can be tricky if the browser is already running (you need to “attach” rather than “launch”). If you want to have your already running chrome talk to VSCode, you need to run it with the right options. See the documentation for the VSCode chrome debugger.
Make sure that you have GIT set up correctly (with public keys) if you want to do GIT from inside VSCode.
The VS extensions I installed: ESLint, Beautify, JavaScript and TypeScript IntelliSense, SVG, Live Server, Debugger for Chrome, Debugger for Firefox, JSHint, Markdown all in one, and Shader Language Support. By the time you read this, I’ll probably have added even more.
