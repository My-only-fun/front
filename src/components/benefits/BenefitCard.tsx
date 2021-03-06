import BenefitModel from "./BenefitModel";
import React from "react";

interface BenefitCardProps {
  benefit: BenefitModel;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  const benefitStyle = {
    main: "w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg",
    currency: "ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500",
  }
  if (benefit.highlight) {
    benefitStyle.main = "w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-indigo-500 text-white mt-6 shadow-lg rounded-lg";
    benefitStyle.currency = "ml-1 pt-8 text-2xl leading-8 font-medium text-gray-100";
  }

  return (
    <>
      <div className={benefitStyle.main}>
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="flex justify-center">
            <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
              {benefit.title}
            </span>
          </div>
          <div className="mt-4 flex justify-center text-6xl leading-none font-extrabold">
            ${benefit.price}
            <span className={benefitStyle.currency}>
              /month
            </span>
          </div>
        </div>
        <p className="text-md mt-4">Plan include :</p>
          {benefit.description}
        {/*<ul className="text-sm w-full mt-6 mb-6">*/}
        {/*  <li className="mb-3 flex items-center ">*/}
        {/*    <svg*/}
        {/*      className="h-6 w-6 mr-2"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="6"*/}
        {/*      height="6"*/}
        {/*      stroke="currentColor"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 1792 1792"*/}
        {/*    >*/}
        {/*      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />*/}
        {/*    </svg>*/}
        {/*    All illimited components*/}
        {/*  </li>*/}
        {/*  <li className="mb-3 flex items-center ">*/}
        {/*    <svg*/}
        {/*      className="h-6 w-6 mr-2"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="6"*/}
        {/*      height="6"*/}
        {/*      stroke="currentColor"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 1792 1792"*/}
        {/*    >*/}
        {/*      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />*/}
        {/*    </svg>*/}
        {/*    Own custom Tailwind styles*/}
        {/*  </li>*/}
        {/*  <li className="mb-3 flex items-center ">*/}
        {/*    <svg*/}
        {/*      className="h-6 w-6 mr-2"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="6"*/}
        {/*      height="6"*/}
        {/*      stroke="currentColor"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 1792 1792"*/}
        {/*    >*/}
        {/*      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />*/}
        {/*    </svg>*/}
        {/*    Unlimited Templates*/}
        {/*  </li>*/}
        {/*  <li className="mb-3 flex items-center ">*/}
        {/*    <svg*/}
        {/*      className="h-6 w-6 mr-2"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="6"*/}
        {/*      height="6"*/}
        {/*      stroke="currentColor"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 1792 1792"*/}
        {/*    >*/}
        {/*      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />*/}
        {/*    </svg>*/}
        {/*    Free premium dashboard*/}
        {/*  </li>*/}
        {/*  <li className="mb-3 flex items-center ">*/}
        {/*    <svg*/}
        {/*      className="h-6 w-6 mr-2"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="6"*/}
        {/*      height="6"*/}
        {/*      stroke="currentColor"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 1792 1792"*/}
        {/*    >*/}
        {/*      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />*/}
        {/*    </svg>*/}
        {/*    Best ranking*/}
        {/*  </li>*/}
        {/*  <li className="mb-3 flex items-center opacity-50">*/}
        {/*    <svg*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="6"*/}
        {/*      height="6"*/}
        {/*      className="h-6 w-6 mr-2"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 1792 1792"*/}
        {/*    >*/}
        {/*      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />*/}
        {/*    </svg>*/}
        {/*    Prenium svg*/}
        {/*  </li>*/}
        {/*  <li className="mb-3 flex items-center opacity-50">*/}
        {/*    <svg*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="6"*/}
        {/*      height="6"*/}
        {/*      className="h-6 w-6 mr-2"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 1792 1792"*/}
        {/*    >*/}
        {/*      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />*/}
        {/*    </svg>*/}
        {/*    My wife*/}
        {/*  </li>*/}
        {/*</ul>*/}

        <button
          type="button"
          className="mt-8 w-full px-3 py-3 text-sm shadow rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-700 transform"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default BenefitCard;
