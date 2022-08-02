import { Column } from '@ant-design/plots';
import clsx from 'clsx';

const StackedChart = ({ className }: { className?: string }) => {
  const data = [
    {
      month: 'January',
      value: 3,
      type: 'Accept',
    },
    {
      month: 'February',
      value: 4,
      type: 'Accept',
    },
    {
      month: 'March',
      value: 5,
      type: 'Accept',
    },
    {
      month: 'April',
      value: 4,
      type: 'Accept',
    },
    {
      month: 'May',
      value: 3,
      type: 'Accept',
    },
    {
      month: 'June',
      value: 1,
      type: 'Accept',
    },
    {
      month: 'July',
      value: 3,
      type: 'Accept',
    },
    {
      month: 'August',
      value: 8,
      type: 'Accept',
    },
    {
      month: 'September',
      value: 3,
      type: 'Accept',
    },
    {
      month: 'October',
      value: 10,
      type: 'Accept',
    },
    {
      month: 'November ',
      value: 3,
      type: 'Accept',
    },
    {
      month: 'December',
      value: 1,
      type: 'Accept',
    },

    {
      month: 'January',
      value: 3,
      type: 'Waiting',
    },
    {
      month: 'February',
      value: 4,
      type: 'Waiting',
    },
    {
      month: 'March',
      value: 3,
      type: 'Waiting',
    },
    {
      month: 'April',
      value: 4,
      type: 'Waiting',
    },
    {
      month: 'May',
      value: 3,
      type: 'Waiting',
    },
    {
      month: 'June',
      value: 4,
      type: 'Waiting',
    },
    {
      month: 'July',
      value: 3,
      type: 'Waiting',
    },
    {
      month: 'August',
      value: 4,
      type: 'Waiting',
    },
    {
      month: 'September',
      value: 3,
      type: 'Accept',
    },
    {
      month: 'October',
      value: 4,
      type: 'Waiting',
    },
    {
      month: 'November ',
      value: 3,
      type: 'Waiting',
    },
    {
      month: 'December',
      value: 4,
      type: 'Waiting',
    },
  ];

  const config = {
    data,
    isStack: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    Label: {
      position: 'top',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return <Column {...config} className={clsx('w-full', className)} />;
};

export default StackedChart;
