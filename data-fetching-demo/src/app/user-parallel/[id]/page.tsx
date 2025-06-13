type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

const getUserPosts = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  return response.json();
};

const getUserAlbums = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );

  //   console.log(await response.json());
  return response.json();
};

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [userPosts, userAlbums] = await Promise.all([
    getUserPosts(id),
    getUserAlbums(id),
  ]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1>User Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>

          <div className="space-y-4">
            {userPosts.map((post: Post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold leading-tight text-gray-800 mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Albums</h2>

          <div className="space-y-4">
            {userAlbums.map((album: Album) => (
              <div key={album.id} className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700">{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
