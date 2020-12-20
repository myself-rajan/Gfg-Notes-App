export const Note = ({ CurrentNote }) => {
  return CurrentNote != null
    ? "You're looking at Note #" + this.state.CurrentNote
    : "Click on a note from left side";
};
