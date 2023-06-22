import profilePic from "../../public/profPic.png";
import Image from "next/image";

function InfoSec() {
  return (
    <div data-test="info" className="h-screen text-center p-3">
      <h2
        className="text-5xl lg:text-6xl font-LouisLight dark:text-white"
        data-test="firstName"
      >
        Gastón Alberto
      </h2>
      <h3
        className="text-6xl lg:text-7xl font-LouisBold font-bold dark:text-white"
        data-test="lastName"
      >
        Zampaglione Mujica
      </h3>
      <h4
        className="text-2xl lg:text-2xl p-6 font-LouisLight dark:text-white mb-2"
        data-test="position"
      >
        {" "}
        QA Automation | QA Manual
      </h4>
      <div
        className="mx-auto items-center justify-center"
        data-test="profilePic"
      >
        <div className="relative group mx-auto h-80 w-80 lg:w-96 lg:h-96 rounded-s-full rounded-e-full bg-orange-400 dark:bg-teal-400 p-1 shadow-lg">
          <div className="absolute inset-0  h-80 w-80 lg:w-96 lg:h-96 rounded-s-full rounded-e-full bg-gradient-to-r  from-pink-400 to-orange-700 dark:from-teal-500 dark:to-blue-500 blur-lg dark:blur-xl opacity-50 dark:opacity-75 group-hover:duration-200 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-gray-800 rounded-full overflow-hidden group-hover transition duration-200">
            <Image src={profilePic} alt="profilePsicture" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSec;
