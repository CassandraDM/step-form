type ButtonProps = {
  goTo?: () => void;
  goBackTo?: () => void;
  type: "next" | "previous";
  onClick?: (e: React.FormEvent) => void;
};

const Button = ({ goTo, goBackTo, type, onClick }: ButtonProps) => {
  if (type === "next") {
    if (!goTo) {
      throw new Error(
        "The 'goTo' prop is required for the 'next' button type."
      );
    }
    return (
      <button
        onClick={(e) => {
          if (onClick) onClick(e);
          goTo();
        }}
        className="flex h-10 px-4 justify-center items-center rounded bg-pastel-purple-500 text-white"
      >
        Next
      </button>
    );
  }
  if (type === "previous") {
    return (
      <button
        onClick={goBackTo}
        className="flex h-10 px-4 justify-center items-center text-zinc-350"
      >
        Previous
      </button>
    );
  }
};

export default Button;
