"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    }

    router.refresh();
    router.push("/");
  };

  const onDelete = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    console.log(data);
    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 sm:w-1/2 w-full" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-lg text-white">
          Title
        </label>

        <input
          type="text"
          id="title"
          placeholder="Title"
          className="border bg-gray-300 p-2 mb-2 w-full"
          autoComplete="off"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description" className="font-bold text-lg text-white">
          Task description
        </label>

        <textarea
          id="description"
          rows="3"
          placeholder="Task description"
          className="order bg-gray-300 p-2 mb-2 w-full"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Create
        </button>
        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md ml-4"
            type="button"
            onClick={onDelete}
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
}

export default NewPage;
