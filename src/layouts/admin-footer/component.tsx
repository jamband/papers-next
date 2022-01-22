import { IconLightBulb } from "~/icons/light-bulb";

export const Component: React.VFC = () => (
  <footer className="p-3 flex items-center justify-center font-bold text-amber-500 bg-gray-800">
    <div className="mr-1">
      <IconLightBulb />
    </div>
    Currently logged in as an administrator
  </footer>
);
