import clsx from 'clsx';
import React from 'react';

function MessageErrors({ message, className }: { message?: string; className?: string }) {
  if (!message) {
    return null;
  }
  return (
    <div id="alert-additional-content-2" className={clsx('p-4 mt-1 bg-red-100 rounded-md dark:bg-red-200', className)} role="alert">
      <div className="text-sm text-red-700 dark:text-red-800">{message}</div>
    </div>
  );
}

export default MessageErrors;
