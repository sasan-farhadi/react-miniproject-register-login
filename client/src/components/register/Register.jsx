import MainLayout from "../layouts/main-layout/MainLayout"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import Error from "../error/Error"
import { useEffect, useState } from "react"

const Register = () => {
    let [provinceName, setProvinceName] = useState([])
    let [favourites, setFavourites] = useState([])
    useEffect(() => {
        fetch('/provinces').then(x => x.json()).then(x => {
            setProvinceName(x.provinces)
        })

        fetch('/favourites').then(x => x.json()).then(x => {
            setFavourites(x.favourite)
        })
    }, [])

    const def = { fname: '', lname: '', username: '', email: '', password: '', passwordConfirm: '' }
    const rules = yup.object({
        fname: yup.string().required('نام اجباریست'),
        lname: yup.string().required('نام خانوادگی اجباریست'),
        username: yup.string().required('نام کاربری را وارد کنید'),
        email: yup.string().required('ایمیل را وارد کنید').email('فرمت ایمیل درست نیست'),
        password: yup.string().required('رمزعبور را وارد کنید'),
        passwordConfirm: yup.string().required('تکرار رمزعبور را وارد کنید').oneOf([yup.ref('password'), null], 'رمزعبور یکسان نیست'),
    })

    let [cityId, setCityId] = useState()
    let [msg, setMsg] = useState('')
    let [msgImage, setMsgImage] = useState('')

    const btnSave = values => {
        values.city = cityId
        values.favourites = favouriteCheck

        if (cityId == null) {
            setMsg('استان و شهر را انتخاب کنید')
            return
        }
        setMsg('')

        if (image == '') {
            setMsgImage('تصویر را انتخاب کنید')
            return
        }
        setMsgImage('')


        fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }).then(x => x.json()).then(x => {
            let formData = new FormData()
            formData.append('file', image)
            formData.append('id', x.id)
            fetch('/insertImage', {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            }).then(x => x.json()).then(x => {
                x.result ? alert("اطلاعات با موفقت ذخیره شد") : alert("خطا در ثبت اطلاعات")
            })
        })
    }

    let [citiesName, setCitiesName] = useState([])
    const provinceId = event => {
        let provinceId = event.target.value
        fetch(`/cities/${provinceId}`).then(x => x.json()).then(x => {
            setCitiesName(x.cities)
        })
    }

    let [image, setImage] = useState()
    const onImage = event => {
        let parts = event.target.files[0].name.split('.')
        if (parts[parts.length - 1].toLowerCase() != 'jpg') {
            setMsgImage('فرمت عکس صحیح نیست')
            setImage('')
            return
        } else if (event.target.files[0].size > 1 * 1024 * 1024) {
            setMsgImage('تصویر کمتر از یک مگابایت باشد')
            setImage('')
            return
        }
        setMsgImage('')

        let reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onloadend = x => {
            setImage(x.target.result)
        }
    }

    let [favouriteCheck, setFavouriteCheck] = useState([])
    const onFavourites = event => {
        let favouriteId = Number(event.target.value)
        if (event.target.checked == true) {
            favouriteCheck.push(favouriteId)
        } else {
            let index = favouriteCheck.findIndex(x => x === favouriteId)
            favouriteCheck.splice(index, 1)
            setFavouriteCheck([...favouriteCheck])
        }
    }

    return (
        <>
            <MainLayout>
                <Formik initialValues={def} validationSchema={rules} onSubmit={btnSave}>
                    <Form>
                        <div className="container bg-white rounded p-4">
                            <h3>فرم ثبت نام</h3>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <div className="mt-3">
                                        <label htmlFor="fname">نام</label>
                                        <Field className="form-control" type="text" name="fname" id="fname" placeholder="نام خود را وارد کنید" />
                                        <ErrorMessage component={Error} name="fname" ></ErrorMessage>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="lname">نام خانوادگی</label>
                                        <Field className="form-control" type="text" name="lname" id="lname" placeholder="نام خانوادگی خود را وارد کنید" />
                                        <ErrorMessage component={Error} name="lname" ></ErrorMessage>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="username">انتخاب نام کاربری</label>
                                        <Field className="form-control" type="text" name="username" id="username" placeholder="نام کاربری را وارد کنید" />
                                        <ErrorMessage component={Error} name="username" ></ErrorMessage>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="email">ایمیل</label>
                                        <Field className="form-control" type="email" name="email" id="email" placeholder="ایمیل خود را وارد کنید" />
                                        <ErrorMessage component={Error} name="email" ></ErrorMessage>
                                    </div>
                                    <hr />
                                    <div className="mt-3">
                                        <label htmlFor="password">رمز عبور</label>
                                        <Field className="form-control" type="password" name="password" id="password" placeholder="رمزعبور خود را وارد کنید" />
                                        <ErrorMessage component={Error} name="password" ></ErrorMessage>
                                        <Field className="form-control mt-3" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="تکرار رمزعبور خود را وارد کنید" />
                                        <ErrorMessage component={Error} name="passwordConfirm" ></ErrorMessage>
                                    </div>
                                    <hr />
                                    <div className="mt-3">
                                        <label htmlFor="province">استان/شهرستان</label>
                                        <select name="province" id="province" className="form-control" onChange={provinceId}>
                                            <option value="-1" selected disabled>انتخاب کنید</option>
                                            {
                                                provinceName.map(x => {
                                                    return (
                                                        <option value={x.Id}>{x.province}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mt-3">
                                        <select name="city" id="city" className="form-control" onChange={(event) => setCityId(event.target.value)}>
                                            <option value={-1} selected disabled>انتخاب کنید</option>
                                            {
                                                citiesName.map(x => {
                                                    return (
                                                        <option value={x.Id}>{x.city}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <p className="text-danger">{msg}</p>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div>
                                        <label htmlFor="image">بارگذاری تصویر</label>
                                        <input type="file" src="" className="form-control" onChange={onImage} />
                                        <p className="text-danger">{msgImage}</p>
                                    </div>
                                    <div className="p-4">
                                        <img src={image} alt="" className="rounded" width={100} height={100} />
                                    </div>
                                    <hr />
                                    <label className="mb-3" htmlFor="favourite">علاقه مندی ها</label>
                                    {
                                        favourites.map(x => {
                                            return (
                                                <div className="mt-1">
                                                    <input type="checkbox" name="" id={x.Id} value={x.Id} onChange={onFavourites} />
                                                    <label htmlFor={x.Id} className="mr-2">{x.favourite}</label>
                                                </div>
                                            )
                                        })
                                    }
                                    <hr />
                                    <div className="button">
                                        <button className="btn btn-primary form-control mt-3">ثبت نام</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </MainLayout>
        </>
    )
}
export default Register