import vegetableSaladImage from "../images/mealItemImages/louis-hansel-MlPD-AzZYMg-unsplash.jpg";
import vegetableStirfryImage from "../images/mealItemImages/hermes-rivera-k-sTTFdcZek-unsplash.jpg";
import fishBeansRiceImage from "../images/mealItemImages/david-b-townsend-AnC569NdAJc-unsplash.jpg";
import prawnStirfryImage from "../images/mealItemImages/alyssa-kowalski-kQhCD2q9_XI-unsplash.jpg";
import tomatoBasilPizzaImage from "../images/mealItemImages/razvan-cristea-V-MaZ44zMLk-unsplash.jpg";

const mealItems = [
  {
    id: 1,
    name: "Vegetable salad",
    description: "A mix of green salad leaves, beetroot, orange, fetta cheese and walnuts.",
    imageSource: vegetableSaladImage,
    imageAltText: "A bowl containing a vegetable salad with oranges and walnuts"
  },
  {
    id: 2,
    name: "Vegetable stirfry",
    description: "Stir-fried vegatables, including broccoli, red capscicum, mushrooms, onions and spring onions; served with noodles",
    imageSource: vegetableStirfryImage,
    imageAltText: "A plate containing a vegetable stirfry on noodles"
  },
  {
    id: 3,
    name: "Fish with beans and rice",
    description: "Pan-fried cod with a tomato and capers sauce; with green beans and white rice.",
    imageSource: fishBeansRiceImage,
    imageAltText: "A plate of cod, green beans and white rice"
  },
  {
    id: 4,
    name: "Prawn and vegetable stirfry",
    description: "Prawns, capscicums and onions combined in a spicy sauce.",
    imageSource: prawnStirfryImage,
    imageAltText: "A plate containing a spicy prawn and vegetable stirfry"
  },
  {
    id: 5,
    name: "Tomato and basil pizza",
    description: "A fluffy pizza base topped with tomato sauce, mozzarella cheese and basil leaves.",
    imageSource: tomatoBasilPizzaImage,
    imageAltText: "A whole pizza topped with tomato sauce, melted mozzarella cheese and basil leaves"
  }
];

export default mealItems;