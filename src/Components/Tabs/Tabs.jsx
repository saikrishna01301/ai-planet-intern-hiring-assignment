import "./Tabs.css";
import { useContext } from "react";
import { TabContext } from "../../Contexts/tabContext";

const Tabs = () => {
  // const [active, setActive] = useState(1);
  const { active, setActive } = useContext(TabContext);

  const handleActiveTab = (activeNumber) => {
    setActive(activeNumber);
  };

  return (
    <>
      <div className="tabs">
        <h6
          className={active === 1 ? "tab active" : "tab"}
          onClick={() => {
            handleActiveTab(1);
          }}
        >
          All Submissions
        </h6>
        <h6
          className={active === 2 ? "tab active" : "tab"}
          onClick={() => {
            handleActiveTab(2);
          }}
        >
          Favorite Submissions
        </h6>
      </div>
    </>
  );
};

export default Tabs;
