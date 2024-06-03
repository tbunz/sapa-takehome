import Link from "next/link";

export default function Faqs() {
  
    const data = ["If I don’t qualify, do i still have to pay the QMP?",
        "What are Utah’s qualifying medical conditions?",
        "Is documentation required to prove you have a medical condition?",
        "If I have a medical cannabis card, can I consume in public?",
        "What are the eligiblity requirements for a Utah medical cannabis card?",
        "What is the complete cost to get a medical cannabis card?",
        "How long does it take to receive your card?",
        "Where can I purchase medical cannabis in Utah?",
        "Can I grow my own cannabis plants with a medical cannabis card?",
        "How long is a medical cannabis card valid?",
        "Is my personal information confidential when applying for a medical cannabis card?"
    ]
    const faqs = data.map((faq) =>
        <Link href={"/faq/" + faq} className="mb-2 text-greenThree text-xl font-medium">
            {faq}
        </Link>
      );

    return (

        <div className="mt-16 flex w-full justify-center">
            <div className=" w-3/4 lg:w-2/3 flex flex-col">
                <div className="mb-4 text-4xl font-prox text-greenOne font-semibold">
                    FAQs...
                </div>
                
                {faqs}

            </div>
        </div>
    
    );
}