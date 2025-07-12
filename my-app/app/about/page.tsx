const url = "https://jsonplaceholder.typicode.com/todos";
const fetchTodos = async () => {
  await new Promise((resolve) => {
    setInterval(resolve, 1000);
  });

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

type Data = {
  id: string;
  completed: string;
  title: string;
  userId: string;
};

const AboutPage = async () => {
  const data: Data[] = await fetchTodos();
  return (
    <>
      <h1>this Page About</h1>
      <p>this page About Details eiei !!!</p>
      {data.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </>
  );
};

export default AboutPage;
