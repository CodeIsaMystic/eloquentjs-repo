function skipSpace(string) {
  let skippable = string.match(/^(\s|#.*)*/);
  return string.slice(skippable[0].length);
}

console.log(parse("# hello\nx"));
// => {type: "word", name: "X"}

console.log(parse("a # one\n  # two\n()"));
// =>   {type: "apply",
//      operator: {type: "word", name: "a"},
//      args: []}