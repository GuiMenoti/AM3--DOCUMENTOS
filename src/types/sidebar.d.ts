declare module 'sidebar' {
  export type sidebarControllerModelProps = {
    title: string;
    items: Array<itemsProps>;
  };

  export type itemsProps = {
    selected: boolean;
    name: string;
    path: string | any;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
      muiName: string;
    };
    subItems?: Array<subItemsProps>;
  };

  export type subItemsProps = {
    selected: boolean;
    name: string;
    path: string | any;
  };
}
