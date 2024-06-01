import "@/scss/ui/input.scss";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
interface props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

interface propsArea
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}
const Inputs = (props: props) => {
  return (
    <div className="input-cont">
      <label>{props.label}</label>
      <input {...props} />
    </div>
  );
};
export const TextArea = (props: propsArea) => {
  return (
    <div className="input-cont">
      <label>{props.label}</label>
      <textarea {...props}></textarea>
    </div>
  );
};

export default Inputs;
