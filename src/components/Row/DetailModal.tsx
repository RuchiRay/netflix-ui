import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { PlayButton } from "../Buttons/PlayButton";
import { Add } from "../icons/Add";
import { Like } from "../icons/Like";
import { Cross } from "../icons/Cross";
import { findRandom } from "@/utilities/findRandom";
import { Volume } from "../icons/Volume";
import { MoreLikeThis } from "../MoreLikeThis/MoreLikeThis";

type DetailModal = {
  open: boolean;
  closeModal: () => void;
  data?: any;
  moreData?: any;
};

export const DetailModal = ({
  open,
  closeModal,
  data,
  moreData,
}: DetailModal) => {
  //   console.log(data, "data");

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full pb-10  max-w-4xl transform overflow-hidden rounded-md bg-neutral-900 text-left align-middle shadow-xl transition-all">
                <div className="w-full  relative h-[450px]">
                  <Image
                    className="rounded-md rounded-b-none"
                    src={`https://image.tmdb.org/t/p/original/${
                      data?.backdrop_path || data?.poster_path
                    }`}
                    alt="poster"
                    width={228}
                    height={128}
                  />
                  <div className="absolute z-10 inset-0 flex h-full justify-between flex-col p-10 pb-20">
                    <div className="ml-auto" onClick={closeModal}>
                      <Cross />
                    </div>
                    <p className="text-4xl font-bold">{data?.original_title}</p>
                    <div className="flex justify-between">
                      <div className="flex  gap-2 items-center">
                        <PlayButton />
                        <Add />
                        <Like />
                      </div>
                      <Volume />
                    </div>
                  </div>

                  <div className="fade-bottom"></div>
                </div>
                <div className="flex mt-4 justify-between">
                  <div className="px-10 flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <p className="text-green-500">{findRandom()}% Match</p>
                      <p>2023</p>
                      <p>2h 30m</p>
                      <div className="border p-1 text-xs border-neutral-500">
                        HD
                      </div>
                    </div>
                    <div className="flex text-sm gap-2 items-center">
                      <div className="border text-sm p-1 border-neutral-500">
                        U/A 16+
                      </div>
                      <p>crude humor, language, mature, inspiration</p>
                    </div>
                    <div className="mt-2 text-sm">{data?.overview}</div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm min-w-[300px]">
                    <div>
                      <span className="text-white/30">Cast : </span>
                      <span>Anil Kapoor, Priyanka Chopra, Ranvir Singh</span>
                    </div>

                    <div>
                      <span className="text-white/30">Genres : </span>
                      {data?.genres.map((genre: any) => {
                        return <span key={genre.id}>{genre.name}, </span>;
                      })}
                    </div>
                    <div>
                      <span className="text-white/30">This movie is : </span>
                      <span>Charming, feel good, emotional</span>
                    </div>
                  </div>
                </div>
                <div className=" mt-12 ">
                  <h1 className="text-2xl mb-6 font-semibold pl-10">
                    More like this
                  </h1>
                  <MoreLikeThis data={moreData} />
                </div>
                <div className="mt-10"></div>
                <div className="px-10 text-sm">
                  <h1 className="text-2xl font-semibold ">
                    About {data?.title}
                  </h1>
                  <div className="flex mt-6 flex-col gap-2">
                    <div>
                      <span className="text-white/30">Cast : </span>
                      <span>Anil Kapoor, Priyanka Chopra, Ranvir Singh</span>
                    </div>
                    <div>
                      <span className="text-white/30">Writer : </span>
                      <span>Christopher Nola</span>
                    </div>
                    <div>
                      <span className="text-white/30">Genres : </span>
                      {data?.genres.map((genre: any) => {
                        return <span key={genre.id}>{genre.name}, </span>;
                      })}
                    </div>
                    <div>
                      <span className="text-white/30">This movie is : </span>
                      <span>Charming, feel good, emotional</span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
