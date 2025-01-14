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
    const sleepLength = i * sleepCycleMinutes + minimumSleepTime;
    const totalMinutes = sleepLength + 15; // add 15 minutes to fall asleep
    const time = new Date(baseTime);

    const adjustment = isWakeUp ? totalMinutes : -totalMinutes;
    time.setMinutes(time.getMinutes() + adjustment);

    results.push({
      time: time.getTime(),
      cycles: sleepLength / sleepCycleMinutes,
      duration: sleepLength,
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

const sleepMessages = {
  ninePlus: ['Grandma, is that you? &#x1F475;', 'Wow look at me, so responsible. &#x1F644;', 'Born to sleep, forced to wake up. &#x1F614;'],
  sevenToNine: [
    'You wish you could sleep in more, huh? &#x1F602;	',
    'Almost a full night\'s sleep! &#x1F609;',
    'So awake, yet so tired. &#x1F62B;',
  ],
  fiveToSeven: [
    'Good job, you\'re almost getting enough sleep. &#x1F44F;',
    'Congrats, you\'ve achieved the bare minimum of rest. &#x1F948;',
    'You\'re functioning, but at what cost? &#x1F972;',
  ],
  zeroToFive: [
    'Might as well start getting dressed. &#x1F480;',
    'Do you even need to sleep at this point? &#x1F643;',
    'Sleep is overrated anyway, right? Oh, wait, you wouldn\'t know. &#x1F636;',
  ],
};


function getRandomMessage(messages) {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export function getSleepMessage(hours) {
  if (hours >= 9) {
    return getRandomMessage(sleepMessages.ninePlus);
  } else if (hours >= 7 && hours < 9) {
    return getRandomMessage(sleepMessages.sevenToNine);
  } else if (hours >= 5 && hours < 7) {
    return getRandomMessage(sleepMessages.fiveToSeven);
  } else if (hours >= 0 && hours < 5) {
    return getRandomMessage(sleepMessages.zeroToFive);
  } else {
    return '';
  }
}
