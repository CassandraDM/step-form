import { useLocation } from "react-router-dom";
import ChoseAccountType from "../content/ChoseAccountType";
import FillPersonalInfo from "../content/FillPersonalInfo";
import FillProfileData from "../content/FillProfileData";

type FormProps = {
  goTo: () => void;
  goBackTo?: () => void;
  name?: string;
  setName?: (name: string) => void;
  email?: string;
  setEmail?: (email: string) => void;
};

const Form = ({
  goTo,
  goBackTo,
  name,
  setName,
  email,
  setEmail,
}: FormProps) => {
  const location = useLocation();
  const isAccountTypePath = location.pathname === "/";
  const isPersonalInfoPath = location.pathname === "/personal-info";
  const isProfileDataPath = location.pathname === "/profile-data";

  return (
    <div className="flex justify-center items-center bg-slate-400 h-full">
      <div className="bg-white w-[480px] p-8 justify-center items-center rounded-lg flex flex-col gap-[70px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-10">
            <div className="flex w-[416px] flex-col items-center gap-4">
              <h1 className="text-zinc-800 text-2xl font-semibold">
                Registration Form
              </h1>
              <p className="text-zinc-350 text-center text-sm">
                Please fill out this form with the required information
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-start  gap-8 relative">
                <div className="flex flex-col gap-2 w-24 items-center relative z-10">
                  <div
                    className={`w-8 h-8 flex items-center justify-center border rounded-full ${
                      isAccountTypePath
                        ? "bg-pastel-purple-500 border-pastel-purple-500 "
                        : " bg-white border-zinc-350"
                    }`}
                  >
                    <p
                      className={`${
                        isAccountTypePath ? "text-white" : "text-zinc-350"
                      }`}
                    >
                      1
                    </p>
                  </div>
                  <p className="text-zinc-350 text-center text-sm">
                    Account Type
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-24 items-center relative z-10">
                  <div
                    className={`w-8 h-8 flex items-center justify-center border rounded-full ${
                      isPersonalInfoPath
                        ? "bg-pastel-purple-500 border-pastel-purple-500 "
                        : " bg-white border-zinc-350"
                    }`}
                  >
                    <p
                      className={`${
                        isPersonalInfoPath ? "text-white" : "text-zinc-350"
                      }`}
                    >
                      2
                    </p>
                  </div>
                  <p className="text-zinc-350 text-center text-sm">
                    Personal Information
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-24 items-center relative z-10">
                  <div
                    className={`w-8 h-8 flex items-center justify-center border rounded-full ${
                      isProfileDataPath
                        ? "bg-pastel-purple-500 border-pastel-purple-500 "
                        : " bg-white border-zinc-350"
                    }`}
                  >
                    <p
                      className={`${
                        isProfileDataPath ? "text-white" : "text-zinc-350"
                      }`}
                    >
                      3
                    </p>
                  </div>
                  <p className="text-zinc-350 text-center text-sm">
                    Profile Data
                  </p>
                </div>
                <div className="absolute bg-zinc-350 h-[1px] w-[415.94px] top-[15.5px] left-[-32px] z-0"></div>
              </div>
            </div>
          </div>
          {(isAccountTypePath && <ChoseAccountType goTo={goTo} />) ||
            (isPersonalInfoPath && (
              <FillPersonalInfo
                goBackTo={goBackTo}
                goTo={goTo}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
              />
            )) ||
            (isProfileDataPath && (
              <FillProfileData goBackTo={goBackTo} goTo={goTo} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
