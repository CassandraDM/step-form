import { useState } from "react";
import Button from "../ui/Button";

type ChoseAccountTypeProps = {
  goTo?: () => void;
};

const ChoseAccountType = ({ goTo }: ChoseAccountTypeProps) => {
  const [personalAccountChoosed, setPersonalAccountChoosed] = useState(false);
  const [businessAccountChoosed, setBusinessAccountChoosed] = useState(false);

  const handlePersonalAccountClick = () => {
    setPersonalAccountChoosed(true);
    setBusinessAccountChoosed(false);
  };

  const handleBusinessAccountClick = () => {
    setPersonalAccountChoosed(false);
    setBusinessAccountChoosed(true);
  };
  return (
    <div className="flex flex-col gap-[70px]">
      <div className="flex flex-col gap-2.5">
        <p className="text-zinc-350 text-sm">Chose your account type</p>
        <div className="flex flex-col gap-12">
          <div className="flex gap-2.5">
            <button
              onClick={handlePersonalAccountClick}
              className={`w-16 h-16 rounded border border-pastel-purple-500 flex justify-center items-center ${
                personalAccountChoosed ? "bg-pastel-purple-500" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M39.2032 8.30914H0.796797C0.356797 8.30914 0 8.66586 0 9.10594V30.8941C0 31.3341 0.356797 31.6909 0.796797 31.6909H39.2032C39.6432 31.6909 40 31.3341 40 30.8941V9.10594C40 8.66586 39.6432 8.30914 39.2032 8.30914ZM38.4064 30.0973H1.59359V9.90274H38.4063L38.4064 30.0973Z"
                  fill={`${personalAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M34.7677 24.4845H24.2972C23.8572 24.4845 23.5004 24.8412 23.5004 25.2812C23.5004 25.7213 23.8571 26.078 24.2972 26.078H34.7677C35.2077 26.078 35.5645 25.7213 35.5645 25.2812C35.5645 24.8412 35.2077 24.4845 34.7677 24.4845Z"
                  fill={`${personalAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M34.7677 19.3682H24.2972C23.8572 19.3682 23.5004 19.7249 23.5004 20.165C23.5004 20.6051 23.8571 20.9618 24.2972 20.9618H34.7677C35.2077 20.9618 35.5645 20.6051 35.5645 20.165C35.5645 19.7249 35.2077 19.3682 34.7677 19.3682Z"
                  fill={`${personalAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M34.8108 14.2518H34.1833C33.7433 14.2518 33.3865 14.6085 33.3865 15.0486C33.3865 15.4887 33.7433 15.8454 34.1833 15.8454H34.8108C35.2508 15.8454 35.6076 15.4887 35.6076 15.0486C35.6076 14.6086 35.2508 14.2518 34.8108 14.2518Z"
                  fill={`${personalAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M31.1554 14.2518H24.2972C23.8572 14.2518 23.5004 14.6085 23.5004 15.0486C23.5004 15.4887 23.8571 15.8454 24.2972 15.8454H31.1554C31.5954 15.8454 31.9522 15.4887 31.9522 15.0486C31.9522 14.6086 31.5954 14.2518 31.1554 14.2518Z"
                  fill={`${personalAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M12.5773 20.7855C8.16867 20.7855 4.58195 23.7317 4.58195 27.353C4.58195 27.793 4.93867 28.1498 5.37875 28.1498H19.7758C20.2158 28.1498 20.5726 27.793 20.5726 27.353C20.5727 23.7316 16.986 20.7855 12.5773 20.7855ZM6.25766 26.5563C6.705 24.407 8.93133 22.7148 11.721 22.4238V24.2C11.721 24.6401 12.0778 24.9968 12.5178 24.9968C12.9578 24.9968 13.3146 24.6401 13.3146 24.2V22.4132C16.1595 22.668 18.4433 24.3766 18.897 26.5563H6.25766Z"
                  fill={`${personalAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M12.51 11.7244C10.2253 11.7244 8.36656 13.5831 8.36656 15.8678C8.36656 18.1525 10.2253 20.0112 12.51 20.0112C14.7947 20.0112 16.6534 18.1525 16.6534 15.8678C16.6534 13.5831 14.7947 11.7244 12.51 11.7244ZM12.51 18.4176C11.104 18.4176 9.96023 17.2737 9.96023 15.8678C9.96023 14.4619 11.1041 13.318 12.51 13.318C13.9159 13.318 15.0598 14.4619 15.0598 15.8678C15.0598 17.2737 13.9159 18.4176 12.51 18.4176Z"
                  fill={`${personalAccountChoosed ? "white" : "#B991FF"}`}
                />
              </svg>
            </button>
            <div>
              <p className="text-zinc-800 text-sm font-semibold">
                Personnal Account
              </p>
              <p className="text-zinc-350 text-sm w-[308px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={handleBusinessAccountClick}
              className={`w-16 h-16 rounded border border-pastel-purple-500 flex justify-center items-center ${
                businessAccountChoosed ? "bg-pastel-purple-500" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M39.2032 8.30914H0.796797C0.356797 8.30914 0 8.66586 0 9.10594V30.8941C0 31.3341 0.356797 31.6909 0.796797 31.6909H39.2032C39.6432 31.6909 40 31.3341 40 30.8941V9.10594C40 8.66586 39.6432 8.30914 39.2032 8.30914ZM38.4064 30.0973H1.59359V9.90274H38.4063L38.4064 30.0973Z"
                  fill={`${businessAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M34.7677 24.4845H24.2972C23.8572 24.4845 23.5004 24.8412 23.5004 25.2812C23.5004 25.7213 23.8571 26.078 24.2972 26.078H34.7677C35.2077 26.078 35.5645 25.7213 35.5645 25.2812C35.5645 24.8412 35.2077 24.4845 34.7677 24.4845Z"
                  fill={`${businessAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M34.7677 19.3682H24.2972C23.8572 19.3682 23.5004 19.7249 23.5004 20.165C23.5004 20.6051 23.8571 20.9618 24.2972 20.9618H34.7677C35.2077 20.9618 35.5645 20.6051 35.5645 20.165C35.5645 19.7249 35.2077 19.3682 34.7677 19.3682Z"
                  fill={`${businessAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M34.8108 14.2518H34.1833C33.7433 14.2518 33.3865 14.6085 33.3865 15.0486C33.3865 15.4887 33.7433 15.8454 34.1833 15.8454H34.8108C35.2508 15.8454 35.6076 15.4887 35.6076 15.0486C35.6076 14.6086 35.2508 14.2518 34.8108 14.2518Z"
                  fill={`${businessAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M31.1554 14.2518H24.2972C23.8572 14.2518 23.5004 14.6085 23.5004 15.0486C23.5004 15.4887 23.8571 15.8454 24.2972 15.8454H31.1554C31.5954 15.8454 31.9522 15.4887 31.9522 15.0486C31.9522 14.6086 31.5954 14.2518 31.1554 14.2518Z"
                  fill={`${businessAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M12.5773 20.7855C8.16867 20.7855 4.58195 23.7317 4.58195 27.353C4.58195 27.793 4.93867 28.1498 5.37875 28.1498H19.7758C20.2158 28.1498 20.5726 27.793 20.5726 27.353C20.5727 23.7316 16.986 20.7855 12.5773 20.7855ZM6.25766 26.5563C6.705 24.407 8.93133 22.7148 11.721 22.4238V24.2C11.721 24.6401 12.0778 24.9968 12.5178 24.9968C12.9578 24.9968 13.3146 24.6401 13.3146 24.2V22.4132C16.1595 22.668 18.4433 24.3766 18.897 26.5563H6.25766Z"
                  fill={`${businessAccountChoosed ? "white" : "#B991FF"}`}
                />
                <path
                  d="M12.51 11.7244C10.2253 11.7244 8.36656 13.5831 8.36656 15.8678C8.36656 18.1525 10.2253 20.0112 12.51 20.0112C14.7947 20.0112 16.6534 18.1525 16.6534 15.8678C16.6534 13.5831 14.7947 11.7244 12.51 11.7244ZM12.51 18.4176C11.104 18.4176 9.96023 17.2737 9.96023 15.8678C9.96023 14.4619 11.1041 13.318 12.51 13.318C13.9159 13.318 15.0598 14.4619 15.0598 15.8678C15.0598 17.2737 13.9159 18.4176 12.51 18.4176Z"
                  fill={`${businessAccountChoosed ? "white" : "#B991FF"}`}
                />
              </svg>
            </button>
            <div>
              <p className="text-zinc-800 text-sm font-semibold">
                Business Account
              </p>
              <p className="text-zinc-350 text-sm w-[308px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button goTo={goTo} type="next" />
      </div>
    </div>
  );
};

export default ChoseAccountType;
