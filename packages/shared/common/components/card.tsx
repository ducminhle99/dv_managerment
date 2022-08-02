import Link from 'next/link';

export interface CardProps {
  title: string;
  icon: any;
  total: number;
  path: string;
}

export default function Card({ title, icon, path, total }: CardProps) {
  return (
    <div className="hover:scale-105 transition-[0.2] tr min-w-[366px] cursor-pointer h-[200px] bg-white shadow-2xl mx-[45px] mb-[100px] rounded-md p-[20px] flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-bold uppercase">{title}</p>
        {icon}
      </div>
      <span className="text-[30px] font-normal ">{total}</span>
      <div className="w-full h-[1px] bg-black-lighter-4" />
      <div className="ml-auto">
        <Link href={path}>
          <a>view more</a>
        </Link>
      </div>
    </div>
  );
}
