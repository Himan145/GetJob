import React from 'react';
import { FaApple, FaMicrosoft } from 'react-icons/fa';
import {SiTesla} from 'react-icons/si'

export const PopularCompany=()=>{
    const companies = [
        {
          id: 1,
          title: "Microsoft",
          location: "Gurugram, India",
          openPositions: 10,
          icon: <FaMicrosoft />,
        },
        {
          id: 2,
          title: "Tesla",
          location: "Bangalore, India",
          openPositions: 5,
          icon: <SiTesla />,
        },
        {
          id: 3,
          title: "Apple",
          location: "Chenni, India",
          openPositions: 20,
          icon: <FaApple />,
        },
      ];
    return(
        <>
           <div className='companies'>
            <div className='container'>
                <h3>TOP COMPANIES</h3>
                <div className='banner'>
                    {
                        companies.map(element=>{
                            return(
                                <div className='card' key={element.id}>
                                    <div className='content'>
                                        <div className='icon'>{element.icon}</div>
                                        <div className='text'>
                                            <p>{element.title}</p>
                                            <p>{element.location}</p>
                                        </div>
                                    </div>
                                    <button>Open Position {element.openPositions}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
           </div>
        </>
    )
}