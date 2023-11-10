const monthDay = (createdAt) => {
    if(!createdAt){
        return "";
    }

    const date = new Date(createdAt);
    const options = {month: 'long', day: 'numeric'};
    const formatDate = date.toLocaleDateString(undefined, options);

    return formatDate;
}

export default monthDay;