import moment from 'moment';
import momentTZ from 'moment-timezone';

export const getAge = (timeString: string): number => {
  const age = moment().diff(moment(timeString, 'YYYY-MM-DD'), 'years');
  return age;
};

export const convertToJPDateTime = (timeString: string, format?: string, hasTime = false, onlyHour = false) => {
  if (!timeString) {
    return '';
  }

  const date = new Date(timeString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthStr = ('0' + month).slice(-2);
  const dayStr = ('0' + day).slice(-2);

  if (!hasTime) {
    return format ? year + format + monthStr + format + dayStr : `${year}年${monthStr}月${dayStr}日`;
  }

  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  if (onlyHour) {
    return format ? year + format + monthStr + format + dayStr + ` ${hours}時` : `${year}年${month}月${day}日 ${hours}時`;
  }

  return format ? year + format + monthStr + format + dayStr + ` ${hours}: ${minutes}` : `${year}年${month}月${day}日 ${hours}:${minutes}`;
};

export const convertToDateTime = (timeString: string, hasTime = false) => {
  try {
    if (!timeString) {
      return '';
    }

    const date = convertStr2Date(timeString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    if (!hasTime) {
      return `${year}-${month}-${day}`;
    }

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  } catch (error) {
    return '';
  }
};

export const convertStr2Date = (str: string, format?: string): Date => {
  if (!format) {
    format = 'YYYY-MM-DD HH:mm:ss.SSS';
  }
  const date: Date = moment(str, format).toDate();

  return date;
};

export const convertToTime = (timeString: string) => {
  try {
    if (!timeString) {
      return '';
    }

    const date = convertStr2Date(timeString);

    if (!isValidDate(date)) {
      return '';
    }

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${hours}:${minutes}`;
  } catch (error) {
    return '';
  }
};

export const convertTimeStringJPToDate = (jpStringTime: string, format?: string) => {
  if (!jpStringTime) {
    return null;
  }

  if (!format) {
    format = 'YYYY-MM-DD HH:mm:ss.SSS';
  }
  const date: Date = momentTZ.tz(jpStringTime, format, 'Japan').toDate();

  if (!isValidDate(date)) {
    return null;
  }

  return date;
};

function isValidDate(d: Date) {
  return d instanceof Date && !isNaN(d.getTime());
}

export const convertTimeStrToObjTime = (
  timeString: string
): {
  year?: string;
  month?: string;
  day?: string;
} => {
  const dataReturn = { year: undefined, month: undefined, day: undefined };
  if (!timeString) {
    return dataReturn;
  }

  const date = new Date(timeString);

  if (!isValidDate(date)) {
    return dataReturn;
  }

  const year = date.getFullYear().toString();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthStr = ('0' + month).slice(-2);
  const dayStr = ('0' + day).slice(-2);

  return {
    year,
    month: monthStr,
    day: dayStr,
  };
};

export const convertDateTimeToJP = (timeString: string) => {
  const date = new Date(timeString);
  if (!isValidDate(date)) {
    return timeString;
  }

  const year = date.getFullYear().toString();
  const month = date.getMonth() + 1;

  return `${year}年${month}月分`;
};
