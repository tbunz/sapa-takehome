import Link from "next/link";

export default function Upcoming() {
  
    const data = [
        {
            location: "Downtown SLC",
            date: ["Tuesday, October 3rd 2023", "9:00 am - 2:00pm", "New Patients and Renewals"]
        },
        {
            location: "Price UT",
            date: ["Thursday, October 19th 2023", "9:00 am - 4:00pm", "Renewals Only"]
        },
        {
            location: "<Other Location>",
            date: ["Friday, November 10th 2023", "10:00 am - 2:00pm", "Special Event for Veterans"]
        }
    ]
    const upcomingEvents = data.map((up) =>
        <div className="text-sm lg:text-xl text-greenTwo font-prox font-regular mt-8 bg-greyThree rounded-lg border border-greenThree justify-around flex">
            <div className="text-center m-1.5 basis-1/4 lg:basis-1/8 flex flex-col justify-center">
                <div>{up.location}</div>
            </div>

           
            <div className="flex m-1.5 basis-1/2 lg:basis-1/2 flex-col">
                <div className="text-md lg:text-2xl text-greenOne font-extrabold">{up.date[0]}</div>
                <div>{up.date[1]}</div>
                <div>{up.date[2]}</div>
            </div>
            

            <div className="text-center m-1.5 basis-1/4 lg:basis-1/8 flex flex-col items-center justify-center">
                <Link href="/book" className="w-4/5 lg:w-3/5 p-3 mr-2 text-lg rounded-md lg:rounded-full bg-tanTwo">Book Time</Link>
            </div>
        </div>
      );

    return (
        <div className="mt-6 flex flex-col">
            <div className="font-prox text-center text-2xl lg:text-5xl text-greenOne font-semibold justify-center flex">
                <div>Upcoming Utah Medical Card Events</div>
            </div>
            <div className="flex w-full justify-center">
                <div className="mt-4 w-3/4 lg:w-2/3 flex flex-col">
                
                    {upcomingEvents}

                </div>
            </div>
        </div>
    
    );
}