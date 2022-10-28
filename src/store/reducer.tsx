// import { SET_SLIDE_IMAGE } from "./constants";
import { logoDark, logoLight, avatar, avatar1, avatar2,serviceBE,serviceDevOps } from "../asset/index";
const initState = {
  logo: {
    dark: logoDark,
    light: logoLight,
  },
  menus: ["Home", "About", "Service", "Portfolio", "Blog", "Contact"],
  main: {
    topMain: {
      trail: ["Kind", "Quiet", "Serious", "Optimistic", "Responsible"],
      avatar: avatar,
    },
    headContent: {
      typing: [
        "I'AM A WEB DEVELOPER",
        1000,
        "I'AM A FULLSTACK DEVELOPER",
        1000,
      ],
      content:
        "I'm a Web Developer.I have seriously started programming for 3 years and have 1 year of working experience. I can create Server, UI/UX layouts for any kind of website is required such as: portal, portfolio, e-commerce, dynamic websites, entertainment websites, educational websites, social websites.",
      contact: [
        {
          label: "Facebook",
          icon: <i className='contact fa-brands fa-facebook'></i>,
          src: "https://www.facebook.com/datdo.ok/",
        },
        {
          label: "Youtube",
          icon: <i className='contact fa-brands fa-youtube'></i>,
          src: "https://www.youtube.com/channel/UCkQNGix9dQBmKUcnf3Qs9lg",
        },
        {
          label: "Github",
          icon: <i className='contact fa-brands fa-github'></i>,
          src: "https://www.facebook.com/datdo.ok/",
        },
        {
          label: "Gitlab",
          icon: <i className='contact fa-brands fa-gitlab'></i>,
          src: "https://www.facebook.com/datdo.ok/",
        },
      ],
      avatar: avatar1,
    },
    aboutContent: {
      userInfo: {
        name: "THANH DAT",
        fullname: "Do Thanh Dat",
        age: 20,
        address: "Minh Khai - Bac Tu Liem - Ha Noi",
        phone: "0387661380",
        email: "turborvip@gmail.com",
      },
      description:
        "I'am a third-year student at HaNoi University of Industrial. My major is Software Engineering. When i was a child i had a dream become a pilot :>. After a few years i want to become a police... but Because The line of life jostles, In 2020, i passed University entrance exam and decided to choose software engineering :)). And for a living, i study and gradually i like develop. I started with C... then C++, HTML, JS, Jquery, PHP, MySQL, NodeJS, VueJS, ReactJS, Mongoose, Sails and....I feel development is extremely interesting( Although it's very depressed :> ).",
      avatar: avatar2,
      cv: "https://drive.google.com/drive/folders/0B_RkyqmmwpPTcW5MTVJYaWJyZkE?resourcekey=0-qGgkAqPmK3jbIfVc6U_OEg",
    },
    serviceContent: {
      services: [
        {
          title: "FRONTEND DEVELOPMENT",
          description:
            "I can develop UX/UI. A front-end developer creates websites and applications using web languages",
          img: "https://img.freepik.com/premium-vector/front-end-word-concepts-banner-web-applications-programming_106317-84.jpg?w=2000",
          button: "Book service now",
          badge: "ON SALE",
        },
        {
          title: "BACKEND DEVELOPMENT",
          description:
            "I can develop servers. Web development activities that are done at the back end of programs are referred to as back end development.",
          img: serviceBE,
          button: "Book service now",
          badge: "ON SALE",
        },
        {
          title: "DEVOPS DEVELOPMENT",
          description:
            "I can deploy product, run global environment. DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).",
          img: serviceDevOps,
          button: "Book service now",
          badge: "ON SALE",
        },
      ],
    },
  },
};

function reducer(state: any, action: any) {
  switch (action.type) {
    // case SET_USERNAME_LOGIN:
    //     return {
    //         ...state,
    //         username: action.payload
    //     }
    default:
      throw new Error("Invalid actions.");
  }
}

export { initState };
export default reducer;
