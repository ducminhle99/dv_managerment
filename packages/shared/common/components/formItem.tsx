import clsx from 'clsx';

type DataType = {
  title?: any;
  subTitle?: string;
  children?: any;
  required?: boolean;
  className?: string;
};

export default function FormItem({ title, subTitle, children, required, className }: DataType) {
  return (
    <div className={clsx('flex min-h-[5.25rem] border-0 border-t last:border-b border-gray-200 border-solid', className)}>
      <div className="w-52 bg-[#EEEEEE] flex items-center px-6 py-4">
        <div className="flex-col">
          <p className="font-bold text-black-lighter-2">
            {title} {required && <span className="text-red-500">*</span>}
          </p>
          {subTitle && <p className="text-[13px]">{subTitle}</p>}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-5 py-4 max-w-[42rem]">
        <div className="break-words whitespace-pre-line">{children}</div>
      </div>
    </div>
  );
}
