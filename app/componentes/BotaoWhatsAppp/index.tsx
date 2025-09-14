import Image from "next/image";

import WhatsAppIcon from './img/whatsapp.png'

export function BotaoWhatsAppp() {
    return (
        <div className="w-fit h-fit fixed bottom-5 right-5 cursor-pointer z-50">
            <Image src={WhatsAppIcon.src} alt="" width={50} height={50} />
        </div>
    )
}