import { Typography } from 'antd';
import Link from 'next/link';
import { useSelector } from '../../../hooks';

export default function Footer() {
  const { footerVisibility } = useSelector((state) => state.app);

  if (!footerVisibility) {
    return null;
  }

  return <div />;
}
