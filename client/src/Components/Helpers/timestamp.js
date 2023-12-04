/**
 * 
 * @param {Date} createdAt - xyz
 * @returns -empty ""
 */

const convertTime = (createdAt) => {
    if(!createdAt){
        return "";
    }

    const date = new Date(createdAt);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth()+1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export default convertTime;