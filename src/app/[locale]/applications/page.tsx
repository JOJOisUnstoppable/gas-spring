import { ApplicationHero } from "@/components/applications/ApplicationHero"
import { getApplicationData } from "@/lib/applications"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { Metadata } from "next"
import { generateMetadata as generateSharedMetadata } from "@/components/shared/Metadata"
import { ApplicationGrid } from "@/components/applications/ApplicationGrid"
import { Locale } from '@/lib/i18n/config'

interface PageParams {
    locale: Locale
}

interface Props {
    params: Promise<PageParams>
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const { locale } = params;
    const dict = await getDictionary(locale)
    const { applications } = await getApplicationData(locale)
    const keywords = applications.map(app => app.title).join(', ')

    return generateSharedMetadata({
        title: dict.applications.title,
        description: dict.applications.description,
        keywords: ['gas spring applications', 'gas strut applications', keywords],
        locale,
        type: 'website',
    })
}

export default async function ApplicationsPage(props: Props) {
    const params = await props.params;
    const { locale } = params;
    const dict = await getDictionary(locale)
    const { applications, content } = await getApplicationData(locale)

    return (
        <>
            <ApplicationHero
                title={dict.applications.title}
                description={dict.applications.description}
                dict={dict}
                locale={locale}
            />
            <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="text-gray-600 max-w-2xl mx-auto prose"
                        dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                <ApplicationGrid
                    applications={applications}
                    locale={locale}
                    dict={dict}
                />
            </div>
        </>
    );
}

export async function generateStaticParams(): Promise<PageParams[]> {
    return [
        { locale: 'zh' },
        { locale: 'en' },
        { locale: 'es' },
        { locale: 'de' }
    ]
}

export const dynamic = 'force-static'
