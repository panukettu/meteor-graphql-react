import {
  cyan700, cyan800,
  pinkA200,
  grey100, grey200, grey300, grey400, grey500, grey900, grey800,
  white, darkBlack, fullBlack, DeepOrange800,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan800,
    primary3Color: grey400,
    accent1Color: DeepOrange800,
    accent2Color: grey100,
    accent3Color: white,
    textColor: white,
    alternateTextColor: white,
    canvasColor: grey800,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan700,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};