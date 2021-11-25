import styles from "../../styles/Test.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log("func")


  return {
    props: { ninjas: data },
  };
};


    console.log("out")

const Ninjas = ({ ninjas }) => {
  
    console.log("in")
  
    return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
