import { commonRequest } from "./utils/request";

const register = async (
  name: string,
  username: string,
  description: string,
  site: string,
  hashtags: string,
  avatar_url: string,
  email: string,
  password: string
): Promise<{
  id: string;
  name: string;
  email: string;
  username: string;
}> => {
  const { data, error } = await commonRequest({
    url: `/users`,
    method: "POST",
    data: {
      name: name,
      username: username,
      description: description,
      site: site,
      hashtags: hashtags,
      avatar_url: avatar_url,
      email: email,
      password: password,
    },
  });

  console.log(data);
  console.log(error);

  return data;
};

export { register };
