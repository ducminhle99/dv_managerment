import clsx from 'clsx';

type DataType = {
  title?: string;
  children?: any;
  required?: boolean;
  className?: string;
};

export default function Item({ title, children, required, className }: DataType) {
  return (
    <div className={clsx('flex min-h-[5.25rem]', { className })}>
      <div className="w-52 flex items-center px-6 py-4">
        <p className="font-bold text-black-lighter-2">
          {title} {required && <span className="text-red-500">*</span>}
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center px-5 py-4 ">
        <div className="text-[15px] text-black-lighter-2">{children}</div>
      </div>
    </div>
  );
}
