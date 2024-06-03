import Image from "next/image";

export default function Large() {
  
    return (
        <div className="mt-28 flex flex-col items-center">
            <a  href="https://leafnation" className="mt-4 w-3/4 md:w-2/3">
                <Image
                src={"/MockBannerAd@2x.png"}
                width={2361}
                height={571}
                className=""
                alt={"Leaf Nation"}
                />
            </a>
            <div className="mt-16 w-3/4 md:w-2/3 flex flex-col md:flex-row">
                <div className="w-full relative basis-1/2">
                    <Image
                    src={"/Consultation.png"}
                    width={640}
                    height={553}
                    className=""
                    alt={"Consultaion"}
                    />
                </div>
                <div className="w-full md:ml-12 basis-1/2">
                    <div className="text-center md:text-start text-4xl font-prox font-medium font-greenOne mt-6 md:mt-0 mb-2">
                        Utah Medical Cards
                    </div>
                    <div className="text-greyTwo text-lg font-medium m-2 leading-loose">
                        A medical cannabis card, also known as a medical marijuana card, is a state-issued identification card that allows
                        qualified patients to legally purchase and use medical
                        cannabis for the treatment of specific medical conditions.
                        In Utah, a card is required to access and purchase medical cannabis products from state-licensed dispensaries.
                        Having a medical card does not allow you to possess any
                        cannabis product but only the products you purchased
                        under your PAT (Medical Card ID number).
                    </div>
                </div>
            </div>

            <div className="font-prox mt-20 w-3/4 md:w-2/3 relative ">
                <div className="flex flex-col lg:absolute lg:top-1/4 lg:left-16">
                    <div className="text-greenOne text-center lg:text-start lg:text-white text-3xl">
                        We’d love to hear from you!
                    </div>
                    <a href="https://review.com" className="p-2 m-2 text-greenTwo text-2xl text-center rounded-lg lg:rounded-full bg-tanTwo">
                    Review us here!
                    </a>
                </div>
                    <Image
                    src={"/Review Banner@2x.png"}
                    width={2364}
                    height={361}
                    className=""
                    alt={"Review"}
                    />
     
            </div>
        </div>
    
    );
}