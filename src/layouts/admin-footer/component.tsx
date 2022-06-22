import { IconLightBulb } from "../../icons/light-bulb";

export const Component: React.FC = () => (
  <footer className="flex items-center justify-center bg-gray-700 py-4 font-bold text-amber-500">
    <IconLightBulb className="mr-0.5 h-4 w-4 align-[-0.125em]" />
    Currently logged in as an administrator
  </footer>
);
