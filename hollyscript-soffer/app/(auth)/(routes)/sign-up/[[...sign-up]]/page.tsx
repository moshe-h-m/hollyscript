import { SignUp} from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="p-4 bg-blue-500">
      <SignUp />
    </div>
  );
}