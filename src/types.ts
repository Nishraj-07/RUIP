export interface HouseholdData {
  id: string;
  number: number;
  headOfFamily: string;
  headOfFamilyMarathi: string;
  totalMembers: number;
  males: number;
  females: number;
  childrenBelow14: number;
  houseType: string;
  primaryBusiness: string;
  businessCategory: 'Agriculture' | 'Retail (Kirana)' | 'Agriculture & Dairy';
  annualIncome: string;
  annualIncomeCategory: '1–2.49L' | '2.5–4.99L' | '5–9.99L';
  landOwned: string;
  landAcresNote: string;
  highestEducation: string;
  educationLevel: 'Middle School' | 'Secondary' | 'Higher Secondary' | 'Graduate & Above';
  cookingFuel: string;
  usesFirewood: boolean;
  drinkingWaterSource: string;
  toiletAvailabilityUsage: string;
  ladkiBahinYojana: {
    status: 'Eligible & Beneficiary' | 'Ineligible (Income Threshold)';
    isBeneficiary: boolean;
    monthlyAmount: number;
    rawText: string;
  };
  otherGovernmentSchemes: string[];
  loansTaken: string;
  hasCooperativeLoan: boolean;
  mainProblemsReported: string;
  problemTag: 'Regular Water Supply' | 'Livestock Chaff Cutter' | 'Agricultural Machinery' | 'No Major Problems';
  fieldObservation: string;
}

export interface FieldPhoto {
  id: string;
  title: string;
  titleMarathi: string;
  src: string;
  date: string;
  time: string;
  gpsLocation: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  category: 'Delegation' | 'Environment' | 'Education' | 'Agriculture' | 'Panchayat' | 'Governance' | 'Sports & Games' | 'Games' | 'Interviews';
  caption: string;
  fieldNarrative: string;
}

export interface VillageFact {
  title: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface InterventionProposal {
  id: string;
  title: string;
  titleMarathi: string;
  targetNeed: string;
  affectedHouseholds: string[];
  departmentFocus: string;
  solutionDescription: string;
  keyDeliverable: string;
  socialImpact: string;
}
