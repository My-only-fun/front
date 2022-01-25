import React from "react";
import Page from "../Page/Page";
import { createInfluencerToken } from "../../Web3Client";

const CreateToken: React.FC = () => {
  const createToken = async (event: any) => {
    event.preventDefault();

    console.log(event);
    const tokenAddress = await createInfluencerToken(
      event.target.tokenName.value,
      event.target.tokenSymbol.value,
      event.target.numberOfDecimal.value,
      event.target.initialSupply.value
    );
    console.log(tokenAddress);
  };

  return (
    <Page>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/*// <!-- Row -->*/}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/*// <!-- Col -->*/}
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
              <img
                className="object-center object-cover w-full h-full"
                src="https://cdn.dribbble.com/users/2210413/screenshots/6511262/erc20-badge2.png"
                alt="myonlyfun logo"
              />
            </div>
            {/*// <!-- Col -->*/}
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">
                Create your influencer Token !
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={createToken}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="tokenName"
                    >
                      Token Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="tokenName"
                      type="text"
                      placeholder="Token Name"
                      required={true}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="tokenSymbol"
                    >
                      Token symbol
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="tokenSymbol"
                      type="text"
                      placeholder="Token symbol"
                      required={true}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="numberOfDecimal"
                  >
                    Number of decimals
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="numberOfDecimal"
                    type="text"
                    placeholder="Number of decimals"
                    required={true}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="initialSupply"
                  >
                    Initial supply
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="initialSupply"
                    type="text"
                    placeholder="Initial supply"
                    required={true}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Become famous !
                  </button>
                  <div className="mt-6 " />
                  {/*<Label status={status} message={message} />*/}
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CreateToken;
