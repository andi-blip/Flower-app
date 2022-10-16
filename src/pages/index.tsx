import loadable from "@loadable/component";
import { timeout } from "promise-timeout";
import { PAGE_LOAD_TIMEOUT } from "config/global";

const PageLoader = () => <div>Loading...</div>;

export const HomePage = loadable(() => timeout(import("./HomePage"), 3000), {
    fallback: <PageLoader />,
});
