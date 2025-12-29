import GasSpringForceCurve from '@/components/visualization/GasSpringForceCurve';
import { Locale } from '@/lib/i18n/config';

export default async function VisualizationDemoPage(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params;
  const { locale } = params;

  return (
    <div className="container mx-auto py-12 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Gas Spring Force Curve Visualization</h1>
      
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Default Configuration */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Default Configuration (Standard 165mm stroke)</h2>
          <GasSpringForceCurve />
        </section>

        {/* Custom Configuration */}
        <section>
           <h2 className="text-xl font-semibold mb-4">Custom Examples</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GasSpringForceCurve 
                title="Heavy Duty (800N, 200mm)" 
                f1={800} 
                stroke={200} 
                className="shadow-md"
              />
              <GasSpringForceCurve 
                title="Light Duty (200N, 100mm)" 
                f1={200} 
                stroke={100} 
                className="shadow-md"
              />
           </div>
        </section>

      </div>
    </div>
  );
}
