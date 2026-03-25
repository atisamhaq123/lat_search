// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Admin tutor selector functionality for lat_tutorpro.
 *
 * @package    local_lat_tutorpro
 * @copyright  2026 Zunyr Haiyydr
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

(function () {
    'use strict';
    let tutors = [

        {
            t_id: 1,
            name: "Daniela",
            avatar: "./img/tutor1.svg",
            flag: "./img/flag1.svg",
            badge: "./img/badge.svg",
            description: "Hi! I’m Daniela, an experienced English teacher with over a decade of helping students master the language. I’m passionate about creating engaging, personalized lessons that align with each student’s unique goals and learning style. My mission is to make language learning enjoyable and effective, empowering you to achieve fluency and confidence in English. I’m excited to guide you on your journey to success!",
            price: 8,
            rating: 4.7,
            reviews: 17,
            students: 30,
            lessons: 1260,
            language: "English (Native)",
            status: "online",
            is_liked: false,
        },

        {
            t_id: 2,
            name: "Robertson",
            avatar: "./img/tutor2.svg",
            flag: "./img/flag2.svg",
            badge: "./img/badge.svg",
            description: "Hi! I’m Robertson, an experienced English teacher with over a decade of helping students master the language. I’m passionate about creating engaging, personalized lessons that align with each student’s unique goals and learning style. My mission is to make language learning enjoyable and effective, empowering you to achieve fluency and confidence in English. I’m excited to guide you on your journey to success!",
            price: 9,
            rating: 4.8,
            reviews: 22,
            students: 40,
            lessons: 1500,
            language: "English, Spanish",
            status: "away",
            is_liked: false,
        },

        {
            t_id: 3,
            name: "Eleanor",
            avatar: "./img/tutor3.svg",
            flag: "./img/flag3.svg",
            badge: "./img/badge.svg",
            description: "Hi! I’m Eleanor, an experienced English teacher with over a decade of helping students master the language. I’m passionate about creating engaging, personalized lessons that align with each student’s unique goals and learning style. My mission is to make language learning enjoyable and effective, empowering you to achieve fluency and confidence in English. I’m excited to guide you on your journey to success!",
            price: 7,
            rating: 4.6,
            reviews: 12,
            students: 25,
            lessons: 900,
            language: "English (Native)",
            status: "meeting",
            is_liked: true,
        },

        {
            t_id: 4,
            name: "Alexander",
            avatar: "./img/tutor4.svg",
            flag: "./img/flag3.svg",
            badge: "./img/badge.svg",
            description: "Hi! I’m Alexander, an experienced English teacher with over a decade of helping students master the language. I’m passionate about creating engaging, personalized lessons that align with each student’s unique goals and learning style. My mission is to make language learning enjoyable and effective, empowering you to achieve fluency and confidence in English. I’m excited to guide you on your journey to success!",
            price: 7,
            rating: 4.6,
            reviews: 12,
            students: 25,
            lessons: 900,
            language: "English (Native)",
            status: "online",
            is_liked: true,
        }

    ];

    const groupsData = [
        {
            g_id: 1,
            title: "English Group Classes (Bilingual)",
            price: "$16",
            lesson: "50-min lesson",
            rating: "5.0",
            reviews: "17 reviews",
            mainTeacher: "Daniela Canelon",
            practiceTeacher: "Axley Perez",
            language: "English (Native)",
            activeStudents: "4 Active",
            maxStudents: "Max 10",
            schedule: "Mon, Wed - 8 PM EST <br> Fri - 8 PM EST",
            description: "Certified tutor and polyglot with 5 year, an experienced English teacher with over a decade of helping students master the language. I’m passionate about creating engaging, personalized lessons that align with each student’s unique goals and learning style. My mission is to make language learning enjoyable and effective, empowering you to achieve fluency and confidence in English. I’m excited to guide you on your journey to success!",
            avatar1: "tutor1.svg",
            avatar2: "tutor2.svg",
            is_liked: false,
        },
        {
            g_id: 2,
            title: "Spanish Group Classes (Bilingual)",
            price: "$32",
            lesson: "50-min lesson",
            rating: "5.0",
            reviews: "17 reviews",
            mainTeacher: "Cooper, Kristin",
            practiceTeacher: "Black, Marvin",
            language: "English (Native)",
            activeStudents: "4 Active",
            maxStudents: "Max 10",
            schedule: "Mon, Wed - 8 PM EST <br> Fri - 8 PM EST",
            description: "Certified tutor and polyglot with 5 year, an experienced English teacher with over a decade of helping students master the language. I’m passionate about creating engaging, personalized lessons that align with each student’s unique goals and learning style. My mission is to make language learning enjoyable and effective, empowering you to achieve fluency and confidence in English. I’m excited to guide you on your journey to success!",
            avatar1: "tutor3.svg",
            avatar2: "tutor4.svg",
            is_liked: true,
        },
        {
            g_id: 3,
            title: "English Group Classes (Bilingual)",
            price: "$32",
            lesson: "60-min lesson",
            rating: "5.0",
            reviews: "17 reviews",
            mainTeacher: "Axley Rosh",
            practiceTeacher: "Georgina Floyd",
            language: "English (Native)",
            activeStudents: "1 Active",
            maxStudents: "Max 10",
            schedule: "Mon, Wed - 8 PM EST <br> Fri - 8 PM EST",
            description: "Certified tutor and polyglot with 5 year, an experienced English teacher with over a decade of helping students master the language. I’m passionate about creating engaging, personalized lessons that align with each student’s unique goals and learning style. My mission is to make language learning enjoyable and effective, empowering you to achieve fluency and confidence in English. I’m excited to guide you on your journey to success!",
            avatar1: "tutor1.svg",
            avatar2: "tutor2.svg",
            is_liked: true,
        }
    ];

    $(document).ready(function () {

        initTutorsData();
        initGroupsData();
    });

    function initTutorsData() {


        let html = "";

        $.each(tutors, function (i, t) {

            html += `
                    <div class="content_box">

                    <div class="d-flex">

                    <div class="avatar_box" style="background-image: url('${t.avatar}')">
                    <div class="teacher_status ${t.status}"></div>
                    </div>

                    <div class="ml-3 w-100">

                    <div class="d-flex mt-1 mb-3">
                    <p class="heading_level_2 my-0">${t.name}</p>

                    <img class="ml-2 mt-1" src="${t.flag}" height="20" width="26">
                    <img class="ml-2" style="margin-top:2px" src="${t.badge}" height="24" width="24">

                    </div>

                    <div class="d-flex">
                    <div class="tutor_tag tag_blue">Professional</div>
                    <div class="ml-2 tutor_tag tag_pink">Super tutor</div>
                    </div>

                    <div class="d-flex align-items-center justify-content-between mt-3">

                    <div>
                    <p class="heading_level_3 my-0">$${t.price}</p>
                    <p class="small_muted_text my-0">50-min lesson</p>
                    </div>

                    <div>
                    <p class="heading_level_3 my-0 d-flex">
                    <svg class="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9776 6.91594C17.9513 6.83291 17.9012 6.75939 17.8337 6.70437C17.7662 6.64935 17.684 6.61523 17.5974 6.60619L11.7894 5.98969L9.4104 0.619688C9.2664 0.293438 8.73315 0.293438 8.58915 0.619688L6.21165 5.98969L0.402898 6.60619C0.316245 6.61546 0.234139 6.64965 0.166519 6.70463C0.0988983 6.7596 0.0486644 6.833 0.0218983 6.91594C-0.00491891 6.99917 -0.00715398 7.08838 0.0154612 7.17285C0.0380764 7.25733 0.0845815 7.33348 0.149398 7.39219L4.48815 11.3282L3.27615 17.0784C3.26239 17.1441 3.26337 17.212 3.27901 17.2772C3.29466 17.3425 3.32457 17.4035 3.36661 17.4557C3.40864 17.508 3.46175 17.5504 3.5221 17.5797C3.58246 17.609 3.64856 17.6245 3.71565 17.6252C3.79471 17.6252 3.87235 17.6043 3.94065 17.5644L9.00015 14.6274L14.0604 17.5644C14.2134 17.6537 14.4054 17.6432 14.5494 17.5382C14.6197 17.4865 14.6736 17.4156 14.7048 17.3341C14.7359 17.2526 14.7429 17.1638 14.7249 17.0784L13.5129 11.3274L17.8524 7.39144C17.9168 7.33263 17.9629 7.25652 17.9853 7.17221C18.0076 7.08789 18.0052 6.99893 17.9784 6.91594H17.9776Z" fill="#121117"/>
                                    </svg>
                    ${t.rating}</p>
                    <p class="small_muted_text my-0">${t.reviews} reviews</p>
                    </div>

                    </div>

                    </div>

                    </div>
                    <svg class="like_tutor" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M25.4795 10.6211C26.8567 10.6211 28.184 11.1784 29.2168 12.2178C30.3517 13.3598 31.0108 14.9927 31 16.6973C30.9914 18.0453 30.4527 19.5796 29.2715 21.2695C28.3589 22.5753 27.0748 23.9577 25.4385 25.374C23.011 27.4751 20.6152 28.9568 19.999 29.3271C19.3789 28.9571 16.9666 27.4753 14.5303 25.374C12.8879 23.9575 11.6041 22.5745 10.6953 21.2695C9.5181 19.5792 8.99152 18.0464 9 16.7002C9.01053 15.0559 9.59785 13.529 10.6338 12.3906L10.6348 12.3916C11.6854 11.2373 13.0639 10.6212 14.5205 10.6211C16.3801 10.6211 18.1212 11.6635 19.1396 13.3809L20 14.832L20.8604 13.3809C21.8788 11.6636 23.6199 10.6211 25.4795 10.6211Z" stroke="black" stroke-width="2"/>
                    </svg>
                    <p class="heading_level_4 hide_lines three_level_box mt-3 mb-0">
                    ${t.description}
                    </p>

                    <div class="d-flex align-items-center mt-3">
                    <svg class="mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.43728 8.2818C9.38881 8.2818 10.2128 7.9405 10.886 7.26714C11.5593 6.59392 11.9005 5.77018 11.9005 4.81854C11.9005 3.86718 11.5593 3.04335 10.8859 2.36987C10.2126 1.69674 9.3887 1.35547 8.43728 1.35547C7.48561 1.35547 6.66184 1.69674 5.98862 2.36999C5.3154 3.04323 4.97399 3.86709 4.97399 4.81854C4.97399 5.77018 5.31537 6.59404 5.98873 7.26728C6.66209 7.94042 7.48595 8.2818 8.43728 8.2818ZM14.4971 12.4121C14.4776 12.1319 14.4384 11.8262 14.3806 11.5035C14.3222 11.1783 14.2471 10.871 14.1571 10.59C14.0642 10.2996 13.9378 10.0129 13.7816 9.73808C13.6195 9.45286 13.429 9.20449 13.2153 9.00012C12.9918 8.78632 12.7183 8.61442 12.4019 8.489C12.0866 8.36431 11.7372 8.30112 11.3634 8.30112C11.2167 8.30112 11.0747 8.36133 10.8006 8.53983C10.6057 8.66673 10.4102 8.79273 10.2142 8.91784C10.0259 9.03787 9.77069 9.15031 9.45551 9.25212C9.14802 9.35162 8.83582 9.40208 8.52766 9.40208C8.21952 9.40208 7.9074 9.35162 7.59958 9.25212C7.28476 9.1504 7.02959 9.03798 6.84143 8.91795C6.62322 8.77852 6.4258 8.65127 6.25454 8.53969C5.98073 8.36122 5.83865 8.30098 5.69189 8.30098C5.31801 8.30098 4.96874 8.36428 4.65356 8.48914C4.33739 8.61431 4.06369 8.78621 3.84 9.00024C3.62643 9.20471 3.43588 9.45294 3.27395 9.73808C3.11786 10.0129 2.99149 10.2995 2.89845 10.5901C2.80858 10.8711 2.73345 11.1783 2.6751 11.5035C2.61727 11.8258 2.57801 12.1316 2.55858 12.4124C2.53925 12.695 2.52966 12.9782 2.52985 13.2615C2.52985 14.0121 2.76845 14.6197 3.23896 15.0678C3.70366 15.51 4.31852 15.7344 5.06624 15.7344H11.9897C12.7375 15.7344 13.3521 15.5101 13.8169 15.0678C14.2875 14.62 14.5261 14.0123 14.5261 13.2614C14.526 12.9716 14.5163 12.6859 14.4971 12.4121Z" fill="#4D4C5C"/>
                        </svg>
                    <p class="font-400 small_muted_text my-0">
                    ${t.students} active students • ${t.lessons} lessons
                    </p>
                    </div>

                    <div class="d-flex align-items-center mt-2">
                            <svg class="mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7295_13647)">
                                <path d="M12.8649 12.6713L12.1676 11.2769L11.4704 12.6713H12.8649Z" fill="#4D4C5C"/>
                                <path d="M15.5882 7.24503H14.8789V5.74425C14.8789 5.67424 14.8642 5.60501 14.8358 5.54103C14.8073 5.47704 14.7658 5.41973 14.7139 5.37279C14.6619 5.32585 14.6007 5.29033 14.5342 5.26851C14.4677 5.2467 14.3973 5.23908 14.3277 5.24615C14.248 5.25422 12.4623 5.45616 11.5733 7.24503H10.8458V8.34281C10.8458 9.72283 9.72301 10.8455 8.34302 10.8455H7.24525V15.588C7.24525 16.4159 7.91878 17.0894 8.74663 17.0894H15.5882C16.4161 17.0894 17.0896 16.4159 17.0896 15.588V8.74645C17.0896 7.91857 16.4161 7.24503 15.5882 7.24503ZM9.70979 13.9531L11.7196 9.93355C11.7611 9.85037 11.8251 9.78042 11.9042 9.73153C11.9833 9.68264 12.0744 9.65674 12.1674 9.65674C12.2604 9.65674 12.3515 9.68264 12.4306 9.73153C12.5097 9.78042 12.5737 9.85037 12.6152 9.93355L14.625 13.9531C14.7487 14.2004 14.6484 14.5012 14.4011 14.6248C14.1538 14.7485 13.8531 14.6483 13.7294 14.4009L13.3653 13.6728H10.9695L10.6055 14.4009C10.5177 14.5764 10.3409 14.6778 10.1573 14.6778C10.082 14.6778 10.0056 14.6608 9.93376 14.6248C9.68639 14.5012 9.58616 14.2004 9.70979 13.9531ZM5.3966 4.2168H4.44775C4.5097 4.71283 4.66848 5.12989 4.92219 5.46594C5.17587 5.12989 5.33465 4.71283 5.3966 4.2168Z" fill="#4D4C5C"/>
                                <path d="M8.34301 9.8444C9.17089 9.8444 9.8444 9.17086 9.8444 8.34302V1.50142C9.8444 0.673543 9.17086 4.16428e-06 8.34301 4.16428e-06H1.50142C0.673538 4.16428e-06 0 0.673543 0 1.50142V8.34302C0 9.17089 0.673538 9.8444 1.50138 9.8444H2.21074V11.3452C2.21074 11.4152 2.22542 11.4844 2.25384 11.5484C2.28226 11.6124 2.32378 11.6697 2.37573 11.7166C2.42767 11.7636 2.48888 11.7991 2.55541 11.8209C2.62193 11.8427 2.69229 11.8504 2.76195 11.8433C2.84165 11.8352 4.62732 11.6333 5.51635 9.8444H8.34301ZM5.18904 6.97181C5.0978 6.92305 5.00877 6.87026 4.92221 6.81359C4.83566 6.87026 4.74663 6.92305 4.65539 6.97181C3.80111 7.42742 2.94833 7.43266 2.91245 7.43266C2.63594 7.43266 2.41177 7.20849 2.41177 6.93199C2.41177 6.65548 2.63594 6.43131 2.91245 6.43131C2.91685 6.43128 3.53458 6.4223 4.14924 6.10648C3.79757 5.65614 3.5204 5.04508 3.44032 4.217H2.91241C2.63591 4.217 2.41174 3.99284 2.41174 3.71633C2.41174 3.43983 2.63591 3.21566 2.91241 3.21566H4.42154V2.91242C4.42154 2.63591 4.64571 2.41174 4.92221 2.41174C5.19872 2.41174 5.42289 2.63591 5.42289 2.91242V3.21566H6.93198C7.20849 3.21566 7.43265 3.43983 7.43265 3.71633C7.43265 3.99284 7.20849 4.217 6.93198 4.217H6.40414C6.32403 5.04508 6.04689 5.65614 5.69522 6.10648C6.30985 6.4223 6.92768 6.43125 6.93405 6.43131C7.21056 6.43131 7.43369 6.65548 7.43369 6.93199C7.43369 7.20849 7.20849 7.43266 6.93198 7.43266C6.8961 7.43266 6.04332 7.42745 5.18904 6.97181ZM12.2054 2.86449C12.3031 2.96225 12.4313 3.01115 12.5594 3.01115C12.6875 3.01115 12.8157 2.96228 12.9134 2.86449C13.1089 2.66896 13.1089 2.35196 12.9134 2.15644L12.7697 2.01271C14.6124 2.12189 16.0783 3.65542 16.0783 5.52513C16.0783 5.80163 16.3024 6.0258 16.5789 6.0258C16.8555 6.0258 17.0796 5.80163 17.0796 5.52513C17.0796 3.09944 15.1589 1.11417 12.7585 1.00953L12.9134 0.854686C13.1089 0.659157 13.1089 0.342164 12.9134 0.146635C12.7179 -0.0488615 12.4009 -0.0488949 12.2053 0.146635L11.2005 1.15155C11.005 1.34708 11.005 1.66407 11.2005 1.8596L12.2054 2.86449ZM4.87428 14.2151C4.67879 14.0196 4.36176 14.0196 4.16623 14.2151C3.9707 14.4107 3.9707 14.7277 4.16623 14.9232L4.30996 15.0669C2.46718 14.9578 1.00135 13.4242 1.00135 11.5545C1.00135 11.278 0.777178 11.0538 0.500673 11.0538C0.224168 11.0538 0 11.278 0 11.5545C0 13.9802 1.92068 15.9655 4.32107 16.0701L4.16623 16.2249C3.9707 16.4205 3.9707 16.7375 4.16623 16.933C4.264 17.0308 4.39214 17.0796 4.52024 17.0796C4.64835 17.0796 4.77652 17.0308 4.87425 16.933L5.87913 15.9281C6.07466 15.7325 6.07466 15.4156 5.87913 15.22L4.87428 14.2151Z" fill="#4D4C5C"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_7295_13647">
                                    <rect width="17.0896" height="17.0896" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    <p class="font-400 small_muted_text my-0">
                    Speaks • ${t.language}
                    </p>
                    </div>

                    </div>
                    `;

        });

        $("#find_tutors").html(html);
    }
      function filterTutorData() {


        let html = "";

        $.each(tutors, function (i, t) {
            if (t.is_liked === true) {
            html += `
                    <div class="content_box">

                    <div class="d-flex">

                    <div class="avatar_box" style="background-image: url('${t.avatar}')">
                    <div class="teacher_status ${t.status}"></div>
                    </div>

                    <div class="ml-3 w-100">

                    <div class="d-flex mt-1 mb-3">
                    <p class="heading_level_2 my-0">${t.name}</p>

                    <img class="ml-2 mt-1" src="${t.flag}" height="20" width="26">
                    <img class="ml-2" style="margin-top:2px" src="${t.badge}" height="24" width="24">

                    </div>

                    <div class="d-flex">
                    <div class="tutor_tag tag_blue">Professional</div>
                    <div class="ml-2 tutor_tag tag_pink">Super tutor</div>
                    </div>

                    <div class="d-flex align-items-center justify-content-between mt-3">

                    <div>
                    <p class="heading_level_3 my-0">$${t.price}</p>
                    <p class="small_muted_text my-0">50-min lesson</p>
                    </div>

                    <div>
                    <p class="heading_level_3 my-0 d-flex">
                    <svg class="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9776 6.91594C17.9513 6.83291 17.9012 6.75939 17.8337 6.70437C17.7662 6.64935 17.684 6.61523 17.5974 6.60619L11.7894 5.98969L9.4104 0.619688C9.2664 0.293438 8.73315 0.293438 8.58915 0.619688L6.21165 5.98969L0.402898 6.60619C0.316245 6.61546 0.234139 6.64965 0.166519 6.70463C0.0988983 6.7596 0.0486644 6.833 0.0218983 6.91594C-0.00491891 6.99917 -0.00715398 7.08838 0.0154612 7.17285C0.0380764 7.25733 0.0845815 7.33348 0.149398 7.39219L4.48815 11.3282L3.27615 17.0784C3.26239 17.1441 3.26337 17.212 3.27901 17.2772C3.29466 17.3425 3.32457 17.4035 3.36661 17.4557C3.40864 17.508 3.46175 17.5504 3.5221 17.5797C3.58246 17.609 3.64856 17.6245 3.71565 17.6252C3.79471 17.6252 3.87235 17.6043 3.94065 17.5644L9.00015 14.6274L14.0604 17.5644C14.2134 17.6537 14.4054 17.6432 14.5494 17.5382C14.6197 17.4865 14.6736 17.4156 14.7048 17.3341C14.7359 17.2526 14.7429 17.1638 14.7249 17.0784L13.5129 11.3274L17.8524 7.39144C17.9168 7.33263 17.9629 7.25652 17.9853 7.17221C18.0076 7.08789 18.0052 6.99893 17.9784 6.91594H17.9776Z" fill="#121117"/>
                                    </svg>
                    ${t.rating}</p>
                    <p class="small_muted_text my-0">${t.reviews} reviews</p>
                    </div>

                    </div>

                    </div>

                    </div>
                    <svg class="like_tutor" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M25.4795 10.6211C26.8567 10.6211 28.184 11.1784 29.2168 12.2178C30.3517 13.3598 31.0108 14.9927 31 16.6973C30.9914 18.0453 30.4527 19.5796 29.2715 21.2695C28.3589 22.5753 27.0748 23.9577 25.4385 25.374C23.011 27.4751 20.6152 28.9568 19.999 29.3271C19.3789 28.9571 16.9666 27.4753 14.5303 25.374C12.8879 23.9575 11.6041 22.5745 10.6953 21.2695C9.5181 19.5792 8.99152 18.0464 9 16.7002C9.01053 15.0559 9.59785 13.529 10.6338 12.3906L10.6348 12.3916C11.6854 11.2373 13.0639 10.6212 14.5205 10.6211C16.3801 10.6211 18.1212 11.6635 19.1396 13.3809L20 14.832L20.8604 13.3809C21.8788 11.6636 23.6199 10.6211 25.4795 10.6211Z" stroke="black" stroke-width="2"/>
                    </svg>
                    <p class="heading_level_4 hide_lines three_level_box mt-3 mb-0">
                    ${t.description}
                    </p>

                    <div class="d-flex align-items-center mt-3">
                    <svg class="mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.43728 8.2818C9.38881 8.2818 10.2128 7.9405 10.886 7.26714C11.5593 6.59392 11.9005 5.77018 11.9005 4.81854C11.9005 3.86718 11.5593 3.04335 10.8859 2.36987C10.2126 1.69674 9.3887 1.35547 8.43728 1.35547C7.48561 1.35547 6.66184 1.69674 5.98862 2.36999C5.3154 3.04323 4.97399 3.86709 4.97399 4.81854C4.97399 5.77018 5.31537 6.59404 5.98873 7.26728C6.66209 7.94042 7.48595 8.2818 8.43728 8.2818ZM14.4971 12.4121C14.4776 12.1319 14.4384 11.8262 14.3806 11.5035C14.3222 11.1783 14.2471 10.871 14.1571 10.59C14.0642 10.2996 13.9378 10.0129 13.7816 9.73808C13.6195 9.45286 13.429 9.20449 13.2153 9.00012C12.9918 8.78632 12.7183 8.61442 12.4019 8.489C12.0866 8.36431 11.7372 8.30112 11.3634 8.30112C11.2167 8.30112 11.0747 8.36133 10.8006 8.53983C10.6057 8.66673 10.4102 8.79273 10.2142 8.91784C10.0259 9.03787 9.77069 9.15031 9.45551 9.25212C9.14802 9.35162 8.83582 9.40208 8.52766 9.40208C8.21952 9.40208 7.9074 9.35162 7.59958 9.25212C7.28476 9.1504 7.02959 9.03798 6.84143 8.91795C6.62322 8.77852 6.4258 8.65127 6.25454 8.53969C5.98073 8.36122 5.83865 8.30098 5.69189 8.30098C5.31801 8.30098 4.96874 8.36428 4.65356 8.48914C4.33739 8.61431 4.06369 8.78621 3.84 9.00024C3.62643 9.20471 3.43588 9.45294 3.27395 9.73808C3.11786 10.0129 2.99149 10.2995 2.89845 10.5901C2.80858 10.8711 2.73345 11.1783 2.6751 11.5035C2.61727 11.8258 2.57801 12.1316 2.55858 12.4124C2.53925 12.695 2.52966 12.9782 2.52985 13.2615C2.52985 14.0121 2.76845 14.6197 3.23896 15.0678C3.70366 15.51 4.31852 15.7344 5.06624 15.7344H11.9897C12.7375 15.7344 13.3521 15.5101 13.8169 15.0678C14.2875 14.62 14.5261 14.0123 14.5261 13.2614C14.526 12.9716 14.5163 12.6859 14.4971 12.4121Z" fill="#4D4C5C"/>
                        </svg>
                    <p class="font-400 small_muted_text my-0">
                    ${t.students} active students • ${t.lessons} lessons
                    </p>
                    </div>

                    <div class="d-flex align-items-center mt-2">
                            <svg class="mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7295_13647)">
                                <path d="M12.8649 12.6713L12.1676 11.2769L11.4704 12.6713H12.8649Z" fill="#4D4C5C"/>
                                <path d="M15.5882 7.24503H14.8789V5.74425C14.8789 5.67424 14.8642 5.60501 14.8358 5.54103C14.8073 5.47704 14.7658 5.41973 14.7139 5.37279C14.6619 5.32585 14.6007 5.29033 14.5342 5.26851C14.4677 5.2467 14.3973 5.23908 14.3277 5.24615C14.248 5.25422 12.4623 5.45616 11.5733 7.24503H10.8458V8.34281C10.8458 9.72283 9.72301 10.8455 8.34302 10.8455H7.24525V15.588C7.24525 16.4159 7.91878 17.0894 8.74663 17.0894H15.5882C16.4161 17.0894 17.0896 16.4159 17.0896 15.588V8.74645C17.0896 7.91857 16.4161 7.24503 15.5882 7.24503ZM9.70979 13.9531L11.7196 9.93355C11.7611 9.85037 11.8251 9.78042 11.9042 9.73153C11.9833 9.68264 12.0744 9.65674 12.1674 9.65674C12.2604 9.65674 12.3515 9.68264 12.4306 9.73153C12.5097 9.78042 12.5737 9.85037 12.6152 9.93355L14.625 13.9531C14.7487 14.2004 14.6484 14.5012 14.4011 14.6248C14.1538 14.7485 13.8531 14.6483 13.7294 14.4009L13.3653 13.6728H10.9695L10.6055 14.4009C10.5177 14.5764 10.3409 14.6778 10.1573 14.6778C10.082 14.6778 10.0056 14.6608 9.93376 14.6248C9.68639 14.5012 9.58616 14.2004 9.70979 13.9531ZM5.3966 4.2168H4.44775C4.5097 4.71283 4.66848 5.12989 4.92219 5.46594C5.17587 5.12989 5.33465 4.71283 5.3966 4.2168Z" fill="#4D4C5C"/>
                                <path d="M8.34301 9.8444C9.17089 9.8444 9.8444 9.17086 9.8444 8.34302V1.50142C9.8444 0.673543 9.17086 4.16428e-06 8.34301 4.16428e-06H1.50142C0.673538 4.16428e-06 0 0.673543 0 1.50142V8.34302C0 9.17089 0.673538 9.8444 1.50138 9.8444H2.21074V11.3452C2.21074 11.4152 2.22542 11.4844 2.25384 11.5484C2.28226 11.6124 2.32378 11.6697 2.37573 11.7166C2.42767 11.7636 2.48888 11.7991 2.55541 11.8209C2.62193 11.8427 2.69229 11.8504 2.76195 11.8433C2.84165 11.8352 4.62732 11.6333 5.51635 9.8444H8.34301ZM5.18904 6.97181C5.0978 6.92305 5.00877 6.87026 4.92221 6.81359C4.83566 6.87026 4.74663 6.92305 4.65539 6.97181C3.80111 7.42742 2.94833 7.43266 2.91245 7.43266C2.63594 7.43266 2.41177 7.20849 2.41177 6.93199C2.41177 6.65548 2.63594 6.43131 2.91245 6.43131C2.91685 6.43128 3.53458 6.4223 4.14924 6.10648C3.79757 5.65614 3.5204 5.04508 3.44032 4.217H2.91241C2.63591 4.217 2.41174 3.99284 2.41174 3.71633C2.41174 3.43983 2.63591 3.21566 2.91241 3.21566H4.42154V2.91242C4.42154 2.63591 4.64571 2.41174 4.92221 2.41174C5.19872 2.41174 5.42289 2.63591 5.42289 2.91242V3.21566H6.93198C7.20849 3.21566 7.43265 3.43983 7.43265 3.71633C7.43265 3.99284 7.20849 4.217 6.93198 4.217H6.40414C6.32403 5.04508 6.04689 5.65614 5.69522 6.10648C6.30985 6.4223 6.92768 6.43125 6.93405 6.43131C7.21056 6.43131 7.43369 6.65548 7.43369 6.93199C7.43369 7.20849 7.20849 7.43266 6.93198 7.43266C6.8961 7.43266 6.04332 7.42745 5.18904 6.97181ZM12.2054 2.86449C12.3031 2.96225 12.4313 3.01115 12.5594 3.01115C12.6875 3.01115 12.8157 2.96228 12.9134 2.86449C13.1089 2.66896 13.1089 2.35196 12.9134 2.15644L12.7697 2.01271C14.6124 2.12189 16.0783 3.65542 16.0783 5.52513C16.0783 5.80163 16.3024 6.0258 16.5789 6.0258C16.8555 6.0258 17.0796 5.80163 17.0796 5.52513C17.0796 3.09944 15.1589 1.11417 12.7585 1.00953L12.9134 0.854686C13.1089 0.659157 13.1089 0.342164 12.9134 0.146635C12.7179 -0.0488615 12.4009 -0.0488949 12.2053 0.146635L11.2005 1.15155C11.005 1.34708 11.005 1.66407 11.2005 1.8596L12.2054 2.86449ZM4.87428 14.2151C4.67879 14.0196 4.36176 14.0196 4.16623 14.2151C3.9707 14.4107 3.9707 14.7277 4.16623 14.9232L4.30996 15.0669C2.46718 14.9578 1.00135 13.4242 1.00135 11.5545C1.00135 11.278 0.777178 11.0538 0.500673 11.0538C0.224168 11.0538 0 11.278 0 11.5545C0 13.9802 1.92068 15.9655 4.32107 16.0701L4.16623 16.2249C3.9707 16.4205 3.9707 16.7375 4.16623 16.933C4.264 17.0308 4.39214 17.0796 4.52024 17.0796C4.64835 17.0796 4.77652 17.0308 4.87425 16.933L5.87913 15.9281C6.07466 15.7325 6.07466 15.4156 5.87913 15.22L4.87428 14.2151Z" fill="#4D4C5C"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_7295_13647">
                                    <rect width="17.0896" height="17.0896" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    <p class="font-400 small_muted_text my-0">
                    Speaks • ${t.language}
                    </p>
                    </div>

                    </div>
                    `;
            }
        });

        $("#fav_tutors").html(html);
    }

    $(".fav_list, #fav_tutors_open a").on("click", function () {
        filterTutorData();
    });

    function initGroupsData() {


        let groupcard = "";
        $.each(groupsData, function (index, group) {
            groupcard += `
                        <div class="content_box">
                        <div class="d-flex">

                            <div class="avatar_box" style="background-image: url('./img/${group.avatar1}')">
                            <div class="switch_btn_box d-flex align-items-center">
                                <div class="switch_tutor_btn mr-1 d-flex align-items-center justify-content-center active mb-0" data-image="${group.avatar1}">1</div>
                                <div class="switch_tutor_btn d-flex align-items-center justify-content-center mb-0" data-image="${group.avatar2}">2</div>
                            </div>
                            </div>

                        <div class="ml-3 w-100">

                        <div class="d-flex mt-1 mb-3">
                            <p class="heading_level_2 my-0">${group.title}</p>
                        </div>

                        <div class="d-flex">
                            <div class="tutor_tag tag_blue">Professional</div>
                            <div class="ml-2 tutor_tag tag_pink">Super tutor</div>
                        </div>

                        <div class="d-flex align-items-center justify-content-between mt-3">

                            <div>
                            <p class="heading_level_3 my-0">${group.price}</p>
                            <p class="small_muted_text my-0">${group.lesson}</p>
                            </div>

                            <div>
                            <p class="heading_level_3 my-0 d-flex">
                                <!-- SVG KEPT SAME -->
                                <svg class="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9776 6.91594C17.9513 6.83291 17.9012 6.75939 17.8337 6.70437C17.7662 6.64935 17.684 6.61523 17.5974 6.60619L11.7894 5.98969L9.4104 0.619688C9.2664 0.293438 8.73315 0.293438 8.58915 0.619688L6.21165 5.98969L0.402898 6.60619C0.316245 6.61546 0.234139 6.64965 0.166519 6.70463C0.0988983 6.7596 0.0486644 6.833 0.0218983 6.91594C-0.00491891 6.99917 -0.00715398 7.08838 0.0154612 7.17285C0.0380764 7.25733 0.0845815 7.33348 0.149398 7.39219L4.48815 11.3282L3.27615 17.0784C3.26239 17.1441 3.26337 17.212 3.27901 17.2772C3.29466 17.3425 3.32457 17.4035 3.36661 17.4557C3.40864 17.508 3.46175 17.5504 3.5221 17.5797C3.58246 17.609 3.64856 17.6245 3.71565 17.6252C3.79471 17.6252 3.87235 17.6043 3.94065 17.5644L9.00015 14.6274L14.0604 17.5644C14.2134 17.6537 14.4054 17.6432 14.5494 17.5382C14.6197 17.4865 14.6736 17.4156 14.7048 17.3341C14.7359 17.2526 14.7429 17.1638 14.7249 17.0784L13.5129 11.3274L17.8524 7.39144C17.9168 7.33263 17.9629 7.25652 17.9853 7.17221C18.0076 7.08789 18.0052 6.99893 17.9784 6.91594H17.9776Z" fill="#121117"></path>
                                </svg>
                                ${group.rating}
                            </p>
                            <p class="small_muted_text my-0">${group.reviews}</p>
                            </div>

                        </div>
                        </div>
                    </div>

                    <div class="row mx-n2 mt-3">

                        <div class="col-6 px-1">
                        <div class="border_box">
                            <p class="extra_small_muted_text mb-1">Main Teacher:</p>
                            <p class="small_text mb-1 group_tutor active">${group.mainTeacher}</p>
                            <p class="extra_small_muted_text mb-0">${group.language}</p>
                        </div>
                        </div>

                        <div class="col-6 px-1">
                        <div class="border_box">
                            <p class="extra_small_muted_text mb-1">Practice Teacher:</p>
                            <p class="small_text mb-1 group_tutor">${group.practiceTeacher}</p>
                            <p class="extra_small_muted_text mb-0">${group.language}</p>
                        </div>
                        </div>

                        <div class="col-6 px-1 mt-2">
                        <div class="border_box">
                            <p class="extra_small_muted_text mb-1">Students</p>
                            <p class="small_text mb-1">${group.activeStudents}</p>
                            <p class="extra_small_muted_text mb-0">${group.maxStudents}</p>
                        </div>
                        </div>

                        <div class="col-6 px-1 mt-2">
                        <div class="border_box">
                            <p class="extra_small_muted_text mb-1">Schedule:</p>
                            <p class="small_text mb-1">${group.schedule}</p>
                        </div>
                        </div>

                    </div>

                    <p class="heading_level_4 mt-3 mb-0 two_level_box hide_lines">${group.description}</p>

                    </div>
                    `;


        });
        $("#find_groups").html(groupcard);

    }

    function filterGroupData() {
        let groupcard = "";
        $.each(groupsData, function (index, group) {
            if (group.is_liked === true) {
                groupcard += `
                        <div class="content_box">
                        <div class="d-flex">

                            <div class="avatar_box" style="background-image: url('./img/${group.avatar1}')">
                            <div class="switch_btn_box d-flex align-items-center">
                                <div class="switch_tutor_btn mr-1 d-flex align-items-center justify-content-center active mb-0" data-image="${group.avatar1}">1</div>
                                <div class="switch_tutor_btn d-flex align-items-center justify-content-center mb-0" data-image="${group.avatar2}">2</div>
                            </div>
                            </div>

                        <div class="ml-3 w-100">

                        <div class="d-flex mt-1 mb-3">
                            <p class="heading_level_2 my-0">${group.title}</p>
                        </div>

                        <div class="d-flex">
                            <div class="tutor_tag tag_blue">Professional</div>
                            <div class="ml-2 tutor_tag tag_pink">Super tutor</div>
                        </div>

                        <div class="d-flex align-items-center justify-content-between mt-3">

                            <div>
                            <p class="heading_level_3 my-0">${group.price}</p>
                            <p class="small_muted_text my-0">${group.lesson}</p>
                            </div>

                            <div>
                            <p class="heading_level_3 my-0 d-flex">
                                <!-- SVG KEPT SAME -->
                                <svg class="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9776 6.91594C17.9513 6.83291 17.9012 6.75939 17.8337 6.70437C17.7662 6.64935 17.684 6.61523 17.5974 6.60619L11.7894 5.98969L9.4104 0.619688C9.2664 0.293438 8.73315 0.293438 8.58915 0.619688L6.21165 5.98969L0.402898 6.60619C0.316245 6.61546 0.234139 6.64965 0.166519 6.70463C0.0988983 6.7596 0.0486644 6.833 0.0218983 6.91594C-0.00491891 6.99917 -0.00715398 7.08838 0.0154612 7.17285C0.0380764 7.25733 0.0845815 7.33348 0.149398 7.39219L4.48815 11.3282L3.27615 17.0784C3.26239 17.1441 3.26337 17.212 3.27901 17.2772C3.29466 17.3425 3.32457 17.4035 3.36661 17.4557C3.40864 17.508 3.46175 17.5504 3.5221 17.5797C3.58246 17.609 3.64856 17.6245 3.71565 17.6252C3.79471 17.6252 3.87235 17.6043 3.94065 17.5644L9.00015 14.6274L14.0604 17.5644C14.2134 17.6537 14.4054 17.6432 14.5494 17.5382C14.6197 17.4865 14.6736 17.4156 14.7048 17.3341C14.7359 17.2526 14.7429 17.1638 14.7249 17.0784L13.5129 11.3274L17.8524 7.39144C17.9168 7.33263 17.9629 7.25652 17.9853 7.17221C18.0076 7.08789 18.0052 6.99893 17.9784 6.91594H17.9776Z" fill="#121117"></path>
                                </svg>
                                ${group.rating}
                            </p>
                            <p class="small_muted_text my-0">${group.reviews}</p>
                            </div>

                        </div>
                        </div>
                    </div>

                    <div class="row mx-n2 mt-3">

                        <div class="col-6 px-1">
                        <div class="border_box">
                            <p class="extra_small_muted_text mb-1">Main Teacher:</p>
                            <p class="small_text mb-1 group_tutor active">${group.mainTeacher}</p>
                            <p class="extra_small_muted_text mb-0">${group.language}</p>
                        </div>
                        </div>

                        <div class="col-6 px-1">
                        <div class="border_box">
                            <p class="extra_small_muted_text mb-1">Practice Teacher:</p>
                            <p class="small_text mb-1 group_tutor">${group.practiceTeacher}</p>
                            <p class="extra_small_muted_text mb-0">${group.language}</p>
                        </div>
                        </div>

                        <div class="col-6 px-1 mt-2">
                        <div class="border_box">
                            <p class="extra_small_muted_text mb-1">Students</p>
                            <p class="small_text mb-1">${group.activeStudents}</p>
                            <p class="extra_small_muted_text mb-0">${group.maxStudents}</p>
                        </div>
                        </div>

                        <div class="col-6 px-1 mt-2">
                        <div class="border_box">
                            <p class="extra_small_muted_text mb-1">Schedule:</p>
                            <p class="small_text mb-1">${group.schedule}</p>
                        </div>
                        </div>

                    </div>

                    <p class="heading_level_4 mt-3 mb-0 two_level_box hide_lines">${group.description}</p>

                    </div>
                    `;
            }

        });
        $("#fav_groups").html(groupcard);
    }

    $("#fav_groups_open a").on("click", function () {
        filterGroupData();
    });

    $(function () {

        const totalPages = 10;
        const maxVisible = 3;
        const $pagination = $("#pagination");

        const getPage = () =>
            +new URLSearchParams(location.search).get("page") || 1;

        const setPage = page => {
            history.pushState({}, "", `?page=${page}`);
            render(page);
        };

        function render(page) {
            let html = [];

            const start = Math.max(1, page - 1);
            const end = Math.min(totalPages, start + maxVisible - 1);

            html.push(`<a class="first ${page === 1 ? 'disabled' : ''}" data-p="${page - 1}"><svg class="min-w-[40px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9141 20.9932L27.9141 20.9932L27.9141 18.9932L15.9141 18.9932L21.2071 13.7002L19.7931 12.2862L12.0861 19.9932L19.7931 27.7002L21.2071 26.2862L15.9141 20.9932Z" fill="#121117"></path>
            </svg></a>`);

            if (start > 1) {
                html.push(`<a data-p="1">1</a>`);
                if (start > 2) html.push(`<span class="ellipsis">...</span>`);
            }

            for (let i = start; i <= end; i++) {
                html.push(`<a data-p="${i}" class="${i === page ? 'active' : ''}">${i}</a>`);
            }

            if (end < totalPages) {
                if (end < totalPages - 1) html.push(`<span class="ellipsis">...</span>`);
                html.push(`<a data-p="${totalPages}">${totalPages}</a>`);
            }

            html.push(`<a class="last ${page === totalPages ? 'disabled' : ''}" data-p="${page + 1}"><svg style="transform: rotate(180deg)" class="min-w-[40px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9141 20.9932L27.9141 20.9932L27.9141 18.9932L15.9141 18.9932L21.2071 13.7002L19.7931 12.2862L12.0861 19.9932L19.7931 27.7002L21.2071 26.2862L15.9141 20.9932Z" fill="#121117"></path>
            </svg></a>`);

            $pagination.html(html.join(""));
        }

        // Init
        render(getPage());

        // Events
        $pagination.on("click", "a", function () {
            const page = +$(this).data("p");
            if (page) setPage(page);
        });

    });

    // change number of groups/tutors text
    $("#find_tutors_open, #find_groups_open").on("click", function () {

        if ($(this).attr("id") === "find_tutors_open") {
            $("#tab_title").text("540 Tutors");
        } else {
            $("#tab_title").text("540 Groups");
        }

    });

    // switch tutors 1,2
    $(document).on("click", ".switch_tutor_btn", function () {

        let parentBox = $(this).closest(".content_box");

        // safer index (only among buttons)
        let index = $(this).closest(".switch_btn_box")
            .find(".switch_tutor_btn")
            .index(this);

        // ✅ Toggle active button
        parentBox.find(".switch_tutor_btn").removeClass("active");
        $(this).addClass("active");

        // ✅ Toggle teacher name (same index)
        parentBox.find(".group_tutor").removeClass("active");
        parentBox.find(".group_tutor").eq(index).addClass("active");

        // ✅ Change avatar (KEEPING your background-image logic)
        let img = $(this).data("image");

        parentBox.find(".avatar_box").css(
            "background-image",
            "url('./img/" + img + "')"
        );

    });

    // attach checked
    const checkIcon = `
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7856 0.262748C14.0817 0.601228 14.0696 1.13682 13.7585 1.45903L4.77084 10.7667C4.61735 10.9257 4.4109 11.0096 4.19922 10.9991C3.98753 10.9886 3.78894 10.8847 3.64936 10.7112L0.192573 6.41534C-0.0903678 6.06372 -0.0577269 5.52914 0.265478 5.22133C0.588684 4.91351 1.08006 4.94902 1.363 5.30064L4.28566 8.93271L12.686 0.233283C12.9971 -0.0889236 13.4894 -0.0757317 13.7856 0.262748Z" fill="black"/>
        </svg>
    `;

    $(".sortModal .modal-body ul li").click(function () {

        // Remove SVG from all
        $(".modal-body ul li svg").remove();

        // Add SVG to clicked one
        if ($(this).hasClass("lesson")) return;
        $(this).append(checkIcon);

    });
    // attach checked

    // filter check uncheck code

    $(document).on("click", ".filtercheckbox", function () {
        const $btn = $(this);

        // Check if already active
        if ($btn.hasClass("active")) {
            // Remove tick
            $btn.removeClass("active");
            $btn.find("svg").remove();
        } else {
            // Add tick
            $btn.addClass("active");

            const tickSVG = `
            <svg width="12" height="12" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 5.5L8.5 13L4 9" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

            $btn.html(tickSVG);
        }
    });
    // filter check uncheck code

    // page-wrapper

    // When filter is opened
    $('.filter').on('click', function () {
        $('#page-wrapper').css('overflow', 'hidden');
    });

    // When filter is closed
    $('.close-main-filters').on('click', function () {
        $('#page-wrapper').css('overflow', '');
        // or use 'auto' if you prefer:
        // $('#page-wrapper').css('overflow', 'auto');
    });
    // page-wrapper
    //  slider logic
    /* ====== STATE ====== */
    const find_groups_details_state = {
        priceCfg: { min: 1, max: 40, step: 1 },
        priceRange: { min: 1, max: 40 }
    };

    /* ====== ELEMENTS ====== */
    const $priceRead = $('#price_readout');
    const $priceTrack = $('#price_track');
    const $priceFill = $('#price_fill');
    const $thumbMin = $('#price_thumb_min');
    const $thumbMax = $('#price_thumb_max');

    /* ====== UTILS ====== */
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    function valueToPercent(val) {
        const { min, max } = find_groups_details_state.priceCfg;
        return ((val - min) / (max - min)) * 100;
    }

    function percentToValue(pct) {
        const { min, max, step } = find_groups_details_state.priceCfg;
        if (!isFinite(pct)) return min;
        const raw = min + (pct / 100) * (max - min);
        return Math.round(raw / step) * step;
    }

    /* ====== UI UPDATE ====== */
    function updatePriceUI() {
        let { min, max } = find_groups_details_state.priceRange;
        const { max: cfgMax } = find_groups_details_state.priceCfg;

        if (!isFinite(min) || !isFinite(max)) return;
        if (min > max) [min, max] = [max, min];

        const leftPct = valueToPercent(min);
        const rightPct = valueToPercent(max);

        $thumbMin.css('left', `${leftPct}%`);
        $thumbMax.css('left', `${rightPct}%`);

        $priceFill.css({
            left: `${Math.min(leftPct, rightPct)}%`,
            width: `${Math.abs(rightPct - leftPct)}%`
        });

        const maxLabel = max === cfgMax ? `${max}+` : max;

        $priceRead.text(`US$${min} – US$${maxLabel}`);
    }

    /* ====== DRAG HANDLER ====== */
    function bindThumb($thumb, type) {
        $thumb.on('pointerdown', function (e) {
            e.preventDefault();
            this.setPointerCapture(e.pointerId);

            const rect = $priceTrack[0].getBoundingClientRect();
            if (!rect.width) return;

            const move = ev => {
                const x = clamp(ev.clientX, rect.left, rect.right);
                const pct = ((x - rect.left) / rect.width) * 100;
                let val = percentToValue(pct);

                if (type === 'min') {
                    val = clamp(val,
                        find_groups_details_state.priceCfg.min,
                        find_groups_details_state.priceRange.max
                    );
                    find_groups_details_state.priceRange.min = val;
                } else {
                    val = clamp(val,
                        find_groups_details_state.priceRange.min,
                        find_groups_details_state.priceCfg.max
                    );
                    find_groups_details_state.priceRange.max = val;
                }

                updatePriceUI();
            };

            const up = () => {
                $(window).off('pointermove', move);
                $(window).off('pointerup', up);
            };

            $(window).on('pointermove', move);
            $(window).on('pointerup', up);
        });
    }

    bindThumb($thumbMin, 'min');
    bindThumb($thumbMax, 'max');

})();
