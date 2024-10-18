import { useNavigate } from "react-router-dom";
import Form from "../ui/Form";

type PersonalInfoProps = {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
};

export const PersonalInfo = ({
  name,
  setName,
  email,
  setEmail,
}: PersonalInfoProps) => {
  const navigate = useNavigate();

  const goToAccountTypePage = () => {
    navigate("/");
  };

  const goToProfileDataPage = () => {
    navigate("/profile-data");
  };

  return (
    <Form
      goTo={goToProfileDataPage}
      goBackTo={goToAccountTypePage}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
    />
  );
};
