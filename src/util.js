import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

function getEmotionImgById(emotionId) {
    const emotionIdStr = String(emotionId);
    switch (emotionIdStr) {
        case "1" : return emotion1;
        case "2" : return emotion2;
        case "3" : return emotion3;
        case "4" : return emotion4;
        case "5" : return emotion5;
        default : return null;
    }
};

export const getFormattedDate = (targetDate) => {

    let y = targetDate.getFullYear();
    let m = targetDate.getMonth() + 1;
    let d = targetDate.getDate();

    if ( m < 10 ) m = "0"+m;
    if ( d < 10 ) d = "0"+d;

    return `${y}-${m}-${d}`;
};

export const getMonthRangeByDate = (date) => {
    const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const endTimeStamp = new Date(date.getFullYear(), date.getMonth()+1).getTime();

    return {beginTimeStamp, endTimeStamp};
}

export const emotionList = [{
    id: 1,
    name: "Very Good",
    img: getEmotionImgById(1),
},
{
    id: 2,
    name: "Good",
    img: getEmotionImgById(2),
},
{
    id: 3,
    name: "So So",
    img: getEmotionImgById(3),
}, 
{
    id: 4,
    name: "Bad",
    img: getEmotionImgById(4),
},
{
    id: 5,
    name: "Terrible",
    img: getEmotionImgById(5),
},];


export default getEmotionImgById;