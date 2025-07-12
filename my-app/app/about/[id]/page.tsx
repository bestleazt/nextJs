const aboutDetailPage = async ({ params }) => {
  const { id } = await params;
  console.log("====================================");
  console.log(id);
  console.log("====================================");
  return <div>aboutDetailPage / {id}</div>;
};
export default aboutDetailPage;
