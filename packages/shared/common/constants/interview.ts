import moment from 'moment';

export const interviewPurpose: { [key: number]: string } = {
  99: 'その他',
  1: '選考前面談',
  2: '選考中フォロー',
  3: '内定後フォロー',
  4: '定期面談',
};

export const interviewRangeTime = (type?: string): any[] => {
  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const minutes = [0, 15, 30, 45];

  const result = [] as any;

  hours.forEach((hour) => {
    minutes.forEach((minute) => {
      const value = moment().set({ hour, minute, second: 0 }).format('YYYY-MM-DD HH:mm:ss');
      result.push({
        value: value,
        label: `${String(hour).padStart(2, '0')}時${String(minute).padStart(2, '0')}分`,
      });
    });
  });

  // start: 00:00 -> 23:45 ; end 00:15 -> 23:59
  if (type === 'end') {
    result.shift();
    result.push({
      value: moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'),
      label: '24時00分',
    });
  }

  return result;
};

export const enum callStatus {
  DID_NOT_START = 0,
  INCALLING = 1,
  ENDED = 2,
  ERROR = 999,
}

export const enum CompositeStatus {
  DID_NOT_REQUEST = 0,
  REQUESTED = 1,
  FINISHED = 2,
  ERROR = 999,
}
