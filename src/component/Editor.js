import { useState, useEffect } from "react";
import "./Editor.css";
import {getFormattedDate, emotionList} from "../util.js";
import Button from "./Button.js";
import {useNavigate} from "react-router-dom";
import EmotionItem from "./EmotionItem";

const Editor = ({initData, onSubmit}) => {

    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });

    useEffect(()=>{
        if(initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            })
        }
    }, [initData]);

    const navigate = useNavigate();


    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };

    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };

    const handleSubmit = () => {
        onSubmit(state);
    };

    const handleGoback = () => {
        navigate(-1);
    }

    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId,
        });
    }
    
    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>Today's date</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                <h4>Today's emotion</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map( (it)=> {
                        return <EmotionItem 
                                key={it.id}
                                {...it}
                                onClick={handleChangeEmotion}
                                isSelected={it.id === state.emotionId} 
                                />
                    })}
                </div>
            </div>
            <div className="editor_section">
                <h4>Today's diary</h4>
                <div className="input_wrapper">
                    <textarea 
                      placeholder= "How was your day today?"
                      value= {state.content}
                      onChange={handleChangeContent} /> 
                </div>
            </div>
            <div className="editor_section bottom_section">
                <Button text={"Cancel"} onClick={handleGoback} />
                <Button text={"Submit"} type={"positive"} onClick={handleSubmit} />
            </div>
        </div>
    );
}

export default Editor;