import BenefitModel from "../benefits/BenefitModel";

export default class InfluencerModel {
  id: string | undefined;
  name: string | undefined;
  job: string | undefined;
  description: string | undefined;
  hashtags: string | undefined;
  site: string | undefined;
  avatar_url: string | undefined;
  email: string | undefined;
  benefits: BenefitModel[] | undefined;
}
