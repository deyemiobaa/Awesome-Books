import { DateTime } from './luxon.js';

const Date = () => {
  const dateContainer = document.querySelector('.date');
  const currentTime = DateTime.local();

  dateContainer.textContent = `${currentTime.monthLong} ${currentTime.day} ${currentTime.year}, ${currentTime.hour}:${currentTime.minute}`;
};

export default Date;