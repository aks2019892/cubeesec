import React, { useEffect, useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

interface Blog {
  _id?: string;
  title: string;
  subtitles: string[];
  content: string;
}

const AdminPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState('');
  const [subtitles, setSubtitles] = useState<string[]>(['']);
  const [contents, setContents] = useState<string[]>(['']);

  const fetchBlogs = () => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(setBlogs);
  };

  useEffect(fetchBlogs, []);

  const addSubtitleField = () => {
    setSubtitles([...subtitles, '']);
    setContents([...contents, '']);
  };

  const handleSubtitleChange = (i: number, value: string) => {
    const updated = [...subtitles];
    updated[i] = value;
    setSubtitles(updated);
  };

  const handleContentChange = (i: number, value: string) => {
    const updated = [...contents];
    updated[i] = value;
    setContents(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const content = subtitles.map((sub, i) => `${sub}\n${contents[i]}`).join('\n\n');
    const newBlog = { title, subtitles, content };

    const res = await fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    });

    if (res.ok) {
      fetchBlogs();
      setTitle('');
      setSubtitles(['']);
      setContents(['']);
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: 'DELETE',
    });
    fetchBlogs();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">🛠 Admin Panel</h1>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg mb-6 shadow-md space-y-2">
        <input
          className="w-full p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {subtitles.map((sub, i) => (
          <div key={i} className="space-y-1">
            <input
              className="w-full p-2 border rounded"
              placeholder={`Subtitle ${i + 1}`}
              value={sub}
              onChange={(e) => handleSubtitleChange(i, e.target.value)}
            />
            <textarea
              className="w-full p-2 border rounded"
              rows={3}
              placeholder={`Content for Subtitle ${i + 1}`}
              value={contents[i] || ''}
              onChange={(e) => handleContentChange(i, e.target.value)}
            />
          </div>
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={addSubtitleField}
        >
          + Add Subtitle
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full" type="submit">
          Publish Blog
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4 text-center">📝 Blog List</h2>
      <div className="space-y-4">
        {blogs.map(blog => (
          <div key={blog._id} className="bg-white p-4 rounded shadow relative">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <div className="relative group">
                <button><MoreHorizontal /></button>
                <div className="absolute right-0 top-6 hidden group-hover:block bg-white shadow-md rounded border w-28 z-10">
                  <button onClick={() => handleDelete(blog._id!)} className="w-full text-left px-4 py-2 hover:bg-gray-100">Delete</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
                </div>
              </div>
            </div>
            <p className="text-gray-700 whitespace-pre-line mt-2">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;