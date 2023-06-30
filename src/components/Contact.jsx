const Contact = () => {
    return (
        <div className='bg-slate-900 text-base-content'>
            <div className="max-w-screen-lg mx-auto py-10 px-6">
                <h3 className="text-3xl text-center pb-6">Contact Me</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 custom-svg-container">
                    <div className="bg-black bg-opacity-20 rounded-lg p-4">
                        <h4 className="text-center text-xl mb-2">WhatsApp</h4>
                        <div className="flex justify-between items-center">
                            <svg width="30" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#dddddd"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.384"></g><g id="SVGRepo_iconCarrier"><path fill="#dddddd" fillRule="evenodd" d="M96 16c-44.183 0-80 35.817-80 80 0 13.12 3.163 25.517 8.771 36.455l-8.608 36.155a6.002 6.002 0 0 0 7.227 7.227l36.155-8.608C70.483 172.837 82.88 176 96 176c44.183 0 80-35.817 80-80s-35.817-80-80-80ZM28 96c0-37.555 30.445-68 68-68s68 30.445 68 68-30.445 68-68 68c-11.884 0-23.04-3.043-32.747-8.389a6.003 6.003 0 0 0-4.284-.581l-28.874 6.875 6.875-28.874a6.001 6.001 0 0 0-.581-4.284C31.043 119.039 28 107.884 28 96Zm46.023 21.977c11.975 11.974 27.942 20.007 45.753 21.919 11.776 1.263 20.224-8.439 20.224-18.517v-6.996a18.956 18.956 0 0 0-13.509-18.157l-.557-.167-.57-.112-8.022-1.58a18.958 18.958 0 0 0-15.25 2.568 42.144 42.144 0 0 1-7.027-7.027 18.958 18.958 0 0 0 2.569-15.252l-1.582-8.021-.112-.57-.167-.557A18.955 18.955 0 0 0 77.618 52H70.62c-10.077 0-19.78 8.446-18.517 20.223 1.912 17.81 9.944 33.779 21.92 45.754Zm33.652-10.179a6.955 6.955 0 0 1 6.916-1.743l8.453 1.665a6.957 6.957 0 0 1 4.956 6.663v6.996c0 3.841-3.124 6.995-6.943 6.585a63.903 63.903 0 0 1-26.887-9.232 64.594 64.594 0 0 1-11.661-9.241 64.592 64.592 0 0 1-9.241-11.661 63.917 63.917 0 0 1-9.232-26.888C63.626 67.123 66.78 64 70.62 64h6.997a6.955 6.955 0 0 1 6.66 4.957l1.667 8.451a6.956 6.956 0 0 1-1.743 6.917l-1.12 1.12a5.935 5.935 0 0 0-1.545 2.669c-.372 1.403-.204 2.921.603 4.223a54.119 54.119 0 0 0 7.745 9.777 54.102 54.102 0 0 0 9.778 7.746c1.302.806 2.819.975 4.223.603a5.94 5.94 0 0 0 2.669-1.545l1.12-1.12Z" clipRule="evenodd"></path></g></svg>
                            <a href="tel:+8801706971392"><p>+880 1706-971392</p></a>
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-20 rounded-lg p-4">
                        <h4 className="text-center text-xl mb-2">Email</h4>
                        <div className="flex justify-between items-center">
                            <svg fill="#dddddd" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 483.30 483.30" xmlSpace="preserve" stroke="#dddddd" strokeWidth="0.0048330000000000005"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1 v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5 c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z"></path> <path d="M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3 c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95 c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4 c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z"></path> </g> </g> </g></svg>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&to=aalnomanm10@gmail.com&tf=cm" target="_blank" rel="noreferrer"><p>aalnomanm10@gmail.com</p></a>
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-20 rounded-lg p-4">
                        <h4 className="text-center text-xl mb-2">Location</h4>
                        <div className="flex justify-between items-center">
                            <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" width="30px" fill="#dddddd" stroke="#dddddd"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path className="st0" d="M25,13c0,8-9,15-9,15s-9-7-9-15c0-5,4-9,9-9S25,8,25,13z"></path><circle className="st0" cx="16" cy="13" r="3"></circle> </g></svg>
                            <a href="https://www.google.com.bd/maps/place/Al+Noman/@22.229905,92.0242374,345m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x30ad3d762ba89471:0x79b74407f7760da5!2sAl+Noman!8m2!3d22.2299035!4d92.0250029!16s%2Fg%2F11lkc_3b51!3m5!1s0x30ad3d762ba89471:0x79b74407f7760da5!8m2!3d22.2299035!4d92.0250029!16s%2Fg%2F11lkc_3b51!5m1!1e1?hl=en&entry=ttu" target="_blank" rel="noreferrer"><p>Chattogram ,Bangladesh</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;