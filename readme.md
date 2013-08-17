
# JSON parsing require.js plugin

It's such a simple thing, but convenient to have nonetheless - [require](http://requirejs.org) any content served as
JSON, and the parsing is all done for you.

# Usage

+ Download [require-json.js](//raw.github.com/steveukx/require-json/master/require-json.js)

+ Add an entry to your require config:

    require.config({
       paths: {
          json: 'path/to/require-json'
       }
    });

+ Add dependencies to your files:

    require(['json!/rest/service/'], function(json) {
       // json is the JSON parsed result of calling /rest/service
    });

# Why use this plugin?

It's pretty much the same thing as using any of the options below, but it's convenient for hiding away the need to parse
responses or set the accept header explicitly to allow the server to do content type negotiation.

    // load using jQuery's ajax tools
    jQuery.get('/rest/service/', function(data) {
        // already JSON parsed
    });

    // load as text with the require text plugin
    require(['text!/rest/service'], function(data) {
       try { data = JSON.parse(data); } catch(e) { /* bad json */ }
    });

    // or use this plugin
    require(['json!/rest/service'], function(data) {
       // already JSON parsed
    });

# License

Released under the [MIT](http://opensource.org/licenses/MIT) license. In short usage is free for any purpose, with the
usual lack of warranties either explicit or implied.


