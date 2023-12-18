import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";


const New = () => {

    const {onCreate} = useContext(DiaryDispatchContext);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const onSubmit = (data) => {
        const {emotionId, content, date} = data;
        onCreate(date, content, emotionId); 
        navigate("/", {replace:true});
    }

    return (
        <div className="New">
            <Header title="Write a new diary" 
                    leftChild={<Button text={"< Back"} onClick={goBack} />}
                    rightChild={""}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    );
    
};

export default New;