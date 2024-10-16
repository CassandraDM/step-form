import { useNavigate } from "react-router-dom";
import Form from "../ui/Form";

export const AccountType = () => {
  const navigate = useNavigate();

  const goToPersonalInfoPage = () => {
    navigate("/personal-info");
  };

  return <Form goTo={goToPersonalInfoPage} />;
};

export default AccountType;
