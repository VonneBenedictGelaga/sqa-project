import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

function Tasklist() {
  const tasks = [
    {
      id: "26fpQ22UuDtkg64WJc7U",
      status: false,
      title: "edited Title",
      description: "desc...",
      userId: "Jt77IbfnnItJ5IVgJZXA",
    },
    {
      id: "aPHU0FqdrAN7gYu0zrWP",
      description: "desc...",
      title: "newest",
      userId: "Jt77IbfnnItJ5IVgJZXA",
      status: false,
    },
  ];

  return (
    <ul className="px-4 pb-4">
      {tasks &&
        tasks.map((task) => (
          <li className="mt-2 p-2" key={task.id}>
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  id={task.title}
                  name={task.title}
                  type="checkbox"
                  className="h-4 w-4 rounded"
                />
                <label htmlFor={task.title} className="ml-2 block">
                  <span className="text-lg font-medium ">{task.title}</span>
                  <span className="text-sm font-light text-gray-500 mx-2">
                    {task.description}
                  </span>
                </label>
              </div>
              <div className="flex gap-4">
                <PencilSquareIcon width={24} className="cursor-pointer hover:text-yellow-400"/>
                <TrashIcon width={24} className="cursor-pointer hover:text-red-400"/>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Tasklist;
