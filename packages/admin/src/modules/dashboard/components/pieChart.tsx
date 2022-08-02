import React from 'react';
import { Pie } from '@ant-design/plots';
import clsx from 'clsx';

const data = [
  {
    type: 'in use',
    value: 64,
  },
  {
    type: 'available',
    value: 25,
  },
];
const config = {
  appendPadding: 10,
  data,
  angleField: 'value',
  colorField: 'type',
  radius: 1,
  innerRadius: 0.6,
  label: {
    type: 'inner',
    offset: '-50%',
    content: '{value}',
    style: {
      textAlign: 'center',
      fontSize: 14,
    },
  },
  interactions: [
    {
      type: 'element-selected',
    },
    {
      type: 'element-active',
    },
  ],
  statistic: {
    content: {
      style: {
        whiteSpace: 'pre-wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      content: 'devices',
    },
  },
};

type StyleType = {
  className: string;
};
const PieChart = ({ className }: StyleType) => {
  return <Pie {...config} className={clsx('w-full', className)} />;
};

export default PieChart;
