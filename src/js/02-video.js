import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = "videoplayer-current-time";

const storedTime = localStorage.getItem(STORAGE_TIME_KEY) || 0;


player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(storedTime);


function getCurrentTime(event) {
  const currentTime = event.seconds;
  const storedTime = localStorage.getItem(STORAGE_TIME_KEY);

  if (storedTime !== currentTime) {
    localStorage.setItem(STORAGE_TIME_KEY, currentTime);
  }
}


