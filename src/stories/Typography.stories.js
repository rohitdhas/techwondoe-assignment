import Text from '../components/text';

export default {
  title: 'Typography',
  component: Text
};

export const h1 = () => <Text type="h1" text="Hello World!" />;
export const h2 = () => <Text type="h2 " text="Hello World!" />;
export const p = () => <Text type="p" text="Hello World!" />;
