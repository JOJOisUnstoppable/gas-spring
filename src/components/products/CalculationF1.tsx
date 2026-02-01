'use client'
import parseMarkdownBold from '@/lib/parseMarkdownBold';

interface CalculationF1Props {
    // 第一个中标题（H3）
    midTitle1: string;
    // 第一个中标题对应正文
    midDesc1: string[];

    // 第二个中标题对应正文
    midDesc2: string[];
}

const CalculationF1 = ({
    midTitle1,
    midDesc1,
    midDesc2,
}: CalculationF1Props) => {


    return (
        <div className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
            <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <div className="container px-4 md:px-6">
                    {/* 第一个中标题 */}
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                        {midTitle1}
                    </h3>
                    {/* 第一个中标题正文 */}
                    <div className="space-y-4">
                        {midDesc1.map((item, index) => {
                            // 判断是否为小标题（第二个元素）
                            if (index === 1) {
                                return (
                                    <h4 key={index} className="text-xl font-medium text-foreground mt-6 mb-2">
                                        {parseMarkdownBold(item)}
                                    </h4>
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
                    {/* 第二个中标题正文 */}
                    <div className="space-y-4">
                        {Array.isArray(midDesc2) ? (
                            midDesc2.map((desc, index) => (
                                <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                                    {parseMarkdownBold(desc)}
                                </p>
                            ))
                        ) : (
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {parseMarkdownBold(midDesc2)}
                            </p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CalculationF1