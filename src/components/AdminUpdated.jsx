import React, { useMemo, useState } from "react";

const postsData = [
  {
    id: 1,
    title: "Building Better Habits for a Productive Life",
    excerpt: "Small changes, big results. Here are...",
    category: "Lifestyle",
    status: "Published",
    author: "Admin",
    updated: "Sep 8, 2026",
    time: "3:24 PM",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=200&q=80",
  },
  {
    id: 2,
    title: "Top 10 Travel Destinations for 2026",
    excerpt: "From serene beaches to bustling cities,...",
    category: "Travel",
    status: "Published",
    author: "Admin",
    updated: "Sep 6, 2026",
    time: "11:12 AM",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=200&q=80",
  },
  {
    id: 3,
    title: "Getting Started with React and TypeScript",
    excerpt: "A step-by-step guide to building...",
    category: "Tech",
    status: "Published",
    author: "Admin",
    updated: "Sep 4, 2026",
    time: "9:45 AM",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80",
  },
  {
    id: 4,
    title: "How to Make Your Home More Organized",
    excerpt: "Simple decluttering tips for a calmer...",
    category: "Lifestyle",
    status: "Draft",
    author: "Admin",
    updated: "Sep 3, 2026",
    time: "5:20 PM",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=200&q=80",
  },
  {
    id: 5,
    title: "5 Smart Ways to Grow Your Money",
    excerpt: "Building wealth doesn't have to be hard...",
    category: "Finance",
    status: "Published",
    author: "Admin",
    updated: "Aug 28, 2026",
    time: "2:16 PM",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=200&q=80",
  },
  {
    id: 6,
    title: "The Best Tools for Web Developers in 2026",
    excerpt: "Boost your productivity with these...",
    category: "Tech",
    status: "Published",
    author: "Admin",
    updated: "Aug 25, 2026",
    time: "10:02 AM",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&q=80",
  },
];

const SidebarIcon = ({ children }) => (
  <span className="w-5 h-5 flex items-center justify-center">{children}</span>
);

const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m4 20 4.5-1 10.9-10.9a2.12 2.12 0 0 0-3-3L5.5 16 4 20Z"
    />
    <path strokeLinecap="round" strokeWidth="2" d="m14 6 3 3" />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
    />
    <circle cx="12" cy="12" r="2.5" strokeWidth="2" />
  </svg>
);

const MoreIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="5" cy="12" r="1.7" />
    <circle cx="12" cy="12" r="1.7" />
    <circle cx="19" cy="12" r="1.7" />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeWidth="2" d="M12 5v14M5 12h14" />
  </svg>
);

