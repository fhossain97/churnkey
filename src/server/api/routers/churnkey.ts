import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const churnkeyRouter = createTRPCRouter({
  triggerCancelFlow: publicProcedure.mutation(async () => {
    const customerId = String(process.env.NEXT_PUBLIC_CHURNKEY_CUSTOMER_ID);
    const res = await fetch(String(process.env.NEXT_API_URL), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId,
      }),
    });

    if (!res.ok) {
      console.error("Failed to fetch user_hash");
      return;
    }

    const { userHash } = (await res.json()) as {
      userHash: string;
    };

    return userHash;
  }),
});
