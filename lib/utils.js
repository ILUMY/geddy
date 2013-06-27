var fs = require('fs')
  , path = require('path')
  , utils = require('utilities')
  , useCoffee = false;

utils.mixin(utils, new (function () {
  var JSPAT = /\.(js|coffee)$/;

  // Add this pseudo-private to use for grabbing
  // models/controllers
  this._getConstructorsFromDirectory = function (dirname) {
    var cwd = process.cwd()
      , dirList = fs.readdirSync(dirname)
      , fileName
      , filePath
      , ctorName
      , ret = [];

    for (var i = 0; i < dirList.length; i++) {
      fileName = dirList[i];
      // Any files ending in '.js' or '.coffee'
      if (PAT.test(fileName)) {
        // Fucking CoffeeScript
        if (fileName.match(/\.coffee$/)) {
          useCoffee = useCoffee || utils.file.requireLocal('coffee-script');
        }

        // Strip the extension from the file name
        fileName = fileName.replace(PAT, '');

        // Convert underscores to camelCase with
        // initial cap, e.g., 'NeilPearts'
        ctorName = utils.string.camelize(fileName, {initialCap: true});
        filePath = path.join(cwd, dirname, fileName);
        ret.push({
            ctorName: ctorName
          , filePath: filePath
        });
      }
    }
    return ret;
  };

  this._getDirList = function (dirname) {

    var cwd = process.cwd()
            , dirList = fs.readdirSync(dirname)
            , fileName
            , filePath
            , ctorName
            , ret = [];

    for (var i = 0; i < dirList.length; i++) {
            fileName = dirList[i];
            // Any files ending in '.js' or '.coffee'
            if (JSPAT.test(fileName)) {
                if (fileName.match(/\.coffee$/)) {
                    // fileName is a CoffeeScript file so try to require it
                    usingCoffee = usingCoffee || utils.file.requireLocal('coffee-script');
                }
                // Strip the extension from the file name
                fileName = fileName.replace(JSPAT, '');

                // Convert underscores to camelCase with
                // initial cap, e.g., 'NeilPearts'
                ctorName = geddy.string.camelize(fileName, {initialCap: true});
                filePath = path.join(cwd, dirname, fileName);
                ret.push({
                    ctorName: ctorName
                    , filePath: filePath
                });
            }
        }
        return ret;
   };

})());

module.exports = utils;
