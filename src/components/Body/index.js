import SelectInut from '../SelectInput';
import TextAreaInut from '../TextAreaInput';
import TextInut from '../TextInput';

function Body({ type, options }) {
  let Component;
  if (type === 'text') {
    Component = TextInut;
  } else if (type === 'textarea') {
    Component = TextAreaInut;
  } else if (type === 'select') {
    Component = SelectInut;
  }

  return <Component options={options} />;
}

export default Body;
