import { IoCloseSharp } from "react-icons/io5";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import RuleImg from '../../public/assets/images/image-rules.svg'



export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="mx-4 mt-12 w-full flex justify-center md:justify-end mb-24 md:mb-20 lg:mb-20 2xl:mb-60">
        <button
          type="button"
          onClick={openModal}
          className='border-gray-400 border-2 border-solid text-gray-300 font-barlow px-12 py-3 font-bold rounded-md hover:text-gray-700 duration-300 hover:bg-gray-300'
        >
          Rules
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className='w-full flex items-center justify-between'>
                    <Dialog.Title
                      as="h3"
                      className=" font-bold leading-6 text-gray-500 text-3xl font-barlow"
                    >
                      RULES
                    </Dialog.Title>

                    <Dialog.Title
                      as='h3'
                      className='font-medium leading-6 text-gray-500 text-3xl cursor-pointer px-3 py-1 border-solid'
                      onClick={() => closeModal()}
                    >
                      <IoCloseSharp />
                    </Dialog.Title>
                  </div>
                    <img src={RuleImg} alt="" className="w-full mt-12 "/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
