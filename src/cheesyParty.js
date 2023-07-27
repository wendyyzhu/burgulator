const label = ['', '', "DOUBLE CHEESE", "TRIPLE CHEESE", "QUADRUPLE CHEESE", "QUINTUPLE CHEESE"]

export default function cheesyParty(ingredients) {
    const cheeseCount = ingredients.filter((elem) => elem === 'Cheese').length
    if (cheeseCount > 5) {
      return "MAXIMUM CHEESE!!!"
    } else {
      return label[cheeseCount]
    }
}