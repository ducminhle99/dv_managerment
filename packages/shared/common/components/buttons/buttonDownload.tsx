import { Button } from 'antd';
import { useState } from 'react';
import { DownloadIcon } from '../icons';

interface IProps {
  isDisabled: boolean;
  handleClick: any;
  btnText: string;
}

export const ButtonDownload = ({ isDisabled, handleClick, btnText }: IProps) => {
  const [isDownLoadHover, setIsDownloadHover] = useState(false);

  return (
    <Button
      disabled={isDisabled}
      onMouseEnter={() => setIsDownloadHover(true)}
      onMouseLeave={() => setIsDownloadHover(false)}
      onClick={() => handleClick()}
      className="h-9 px-5 flex items-center btn-secondary"
      icon={<DownloadIcon color={isDownLoadHover ? '#FC7679' : isDisabled ? '#bbbbbb' : '#555'} />}
    >
      <span className={`text-sm font-bold ml-3 leading-none`}>{btnText}</span>
    </Button>
  );
};
