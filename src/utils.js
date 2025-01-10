export function is12HourFormat() {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric',
    hour12: true,
  });
  const formattedTime = formatter.format(date);
  return formattedTime.includes('AM') || formattedTime.includes('PM');
}

export const formatTime = (time) =>
  new Date(time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: is12HourFormat(),
  });

export const millisecondsToMinutes = (ms) => Math.floor(ms / 60000);

export function calculateOptimalSleepTimes(wakeUpTime) {
  const sleepCycleMinutes = 90;
  const minimumSleepTime = 3 * 60; // 3 hours in minutes
  const cycles = 4; // Number of sleep cycles to calculate
  const results = [];

  for (let i = 1; i <= cycles; i++) {
    const totalMinutes = i * sleepCycleMinutes + minimumSleepTime;
    const sleepTime = new Date(wakeUpTime);

    sleepTime.setMinutes(sleepTime.getMinutes() - totalMinutes);
    results.push({
      time: sleepTime.getTime(),
      cycles: totalMinutes / sleepCycleMinutes,
      duration: totalMinutes,
    });
  }

  return results.reverse();
}
