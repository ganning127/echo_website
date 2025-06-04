// musicbuttongroup.tsx
"use client";
import { useRef } from "react";

interface MusicButtonGroupProps {
  onSelect: (selection: string) => void;
}

export const MusicButtonGroup = ({ onSelect }: MusicButtonGroupProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = (src: string, selection: string) => {
    onSelect(selection);
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.play();
    }
  };

  return (
    <>
      <button
        className="p-5 border-[#301b00] border-4 border-double bg-[#c59fe1]"
        onClick={() => handleClick("/mp3s/ECHO_refocusMusic.mp3", "Refocus")}
      >
        Refocus
      </button>
      <button
        className="p-5 border-[#301b00] border-4 border-double bg-[#aacce7]"
        onClick={() => handleClick("/mp3s/ECHO_createMusic.mp3", "Create")}
      >
        Create
      </button>
      <button
        className="p-5 border-[#301b00] border-4 border-double bg-[#f8c89f]"
        onClick={() => handleClick("/mp3s/ECHO_moveMusic.mp3", "Move")}
      >
        Move
      </button>
      <button
        className="p-5 border-[#301b00] border-4 border-double bg-[#d16666]"
        onClick={() => handleClick("/mp3s/ECHO_relaxMusic.mp3", "Relax")}
      >
        Relax
      </button>
      <audio ref={audioRef} className="hidden" />
    </>
  );
};
