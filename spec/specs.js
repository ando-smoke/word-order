describe("wordOrder", function() {
  it("takes the string 'Hello, world world.' and produces the " +
  "array ['world', 'hello']", function() {
    var testString = "Hello, world world.";
    expect(wordOrder(testString)).to.eql(['world', 'hello']);
  });

  it("takes the string 'It's a Mad, Mad, Mad, Mad world!' and produces the " +
  "array ['mad', 'it's', 'a', 'world']", function() {
    var testString = "It's a Mad, Mad, Mad, Mad world!";
    expect(wordOrder(testString)).to.eql(["mad", "it's", "a", "world"]);
  });
});
