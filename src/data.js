import homepageImage from './Assets/Homepage.jpg';
import deliveryIcon from './Assets/DeliveryIcon.png';
import GreekSalad from './Assets/Greek-Salad.jpg';
import Bruchetta from './Assets/bruchetta.jpg';
import LemonDessert from './Assets/lemon_dessert.jpg';
import demnaImg from './Assets/Demna.webp';
import janeImg from './Assets/Jane.webp';
import georginaImg from './Assets/Georgina.webp';
import billImg from './Assets/Bill.webp';

const listForFooter = [
  {
    id: 1,
    listItems: [
      "Doormat Navigation",
      "Home",
      "About",
      "Menu",
      "Reservation",
      "Order Online",
      "Login",
    ],
  },
  {
    id: 2,
    listItems: [
      "Contact",
      "Address",
      "Phone number",
      "Email",
    ],
  },
  {
    id: 3,
    listItems: [
      "Social Media Links",
      "Facebook",
      "Twitter",
      "Instagram",
    ],
  },
];


const listForMain = [
  {
    id:1,
    className: "Hero-section",
    listItems: ["Hero-Section"]
  },
  {
    id:2,
    className:"Highlights-section",
    listItems:["Highlights-section"]
  },
  {
    id:3,
    className:"Testimonials-section",
    listItems:["Testimonials-section"]
  },
  {
    id:4,
    className:"About-section",
    listItems:["About-section"]
  }
];

const homePageInfo = {
  image: homepageImage,
  imageAlt: 'Italien Dish',
  title: "Little Lemon",
  location: "Chicago",
  description: "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist",
  buttonLabel: "Reserve a table",
  classname: 'Hero-section'
};

const SpeacialsData = [
  {
   id:1,
   image:GreekSalad,
   title: "Greek Salad",
   price: "$10.00",
   description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
   orderText:"Order a delivery",
   icon:deliveryIcon,
  },
  {
   id:2,
   image:Bruchetta,
   title:"Bruchetta",
   price:"$7.69",
   description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
   orderText:"Order a delivery",
   icon:deliveryIcon,
  },
  {
   id:3,
   image:LemonDessert,
   title:'Lemon Dessert',
   price:'$9.50',
   description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
   orderText:"Order a delivery",
   icon:deliveryIcon,
  }
];


const testimonialsData = [
  {
   id:1,
   image:demnaImg,
   name: "Demna",
   rating: 5,
   description:"The grilled fish and lemon dessert tasted great. Highly recommend",
  },
  {
   id:2,
   image:janeImg,
   name: "Jane",
   rating: 5,
   description:"It was very easy to make a reservation. The food and the ambiance were incredible. Will definitely go back again",
  },
  {
   id:3,
   image:billImg,
   name: "Bill",
   rating: 5,
   description:"It was so easy to book a table online amd their customer service was great!",
  },
  {
   id:4,
   image:georginaImg,
   name: "Georgina",
   rating: 5,
   description:"Little Lemon is my go to restaurant with my family during important occassions although it can get pretty busy",
  }
]




export {listForFooter,listForMain, homePageInfo,SpeacialsData,testimonialsData}; // Default export
