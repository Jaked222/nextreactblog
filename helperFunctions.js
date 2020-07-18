import { colors } from "./site-config";

export const setSiteColors = (isDarkModeTemp) => {
  if (!isDarkModeTemp) {
    document.documentElement.style.setProperty(
      colors.darkMode.primaryText.varName,
      colors.darkMode.primaryText.color
    );

    document.documentElement.style.setProperty(
      colors.darkMode.secondaryText.varName,
      colors.darkMode.secondaryText.color
    );

    document.documentElement.style.setProperty(
      colors.darkMode.callToAction.varName,
      colors.darkMode.callToAction.color
    );

    document.documentElement.style.setProperty(
      colors.darkMode.containerBackground.varName,
      colors.darkMode.containerBackground.color
    );

    document.documentElement.style.setProperty(
      colors.darkMode.postBackground.varName,
      colors.darkMode.postBackground.color
    );
  } else {
    document.documentElement.style.setProperty(
      colors.lightMode.primaryText.varName,
      colors.lightMode.primaryText.color
    );

    document.documentElement.style.setProperty(
      colors.lightMode.secondaryText.varName,
      colors.lightMode.secondaryText.color
    );

    document.documentElement.style.setProperty(
      colors.lightMode.callToAction.varName,
      colors.lightMode.callToAction.color
    );

    document.documentElement.style.setProperty(
      colors.lightMode.containerBackground.varName,
      colors.lightMode.containerBackground.color
    );

    document.documentElement.style.setProperty(
      colors.lightMode.postBackground.varName,
      colors.lightMode.postBackground.color
    );
  }
};