const ChevronDown = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m6 9 6 6 6-6"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const BlogAdmin = () => {
  const [activePage, setActivePage] = useState("Posts");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Posts");
  const [sortBy, setSortBy] = useState("Newest first");
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredPosts = useMemo(() => {
    let posts = [...postsData];

    if (search.trim()) {
      const value = search.toLowerCase();

      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(value) ||
          post.category.toLowerCase().includes(value) ||
          post.excerpt.toLowerCase().includes(value)
      );
    }

    if (statusFilter !== "All Posts") {
      posts = posts.filter((post) => post.status === statusFilter);
    }

    if (sortBy === "Oldest first") {
      posts.reverse();
    }

    return posts;
  }, [search, statusFilter, sortBy]);

  const togglePost = (id) => {
    setSelectedPosts((current) =>
      current.includes(id)
        ? current.filter((postId) => postId !== id)
        : [...current, id]
    );
  };

  const toggleAll = () => {
    if (selectedPosts.length === filteredPosts.length) {
      setSelectedPosts([]);
    } else {
      setSelectedPosts(filteredPosts.map((post) => post.id));
    }
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: (
        <SidebarIcon>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-9Z"
            />
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d="M9 21v-6h6v6"
            />
          </svg>
        </SidebarIcon>
      ),
    },
    {
      name: "Posts",
      icon: (
        <SidebarIcon>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3h10l4 4v14H5V3Z"
            />
            <path strokeWidth="2" strokeLinecap="round" d="M9 12h6M9 16h6M9 8h2" />
          </svg>
        </SidebarIcon>
      ),
    },
    {
      name: "Categories",
      icon: (
        <SidebarIcon>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20 13-7 7-10-10V4h6l10 9Z"
            />
            <circle cx="8" cy="8" r="1" fill="currentColor" />
          </svg>
        </SidebarIcon>
      ),
    },
    {
      name: "Comments",
      icon: (
        <SidebarIcon>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-4-.9L4 20l1.3-3.5A7.2 7.2 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5a7.5 7.5 0 0 1 8 7Z"
            />
          </svg>
        </SidebarIcon>
      ),
    },
    {
      name: "Users",
      icon: (
        <SidebarIcon>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="8" r="3" strokeWidth="2" />
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d="M5 20c.7-4 2.9-6 7-6s6.3 2 7 6"
            />
          </svg>
        </SidebarIcon>
      ),
    },
    {
      name: "Settings",
      icon: (
        <SidebarIcon>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            />
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 13.5v-3l-2-.7a7.5 7.5 0 0 0-.8-1.8l.9-1.9-2.1-2.1-1.9.9a7.5 7.5 0 0 0-1.8-.8L10.5 2h3l.7 2.1c.6.2 1.2.5 1.8.8l1.9-.9 2.1 2.1-.9 1.9c.3.6.6 1.2.8 1.8l2.1.7v3l-2.1.7a7.5 7.5 0 0 1-.8 1.8l.9 1.9-2.1 2.1-1.9-.9a7.5 7.5 0 0 1-1.8.8l-.7 2.1h-3l-.7-2.1a7.5 7.5 0 0 1-1.8-.8l-1.9.9-2.1-2.1.9-1.9a7.5 7.5 0 0 1-.8-1.8L2 13.5v-3l2.1-.7c.2-.6.5-1.2.8-1.8L4 6.1 6.1 4l1.9.9c.6-.3 1.2-.6 1.8-.8L10.5 2"
            />
          </svg>
        </SidebarIcon>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-[252px]
          bg-[#111b2e] text-white
          transform transition-transform duration-300
          lg:translate-x-0
          ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="h-20 px-6 flex items-center gap-3">
          <div className="text-indigo-400">
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3h10l4 4v14H5V3Z"
              />
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                d="M9 8h5M9 12h6M9 16h4"
              />
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                d="m17 3 4 4"
              />
            </svg>
          </div>

          <h1 className="text-xl font-bold tracking-tight">
            Blog<span className="text-indigo-400">Admin</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="px-3 mt-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`
                w-full flex items-center gap-4 px-4 py-3 rounded-lg
                text-sm font-medium transition
                ${
                  activePage === item.name
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-7 left-6 flex items-center gap-3 text-slate-400 text-xs">
          <span className="text-indigo-400">◈</span>
          Built for great content
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* ================= MAIN ================= */}
      <main className="lg:ml-[252px] min-h-screen">

        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center px-5 lg:px-7 gap-4">

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-2 text-slate-600"
          >
            <MenuIcon />
          </button>

          {/* Search */}
          <div className="relative max-w-[505px] w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon />
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search posts, titles, or tags..."
              className="
                w-full h-11 rounded-xl bg-slate-100
                pl-12 pr-4 outline-none
                text-sm text-slate-700
                placeholder:text-slate-400
                focus:ring-2 focus:ring-indigo-200
              "
            />
          </div>

          <div className="ml-auto flex items-center gap-5">

            {/* Notification */}
            <button className="relative text-slate-500 hover:text-slate-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"
                />
              </svg>

              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                A
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  Admin
                </p>
                <p className="text-xs text-slate-400">
                  Administrator
                </p>
              </div>

              <ChevronDown />
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <div className="p-5 lg:p-7">

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">

            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Blog Posts
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage, create, and update your blog posts.
              </p>
            </div>

            <button
              onClick={() => alert("Create new post")}
              className="
                inline-flex items-center justify-center gap-2
                bg-indigo-500 hover:bg-indigo-600
                text-white font-semibold text-sm
                px-5 py-3 rounded-lg
                transition shadow-lg shadow-indigo-500/20
              "
            >
              <PlusIcon />
              New Post
            </button>
          </div>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

            <StatCard
              icon="document"
              number="12"
              label="Total Posts"
              bg="bg-blue-50"
              iconBg="bg-blue-100"
              iconColor="text-blue-500"
            />

            <StatCard
              icon="eye"
              number="8"
              label="Published"
              bg="bg-emerald-50"
              iconBg="bg-emerald-100"
              iconColor="text-emerald-500"
            />

            <StatCard
              icon="clock"
              number="2"
              label="Drafts"
              bg="bg-amber-50"
              iconBg="bg-amber-100"
              iconColor="text-amber-500"
            />

            <StatCard
              icon="trash"
              number="2"
              label="Archived"
              bg="bg-red-50"
              iconBg="bg-red-100"
              iconColor="text-red-500"
            />
          </div>

          {/* ================= TWO COLUMNS ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_304px] gap-6">

            {/* ================= POSTS ================= */}
            <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">

              {/* Filters */}
              <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-3">

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="
                    h-10 border border-slate-200 rounded-lg
                    px-3 text-sm bg-white outline-none
                    focus:ring-2 focus:ring-indigo-100
                  "
                >
                  <option>All Posts</option>
                  <option>Published</option>
                  <option>Draft</option>
                </select>

                <div className="relative flex-1 max-w-sm">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <SearchIcon />
                  </span>

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search posts..."
                    className="
                      w-full h-10 border border-slate-200
                      rounded-lg pl-10 pr-3 text-sm outline-none
                      focus:ring-2 focus:ring-indigo-100
                    "
                  />
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="
                    md:ml-auto h-10 border border-slate-200
                    rounded-lg px-3 text-sm bg-white outline-none
                  "
                >
                  <option>Newest first</option>
                  <option>Oldest first</option>
                </select>
              </div>

              {/* Desktop table */}
              <div className="hidden lg:block overflow-x-auto">

                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-100 text-left">
                      <th className="px-4 py-4 w-10">
                        <input
                          type="checkbox"
                          checked={
                            filteredPosts.length > 0 &&
                            selectedPosts.length === filteredPosts.length
                          }
                          onChange={toggleAll}
                          className="accent-indigo-500"
                        />
                      </th>

                      <th className="px-2 py-4 text-xs font-semibold text-slate-500">
                        Title
                      </th>

                      <th className="px-3 py-4 text-xs font-semibold text-slate-500">
                        Category
                      </th>

                      <th className="px-3 py-4 text-xs font-semibold text-slate-500">
                        Status
                      </th>

                      <th className="px-3 py-4 text-xs font-semibold text-slate-500">
                        Author
                      </th>

                      <th className="px-3 py-4 text-xs font-semibold text-slate-500">
                        Updated
                      </th>

                      <th className="px-3 py-4 text-xs font-semibold text-slate-500">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredPosts.map((post) => (
                      <PostRow
                        key={post.id}
                        post={post}
                        selected={selectedPosts.includes(post.id)}
                        onSelect={() => togglePost(post.id)}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile / Tablet cards */}
              <div className="lg:hidden divide-y divide-slate-100">
                {filteredPosts.map((post) => (
                  <MobilePostCard
                    key={post.id}
                    post={post}
                    selected={selectedPosts.includes(post.id)}
                    onSelect={() => togglePost(post.id)}
                  />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="py-16 text-center">
                  <p className="font-semibold text-slate-700">
                    No posts found
                  </p>

                  <p className="text-sm text-slate-400 mt-1">
                    Try changing your search or filter.
                  </p>
                </div>
              )}

              {/* Pagination */}
              <div className="px-5 py-4 border-t border-slate-100 flex justify-end gap-2">

                <button className="w-9 h-9 rounded-lg border border-slate-200 text-slate-400">
                  ‹
                </button>

                <button className="w-9 h-9 rounded-lg bg-indigo-500 text-white font-medium">
                  1
                </button>

                <button className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600">
                  2
                </button>

                <button className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600">
                  ›
                </button>

              </div>
            </section>

            {/* ================= RIGHT SIDEBAR ================= */}
            <div className="space-y-5">

              {/* Quick Actions */}
              <section className="bg-white rounded-xl border border-slate-200 p-5">

                <h3 className="font-bold text-slate-800 mb-5">
                  Quick Actions
                </h3>

                <QuickAction
                  icon="plus"
                  title="Create New Post"
                  description="Write and publish a new post"
                />

                <QuickAction
                  icon="tag"
                  title="Manage Categories"
                  description="Organize your content"
                />

                <QuickAction
                  icon="comment"
                  title="View Comments"
                  description="Moderate reader comments"
                />

                <QuickAction
                  icon="settings"
                  title="Settings"
                  description="Configure blog settings"
                />
              </section>

              {/* Recent Activity */}
              <section className="bg-white rounded-xl border border-slate-200 p-5">

                <h3 className="font-bold text-slate-800 mb-6">
                  Recent Activity
                </h3>

                <div className="space-y-6">

                  <Activity
                    color="bg-cyan-500"
                    title="New post published"
                    text="Getting Started with React..."
                    time="2h ago"
                  />

                  <Activity
                    color="bg-amber-500"
                    title="Post updated"
                    text="Building Better Habits..."
                    time="5h ago"
                  />

                  <Activity
                    color="bg-emerald-500"
                    title="Comment approved"
                    text="Great article! Very helpful."
                    time="8h ago"
                  />

                  <Activity
                    color="bg-cyan-500"
                    title="New post created"
                    text="Top 10 Travel Destinations..."
                    time="1d ago"
                  />

                  <Activity
                    color="bg-amber-500"
                    title="Post moved to draft"
                    text="How to Make Your Home..."
                    time="1d ago"
                  />

                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


/* ============================================================
   STAT CARD
============================================================ */

const StatCard = ({
  icon,
  number,
  label,
  bg,
  iconBg,
  iconColor,
}) => {
  const icons = {
    document: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 3h9l3 3v15H6V3Z"
        />
        <path strokeWidth="2" strokeLinecap="round" d="M9 11h6M9 15h6M9 7h2" />
      </svg>
    ),

    eye: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth="2"
          d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
        />
        <circle cx="12" cy="12" r="2.5" strokeWidth="2" />
      </svg>
    ),

    clock: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
        <path strokeWidth="2" strokeLinecap="round" d="M12 7v5l3 2" />
      </svg>
    ),

    trash: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth="2"
          strokeLinecap="round"
          d="M5 7h14M10 11v6M14 11v6M8 7l1-3h6l1 3M7 7l1 14h8l1-14"
        />
      </svg>
    ),
  };

  return (
    <div className={`${bg} border border-slate-200 rounded-xl p-4 flex items-center gap-4`}>

      <div
        className={`
          w-11 h-11 rounded-full flex items-center
          justify-center ${iconBg} ${iconColor}
        `}
      >
        {icons[icon]}
      </div>

      <div>
        <p className="text-2xl font-bold text-slate-800">
          {number}
        </p>

        <p className="text-sm text-slate-500">
          {label}
        </p>
      </div>
    </div>
  );
};


/* ============================================================
   POST ROW
============================================================ */

const PostRow = ({ post, selected, onSelect }) => {
  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70">

      <td className="px-4 py-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          className="accent-indigo-500"
        />
      </td>

      <td className="px-2 py-4 min-w-[300px]">
        <div className="flex items-center gap-3">

          <img
            src={post.image}
            alt=""
            className="w-16 h-12 rounded-lg object-cover"
          />

          <div>
            <h4 className="font-semibold text-sm text-slate-800 max-w-[220px]">
              {post.title}
            </h4>

            <p className="text-xs text-slate-400 mt-1">
              {post.excerpt}
            </p>
          </div>

        </div>
      </td>

      <td className="px-3 py-4">
        <CategoryBadge category={post.category} />
      </td>

      <td className="px-3 py-4">
        <StatusBadge status={post.status} />
      </td>

      <td className="px-3 py-4">
        <div className="flex items-center gap-2">

          <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center text-xs font-semibold">
            A
          </span>

          <span className="text-sm text-slate-600">
            {post.author}
          </span>
        </div>
      </td>

      <td className="px-3 py-4 min-w-[110px]">
        <p className="text-xs text-slate-500">
          {post.updated}
        </p>

        <p className="text-xs text-slate-400 mt-1">
          {post.time}
        </p>
      </td>

      <td className="px-3 py-4">
        <div className="flex items-center gap-3">

          <button
            title="Edit"
            className="text-slate-600 hover:text-indigo-500"
          >
            <EditIcon />
          </button>

          <button
            title="Preview"
            className="text-slate-600 hover:text-indigo-500"
          >
            <EyeIcon />
          </button>

          <button
            title="More"
            className="text-slate-500 hover:text-slate-800"
          >
            <MoreIcon />
          </button>

        </div>
      </td>
    </tr>
  );
};


