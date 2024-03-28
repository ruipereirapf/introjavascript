const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 2;
    case "wednesday":
      return 5;
    case "thursday":
      return 6;
    case "friday":
      return 8;
    case "saturday":
      return 0;
    case "sunday":
      return 8;
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (idealSleepHours === actualSleepHours) {
    return "Perfect amount of sleep!";
  } else if (actualSleepHours > idealSleepHours) {
    return "Slept more than needed!";
  } else {
    return "Go get some rest!";
  }
};

console.log(calculateSleepDebt());
