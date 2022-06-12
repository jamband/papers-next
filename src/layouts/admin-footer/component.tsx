import { IconLightBulb } from "../../icons/light-bulb";

export const Component: React.FC = () => (
  <footer className="flex items-center justify-center bg-gray-800 p-3 font-bold text-amber-500">
    <div className="mr-1">
      <IconLightBulb />
    </div>
    Currently logged in as an administrator
  </footer>
);
