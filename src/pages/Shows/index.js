import { Link } from "react-router-dom";
import shows from "../../services/mock/data";
import List from "../../components/List";

const Shows = () => {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
    >
      <div style={{ width: "80vw" }}>
        <List data={shows} />
      </div>
    </section>
  );
};

export default Shows;
