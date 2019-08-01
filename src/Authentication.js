
export function setUserData(idusers, token) {
    window.localStorage.setItem('idusers', idusers)
    window.localStorage.setItem('token', token);
}

export function getUserData() {
    return({
        idusers: window.localStorage.getItem('idusers'),
        token: window.localStorage.getItem('token')
    })
}

export function clearUserData() {
    window.localStorage.removeItem('idusers')
    window.localStorage.removeItem('token')
}