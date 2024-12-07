import profile from '../assets/profile_pic.jpeg'
import sharma from '../assets/sharmajinew.jpg'


import { AnimatedTestimonials } from "./ui/animated-testimonials";

function Team() {
  const testimonials = [
    {
      quote:
        "You can judge a man’s true character by the way he treats his fellow animals.",
      name: "Madhusudan Tripathi",
      designation: "Frontend Developer",
      src: profile,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Saiyam Dubey",
      designation: " Backend Developer",
      src: "https://github.com/saiyamdubey/ChatApp/blob/main/Screenshot%202024-12-01%20201532.png?raw=true",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Divyanshu Sharma",
      designation: "UI/Resource",
      src: "https://github.com/saiyamdubey/Astitva/blob/main/src/assets/sharmajinew.jpg?raw=true",
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}


export default Team;