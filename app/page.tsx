import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nihar Patel
      </h1>
      <p className="mb-4">
        {`Hello, I am Nihar! passionate about Linux system configuration,
         DevOps and AWS, with a focus on efficient workflows and scalable solutions.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
