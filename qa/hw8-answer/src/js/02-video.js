
import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onVideoPlayer, 1000));

function onVideoPlayer (event) {
    let dataSrtring = event.seconds;
    localStorage.setItem(STORAGE_KEY, dataSrtring);
}

// if(localStorage.getItem(STORAGE_KEY)){
//     console.log('Set', localStorage.getItem(STORAGE_KEY))
//     player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
// }

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
