import { useNavigate } from "react-router-dom";
import Form from "../ui/Form";

export const PersonalInfo = () => {
  const navigate = useNavigate();

  const goToAccountTypePage = () => {
    navigate("/");
  };

  const goToProfileDataPage = () => {
    navigate("/profile-data");
  };

  return <Form goTo={goToProfileDataPage} goBackTo={goToAccountTypePage} />;
};
