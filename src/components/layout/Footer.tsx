import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Directory */}
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="font-semibold text-base text-gray-900 mb-3">Institution</h2>
            <ul className="space-y-2">
              <li><Link href="https://www.shanghaitech.edu.cn/" className="hover:underline">ShanghaiTech University</Link></li>
              <li><Link href="https://bme.shanghaitech.edu.cn" className="hover:underline">School of Biomedical Engineering</Link></li>
              {/* <li><Link href="/research/projects" className="hover:underline">Projects</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base text-gray-900 mb-3">Other Team</h3>
            <ul className="space-y-2">
              <li><Link href="https://idea.bme.shanghaitech.edu.cn/14445/list.htm" className="hover:underline">IDEA Lab</Link></li>
              <li><Link href="https://shanghaitech-impact.github.io/" className="hover:underline">IMPACT Lab</Link></li>
              <li><Link href="https://qianwang.space/" className="hover:underline">MIIL</Link></li>
            </ul>
          </div>
          <div className="flex justify-end">

          <div className="w-full max-w-[2600px]">
            <Image 
              src="/images/footer/footer.png"
              alt="Lab logo"
              width={300}
              height={90}
              className="object-contain"
            />
          </div>
        </div>
      </div>

        {/* Legal Footer */}
        <div className="border-t border-gray-300 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-2 md:mb-0">CopyRight © 2025 ShanghaiTech CardioVision Lab</p>
            {/* <div className="flex flex-wrap gap-x-6">
              <Link href="https://www.shanghaitech.edu.cn/" className="hover:underline">ShanghaiTech University</Link>
              <Link href="https://bme.shanghaitech.edu.cn/" className="hover:underline">School of Biomedical Engineering</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}