import { useQuery } from "react-query";
import InfluencerModel from "../components/influencer/InfluencerModel";
import { commonRequest } from "./utils/request";

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
