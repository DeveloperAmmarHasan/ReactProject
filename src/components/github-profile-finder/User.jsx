const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="p-6 rounded-2xl border border-gray-200 shadow-md flex items-center flex-col bg-white">
      {/* Avatar */}
      <div>
        <img
          src={avatar_url}
          alt={login}
          className="h-[150px] w-[150px] rounded-full shadow-md border-2 border-gray-200"
        />
      </div>

      {/* Name + Join Date */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 mt-5 w-full">
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noreferrer"
          className="text-2xl font-semibold text-cyan-600 hover:underline"
        >
          {name ?? login}
        </a>
        <p className="text-sm text-gray-500">
          Joined{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-6 w-full text-center">
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Repos</p>
          <p className="text-xl font-bold">{public_repos}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Followers</p>
          <p className="text-xl font-bold">{followers}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500">Following</p>
          <p className="text-xl font-bold">{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
