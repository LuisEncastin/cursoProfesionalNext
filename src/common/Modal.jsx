import { Fragment, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/solid';

export default function Modal({ open, setOpen, children }) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <div className="backupModalContainer">
        <div className="backupModal" onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-15 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="w-full flex items-center justify-end bg-gray-50 px-4 py-1 sm:px-6 sm:flex sm:flex-row-reverse" style={{ width: '100%', justifyContent: 'end' }}>
                  <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setOpen(false)} ref={cancelButtonRef} />
                </div>
                <div className="bg-white  pb-4 sm:p-1 sm:pb-2">
                  <div className="sm:flex sm:items-start">{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
}
