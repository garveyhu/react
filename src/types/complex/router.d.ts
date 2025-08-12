export interface Meta {
  title?: string;
  auth?: boolean;
}

export interface RouteItem {
  path?: string;
  index?: boolean;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  children?: RouteItem[];
  meta?: Meta;
}
