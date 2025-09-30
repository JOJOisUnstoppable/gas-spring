import React from 'react';
import Image from 'next/image';
import parseMarkdownBold from '@/lib/parseMarkdownBold';

interface HowtoChooseGSProps {
  dict: {
    products?: {
      'gas-spring'?: {
        howChooseGS?: {
          title?: string;
          description?: string;
          howItWork?: {
            title?: string;
            list?: string[];
          };
          table?: string[];
        };
      };
    };
    [key: string]: any;
  };
  imageSrc: string;
  imageAlt: string;
}

const HowtoChooseGS = function HowtoChooseGS(props: HowtoChooseGSProps) {
  const { dict, imageSrc, imageAlt } = props;

  const howChoose = dict.products?.['gas-spring']?.howChooseGS;
  const description = howChoose?.description;
  const howItWork = howChoose?.howItWork;
  const howItWorkTitle = howItWork?.title;
  const howItWorkList = howItWork?.list ?? [];
  const table = howChoose?.table ?? [];

  return (
    <section className="max-w-7xl mx-auto w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          {/* 标题 */}
          <h2 className="text-3xl font-bold text-left text-foreground">
            {howChoose?.title}
          </h2>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
          </div>
          {/* F1 计算实例 */}
          <div className="space-y-4">
            {/* 左图右文部分 */}
            <div className="flex flex-col md:flex-row  h-auto items-center gap-x-8 bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
              {/* 左图 部分 */}
              <div className="md:w-1/3 ">
                <img
                  src={imageSrc}
                  alt={imageAlt || 'Calculation F1'}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              {/* 右文 部分 */}
              <div className="md:w-2/3 w-full text-white">
                <div className="leading-relaxed">
                  {table.map((item, index) => (
                    <div key={index} className="pb-2 mb-2 border-b border-dashed border-gray-500">
                      <p className="text-xl leading-relaxed">
                        {parseMarkdownBold(item)}
                      </p>
                    </div>
                  ))}
                </div>
                {/* 新增的表格部分 */}
                <div className="mt-8 grid grid-cols-2 border border-gray-600 rounded-lg divide-x divide-y divide-gray-600">
                  {Array.from({ length: 6 }).map((_, rowIndex) => (
                    <>
                      <div key={`text-${rowIndex}`} className="p-4 flex items-center">
                        <p className="text-lg">
                          {rowIndex === 5 ? "F1=KGL / bn" : table[rowIndex + 3]}
                        </p>
                      </div>
                      <div key={`input-${rowIndex}`} className="p-4 flex items-center">
                        <input
                          type="text"
                          className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder={``}
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Body Text */}
          <div className="space-y-6">
            {howItWorkTitle && (
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                {howItWorkTitle}
              </h3>
            )}

            {howItWorkList.length > 0 && (
              <div className="space-y-4">
                {howItWorkList.map((item, index) => {
                  // 判断是否为小标题（第一个和第七个元素）
                  if (index === 0 || index === 6) {
                    return (
                      <h4 key={index} className="text-xl font-medium text-foreground mt-6 mb-2">
                        {parseMarkdownBold(item)}
                      </h4>
                    );
                  } else if (index === 1 || index === 2 || index === 3 || index === 4 || index === 5) {
                    return (
                      <ul className="list-disc pl-12 space-y-2">
                        <li key={index} className=" text-xl font-medium text-foreground mt-6 mb-2">
                          {item}
                        </li>
                      </ul>

                    );
                  }
                  return (
                    <div key={index} className="ml-6">
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {parseMarkdownBold(item)}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowtoChooseGS;