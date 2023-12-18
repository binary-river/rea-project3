import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../util";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";

const Diary = () => {
    const {id} = useParams();
    const data = useDiary(id);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    if(!data) { 
        return (
            <div>Diary now loading..</div>
        );
    } else {
        const {date, emotionId, content} = data;
        const title = `${getFormattedDate(new Date(Number(date)))} diary`;

        return (
            <div>
                <Header title={title}
                        leftChild={<Button text={"< Back"} onClick={goBack} />}
                        rightChild= {<Button text={"Edit"} onClick={goEdit} />}
                />
                <Viewer emotionId={emotionId} content={content} />
            </div>
        )
    }
};

export default Diary;