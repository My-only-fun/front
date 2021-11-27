import React from "react";

const Footer: React.FC = () => {

    return <>
        {/* Footer   */}
        <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                {/*// <!-- Col-1 -->*/}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/*// <!-- Col Title -->*/}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Getting Started
                    </div>

                    {/*// <!-- Links -->*/}
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Installation
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Release Notes
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Upgrade Guide
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Using with Preprocessors
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Optimizing for Production
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Browser Support
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        IntelliSense
                    </p>
                </div>

                {/*// <!-- Col-2 -->*/}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/*// <!-- Col Title -->*/}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Core Concepts
                    </div>

                    {/*// <!-- Links -->*/}
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Utility-First
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Responsive Design
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Hover, Focus, & Other States
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Dark Mode
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Adding Base Styles
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Extracting Components
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Adding New Utilities
                    </p>
                </div>

                {/*// <!-- Col-3 -->*/}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/*// <!-- Col Title -->*/}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Customization
                    </div>

                    {/*// <!-- Links -->*/}
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Configuration
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Theme Configuration
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Breakpoints
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Customizing Colors
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Customizing Spacing
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Configuring Variants
                    </p>
                    <p  className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Plugins
                    </p>
                </div>

                {/*// <!-- Col-3 -->*/}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/*// <!-- Col Title -->*/}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Community
                    </div>

                    {/*// <!-- Links -->*/}
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        GitHub
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Discord
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Twitter
                    </p>
                    <p
                       className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        YouTube
                    </p>
                </div>
            </div>

            {/*// <!-- Copyright Bar -->*/}
            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5
            border-t border-gray-500 text-gray-400 text-sm
            flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">
                        MyOnlyFun © Copyright 2021-year. All Rights Reserved.
                    </div>

                    {/*// <!-- Required Unicons (if you want) -->*/}
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <p className="w-6 mx-1">
                            <i className="uil uil-facebook-f"/>
                        </p>
                        <p className="w-6 mx-1">
                            <i className="uil uil-twitter-alt"/>
                        </p>
                        <p className="w-6 mx-1">
                            <i className="uil uil-youtube"/>
                        </p>
                        <p className="w-6 mx-1">
                            <i className="uil uil-linkedin"/>
                        </p>
                        <p className="w-6 mx-1">
                            <i className="uil uil-instagram"/>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;