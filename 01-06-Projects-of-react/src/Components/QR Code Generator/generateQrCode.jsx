import { useState } from "react";
import QRCode from "react-qr-code";



function QrCodeGenerator() {
    const [qrCode,setQrCode]=useState('')
    const [input,setInput]=useState('')
    return ( <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">QR Code Generator</h1>

        <div className="flex gap-2 mb-8">
            <input type="text" value={input} name="qr-code" onChange={(e)=>setInput(e.target.value)} placeholder="Enter value to generate QR"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500 w-72" />
            <button disabled={(input && input.trim()) !== '' ? false : true} id="qr-code" 
            onClick={()=>(
                setQrCode(input),
                setInput('')
            )}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed">Generator</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
            <QRCode 
            id="qrCode"
            value={qrCode}
            size={400}
            bgColor="#ffffff"
            />
        </div>
    </div> );
}

export default QrCodeGenerator;