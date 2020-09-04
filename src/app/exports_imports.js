// We export this the default keyword this is a special keyword marking this as the default export of

// this file and we can then import this somewhere else

// We also might have a number of files where we export multiple things, here a constant named clean which

// holds a function at the end and baseData which holds a number in a third file.

// We might need to import from person.js and utility.js so app.js requires import statements.
// And here are a couple of different import syntaxes you will see in this course. person.js as you see

// uses the default keyword, the default keyword simply means if we just import something from that file

// it will always be our default export.

// So in this case the person constant therefore in import person from person.js we can name person whatever

// we want, which is why I printed it twice here, person or prs doesn't matter.

// It always refers to the thing you marked as the default with the default keyword. For utility.

// js it's a bit different. There

// We import from two different constants and therefore the import syntax uses the curly braces to explicitly

// target specific things from that file.

// These are so-called named exports because we import the stuff by its name.

// We import the clean constant by its name and we import baseData by its name because we didn't mark anything

// as the default.

// So for javascript to know what exactly we're pointing to, we need to give it the exact name and the name

// goes between curly braces.

// By the way, you could also write this as one import statement with baseData comma clean or the other

// way around.

// So these are imports and exports.

// You write all of this in your javascript files and will heavily use this throughout this course.

// Now as with all these next generation javascript features, it won't run like this in all browsers.

// Not even the most modern browsers support all the features we'll use in this project.

// Therefore in the next course module I'll also show you how to quickly set up a project which in the

// end just compiles all these next generation javascript features to current gen javascript features

// so that we as a developer can use the next generation javascript without us shipping code that runs

// nowhere.

// So back to the imports and exports.

// This is the syntax we use and you will see getting used a lot in this course.

// You might also see some variations because we can also write this differently when we have a default

// export.

// You already saw that person is name you can choose totally on your own.

// It doesn't matter here if you use person or prs.

// If you have a named export you actually have to use the exact name defined in the file with the export

// keyword.

// Still what you can do.

// You can assign an alias which you then again can freely choose in the file you are importing it with

// the as keyword or if you have multiple named exports in a file.

// You can import everything with this * special character and then assign an alias and bundled.

// In this case would be a javascript object which exposes all constants and whatever you export in the other

// file as properties so that you simply have bundled.baseData, bundled.clean to access the

// export of things.

// That's up to you and you will see me use these things throughout the course.

// The most common use search is the top one.

// Import curly braces something curly brace from.


