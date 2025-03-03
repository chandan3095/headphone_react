import React from "react";
import Icon1 from "../../assets/obj1.png";
import Icon2 from "../../assets/obj2.png";
import Icon3 from "../../assets/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const serviceData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam qui ut facere maiores, accusantium numquam repellat minima modi quis!",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Gurantee",
    icon: Icon2,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam qui ut facere maiores, accusantium numquam repellat minima modi quis!",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam qui ut facere maiores, accusantium numquam repellat minima modi quis!",
    delay: 1.1,
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h3
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold text-center pb-10"
          >
            Services
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {serviceData.map((item) => (
            <UpdateFollower
              key={item.id}
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 0.5,
                rotate: 720,
                mixBlendMode: "darken",
                scale: 10,
                backgroundElement: (
                  <div>
                    <img src={item.icon} />
                  </div>
                ),
              }}
            >
              <motion.div
                variants={fadeUp(item.delay)}
                initial="hidden"
                whileInView="show"
                className="flex flex-col items-center justify-center p-5 max-w-[350px] mx-auto shadow-lg rounded-xl bg-white"
              >
                <img src={item.icon} alt="" className="w-[100px] mb-4" />
                <div className="text-center space-y-2">
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <p className="text-center text-sm text-black/75">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </UpdateFollower>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
