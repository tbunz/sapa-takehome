import Image from "next/image";
import Link from "next/link"

export default function Header() {
  return (
      <div className="w-full block relative">
        <Image
          src="/TopHeaderImage@2x.png"
          priority={true}
          width={3300}
          height={1200}
          className="z-10"
          alt="Desert Farm"
        /> 
        <div className="mt-4 px-2 md:mt-8 w-full top-0 absolute justify-center flex">
          <nav className="justify-around gap-x-8 basis-full lg:basis-2/3 flex-wrap flex">
            <Link href="/appointments">APPOINTMENTS</Link>
            <Link href="/medical-card-info">MEDICAL CARD INFO</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/pharmacies">PHARMACIES</Link>
            <Link href="/about">ABOUT</Link>
          </nav>
        </div>

        <div className="w-full absolute bottom-0 h-1/2">
            <Image
            src="/UtahGrownLogo-Green@2x.png"
            priority={true}
            fill={true}
            className="object-contain absolute bottom-0 z-10"
            alt="Utah Grown"
            />
            <div className="h-1/6 w-full bg-greenOne absolute bottom-0"></div>
        </div>
      </div>
  );
}