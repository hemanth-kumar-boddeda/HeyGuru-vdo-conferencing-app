import { Home,  SquareChevronLeft, Video,  SquareArrowUpRight, UserRoundPlus  } from 'lucide-react';

export const sidbarLink= [
    {
        label: "Home",
        icon: Home,
        route: "/home",
        imgUrl: '/icons/test.png'
    },
    {
        label: "Upcoming",
        icon: SquareArrowUpRight,
        route: "/upcoming",
        imgUrl: '/icons/upcoming.png'
    },
    {
        label: "Previous",
        icon: SquareChevronLeft,
        route: "/previous",
        imgUrl: '/icons/previous.png'
    },
    {
        label: "Recordings",
        icon: Video ,
        route: "/recordings",
        imgUrl: '/icons/video.png'
    },
    {
        label: "Personal Room",
        icon: UserRoundPlus ,
        route: "/personal-room",
        imgUrl: '/icons/person.png'
    },
]



export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    '/images/avatar-3.png',
    '/images/avatar-4.png',
    '/images/avatar-5.png',
]


export const faqs = [
    {
      question: "Is HeyGuru video calling app free to use?",
      answer: "Yes, the HeyGuru video calling app is free to download and use. However, certain premium features may require a subscription.",
    },
    {
      question: "Can I use HeyGuru to make international calls?",
      answer: "Absolutely! HeyGuru allows you to make both domestic and international calls to anyone around the globe, as long as you have an internet connection.",
    },
    {
      question: "Is my data secure while using HeyGuru?",
      answer: "HeyGuru takes your privacy and security seriously. All calls made through HeyGuru are encrypted to ensure that your conversations remain private and secure.",
    },
    {
      question: "What devices can I use to access HeyGuru?",
      answer: "HeyGuru is available on various platforms, including iOS, Android, and web browsers. You can use it on your smartphone, tablet, or computer, making it convenient for you to stay connected wherever you are.",
    },
    {
      question: "Does HeyGuru support group video calls?",
      answer: "Yes, HeyGuru supports group video calls, allowing you to connect with multiple friends, family members, or colleagues at the same time. Enjoy face-to-face conversations with everyone, no matter where they are.",
    },
  ];