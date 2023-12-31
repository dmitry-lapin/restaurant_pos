import PastaImg from "./assets/dishes_images/Pasta.jpg";
import BakedBeansImg from './assets/dishes_images/baked_beans.jpg';
import BBQsteakImg from './assets/dishes_images/bbq_steak.jpg';
import MargheritaPizzaImg from './assets/dishes_images/pizza.jpg';
import BrowniesImg from './assets/dishes_images/brownies.jpg';
import ChickenTikkaMasalaImg from './assets/dishes_images/chicken_tikka_masala.jpg';
import SaladImg from './assets/dishes_images/caesar_salad.jpg';

//categories images below
import All from './assets/icons/All.png'
import Salad from "./assets/icons/Salad.png";
import Soup from "./assets/icons/Soup.png";
import Pasta from './assets/icons/Pasta.png'
import Bakery from './assets/icons/Bakery.png';
import Dessert from './assets/icons/Dessert.png';
import Main from './assets/icons/Main.png';
import Side from './assets/icons/Side.png';
import Vegetarian from './assets/icons/Vegetarian.png';
import Kids from './assets/icons/Kids.png';

//menu images below
import Dashboard from './assets/menu_icons/dashboard.png'
import Food from './assets/menu_icons/food.png'
import Messages from './assets/menu_icons/messages.png'
import Bills from './assets/menu_icons/bills.png'
import Settings from './assets/menu_icons/settings.png'
import Team from "./assets/menu_icons/team.png";

//user image 
import userImage from '../src/assets/common_images/userImage.png'
import { revenue } from "./app/helpers/fetchStatisticsData";

const menuData = [
    ['Dashboard', '/dashboard', Dashboard],
    ['Food & Drinks', '/food_catalog', Food],
    ['Messages', '/messages', Messages],
    ['Team', '/team', Team],
    ['Settings', '/settings', Settings]
];

export const categoriesData = [ 
  { name: 'All', image: All },
  { name: 'Salad', image: Salad },
  { name: 'Soup', image: Soup },
  { name: 'Pasta', image: Pasta },
  { name: 'Bakery', image: Bakery },
  { name: 'Dessert', image: Dessert },
  { name: 'Main dish', image: Main },
  { name: 'Side', image: Side },
  { name: 'Vegetarian', image: Vegetarian },
  { name: 'Kids menu', image: Kids }
];

export const teamData = [
  {
    name: "Bart Simpson",
    position: 'waiter',
    photo: ''
  },
];

export const userInformation = {
  name: "Homer Simpson",
  image: userImage,
  position: "waiter",
  generalInfo: {
    firstName: "Homer",
    secondName: "Simpson",
    email: "homer@simpson.cartoon",
    country: "USA",
    city: "Springfield",
    address: "742 Evergreen Terrace"
  }
}

export const productData = {
  "Pasta": [
    {
      "name": "Spaghetti Bolognese",
      "price": 12.49,
      "image": PastaImg,
      "description": "A delicious spaghetti dish with Bolognese sauce.",
      quantity: 0
    }
  ],
  "Pizza": [
    {
      "name": "Margherita Pizza",
      "price": 9.99,
      "image": MargheritaPizzaImg,
      "description": "A classic Margherita pizza with fresh ingredients.",
      quantity: 0
    }
  ],
  "Soup": [
    {
      "name": "Chicken Tikka Masala",
      "price": 14.99,
      "image": ChickenTikkaMasalaImg,
      "description": "A flavorful chicken tikka masala served with rice.",
      quantity: 0
    }
  ],
  "Salad": [
    {
      "name": "Caesar Salad",
      "price": 8.99,
      "image": SaladImg,
      "description": "Romaine, croutons, Parmesan, creamy dressing.",
      quantity: 0
    }
  ],
  "Dessert": [
    {
      "name": "Salted chocolate & hazelnut brownies",
      "price": 19.49,
      "image": BrowniesImg,
      "description": "Decadent salted chocolate and hazelnut brownies.",
      quantity: 0
    }
  ],
  "Main": [
    {
      "name": "BBQ Steak",
      "price": 24.99,
      "image": BBQsteakImg,
      "description": "A juicy BBQ steak cooked to perfection.",
      quantity: 0
    }
  ],
  "Side": [
    {
      "name": "Baked beans",
      "price": 7.49,
      "image": BakedBeansImg,
      "description": "Enjoy a side of flavorful baked beans with your meal.",
      quantity: 0
    }
  ],
}

export default menuData;

