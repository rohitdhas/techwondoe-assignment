import Button from '../components/button';

export default {
  title: 'Button',
  component: Button
};

export const Primary = () => <Button label="Press Me" type="primary" />;
export const Secondary = () => <Button label="Press Me" type="secondary" />;
