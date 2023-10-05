export const calculateDifferenceInPercents = (value, previousMonthValue) => {
    let changePercentage = 0;
    if (!isNaN(value) && !isNaN(previousMonthValue) && previousMonthValue !== 0) {
    changePercentage = ((value - previousMonthValue) / previousMonthValue) * 100;
    }
    return(changePercentage.toFixed(2));
}