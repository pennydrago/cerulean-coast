import chocolateTartImage from "../images/dessertItemImages/razvan-mirel-ufK6dVE4KHA-unsplash.jpg";
import pancakesImage from "../images/dessertItemImages/luke-pennystan-09FcOqmi8R0-unsplash.jpg";
import custardCakeImage from "../images/dessertItemImages/13on-z4BJGODf6O4-unsplash.jpg";
import raspberryTartImage from "../images/dessertItemImages/alexandra-kusper-88sNfcLB_KM-unsplash.jpg";

const dessertItems = [
  {
    id: 1,
    name: "Chocolate tart",
    description: "A rich chocolate tart; can be served with cream or ice cream.",
    imageSource: chocolateTartImage,
    imageAltText: "A piece of chocolate tart served from the whole chocolate tart",
    promotion: "A delicous chocolate tart, ideally served with tea or coffee.",
    price: "$7.30"
  },
  {
    id: 2,
    name: "Pancakes",
    description: "A stack of fluffy pancakes, with fruit and syrup.",
    imageSource: pancakesImage,
    imageAltText: "A stack of pancakes with berries on the side",
    promotion: "Enjoy a stack of warm pancakes, ideal with a milkshake or hot chocolate.",
    price: "$6.50"
  },
  {
    id: 3,
    name: "Custard cake",
    description: "A custard cake topped with meringue and served with cream on the side.",
    imageSource: custardCakeImage,
    imageAltText: "A custard cake with meringue and lemon on top.",
    promotion: "Sweet and tart flavors are delicately balanced in this delicous cake.",
    price: "$7.10"
  },
  {
    id: 4,
    name: "Raspberry tart",
    description: "A raspberry tart created with a biscuit base and vanilla custard balanced with juicy raspberries.",
    imageSource: raspberryTartImage,
    imageAltText: "A vanilla custard tart topped with raspberries.",
    promotion: "This delightful tart is perfect served with tea or coffee.",
    price: "$7.90"
  }
];

export default dessertItems;