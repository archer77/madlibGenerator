//madLibsStore.js
//Author:Alexander Corley

/**
 * @brief   get a mad lib referenced by title
 */
function getMadLib(title) {
  for (var index = 0; index < madLibs.length; index++) {
    if (madLibs[index].title == title)
      return madLibs[index];
  }
  return undefined;
}

/**
 * @brief   compare one story to the next, used to sort the nav bar
 * i could have just put the stories in alphabetical order in the first place
 * but this allows me to just append them
 */
function compareTo(o1, o2) {
  if (o1.title > o2.title) return 1;
  if (o1.title < o2.title) return -1;
  return 0;
}

//array of story objects
//could convert this to object notation now that i know it
//rather than declaring the objects as I go.
//could also store this in a .JSON file but i dont know how to yet
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
  },
  {
    title : "Noah's Ark",
    
    words : [
      "Noun",
      "Verb",
      "Adjective",
      "Noun (Plural)",
      "Vehicle",
      "Noun",
      "Number",
      "Noun (Plural)",
      "Noun (Plural)",
      "Number",
      "Adjective",
      "Noun",
      "Verb Ending in \"ed\"",
      "Verb Ending in \"ed\"",
      "Noun (Plural)",
      "Measurement of Time (Plural)",
      "Verb Ending in \"ed\"",
      "Noun (Plural)",
      "Noun (Plural)",
      "Type of Liquid",
      "Noun",
      "Adjective",
      "Verb",
      "Noun"
    ],
    
    Story : "There was [Word Not Submitted] in the world. So God told Noah that it was going to [Word Not Submitted] for a [Word Not Submitted] time. God gave Noah [Word Not Submitted] on what to do: \"Make a [Word Not Submitted]. It should be made out of gopher [Word Not Submitted] and should be [Word Not Submitted] [Word Not Submitted] long, and 75 [Word Not Submitted] wide. Take with you [Word Not Submitted] of every creature: One [Word Not Submitted], and one female.\" So Noah gathered his [Word Not Submitted] together, and they [Word Not Submitted] the ark. Noah`s friends [Word Not Submitted] out [Word Not Submitted] at him as he worked, but Noah didn`t pay attention to them. Finally after 120 [Word Not Submitted], the ark was [Word Not Submitted]. They then gathered all the creatures, and as the last one boarded, it began to [Word Not Submitted]. For 40 [Word Not Submitted] and 40 [Word Not Submitted], it went on. The Earth became covered with [Word Not Submitted]. After a year and a day, they found [Word Not Submitted], and everyone else was [Word Not Submitted]. And as a sign that God would never [Word Not Submitted] the earth again, he gave them a/an [Word Not Submitted]."
  }

];
