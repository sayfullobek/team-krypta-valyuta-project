import {toast} from "react-toastify"
import {isSuccess, stringDataIf} from "../../handlers/auth"
import {ApiController} from "../ApiController"
import {Apis} from "../Apis"

export const LoginHandler = async (data) => {
    if (stringDataIf(data.username)) {
        window.location.reload()
        return localStorage.setItem('msg', "username bo'sh bo'lishi mumkin emas")
    }
    if (stringDataIf(data.password)) {
        window.location.reload()
        return localStorage.setItem('msg', "parol bo'sh bo'lishi mumkin emas")
    }
    try {
        const res = await ApiController.doPost(Apis.login, data)
        if (isSuccess(res.status)) {
            saveLocalStorage(res)
        }
    } catch (err) {
        toast.error(err.response.message)
    }
}


export const RegisterHandler = async (data) => {
    if (stringDataIf(data.firstName)) {
        return toast.warning("ismingizni kiritishingiz shart")
    }
    if (stringDataIf(data.lastName)) {
        return toast.warning("familiyangizni kiritishingiz shart")
    }
    if (stringDataIf(data.email) || !data.email.endsWith("@gmail.com")) {
        return toast.warning("emailingiz xato qayta urinib ko'ring")
    }
    if (data.password.trim().length > 6) {
        return toast.warning("parolingiz 6 ta belgidan ko'p bo'lishi shart")
    }
    if (data.password !== data.prePassword) {
        return toast.warning("parol va tasdiqlash paroli bir xil bo'lishi shart")
    }
    try {
        const res = await ApiController.doPost(Apis.register, data)
        if (isSuccess(res.status)) {
            saveLocalStorage(res)
        }
    } catch (err) {
        toast.error(err.message)
    }
}

const saveLocalStorage = (res, navigate) => {
    localStorage.setItem('id', res.data.getLogin.user.id)
    localStorage.setItem('token', res.data.getLogin.resToken.body)
    localStorage.setItem('tokenType', res.data.getLogin.resToken.tokenType)
    localStorage.setItem('firstName', res.data.getLogin.user.firstName)
    localStorage.setItem('lastName', res.data.getLogin.user.lastName)
    localStorage.setItem('username', res.data.getLogin.user.phoneNumber)
    toast.success('hush kelibsiz')
    setTimeout(() => {
        window.location.reload()
    }, 2000);
}