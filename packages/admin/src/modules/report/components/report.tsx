import Container from 'common/components/container';
import React from 'react';
import { ButtonAccept, ButtonBack } from 'common/components/buttons';
import { ReportType, ReportStatus } from 'common/types/report';
import MessageErrors from 'common/components/msgError';

interface Data {
  status: ReportStatus;
  deviceId: number;
  reportId: number;
  name: string;
  reportDay: string;
  typeReport: ReportType;
  userId: number;
  userName: string;
  description: string;
  image: string;
  message?: string;
  onAccept: () => void;
  loading: boolean;
}

const Report = (data: Data) => {
  return (
    <Container rootClassName="pt-[50px]" title="REPORT DETAIL" className="w-full">
      <div className="w-[744px] bg-white rounded-md px-16 py-[30px] border border-solid border-[#dddddd] mx-auto">
        <div className="flex justify-between items-center">
          <p className="font-normal text-[16px]">Report ID :{data.reportId}</p>
          {data.status == 'ACCEPTED' ? (
            <span className="font-normal text-[16px] text-[#2F9A46]">{data.status}</span>
          ) : (
            <span className="font-normal text-[16px] text-[#FF8E25]">{data.status}</span>
          )}
        </div>
        <div className="w-ful h-[1px] bg-[#979797] mt-2 mb-[32px]" />
        <div className="flex justify-between items-center">
          <div className="w-[250px] h-[250px]">
            <img src={data.image} alt="device photo" className="w-full h-auto" />
          </div>
          <div className="w-[300px] flex flex-col items-start">
            <p className="font-medium text-[16px]">Device ID</p>
            <p className="mt-[10px] font-medium text-[16px] text-[#979797]">{data.deviceId}</p>
            <p className="mt-[10px] font-medium text-[16px]">Name</p>
            <p className="mt-[10px] font-medium text-[16px] text-[#979797]">{data.name}</p>
            <p className="mt-[10px] font-medium text-[16px]">Report day</p>
            <p className="mt-[10px] font-medium text-[16px] text-[#979797]">{data.reportDay}</p>
          </div>
        </div>

        <div className="mt-[10px] w-full flex flex-col items-start">
          <p className="font-medium text-[16px]">Type of report</p>
          <p className="mt-[10px] font-medium text-[16px] text-[#979797]">{data.typeReport}</p>
          <p className="mt-[10px] font-medium text-[16px]">User ID</p>
          <p className="mt-[10px] font-medium text-[16px] text-[#979797]">{data.userId}</p>
          <p className="mt-[10px] font-medium text-[16px]">User name</p>
          <p className="mt-[10px] font-medium text-[16px] text-[#979797]">{data.userName}</p>
          <p className="mt-[10px] font-medium text-[16px]">Description</p>
          <p className="mt-[10px] font-medium text-[16px] text-[#979797]">{data.description}</p>
        </div>
        <MessageErrors message={data.message} className="mb-[20px] mt-[20px]" />
        <div className="mt-[60px] flex justify-end">
          {data.status == 'WAITING' && (
            <ButtonAccept loading={data.loading} title="Accept" action={data.onAccept} className="mr-[22px]  w-[100px] h-[40px]" />
          )}
          <ButtonBack title="Back" className="w-[100px] h-[40px]" />
        </div>
      </div>
    </Container>
  );
};

export default Report;
