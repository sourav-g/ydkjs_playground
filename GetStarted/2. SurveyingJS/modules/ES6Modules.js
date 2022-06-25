//? b) ES6 modules

//* Context : The file itself. Always file based, one-file one-module
//* No wrapping fn unlike classic modules

//* IMPORTANT
//? ES6 modules are not instantiated, just imported to use single instance
//? Singletons, all imports gets reference to that single instance

//? To support multi-instantiations
//* ==> Provide classic factory fn on ESM definition

//* CommonJS (nodejs) => require and module.exports
//* ES Modules => import and export (use .mjs extenstion)

//!Node.js will treat .cjs files as CommonJS modules and .mjs files as ECMAScript modules. 
//!It will treat .js files as whatever the default module system for the project is 
//!(which is CommonJS unless package.json says "type": "module",).