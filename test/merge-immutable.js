var merge = require('../')
var test = require('tape')
const { isImmutable, Map, List, Stack } = require('immutable');

test('should merge objects with immutables', function(t) {

  var immutable = Map({
    imm_a: "val_a",
    imm_b: Map({
      imm_c: "val_c"
    })
  })

  var target = {
    "a": "val_a",
    "imm": immutable
  }

  var src = {
    "b": {
      "c": "val_c"
    }
  }

	var expected = {
		"a": "val_a",
    "imm": immutable,
		"b": {
			"c": "val_c",
		},
	}

	t.deepEqual(merge(target, src), expected)
	t.end()
})
