import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const Courses = [
{
name: "Digital Transformation with Google Cloud",
description:
"Google -2022",
image: "/digital-trans-google.png",
link: "https://www.cloudskillsboost.google/public_profiles/963b30b0-7f68-46f4-ba82-a17cd418b4dc/badges/3076242?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
},
{
name: "Infrastructure & Application Modernization with Google Cloud",
description: "Google - 2022",
image: "/infrastructure-google.png",
link: "https://www.cloudskillsboost.google/public_profiles/963b30b0-7f68-46f4-ba82-a17cd418b4dc/badges/3080110?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
},

{
  name: "McKinsey Forward Program",
  description: "Mckinsey Africa - 2022 Cohort",
  image: "/mckinsey.png",
  link: " https://www.credly.com/badges/d05fe5db-cd11-4946-a8f3-a3b8a99ae9c4/linked_in_profile",
},

{
  name: "CS198.2x: Blockhain Technology - Berkley",
  description: "Berkley - 2022",
  image: "/blockchain.png",
  link: "https://courses.edx.org/certificates/655e30c5e6d5472c8b98a228b7d84b5f",
},

{
  name: "CS198.1x: Bitcoin and Cryptocurrencies",
  description: "Berkley - 2022",
  image: "/bitcoin.png",
  link: "https://courses.edx.org/certificates/3cc39f4b2b7b4c8da277aadc1a752e6c",
},

{
  name: "Decentralized Finance Infrastructure",
  description: "Duke University - 2022",
  image: "/defi-infra.png",
  link: "https://coursera.org/share/72d4b670d5465fe742ea0ae1178e5eba",
},

{
  name: "Decentralized Finance Primities",
  description: "Duke University - 2022",
  image: "/defi-primi.png",
  link: "https://coursera.org/share/dbf2d89a96e494ab298bf907020e6fe5",
},


]

const CoursesSection = () => {
return (
<section id="Courses">
<h1 className="my-10 text-center font-bold text-4xl">
Courses
<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
</h1>
  <div className="flex flex-col space-y-28">
    {Courses.map((Courses, idx) => {
      return (
        <div key={idx}>
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className=" md:w-1/2">
                <Link href={Courses.link}>
                  <Image
                    src={Courses.image}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
              <div className="mt-8 md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">{Courses.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  {Courses.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4">
                  <Link href={Courses.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      )
    })}
    
  </div>
</section>
)
}

export default CoursesSection