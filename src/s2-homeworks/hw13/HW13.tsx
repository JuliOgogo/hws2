import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error500 from './images/500.svg'
import error400 from './images/400.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send +
* 2 - дизэйблить кнопки пока идёт запрос +
* 3 - сделать стили в соответствии с дизайном +
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')

        const setValues = (values: { code: string, text: string, info: string, image: string }) => {
            setCode(values.code)
            setText(values.text)
            setInfo(values.info)
            setImage(values.image)
        }

        axios
            .post(url, {success: x})
            .then((res) => {
                if (x) {
                    const values = {
                        code: 'Код 200!',
                        text: '...всё ок)',
                        info: 'код 200 - обычно означает что скорее всего всё ок)',
                        image: success200
                    }
                    setValues(values)
                }
            })
            .catch((e) => {
                if (x === undefined) {
                    const values = {
                        code: 'Ошибка 400!',
                        text: 'Ты не отправил success в body вообще!',
                        info: 'ошибка 400 - обычно означает что скорее всего фронт отправил что-то не то на бэк!',
                        image: error400
                    }
                    setValues(values)
                } else if (x === false) {
                    const values = {
                        code: 'Ошибка 500!',
                        text: 'эмитация ошибки на сервере',
                        info: 'ошибка 500 - обычно означает что что-то сломалось на сервере, например база данных)',
                        image: error500
                    }
                    setValues(values)
                } else {
                    const values = {
                        code: 'Error!',
                        text: 'Network Error',
                        info: 'AxiosError',
                        image: errorUnknown
                    }
                    setValues(values)
                }
            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={info === '...loading'}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={info === '...loading'}
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={info === '...loading'}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        disabled={info === '...loading'}
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
