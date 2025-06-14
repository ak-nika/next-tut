import { auth, currentUser } from "@clerk/nextjs/server";

const DashboardPage = async () => {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log(authObj, userObj);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
