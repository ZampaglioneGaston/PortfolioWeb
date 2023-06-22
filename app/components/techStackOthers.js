function TechStackOthers() {
  return (
    <section data-test='stackTech' className='flex flex-wrap sm:flex gap-3 pb-10 ml-20 mb-20 mr-20 mt-10 justify-center sticky items-center'>
    <div data-test='dbTech' className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg sm:p-6  dark:bg-gray-800 dark:border-gray-700 m-2 shadow-lg">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white border-b-2">
        Database Technologies
      </h5>
      <ul className="my-4 space-y-3">
        <li>
          <a href="https://www.mysql.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/sqlicon.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">SQL</span>
          </a>
        </li>
        <li>
          <a href="https://www.mysql.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/mysqlicon.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">My SQL</span>
          </a>
        </li>
        <li>
          <a href="https://www.mongodb.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/mongoicon.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Mongo DB</span>
          </a>
        </li>
        <li>
          <a href="https://dbeaver.io/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/dbeaver.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">DBeaver</span>
          </a>
        </li>
        <li>
          <a href="https://robomongo.org/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/robo3t.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Robo 3T</span>
          </a>
        </li>
      </ul>
    </div>

    <div data-test='TCTech' className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg  sm:p-6  dark:bg-gray-800 dark:border-gray-700 m-2 shadow-lg">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white border-b-2">
        Test Cases Managment
      </h5>
      <ul className="my-4 space-y-3">
        <li>
          <a href="https://code.visualstudio.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/vscode.jpg" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Visual Studio Code</span>
          </a>
        </li>
        <li>
          <a href="https://cucumber.io//" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/cucumber.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Cucumber</span>
          </a>
        </li>
        <li>
          <a href="https://www.atlassian.com/software/jira" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/jiraicon.jpg" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Jira</span>
          </a>
        </li>
        <li>
          <a href="https://www.testrail.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/testrail.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Test Rail</span>
          </a>
        </li>
        <li>
          <a href="https://www.getxray.app/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/xray.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">X-Ray</span>
          </a>
        </li>
      </ul>
    </div>

    <div data-test='ApiTech' className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg  sm:p-6  dark:bg-gray-800 dark:border-gray-700 m-2 shadow-lg">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white border-b-2">
        API tools
      </h5>
      <ul className="my-4 space-y-3">
        <li>
          <a href="https://swagger.io/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/swagger.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Swagger</span>
          </a>
        </li>
        <li>
          <a href="https://www.postman.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/postman-icon.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Postman</span>
          </a>
        </li>
        <li>
          <a href="https://jmeter.apache.org/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/jmeter.jpg" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Apache Jmeter</span>
          </a>
        </li>
        <li>
          <a href="https://www.blazemeter.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/blazemeter.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Blazemeter</span>
          </a>
        </li>
        <li>
          <a href="https://k6.io/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/k6.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">K6</span>
          </a>
        </li>
      </ul>
    </div>

    <div data-test='otherTech' className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg  sm:p-6  dark:bg-gray-800 dark:border-gray-700 m-2 shadow-lg">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white border-b-2">
        Cloud & Telemtry tools
      </h5>
      <ul className="my-4 space-y-3">
        <li>
          <a href="https://www.elastic.co/es/kibana/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/kibana.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Kibana</span>
          </a>
        </li>
        <li>
          <a href="https://grafana.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/grafana.jpg" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Grafana</span>
          </a>
        </li>
        <li>
          <a href="https://www.splunk.com/en_us/products.html" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/splunk.jpg" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Splunk</span>
          </a>
        </li>
        <li>
          <a href="https://aws.amazon.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/aws.jpg" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">AWS</span>
          </a>
        </li>
        <li>
          <a href="https://www.jenkins.io/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/jenkins.jpg" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Jenkins</span>
          </a>
        </li>
      </ul>
    </div>

    <div data-test='moreTools' className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg  sm:p-6  dark:bg-gray-800 dark:border-gray-700 m-2 shadow-lg">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white border-b-2">
        Other tools
      </h5>
      <ul className="my-4 space-y-3">
        <li>
          <a href="https://github.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/github.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://about.gitlab.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/gitlab.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">GitLab</span>
          </a>
        </li>
        <li>
          <a href="http://appium.io/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/appium.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Appium</span>
          </a>
        </li>
        <li>
          <a href="https://www.jetbrains.com/idea/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/intellij.png" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">IntelliJ IDEA</span>
          </a>
        </li>
        <li>
          <a href="https://www.figma.com/" target='_blank' className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img aria-hidden="true" className="h-6 rounded-full" src="/figma.jpg" alt="cypress" />
            <span className="flex-1 ml-3 whitespace-nowrap">Figma</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
  );
}

export default TechStackOthers;
