export default function InforItem({ title, children }: { title: string; children?: any }) {
  return (
    <div className="flex items-center mb-3">
      <p className="h-7 min-w-[8.5rem] w-[8.5rem] border-[1px] flex items-center justify-center font-bold text-sm bg-[#F1F1F1] border-solid border-[#d3d3d3] rounded leading-none">
        {title}
      </p>
      <div className="ml-5 text-[15px] text-black-lighter-2 leading-5 line-clamp-2 whitespace-pre-line break-all text-ellipsis overflow-hidden ">
        {children}
      </div>
    </div>
  );
}
