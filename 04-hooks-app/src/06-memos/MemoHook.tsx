import { useCallback, useState } from 'react';
import { MySubTitle } from './ui/MySubTitle';
import { MyTitle } from './ui/MyTitle';

export const MemoHook = () => {
    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubTitle] = useState('Mundo');
    /*
    *USECALLBACK para memorizar funciones
    */
    const handleMyAPICall = useCallback(() => {
        console.log('Llamar a mi API', subTitle)
    }, [subTitle])
    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text-2xl font-thin text-white'>
                MemoApp
            </h1>
            <MyTitle title={title} />
            <MySubTitle
                subTitle={subTitle}
                callMyAPI={handleMyAPICall} />
            {/* <h1>Mi titulo</h1>
            <h6>Mi subtitulo</h6> */}
            <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={() => setTitle('Hello' + new Date().getTime())}>
                Cambiar titulo
            </button>

            <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                // onClick={() => setSubTitle('World' + new Date().getTime())}
                onClick={() => setSubTitle('World')}
            >
                Cambiar subtitulo
            </button>
        </div>
    )
}
