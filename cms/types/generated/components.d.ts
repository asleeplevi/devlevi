import type { Schema, Attribute } from '@strapi/strapi';

export interface TestingTestComponent extends Schema.Component {
  collectionName: 'components_testing_test_components';
  info: {
    displayName: 'Test component';
    icon: 'briefcase';
  };
  attributes: {
    Category: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'testing.test-component': TestingTestComponent;
    }
  }
}
