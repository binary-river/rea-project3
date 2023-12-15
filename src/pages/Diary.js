import { useParams } from "react-router-dom";

const Diary = () => {
    const params = useParams();
    console.log(params);
    return <div>Diary page! ID : {params.id} </div>
};

export default Diary;