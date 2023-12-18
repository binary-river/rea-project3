import { useEffect, useState } from "react";
import Button from "./Button";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";


const sortOptionList = [
    { value: "latest", name: "recent"},
    { value: "oldest", name: "old" }, 
]

const DiaryList = ({data}) => {

    const [sortType, setSortType] = useState("latest");
    const [sortedData, setSortedData] = useState([]);

    useEffect(()=>{
        const compare = (a,b) => {
            if( sortType === "latest") {
                return b.date - a.date;
            } else {
                return a.date - b.date;
            }
        };

        const copiedData = JSON.parse(JSON.stringify(data));
        setSortedData( copiedData.sort(compare));

    }, [data, sortType])

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const navigate = useNavigate();

    const onClickNew = () => {
        navigate("/new");
    }

    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <select value={sortType} onChange={onChangeSortType}>
                        {sortOptionList.map((it, idx)=> (
                            <option key={idx} value={it.value}>{it.name}</option>
                        ))}
                    </select>
                </div>
                <div className="right_col">
                    <Button type={"positive"} text="write" onClick={onClickNew}/>
                </div>
            </div>

            <div className="list_wrapper">
                {sortedData.map((it)=> <DiaryItem key={it.id} {...it} /> )}
            </div>
        </div>
        
    )
};

export default DiaryList;