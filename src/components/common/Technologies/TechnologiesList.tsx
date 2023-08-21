interface TechnologiesProps {
  list: string[]; 
}

const Techoligies: React.FC<TechnologiesProps> = ({ list }) => {
  return <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
         {list.map(item => <li key={item} className="mr-1.5 mt-2">
       <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
         {item}
       </div>
     </li>
    )}
</ul>
}

export default Techoligies