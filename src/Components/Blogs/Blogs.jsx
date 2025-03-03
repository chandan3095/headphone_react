import React from "react";
import Blogs1 from "../../assets/blog1.jpg";
import Blogs2 from "../../assets/blog2.jpg";
import Blogs3 from "../../assets/blog3.jpg";
import Blogs4 from "../../assets/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { fadeUp } from "../Services/Services";

const blogsData = [
  {
    id: 1,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    image: Blogs1,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam qui ut facere maiores, accusantium numquam repellat minima modi quis!",
    link: "#",
  },
  {
    id: 2,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    image: Blogs2,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam qui ut facere maiores, accusantium numquam repellat minima modi quis!",
    link: "#",
  },
  {
    id: 3,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    image: Blogs3,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam qui ut facere maiores, accusantium numquam repellat minima modi quis!",
    link: "#",
  },
  {
    id: 4,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    image: Blogs4,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam qui ut facere maiores, accusantium numquam repellat minima modi quis!",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <motion.h3
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center pb-10"
        >
          Blogs
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogsData.map((item) => (
            <UpdateFollower
              key={item.id}
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "Read",
                textFontSize: "3px",
                scale: 5,
              }}
            >
              <div className="flex flex-col gap-6 items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                <img src={item.image} alt="" />
                <div className="space-y-2">
                  <h4 className="text-xl font-bold line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
