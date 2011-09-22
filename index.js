#!/usr/bin/env node

var es = require('event-stream')
  , jsonpath = require('JSONPath').eval
  
module.exports = JSONPathStream   

function JSONPathStream (query) {
  
  return es.mapSync(function (data) {
    //console.log(query)
    if(!query)
      return data
    return jsonpath(data, query)
  })

}

/*
add --explode option.
if a query returns an array, emit each item as a new chunk.
*/

if(!module.parent)
  es.pipeable(
    es.split,
    es.parse, 
    //es.log,
    function () {
      return JSONPathStream(process.argv[2])
    },
    es.stringify
  )
