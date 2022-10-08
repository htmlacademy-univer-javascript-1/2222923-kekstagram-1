const COUNT_OBJECTS = 25;

const NAMES = [
  'Ванесса Хаг',
  'Новак Джокович',
  'Стив Джобс',
  'Вальтер Скотт'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Описание потом придумаю',
  'Фото сделал - описание не сделал',
  'Как придумать описание к фото, если нет фантазии? :/',
  'Очередная ванильная фразочка из интернета'
];

const arrayObjects = [];

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const commentsArray = (count) => {
  const array = [];
  for (let i = 0; i < count; i++){
    array.push({
      id: i,
      avatar: `img/avatar-${getRandomInt(1,6)}.svg`,
      message: MESSAGES[getRandomInt(0, MESSAGES.length - 1)],
      name: NAMES[getRandomInt(0, NAMES.length - 1)]
    });
  }
  return array;
};

const addPhotos = () => {
  for (let i = 0; i < COUNT_OBJECTS; i++){
    arrayObjects.push({
      id: i,
      url: `photos/${i+1}.jpg`,
      description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.lenght - 1)],
      likes: getRandomInt(15, 200),
      comments: commentsArray(getRandomInt(0, 2))
    });
  }
};

addPhotos();

export {arrayObjects};
