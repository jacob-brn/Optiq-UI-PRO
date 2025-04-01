const checkIsProd = () => {
  return process.env.NEXT_PUBLIC_IS_PROD?.toLowerCase() === "true";
};

export default checkIsProd;
