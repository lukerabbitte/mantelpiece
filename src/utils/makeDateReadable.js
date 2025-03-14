export const makeDateReadable = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        console.error("Invalid date provided:", dateString);
        return "";
    }

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const getDaySuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return `${month} ${day}${getDaySuffix(day)}, ${year}`;
};