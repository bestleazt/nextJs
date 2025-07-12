import { fetchCamp } from "@/utils/actions";

const camplist = async () => {
  const camps = await fetchCamp();
  console.log("====================================");
  console.log(camps);
  console.log("====================================");
  return (
    <div>
      {camps.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
};
export default camplist;
