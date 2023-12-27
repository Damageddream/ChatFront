
import '../index.css'


export default function ChatPage() {
  return (
    <div key="1" className="flex h-full w-full bg-white dark:bg-black">
      <aside className="flex flex-col w-80 border-r dark:border-gray-500">
        <h1 className="text-3xl font-bold p-4 dark:text-white">Active Users</h1>
        <div className="flex-grow">
          <ul className="space-y-2 p-4">
            <li className="flex items-center space-x-2">
              <img src="/placeholder.svg?height=40&width=40" />
              {/* <Badge status="online" /> */}
              <p className="text-lg dark:text-white">User One</p>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/placeholder.svg?height=40&width=40" />
              {/* <Badge status="offline" /> */}
              <p className="text-lg dark:text-white">User Two</p>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/placeholder.svg?height=40&width=40" />
              {/* <Badge status="online" /> */}
              <p className="text-lg dark:text-white">User Three</p>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex flex-col flex-grow">
        <div className="flex-grow p-4">
          <p className="text-black dark:text-white">User One: Hello!</p>
          <p className="text-black dark:text-white">User Two: Hi, how are you?</p>
          <p className="text-black dark:text-white">User One: I'm great, thanks. You?</p>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-gray-200 dark:bg-gray-700 fixed bottom-0 w-full">
          <input className="flex-grow" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </main>
    </div>
  )
}

