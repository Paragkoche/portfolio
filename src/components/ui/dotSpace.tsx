import "@/scss/ui/dotSpace.scss";
const dotSpace = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="dot-space" {...props}>
      {props.children}
    </div>
  );
};

export default dotSpace;
