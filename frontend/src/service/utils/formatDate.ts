export const formatDate = (date: string): string => {
    
    const transformDate = new Date(date);

    const year = transformDate.getFullYear();
    const month = transformDate.getMonth() + 1;
    const days = transformDate.getDate();

    return `${days}/${month}/${year}`;
};
