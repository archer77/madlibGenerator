//madLibsStore.js
//Author:Alexander Corley

function getMadLib(title) {
  for (var index = 0; index < madLibs.length; index++) {
    if (madLibs[index].title == title)
      return madLibs[index];
  }
  return undefined;
}

var madLibs = [
  {
    title : "Pizza Parlor",
    
    words : [
      "Name",
      "Adjective",
      "Noun",
      "Adjective",
      "Food (Plural)",
      "Noun (Plural)",
      "Verb Ending in \"ed\"",
      "Liquid",
      "Noun"
    ],
    
    Story : "Come on over to [Word Not Submitted]`s Pizza Parlor where you can enjoy you favorite [Word Not Submitted]-dish pizza`s. You can try our famous [Word Not Submitted]-lovers pizza, or select from our list of [Word Not Submitted] toppings, including sauteed [Word Not Submitted], [Word Not Submitted], and many more. Our crusts are hand-[Word Not Submitted] and basted in [Word Not Submitted] to make them seem more [Word Not Submitted]-made."
  },
  {
    title : "Letter From Home",
    
    words : [
      "Relative",
      "Adjective",
      "Adjective",
      "Adjective",
      "Name of Person In Room",
      "Adjective",
      "Adjective",
      "Verb Ending in \"ed\"",
      "Body Part",
      "Verb Ending in \"ing\"",
      "Noun (Plural)",
      "Noun",
      "Adverb",
      "Verb",
      "Verb",
      "Relative",
      "Person in Room"
    ],
    
    Story : "Dear [Word Not Submitted], I am having a(n) [Word Not Submitted] time at camp. The counselour is [Word Not Submitted] and the food is [Word Not Submitted]. I met [Word Not Submitted] and we became [Word Not Submitted] friends. Unfortunately, [Word Not Submitted] is [Word Not Submitted] and I [Word Not Submitted] my [Word Not Submitted] so we couldn\`t go [Word Not Submitted] like everybody else. I need more [Word Not Submitted] and a [Word Not Submitted] sharpener, so please [Word Not Submitted] [Word Not Submitted] more when you [Word Not Submitted] back. Your [Word Not Submitted], [Word Not Submitted]"
  },
  {
    title : "Dragons",
    
    
    words : [
      "Color",
      "Superlative Ending in \"est\"",
      "Adjective",
      "Body Part (Plural)",
      "Pody Part",
      "Noun",
      "Animal (Plural)",
      "Adjective",
      "Adjective",
      "Adjective"
    ],
    
    Story: "The [Word Not Submitted] Dragon is the [Word Not Submitted] Dragon of all. It has [Word Not Submitted] [Word Not Submitted], and a [Word Not Submitted] shaped like a [Word Not Submitted]. It loves to eat [Word Not Submitted], although it will feast on nearly anything. It is [Word Not Submitted] and [Word Not Submitted]. You must be [Word Not Submitted] around it, or you may end up as it`s meal!"
  }

];
