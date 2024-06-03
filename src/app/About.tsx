import Image from "next/image";

export default function About() {
    return (

        <div className="mt-16 flex w-full justify-center">
            <div className=" w-3/4 lg:w-2/3 flex-col lg:flex-row flex">
                <div className="mb-4 basis-1/2 flex flex-col">
                    <div>
                        <div className="text-greenOne text-5xl font-medium">
                            About Utah Grown
                        </div>
                        <div className="mt-4 text-lg leading-loose text-greyTwo">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                            autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore.
                        </div>
                    </div>
                    
                    <div className="mt-10">
                        <div className="text-greenOne text-5xl font-medium">
                            Utah Grown Office
                        </div>
                        <div className="mt-4 text-3xl text-greyTwo font-semibold flex flex-col">
                            <div>730 State Street</div>
                            <div>Salt Lake City, Utah 84111</div>
                        </div>
                    </div>

                </div>
                <div className="mb-4 basis-1/2">
                    <Image
                    src={"/NormalizeItUtah@2x.png"}
                    width={1325}
                    height={1785}
                    className=""
                    alt={"Review"}
                    />
                </div>
            </div>
        </div>
    
    );
}