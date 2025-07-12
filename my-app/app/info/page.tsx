import Counter from "@/component/counter";
import Image from "next/image";
const url =
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";

const infoPage = () => {
  return (
    <div>
      <h2>infoPage</h2>
      <Counter></Counter>
      <hr />
      <Image
        src={url}
        width={400}
        height={400}
        alt="imageTest"
        priority
      ></Image>
    </div>
  );
};
export default infoPage;
