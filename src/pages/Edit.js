import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import useDiary from "../hooks/useDiary";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";

const Edit = () => {

    useEffect(()=>{
        setPageTitle("Diary Edit");
    },[])

    const {id} = useParams();
    const {onUpdate, onDelete} = useContext(DiaryDispatchContext);

    const data = useDiary(id);

    const navigator = useNavigate();

    const goBack = () => {
        navigator(-1);
    };

    const deleteDiary = () => {
        if( window.confirm("Are you sure to delete this article?") )
        {
            onDelete(id);
            navigator("/", {replace:true});
        }
    };


    const onSubmit = (data) => {
        const {id, date, content, emotionId} = data;
        onUpdate(id, date, content, emotionId);
        navigator("/", {replace:true});
    };

    if( !data ) {
        return( <div>now loading...</div>);
    } else {
        return (
            <div className="Edit">
                <Header title={"Edit diary"} 
                        leftChild={<Button text={"< Back"} onClick={goBack} />}
                        rightChild={<Button type={"negative"} text={"Delete"} onClick={deleteDiary} />}
                />
                <Editor initData={data} onSubmit={onSubmit} />
            </div>
        );
    }
};

export default Edit;