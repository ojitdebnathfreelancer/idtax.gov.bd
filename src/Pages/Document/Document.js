import React from "react";
import { BiWorld } from "react-icons/bi";
import scanner from "../../Assets/scanner.png";
import signature from "../../Assets/signature.jpg";

const Document = () => {
   return (
      <div className="border border-[#4b8df8] rounded w-[97%] mx-auto my-8">
         {/*------top header--------  */}
         <div className="h-10 bg-blue flex items-center">
            <h5 className="text-gray-100 inline-flex items-center ml-2">
               <BiWorld size={23} className="mr-2" />
               ভূমি উন্নয়ন কর পরিশোধ রসিদ
            </h5>
         </div>

         <div className="w-[97%] mx-auto">
            {/*------bottom header--------  */}
            <div className=" my-4 text-gray">
               <div className="flex justify-between items-center text-[13px]">
                  <div className="text-center ">
                     <p>বাংলাদেশ ফরম নং ১০৭৭</p>
                     <p>(সংশোধিত)</p>
                  </div>
                  <div className="text-end">
                     <p>(পরিশিষ্ট: ৩৮)</p>
                     <p>ক্রমিক নং 545422010440</p>
                  </div>
               </div>
            </div>

            {/*------Form-------  */}

            <div className="min-w-[100%] mx-auto text-gray text-[13px] my-6">
               <div className="text-[13px] flex justify-center items-center text-center mb-3 ">
                  <div>
                     <p>ভূমি উন্নয়ন কর পরিশোধ রসিদ</p>
                     <p>(অনুচ্ছেদ ৩৯২ দ্রষ্টব্য)</p>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-3 my-1.5">
                     <p>সিটি কর্পোরেশন /পৌর /ইউনিয়ন ভূমি অফিসের নাম : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-2 px-3">
                        পৌর ভূমি অফিস
                     </p>
                  </div>
                  <div className="grid grid-cols-2 my-1.5">
                     <div className="grid grid-cols-6">
                        <p className="col-span-2">মৌজার ও জে. এল. নং: </p>
                        <p className="border-dotted border-b border-gray-800 col-span-4 px-3">
                           মাদারীপুর-১১৪
                        </p>
                     </div>
                     <div className="grid grid-cols-6">
                        <p className="col-span-2">উপজেলা / থানা : </p>
                        <p className="border-dotted border-b border-gray-800 col-span-4 px-3">
                           মাদারীপুর (সদর)
                        </p>
                     </div>
                  </div>
                  <div className="grid grid-cols-3 my-1.5">
                     <div className="grid grid-cols-6">
                        <p className="col-span-1">জেলা : </p>
                        <p className="border-dotted border-b border-gray-800 col-span-5 px-3">
                           মাদারীপুর
                        </p>
                     </div>
                     <div className="grid grid-cols-6 col-span-2">
                        <p className="">মালিকের নাম : </p>
                        <p className="border-dotted border-b border-gray-800 col-span-5 px-3">
                           হাজী আমিন উদ্দিন জমাদ্দার
                        </p>
                     </div>
                  </div>
                  <div className="grid grid-cols-5">
                     <p>২ নং রেজিস্টার অনুযায়ী হোল্ডিং নম্বার : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-4 px-3">
                        153
                     </p>
                  </div>
                  <div className="grid grid-cols-12 my-1.5">
                     <p>জমির শ্রেণী : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-11 px-3">
                        নাল ( কৃষি২ ) , বাড়ী ( আবাসিক )
                     </p>
                  </div>
                  <div className="grid grid-cols-12 my-1.5">
                     <p>খতিয়ান নং : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-11 px-3">
                        ১১০
                     </p>
                  </div>
                  <div className="grid grid-cols-12 my-1.5">
                     <p>দাগ নং : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-11 px-3">
                        ২৮৫৭, ২৮৭২
                     </p>
                  </div>
                  <div className="grid grid-cols-12 my-1.5">
                     <p className="col-span-2">জমির পরিমাণ (শতক) : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-10 px-3">
                        ১০.৩৮ , ১২.৫
                     </p>
                  </div>
               </div>
            </div>

            {/*------table-------  */}

            <div class="min-w-[100%] mx-auto">
               <div class="w-full mb-8 overflow-hidden">
                  <div class="w-full overflow-x-auto">
                     <table class="w-full">
                        <thead>
                           <tr class="text-md font-semibold tracking-wide border text-left text-gray uppercase border-b hover:bg-[#f5f5f5] ">
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-end  ">
                                 আদায়ের বিবরণ
                              </th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                           </tr>
                        </thead>

                        <tbody class="bg-white text-gray text-[13px]">
                           <tr class="text-center hover:bg-[#f5f5f5] font-semibold">
                              <td class="px-4 py-2 border">
                                 <p>তিন বৎসরের ঊর্ধ্বের বকেয়া</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>গত তিন বৎসরের বকেয়া</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>বকেয়ার সুদ ও ক্ষতিপূরণ</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>হাল দাবি</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>মোট দাবি</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>মোট আদায়</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>মোট বকেয়া</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>মন্তব্য</p>
                              </td>
                           </tr>
                        </tbody>
                        <tbody class="bg-white text-gray text-[13px]">
                           <tr class="text-center hover:bg-[#f5f5f5]">
                              <td class="px-4 py-2 border">
                                 <p>৪,৪৩২</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>৮৪৬</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>৫,৫৮৩</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>২৮২</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>১১,১৪৩</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>১১,১৪৩</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>০</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>০</p>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

            {/*------botttom section -------  */}
            <div className="min-w-[100%] mx-auto text-gray text-[13px] my-4 ">
               <div className="grid grid-cols-12">
                  <div className="col-span-6">
                     <p className="border-dotted border-b border-gray-800 col-span-10 px-3">
                        সর্বমোট (কথায়): এগার হাজার এক শত তেতাল্লিশ টাকা মাত্র ।
                     </p>
                     <p className="py-1">
                        নোট: সর্বশেষ কর পরিশোধের সাল - ১৩৮৪ থেকে ১৪২৯
                     </p>
                     <p className="py-1">
                        প্রদানকারির নাম : তানিয়া আক্তার সুমি,রুনু বেগম
                     </p>
                     <div className="flex items-center">
                        <p>তারিখ :</p>
                        <div className="ml-2">
                           <p className="px-1">১৬ পৌষ ১৪২৯</p>
                           <p className="border-t inline-block border-gray-800 px-1">
                              ৩১ ডিসেম্বর, ২০২২
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-span-1 mt-3">
                     <img className="h-20 w-20 ml-3" src={scanner} alt="" />
                  </div>
                  <div className="col-span-5 text-end mt-5">
                     <p className="border-dotted border-t border-gray-800">
                        আদায়কারীর নাম ও স্বাক্ষর
                     </p>
                     <p>৩১/১২/২০২২</p>
                     <div className="flex justify-end">
                        <img className="w-20" src={signature} alt="" />
                     </div>
                     <p>মোঃ আলী আকবর চৌধুরী</p>
                     <p>ইউনিয়ন ভূমি সহকারী কর্মকর্তা ,</p>
                     <p>পৌর ভূমি অফিস ,মাদারীপুর (সদর),মাদারীপু</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Document;
