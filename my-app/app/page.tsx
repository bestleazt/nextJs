// rafce ---- > auto code function
const page = async () => {
  // Javascript
  await new Promise((resolve) => {
    setInterval(resolve, 1000);
  });
  return (
    <>
      <br></br>
      <h1>This HomePage </h1>
      <div>page</div>
    </>
  );
};

export default page;