/* ============================================================
   MOBILE POST CARD
============================================================ */

const MobilePostCard = ({ post, selected, onSelect }) => {
  return (
    <div className="p-4">

      <div className="flex gap-3">

        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          className="mt-1 accent-indigo-500"
        />

        <img
          src={post.image}
          alt=""
          className="w-20 h-16 rounded-lg object-cover"
        />

        <div className="flex-1">

          <h4 className="font-semibold text-sm text-slate-800">
            {post.title}
          </h4>

          <p className="text-xs text-slate-400 mt-1">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            <CategoryBadge category={post.category} />
            <StatusBadge status={post.status} />
          </div>

        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pl-7">

        <div>
          <p className="text-xs text-slate-500">
            Updated {post.updated}
          </p>

          <p className="text-xs text-slate-400">
            {post.author}
          </p>
        </div>

        <div className="flex gap-3">
          <button className="text-slate-600">
            <EditIcon />
          </button>

          <button className="text-slate-600">
            <EyeIcon />
          </button>

          <button className="text-slate-500">
            <MoreIcon />
          </button>
        </div>

      </div>
    </div>
  );
};


/* ============================================================
   CATEGORY BADGE
============================================================ */

const CategoryBadge = ({ category }) => {
  const styles = {
    Lifestyle: "bg-purple-50 text-purple-600",
    Travel: "bg-blue-50 text-blue-600",
    Tech: "bg-cyan-50 text-cyan-600",
    Finance: "bg-emerald-50 text-emerald-600",
  };

  return (
    <span
      className={`
        inline-flex px-3 py-1 rounded-full
        text-xs font-medium
        ${styles[category] || "bg-slate-100 text-slate-600"}
      `}
    >
      {category}
    </span>
  );
};


