import {useEffect} from 'react'
import {Howl} from 'howler';
import sea from './assets/sea.mp3'
const useMusic = () =>{

   const soundPlay = () =>{
        var sound = new Howl({
            src: sea
          });
          
          sound.play();
    }

    useEffect(() =>{soundPlay()},[])

}


export default useMusic