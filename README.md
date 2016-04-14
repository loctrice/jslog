# jslog
Fun with javascript logging

# Override (drop into existing projects)
Drop in the jslogging.override.min.js and the fun starts. All console.* statements will begin to output random jslogging 
with no changes necessary to the application

To Alter the types, append a jslogger type to the end of your current console.log statements.

#Basic use
Include jslogging.min.js to your application. You can now use jslogger.* to log messages. Any jslogger type that isn't
supplied will be randomized. Your current console.* statements will remain unbothered.

#Logger types
See file jslogging.js (unminified). The types are at the topmost part of the file. The list may or may not grow, so I'd rather not list them in the readme.

#Notes
a - I would say to include this file first, so all future files may make use of the functionality
b - There's a finger (flip off) ascii in here, and may be some more questionable one's later. If you're worried about this, then provide the second argument


