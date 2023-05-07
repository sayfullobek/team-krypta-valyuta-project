export const isAuthenticated = (token) => {
    return token;
}

export const isSuccess = (is) => {
    return is === 200 || is === 201 || is === 2004;
}

export const logout = (navigate) => {
    localStorage.clear();
    navigate('/')
    window.location.reload()
}

export const stringDataIf = (object) => {
    return object.trim().length === 0;
}