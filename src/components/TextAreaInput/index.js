import { Input } from 'antd';

const { TextArea } = Input;

function TextAreaInut({ options }) {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
}

export default TextAreaInut;
