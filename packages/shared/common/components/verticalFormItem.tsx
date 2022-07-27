import clsx from 'clsx';

type DataType = {
  title?: string;
  subTitle?: string;
  children?: any;
  required?: boolean;
  className?: string;
};

export default function VerticalFormItem({ title, subTitle, children, required, className }: DataType) {
  return (
    <div className={clsx('flex-col min-h-[5.25rem] border-0 py-4', className)}>
      <div className="flex items-center px-0">
        <div className="flex-col">
          <p className="font-bold text-black-lighter-2">
            {title} {required && <span className="text-red-500">*</span>}
          </p>
          {subTitle && <p className="text-[13px]">{subTitle}</p>}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-0 py-2">
        <div className="break-words whitespace-pre-line">{children}</div>
      </div>
    </div>
  );
}
