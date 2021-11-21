import {influencers} from "../assets/influencers";

export default function useInfluencerDetail(id: string) {
    return influencers[parseInt(id, 10) -1 ];
}