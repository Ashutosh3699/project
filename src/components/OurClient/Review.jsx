import React from 'react'

const Review = () => {

    const obj = [
      {
        id: 1,
        name: "Amit Iyer" ,
        star: 5,
        content: "Brilliant service, I called up several so called repair places, pretty much everyone are fleecing customers - aeromat however extremely professional and fixed my issue in 5 mins - keep it up, most recommended",
        time: "3 month ago"

      },
      {
        id: 2,
        name: "K K" ,
        star: 5,
        content: "Thanks to Aeromat for expertly repairing my drone within budget. Impressed with their professionalism and cost-effective service!",
        time: "7 month ago"

      },
      {
        id: 3,
        name: "pritam kamble" ,
        star: 5,
        content: "Product received from Aeromat... I visited firm personally and found very helpful and good support from them even for future work also.. They providing excellent service 😊 Thank you Aeromat",
        time: "2 years ago"

      },
      {
        id: 4,
        name: "Tilu Kashi" ,
        star: 5,
        content: "Very nice",
        time: "7 month ago"

      },
      {
        id: 5,
        name: "Indrajeet Mane" ,
        star: 5,
        content: "Trusted dealer, Genuine products, Fast service, Ani barach kahi thanks dada for this drone!",
        time: "2 years ago"

      },
      {
        id: 6,
        name: "SWAPNIL PATIL" ,
        star: 5,
        content: "Took spraying services from them, got result in 2-3 days... Spraying using drones is best innovation for farming till the time. Thank you to aeromat team !!!",
        time: "2 years ago"

      },
      {
        id: 7,
        name: "Sourabh Wanjole" ,
        star: 5,
        content: "Good services, Effective and efficient Product ,Trustworthy Organization , Easily and Quickly Available for communication and deals.",
        time: "2 years ago"

      },
      {
        id: 8,
        name: "Anuja Mohite" ,
        star: 5,
        content: "Their service is very good, you can trust their services and products.",
        time: "2 years ago"

      },
      {
        id: 9,
        name: "aaditi raj" ,
        star: 5,
        content: "Exceptional service..thank you",
        time: "10 month ago"

      },
      {
        id: 10,
        name: "Shivani Patil" ,
        star: 5,
        content: "I got customised drone from them, their service is exceptional in the segment. Fully trustworthy and time bound services.",
        time: "2 years ago"

      },
      {
        id: 11,
        name: "Jaydeep Kole" ,
        star: 5,
        content: "Very good service and trustworthy products🙌",
        time: "2 years ago"

      },
      {
        id: 12,
        name: "Singer_Vocalist" ,
        star: 5,
        content: "Excellent service 😍 Very nice experience,",
        time: "a year ago"

      },
      {
        id: 13,
        name: "pooja yadav" ,
        star: 5,
        content: "Good products, best service.",
        time: "2 years ago"

      },
      {
        id: 14,
        name: "Vaibhav Dimble" ,
        star: 5,
        content: "Good work and Best service",
        time: "2 years ago"

      },
      {
        id: 15,
        name: "arpita naik" ,
        star: 5,
        content: "Nice work & good service!",
        time: "2 years ago"

      },

    ];



    


  return (
    <div>
          {
            obj.map((person,index) => {
              return(
                <div key={index} className='flex flex-col gap-3 px-4 py-4 mx-4'>
                  <div>{person.name}</div>
                  <div>{person.time}</div>
                  <div>
                    {person.content}
                  </div>
                </div>
              )
            })
          }
    </div>
  )
}

export default Review