import { SWRConfig } from "swr";
import { http } from "~/utils/http";

type Props = {
  children: React.ReactNode;
};

export const SWRConfigProvider: React.VFC<Props> = (props: Props) => {
  const fetcher = async (url: string) => {
    const res = await http(url);
    if (res.status === 200) return await res.json();
    if (res.status === 204) return null;
    throw await res.json();
  };

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        // onError: (error, key) => {
        // https://swr.vercel.app/docs/error-handling#global-error-report
        // },
      }}
    >
      {props.children}
    </SWRConfig>
  );
};
