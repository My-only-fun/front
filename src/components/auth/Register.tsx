import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Page from "../Page/Page";
import { useToken } from "../../hooks/token";
import {login, register} from "../../hooks/register";
import Label from "../utils/Label";

const Register: React.FC = () => {
  const history = useHistory();
  const { token, setToken } = useToken();
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  if (token) {
    history.push('/');
  }
  const registerUser = async (event: any) => {
    event.preventDefault();

    if (event.target.password.value !== event.target.passwordConfirmed.value) {
      setMessage("Passwords doesn't match");
      setStatus("Error");
      return;
    }

    let errorOnRegister: boolean = false;
    await register(
      event.target.influencerName.value,
      event.target.username.value,
      event.target.descriptionInfluencer.value,
      event.target.siteInf.value,
      event.target.hashtags.value,
      event.target.avatar_urlInf.value,
      event.target.emailInf.value,
      event.target.password.value
    ).catch((event) => {
      if (event.response.status === 409) {
        errorOnRegister = true;
      }
    });

    if (errorOnRegister) {
      setMessage("Email or username already taken");
      setStatus("Error");
      return;
    }

    const token = await login(
      event.target.username.value,
      event.target.password.value
    );

    setToken(token);
    history.push("/");
  };
  return (
    <Page>
      {/*// <!-- Container -->*/}
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/*// <!-- Row -->*/}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/*// <!-- Col -->*/}
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
              <img
                className="object-center object-cover w-full h-full"
                src="https://cdn.discordapp.com/attachments/909802705403392081/909804741314379786/51sdoOtxfKL.png"
                alt="myonlyfun logo"
              />
            </div>
            {/*// <!-- Col -->*/}
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={registerUser}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="influencerName"
                    >
                      Influencer Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="influencerName"
                      type="text"
                      placeholder="Influencer Name"
                      required={true}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                      required={true}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="emailInf"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="emailInf"
                    type="email"
                    placeholder="Email"
                    required={true}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="descriptionInfluencer"
                  >
                    Description
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="descriptionInfluencer"
                    type="text"
                    placeholder="Your description"
                    required={true}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="siteInf"
                    >
                      Your website
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="siteInf"
                      type="text"
                      placeholder="Your website"
                      required={true}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="hashtags"
                    >
                      Hashtags
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="hashtags"
                      type="text"
                      placeholder="Hashtags"
                      required={true}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="avatar_urlInf"
                    >
                      Avatar URL
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="avatar_urlInf"
                      type="text"
                      placeholder="Your profile pic url"
                      required={true}
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                      required={true}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="passwordConfirmed"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="passwordConfirmed"
                      type="password"
                      placeholder="******************"
                      required={true}
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                  <div className="mt-6 " />
                  <Label status={status} message={message} />
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link to="/login">
                    <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Already have an account? Login!
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Register;
