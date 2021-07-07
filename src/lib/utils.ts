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

export const partition = (array: any[], isValid): any[][] =>
  array.reduce(([pass, fail], elem) => (isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]), [[], []]);
