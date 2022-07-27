import clsx from 'clsx';
import { contactPlanLabel, contactPlanLabelColor } from 'common/constants/companyAccount';

export default function ContractPlanLabel({ contractPlan, className }: {contractPlan: number, className?: string}) {
  return (
    <p
      className={clsx('h-7 w-[8.5rem] text-sm font-bold border-solid border-[1px] rounded flex items-center justify-center leading-none',
        className, 
        contactPlanLabelColor[contractPlan]?.borderColor,
        contactPlanLabelColor[contractPlan]?.bgColor,
        contactPlanLabelColor[contractPlan]?.textColor
      )}
    >
      {contactPlanLabel[contractPlan]}
    </p>
  );
}
