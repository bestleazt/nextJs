"use client";

const error = ({ error }: { error: Error }) => {
  console.log("====================================");
  console.log(error);
  console.log("====================================");
  return <div>error</div>;
};
export default error;
