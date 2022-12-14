const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomElementFromArray = (array) => array[getRandomInt(0, array.length - 1)];

const checkStringLength = (str, max) => str.length <= max;

const isEscapeKey = (event) => event.key === 'Escape';

const identificationGenerator = () => {
  let identification = 0;

  return () => ++identification;
};

export {
  getRandomInt,
  checkStringLength,
  getRandomElementFromArray,
  identificationGenerator,
  isEscapeKey
};
