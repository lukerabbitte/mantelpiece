export const getRandomColorIndex = (excludeThisColorIndex, totalIndices) => {
    let newRandomColorIndex;
    do {
        newRandomColorIndex = Math.floor(Math.random() * totalIndices);
    } while (newRandomColorIndex === excludeThisColorIndex);
    return newRandomColorIndex;
};