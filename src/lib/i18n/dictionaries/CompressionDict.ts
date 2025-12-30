
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
    tabName: string;
    card: {
      title: string;
      description: string;
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
        items: string[];
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
      surfaceTreatments: {
        title: string;
        card: {
          title: string;
          items: string[];
        };
      };
      qualityCerts: {
        title: string;
        items: string[];
      };
    };
  };
  testing: {
    tabName: string;
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
};
