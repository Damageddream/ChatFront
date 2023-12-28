/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hyAGunWQdMf
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardHeader, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between h-20 w-full px-4 md:px-6">
        <h1 className="text-xl font-bold">Chat Menu</h1>
        <div className="flex items-center">
          <img
            alt="User Avatar"
            className="rounded-full h-10 w-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <p className="ml-2">Username</p>
        </div>
      </header>
      <main className="flex flex-row-reverse md:flex-row items-start md:items-center md:space-x-6 space-y-6 md:space-y-0 p-4">
        <div className="flex flex-col items-center md:w-1/2">
          <Button className="w-full max-w-md" variant="outline">
            Create a Public Chat
          </Button>
          <Button className="w-full max-w-md" variant="outline">
            Create a Private Chat
          </Button>
          <form className="w-full max-w-md">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input className="pl-10" placeholder="Search for public chats..." type="search" />
            </div>
          </form>
        </div>
        <aside className="md:w-1/3">
          <div className="w-full max-w-md bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Active Public Chats</h2>
            <ul>
              <li className="mb-2">
                <Card>
                  <CardHeader>Chat 1</CardHeader>
                </Card>
              </li>
              <li className="mb-2">
                <Card>
                  <CardHeader>Chat 2</CardHeader>
                </Card>
              </li>
              <li className="mb-2">
                <Card>
                  <CardHeader>Chat 3</CardHeader>
                </Card>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
