import React, { useState } from 'react'
// import QRCode from './qrcode.react'
import  './QrCode.css'
import { QRCodeCanvas } from 'qrcode.react';

const CodeGenerator = () => {
    const [text, setText] = useState("");
    const [qrValue, setQrValue] = useState("")

    const handlechange = (e) => {
        setText(e.target.value)
    }

    const handleGenerateQrcode = () => {
        setQrValue(text)
        setText("")
    }
  return (
   <>
   <div className='container'>
    <h1 className='mb-4'> Generator Code Qr</h1>
    {qrValue && <QRCodeCanvas value={qrValue} size={150} className='mny-4'/>}
    <input type="text" className='form-control' placeholder='entrer du texte ou une Url' value={text} onChange={handlechange} />
    <button className='btn btn-primary mb-3 mt-3' onClick={handleGenerateQrcode}> Generate QR Code</button>
   </div>
   </>
  )
}

export default CodeGenerator