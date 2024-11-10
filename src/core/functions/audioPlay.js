import win from '../Audio/win.wav';
import fail from '../Audio/fail.wav';
import milion from '../Audio/milion.wav';
import notmilion from '../Audio/notmilion.wav';

export const playAudio = (audioSrc) => {
    let audio;
    
    switch (audioSrc) {
        case 'win':
            audio = new Audio(win); 
            break;
        case 'fail':
            audio = new Audio(fail);
            break;
        case 'milion':
            audio = new Audio(milion); 
            break;
        case 'notmilion':
            audio = new Audio(notmilion); 
            break;
        default:
            console.log('Unknown audio source');
            return;
    }

    audio.play();
};
