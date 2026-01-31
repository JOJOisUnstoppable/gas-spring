/**
 * @file HowGSWork.tsx
 * @description Gas Spring 工作原理组件
 */

'use client'

import parseMarkdownBold from '@/lib/parseMarkdownBold'
import Image from 'next/image'

interface HowGSWorkProps {
  locale?: string;
  id?: string;
  mainTitle?: string;           // H2 主标题
  mainContent?: string[];         // 主要正文内容
  subTitle1?: string;           // 第一个小标题
  subContent1?: string[];         // 第一个小标题对应的正文
  imageSrc?: string;            // 图片路径
  imageAlt?: string;            // 图片alt文本
  imageCaption?: string[];        // 图片注释正文
  subTitle2?: string;           // 第二个小标题
  subContent2?: string[];         // 第二个小标题对应的正文
  frontdesc?: string[];           // 第二个小标题对应的前端描述
}

/**
 * HowGSWork Gas Spring 工作原理组件
 */
const HowGSWork = ({
  mainTitle,
  mainContent,
  subTitle1,
  subContent1,
  imageSrc,
  imageAlt,
  imageCaption,
  subTitle2,
  subContent2,
  frontdesc
}: HowGSWorkProps) => {
  return (
    <div className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            {/* H2 主标题 */}
            {mainTitle && (
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                {mainTitle}
              </h2>
            )}
            {/* 标题 下划线 */}
            {/* <div className="w-full border-b-3 border-[#0F172B]"></div> */}
            {/* 主要正文内容 */}
            {mainContent && (
              <div className="space-y-4">
                {mainContent.map((text, index) => {
                  // 判断是否为第2、3、4项内容（索引为1、2、3）
                  if (index >= 1 && index <= 3) {
                    return (
                      <ul key={index} className="list-disc pl-12 space-y-2">
                        <li className="text-xl font-medium text-foreground mt-6 mb-2">
                          {parseMarkdownBold(text)}
                        </li>
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                      {parseMarkdownBold(text)}
                    </p>
                  );
                })}
              </div>
            )}

            {/* 第一个小标题 */}
            {subTitle1 && (
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                {subTitle1}
              </h3>
            )}

            {/* 第一个小标题对应的正文 */}
            {subContent1 && (
              <div className="space-y-4">
                {Array.isArray(subContent1) ? (
                  subContent1.map((text, index) => (
                    <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                      {parseMarkdownBold(text)}
                    </p>
                  ))
                ) : (
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {parseMarkdownBold(subContent1)}
                  </p>
                )}
              </div>
            )}

            {/* 图片部分 */}
            {imageSrc && (
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full max-w-4xl relative h-96">
                  <Image
                    src={imageSrc}
                    alt={imageAlt || 'Gas Spring Work Diagram'}
                    fill={true}
                    sizes="100vw"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            )}

            {imageCaption && (
              <div className="space-y-4 bg-gray-100 p-4 rounded-lg">
                {imageCaption.map((text, index) => {
                  if (index === 0) {
                    return (
                      <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                        {parseMarkdownBold(text)}
                      </p>
                    );
                  } else {
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2 ">
                        <li className="text-muted-foreground text-lg leading-relaxed">
                          {parseMarkdownBold(text)}
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
            )}

            {frontdesc && (
              <div className="space-y-4">
                {frontdesc.map((text, index) => (
                  <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                    {parseMarkdownBold(text)}
                  </p>
                ))}
              </div>
            )}

            {/* 第二个小标题 */}
            {subTitle2 && (
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                {subTitle2}
              </h3>
            )}

            {/* 第二个小标题对应的正文 */}
            {subContent2 && (
              <div className="space-y-4">
                {Array.isArray(subContent2) ? (
                  subContent2.map((text, index) => (
                    <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                      {parseMarkdownBold(text)}
                    </p>
                  ))
                ) : (
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {parseMarkdownBold(subContent2)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowGSWork;