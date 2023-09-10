interface ITruncatedText {
  showText: string;
  toggleButtonText: string | null;
}

export const getTruncatedTextAndToggleButtonText = (
  wasToggled: boolean,
  text: string
): ITruncatedText => {
  const textLength = 130;
  const isFullText: boolean = textLength <= text?.length;
  const truncatedText = `${text?.slice(0, textLength)}...`;

  const showText: string = isFullText && !wasToggled ? truncatedText : text;

  const isToggleButtonText = (): string | null => {
    if (isFullText) {
      return !wasToggled ? "Show More" : "Show Less";
    }
    return null;
  };

  const toggleButtonText: string | null = isToggleButtonText();

  return { showText, toggleButtonText };
};
