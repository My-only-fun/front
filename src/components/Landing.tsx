import React from "react";
import InfluencerCard from "./influencer/InfluencerCard";
import { Link } from "react-router-dom";
import Header from "./Page/Header";
import InfluencerModel from "./influencer/InfluencerModel";
import Footer from "./Page/Footer";
import { useInfluencerList } from "../hooks/influencer";
import NoInfluencers from "./influencer/NoInfluencers";
import Wallet from "./wallet/Wallet";


const Landing: React.FC = () => {
  let influencerList: InfluencerModel[] = [];

  const {
    isLoading: isLoadingInfluencer,
    isError: isErrorInfluencer,
    data: influencerData,
    error,
  } = useInfluencerList();

  if (isLoadingInfluencer) {
    return <div>Loading...</div>;
  }

  if (isErrorInfluencer) {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  }

  let influencersListComponent: JSX.Element = <NoInfluencers />;
  if (influencerData) {
    influencerList = influencerData;
    if (influencerList.length !== 0) {
      influencersListComponent = (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {influencerList.map((influencer: InfluencerModel) => (
                  <Link to={"/influencer/" + influencer.id}>
                    <InfluencerCard key={influencer.id} influencer={influencer}/>
                  </Link>
              ))}
            </div>
            {/*

            */}
            <Wallet/>
          </>
      );
    } else {
      influencersListComponent = <NoInfluencers />;
    }
  }

  return (
    <>
      <Header />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We have exactly what you are looking for...
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome influencers
          </h1>
        </div>
        {influencersListComponent}
      </section>
      <Footer />
    </>
  );
};

export default Landing;
