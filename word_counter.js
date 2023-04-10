let input =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, iste! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam maiores animi recusandae reiciendis, quasi facere amet assumenda laboriosam quaerat cupiditate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis vel dolor tenetur? Dignissimos maxime, eligendi quod id nesciunt labore atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque necessitatibus accusamus minus quisquam ullam incidunt eos est, eius tenetur doloribus ipsa, temporibus aliquid quod nisi nam. Perferendis quae ipsum cum blanditiis aliquid, sint cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam maiores incidunt perspiciatis saepe molestiae. Nemo adipisci distinctio aliquid culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, est.";

function wordcounter(inp) {
  let wordList = new Map();
  let allWords = inp.split(" ");

  for (const word of allWords) {
    if (!wordList.has(word)) {
      wordList.set(word, 1);
    } else {
      wordList.set(word, wordList.get(word) + 1);
    }
  }
  return wordList;
}

console.log(wordcounter(input));