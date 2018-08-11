// @flow

export type Node =
  | {
      type: string,
      props: Object,
      children: Array<Node>,
    }
  | string;

export type Element = Object;

export type Props = Object;

export type Value = any;

export type Step = {
  type: StepType,
  value: any,
};

export type StepType =
  | 'update'
  | 'setProp'
  | 'removeProp'
  | 'updateProp'
  | 'addEventListeners';
