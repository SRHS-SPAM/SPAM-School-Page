
interface IconCompProps {
  icon: React.JSX.Element;
  value: number;
}

const IconComp = ({icon, value}:IconCompProps) => {
  return (
    <div className="flex gap-2 h-full items-center">
      {icon}
      {value} {/*아, 이것도 쉼표 나눠야지*/}
    </div>
  )
}

export default IconComp;