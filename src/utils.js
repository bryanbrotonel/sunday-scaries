export function is12HourFormat() {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric',
    hour12: true,
  });
  const formattedTime = formatter.format(date);
  return formattedTime.includes('AM') || formattedTime.includes('PM');
}