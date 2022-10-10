import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Form from '../modal/form';

const App = () => {
  const [ setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="none" className="border-2 overscroll-contain overscroll-auto font-bold text-xl hover:text-zinc-900 text-white border-red-600 w-60 h-16 rounded-lg shadow-2xl shadow-red-600 hover:bg-yellow-500 hover:border-yellow-500 bg-red-600 " onClick={showModal} >
        INICIAR
      </Button>
 
      <Modal
        open={open}
        className="rounded overflow-y-auto overscroll-y-auto"
        title="Teste De Visão"
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ height: "calc(100vh - 80px)" }}
        bodyStyle={{ overflowY: "scroll" }}
        footer={[]}>

        <Form  />
      </Modal>
     
    </>
  );
};

export default App;

