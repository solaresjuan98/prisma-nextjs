import { prisma } from "@/libs/prisma";
import { TaskCard } from "@/components/TaskCard";

async function loadTasks() {
  // * making a request HTTP
  // const res = await fetch('http://localhost:3000/api/tasks');
  // const data = await res.json()

  // * getting directly from database
  const tasks = await prisma.task.findMany();

  return tasks;
}

export default async function Home() {
  const tasks = await loadTasks();

  return (
    <main className="text-gray-200">
      <section className="container mx-auto">
        <h1 className="text-5xl">Tasks</h1>
        <div className="grid grid-cols-3 gap-3 mt-7">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
