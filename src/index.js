function greet(name = "World") {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function main() {
  console.log(greet());
  console.log(`2 + 2 = ${add(2, 2)}`);
}

if (require.main === module) {
  main();
}

module.exports = { greet, add, main };
