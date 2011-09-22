#jrep <em>grep for JSON</em>

select attributes from json streams of json with JSONPath

from command line, or node with `Stream`s.

##usage

``` bash

curl registry.npmjs.org/jrep | jrep "$..author"

```

or from within node

``` js
var changes = require('couch-stream').changes
  , jrep    = require('jrep')

changes({database: 'tests', include_docs: true}).pipe(jrep('$..whatever'))

```

see also:

  * https://github.com/dominictarr/event-stream  
  * https://github.com/dominictarr/couch-stream
