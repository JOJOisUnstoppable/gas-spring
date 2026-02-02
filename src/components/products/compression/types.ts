export type CompressionDict = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  overview: {
    tabName: string;
    card: {
      title: string;
      content: {
        title: string;
        definition: string;
        coreFunction: {
          title: string;
          description: string;
        };
        applications: {
          title: string;
          items: {
            name: string;
            value: string;
          }[];
        };
      };
    };
  };
  specs: {
    card: {
      title: string;
      techSpecs: {
        title: string;
        table: {
          headers: string[];
          rows: {
            parameter: string;
            range: string;
            description: string;
          }[];
        };
      };
      selectionGuide: {
        title: string;
        items: {
          key: string;
          value?: string;
          subItems?: {
            key: string;
            value: string;
          }[];
        }[];
      };
      endFittings: {
        title: string;
        items: string[];
      };
      options: {
        title: string;
        items: string[];
      };
      connectionTypes: {
        title: string;
      };
      qualityCerts: {
        title: string;
        items: string[];
      };
    };
  };
  testing: {
    card: {
      standardConditions: {
        title: string;
        speed: {
          label: string;
          value: string;
        };
        temperature: {
          label: string;
          value: string;
        };
      };
      fourPointForce: {
        title: string;
        items: {
          point: string;
          title: string;
          description: string;
        }[];
      };
    };
  };
  cta: {
    title: string;
    desc: string[];
  };
  GasSpringForceCurve: {
    title1: string;
    title2: string;
    title3: string;
  };
  Navigation?: string[];
};
