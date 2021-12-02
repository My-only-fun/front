import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Page from "../Page/Page";
import useInfluencerDetail from "../../hooks/influencer";
import BenefitCard from "../benefits/BenefitCard";

interface InfluencerDetailParams {
  id: string;
}

const InfluencerDetail = ({
  match,
}: RouteComponentProps<InfluencerDetailParams>) => {
  const {
    isLoading: isInfluencerLoading,
    isError: isInfluencerError,
    data: influencer,
    error,
  } = useInfluencerDetail(match.params.id);

  if (isInfluencerLoading) {
    return <span>Loading....</span>;
  }

  if (isInfluencerError) {
    if (error) {
      return <span>Error: {error.message}</span>;
    }
  }

  // console.log(influencer?.benefits?.forEach((benefit) => {
  //   // benefit !== undefined ? console.log(benefit) : console.log("toto")
  // }));
  // influencer?.benefits?.forEach((benefit) => {
  //   console.log(benefit);
  // });

  let benefitsListComponent: JSX.Element = <></>;
  if (influencer) {
    if (influencer.benefits?.length !== 0) {
      benefitsListComponent = (
        <>
          {influencer.benefits?.map((benefit) => {
            return <BenefitCard key={benefit.id} benefit={benefit} />;
          })}
        </>
      );
    }

    // if (influencerList.length !== 0) {
    //   influencersListComponent = (
    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //         {influencerList.map((influencer: InfluencerModel) => (
    //             <Link to={"/influencer/" + influencer.id}>
    //               <InfluencerCard key={influencer.id} influencer={influencer} />
    //             </Link>
    //         ))}
    //       </div>
    //   );
    // } else {
    //   influencersListComponent = <NoInfluencers />;
    // }
  }

  return (
    <Page>
      <div className="bg-gray-100 h-auto px-48">
        <div className="flex md:flex-row-reverse flex-wrap">
          <div className="w-full md:w-3/4 p-4 text-center">
            <div className="text-left pl-4 pt-3">
              <span className="text-base text-gray-700 text-2xl mr-2">
                {influencer?.name}
              </span>
              {/*<span className="text-base font-semibold text-gray-700 mr-2">*/}
              {/*  <button className="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded">*/}
              {/*    Edit Profile*/}
              {/*  </button>*/}
              {/*</span>*/}
              {/*<span className="text-base font-semibold text-gray-700">*/}
              {/*  <button*/}
              {/*    className="p-1 border-transparent text-gray-700 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"*/}
              {/*    aria-label="Notifications"*/}
              {/*  >*/}
              {/*    <svg*/}
              {/*      className="h-8 w-8"*/}
              {/*      fill="none"*/}
              {/*      strokeLinecap="round"*/}
              {/*      strokeLinejoin="round"*/}
              {/*      strokeWidth="1.5"*/}
              {/*      stroke="currentColor"*/}
              {/*      viewBox="0 0 24 24"*/}
              {/*    >*/}
              {/*      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />*/}
              {/*      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />*/}
              {/*    </svg>*/}
              {/*  </button>*/}
              {/*</span>*/}
            </div>

            <div className="text-left pl-4 pt-3">
              <span className="text-base font-semibold text-gray-700 mr-2">
                <b>220</b> posts
              </span>
              <span className="text-base font-semibold text-gray-700 mr-2">
                <b>114</b> followers
              </span>
              <span className="text-base font-semibold text-gray-700">
                <b>200</b> following
              </span>
            </div>

            <div className="text-left pl-4 pt-3">
              <span className="text-base font-medium text-gray-700 mr-2">
                {influencer?.description}
              </span>
            </div>

            <div className="text-left pl-4 pt-3">
              <p className="text-base font-medium text-blue-700 mr-2">
                {influencer?.hashtags}
              </p>
              <p className="text-base font-medium text-gray-700 mr-2">
                {influencer?.site}
              </p>
            </div>
          </div>

          <div className="content-center w-full md:w-1/4 p-4 text-center">
            <div className="w-full relative md:w-3/4 text-center mt-8">
              <button
                className="flex rounded-full"
                id="user-menu"
                aria-label="User menu"
                aria-haspopup="true"
              >
                <img
                  className=" object-center object-cover h-40 w-40 rounded-full"
                  src={influencer?.avatar_url}
                  alt="Profile"
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-500 mt-6" />
        <hr className="border-gray-500 w-20 border-t-1 ml-64 border-gray-800" />

        {/*// <!--post icon and title-->*/}
        <div className="flex flex-row mt-4 justify-center mr-16">
          <div className="flex text-gray-700 text-center py-2 m-2 pr-5">
            <div className="flex inline-flex">
              <button
                className="border-transparent text-gray-800 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                aria-label="Notifications"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-screen items-center">
          <div className="">
            <div className="text-center font-semibold">
              <h1 className="text-5xl">
                <span className="text-indigo-500 tracking-wide">Benefits </span>
                <span>Plans</span>
              </h1>
              <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                Choose a plan that feat best for you and
                <br /> your needs.
              </p>
            </div>
            {/*// <!-- cards -->*/}
            <div className="my-16 sm:flex flex-wrap justify-center items-center gap-8">
              {/*// <!-- Cars rendering -->*/}
              {benefitsListComponent}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default InfluencerDetail;
