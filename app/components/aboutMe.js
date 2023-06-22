import { AiFillLinkedin } from "react-icons/ai";
function AboutMe() {
  return (
    <div className="h-fit">
      <section className="mb-10 sm:mb-24 p-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:h-screen md:h-screen">
            <div className="max-h-96 md:h-screen">
              <img
                className="w-screen h-screen object-cover object-top"
                src="/buhito.jpg"
                alt=""
              />
            </div>
            <div className="flex bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700  shadow-2xl  p-10">
              <div className="mb-auto mt-auto max-w-lg  text-gray-900 dark:text-white font-bold">
                <h1 className="text-3xl uppercase">
                  A little summary about myself
                </h1>
                <p className="font-semibold mb-5">QA Engineer</p>
                <p className="mb-2 font-normal text-gray-900 dark:text-white indent-5">
                  Hi! I am Gaston Zampaglione, an automation and manual QA with a
                  technical education background. I graduated as an Electronic
                  Technician and continued my studies at the National
                  Technological University in System Engineering. I was soon
                  able to start working as a Manual QA where I almost
                  immediately also started learning about automation. Nowadays I
                  have already worked with lots of different frameworks and
                  really capable people, from whom I have learned lots of
                  different methodologies and approaches. At the present time, I
                  have the privilege to say that I really enjoy my position as a
                  QA.
                </p>
                <p className="font-normal text-gray-900 dark:text-white indent-5">
                  I relish spending my free time as a bird rescuer. I had
                  amazing experiences while rescuing injured owls, hawks, doves
                  and many more. I also receive birds from local veterinarians
                  till they are able to fly again or to give them shelter if
                  they are too injured to fly ever again. I also enjoy playing
                  both boardgames and videogames. I love playing Warhammer and
                  Magic: the gathering with many of my friends, who describe me
                  as someone with an everlasting jovial spirit.
                </p>
                <a
                  href="https://www.linkedin.com/in/gastonzampaglione/"
                  target="_blank"
                >
                  {" "}
                  <button className="bg-black rounded-md py-3 px-7 mt-6 text-white text-3xl bg-gradient-to-r dark:from-green-400 dark:to-blue-500 dark:hover:from-pink-500 dark:hover:to-orange-500   from-pink-500 to-orange-500 hover:from-green-400 hover:to-blue-500">
                    <div className="">
                      <AiFillLinkedin />
                    </div>
                  </button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
