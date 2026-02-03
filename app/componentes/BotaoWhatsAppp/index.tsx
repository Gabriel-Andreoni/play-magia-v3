import Image from "next/image";
import Link from "next/link";

export function BotaoWhatsAppp() {
    return (
        <div className="w-fit h-fit fixed bottom-5 right-5 cursor-pointer z-50">
            <Link href="https://wa.me/5519994814562" target="_blank" rel="noopener noreferrer">
              <Image src="/images/whatsapp.png" alt="" width={50} height={50} /></Link>
        </div>
    )
}