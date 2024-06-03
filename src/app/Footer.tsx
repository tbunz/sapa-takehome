import Link from "next/link";
import Image
 from "next/image";
export default function Footer() {
  return (
      <div className="w-full relative font-semibold text-greenOne flex items-center flex-col">
        <div className="w-full h-1">
            <div className="w-full h-full bg-greenOne"></div>
        </div>

        <div className="w-2/3 m-4">
            <Image
            src="/UtahGrownLogo-Green.png"
            width={280}
            height={126}
            className=""
            alt="Utah Grown"
            />
        </div>    
            
        <div className="w-full justify-end flex h-24 bg-greenOne">
          <nav className="m-2 text-white justify-around basis-full lg:basis-2/3 flex-wrap flex">
            <div>©2023 All Rights Reserved. </div>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
        </div>

      </div>
  );
}