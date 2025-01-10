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

function calculateSleepTimes(baseTime, isWakeUp) {
  const sleepCycleMinutes = 90;
  const minimumSleepTime = 3 * 60; // 3 hours in minutes
  const cycles = 4; // Number of sleep cycles to calculate
  const results = [];

  for (let i = 1; i <= cycles; i++) {
    const totalMinutes = i * sleepCycleMinutes + minimumSleepTime + 15; // add 15 minutes to fall asleep
    const time = new Date(baseTime);

    const adjustment = isWakeUp ? totalMinutes : -totalMinutes;
    time.setMinutes(time.getMinutes() + adjustment);

    results.push({
      time: time.getTime(),
      cycles: i,
      duration: totalMinutes,
    });
  }

  return results.reverse();
}

export function calculateOptimalSleepTimes(wakeUpTime) {
  return calculateSleepTimes(wakeUpTime, false);
}

export function calculateWakeUpTimes(sleepTime) {
  return calculateSleepTimes(sleepTime, true);
}

async function fetchSleepMessages() {
  const response = await fetch('data/sleepMessages.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const messages = await response.json();
  return messages;
}

function getRandomMessage(messages) {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export async function getSleepMessage(hours) {
  const messages = await fetchSleepMessages();

  if (hours >= 9) {
    return getRandomMessage(messages.ninePlus);
  } else if (hours >= 7 && hours < 9) {
    return getRandomMessage(messages.sevenToNine);
  } else if (hours >= 5 && hours < 7) {
    return getRandomMessage(messages.fiveToSeven);
  } else if (hours >= 0 && hours < 5) {
    return getRandomMessage(messages.zeroToFive);
  } else {
    return '';
  }
}
