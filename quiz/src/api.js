export async function getQuestions() {
  let allQuestions = [];

  const easy = await fetch(
    "https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy"
  )
    .then((response) => response.json())
    .then((res) => {
      const data = res.results;
      return data;
    });

  // const easyQuestions = easy.map((question) => console.log(question));
  const medium = await fetch(
    "https://opentdb.com/api.php?amount=5&type=multiple&difficulty=medium"
  )
    .then((response) => response.json())
    .then((res) => {
      const data = res.results;
      return data;
    });

  const hard = await fetch(
    "https://opentdb.com/api.php?amount=5&type=multiple&difficulty=hard"
  )
    .then((response) => response.json())
    .then((res) => {
      const data = res.results;
      return data;
    });
  allQuestions = [...easy, ...medium, ...hard];
  return allQuestions;
}
