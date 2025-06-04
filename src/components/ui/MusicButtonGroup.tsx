"use client";
import { useRef } from "react";

export const MusicButtonGroup = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = (src: string) => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.play();
    }
  };

  return (
    <>
      <button
        className="p-5 border-[#301b00] border-4 border-double bg-[#c59fe1]"
        onClick={() => playAudio("/mp3s/ECHO_refocusMusic.mp3")}
      >
        Refocus
      </button>
      <button
        className="p-5 border-[#301b00] border-4 border-double bg-[#aacce7]"
        onClick={() => playAudio("/mp3s/ECHO_createMusic.mp3")}
      >
        Create
      </button>
      <button
        className="p-5 border-[#301b00] border-4 border-double bg-[#f8c89f]"
        onClick={() => playAudio("/mp3s/ECHO_moveMusic.mp3")}
      >
        Move
      </button>
      <button
        className="p-5 border-[#301b00] border-4 border-double bg-[#d16666]"
        onClick={() => playAudio("/mp3s/ECHO_relaxMusic.mp3")}
      >
        Relax
      </button>
      <audio ref={audioRef} className="hidden" />
    </>
  );
};
