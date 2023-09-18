export const emailValidator = (email: string) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(!pattern.test(email)){
        throw new Error('Invalid email address format');
    }
}