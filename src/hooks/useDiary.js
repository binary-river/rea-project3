import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        const matchedDiary = data.find((it)=> String(it.id) === String(id));
        if (matchedDiary) {
            setDiary(matchedDiary);
        } else {
            alert("Diary not found")
            navigate("/", {replace:true});
        }
    },[id,data]);

    return diary;
}

export default useDiary;