export const maxLenghtCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength) return `maximum length is ${maxLength} symbols!`
};
export const requiredField = value => {
    if(value) return undefined;
    return 'required field'
};
