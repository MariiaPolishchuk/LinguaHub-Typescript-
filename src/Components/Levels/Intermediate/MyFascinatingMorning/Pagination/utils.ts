export const getPageRoute = (page: number) => {
  switch (page) {
    case 1:
      return "test";
    case 2:
      return "drag-drop";
    case 3:
      return "find-synonyms";
    case 4:
      return "voc-practise";
    default:
      return "";
  }
};
