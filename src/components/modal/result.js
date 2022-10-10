import React, { useEffect, useState } from 'react'
import logo1 from '../../assets/logo1.png';
import { api } from '../../services/api';
import moment from 'moment'

const Result = ({ id }) => {
    const [data, setData] = useState({});
    const [date, setDate] = useState('');

    const getData = async () => {
        const response = await api.get('/api/perguntas', {
            params: {
                id: id
            }
        })
        setData(response.data)
        setDate(response.data.birthDay)
    
        const dataSend = { data: response.data, date: moment(response.data.birthDay).format('DD/MM/YYYY') }
        // eslint-disable-next-line no-unused-vars
        const responseEmail = await api.post('/api/sendEmail/result', dataSend)
    }

    useEffect(() => {
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>

            <div className="">
                <img src={logo1} className="w-80 h-30 " alt='' />
                <div className="font-bold  ml-50">
                    <h1>Teste de Visão Digital</h1>
                </div>
            </div>


            <div className="flex flex-wrap">
                <div className=" h-20 w-40 mt-10 ">
                    <h1 className="font-bold">Nome:</h1>
                    <p>{data.nome}</p>
                    <h1 className="font-bold">Email:</h1>
                    <p>{data.email}</p>
                </div>
                <div className="h-20 w-30  mt-10 ">
                <h1 className="font-bold">Data De Nascimento:</h1>
                    <p>{date}</p>
                    <h1 className="font-bold">Número Celular</h1>
                    <p>{data.phone}</p>
                </div>
            </div>

            <h1 className="font-bold text-3xl mt-10 text-left">Saúde Geral</h1>

            <div className="flex flex-wrap ">
                <div className=" h-20 w-40  mt-10">
                    <h1 className="font-bold text-left">1- Como Esta se sentindo ?</h1>
                    <p>{data.feeling}</p>
                    <h1 className="font-bold">2- Sintomas:</h1>
                    <p>{data.sysmptoms1}</p>
                    <h1 className="font-bold">3- Pressão Sanguínea:</h1>
                    <p>{data.pression}</p>

                </div>
                <div className="h-20 w-30 mt-10 pt-8">
                    <h1 className="font-bold">4- Problemas</h1>
                    <p>{data.problem1}</p>
                    <h1 className="font-bold">5- Tratamento Especial</h1>
                    <p>{data.medicine1}</p>
                </div>
            </div>

            <div className="mt-20">

                <h1 className="font-bold text-3xl mt-5 text-left ">Saúde Geral dos Olhos</h1>
            </div>
            

            <div className="flex flex-wrap ">
                <div className=" h-20 w-40  mt-10">
                    <h1 className="font-bold text-left">1- Como Esta se sentindo ?</h1>
                    <p>{data.feeling}</p>
                    <h1 className="font-bold">2- Sintomas:</h1>
                    <p>{data.sysmptoms1}</p>
                    <h1 className="font-bold">3- Pressão Sanguínea:</h1>
                    <p>{data.pression}</p>

                </div>
                <div className="h-20 w-30 mt-20">
                    <h1 className="font-bold">4- Problemas</h1>
                    <p>{data.problem1}</p>
                    <h1 className="font-bold">5- Tratamento Especial</h1>
                    <p>{data.medicine1}</p>
                </div>
            </div>

            <div className="mt-20">

                <h1 className="font-bold text-3xl mt-5 text-left ">Teste de Visão</h1>
            </div>


            <div className="flex flex-wrap break-normal">
                <div className=" h-20 w-40 mt-10  ">
                    <h1 className="font-bold  ">1- realizando do teste de visão ?</h1>
                    <p>{data.testVision2}</p>
                    <h1 className="font-bold">2- Dificuldade para longe e perto</h1>
                    <p>{data.farVision} - {data.farVision3}</p>
                    <h1 className="font-bold">3- Teste para longe e perto:</h1>
                    <p>{data.farVision2}</p>

                </div>

            </div>


            <div className="mt-60">

                <h1 className="font-bold text-3xl mt-5 text-left ">Cores</h1>
            </div>

            <div className="flex flex-wrap">
                <div className=" h-20 w-40 mt-10 ">

                    <div className="flex flex-wrap space-x-2">
                        <img src="https://adamrobo.com.br/lp/img/4_placa6.png" alt='' className="w-16 h-10 " />
                        <h1 className="font-bold text-left">6-</h1> <p className="text-green-600 font-bold">{data.seis}</p>
                    </div>

                    <div className="flex flex-wrap space-x-2 mt-5">
                        <img src="	https://adamrobo.com.br/lp/img/2_placa8.png" alt='' className="w-16 h-10 " />
                        <h1 className="font-bold text-left">8-</h1> <p className="text-green-600 font-bold">{data.oito}</p>
                    </div>

                    <div className="flex flex-wrap space-x-2 mt-5">
                        <img src="	https://adamrobo.com.br/lp/img/1_placa12.png" alt='' className="w-16 h-10" />
                        <h1 className="font-bold text-left">12-</h1> <p className="text-green-600 font-bold">{data.doze}</p>
                    </div>

                    <div className="flex flex-wrap space-x-2  mt-5">
                        <img src="		https://adamrobo.com.br/lp/img/3_placa15.png" alt='' className="w-16 h-10" />
                        <h1 className="font-bold text-left">15-</h1> <p className="text-green-600 font-bold">{data.quinze}</p>
                    </div>

                    <div className="flex flex-wrap space-x-2  mt-5">
                        <img src="https://adamrobo.com.br/lp/img/6_placa42.png" alt='' className="w-16 h-10" />
                        <h1 className="font-bold text-left">42-</h1> <p className="text-green-600 font-bold">{data.quatrodois}</p>
                    </div>

                    <div className="flex flex-wrap space-x-2  mt-5">
                        <img src="	https://adamrobo.com.br/lp/img/5_placa73.png" alt='' className="w-16 h-10" />
                        <h1 className="font-bold text-left">73-</h1> <p className="text-green-600 font-bold">{data.treze}</p>
                    </div>


                </div>
            </div>

            <div className=" p-10 mt-80  text-center rounded-2xl border-4 border-red-600">
                <div className="font-bold text-3xl">
                    <h1>Avaliação</h1>
                </div>
                <p >{data.ratedesc}</p>
            </div>


        </>


    )
}

export default Result
