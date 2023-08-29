import React from 'react';

export interface menuItemProps {
  key: string;
  label: string;
  children?: menuItemProps[];
}

export interface routesProps {
  path: string;
  component: React.LazyExoticComponent<React.FC<any>>;
  exact?: boolean;
  initProps?: any;
}
