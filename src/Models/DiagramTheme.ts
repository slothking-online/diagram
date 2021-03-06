export interface DiagramTheme {
  snappingGridSize?: number;
  autoBeuatify?: boolean;
  fontFamily: string;
  node: {
    width: number;
    height: number;
    nameSize: number;
    typeSize: number;
    typeYGap: number;
    maxCharacters: number;
    radius: number;
    padding: number;
    spacing: {
      x: number;
      y: number;
    };
    options: {
      fontSize: number;
      yGap: number;
    };
  };
  graph: {
    spacing: {
      x: number;
      y: number;
    };
  };
  minimap: {
    alpha: number;
    hoverAlpha: number;
    size: number;
    margin: number;
  };
  description: {
    width: number;
    fontSize: number;
    lineHeight: number;
    paddingHorizontal: number;
    paddingVertical: number;
    triangleWidth: number;
    triangleHeight: number;
    triangleDistance: number;
    radius: number;
    placeholder?: string;
  };
  link: {
    strokeWidth: number;
    cornerRadius: number;
    defaultCenterPoint: number;
  };
  help: {
    lineHeight: number;
    padding: number;
    title: {
      text: number;
    };
    text: number;
  };
  colors: {
    background: string;
    minimap: {
      background: string;
      visibleArea: string;
      borders: string;
      node: string;
    };
    help: {
      background: string;
      title: string;
      text: string;
    };
    description: {
      background: string;
      text: string;
    };
    node: {
      background: string;
      selected: string;
      name: string;
      type: string;
      types?: Record<string, string>;
      backgrounds?: Record<string, string>;
      options: Record<string, string>;
      hover: {
        type: string;
      };
      menuOpened: string;
    };
    link: {
      main: string;
      active: string;
      hover: string;
    };
  };
}
