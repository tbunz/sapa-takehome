import Image from "next/image";
import { setPriority } from "os";

export default function ToKnow() {
  
    const data = [
        {
            step: "You’re going to register with the state of Utah. You can start this before you arrive.",
            actions: ["Obtain access to your Utah Digital ID", "Fill out all the fields until you get to “Awaiting Certification” status"]
        },
        {
            step: "Check in with your QMP",
            actions: ["1. QMP Registration", "2. Medical Evaluation/Consultation", "3. Payment"]
        },
        {
            step: "Renewal or New Patient?",
            actions: ["If this is a renewal, congratulations you are ready to shop...", "If you are a new patient, here are some helps to get you started..."]
        }    
    ]    
    return (

        <div className="mt-14 flex flex-col">
            <div className="font-prox text-center text-xl lg:text-3xl text-greenOne font-semibold justify-center  flex">
                <div>Things to know before your appointment</div>
            </div>
            <div className="flex w-full justify-center">
                <div className="mt-4 w-3/4 lg:w-2/3 flex justify-center">
                    <div className="flex flex-col text-center items-center md:text-start md:grid md:grid-cols-10">
                        <Image
                        src={"/Number1.png"}
                        width={68}
                        height={69}
                        className=""
                        alt={"1"}
                        />
                        <div className="text-xl m-2 col-span-9 flex items-center">{data[0].step}</div>
                        <div className="m-2 col-span-3">
                            <div className="flex justify-end"> 
                                <div className="flex flex-col">
                                    <div>UtahID.org</div>
                                    <div>EVS.Utah.gov</div>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 col-span-7">
                            <div className="flex justify-start"> 
                                <div className="flex flex-col">
                                    <div>{data[0].actions[0]}</div>
                                    <div>{data[0].actions[1]}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3"></div>
                        <div className="m-2 col-span-7">
                        <Image
                        src={"/AwaitingCert-Image.png"}
                        width={256}
                        height={108}
                        className="m-3"
                        alt={"1"}
                        />
                        </div>

                        <Image
                        src={"/Number2.png"}
                        width={68}
                        height={69}
                        className=""
                        alt={"2"}
                        />
                        <div className="md:mt-10 col-span-7 md:flex"> 
                            <div className="text-xl m-2 flex flex-col">
                                {data[1].step}
                            </div>
                            <div className="m-2 flex"> 
                                <div className="flex flex-col">
                                    <div>{data[1].actions[0]}</div>
                                    <div>{data[1].actions[1]}</div>
                                    <div>{data[1].actions[2]}</div>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 col-span-2"></div>
                        
                        <Image
                        src={"/Number3.png"}
                        width={68}
                        height={69}
                        className=""
                        alt={"3"}
                        />
                        <div className="md:mt-10 col-span-9 md:flex"> 
                            <div className="text-xl m-2 flex flex-col">
                                {data[2].step}
                            </div>
                            <div className="m-2 flex"> 
                                <div className="flex flex-col">
                                    <div>{data[2].actions[0]}</div>
                                    <div>{data[2].actions[1]}</div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-span-5"></div>      
                        <div className="col-span-5">
                            <div className="m-2 flex"> 
                                <div className="flex flex-col">
                                    <div>1. Meet with Pharmacist</div>
                                    <div>2. Set up your Portal Account</div>
                                    <div>3. Start Shopping</div>
                                    <div>**Dont forget to take advantage of new patient deals**</div>
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
        </div>

    );
}