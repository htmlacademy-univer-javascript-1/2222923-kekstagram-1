import { getRandomInt, getRandomElementFromArray, identificationGenerator } from './util.js';

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

const commentIdGenerator = identificationGenerator();
const photoIdGenerator = identificationGenerator();
const urlIdGenerator = identificationGenerator();

const commentsArray = () => ({
  id: commentIdGenerator(),
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomElementFromArray(MESSAGES),
  name: getRandomElementFromArray(NAMES)
});

const addPhoto = () => ({
  id: photoIdGenerator(),
  url: `photos/${urlIdGenerator()}.jpg`,
  description: getRandomElementFromArray(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: Array.from({ length: getRandomInt(1, 20)}, commentsArray)
});

const addPhotos = () => Array.from({ length: COUNT_OBJECTS }, addPhoto);

export {addPhotos};
