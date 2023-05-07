// import {toast} from "react-toastify"
// import {isSuccess} from "../../handlers/auth";
// import {ApiController} from "../ApiController"
// import {Apis} from "../Apis";
//
// export const SendMessage = async (data, url) => {
//     try {
//         const res = await ApiController.doPost(url, data)
//         if (isSuccess(res.status)) {
//             toast.success("xabar yuborildi")
//         }
//     } catch (err) {
//         toast.error(err.message)
//     }
// }
//
// export const Save = async (data, url, id, navigate, navigateUrl) => {
//     try {
//         let res = ''
//         if (id === undefined || id === "" || id === "undefined") {
//             res = await ApiController.doPost(url, data)
//         } else {
//             res = await ApiController.doPut(id, url, data)
//         }
//         if (isSuccess(res.status)) {
//             toast.success(res.data.message)
//             navigate(`/auth/universal-academy/admin/${navigateUrl}`)
//             localStorage.setItem("photoId", "")
//         }
//     } catch (err) {
//         toast.error(err.message)
//     }
// }
//
// export const SendPhoto = async (data) => {
//     try {
//         const res = await ApiController.doPost(Apis.sendPhoto, data)
//         if (isSuccess(res.status)) {
//             localStorage.setItem("photoId", res.data)
//             window.location.reload()
//         }
//     } catch (err) {
//         toast.error("xatolik")
//     }
// }
//
// export const GetPhoto = async (id, setPhoto) => {
//     try {
//         const res = await ApiController.doGet(Apis.getPhoto + id)
//         // console.log(res);
//         setPhoto(res);
//     } catch (err) {
//     }
// }
//
// export const embeddedGet = async (url, setData, status) => {
//     try {
//         const res = await ApiController.doGet(url)
//         if (status === "data") {
//             setData(res.data)
//         } else if (status === "embedded") {
//             setData(res.data._embedded.list)
//         }
//     } catch (err) {
//     }
// }
//
// export const getOneAbout = async (url, id, setData, status) => {
//     try {
//         const res = await ApiController.doGetOne(id, url)
//         if (status === "data") {
//             setData(res.data)
//         } else if (status === "embedded") {
//             setData(res.data._embedded)
//         }
//     } catch (err) {
//     }
// }
//
// export const deleteService = async (id, url, navigate, navigateName) => {
//     try {
//         localStorage.setItem("photoId", "")
//         const res = await ApiController.doDelete(id, url)
//         window.location.reload()
//         navigate(navigateName)
//     } catch (err) {
//         toast.error("xatolik")
//     }
// }