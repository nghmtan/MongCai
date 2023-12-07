import React from 'react'
import { Card } from 'flowbite-react';
const PriceCard = ({ plan, price, type }) => {
    return (
        <Card className='w-[250px] xl:w-[350px]'>
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan}</h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">

                <span className="text-2xl xl:text-4xl font-extrabold tracking-tight">{price}</span>
                <span className="text-xl  xl:text-2xl font-semibold">VND</span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/Gói</span>
            </div>
            <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                    <svg
                        className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Sân tập 3800m2</span>
                </li>
                <li className="flex space-x-3">
                    <svg
                        className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        Dụng cụ chơi golf
                    </span>
                </li>
                <li className="flex space-x-3">
                    <svg
                        className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Cung cấp xe di chuyển</span>
                </li>
                <li className={`flex space-x-3 ${type === 1 && 'line-through decoration-gray-500'}`}>
                    <svg
                        className={`h-5 w-5 shrink-0 ${type === 1 ? 'text-gray-400 dark:text-gray-500' : 'text-cyan-600 dark:text-cyan-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className={`text-base font-normal leading-tight text-gray-500 ${type !== 1 && 'dark:text-gray-400'} `}>Huấn luyện viên chuyên nghiệp</span>
                </li>
                <li className={`flex space-x-3 ${type === 1 && 'line-through decoration-gray-500'}`}>
                    <svg
                        className={`h-5 w-5 shrink-0 ${type === 1 ? 'text-gray-400 dark:text-gray-500' : 'text-cyan-600 dark:text-cyan-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className={`text-base font-normal leading-tight text-gray-500 ${type !== 1 && 'dark:text-gray-400'} `}>Trải nghiệm buổi tập 3D</span>
                </li>
                <li className={`flex space-x-3 ${type !== 3 && 'line-through decoration-gray-500'}`}>
                    <svg
                        className={`h-5 w-5 shrink-0 ${type !== 3 ? 'text-gray-400 dark:text-gray-500' : 'text-cyan-600 dark:text-cyan-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className={`text-base font-normal leading-tight text-gray-500 ${(type === 3) && 'dark:text-gray-400'} `}>Huấn luyện viên chuyên nghiệp</span>
                </li>
                <li className={`flex space-x-3 ${type !== 3 && 'line-through decoration-gray-500'}`}>
                    <svg
                        className={`h-5 w-5 shrink-0 ${type !== 3 ? 'text-gray-400 dark:text-gray-500' : 'text-cyan-600 dark:text-cyan-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className={`text-base font-normal leading-tight text-gray-500 ${(type === 3) && 'dark:text-gray-400'} `}>Đồ lưu niệm giới hạn</span>
                </li>
            </ul>
            <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            >
                Chọn gói
            </button>
        </Card>
    )
}

export default PriceCard