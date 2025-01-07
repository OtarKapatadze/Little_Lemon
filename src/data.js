import homepageImage from './Assets/Homepage.jpg';
import deliveryIcon from './Assets/DeliveryIcon.png';
import GreekSalad from './Assets/Greek-Salad.jpg';
import Bruchetta from './Assets/bruchetta.jpg';
import LemonDessert from './Assets/lemon_dessert.jpg';
import demnaImg from './Assets/Demna.webp';
import janeImg from './Assets/Jane.webp';
import georginaImg from './Assets/Georgina.webp';
import billImg from './Assets/Bill.webp';
import ownersA from './Assets/Owners A.jpg'
import ownersB from './Assets/Owners B.jpg'

// Footer  icons

import twitterIcon from './Assets/X-twitter.png';
import facebookIcon from './Assets/Facebook.png';
import instagramIcon from './Assets/Instagram.png';
import youtubeIcon from './Assets/Youtube.png';
import emailIcon from './Assets/email.png';
import phoneIcon from './Assets/phone.png';
import pinIcon from './Assets/pin.png';
import copyIcon from './Assets/copyright.png';

const listForFooter = [
  {
    id: 1,
    listItems: [
      "SITEMAP",
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
      {
        title: "CONTACT US"
      },
      {
       icon : pinIcon,
       content:" 123 Fake Ave, Chicago, IL 60602"
      },
      {
        icon: phoneIcon,
        content: " +1 (012) 345-6789"
      },
      {
        icon: emailIcon,
        content: " info@littlelemon.com"
      },
      {
        icon: copyIcon,
        content:"Little Lemon By OTAR_2025"
      },
    ],
  },
  {
    id: 3,
    listItems: [
      {title: "FIND US IN SOCIAL MEDIA"},
      {
        icon:facebookIcon,
        link: "https://www.facebook.com/"
      },
      {
        icon:twitterIcon,
        link: "https://x.com/"
      },
      {
        icon:instagramIcon,
        link:"https://www.instagram.com/"
      },
      {
        icon:youtubeIcon,
        link:"https://www.youtube.com/"
      },
    ],
  },
];

  const iconsForFooter = [
  {facebook: facebookIcon},
  {twitter: twitterIcon},
  {instagram: instagramIcon},
  {youtube: youtubeIcon},
  {address:pinIcon},
  {phone: phoneIcon},
  {email: emailIcon},
  {copyrights: copyIcon},
  ];


const listForMain = [
  {
    id:1,
    className: "hero-container",
    listItems: ["Hero-contents"]
  },
  {
    id:2,
    className:"specials-container",
    listItems:["Specials-contents"]
  },
  {
    id:3,
    className:"testimonials-container",
    listItems:["Testimonials-content"]
  },
  {
    id:4,
    className:"about-container",
    listItems:["About-content"]
  }
];

const homePageInfo = {
  image: homepageImage,
  imageAlt: 'Italien Dish',
  title: "Little Lemon",
  location: "Chicago",
  description: "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist",
  buttonLabel: "Reserve a table",
  classname: 'hero-container'
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
];

const chicagoData = {
  title: 'Our Story',
  image1: ownersA,
  image2: ownersB,
  description: "Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region"
}



export {
  listForFooter,
  listForMain,
  homePageInfo,
  SpeacialsData,
  testimonialsData,
  chicagoData,
  iconsForFooter
  }; // Default export





  
// const listForFooter = [
//   {
//     id: 1,
//     listItems: [
//       "SITEMAP",
//       "Home",
//       "About",
//       "Menu",
//       "Reservation",
//       "Order Online",
//       "Login",
//     ],
//   },
//   {
//     id: 2,
//     listItems: [
//       "CONTACT US",
//       " 123 Fake Ave, Chicago, IL 60602",
//       " +1 (012) 345-6789",
//       " info@littlelemon.com",
//       "Little Lemon By OTAR_2025"
//     ],
//   },
//   {
//     id: 3,
//     listItems: [
//       "FIND US IN SOCIAL MEDIA",
//       "facebook",
//       "twitter",
//       "instagram",
//       "youtube",
//     ],
//   },
// ];

//   const iconsForFooter = [
//   {facebook: facebookIcon},
//   {twitter: twitterIcon},
//   {instagram: instagramIcon},
//   {youtube: youtubeIcon},
//   {address:pinIcon},
//   {phone: phoneIcon},
//   {email: emailIcon},
//   {copyrights: copyIcon},
//   ];
  