"use server";

import { Roles } from "@/types/globals";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const setRole = async (formData: FormData) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const client = await clerkClient();
  const id = formData.get("id") as string;
  const role = formData.get("role") as Roles;

  try {
    await client.users.updateUser(id, { publicMetadata: { role } });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
};

export const removeRole = async (formData: FormData) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Not Authorized");
  }

  const client = await clerkClient();
  const id = formData.get("id") as string;

  try {
    await client.users.updateUser(id, {
      publicMetadata: { role: null },
    });

    revalidatePath("/admin");
  } catch {
    throw new Error("Failed to remove role");
  }
};
