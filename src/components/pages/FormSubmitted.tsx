type FormSubmittedProps = {
  name: string;
  email: string;
};

const FormSubmitted = ({ name, email }: FormSubmittedProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-[77px]">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="143"
          height="143"
        >
          <circle cx="50" cy="50" r="50" fill="#00BA00" />
          <path
            d="M25 55 L45 75 L75 35" // Adjusted coordinates to make the path larger
            fill="none"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center text-zinc-800 text-[28px] font-semibold">
        <p>Congrats {name}</p>
        <p>Registration Successful</p>
        <p>Email confirmation sent to {email}</p>
      </div>
    </div>
  );
};

export default FormSubmitted;
