interface MusicButtonGroupProps {
  onSelect: (selection: string, src: string) => void;
}

export const MusicButtonGroup = ({ onSelect }: MusicButtonGroupProps) => {
  return (
    <>
      <button
        className="p-1 lg:p-5 font-heading border-[#4a2a02] border-8 border-double bg-[#c59fe1]"
        onClick={() => onSelect("Refocus", "/mp3s/ECHO_refocusMusic.mp3")}
      >
        Refocus
      </button>
      <button
        className="p-1 lg:p-5 font-heading border-[#4a2a02] border-8 border-double bg-[#aacce7]"
        onClick={() => onSelect("Create", "/mp3s/ECHO_createMusic.mp3")}
      >
        Create
      </button>
      <button
        className="p-1 lg:p-5 font-heading border-[#4a2a02] border-8 border-double bg-[#f8c89f]"
        onClick={() => onSelect("Move", "/mp3s/ECHO_moveMusic.mp3")}
      >
        Move
      </button>
      <button
        className="p-1 lg:p-5 font-heading border-[#4a2a02] border-8 border-double bg-[#d16666]"
        onClick={() => onSelect("Relax", "/mp3s/ECHO_relaxMusic.mp3")}
      >
        Relax
      </button>
    </>
  );
};
