import cypressPic from "../../public/Cypress.jpg";
import selenium from "../../public/Selenium_Logo.png";
import playwright from "../../public/playwright.png";
import js from "../../public/jsicon.png";
import java from "../../public/javaicon.png";
import html from "../../public/htmlicon.jpg";
import Image from "next/image";

function TechStack() {
  return (
    <section
      data-test="techCards"
      className="flex flex-wrap sm:flex gap-3 pb-10 ml-20 mb-20 mr-20  justify-center sticky items-center"
    >
      <div
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-white  border border-gray-200 rounded-xl shadow-lg  dark:bg-gray-800 dark:border-gray-700 m-2 hover:scale-105"
        data-test="cypressCard"
      >
        <div className="flex flex-col items-center p-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={cypressPic}
            alt="cypress"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900  dark:text-white">
            Cypress.io
          </h5>
          <span className="text-sm text-gray-500 dark:text-white whitespace-no-wrap truncate">
            Automation Framework
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://www.cypress.io/"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700  dark:focus:ring-blue-800"
            >
              Website
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-xl shadow-lg  dark:bg-gray-800 dark:border-gray-700 m-2 hover:scale-105"
        data-test="seleniumCard"
      >
        <div className="flex flex-col items-center p-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={selenium}
            alt="image"
          />
          <h5 className="mb-1 text-xl font-medium dark:text-white">Selenium</h5>
          <span className="text-sm text-gray-500 dark:text-white whitespace-no-wrap truncate">
            Automation Framework
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://www.selenium.dev/"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700  dark:focus:ring-blue-800"
            >
              Website
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-xl shadow-lg  dark:bg-gray-800 dark:border-gray-700 m-2 hover:scale-105"
        data-test="playwrightCard"
      >
        <div className="flex flex-col items-center p-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={playwright}
            alt="image"
          />
          <h5 className="mb-1 text-xl font-medium dark:text-white">
            Playwright
          </h5>
          <span className="text-sm text-gray-500 dark:text-white whitespace-no-wrap truncate">
            Automation Framework
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://playwright.dev/"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700  dark:focus:ring-blue-800"
            >
              Website
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-xl shadow-lg  dark:bg-gray-800 dark:border-gray-700 m-2 hover:scale-105"
        data-test="jsCard"
      >
        <div className="flex flex-col items-center p-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={js}
            alt="image"
          />
          <h5 className="mb-1 text-xl font-medium dark:text-white">
            Javascript
          </h5>
          <span className="text-sm text-gray-500 dark:text-white whitespace-no-wrap truncate">
            Programming Language
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700  dark:focus:ring-blue-800"
            >
              Website
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-xl shadow-lg  dark:bg-gray-800 dark:border-gray-700 m-2 hover:scale-105"
        data-test="javaCard"
      >
        <div className="flex flex-col items-center p-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={java}
            alt="image"
          />
          <h5 className="mb-1 text-xl font-medium dark:text-white">Java</h5>
          <span className="text-sm text-gray-500 dark:text-white whitespace-no-wrap truncate">
            Programming Language
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://www.java.com/en/"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700  dark:focus:ring-blue-800"
            >
              Website
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-xl shadow-lg  dark:bg-gray-800 dark:border-gray-700 m-2 hover:scale-105"
        data-test="htmlCard"
      >
        <div className="flex flex-col items-center p-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={html}
            alt="image"
          />
          <h5 className="mb-1 text-xl font-medium dark:text-white">HTML5</h5>
          <span className="text-sm text-gray-500 dark:text-white whitespace-no-wrap truncate">
            Markup Language
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700  dark:focus:ring-blue-800"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
