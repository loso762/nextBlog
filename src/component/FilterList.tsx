import {type} from "os";

const filter = ["All posts", "my story", "frontend", "backend", "javascript"];

type Props = {
  changeCategory: (category: string) => void;
  selected: string;
};

function FilterList({changeCategory, selected}: Props) {
  return (
    <ul className="fixed top-24 right-40">
      <h3 className="text-2xl font-bold underline mb-2">Category</h3>
      {filter.map((sub) => {
        return (
          <li
            key={sub}
            className={`${selected == sub && "text-sky-500 font-bold"} cursor-pointer hover:text-sky-300`}
            onClick={() => changeCategory(sub)}>
            {sub}
          </li>
        );
      })}
    </ul>
  );
}

export default FilterList;
