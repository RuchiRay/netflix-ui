import Image from 'next/image'
import React, { useState } from 'react'
import { RowPoster } from './RowPoster'

type CardImage = {
    imgSrc: string
    type: string
    id: number
}

export const CardImage = ({ imgSrc, type, id }: CardImage) => {
    return (
        <div key={id} className='shrink-0 transition-all duration-200 hover:z-10 hover:w-[320px] hover:h-[285px] h-[128px] group  bg-neutral-900 m-2 object-cover rounded-md' >
            <div className="bg-neutral-500 rounded-md w-[228px] h-[128px] group-hover:w-[342px] group-hover:h-[150px]">
                {
                    imgSrc && <Image
                        className="rounded-md  group-hover:rounded-b-none"
                        src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
                        alt="poster"
                        width={228}
                        height={128}

                    />
                }


            </div>
            <div className="group-hover:block hidden ">
                <RowPoster type={type} id={id} />
            </div>

        </div>
    )
}
