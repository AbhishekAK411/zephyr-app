export const validator = (password: string) => {
    if(password.length < 8){
        throw new Error("Password should contain at least 8 characters.");
    }
    if(!/[A-Z]/.test(password)){
        throw new Error("Password should contain at least one uppercase character.");
    }
    if(!/[a-z]/.test(password)){
        throw new Error("Password should contain at least one lowercase character.");
    }
    if(!/\d/.test(password)){
        throw new Error("Password should contain at least one digit.");
    }
    if(!/[!@#$%^&*]/.test(password)){
        throw new Error("Password should contain at least one special character");
    }
}