export const focusForm = (inputRef) => {
  if (window.innerWidth > 768) {
    inputRef.current?.focus();
  }
};