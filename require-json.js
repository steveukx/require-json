define(function () {

   "use strict";

   /**
    * @name require-json
    * @constructor
    */
   function requireJson(path, onDone) {
      var xhr = new XMLHttpRequest;
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = function(e) {
         if(xhr.readyState === 4) {
            var json = null;
            var err = null;

            try {
               json = JSON.parse(xhr.responseText);
            }
            catch (e) {
               err = e;
            }
            finally {
               onDone(err, json || null);
            }
         }
      };
      xhr.send(path);
   }

   requireJson.load = function(name, require, onLoad, config) {
      requireJson(require.toUrl(name), function(err, data) {
         if(err) {
            onLoad.error(err);
         }
         else {
            onLoad(data);
         }
      });
   };

   return requireJson;

});
