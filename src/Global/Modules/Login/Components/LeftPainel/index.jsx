import LoginImage from '../../../../../Assets/Login/background.jpg';
import { PainelContainer } from './LeftPainel_style';   

const LeftPainel = () => (
  <PainelContainer>
    <img src={LoginImage} alt="Login" />
  </PainelContainer>
);

export default LeftPainel;
