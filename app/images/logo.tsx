import Link from "next/link"

export function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="hover:opacity-90 transition-opacity">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-600 bg-gradient-to-br from-white to-gray-100 shadow-md cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="text-red-600 text-2xl absolute -top-4 left-1/2 -translate-x-1/2">⚽</div>
              <div className="text-red-600 font-bold text-[10px] text-center mt-2">
                BEDSTE
                <br />
                <span className="text-[11px] font-extrabold">BETTING</span>
                <br />
                SIDER
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
