export default function Pharmacies() {
  
    const data = [
        {
            name: "Dragonfly Wellness",
            locations: [
                ["711 South State Street, Salt Lake City UT 84111", "801-413-6945"],
                ["20 Main Street, Price UT 84501", "435-637-3770"]
            ],
            website: "http://www.dragonflywellness.com/"
        },
        {
            name: "Bloc Pharmacy",
            locations: [
                ["10392 South Jordan Gateway South Jordan UT 84095", "801-413-6945"],
                ["1624 S Convention Center Dr. St. George UT 84790", "435-216-3400"]
            ],
            website: "http://www.blocdispensary.com/"
        },
        {
            name: "Beehive Pharmacy",
            locations: [
                ["711 South State Street, Salt Lake City UT 84111", "801-413-6945"],
                ["20 Main Street, Price UT 84501", "435-637-3770"]
            ],
            website: "http://www.BeehivePharmacy.com/"
        },
        {
            name: "Cannabist",
            locations: [
                ["711 South State Street, Salt Lake City UT 84111", "801-413-6945"]
            ],
            website: "http://www.cannabist.com/"
        },
        {
            name: "Curaleaf",
            locations: [
                ["3633 N Thanksgiving Way, Lehi UT 84043", "801-413-6945"],
                ["1351 Kearns Blvd Suite 110-B Park City UT 84060", "435-637-3770"],
                ["757 S 1040 W Payson UT 84651", "801-413-6945"],
                ["20 Main Street, Price UT 84501", "435-637-3770"]
            ],
            website: "http://www.curaleaf.com/"
        },
        {
            name: "Dragonfly Wellness",
            locations: [
                ["711 South State Street, Salt Lake City UT 84111", "801-413-6945"],
                ["20 Main Street, Price UT 84501", "435-637-3770"]
            ],
            website: "http://www.dragonflywellness.com/"
        },
        {
            name: "WholesomeCo",
            locations: [
                ["711 South State Street, Salt Lake City UT 84111", "801-413-6945"],
                ["20 Main Street, Price UT 84501", "435-637-3770"]
            ],
            website: "http://www.dragonflywellness.com/"
        },
        {
            name: "Zion Medicinal",
            locations: [
                ["711 South State Street, Salt Lake City UT 84111", "801-413-6945"],
                ["20 Main Street, Price UT 84501", "435-637-3770"]
            ],
            website: "http://www.dragonflywellness.com/"
        }
        
    ]
    const pharms = data.map((pharm) =>
        <div className="mt-4 flex flex-col">
            <div className="text-xl text-greenThree font-semibold">
                {pharm.name}
            </div>
            
            {pharm.locations.map((loc, index) =>
            <div className="text-start mt-4 lg:mt-0 flex flex-col text-lg lg:flex-row font-semibold text-greyTwo justify-between">
                <div className="basis-1/2">{loc[0]}</div>
                <div className="basis-1/4">{loc[1]}</div>
                <div className="basis-1/3">{(index === 0) && pharm.website}</div>
            </div>
            
            )}
        </div>
      );

    return (

        <div className="mt-16 flex w-full justify-center">
            <div className=" w-3/4 lg:w-2/3 flex flex-col">
                <div className="mb-4 text-5xl font-prox text-greenOne font-semibold">
                    Utah Medical Cannabis Pharmacies
                </div>
                
                {pharms}

            </div>
        </div>
    
    );
}