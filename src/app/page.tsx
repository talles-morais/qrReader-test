'use client'
import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';

export default function App() {
  const [data, setData] = useState('Nenhum resultado');
  const [openCamera, setOpenCamera] = useState(false);
  const qrReaderRef = useRef(null);

  const handleError = (error) => {
    console.error(error);
  };

  const toggleCamera = () => {
    if (openCamera) {
      setOpenCamera(false);
      // implementar lógica para interromper o uso da câmera (necessário?)
    } else {
      setOpenCamera(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="flex flex-col items-center justify-center bg-gray-200 p-8 rounded-lg">
        <h1 className="text-2xl mb-4">Teste de funcionalidade - Leitor de QR Code</h1>
        <button
          onClick={toggleCamera}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {openCamera ? 'Fechar câmera' : 'Abrir câmera'}
        </button>
        <p className="mt-4">{data}</p>
        {openCamera && (
          <div className="mt-4 w-full max-w-md">
            <QrReader
              ref={qrReaderRef}
              delay={300}
              onError={handleError}
              onResult={(result) => {
                if (!!result) {
                  setData(result?.text);
                }
              }}
              style={{ width: '100%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
