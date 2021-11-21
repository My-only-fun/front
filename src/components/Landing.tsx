import React from 'react';
import InfluencerCard from "./influencer/InfluencerCard";
import { Link } from 'react-router-dom';
import Header from "./Header";
import {influencers} from "../assets/influencers";
import InfluencerModel from "./influencer/InfluencerModel";
import Footer from "./Footer";

const influencerList: InfluencerModel[] = influencers;

const Landing: React.FC = () => {
    return (
        <>
            <Header/>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-indigo-600">
                        We have exactly what you are looking for...
                    </h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        Check our awesome influencers
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {influencerList.map((influencer: InfluencerModel ) => (
                        <Link to={"/influencer/" + influencer.id }>
                            <InfluencerCard
                                influencer={influencer}
                            />
                        </Link>

                    ))}
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Landing;