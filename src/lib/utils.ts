export const convertToValidDate = (date: string): string => {
  const months = new Set([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]);
  return date
    .split('@')[0]
    .split(' ')
    .filter(part => months.has(part) || !Number.isNaN(parseInt(part, 10)))
    .join(' ');
};

export const sortByValidDate = (array: any[], asc = true): any[] =>
  array.sort((a, b) => {
    const date1 = new Date(convertToValidDate(a.date));
    const date2 = new Date(convertToValidDate(b.date));

    // if ascending
    if (asc) {
      if (date1 > date2) {
        return 1;
      }
      return -1;
    }

    // if descending
    if (date1 < date2) {
      return -1;
    }
    return 1;
  });

export const partition = (array: any[], isValid): any[][] =>
  array.reduce(([pass, fail], elem) => (isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]), [[], []]);
