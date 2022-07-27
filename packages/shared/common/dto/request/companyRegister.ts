export class CompanyRegisterReqDto {
  firstName: string;
  lastName: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
  position: string;
  email: string;
  companyProfile: {
    compName: string;
    compContractPlan: number | string;
    comAddress: {
      zipCode: number;
      address: string;
      subAddress: string;
    };
  };
  captchaToken: string;
}
