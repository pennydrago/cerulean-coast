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
    imageAltText: "A bowl containing a vegetable salad with oranges and walnuts",
    promotion: "Enjoy this salad as a light meal, ideal with sparkling water.",
    price: "$18.50"
  },
  {
    id: 2,
    name: "Vegetable stirfry",
    description: "Stir-fried vegetables, including broccoli, red capscicum, mushrooms, onions and spring onions; served with noodles",
    imageSource: vegetableStirfryImage,
    imageAltText: "A plate containing a vegetable stirfry on noodles",
    promotion: "A variety of vegetables are combined in this flavorful dish.",
    price: "$21.50"
  },
  {
    id: 3,
    name: "Fish with beans and rice",
    description: "Pan-fried cod with a tomato and capers sauce; with green beans and white rice.",
    imageSource: fishBeansRiceImage,
    imageAltText: "A plate of cod, green beans and white rice",
    promotion: "This meal is delicious served with iced tea.",
    price: "$24.30"
  },
  {
    id: 4,
    name: "Prawn and vegetable stirfry",
    description: "Prawns, capscicums and onions combined in a spicy sauce.",
    imageSource: prawnStirfryImage,
    imageAltText: "A plate containing a spicy prawn and vegetable stirfry",
    promotion: "As our signature meal, this stirfry uses local fresh prawns and boasts a delicate spicy flavor.",
    price: "$26.90"
  },
  {
    id: 5,
    name: "Tomato and basil pizza",
    description: "A fluffy pizza base topped with tomato sauce, mozzarella cheese and basil leaves.",
    imageSource: tomatoBasilPizzaImage,
    imageAltText: "A whole pizza topped with tomato sauce, melted mozzarella cheese and basil leaves",
    promotion: "A warm fluffy pizza topped with homemade tomato sauce, melted mozzarella cheese and scattered basil leaves.",
    price: "$19.00"
  }
];

export default mealItems;