export const scrollToElementIdHandler = (elementId: string) : void => {
  const elementById: HTMLElement | null = document.getElementById(elementId);
  if (elementById != undefined) {
    elementById.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
