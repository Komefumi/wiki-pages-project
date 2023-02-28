import { useRef } from "react";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@server/routers";
import { useEffect } from "react";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});

export default function HomePage() {
  const mountHandledRef = useRef<boolean>(false);
  useEffect(() => {
    if (mountHandledRef.current === true) return;

    (async () => {
      const result = await client.greeting.query({ name: "Kyle" });
      console.log(result);
      // await client.errors.query().catch((e) => console.error(e));

      const users = await Promise.all([
        client.users.byId.query("1"),
        client.users.byId.query("2"),
        client.users.byId.query("3"),
        client.users.byId.query("4"),
        client.users.byId.query("5"),
        client.users.byId.query("6"),
      ]);

      console.log(users);
    })();

    mountHandledRef.current = true;
  }, [mountHandledRef.current]);

  return <div>Starting Page</div>;
}
