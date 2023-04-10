// Regular expression to match a valid name beginning with a letter, followed by any number of letters, numbers, or underscores. No special characters
const validateName = (name: string) => {
    return /^[a-zA-Z][a-zA-Z0-9_]*$/.test(name);
};
