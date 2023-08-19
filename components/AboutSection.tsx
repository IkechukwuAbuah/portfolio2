import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Data Analytics" },
  { skill: "Blockchain Analytics" },
  { skill: "Product Management" },
  { skill: "Prompt Engineering" },
  { skill: "SQL" },
  { skill: "Python" },
  { skill: "Looker ML" },
  { skill: "Design" },
  { skill: "Generative Ai" },
  { skill: "Solidity" }
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              <span className="font-bold">Ikechukwu</span>, means God&apos;s Strength (for the curious).
              Based in Lagos, Nigeria and Bridgetown, Barbados, I live with and celebrate many cultures and traiditions.
            </p>
            <br />
            <p>
              I am a{" "}
              <span className="font-bold">life-long</span>{" "}
              <span className="font-bold">learner</span>,{" "}
              <span className="font-bold">obsessed</span> with building great products. A business leader with expertise
              across E-commerce and supply chain, as well as paradigms like blockchain and Genereative Ai. I aim to redefine the
              way we create value, and to help usher in a new age of abundance.
            </p>
            <br />
            <p>
              I graduated from the University of Sheffield, United Kingdom with a BEng in
              Electronic and Communications Engineering before moving back home to Lagos, Nigeria to build businesses across E-commercem, Supply Chain, Agriculture and Engineering Services. 
            </p>
            <br />
            <p>
              If you&apos;d like to reach out/grab a cup of coffee, please send me an email:{" "}
              <span className="font-bold text-teal-500">kelvin.abuah@gmail.com</span>{" "}
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                 className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
             >
{item.skill}
</p>
))}
</div>
<Image
           src="/hero-image.png"
           alt=""
           width={325}
           height={325}
           className="hidden md:block md:relative md:bottom-100 md:left-0 md:z-0"
           
         />
</div>
</div>
</div>
</section>
);
};

export default AboutSection;
