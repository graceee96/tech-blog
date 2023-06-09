module.exports = {
    format_date: (date) => {
        const inputDate = new Date(date);

        const month = inputDate.getMonth() + 1;
        const day = inputDate.getDate();
        const year = date.getFullYear();

        return `${year}. ${month}. ${day}`;
    }
};