/* ============================================================
   STATUS BADGE
============================================================ */

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`
        inline-flex px-3 py-1 rounded-full
        text-xs font-medium
        ${
          status === "Published"
            ? "bg-emerald-50 text-emerald-600"
            : "bg-amber-50 text-amber-600"
        }
      `}
    >
      {status}
    </span>
  );
};


/* ============================================================
   QUICK ACTION
============================================================ */

const QuickAction = ({ icon, title, description }) => {
  const icons = {
    plus: <PlusIcon />,

    tag: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m20 13-7 7-10-10V4h6l10 9Z"
        />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
      </svg>
    ),

    comment: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth="2"
          strokeLinecap="round"
          d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-4-.9L4 20l1.3-3.5A7.2 7.2 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5a7.5 7.5 0 0 1 8 7Z"
        />
      </svg>
    ),

    settings: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
        <path
          strokeWidth="2"
          strokeLinecap="round"
          d="M19 12a7 7 0 0 0-.3-2l2-1.2-2-3.5-2.1 1a7 7 0 0 0-3.5-2L13 2h-4l-.1 2.3a7 7 0 0 0-3.5 2l-2.1-1-2 3.5 2 1.2a7 7 0 0 0 0 4l-2 1.2 2 3.5 2.1-1a7 7 0 0 0 3.5 2L9 22h4l.1-2.3a7 7 0 0 0 3.5-2l2.1 1 2-3.5-2-1.2c.2-.6.3-1.3.3-2Z"
        />
      </svg>
    ),
  };

  return (
    <button className="w-full flex items-center gap-4 text-left mb-5 last:mb-0 group">

      <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-100 transition">
        {icons[icon]}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700">
          {title}
        </p>

        <p className="text-xs text-slate-400 mt-1">
          {description}
        </p>
      </div>

    </button>
  );
};


/* ============================================================
   ACTIVITY
============================================================ */

const Activity = ({ color, title, text, time }) => {
  return (
    <div className="relative pl-5">

      <span
        className={`
          absolute left-0 top-1.5
          w-2 h-2 rounded-full ${color}
        `}
      />

      <div className="flex justify-between gap-3">

        <div>
          <p className="text-sm font-medium text-slate-700">
            {title}
          </p>

          <p className="text-xs text-slate-400 mt-1">
            {text}
          </p>
        </div>

        <span className="text-xs text-slate-400 whitespace-nowrap">
          {time}
        </span>

      </div>
    </div>
  );
};

export default BlogAdmin;