var wordOrder = function(string) {
  var words = string.split(" ").map(function(word) {
    return word.toLowerCase().replace(/[.?!,;:()"]+/,"");
  });
  var wordCounts = {};

  words.forEach(function(word) {
    if (wordCounts.hasOwnProperty(word)) {
      ++wordCounts[word];
    }
    else {
      wordCounts[word] = 1;
    }
  });

  var wordCountsKeys = Object.keys(wordCounts);

  var wordCountMap = wordCountsKeys.map(function(key, index) {
    return { keyName: key, keyCount: wordCounts[key], keyIndex: index };
  });

  wordCountMap.sort(function(a, b) {
    return (b.keyCount - a.keyCount) || (a.keyIndex - b.keyIndex);
  });

  return wordCountMap.map(function(obj) {
    return obj.keyName;
  });
};

$(document).ready(function() {
  $("form#string_to_word_order").submit(function(event) {
    var userString = $("input#userString").val();
    var wordOrderResult = wordOrder(userString);

    wordOrderResult.forEach(function(word) {
      $("ul").append("<li>" + word + "</li>");
    });

    $("#result").show();
    event.preventDefault();
  });
});
