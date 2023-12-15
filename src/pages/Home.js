import Header from "../component/Header";
import Button from "../component/Button";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";

const Home = () => {

    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);

    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`;

    const onIncreateMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    };

    return (
        <Header title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/> }
                rightChild={<Button text={">"} onClick={onIncreateMonth}/> }
        />
    );
};

export default Home;