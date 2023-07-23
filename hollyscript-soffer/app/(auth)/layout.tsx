export default function AuthLayout({
  children,
}: {
  children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center h-full p-4 bg-blue-500">
        {children}
        </div>
    )
  }