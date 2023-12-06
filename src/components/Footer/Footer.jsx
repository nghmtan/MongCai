
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../assets/mc1.png'
import { Label, TextInput } from 'flowbite-react';
import { IoSend } from "react-icons/io5";
function FooterCompo() {
    return (
        <Footer container className='bg-[#162e48]' style={{ borderRadius: '0' }}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex  text-white md:grid-cols-1">
                    <div className='p-5 flex gap-36 items-center' >
                        <Footer.Brand
                            src={logo}
                            alt="Flowbite Logo"
                            style={{ width: '150px', height: '150px' }}
                        />
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="email4" className='text-white' value="Đăng ký để nhận thêm thông tin về Móng cái" />
                            </div>
                            <TextInput id="email4" type="email" rightIcon={IoSend} placeholder="youremail@gmail.com" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
                        <div className='text-white'>
                            <Footer.Title title="về chúng tôi" className='text-white' />
                            <Footer.LinkGroup col className='text-white'>
                                <Footer.Link href="#">HANU</Footer.Link>
                                <Footer.Link href="#">Móng Cái </Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="hoạt động" className='text-white' />
                            <Footer.LinkGroup col className='text-white'>
                                <Footer.Link href="#">Golf Tours</Footer.Link>
                                <Footer.Link href="#">Gói Golf</Footer.Link>
                                <Footer.Link href="#">Khách Sạn</Footer.Link>
                                <Footer.Link href="#">Quà lưu niệm</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Liên hệ" className='text-white' />
                            <Footer.LinkGroup col className='text-white'>
                                <Footer.Link href="#">Group Hanu</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="HANOI UNIVERSITY / Km 9, Nguyễn Trãi, Thanh xuân, Hà Nội (+84) 335 701 190" className='text-white' year={2023} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
                        <Footer.Icon href="#" icon={BsFacebook} className='text-white' />
                        <Footer.Icon href="#" icon={BsInstagram} className='text-white' />
                        <Footer.Icon href="#" icon={BsTwitter} className='text-white' />
                        <Footer.Icon href="#" icon={BsGithub} className='text-white' />
                        <Footer.Icon href="#" icon={BsDribbble} className='text-white' />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
export default FooterCompo