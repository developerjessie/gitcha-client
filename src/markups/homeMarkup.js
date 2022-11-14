import homeStyles from "../css/home.css";
import { HOME_IMAGE_PATH } from "../constants/imagePath";
import resizeImage from "../util/resizeImage";

export const homeMarkup = `
  <img src="${HOME_IMAGE_PATH}" alt="home-background" class="${
  homeStyles.background
}" onload="${resizeImage(
  // eslint-disable-next-line no-invalid-this
  this,
)}" />
  <div>
    <h1>GitCha!</h1>
    <p>Legendary Time Magic</p>
    <button class="${homeStyles["start-btn"]}">Start</button>
  </div>
`;
