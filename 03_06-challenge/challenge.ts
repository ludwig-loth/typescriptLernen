export function Challenge() {
  type myType = string | false | Array<string | number>


  let foo: myType = "Hello!";
  foo = false;
  foo = ["test", 100];
}
