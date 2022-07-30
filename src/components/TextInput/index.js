import { Input } from 'antd';

function TextInut({ options }) {
  return <Input placeholder={options.placeholder} maxLength={options.max} />;
}

export default TextInut;
