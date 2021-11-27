import {influencers} from "../assets/influencers";
import {useQuery} from "react-query";
import InfluencerModel from "../components/influencer/InfluencerModel";
import {commonRequest} from "./utils/request";

export default function useInfluencerDetail(id: string) {
    return influencers[parseInt(id, 10) -1 ];
}

export function useInfluencerList() {
    return useQuery<InfluencerModel[], Error>(`influencers`, async () => {
        const { data } =  await commonRequest({
            url: 'users',
            method: 'GET',
        });
        return data;
    });
}