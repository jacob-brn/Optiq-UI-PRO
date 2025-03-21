import moment from "moment";

export const getCurrentFormattedDate = () => {
  return moment().format("dddd, MMMM DD, YYYY [at] h:mm A");
};

export const formatDate = (date: Date | string | number) => {
  return moment(date).format("dddd, MMMM DD, YYYY [at] h:mm A");
};
