import clsx from 'clsx';

interface CardProps {
  title?: string;
  children?: any;
  maxWidth?: number;
  className?: string;
  rootClassName?: string;
  titleClassName?: string;
}

export default function Container({ title, children, className, rootClassName, titleClassName }: CardProps) {
  return (
    <div className={clsx('max-w-7xl min-h-full mx-auto', rootClassName)}>
      <div className={clsx('mx-24 mb-20  xl:mx-16 sm:mx-0 sm:mb-0', className)}>
        {title && <p className={clsx('text-[32px] font-sans font-medium', titleClassName)}>{title}</p>}
        {children}
      </div>
    </div>
  );
}
