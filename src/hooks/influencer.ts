import { useQuery } from "react-query";
import InfluencerModel from "../components/influencer/InfluencerModel";
import {authenticatedRequest, commonRequest} from "./utils/request";
import UserModel from "../components/auth/UserModel";

export default function useInfluencerDetail(id: string) {
  return useQuery<InfluencerModel, Error>(`influencer-${id}`, async () => {
    const { data } = await commonRequest({
      url: `users/${id}`,
    });
    return data;
  });
}

export function useInfluencerList() {
  return useQuery<InfluencerModel[], Error>(`influencers`, async () => {
    const { data } = await commonRequest({
      url: "users",
      method: "GET",
    });
    return data;
  });
}

const getInfluencers = async (): Promise<InfluencerModel[]> =>  {
  const { data } = await commonRequest({
    url: `users`,
    method: "GET",
  });

  return data;
}
const getMe = async (): Promise<UserModel> =>  {
  const { data } = await authenticatedRequest({
    url: `users/me`,
    method: "GET",
  });

  return data;
}

const becomeAnInfluencer = async (
    id: string,
): Promise<UserModel> => {
  const { data } = await commonRequest({
    url: `users/becomeInfluencer`,
    method: "POST",
    data: {
      id: id
    },
  });

  return data;
};

export { becomeAnInfluencer, getMe, getInfluencers};
