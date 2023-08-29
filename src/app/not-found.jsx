import Link from 'next/link'


function NotFound() {
  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center text-white'>

    <div className='text-center'>
        <h1 className='text-4xl font-bold'>
            404 | Not Found
        </h1>
        <Link href="/" className='text-slate-400 text-2xl mt-5'>
            Go back
        </Link>
    </div>

    </section>
  )
}

export default NotFound