import Link from 'next/link';

export interface CardProps {
  title: string;
  icon: any;
  total: number;
  path: string;
}

export default function Card({ title, icon, path, total }: CardProps) {
  return (
    <div className="min-w-[366px] h-[200px] bg-white shadow-2xl mx-[45px] mb-[100px] rounded-md p-[20px]">
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-bold uppercase">{title}</p>
        {icon}
      </div>

      <Link href={path}>
        <a>view more</a>
      </Link>
      <h1>{total}</h1>
    </div>
  );
}
