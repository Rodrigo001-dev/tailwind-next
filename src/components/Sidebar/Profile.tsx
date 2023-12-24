import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="mt-1 grid grid-cols-profile items-center gap-3 pb-2">
      <img
        src="https://github.com/Rodrigo001-dev.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Rodrigo Rael
        </span>
        <span className="truncate text-sm text-zinc-500">
          rodrigorael53@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
