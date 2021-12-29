const posts = [
  {
    title: 'Disruptive Innovation: The Fuel that Powers Growth',
    href: 'https://drawingcapital.substack.com/p/disruptive-innovation-the-fuel-that',
    category: { name: 'Newsletter', href: '#' },
    description:
      'In this newsletter we review the innovation-fueled paradigm shift taking place in financial markets and its impact across market sectors.',
    date: 'Sept 25, 2020',
    datetime: '2020-09-25',
    imageUrl:
      'https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9a74bb00-d07b-46b2-bb2d-6558f54f842e_1600x1067.jpeg',
    readingTime: '4 min',
  },
  {
    title: 'US and Chinese Big Tech',
    href: 'https://drawingcapital.substack.com/p/us-and-chinese-big-tech',
    category: { name: 'Newsletter', href: '#' },
    description:
      'This week, we compare and contrast tech-centric companies between the US and China to understand their differences and similarities.',
    date: 'Sept 18, 2020',
    datetime: '2020-09-18',
    imageUrl:
      'https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F916f5e23-5d6a-4a23-94d9-6dfa6ad81d79_1701x816.png',
    readingTime: '7 min',
  },
  {
    title: 'Artificial Intelligence for Medical Imaging',
    href: 'https://drawingcapital.substack.com/p/artificial-intelligence-for-medical',
    category: { name: 'Newsletter', href: '#' },
    description:
      'This week, we delve into artificial intelligence (“AI”), its promising uses for medical imaging, and catalysts for improving healthcare.',
    date: 'Sept 11, 2020',
    datetime: '2020-09-11',
    imageUrl:
      'https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9ad72a67-fb49-401f-a14e-f104d094dbe4_1520x820.png',
    readingTime: '5 min',
  },
  {
    title: 'Key Trends for Tesla',
    href: 'https://drawingcapital.substack.com/p/key-trends-for-tesla',
    category: { name: 'Newsletter', href: '#' },
    description:
      'Today’s topic will focus on understanding Tesla’s key trends and business model.',
    date: 'Sept 10, 2020',
    datetime: '2020-09-10',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0035/2990/0150/products/57_d7c80c3d-15a6-4790-b8e8-6b4650461e14_grande.jpg?v=1571709971',
    readingTime: '6 min',
  },
  {
    title: 'A Look Into the Future with Neural Engineering',
    href: 'https://drawingcapital.substack.com/p/a-look-into-the-future-with-neural',
    category: { name: 'Newsletter', href: '#' },
    description:
      'On August 28, 2020, Neuralink presented a really exciting live webcast of their most recent update. They showcased a few advancements in a rapidly growing sub-field within biomedical engineering called “neural engineering”. Let’s take a deeper dive into what went on.',
    date: 'Sept 4, 2020',
    datetime: '2020-09-04',
    imageUrl:
      'https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9842f15d-26cc-4c92-87ab-1ab0dba7c873_1160x649.png',
    readingTime: '5 min',
  },
  {
    title: 'An Introduction to Cloud Computing',
    href: 'https://drawingcapital.substack.com/p/an-introduction-to-cloud-computing',
    category: { name: 'Newsletter', href: '#' },
    description:
      'This week, we explore the technology landscape, the current state of cloud computing, and a range of insights and trends related to the cloud computing space.',
    date: 'Aug 28, 2020',
    datetime: '2020-08-28',
    imageUrl:
      'https://images.unsplash.com/photo-1509803874385-db7c23652552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    readingTime: '6 min',
  },
]

export default function Posts() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recent Publications</h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="Post Image" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-sky-700">
                    <a href={post.category.href}>
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
