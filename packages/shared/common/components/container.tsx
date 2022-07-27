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
    <div className={clsx('w-full min-h-full', rootClassName)}>
      <div className={clsx('mx-24 mb-20  xl:mx-16 sm:mx-0 sm:mb-0', className)}>
        {title && <p className={clsx('text-2xl font-bold', titleClassName)}>{title}</p>}
        {children}
      </div>
    </div>
  );
}
