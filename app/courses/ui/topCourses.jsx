import Image from 'next/image';
import React from 'react';
import { courses } from '../lib/data';
import StarRating from './starRating';

export default function TopCourses() {

    return (
        <div className="bg-white px-6 md:px-12 pb-4">
            <h2 className="w-full text-xl md:text-2xl font-bold text-center mb-3">Top Courses</h2>
            <p className="text-gray-600 text-center mb-4 text-sm md:text-base leading-5 md:width-[80%] md:mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
            </p>

            {/* Courses list */}
            <div className="flex flex-wrap mr-2">
                {courses.map((course) => (
                    <div key={course.id} className="w-full md:w-1/2 lg:w-1/3">
                        <div className="shadow-card-100 p-4 rounded-lg md:m-4 xs:mb-4">

                            <Image
                                src={course.image}
                                alt={course.title}
                                width={300}
                                height={180}
                                layout="responsive"
                                className="rounded-md"
                            />
                            <div className="flex items-center my-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#0A6A56"
                                    className="w-6 h-6 mr-2">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>
                                <span className="text-gray-500">{course.plays} plays</span>
                            </div>

                            <p className="text-base font-bold">{course.title}</p>
                            <div className="mt-2 flex flex-col">
                                <div className='flex items-center'>
                                    <span className="mr-4 font-bold">${course.price}</span>
                                    <div className="flex items-center">
                                        <div className='mr-4'>
                                            {/* Placeholder for your star rating component */}
                                            <StarRating rating='4.4' />
                                        </div>
                                        <span className="text-gray-600 font-light">{course.rating} Ratings</span>
                                    </div>
                                </div>
                                <hr className='my-4' />

                                <div className="flex items-center justify-between my-4">
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="text-gray-500">
                                            {`${course.students} ${course.students > 1 ? 'Students' : 'Student'}`}
                                        </span>
                                    </div>

                                    <button className="custom-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


