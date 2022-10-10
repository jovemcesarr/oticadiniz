import React, { useState } from 'react'

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import robotheader from '../../assets/robotheader.svg';
import { BackTop } from 'antd';


import '../../assets/style/time.css';
import ModalForm from '../../components/modal/openmodal';
import { api } from '../../services/api';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: 'red',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const Home = () => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const sendEmailContact = async () => {
    const dataSend = { message, email, name }
    const response = await api.post('/api/sendEmail/contato', dataSend)
    console.log(response)
  }

  return (
    <>
      <Navbar />
      <section className="text-gray-600 bg-[url('./assets/header.png')] bg-cover body-font">

        <div className="container mx-auto sm:mx-auto sm:flex flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={robotheader} />

          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-2xl text-center mb-4 font-bold text-gray-200">ÓTICA DINIZ NO COMBATE À CEGUEIRA!!</h1>
            <p className="mb-8 text-gray-200 leading-relaxed">Faça agora mesmo o seu teste visual gratuito.</p>
            <div className="flex justify-center">
              <ModalForm />
            </div>

          </div>
        </div>
      </section>

      <section className="text-gray-600 bg-[url('./assets/header.png')] bg-cover mt-40 body-font relative">
        <form className="container px-5 py-24 mx-auto" onSubmit={sendEmailContact}>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">NOSSO CONTATO</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-200">Nome</label>
                  <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" name="name" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-200">Email</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-200">Mensagem</label>
                  <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" name="message" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type='submit' className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 shadow-xl rounded text-lg">ENVIAR</button>
              </div>

            </div>
          </div>
        </form>
      </section>

      <Footer />
      <BackTop>
        <div style={style}>↑</div>
      </BackTop>
    </>
  )
}

export default Home;
