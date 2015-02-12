describe("wordOrder", function() {
  it("takes the string 'Hello, world world.' and produces the array ['world', 'hello']", function() {
    var testString = "Hello, world world.";
    expect(wordOrder(testString)).to.eql(['world', 'hello']);
  });
});
