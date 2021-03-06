import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function footer() {
  return (
    <footer className={`relative bg-[#00A85A] pt-24 text-body`}>
      <div
        className={` bg-[#C1DE76] shadow-[0_25px_60px_-18px_rgba(193,222,118,0.9)]  lg:flex sm:w-[90%]  lg:w-[80%] md:w-[90%] md:mx-auto absolute -top-32 sm:left-5 lg:left-[10%] pt-8 pb-10 tracking-wider  rounded-xl `}
      >
        <div
          className={`${styles.cover_div} sm:ml-[1.6rem] md:left-[5%] relative sm:block md:flex justify-between  sm:w-[80%] lg:w-[90%]  xxlg:px-20 `}
        >
          <div className="md:pt-6 sm:w-100  md:w-[68%]">
            <h1
              className={`font-semibold text-[44px] md:text-[38px] lg:text-[44px] text-left font-body ${styles.get_text}`}
            >
              Get the <br className="sm:block md:block lg:hidden" /> Wakanda App
            </h1>
            <p
              className={`lg:text-[16px] md:text-[10px] sm:text-[15px] font-body ${styles.enjoy_text} `}
            >
              Enjoy alot more awesome features on the Wakanda Mobile App
            </p>
          </div>

          <div className=" sm:hidden md:block sm:top:16 md:right-24 lg:w-[30%] sm:w-100 ">
            <div className="my-auto md:pt-6 lg:pt-0">
              <div>
                <Image
                  src="/GETAPPSTORE.svg"
                  alt="Wakanda"
                  width={180}
                  height={65}
                />
              </div>
              <div>
                <Image
                  src="/GetgooglePlay.svg"
                  alt="Wakanda"
                  width={180}
                  height={65}
                />
              </div>
            </div>
          </div>
          <div className=" sm:block md:hidden lg:hidden sm:top:16 md:right-24 lg:w-[30%] sm:w-100 ">
            <div className="my-auto md:pt-6 lg:pt-0">
              <div>
                <Image
                  src="/GETAPPSTORE.svg"
                  alt="Wakanda"
                  width={280}
                  height={95}
                />
              </div>
              <div>
                <Image
                  src="/GetgooglePlay.svg"
                  alt="Wakanda"
                  width={280}
                  height={95}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 bg-[#00A85A]text-body">
        <div>
          <div
            className={`
         mt-8 col-span-3  sm:row-span-12 sm:col-span-12 sm:w-100 lg:col-span-3 md:col-span-3 lg:w-25 sm:pl-[5%]
                `}
          >
            <Image src="/Group-706.svg" alt="Wakanda" width={200} height={50} />
          </div>
        </div>
        <div>
          <h6 className={styles.contact_header}> LINKS </h6>
          <h6 className="text-white"> About Us </h6>
          <h6 className="text-white"> Our Offers </h6>
          <h6 className="text-white"> Pricing </h6>
          <h6 className="text-white"> FAQs </h6>
        </div>
        <div>
          <h6 className={styles.contact_header}> CONTACTS: </h6>
          <div className="flex flex-col text-white">
            <div className={` ${styles.contact_div1}`}>
              <span className="mr-2">
                <Image
                  src="/location-2.svg"
                  alt="Wakanda"
                  width={30}
                  height={15}
                />
              </span>

              <span>42 Montgomery Rd, Yaba, Lagos.</span>
            </div>
            <div className={` ${styles.contact_div2}`}>
              <span className="mr-2">
                <Image
                  src="/mail-outline.svg"
                  alt="Wakanda"
                  width={30}
                  height={15}
                />
              </span>
              <span>
                <span>Christian@african-founders.com</span>
                <br />
                <span className="lg:ml-[2.5rem] sm:ml-[2.5rem] ">
                  abiodun@african-founders.com
                </span>
              </span>
            </div>
            <div className={` ${styles.contact_div3}`}>
              <span className="mr-2">
                <Image src="/call.svg" alt="Wakanda" width={30} height={15} />
              </span>
              <span>08064289402</span>
            </div>
            <div
              className={` ${styles.contact_div4} sm:mt-5 lg:mt-5  lg:mb-[100px]`}
            >
              <span className="mr-2">
                <Image
                  src="/Facebook.svg"
                  alt="Wakanda"
                  width={60}
                  height={30}
                />
              </span>
              <span className="mr-2">
                <Image
                  className={`m-none`}
                  src="/instgram.svg"
                  alt="Wakanda"
                  width={60}
                  height={30}

                  // width={10}
                  // height={15}
                />
                {/* <Image
                                            className={``}
                                            src="/instgram.svg"
                                            alt="Wakanda"
                                            width={50}
                                            height={25}
                                        /> */}
              </span>
              <span className="mr-2">
                <Image
                  src="/Twitter.svg"
                  alt="Wakanda"
                  width={60}
                  height={30}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-1 bg-[#A9D046] text-xs h-[40px] ">
        <div className="mt-[10px]">
          <span className="my-7">
            Made with
            <span>
              <Image
                src="/Red Heart.svg"
                alt="Wakanda"
                width={25}
                height={12}
              />
            </span>
            by African Founders{" "}
          </span>
        </div>
      </div>
    </footer>
    // <footer className={`relative bg-[#00A85A] pt-24 text-body `}>
    //   <div
    //     className={` bg-[#C1DE76] shadow-[0_25px_60px_-18px_rgba(193,222,118,0.9)]  lg:flex sm:w-[90%]  lg:w-[80%] absolute -top-32 sm:left-5 lg:left-40 pt-8 pb-10 tracking-wider  rounded-xl `}
    //   >
    //     <div
    //       className={` sm:block md:flex justify-between  sm:w-[80%]  lg:px-20`}
    //     >
    //       <div className="pt-6 ">
    //         <h1 className="font-semibold text-[44px] text-left font-body">
    //           Get the Wakanda App
    //         </h1>
    //         <p className="lg:text-[16px] md:text-[10px] sm:text-[15px] font-body  ">
    //           Enjoy alot more awesome features on the Wakanda Mobile App
    //         </p>
    //       </div>

    //       <div className="lg:absolute sm:top:16 md:right-24">
    //         <div>
    //           <Image
    //             src="/GETAPPSTORE.svg"
    //             alt="Wakanda"
    //             width={180}
    //             height={65}
    //           />
    //         </div>
    //         <div>
    //           <Image
    //             src="/GetgooglePlay.svg"
    //             alt="Wakanda"
    //             width={180}
    //             height={65}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className={` ${styles.footer_content}`}>
    //     <div
    //       className={`flex flex-row-12 p-2 mb-2 w-100 sm:block md:flex lg:flex lg:pt-[15% !important] ${styles.foot_detail_container} sm:pt-[45% !important] `}
    //     >
    //       <div
    //         className={`
    //      mt-8 col-span-3  sm:row-span-12 sm:col-span-12 sm:w-100 lg:col-span-3 md:col-span-3 lg:w-25 sm:pl-[5%]
    //             `}
    //       >
    //         <Image src="/Group-706.svg" alt="Wakanda" width={200} height={50} />
    //       </div>
    //       <div
    //         className={`col-span-4 sm:col-span-12 w-35 sm:block ${styles.div_two}`}
    //       >
    //         <div className={`grid grid-row-5 ${styles.navlink_container}`}>
    //           <div className="row-span-1 p-2 ">
    //             <Link
    //               href={"#"}
    //               style={{ textDecoration: "none" }}
    //               className="text-link"
    //               id={styles.lik}
    //             >
    //               <a
    //                 href=""
    //                 active
    //                 className={` ${styles.text_link} ${styles.first_link} text-[#A9D046] `}
    //               >
    //                 {" "}
    //                 LINKS
    //               </a>
    //             </Link>
    //           </div>
    //           <div className="row-span-1 p-2 ">
    //             <Link href="/About">
    //               <a href="" className={` ${styles.text_link} `}>
    //                 {" "}
    //                 About Us
    //               </a>
    //             </Link>
    //           </div>
    //           <div className="row-span-1 p-2">
    //             <Link href={"#"}>
    //               <a href="" className={` ${styles.text_link} `}>
    //                 {" "}
    //                 Our Offers
    //               </a>
    //             </Link>
    //           </div>
    //           <div className="row-span-2 p-2 ">
    //             <Link href={"#"}>
    //               <a href="" className={` ${styles.text_link} `}>
    //                 {" "}
    //                 Pricing
    //               </a>
    //             </Link>
    //           </div>
    //           <div className="row-span-1 p-2">
    //             <Link href={"#"}>
    //               <a href="" className={` ${styles.text_link} `}>
    //                 {" "}
    //                 FAQs
    //               </a>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={`col-span-5 w-40 ${styles.div_three}`}>
    //         <div className=" lg:mt-[10px]">
    //           <div>
    //             <h6 className={styles.contact_header}> CONTACTS: </h6>
    //           </div>

    //           <div className="flex flex-col text-white">
    //             <div className={` ${styles.contact_div1}`}>
    //               <span className="mr-2">
    //                 <Image
    //                   src="/location-2.svg"
    //                   alt="Wakanda"
    //                   width={30}
    //                   height={15}
    //                 />
    //               </span>

    //               <span>42 Montgomery Rd, Yaba, Lagos.</span>
    //             </div>
    //             <div className={` ${styles.contact_div2}`}>
    //               <span className="mr-2">
    //                 <Image
    //                   src="/mail-outline.svg"
    //                   alt="Wakanda"
    //                   width={30}
    //                   height={15}
    //                 />
    //               </span>
    //               <span>
    //                 <span>Christian@african-founders.com</span>
    //                 <br />
    //                 <span className="lg:ml-[2.5rem] sm:ml-[2.5rem] ">
    //                   abiodun@african-founders.com
    //                 </span>
    //               </span>
    //             </div>
    //             <div className={` ${styles.contact_div3}`}>
    //               <span className="mr-2">
    //                 <Image
    //                   src="/call.svg"
    //                   alt="Wakanda"
    //                   width={30}
    //                   height={15}
    //                 />
    //               </span>
    //               <span>08064289402</span>
    //             </div>
    //             <div
    //               className={` ${styles.contact_div4} sm:mt-5 lg:mt-5  lg:mb-[100px]`}
    //             >
    //               <span className="mr-2">
    //                 <Image
    //                   src="/Facebook.svg"
    //                   alt="Wakanda"
    //                   width={60}
    //                   height={30}
    //                 />
    //               </span>
    //               <span className="mr-2">
    //                 <Image
    //                   className={`m-none`}
    //                   src="/instgram.svg"
    //                   alt="Wakanda"
    //                   width={60}
    //                   height={30}

    //                   // width={10}
    //                   // height={15}
    //                 />
    //                 {/* <Image
    //                                         className={``}
    //                                         src="/instgram.svg"
    //                                         alt="Wakanda"
    //                                         width={50}
    //                                         height={25}
    //                                     /> */}
    //               </span>
    //               <span className="mr-2">
    //                 <Image
    //                   src="/Twitter.svg"
    //                   alt="Wakanda"
    //                   width={60}
    //                   height={30}
    //                 />
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="text-center p-1 bg-[#A9D046] text-xs h-[40px] ">
    //     <div className="mt-[10px]">
    //       <span className="my-7">
    //         Made with
    //         <span>
    //           <Image
    //             src="/Red Heart.svg"
    //             alt="Wakanda"
    //             width={25}
    //             height={12}
    //           />
    //         </span>
    //         by African Founders{" "}
    //       </span>
    //     </div>
    //   </div>
    // </footer>
  );
}
